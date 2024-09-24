import React, { Fragment, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { CiBank, CiDollar } from "react-icons/ci";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { FaAnglesDown, FaPercent, FaRegCreditCard } from "react-icons/fa6";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import baseApi from "../../api/baseApi";
import {
  clearCart,
  fetchCartItems,
  removeItemFromCart,
  updateCartItem,
} from "../../features/cart/cartSlice";
import { fetchCoupons } from "../../features/coupons/couponSlice";
import { formatMoney } from "../../utils/formatMoney";

function Checkout() {
  const { items } = useSelector((state) => state.cart);
  const { coupons } = useSelector((state) => state.coupons);
  const dispatch = useDispatch();
  const [discount, setDiscount] = useState(0);
  const [discountCode, setDiscountCode] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(fetchCartItems());
  }, [dispatch, items]);
  useEffect(() => {
    dispatch(fetchCoupons(123));
  }, [dispatch]);

  const handleRemoveItem = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const handleUpdateQuantity = (id, quantity) => {
    dispatch(updateCartItem({ id, quantity }));
  };
  // random code
  const handleApplyDiscount = () => {
    // kiểm tra xem có mã giảm giá nào được nhập không
    // nếu không thì thông báo lỗi
    if (!discountCode) {
      toast.error("Vui lòng nhập mã giảm giá");
      return;
    }

    console.log(coupons);
    const coupon = coupons.find(
      (coupon) => coupon.code.toString() == discountCode.toString()
    );

    if (!coupon) {
      toast.error("Mã giảm giá không tồn tại");
      return;
    } else {
      toast.success("Áp dụng mã giảm giá thành công");
    }
    // nếu mã giảm giá tồn tại thì cập nhật giảm giá

    setDiscount(coupon.value);
  };
  const calculateTotal = () => {
    const total = items.reduce((total, cart) => {
      const foodPrice = cart.food.price * cart.quantity;
      const toppingPrice = cart.toppings.reduce(
        (toppingTotal, topping) => toppingTotal + topping.price,
        0
      );
      return total + foodPrice + toppingPrice;
    }, 0);

    return total - (total * discount) / 100;
  };
  const handleCheckout = async () => {
    setLoading(true);
    try {
      const orderData = {
        items,
        total: calculateTotal(),
        discountCode,
      };
      await baseApi.post("/orders", orderData);
      toast.success("Thanh toán thành công!");
      dispatch(clearCart());
      history.push("/order-success");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

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
                            <p className="small text-muted m-0">Đại lộ...</p>
                            <p className="small text-muted m-0">Hà Nội</p>
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
                            <p className="small text-muted m-0">Đại lộ...</p>
                            <p className="small text-muted m-0">Hà Nội</p>
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
                        style={{
                          marginRight: "1rem",
                        }}
                        size={20}
                      />
                      Thẻ tín dụng/thẻ ghi nợ
                      <FaAnglesDown
                        style={{
                          marginLeft: "auto",
                        }}
                      />
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
                              Lưu thẻ này một cách an toàn để thanh toán nhanh
                              hơn vào lần tiếp theo thời gian.
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
                      <CiBank
                        style={{
                          marginRight: "1rem",
                        }}
                        size={20}
                      />
                      Ngân hàng
                      <FaAnglesDown
                        style={{
                          marginLeft: "auto",
                        }}
                      />
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
                      <CiDollar
                        style={{
                          marginRight: "1rem",
                        }}
                        size={20}
                      />
                      Tiền mặt khi giao hàng
                      <FaAnglesDown
                        style={{
                          marginLeft: "auto",
                        }}
                      />
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
                      Vui lòng giữ sẵn số tiền lẻ chính xác để giúp chúng tôi
                      phục vụ bạn tốt hơn
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
              <h5 className="font-weight-bold">Giỏ hàng của bạn</h5>
            </div>
            <div className="bg-white border-bottom py-2">
              {items.map((item, index) => (
                <Fragment key={index}>
                  <div className="d-flex align-items-start p-3 border-bottom">
                    <div className="mr-3">
                      <img
                        src={item.food.image}
                        alt={item.food.name}
                        className="img-fluid rounded"
                        width="60"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="mb-1">{item.food.name}</h6>

                      <p className="mb-0 text-dark">
                        {formatMoney(item.food.price)} VND
                      </p>
                    </div>
                    <div className="d-flex align-items-center">
                      <button
                        className="btn btn-sm btn-outline-secondary mr-2"
                        onClick={() =>
                          handleUpdateQuantity(item._id, item.quantity - 1)
                        }
                      >
                        <FaMinus />
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="btn btn-sm btn-outline-secondary ml-2"
                        onClick={() =>
                          handleUpdateQuantity(item._id, item.quantity + 1)
                        }
                      >
                        <FaPlus />
                      </button>
                      <button
                        className="btn btn-sm btn-outline-danger ml-2"
                        onClick={() => handleRemoveItem(item._id)}
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                  {item.toppings.map((topping, i) => (
                    <div
                      key={i}
                      className="gold-members d-flex align-items-center justify-content-between px-3 py-2 border-bottom"
                    >
                      <div className="media align-items-center">
                        <div className="mr-2">&middot;</div>
                        <div className="media-body">
                          <p className="m-0"> {topping.name} </p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <p className="text-gray mb-0 float-right ml-2 text-muted small">
                          {formatMoney(topping.price)}
                        </p>
                      </div>
                    </div>
                  ))}
                </Fragment>
              ))}
            </div>
            <div className="bg-white p-3 py-3 border-bottom clearfix">
              <div className="input-group-sm mb-2 input-group">
                <input
                  placeholder="Nhập mã giảm giá"
                  type="text"
                  className="form-control"
                  value={discountCode}
                  onChange={(e) => setDiscountCode(e.target.value)}
                />
                <div className="input-group-append">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleApplyDiscount}
                  >
                    <FaPercent className="mr-2" />
                    Áp dụng
                  </button>
                </div>
              </div>
               
            </div>
            <div className="bg-white p-3 clearfix border-bottom">
              <p className="mb-1">
                Tổng Tiền{" "}
                <span className="float-right text-dark">
                  {formatMoney(calculateTotal())}
                </span>
              </p>
              <p className="mb-1">
                Phí dịch vụ
                <span className="float-right text-dark">
                  {formatMoney(50000)}
                </span>
              </p>
              <p className="mb-1">
                Phí giao hàng
                <span className="text-info ml-1">
                  <IoIosInformationCircleOutline />
                </span>
                <span className="float-right text-dark">
                  {formatMoney(32000)}
                </span>
              </p>
              <p className="mb-1 text-success">
                Tổng
                <span className="float-right text-success">
                  {formatMoney(calculateTotal() + 50000 + 32000)}
                </span>
              </p>
              <hr />

              <h6 className="font-weight-bold mb-0">
                Tổng tiền{" "}
                <span className="float-right">
                  {formatMoney(calculateTotal() + 50000 + 32000)}
                </span>
              </h6>
            </div>
            <div className="p-3">
              <button
                className="btn btn-success btn-block btn-lg"
                onClick={handleCheckout}
                disabled={loading}
              >
                {loading
                  ? "Đang xử lý..."
                  : `Trả ${formatMoney(calculateTotal() + 50000 + 32000)}`}
                <i className="feather-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
