import bitcore from "../../utils/core";

function HdAddress() {
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
      <div className="tab-pane tab-content" id="newHDaddress">
        <h2>
          New HD Address <small>making bip32 even easier</small>
        </h2>
        <p>
          Use the form below to generate a <i>master</i> hierarchical
          deterministic address.
        </p>

        <label>xPub Address</label>
        <div className="input-group">
          <input
            id="newHDxpub"
            type="text"
            className="form-control"
            value=""
            readOnly
          />
          <span className="input-group-btn">
            <button className="deriveHDbtn btn btn-default" type="button">
              <span
                title="Derive from key"
                className="glyphicon glyphicon-chevron-right"
              ></span>
            </button>
          </span>
        </div>

        <label>xPrv Address</label>
        <div className="input-group">
          <input
            id="newHDxprv"
            type="text"
            className="form-control"
            value=""
            readOnly
          />
          <span className="input-group-btn">
            <button className="deriveHDbtn btn btn-default" type="button">
              <span
                title="Derive from key"
                className="glyphicon glyphicon-chevron-right"
              ></span>
            </button>
          </span>
        </div>

        <h3>Address Options</h3>
        <p>
          You can use the advanced options below to generate different kinds of
          master addresses.
        </p>

        <div className="checkbox">
          <label>
            <input
              type="checkbox"
              id="newHDBrainwallet"
              className="checkbox-inline"
            />{" "}
            Custom Seed or Brain Wallet
          </label>
          <input type="text" className="form-control hidden" id="HDBrainwallet" />
        </div>

        <input
          type="button"
          className="btn btn-primary"
          value="Generate"
          id="newHDKeysBtn"
        />
      </div>
    </>
  );
}

export default HdAddress;
