import { FaSquarePlus } from "react-icons/fa6";


const NavBar = () => {
  return (
    <nav className="navbar bg-body-tertiary py-50" style={{ padding: "20px" }}>
      <div className="container d-flex justify-content-around">
        <a className="navbar-brand" href="/">
          <h4 style={{ fontWeight: "bold" }}>Notey</h4>
        </a>
        <div className="d-flex">
          <div
            className="input-group input-group-sm"
            style={{ width: "500px", height: "40px" }}
          >
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </div>
          {/* <button className="btn btn-outline-primary btn-md" type="button">Add</button> */}
        </div>

        <a href="/add-notes"  style={{ textDecoration: "none" }}>
          <button
            className="btn btn-outline-primary btn-md"
            type="button"
           
          >
            <FaSquarePlus /> Add Notes
          </button>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;