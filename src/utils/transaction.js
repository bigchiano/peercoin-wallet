import { Transaction } from "bitcore-lib";

export const getUtxos = async (addr) => {
  const url = "https://tblockbook.peercoin.net";

  const req = await fetch(url + "/api/utxo/" + addr);
  const res = await req.json();
  return res;
};

export const genTransaction = (utxos, toAddr, amount) => {
  const tx = new Transaction()
    .from(utxos)
    .to(toAddr, Number((amount * 1000000).toFixed(6)))
    .change(toAddr);
  return tx.toString();
};
