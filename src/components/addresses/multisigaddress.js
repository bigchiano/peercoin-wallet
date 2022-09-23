import bitcore from "../../utils/core";

function MultiSigAddress() {
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

  const onOpenLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <div className="tab-pane tab-content" id="newMultiSig">
        <h2>
          New Multisig Address <small>Secure multisig address</small>
        </h2>
        <div className="row">
          <div className="col-md-8">
            <p>
              Public keys can be{" "}
              <a href="#newAddress">generated in your browser</a> or from your
              wallet.
            </p>
            <p>
              Enter the public keys of all the participants, to create a{" "}
              <a
                href="https://en.bitcoin.it/wiki/Address#Multi-signature_addresses"
                target="_blank"
                rel="noreferrer"
              >
                multi signature address
              </a>
              . Maximum of 15 allowed. Compressed and uncompressed public keys
              are accepted.
            </p>
          </div>
          <div className="col-md-3">
            <p className="alert alert-info">
              <span className="glyphicon glyphicon-info-sign"></span>{" "}
              <a href="!#" data-toggle="modal" data-target="#modalMediator">
                <abbr>Need a Mediator?</abbr>
              </a>
            </p>
          </div>

          <div className="col-md-1"></div>
        </div>
        <div id="multisigPubKeys">
          <table
            style={{
              width: "100%",
              borderCollapse: "separate",
              borderSpacing: "0 1em",
            }}
          >
            <thead>
              <tr>
                <td></td>
                <td className="col-xs-7">
                  <label>Public key</label>
                </td>
                <td className="col-xs-4">
                  <label>
                    Identity{" "}
                    <span className="text-muted">
                      (if{" "}
                      <a
                        href="!#"
                        onClick={() => onOpenLink("/known-pubkeys.js")}
                        target="_blank"
                        rel="noreferrer"
                      >
                        known
                      </a>
                      )
                    </span>
                  </label>
                </td>
                <td></td>
              </tr>
            </thead>
            <tbody className="list sort">
              <tr className="item" style={{ width: "100%" }}>
                <td>
                  <a href="!#" className="handle">
                    <span className="glyphicon glyphicon-move"></span>
                  </a>
                </td>
                <td className="col-sm-7">
                  <input type="text" className="form-control pubkey" />
                </td>
                <td className="col-sm-4">
                  <input type="text" className="form-control id" readOnly />
                </td>
                <td>
                  <a href="!#" className="pubkeyAdd">
                    <span className="glyphicon glyphicon-plus"></span>
                  </a>
                  <a href="!#" className="pubkeyRemove">
                    <span className="glyphicon glyphicon-minus"></span>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Enter the amount of signatures required to release the coins</p>
        <div className="row">
          <div className="col-xs-3">
            <select id="releaseCoins" className="form-control">
              <option>1</option>
              <option defaultValue>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
              <option>13</option>
              <option>14</option>
              <option>15</option>
            </select>
          </div>
        </div>
        <br />
        <div
          id="multiSigErrorMsg"
          className="alert alert-danger"
          style={{ display: "none" }}
        ></div>
        <div className="alert alert-success hidden" id="multiSigData">
          <label>Address</label>
          <p>Payment should be made to this address:</p>
          <div className="row">
            <div className="col-lg-6">
              <div className="input-group">
                <input
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
            </div>
          </div>
          <label>Redeem Script</label>
          <p>
            This script should be{" "}
            <i>
              saved and should be shared with all the participants before a
              payment is made
            </i>
            , so they may validate the authenticity of the address, it will also
            be used later to release the coins.
          </p>
          <textarea
            className="form-control script"
            style={{ height: "160px" }}
            readOnly
          ></textarea>
          <label>Shareable URL</label>
          <input type="text" className="scriptUrl form-control" readOnly />
        </div>
        <input
          type="button"
          className="btn btn-primary"
          value="Submit"
          id="newMultiSigAddress"
        />
        Or
        <button
          className="btn btn-info"
          type="button"
          id="newMultiSigAddressSort"
        >
          <span>Sort by pubkey</span>
        </button>
        <br />
      </div>
    </>
  );
}

export default MultiSigAddress;
