import { BiStar } from "react-icons/bi";
import Slider from "react-slick";
import { FaChevronDown, FaRegStar, FaMapMarkerAlt   } from "react-icons/fa";
import { MdOutlineDriveFolderUpload } from "react-icons/md";

const Restaurant = () => {
  const settingTrendding = {
    slidesToShow: 3,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="d-none">
        <div className="bg-primary p-3 d-flex align-items-center">
          <a className="toggle togglew toggle-2" href="#">
            <span></span>
          </a>
          <h4 className="font-weight-bold m-0 text-white">Đơn hàng</h4>
        </div>
      </div>
      <div className="offer-section py-4">
        <div className="container position-relative">
          <img alt="#" src="img/trending1.png" className="restaurant-pic" />
          <div className="pt-3 text-white">
            <h2 className="font-weight-bold">Đơn hàng</h2>
            <p className="text-white m-0">Địa chỉ</p>
            <div className="rating-wrap d-flex align-items-center mt-2">
              <ul className="rating-stars list-unstyled">
                <li>
                  <i className="feather-star text-warning"></i>
                  <BiStar className="text-warning" />
                  <BiStar className="text-warning" />
                  <BiStar className="text-warning" />
                  <BiStar className="text-warning" />
                  <BiStar />
                </li>
              </ul>
              <p className="label-rating text-white ml-2 small">
                (245 Reviews)
              </p>
            </div>
          </div>
          <div className="pb-4">
            <div className="row">
              <div className="col-6 col-md-2">
                <p className="text-white-50 font-weight-bold m-0 small">
                Vận chuyển
                </p>
                <p className="text-white m-0">Miễn phí</p>
              </div>
              <div className="col-6 col-md-2">
                <p className="text-white-50 font-weight-bold m-0 small">
                  Giờ mở cửa
                </p>
                <p className="text-white m-0">8:00 AM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="p-3 bg-primary mt-n3 rounded position-relative">
          <div className="d-flex align-items-center">
            <div className="feather_icon">
              <a
                href="#ratings-and-reviews"
                className="text-decoration-none text-dark"
              >
                <i className="p-2 bg-light rounded-circle">
                <MdOutlineDriveFolderUpload/>
                </i>
              </a>
              <a
                href="#ratings-and-reviews"
                className="text-decoration-none text-dark mx-2"
              >
                <i className="p-2 bg-light rounded-circle">
                <FaRegStar />
                </i>
              </a>
              <a
                href="#ratings-and-reviews"
                className="text-decoration-none text-dark"
              >
                <i className="p-2 bg-light rounded-circle">
                <FaMapMarkerAlt />
                </i>
              </a>
            </div>
            <a
              href="contact"
              className="btn btn-sm btn-outline-light ml-auto"
            >
              Liên hệ
            </a>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="">
          <p className="font-weight-bold pt-4 m-0">MẶT HÀNG NỔI BẬT</p>
          <div className="trending-slider rounded">
            <Slider {...settingTrendding}>
              <div className="osahan-slider-item">
                <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                  <div className="list-card-image">
                    <a href="checkout.html">
                      <img
                        alt="#"
                        src="img/trending1.png"
                        className="img-fluid item-img w-100"
                      />
                    </a>
                  </div>
                  <div className="p-3 position-relative">
                    <div className="list-card-body">
                      <h6 className="mb-1">
                        <a href="checkout" className="text-black">
                          Món ăn
                        </a>
                      </h6>
                      <p className="text-gray mb-3">
                        Loại
                      </p>
                      <p className="text-gray m-0">
                        <span className="text-black-50"> 250.000 VND</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="osahan-slider-item">
                <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                  <div className="list-card-image">
                    <a href="checkout.html">
                      <img
                        alt="#"
                        src="img/trending2.png"
                        className="img-fluid item-img w-100"
                      />
                    </a>
                  </div>
                  <div className="p-3 position-relative">
                    <div className="list-card-body">
                      <h6 className="mb-1">
                        <a href="checkout.html" className="text-black">
                          Món ăn
                        </a>
                      </h6>
                      <p className="text-gray mb-3">
                        Loại
                      </p>
                      <p className="text-gray m-0">
                        <span className="text-black-50"> Giá tiền</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="osahan-slider-item">
                <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                  <div className="list-card-image">
                    <a href="checkout.html">
                      <img
                        alt="#"
                        src="img/trending3.png"
                        className="img-fluid item-img w-100"
                      />
                    </a>
                  </div>
                  <div className="p-3 position-relative">
                    <div className="list-card-body">
                      <h6 className="mb-1">
                        <a href="checkout.html" className="text-black">
                          Món ăn
                        </a>
                      </h6>
                      <p className="text-gray mb-3">
                        Loại
                      </p>
                      <p className="text-gray m-0">
                        <span className="text-black-50"> Giá tiền</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="osahan-slider-item">
                <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                  <div className="list-card-image">
                    <a href="checkout.html">
                      <img
                        alt="#"
                        src="img/trending2.png"
                        className="img-fluid item-img w-100"
                      />
                    </a>
                  </div>
                  <div className="p-3 position-relative">
                    <div className="list-card-body">
                      <h6 className="mb-1">
                        <a href="checkout.html" className="text-black">
                          Món ăn
                        </a>
                      </h6>
                      <p className="text-gray mb-3">
                        Loại
                      </p>
                      <p className="text-gray m-0">
                        <span className="text-black-50">Giá tiền</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>

      <div className="order-details-section py-4">
      <div className="container">
        <div className="row">
          {/* Food Item Image and Details */}
          <div className="col-md-6">

            <div id="basicsAccordion">
            <div className="box border-bottom bg-white mb-2 rounded shadow-sm overflow-hidden">
                <div id="basicsHeadingOne">
                 <h5 className="mb-0">
                <button
                  className="shadow-none btn btn-block d-flex justify-content-between card-btn p-3 collapsed"
                  data-toggle="collapse"
                  data-target="#basicsCollapseOne"
                  aria-expanded="false"
                  aria-controls="basicsCollapseOne"
                >
                  Mô tả sản phẩm
                  <span className="card-btn-arrow">
                  <FaChevronDown />
                  </span>
                </button>
              </h5>
            </div>
            <div
              id="basicsCollapseOne"
              className="collapse show"
              aria-labelledby="basicsHeadingOne"
              data-parent="#basicsAccordion"
            >
              <div className="card-body border-top p-3 text-muted">
                Thông tin
              </div>
            </div>
          </div>
          <div className="box border-bottom bg-white mb-2 rounded shadow-sm overflow-hidden">
            <div id="basicsHeadingTwo">
              <h5 className="mb-0">
                <button
                  className="shadow-none btn btn-block d-flex justify-content-between card-btn p-3 collapsed"
                  data-toggle="collapse"
                  data-target="#basicsCollapseTwo"
                  aria-expanded="false"
                  aria-controls="basicsCollapseTwo"
                >
                  Thông tin thành phần
                  <span className="card-btn-arrow">
                  <FaChevronDown />
                  </span>
                </button>
              </h5>
            </div>
            <div
              id="basicsCollapseTwo"
              className="collapse"
              aria-labelledby="basicsHeadingTwo"
              data-parent="#basicsAccordion"
            >
              <div className="card-body border-top p-3 text-muted">
                1234
              </div>
            </div>
          </div>
          <div className="box border-bottom bg-white mb-2 rounded shadow-sm overflow-hidden">
            <div id="basicsHeadingThree">
              <h5 className="mb-0">
                <button
                  className="shadow-none btn btn-block d-flex justify-content-between card-btn p-3 collapsed"
                  data-toggle="collapse"
                  data-target="#basicsCollapseThree"
                  aria-expanded="false"
                  aria-controls="basicsCollapseThree"
                >
                  1234
                  <span className="card-btn-arrow">
                  <FaChevronDown />
                  </span>
                </button>
              </h5>
            </div>
            <div
              id="basicsCollapseThree"
              className="collapse"
              aria-labelledby="basicsHeadingThree"
              data-parent="#basicsAccordion"
            >
              <div className="card-body border-top p-3 text-muted">
                1234
              </div>
            </div>
          </div>
          <div className="box border-bottom bg-white mb-2 rounded shadow-sm overflow-hidden">
            <div id="basicsHeadingFour">
              <h5 className="mb-0">
                <button
                  className="shadow-none btn btn-block d-flex justify-content-between card-btn collapsed p-3"
                  data-toggle="collapse"
                  data-target="#basicsCollapseFour"
                  aria-expanded="false"
                  aria-controls="basicsCollapseFour"
                >
                  1234
                  <span className="card-btn-arrow">
                  <FaChevronDown />
                  </span>
                </button>
              </h5>
            </div>
            <div
              id="basicsCollapseFour"
              className="collapse"
              aria-labelledby="basicsHeadingFour"
              data-parent="#basicsAccordion"
            >
              <div className="card-body border-top p-3 text-muted">
               1234
              </div>
            </div>
          </div>
        </div>
          </div>
          
          {/* Order Information */}
          <div className="col-md-6">
            <div className="card">
              <div className="card-header bg-primary text-white">
                <h4 className="m-0">Order Details</h4>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <p className="font-weight-bold">Số lượng:</p>
                  <input
                    type="number"
                    className="form-control"
                    defaultValue="1"
                    min="1"
                  />
                </div>
                <div className="mb-3">
                  <p className="font-weight-bold">Giá tiền:</p>
                  <p className="text-success font-weight-bold">150,000 VNĐ</p>
                </div>
                <div className="mb-3">
                  <p className="font-weight-bold">Tổng cộng:</p>
                  <p className="text-danger font-weight-bold">150,000 VNĐ</p>
                </div>
                <button className="btn btn-success btn-block btn-lg">
                  Thanh toán
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Restaurant;
