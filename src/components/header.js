function Header() {
  return (
    <div id="header" className="navbar navbar-default " role="navigation">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a href="/" className="navbar-brand" id="homeBtn">
            Cointoolkit
          </a>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li className="dropdown">
              <a
                href="/address"
                className="dropdown-toggle"
                data-toggle="dropdown"
              >
                <span className="glyphicon glyphicon-plus"></span> New
                <b className="caret"></b>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="/address" data-toggle="tab">
                    Address
                  </a>
                </li>
                <li>
                  <a href="#newSegWit" data-toggle="tab">
                    SegWit Address
                  </a>
                </li>
                <li>
                  <a href="#newMultiSig" data-toggle="tab">
                    MultiSig Address
                  </a>
                </li>
                <li>
                  <a href="#newTimeLocked" data-toggle="tab">
                    Time Locked Address
                  </a>
                </li>
                <li>
                  <a href="#newHDaddress" data-toggle="tab">
                    HD Address
                  </a>
                </li>
                <li className="divider"></li>
                <li>
                  <a href="#newTransaction" data-toggle="tab">
                    Transaction
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#verify" data-toggle="tab">
                <span className="glyphicon glyphicon-ok"></span> Verify
              </a>
            </li>
            <li>
              <a href="#sign" data-toggle="tab">
                <span className="glyphicon glyphicon-pencil"></span> Sign
              </a>
            </li>
            <li>
              <a href="#broadcast" data-toggle="tab">
                <span className="glyphicon glyphicon-globe"></span> Broadcast
              </a>
            </li>
            <li className="hidden">
              <a href="#wallet" data-toggle="tab">
                <span className="glyphicon glyphicon-briefcase"></span> Wallet
              </a>
            </li>
            <li>
              <a href="#about" data-toggle="tab">
                <span className="glyphicon glyphicon-info-sign"></span> About
              </a>
            </li>

            <li>
              <a href="#settings" data-toggle="tab">
                <span className="glyphicon glyphicon-cog"></span> Settings
              </a>
            </li>
          </ul>
          <ul className="nav navbar-right">
            <li>
              <div
                style={{
                  paddingTop: "15px",
                  paddingBottom: "15px",
                  lineHeight: "20px",
                }}
              >
                <span>Change mode</span> :<select id="coinSelector"></select>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
