import { Link, Outlet } from "react-router-dom";
const Root = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100vw" }}>
      {
        <nav>
          <Link to="/">Home</Link>
        </nav>
      }
      <Outlet />
    </div>
  );
};

export default Root;
