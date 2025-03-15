import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="d-flex flex-column vh-100">
      {/* Navbar */}
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold" to="/">
            📚 Book Store
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/book">
                  📖 Danh sách sách
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/book/add">
                  ➕ Thêm sách
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  📝 Đăng ký
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  🔐 Đăng nhập
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Nội dung chính */}
      <div className="d-flex flex-grow-1">
        {/* Sidebar */}
        <aside className="bg-dark text-light p-3" style={{ width: "250px" }}>
          <h5>📚 Menu</h5>
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link className="nav-link text-light" to="/book">
                📖 Danh sách sách
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/book/add">
                ➕ Thêm sách
              </Link>
            </li>
          </ul>
        </aside>

        {/* Nội dung trang */}
        <main className="flex-grow-1 p-4 bg-light">
          <Outlet />
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-light text-center p-3">
        <div className="container-fluid">
          <p className="mb-1">📚 Book Store - Nơi tri thức tỏa sáng</p>
          <p className="mb-0">
            &copy; 2025 <Link to="/" className="text-light fw-bold">Book Store</Link>. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
