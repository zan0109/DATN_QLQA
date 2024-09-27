import { Link } from "react-router-dom";

function Menu() {
  return (
    <aside className="menu-sidebar2 ">
      <div className="logo bg-dark">
        <Link to="#">
          <img src="images/icon/logo-white.png" alt="Cool Admin" />
        </Link>
      </div>
      <div className="menu-sidebar2__content js-scrollbar1 ">
        <div className="account2">
          <div className="image img-cir img-120">
            <img src="images/icon/avatar-big-01.jpg" alt="John Doe" />
          </div>
          <h4 className="name">john doe</h4>
          <Link to="#">Sign out</Link>
        </div>
        <nav className="navbar-sidebar2">
          <ul className="list-unstyled navbar__list">
            <li className=" has-sub">
              <Link className="js-arrow" to="/Thongke">
                <i className="fas fa-tachometer-alt"></i>Bảng thống kê
              </Link>
            </li>
            <li className="has-sub">
              <Link className="js-arrow" to="/QlDonHang">
                <i className="fas fa-shopping-basket"></i>Đơn hàng
                <span className="inbox-num">2</span>
              </Link>
            </li>
            <li className="has-sub">
              <Link className="js-arrow" to="/DanhGia">
                <i className="fas fa-comment-alt"></i>Đánh giá
                <span className="inbox-num">3</span>
              </Link>
            </li>
            <li className="has-sub">
              <Link className="js-arrow" to="/QLDanhMuc">
                <i className="fas fa-list"></i>Quan ly Danh Muc
              </Link>
            </li>
            <li className="has-sub">
              <Link className="js-arrow" to="/QLDonHang">
                <i className="fas fa-shopping-cart"></i>Quan ly DonHang
              </Link>
            </li>
            <li className="has-sub">
              <Link className="js-arrow" to="/QLKhachhang">
                <i className="fas fa-users"></i>Quan ly Khach Hang
              </Link>
            </li>
            <li className="has-sub">
              <Link className="js-arrow" to="/QLNhanVien">
                <i className="far fa-check-square"></i>Quan ly NhanVien
              </Link>
            </li>
            <li className="has-sub">
              <Link className="js-arrow" to="/QLSanPham">
                <i className="fas fa-table"></i>Quan ly San Pham
              </Link>
            </li>
            <li className="has-sub">
              <Link className="js-arrow" to="/QLTaiKhoan">
                <i className="fas fa-map-marker-alt"></i>Quan ly Tai Khoan
              </Link>
            </li>

           
                <li>
                  <Link to="/ThemSanPham">
                    <i className="fas fa-sign-in-alt"></i>Thêm sản phẩm
                  </Link>
                </li>
                <li>
                  <Link to="/ThemNhanVien">
                    <i className="fas fa-user"></i>Thêm nhân viên
                  </Link>
                </li>
                <li>
                  <Link to="/ThemDanhMuc">
                    <i className="fas fa-unlock-alt"></i>Thêm danh mục
                  </Link>
                </li>
            
            <li className="has-sub">
              <a className="js-arrow" >
                <i className="fas fa-copy"></i>Pages
                <span className="arrow">
                  <i className="fas fa-angle-down"></i>
                </span>
              </a>
              <ul className="list-unstyled navbar__sub-list js-sub-list">
                <li>
                  <Link to="login.html">
                    <i className="fas fa-sign-in-alt"></i>Login
                  </Link>
                </li>
                <li>
                  <Link to="register.html">
                    <i className="fas fa-user"></i>Register
                  </Link>
                </li>
                <li>
                  <Link to="forget-pass.html">
                    <i className="fas fa-unlock-alt"></i>Forget Password
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default Menu;
