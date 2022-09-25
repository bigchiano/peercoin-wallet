import {
  Address,
  HDPrivateKey,
  PrivateKey,
  PublicKey,
  Script
} from "bitcore-lib";

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

export const genHDAddress = (seed) => {
  const hdPrivateKey = new HDPrivateKey();
  return {
    publicAddress: hdPrivateKey.xpubkey,
    privateKey: hdPrivateKey.xprivkey,
  };
};

export const genMultiSigAddress = (pubs, requiredSigCount) => {
  const address = new Address(pubs, requiredSigCount);
  const redeemScript = new Script.buildMultisigOut(pubs, requiredSigCount);

  return {
    address: address.toString(),
    redeemScript: redeemScript.toHex(),
  };
};

export const isValidAddress = (addr) => {
  try {
    PublicKey(addr);
    return true;
  } catch (error) {}
  return false;
};
