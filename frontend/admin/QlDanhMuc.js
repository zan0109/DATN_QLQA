import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Menu from "./layout/Menu";
function QlDanhMuc() {
  return (
    <div class="page-wrapper">
      <Menu></Menu>

      <div class="page-container">
        <Header></Header>

        <div class="main-content">
          <div class="section__content section__content--p30">
            <div class="container-fluid">
              <div class="card">
                <div class="row">
                  <div class="col-md-12">
                    <div class="card-header">
                      <div class="overview-wrap">
                        <h2 class="title-5 m-b-35">Bảng danh mục</h2>
                        <a
                          class="au-btn au-btn-icon au-btn--green bg-dark"
                          href="/addpersonnel"
                        >
                          <i class="zmdi zmdi-plus"></i>Thêm danh mục
                        </a>
                      </div>
                    </div>
                    <div class="card-body">
                      <table class="table table-data2">
                        <thead>
                          <tr>
                            <th>Hình ảnh</th>
                            <th>Tên danh mục</th>
                            <th>Trạng thái</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="tr-shadow">
                            <td></td>
                            <td>Lori Lynch</td>

                            <td>
                              <span class="status--process">
                                Đang Hoạt Động{" "}
                              </span>
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                              <div class="table-data-feature">
                                <button
                                  class="item"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="Sửa"
                                >
                                  <i class="zmdi zmdi-edit"></i>
                                </button>
                                <button
                                  class="item"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="Xóa"
                                >
                                  <i class="zmdi zmdi-delete"></i>
                                </button>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="card-footer">
                      <Footer></Footer>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QlDanhMuc;
