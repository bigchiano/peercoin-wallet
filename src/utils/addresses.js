import {
  Address,
  HDPrivateKey,
  PrivateKey,
  PublicKey,
  Script,
} from "bitcore-lib";
import bitcore from "./core";

export const genAddressKeys = () => {
  const privateKey = new PrivateKey();
  const privateKeyWif = privateKey.toWIF();
  const publicKey = privateKey.toPublicKey();

  return {
    address: publicKey.toAddress().toString(),
    publicKey: publicKey.toString(),
    privateKeyWif: privateKeyWif.toString(),
    privateKeyHex: privateKey.toString(),
  };
};

export const genHDAddress = (seed = "") => {
  const value = Buffer.from(seed);
  const hash = bitcore.crypto.Hash.sha256(value);
  const hdPrivateKey = seed
    ? new HDPrivateKey.fromSeed(hash)
    : new HDPrivateKey();

  return {
    publicAddress: hdPrivateKey.xpubkey,
    privateKey: hdPrivateKey.xprivkey,
  };
};

export const genMultiSigAddress = (pubs, requiredSigCount) => {
  const address = new Address(pubs, Number(requiredSigCount));
  const redeemScript = new Script.buildMultisigOut(
    pubs,
    Number(requiredSigCount)
  );

  return {
    address: address.toString(),
    redeemScript: redeemScript.toHex(),
  };
};

export const genSegWitAddr = (seed = "", bech32 = false) => {
  const value = Buffer.from(seed);
  const hash = bitcore.crypto.Hash.sha256(value);
  const bn = bitcore.crypto.BN.fromBuffer(hash);

  const privateKey = seed ? new PrivateKey(bn) : new PrivateKey();
  const publicKey = privateKey.toPublicKey();

  // bech32 ==> witnesspubkeyhash
  // hash ==> scripthash
  const type = bech32 ? "witnesspubkeyhash" : "scripthash";
  const address = new Address(publicKey, bitcore.Networks.peercoin, type);
  const scriptBuild = new Script.fromAddress(address);
  const redeemScript = scriptBuild.toHex().slice(4);

  return {
    segWitAddress: address.toString(),
    privateKeyWif: privateKey.toWIF().toString(),
    publicKey: publicKey.toString(),
    redeemScript,
  };
};

export const isValidAddress = (addr) => {
  try {
    PublicKey(addr);
    return true;
  } catch (error) {}
  return false;
};
