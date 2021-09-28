import "./navbar.css";
//stateless functional component

const Navbar = (props) => {
  return (
    <div className="navbar-outer">
      <h3>Navbar</h3>
      <span className="badge badge-pill badge-secondary m-2">
        {props.totalItems}
      </span>
    </div>
  );
};

export default Navbar;
