function Transaction() {
  const onOpenLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div>
      <div class="tab-pane tab-content" id="newTransaction">
        <h2>
          New Transaction <small>Create a new transaction</small>
        </h2>
        <p>Use this page to create a raw transaction</p>
        <b>Address, WIF key or Multisig Redeem Script</b>:
        <div class="input-group">
          <span class="input-group-btn">
            <button
              class="btn btn-info qrcodeScanner"
              type="button"
              data-toggle="modal"
              data-target="#modalQrcodeScanner"
              forward-result="#redeemFrom"
            >
              <span class="glyphicon glyphicon-camera"></span>
            </button>
          </span>
          <input type="text" id="redeemFrom" class="form-control" value="" />
          <span class="input-group-btn">
            <button id="redeemFromBtn" class="btn btn-info" type="button">
              Load
            </button>
          </span>
        </div>
        <br />
        <div class="hidden alert alert-danger" id="redeemFromStatus"></div>
        <div class="hidden alert alert-info" id="redeemFromAddress"></div>
        <div>
          <a href="!#" id="optionsCollapse">
            <div class="well well-sm">
              <span
                class="glyphicon glyphicon-collapse-down"
                id="glyphcollapse"
              ></span>{" "}
              Advanced Options
            </div>
          </a>

          <div class="hidden" id="optionsAdvanced">
            <label>Clear Inputs</label>
            <p class="checkbox">
              <label>
                <input
                  type="checkbox"
                  id="clearInputsOnLoad"
                  class="checkbox-inline"
                  checked
                />{" "}
                Clear existing inputs when new inputs are loaded.
              </label>
            </p>
            <hr />
            <label>Null Data</label>{" "}
            <span class="text-muted text-normal">
              (80 byte limit, <i>40 bytes recommended</i>)
            </span>
            <p class="checkbox">
              <label>
                <input type="checkbox" id="opReturn" class="checkbox-inline" />{" "}
                Allow data to be sent within the transaction and stored in the
                blockchain by using{" "}
                <a
                  href="https://bitcoin.org/en/developer-guide#null-data"
                  target="_blank"
                  rel="noreferrer"
                >
                  OP_RETURN
                </a>
                .
              </label>
              <br />
              <label disabled>
                <input
                  type="checkbox"
                  id="opReturnText"
                  class="checkbox-inline"
                  disabled
                />{" "}
                As plain text{" "}
              </label>
              <div id="opReturnMessage" class="text-muted">
                When using this option you may enter a hex string or address
                into the address field on the output tab.
              </div>
              <div id="opReturnTextMessage" class="text-muted hidden">
                When using this option you may enter a plain text string into
                the address field on the output tab.
              </div>
            </p>
            <hr />
            <label>Lock Time</label>
            <p>
              The{" "}
              <a href="https://bitcoin.org/en/developer-guide#locktime-and-sequence-number">
                locktime
              </a>{" "}
              indicates the earliest time a transaction can be added to the
              block chain.
            </p>
            <input type="text" class="form-control" value="0" id="nLockTime" />
            <hr />
            <div id="txTimeOptional">
              <label>Extra time field</label>
              <p>Indicates the timestamp of a transaction.</p>
              <input type="text" class="form-control" value="0" id="nTime" />

              <hr />
            </div>
            <label>Network</label>
            <p>
              The <a href="#settings">settings</a> page can be used to select
              alternative networks of which you can retrieve your unspent
              outputs and broadcast a signed transaction into.
            </p>
            <hr />
          </div>
        </div>
        <ul class="nav nav-tabs" id="putTabs">
          <li class="active">
            <a href="#txoutputs" data-toggle="tab">
              Outputs{" "}
              <small>
                (<span id="totalOutput">0.00000000</span>)
              </small>
            </a>
          </li>
          <li>
            <a href="#txinputs" data-toggle="tab">
              Inputs{" "}
              <small>
                (<span id="totalInput">0.00000000</span>)
              </small>
            </a>
          </li>
        </ul>
        <br />
        <div class="tab-content">
          <div class="tab-pane fade in active" id="txoutputs">
            <p>Enter the address and amount you wish to make a payment to.</p>
            <div class="row">
              <div class="col-xs-4">
                <label>
                  <abbr title="Address to send to">Address</abbr>
                </label>
              </div>
              <div class="col-xs-2">
                <label>
                  <abbr title="Amount to send">Amount</abbr>
                </label>
              </div>
              <div class="col-xs-5">
                <label>
                  <abbr title="Receiver of the payment">
                    Identity{" "}
                    <span class="text-muted">
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
                  </abbr>
                </label>
              </div>
              <div class="col-xs-1"></div>
            </div>

            <div id="recipients">
              <div class="row recipient">
                <div class="col-xs-4">
                  <input
                    type="text"
                    class="form-control address"
                    placeholder=""
                  />
                </div>
                <div class="col-xs-2">
                  <input
                    type="text"
                    class="form-control amount"
                    placeholder="0.00"
                  />
                </div>
                <div class="col-xs-5">
                  <input type="text" class="form-control id" readOnly />
                </div>
                <div class="col-xs-1">
                  <a href="!#" class="addressAddTo">
                    <span class="glyphicon glyphicon-plus"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="tab-pane fade" id="txinputs">
            <p>Enter the details of inputs you wish to spend.</p>
            <div class="row">
              <div class="col-xs-5">
                <label>
                  <abbr title="Transaction ID">Transaction ID:</abbr>
                </label>
              </div>
              <div class="col-xs-1">
                <label>
                  <abbr title="Transaction Input Number">N</abbr>
                </label>
              </div>
              <div class="col-xs-3">
                <label>Script</label>
              </div>
              <div class="col-xs-2">
                <label>
                  <abbr title="This field is for accounting purposes only - the entire input will be spent!">
                    Amount
                  </abbr>
                </label>
              </div>
              <div class="col-xs-1"></div>
            </div>

            <div id="inputs">
              <div class="row inputs">
                <div class="col-xs-5">
                  <input type="text" class="form-control txId" placeholder="" />
                </div>
                <div class="col-xs-1">
                  <input
                    type="text"
                    class="form-control txIdN"
                    placeholder="0"
                  />
                </div>
                <div class="col-xs-3">
                  <input type="text" class="form-control txIdScript" />
                </div>
                <div class="col-xs-2">
                  <input
                    type="text"
                    class="form-control txIdAmount"
                    placeholder="0.00"
                  />
                </div>
                <div class="col-xs-1">
                  <a href="!#" class="txidAdd">
                    <span class="glyphicon glyphicon-plus"></span>
                  </a>
                  <a href="!#" class="txidRemove">
                    <span class="glyphicon glyphicon-minus"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col-xs-3">
            <label>
              <abbr title="What is not spent will be used as a transaction fee">
                Transaction Fee
              </abbr>
            </label>
            <input
              type="text"
              id="transactionFee"
              class="form-control"
              value="0.0000"
              readOnly
            />
          </div>
        </div>
        <br />
        <div
          id="transactionCreateStatus"
          class="alert alert-danger hidden"
        ></div>
        <div id="transactionCreate" class="alert alert-success hidden">
          <label>Transaction</label>
          <button
            class="qrcodeBtn btn btn-default"
            type="button"
            data-toggle="modal"
            data-target="#modalQrcode"
            style={{ float: "right" }}
          >
            <span class="glyphicon glyphicon-qrcode"></span>
          </button>

          <p>
            The transaction below has been generated and encoded. It can be
            broadcasted once it has been signed.
          </p>
          <br />
          <textarea
            class="form-control"
            style={{ height: "150px" }}
            readonly
          ></textarea>
          <div class="row">
            <div class="col-md-12">
              <p class="text-muted" style={{ float: "left" }}>
                Size: <span class="txSize">0</span> <i>bytes</i>
              </p>
              <div style={{ float: "right", marginTop: "10px" }}>
                If you are sure:
                <button class="btn btn-info transactionToVerify" type="button">
                  Continue to Verify
                  <span class="glyphicon glyphicon-pencil"></span>
                </button>
                Or
                <button class="btn btn-info transactionToSign" type="button">
                  Continue to Sign
                  <span class="glyphicon glyphicon-pencil"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <input
          type="button"
          value="Generate"
          class="btn btn-primary"
          id="transactionBtn"
        />
        <br />
      </div>
    </div>
  );
}

export default Transaction;
