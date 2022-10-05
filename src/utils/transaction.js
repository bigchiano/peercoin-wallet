import bitcore, { PrivateKey, Script, Transaction } from "bitcore-lib";
import { isValidAddress } from "./addresses";

bitcore.Networks.defaultNetwork = bitcore.Networks.get("peercoin-testnet");

export const getUtxos = async (addr) => {
  const url = "https://tblockbook.peercoin.net";

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

  return { address, utxos: res };
};

export const genTransaction = (utxos, toAddr, amount) => {
  const tx = new Transaction()
    .from(utxos)
    .to(toAddr, Number((amount * 1000000).toFixed(6)))
    .change(toAddr);
  return { tx: tx.toString(), size: tx._estimateSize() };
};
