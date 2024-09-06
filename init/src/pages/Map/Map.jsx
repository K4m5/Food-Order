import React from 'react';
import { IoIosHelpCircleOutline } from "react-icons/io";
import { FaRegClock, FaShoppingCart, FaList, FaRegStar   } from "react-icons/fa";
import { FiAlertCircle } from "react-icons/fi";
import { FaRegCircleCheck, FaTruckFast  } from "react-icons/fa6";


const Map = () => {
  return (
    <div className="osahan-map">
      <section className="section bg-white osahan-track-order-page position-relative">
        <iframe
          className="position-absolute"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7450.541753670395!2d105.79562539037852!3d20.98177624011233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135acc3ae37fc47%3A0x607ded9d4d1d1182!2zVHJp4buBdSBLaMO6YywgVMOibiBUcmnhu4F1LCBUaGFuaCBUcsOsLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1724691715961!5m2!1svi!2s"
          width="100%"
          height="676"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
        />
        <div className="container pt-5 pb-5">
          <div className="row d-flex align-items-center">
            <div className="col-md-6 text-center pb-4">
              <div className="osahan-point mx-auto"></div>
            </div>
            <div className="col-md-6">
              <div className="bg-white p-4 shadow-lg rounded mb-2">
                <div className="mb-2">
                  <small>
                    Đơn hàng 
                    <a className="float-right font-weight-bold d-flex align-items-center" href="#">
                    <IoIosHelpCircleOutline size={15} />
                    HELP
                    </a>
                  </small>
                </div>
                <h6 className="mb-1 mt-1">
                  <a href="restaurant.html" className="text-black">
                    Món ăn
                  </a>
                </h6>
                <p className="text-gray mb-0 d-flex align-items-center">
                <FaRegClock style={{marginRight: "5px"}} />
                11:19 PM | 8 Mặt hàng | Giá tiền
                </p>
              </div>
              <div className="bg-white p-4 shadow-lg rounded">
                <div className="osahan-track-order-detail po">
                  <h5 className="mt-0 mb-3">Chi tiết đơn hàng</h5>
                  <div className="row">
                    <div className="col-md-5">
                      <small>TỪ</small>
                      <h6 className="mb-1 mt-1">
                        <a href="restaurant" className="text-black d-flex align-items-center ">
                        <FaShoppingCart style={{marginRight: "5px"}} />
                        Món ăn
                        </a>
                      </h6>
                      <p className="text-gray mb-5">Địa chỉ</p>
                      <small>GIAO HÀNG ĐẾN</small>
                      <h6 className="mb-1 mt-1">
                        <span className="text-black">
                           Khác
                        </span>
                      </h6>
                      <p className="text-gray mb-0">
                       Địa chỉ
                      </p>
                    </div>
                    <div className="col-md-7">
                      <div className="mb-2">
                        <small>
                        <FaList style={{marginRight: "5px"}} />
                        5 Mặt hàng
                        </small>
                      </div>
                      {[
                        { name: "Món", price: "VND", type: "danger" },
                        { name: "Món", price: "VND", type: "success" },

                      ].map((item, index) => (
                        <p className="mb-2" key={index}>
                          <FiAlertCircle className={`text-${item.type} food-item`}>·</FiAlertCircle> {item.name} <span className="float-right text-secondary">{item.price}</span>
                        </p>
                      ))}
                      <hr />
                      <p className="mb-0 font-weight-bold text-black">
                        Tổng tiền <span className="float-right text-secondary"> VND</span>
                      </p>
                      <p className="mb-0 text-info">
                        <small>
                        Thanh toán qua thẻ Tín dụng/Thẻ ghi nợ
                          <span className="float-right text-danger">VND</span>
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-4 shadow-lg rounded mt-2">
                <div className="row text-center">
                  <div className="col">
                  <FaList/>
                    <p className="mt-1 font-weight-bold text-dark mb-0">Đã nhận được đơn hàng</p>
                    <small className="text-info mb-0">Bây giờ</small>
                  </div>
                  <div className="col">
                  <FaRegCircleCheck />
                    <p className="mt-1 font-weight-bold text-dark mb-0">Xác nhận đơn hàng</p>
                    <small className="text-success mb-0">Tiếp theo</small>
                  </div>
                  <div className="col">
                  <FaTruckFast />
                    <p className="mt-1 font-weight-bold text-dark mb-0">Đơn hàng sẽ được nhận</p>
                    <small className="text-primary mb-0">Sau (30 phút)</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Slider */}
      <div className="container slider_restaurant py-5 border-top">
        <div className="trending-slider">
          {[
            { img: "img/trending1.png", name: "Món ăn", address: "Thực đơn" },
            { img: "img/trending2.png", name: "Món ăn", address: "Thực đơn" },
            { img: "img/trending3.png", name: "Món ăn", address: "Thực đơn" },
          ].map((restaurant, index) => (
            <div className="osahan-slider-item px-1" key={index}>
              <div className="list-card bg-white h-100 d-flex align-items-center rounded overflow-hidden position-relative shadow-sm">
                <div className="list-card-image">
                  <a href="restaurant.html">
                    <img alt={restaurant.name} src={restaurant.img} className="img-fluid item-img" />
                  </a>
                </div>
                <div className="p-3 position-relative">
                  <div className="list-card-body">
                    <h6 className="mb-1">
                      <a href="restaurant." className="text-black">{restaurant.name}</a>
                    </h6>
                    <p className="text-gray mb-2">{restaurant.address}</p>
                    <p className="text-warning mb-0">
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Map;
