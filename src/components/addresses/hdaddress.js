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
      <div class="tab-pane tab-content" id="newHDaddress">
        <h2>
          New HD Address <small>making bip32 even easier</small>
        </h2>
        <p>
          Use the form below to generate a <i>master</i> hierarchical
          deterministic address.
        </p>

        <label>xPub Address</label>
        <div class="input-group">
          <input
            id="newHDxpub"
            type="text"
            class="form-control"
            value=""
            readOnly
          />
          <span class="input-group-btn">
            <button class="deriveHDbtn btn btn-default" type="button">
              <span
                title="Derive from key"
                class="glyphicon glyphicon-chevron-right"
              ></span>
            </button>
          </span>
        </div>

        <label>xPrv Address</label>
        <div class="input-group">
          <input
            id="newHDxprv"
            type="text"
            class="form-control"
            value=""
            readOnly
          />
          <span class="input-group-btn">
            <button class="deriveHDbtn btn btn-default" type="button">
              <span
                title="Derive from key"
                class="glyphicon glyphicon-chevron-right"
              ></span>
            </button>
          </span>
        </div>

        <h3>Address Options</h3>
        <p>
          You can use the advanced options below to generate different kinds of
          master addresses.
        </p>

        <div class="checkbox">
          <label>
            <input
              type="checkbox"
              id="newHDBrainwallet"
              class="checkbox-inline"
            />{" "}
            Custom Seed or Brain Wallet
          </label>
          <input type="text" class="form-control hidden" id="HDBrainwallet" />
        </div>

        <input
          type="button"
          class="btn btn-primary"
          value="Generate"
          id="newHDKeysBtn"
        />
      </div>
    </>
  );
}

export default HdAddress;
