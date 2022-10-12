import bitcore, { PrivateKey, Script, Transaction } from "bitcore-lib";
import { genAddrScriptHash, isValidAddress } from "./addresses";

bitcore.Networks.defaultNetwork = bitcore.Networks.get("peercoin-testnet");
const url = "https://tblockbook.peercoin.net";

export const getUtxos = async (addr) => {
  let address = "";
  let valid = false;

  if (isValidAddress(addr)) {
    valid = true;
    address = addr;
  }

  if (!valid) {
    try {
      const priv = new PrivateKey(addr);
      if (isValidAddress(priv.toAddress())) {
        valid = true;
        address = priv.toAddress().toString();
      }
    } catch (error) {
      console.log(error);
    }
  }

  if (!valid) {
    try {
      const redeemScript = Script(addr);
      if (isValidAddress(redeemScript.toAddress())) {
        valid = true;
        address = redeemScript.toAddress().toString();
      }
    } catch (error) {}
  }

  if (!valid) return { address: "", utxos: "" };

  let res = "";
  try {
    const req = await fetch(url + "/api/utxo/" + address);
    res = await req.json();
  } catch (error) {
    console.log({ error });
  }

  const utxos = res.map((i) => {
    const utxo = {
      ...i,
      txId: i.txid,
      outputIndex: i.vout,
      address: addr,
      script: genAddrScriptHash(addr),
      satoshis: i.satoshis,
    };
    return utxo;
  });
  return { address, utxos };
};

export const genTransaction = (utxos, toAddr, amount, sender) => {
  const tx = new Transaction()
    .from(utxos)
    .to(toAddr, Number((amount * 1000000).toFixed(6)))
    .change(sender);
  return { tx: tx.toString(), size: tx._estimateSize() };
};

export const signTransaction = (txString, privKeyWif) => {
  const tx = new Transaction()
    .addData(new Buffer.from(txString))
    .sign(privKeyWif);
  return { tx: tx.toString(), size: tx._estimateSize() };
};

export const brodcastTransaction = async (signedTx) => {
  let res = "";
  try {
    const req = await fetch(url + "/api/sendtx/", {
      method: "post",
      body: signedTx,
    });
    res = (await req.json()).result;
  } catch (error) {
    console.log({ error });
  }

  return res;
};
