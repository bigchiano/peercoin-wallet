function BroadCast() {
  return (
    <div>
      <div className="tab-pane tab-content" id="broadcast">
        <h2>
          Broadcast Transaction <small>into the network</small>
        </h2>
        <a href="#settings" style={{float:"right"}}>
          <span className="glyphicon glyphicon-cog"></span>
        </a>
        <p>Enter your hex encoded transaction</p>
        <textarea
          className="form-control"
          style={{height:"125px"}}
          id="rawTransaction"
        ></textarea>
        <br />
        <div id="rawTransactionStatus" className="alert hidden"></div>
        <button
          id="rawSubmitBtn"
          className="btn btn-primary signedToBroadcast"
          type="button"
        >
          Broadcast
          <span className="glyphicon glyphicon-globe"></span>
        </button>
        <br />
      </div>
    </div>
  );
}

export default BroadCast;
