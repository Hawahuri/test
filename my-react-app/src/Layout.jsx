// Layout.jsx
import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <>
      
      <nav style={{ padding: "10px", background: "#222",position: "fixed",top:0,left:0,right:0,} }>
        <Link to="/" style={{ color: "white", marginRight: "10px" }}>
          Home
        </Link>
        <Link to="/about" style={{ color: "white", marginRight: "10px" }}>
          About
        </Link>
        <Link to="/contact" style={{ color: "white" }}>
          Contact
        </Link>
      </nav>

      
      <main style={{ minHeight: "80vh", padding: "20px" }}>
        <Outlet />
      </main>

   
      <footer style={{ padding: "10px", background: "#000000ff", textAlign: "center",bottom:0,position:"fixed",left:0,right:0}}>
        © 2025 My Website
      </footer>
    </>
  );
}

export default Layout;