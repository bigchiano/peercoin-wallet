const bitcore = require("bitcore-lib");

// add peercoin network vars
bitcore.Networks.add({
  name: "peercoin",
  alias: "ppcoin",
  pubkeyhash: 0x37,
  privatekey: 0xb7,
  scripthash: 0x75,
  bech32prefix: "pc",
  xpubkey: 0x0488b21e,
  xprivkey: 0x0488ade4,
  networkMagic: 0xe6e8e9e5,
  port: 9901,
  dnsSeeds: ["seed.peercoin.net"],
});

bitcore.Networks.add({
  name: "peercoin-testnet",
  alias: "ppcoin-testnet",
  pubkeyhash: 0x6f,
  privatekey: 0xef,
  scripthash: 0xc4,
  bech32prefix: "tpc",
  xpubkey: 0x043587cf,
  xprivkey: 0x04358394,
  networkMagic: 0xcbf2c0ef,
  port: 9903,
  dnsSeeds: ["tseed.peercoin.net"],
});

// set peercoin as default network
bitcore.Networks.defaultNetwork = bitcore.Networks.get("peercoin");

export default bitcore;
