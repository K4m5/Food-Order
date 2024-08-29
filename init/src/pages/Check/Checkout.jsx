import React from "react";
import { FaMinus, FaPlus  } from "react-icons/fa";
import { FaRegCreditCard, FaAnglesDown  } from "react-icons/fa6";
import { CiBank, CiDollar } from "react-icons/ci";
import { IoIosInformationCircleOutline } from "react-icons/io";

function Checkout() {
  return (
    <div className="container position-relative">
      <div className="py-5 row">
        <div className="col-md-8 mb-3">
          <div>
            <div className="osahan-cart-item mb-3 rounded shadow-sm bg-white overflow-hidden">
              <div className="osahan-cart-item-profile bg-white p-3">
                <div className="d-flex flex-column">
                  <h6 className="mb-3 font-weight-bold">Địa chỉ giao hàng</h6>
                  <div className="row">
                    <div className="custom-control col-lg-6 custom-radio mb-3 position-relative border-custom-radio">
                      <input
                        type="radio"
                        id="customRadioInline1"
                        name="customRadioInline1"
                        className="custom-control-input"
                        defaultChecked
                      />
                      <label
                        className="custom-control-label w-100"
                        htmlFor="customRadioInline1"
                      >
                        <div>
                          <div className="p-3 bg-white rounded shadow-sm w-100">
                            <div className="d-flex align-items-center mb-2">
                              <h6 className="mb-0">Trang chủ</h6>
                              <p className="mb-0 badge badge-success ml-auto">
                                Mặc định
                              </p>
                            </div>
                            <p className="small text-muted m-0">
                              Đại lộ...
                            </p>
                            <p className="small text-muted m-0">
                              Hà Nội
                            </p>
                          </div>
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#exampleModal"
                            className="btn btn-block btn-light border-top"
                          >
                            Edit
                          </a>
                        </div>
                      </label>
                    </div>
                    <div className="custom-control col-lg-6 custom-radio position-relative border-custom-radio">
                      <input
                        type="radio"
                        id="customRadioInline2"
                        name="customRadioInline1"
                        className="custom-control-input"
                      />
                      <label
                        className="custom-control-label w-100"
                        htmlFor="customRadioInline2"
                      >
                        <div>
                          <div className="p-3 rounded bg-white shadow-sm w-100">
                            <div className="d-flex align-items-center mb-2">
                              <h6 className="mb-0">Công việc</h6>
                              <p className="mb-0 badge badge-light ml-auto">
                              Lựa chọn
                              </p>
                            </div>
                            <p className="small text-muted m-0">
                            Đại lộ...
                            </p>
                            <p className="small text-muted m-0">
                            Hà Nội
                            </p>
                          </div>
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#exampleModal"
                            className="btn btn-block btn-light border-top"
                          >
                            Edit
                          </a>
                        </div>
                      </label>
                    </div>
                  </div>
                  <a
                    className="btn btn-primary"
                    href="#"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    THÊM ĐỊA CHỈ MỚI
                  </a>
                </div>
              </div>
            </div>
            <div
              className="accordion mb-3 rounded shadow-sm bg-white overflow-hidden"
              id="accordionExample"
            >
              <div className="osahan-card bg-white border-bottom overflow-hidden">
                <div className="osahan-card-header" id="headingOne">
                  <h2 className="mb-0">
                    <button
                      className="d-flex p-3 align-items-center btn btn-link w-100"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <FaRegCreditCard 
                      style={
                        {
                          marginRight:"1rem"
                        }} size={20}/>
                      Thẻ tín dụng/thẻ ghi nợ
                      <FaAnglesDown style={{
                        marginLeft:"auto"
                      }} />
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseOne"
                  className="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordionExample"
                >
                  <div className="osahan-card-body border-top p-3">
                    <h6 className="m-0">Thêm thẻ mới</h6>
                    <p className="small">
                    CHÚNG TÔI CHẤP NHẬN
                      <span className="osahan-card ml-2 font-weight-bold">
                        ( Master Card / Visa Card / Rupay )
                      </span>
                    </p>
                    <form>
                      <div className="form-row">
                        <div className="col-md-12 form-group">
                          <label className="form-label font-weight-bold small">
                          Số thẻ
                          </label>
                          <div className="input-group">
                            <input
                              placeholder="Số thẻ"
                              type="number"
                              className="form-control"
                            />
                            <div className="input-group-append">
                              <button
                                type="button"
                                className="btn btn-outline-secondary"
                              >
                                <FaRegCreditCard />
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-8 form-group">
                          <label className="form-label font-weight-bold small">
                          Có hiệu lực đến hết (MM/YY)
                          </label>
                          <input
                            placeholder="Có hiệu lực đến hết (MM/YY)"
                            type="number"
                            className="form-control"
                          />
                        </div>
                        <div className="col-md-4 form-group">
                          <label className="form-label font-weight-bold small">
                            CVV
                          </label>
                          <input
                            placeholder="Nhập số CVV"
                            type="number"
                            className="form-control"
                          />
                        </div>
                        <div className="col-md-12 form-group">
                          <label className="form-label font-weight-bold small">
                          Tên trên thẻ
                          </label>
                          <input
                            placeholder="Nhập số thẻ"
                            type="text"
                            className="form-control"
                          />
                        </div>
                        <div className="col-md-12 form-group mb-0">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              id="custom-checkbox1"
                              className="custom-control-input"
                            />
                            <label
                              htmlFor="custom-checkbox1"
                              className="custom-control-label small pt-1"
                            >
                              Lưu thẻ này một cách an toàn để thanh toán nhanh hơn vào lần tiếp theo
                              thời gian.
                            </label>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div className="osahan-card bg-white border-bottom overflow-hidden">
                <div className="osahan-card-header" id="headingTwo">
                  <h2 className="mb-0">
                    <button
                      className="d-flex p-3 align-items-center btn btn-link w-100"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      <CiBank style={{
                        marginRight: "1rem"
                      }} size={20}/>
                      Ngân hàng
                      <FaAnglesDown style={{
                        marginLeft:"auto"
                      }} />
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseTwo"
                  className="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordionExample"
                >
                  <div className="osahan-card-body border-top p-3">
                    <form>
                      <div
                        className="btn-group btn-group-toggle w-100"
                        data-toggle="buttons"
                      >
                        <label className="btn btn-outline-secondary active">
                          <input
                            type="radio"
                            name="options"
                            id="option1"
                            defaultChecked
                          />
                          HDFC
                        </label>
                        <label className="btn btn-outline-secondary">
                          <input type="radio" name="options" id="option2" />{" "}
                          ICICI
                        </label>
                        <label className="btn btn-outline-secondary">
                          <input type="radio" name="options" id="option3" />{" "}
                          AXIS
                        </label>
                      </div>
                      <hr />
                      <div className="form-row">
                        <div className="col-md-12 form-group mb-0">
                          <label className="form-label small font-weight-bold">
                            Select Bank
                          </label>
                          <br />
                          <select className="custom-select form-control">
                            <option>Bank</option>
                            <option>KOTAK</option>
                            <option>SBI</option>
                            <option>UCO</option>
                          </select>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              
              <div className="osahan-card bg-white overflow-hidden">
                <div className="osahan-card-header" id="headingThree">
                  <h2 className="mb-0">
                    <button
                      className="d-flex p-3 align-items-center btn btn-link w-100"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      <CiDollar style={{
                        marginRight:"1rem"
                      }} size={20} />
                      Tiền mặt khi giao hàng
                      <FaAnglesDown style={{
                        marginLeft:"auto"
                      }} />
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseThree"
                  className="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordionExample"
                >
                  <div className="border-top p-3 osahan-card-body">
                    <h6 className="mb-3 font-weight-bold">Tiền mặt</h6>
                    <p className="m-0">
                    Vui lòng giữ sẵn số tiền lẻ chính xác để giúp chúng tôi phục vụ bạn tốt hơn
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="osahan-cart-item rounded rounded shadow-sm overflow-hidden bg-white sticky_sidebar">
            <div className="d-flex border-bottom osahan-cart-item-profile bg-white p-3">
              <img
                alt="Generic placeholder image"
                src="img/starter1.jpg"
                className="mr-3 rounded-pill osahan-cart-item-profile"
              />
              <div className="d-flex flex-column">
                <h6 className="mb-1 font-weight-bold">Món ăn</h6>
                <p className="mb-0 small text-muted">
                  Địa chỉ
                </p>
              </div>
            </div>
            <div className="bg-white border-bottom py-2">
              <div className="gold-members d-flex align-items-center justify-content-between px-3 py-2 border-bottom">
                <div className="media align-items-center">
                  <div className="mr-2 text-danger">&middot;</div>
                  <div className="media-body">
                    <p className="m-0">Gà Tikka Sub</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <span className="count-number float-right">
                    <button
                      type="button"
                      className="btn-sm left dec btn btn-outline-secondary"
                    >
                      <FaMinus />
                    </button>
                    <input
                      className="count-number-input"
                      type="text"
                      readOnly
                      value="2"
                    />
                    <button
                      type="button"
                      className="btn-sm right inc btn btn-outline-secondary"
                    >
                      <FaPlus />
                    </button>
                  </span>
                  <p className="text-gray mb-0 ml-3">45.000 VND</p>
                </div>
              </div>
              <div className="gold-members d-flex align-items-center justify-content-between px-3 py-2 border-bottom">
                <div className="media align-items-center">
                  <div className="mr-2 text-danger">&middot;</div>
                  <div className="media-body">
                    <p className="m-0">Món</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <span className="count-number float-right">
                    <button
                      type="button"
                      className="btn-sm left dec btn btn-outline-secondary"
                    >
                      <FaMinus />
                    </button>
                    <input
                      className="count-number-input"
                      type="text"
                      readOnly
                      value="1"
                    />
                    <button
                      type="button"
                      className="btn-sm right inc btn btn-outline-secondary"
                    >
                      <FaPlus />
                    </button>
                  </span>
                  <p className="text-gray mb-0 ml-3">45.000 VND</p>
                </div>
              </div>
              <div className="gold-members d-flex align-items-center justify-content-between px-3 py-2 border-bottom">
                <div className="media align-items-center">
                  <div className="mr-2 text-success">&middot;</div>
                  <div className="media-body">
                    <p className="m-0">Món</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <span className="count-number float-right">
                    <button
                      type="button"
                      className="btn-sm left dec btn btn-outline-secondary"
                    >
                      <FaMinus />
                    </button>
                    <input
                      className="count-number-input"
                      type="text"
                      readOnly
                      value="1"
                    />
                    <button
                      type="button"
                      className="btn-sm right inc btn btn-outline-secondary"
                    >
                      <FaPlus />
                    </button>
                  </span>
                  <p className="text-gray mb-0 ml-3">45.000 VND</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-3 clearfix border-bottom">
              <p className="mb-1">
                Tổng Tiền <span className="float-right text-dark">135.000 VND</span>
              </p>
              <p className="mb-1">
                Phí dịch vụ
                <span className="float-right text-dark">50.000 VND</span>
              </p>
              <p className="mb-1">
                Phí giao hàng
                <span className="text-info ml-1">
                <IoIosInformationCircleOutline />
                </span>
                <span className="float-right text-dark">32.000 VND</span>
              </p>
              <p className="mb-1 text-success">
                Tổng
                <span className="float-right text-success">VND</span>
              </p>
              <hr />
              <h6 className="font-weight-bold mb-0">
                Thanh toán <span className="float-right">VND</span>
              </h6>
            </div>
            <div className="p-3">
              <a
                className="btn btn-success btn-block btn-lg"
                href="orderSuccess"
              >
                Thanh toán
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
