import { Link, Outlet } from "react-router-dom";
const Root = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100vw" }}>
      {
        <nav>
          <Link to="/">Home</Link>
          <Link to="/builder/f29a7fbd-d3bb-4215-92d1-46209681b7fd">
            Survay 1
          </Link>
          <Link to="/builder/8e3cfb00-f15e-4408-89c9-9b7a9862304b">
            Survay 1
          </Link>
        </nav>
      }
      <Outlet />
    </div>
  );
};

export default Root;
