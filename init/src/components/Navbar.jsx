import { BiHome, BiMessage } from "react-icons/bi";
import { PiPhoneCall } from "react-icons/pi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav id="main-nav">
        <ul className="second-nav">
          <li>
            <Link to="home">
              <i className="feather-home mr-2"></i> Trang chủ
            </Link>
          </li>
          <li>
            <Link to="my_order">
              <i className="feather-list mr-2"></i> Đơn hàng của tôi
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="feather-edit-2 mr-2"></i> Đăng nhập
            </Link>
            <ul>
              <li>
                <Link to="login">Đăng nhập</Link>
              </li>
              <li>
                <Link to="signup">Đăng ký</Link>
              </li>
              <li>
                <Link to="forgot_password">Quên mật khẩu</Link>
              </li>
              <li>
                <Link to="verification">Xác thực</Link>
              </li>
              <li>
                <Link to="location">Địa chỉ</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="favorites">
              <i className="feather-heart mr-2"></i> Yêu thích
            </Link>
          </li>
          <li>
            <Link to="trending">
              <i className="feather-trending-up mr-2"></i> Xu hướng
            </Link>
          </li>
          <li>
            <Link to="most_popular">
              <i className="feather-award mr-2"></i> Phổ biến
            </Link>
          </li>
          <li>
            <Link to="restaurant">
              <i className="feather-paperclip mr-2"></i> Chi tiết
            </Link>
          </li>
          <li>
            <Link to="checkout">
              <i className="feather-list mr-2"></i> Thanh toán
            </Link>
          </li>
          <li>
            <Link to="successful">
              <i className="feather-check-circle mr-2"></i> Thành công
            </Link>
          </li>
          <li>
            <Link to="map">
              <i className="feather-map-pin mr-2"></i> Live Map
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="feather-user mr-2"></i> Người dùng
            </Link>
            <ul>
              <li>
                <Link to="profile">Tài khoản</Link>
              </li>
              <li>
                <Link to="favorites">Hỗ trợ giao hàng</Link>
              </li>
              <li>
                <Link to="contact">Liên hệ</Link>
              </li>
              <li>
                <Link to="terms">Điều khoản sử dụng</Link>
              </li>
              <li>
                <Link to="privacy">Chính sách bảo mật</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="#">
              <i className="feather-alert-triangle mr-2"></i> Lỗi
            </Link>
            <ul>
              <li>
                <Link to="not-found">Không tìm thấy</Link>
              </li>
              <li>
                <Link to="maintence"> Bảo trì</Link>
              </li>
              <li>
                <Link to="coming-soon">Đang phát triển</Link>
              </li>
            </ul>
          </li>
        </ul>
        <ul className="bottom-nav">
          <li className="email">
            <Link className="text-danger" to="home">
              <p className="h5 m-0">
                <BiHome />
              </p>
              Trang chủ
            </Link>
          </li>
          <li className="github">
            <Link to="faq">
              <p className="h5 m-0">
                <BiMessage />
              </p>
              Câu hỏi thường gặp
            </Link>
          </li>
          <li className="ko-fi">
            <Link to="contact">
              <p className="h5 m-0">
                <PiPhoneCall />
              </p>
              Trợ giúp
            </Link>
          </li>
        </ul>
      </nav>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Lọc</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body p-0">
              <div className="osahan-filter">
                <div className="filter">
                  <div className="p-3 bg-light border-bottom">
                    <h6 className="m-0">Sắp xếp</h6>
                  </div>
                  <div className="custom-control border-bottom px-0  custom-radio">
                    <input
                      type="radio"
                      id="customRadio1f"
                      name="location"
                      className="custom-control-input"
                      defaultChecked
                    />
                    <label className="custom-control-label py-3 w-100 px-3" htmlFor="customRadio1f">
                      Đánh giá
                    </label>
                  </div>
                  <div className="custom-control border-bottom px-0  custom-radio">
                    <input type="radio" id="customRadio2f" name="location" className="custom-control-input" />
                    <label className="custom-control-label py-3 w-100 px-3" htmlFor="customRadio2f">
                      Gần nhất
                    </label>
                  </div>
                  <div className="custom-control border-bottom px-0  custom-radio">
                    <input type="radio" id="customRadio3f" name="location" className="custom-control-input" />
                    <label className="custom-control-label py-3 w-100 px-3" htmlFor="customRadio3f">
                      Giá cao đến thấp
                    </label>
                  </div>
                  <div className="custom-control border-bottom px-0  custom-radio">
                    <input type="radio" id="customRadio4f" name="location" className="custom-control-input" />
                    <label className="custom-control-label py-3 w-100 px-3" htmlFor="customRadio4f">
                      Giá thấp đến cao
                    </label>
                  </div>
                  <div className="custom-control border-bottom px-0  custom-radio">
                    <input type="radio" id="customRadio5f" name="location" className="custom-control-input" />
                    <label className="custom-control-label py-3 w-100 px-3" htmlFor="customRadio5f">
                      Phổ biến nhất
                    </label>
                  </div>

                  <div className="p-3 bg-light border-bottom">
                    <h6 className="m-0">Lọc</h6>
                  </div>
                  <div className="custom-control border-bottom px-0  custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="defaultCheck1" defaultChecked />
                    <label className="custom-control-label py-3 w-100 px-3" htmlFor="defaultCheck1">
                      Mở ngay
                    </label>
                  </div>
                  <div className="custom-control border-bottom px-0  custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="defaultCheck2" />
                    <label className="custom-control-label py-3 w-100 px-3" htmlFor="defaultCheck2">
                      Credit Cards
                    </label>
                  </div>
                  <div className="custom-control border-bottom px-0  custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="defaultCheck3" />
                    <label className="custom-control-label py-3 w-100 px-3" htmlFor="defaultCheck3">
                      Tuân thủ các quy định
                    </label>
                  </div>

                  <div className="p-3 bg-light border-bottom">
                    <h6 className="m-0">Lọc thêm</h6>
                  </div>
                  <div className="px-3 pt-3">
                    <input type="range" className="custom-range" min="0" max="100" name="minmax" />
                    <div className="form-row">
                      <div className="form-group col-6">
                        <label>Thấp nhất</label>
                        <input className="form-control" placeholder="" type="number" />
                      </div>
                      <div className="form-group text-right col-6">
                        <label>Cao nhất</label>
                        <input className="form-control" placeholder="" type="number" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer p-0 border-0">
              <div className="col-6 m-0 p-0">
                <button type="button" className="btn border-top btn-lg btn-block" data-dismiss="modal">
                  Đóng
                </button>
              </div>
              <div className="col-6 m-0 p-0">
                <button type="button" className="btn btn-primary btn-lg btn-block">
                  Áp dụng
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
