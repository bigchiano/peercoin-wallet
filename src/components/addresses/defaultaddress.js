import bitcore from "../../utils/core";

function GenerateAddress() {
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
      <div className="tab-pane tab-content" id="newAddress">
        <h2>Create new address</h2>
        <p>
          Any keys used you will need to manually store safely as they will be
          needed later to redeem the coins.
        </p>

        <label>
          <span id="newAddrType"></span> Address{" "}
        </label>
        <div className="input-group">
          <input
            id="newGeneratedAddress"
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
              <span className="glyphicon glyphicon-qrcode" />
            </button>
          </span>
        </div>
        <label>Public key</label>
        <input id="newPubKey" type="text" className="form-control" readOnly />
        <label>Private key (WIF key)</label>
        <div className="input-group">
          <input
            id="newPrivKeyWif"
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

        <div id="aes256wifkey" className="hidden">
          <label>AES-256 Encrypted WIF key</label>
          <input
            id="newPrivKeyEnc"
            type="text"
            className="form-control"
            value=""
            readOnly
          />
        </div>

        <label>Private key (hex)</label>
        <div className="input-group">
          <input
            id="newPrivKey"
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
              id="newCompressed"
              className="checkbox-inline"
              onChange={() => {}}
            />{" "}
            Compress <span className="text-muted">(recommended)</span>
          </label>
        </div>

        <div className="checkbox">
          <label>
            <input
              type="checkbox"
              id="newBrainwallet"
              className="checkbox-inline"
            />{" "}
            Custom Seed, Brain Wallet or 64 char hex private key
          </label>
          <div
            id="keyFromData"
            className="hidden"
            style={{ paddingLeft: "20px" }}
          >
            <input type="text" className="form-control" id="brainwallet" />
            <label>
              <input
                type="checkbox"
                id="brainwalletIsPrivKey"
                className="checkbox-inline"
              />{" "}
              This is a 64 char hex private key
            </label>
          </div>
        </div>
        <div className="checkbox">
          <label>
            <input
              type="checkbox"
              id="encryptKey"
              className="checkbox-inline"
            />{" "}
            Encrypt Private Key with AES-256 Password
          </label>
          <div id="aes256passform" className="row hidden">
            <div className="col-md-6">
              <input
                type="password"
                className="form-control"
                id="aes256pass"
                placeholder="Password"
              />
            </div>
            <div className="col-md-6">
              <input
                type="password"
                className="form-control"
                id="aes256pass_confirm"
                placeholder="Confirm Password"
              />
            </div>
          </div>

          <div id="aes256passStatus" className="row hidden">
            <div className="col-md-12">
              <br />
              <div className="alert alert-danger">
                {" "}
                <span className="glyphicon glyphicon-exclamation-sign"></span>{" "}
                Your passwords do not match, please try again!
              </div>
            </div>
          </div>
        </div>
        <div className="btn-group">
          <input
            type="button"
            className="btn btn-primary"
            value="Generate"
            id="newKeysBtn"
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
              <a href="!#" id="newPaperwalletBtn">
                Print
              </a>
            </li>
          </ul>
          <input
            type="button"
            className="btn btn-primary"
            value="FromLedger"
            id="ledgerKeysBtn"
          />
        </div>
        <br />
      </div>
    </>
  );
}

export default GenerateAddress;
