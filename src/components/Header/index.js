import { Link } from "react-router-dom";
import logo from "../../assets/imgs/logo.png";
function index() {
  return (
    <>
      <header className="d-flex align-items-center">
        <div className="container-fluid w-100">
          {/* Logo Wrapper */}
          <div className="row d-flex align-items-center">
            <div className="col-xs-3">
              <Link to={"/"}>
                <img src={logo} alt={"logo img"} className="logo" />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default index;
