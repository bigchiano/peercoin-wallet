import bitcore from "../../utils/core";

function SigWitAddress() {
  let address;
  let pubKey;
  let privKeyWif;
  let privKeyHex;

  //   console.log(bitcore.Networks.defaultNetwork);
  const privateKey = new bitcore.PrivateKey();
  //   privateKey.compressed = false
  const privateKeyWif = privateKey.toWIF();
  const publicKey = privateKey.toPublicKey();

  address = publicKey.toAddress().toString();
  pubKey = publicKey.toString();
  privKeyWif = privateKeyWif.toString();
  privKeyHex = privateKey.toString();

  console.log(privateKey);
  console.log({
    address,
    pubKey,
    privKeyWif,
    privKeyHex,
  });

  return (
    <>
      <div className="tab-pane tab-content" id="newSegWit">
        <h2>
          New SegWit Address <small> Smaller &amp; Faster Transactions</small>
        </h2>

        <p>
          Any keys used you will need to manually store safely as they will be
          needed later to redeem the bitcoins.
        </p>

        <label>SegWit Address (Share)</label>

        <div className="input-group">
          <input
            id="newSegWitAddress"
            type="text"
            className="form-control address"
            value=""
            readOnly
          />
          <span className="input-group-btn">
            <button
              className="qrcodeBtn btn btn-default"
              type="button"
              data-toggle="modal"
              data-target="#modalQrcode"
            >
              <span className="glyphicon glyphicon-qrcode"></span>
            </button>
          </span>
        </div>

        <label>RedeemScript</label>
        <input
          id="newSegWitRedeemScript"
          type="text"
          className="form-control"
          readOnly
        />

        <label>Public key</label>
        <input id="newSegWitPubKey" type="text" className="form-control" readOnly />

        <label>Private key (WIF key)</label>
        <div className="input-group">
          <input
            id="newSegWitPrivKey"
            type="password"
            className="form-control"
            value=""
            readOnly
          />
          <span className="input-group-btn">
            <button className="showKey btn btn-default" type="button">
              Show
            </button>
          </span>
        </div>

        <h3>Address Options</h3>
        <p>
          You can use the advanced options below to generate different kind of
          keys and addresses.
        </p>

        <div className="checkbox">
          <label>
            <input
              type="checkbox"
              id="newSegWitBech32addr"
              className="checkbox-inline"
              checked
              onChange={() => {}}
            />{" "}
            Enable{" "}
            <a href="https://en.bitcoin.it/wiki/Bech32" target="_blank" rel="noreferrer">
              Bech32
            </a>
            ?
          </label>
        </div>

        <div className="checkbox">
          <label>
            <input
              type="checkbox"
              id="newSegWitBrainwallet"
              className="checkbox-inline"
            />{" "}
            Custom Seed or Brain Wallet
          </label>
          <input
            type="text"
            className="form-control hidden"
            id="brainwalletSegWit"
          />
        </div>

        <div className="btn-group">
          <input
            type="button"
            className="btn btn-primary"
            value="Generate"
            id="newSegWitKeysBtn"
          />
          <button
            type="button"
            className="btn btn-primary dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span className="caret"></span>
            <span className="sr-only">Toggle Dropdown</span>
          </button>

          <ul className="dropdown-menu">
            <li>
              <a href="!#" id="newSegwitPaperwalletBtn">
                Print
              </a>
            </li>
          </ul>
        </div>
        <input
          type="button"
          className="btn btn-primary"
          value="FromLedger"
          id="ledgerKeysBtn"
        />
        <br />
      </div>
    </>
  );
}

export default SigWitAddress;
