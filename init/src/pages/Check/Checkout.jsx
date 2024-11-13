import axios from "axios";
import { Fragment, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { CiDollar } from "react-icons/ci";
import { FaBars, FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { FaAnglesDown, FaPercent } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import baseApi from "../../api/baseApi";
import { SidebarContext } from "../../context/SidebarContext";
import {
  fetchCartItems,
  removeItemFromCart,
  updateCartItem,
} from "../../features/cart/cartSlice";
import { fetchCoupons } from "../../features/coupons/couponSlice";
import { createOrder } from "../../features/order/orderSlice";
import { formatMoney } from "../../utils/formatMoney";

function Checkout() {
  const { items } = useSelector((state) => state.cart);
  const { coupons } = useSelector((state) => state.coupons);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [discount, setDiscount] = useState(0);
  const [discountCode, setDiscountCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("01");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedWard, setSelectedWard] = useState("");
  const [homeAddress, setHomeAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const { toggleSidebar } = useContext(SidebarContext);
  useEffect(() => {
    dispatch(fetchCartItems(123));
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchCoupons(123));
  }, [dispatch]);

  const handleRemoveItem = (id) => {
    dispatch(removeItemFromCart(id));
  };
  useEffect(() => {
    // Check if user is authenticated
    const checkAuth = async () => {
      try {
        const response = await baseApi.get("/users/profile");
        if (response.data?._id) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.log(error);
        setIsAuthenticated(false);
      }
    };
    checkAuth();
  }, []);
  const handleUpdateQuantity = (id, quantity) => {
    if (quantity > 0) {
      dispatch(updateCartItem({ id, quantity }));
    } else {
      toast.error("Số lượng phải lớn hơn 0");
    }
  };
  // random code

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
  const totalMoney = () => {
    const total = items.reduce((total, cart) => {
      const foodPrice = cart.food.price * cart.quantity;
      const toppingPrice = cart.toppings.reduce(
        (toppingTotal, topping) => toppingTotal + topping.price,
        0
      );
      return total + foodPrice + toppingPrice;
    }, 0);

    return total;
  };
  const handleCheckout = async () => {
    setLoading(true);
    if (items.length === 0) {
      setLoading(false);
      return;
    }
    try {
      if (!selectedProvince || !selectedDistrict || !selectedWard) {
        toast.error("Vui lòng chọn địa chỉ giao hàng");
        return;
      }

      if (!phone) {
        toast.error("Vui lòng nhập số điện thoại");
        return;
      }

      if (!homeAddress) {
        toast.error("Vui lòng nhập địa chỉ nhà");
        return;
      }
      const orderData = {
        phone,
        address:
          homeAddress +
          ", " +
          wards.find((ward) => ward.ward_id == selectedWard).ward_name +
          ", " +
          districts.find((district) => district.district_id == selectedDistrict)
            .district_name +
          ", " +
          " Tỉnh Hà Nội",

        coupon: discountCode,
      };
      await dispatch(createOrder(orderData)).unwrap();
      navigate("/orderSuccess");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (selectedProvince) {
      // Fetch districts based on selected province
      axios
        .get(
          `https://vapi.vnappmob.com/api/province/district/${selectedProvince}`
        )
        .then((response) => {
          setDistricts(response.data.results);
          setWards([]); // Reset wards when province changes
        });
    }
  }, [selectedProvince]);

  useEffect(() => {
    if (selectedDistrict) {
      axios
        .get(`https://vapi.vnappmob.com/api/province/ward/${selectedDistrict}`)
        .then((response) => {
          setWards(response.data.results);
        });
    }
  }, [selectedDistrict]);
  useEffect(() => {
    if (user) {
      setPhone(user.phone);
    }
  }, [user]);
  if (!isAuthenticated) {
    return (
      <div
        className=""
        style={{
          minHeight: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          flexDirection: "column",
        }}
      >
        <h3> Vui lòng đăng nhập để tiếp tục</h3>
        <div className="new-acc d-flex align-items-center justify-content-center">
          <Link to={"/login"} className="btn btn-primary">
            Đăng nhập
          </Link>
          <Link to={"/faq"} className="btn btn-light">
            Trợ giúp
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="d-none">
        <div className="bg-primary border-bottom p-3 d-flex align-items-center justify-content-between">
          <h4 className="font-weight-bold m-0 text-white">Ưu đãi</h4>
          <div onClick={toggleSidebar}>
            <FaBars size={24} color="white" />
          </div>
        </div>
      </div>

      <div className="container position-relative">
        <div className="py-5 row">
          <div className="col-md-8 mb-3">
            <div>
              <div className="osahan-cart-item mb-3 rounded shadow-sm bg-white overflow-hidden">
                <div className="osahan-cart-item-profile bg-white p-3">
                  <div className="d-flex flex-column">
                    <h6 className="mb-3 font-weight-bold">Địa chỉ giao hàng</h6>
                    <div className="row">
                      {/* danh sasch tinh thanh pho */}

                      <div className="col-md-4 mb-3">
                        <label htmlFor="district">Quận/Huyện</label>
                        <select
                          id="district"
                          className="form-control"
                          value={selectedDistrict}
                          onChange={(e) => setSelectedDistrict(e.target.value)}
                          disabled={!selectedProvince}
                        >
                          <option value="">Chọn Quận/Huyện</option>
                          {districts.map((district) => (
                            <option
                              key={district.district_id}
                              value={district.district_id}
                            >
                              {district.district_name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="ward">Xã/Phường</label>
                        <select
                          id="ward"
                          className="form-control"
                          value={selectedWard}
                          onChange={(e) => setSelectedWard(e.target.value)}
                          disabled={!selectedDistrict}
                        >
                          <option value="">Chọn Xã/Phường</option>
                          {wards.map((ward) => (
                            <option key={ward.ward_id} value={ward.ward_id}>
                              {ward.ward_name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="phone">Số điện thoại</label>
                        <input
                          type="text"
                          id="phone"
                          className="form-control"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="Nhập số điện thoại"
                        />
                      </div>

                      <div className="col-md-12 mb-3">
                        <label htmlFor="homeAddress">Địa chỉ nhà</label>
                        <input
                          type="text"
                          id="homeAddress"
                          className="form-control"
                          value={homeAddress}
                          onChange={(e) => setHomeAddress(e.target.value)}
                          placeholder="Nhập địa chỉ nhà"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="accordion mb-3 rounded shadow-sm bg-white overflow-hidden"
                id="accordionExample"
              >
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
                    <button type="button" className="btn btn-primary">
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
                    {formatMoney(totalMoney())}
                  </span>
                </p>

                <p className="mb-1 text-danger">
                  Giảm giá
                  <span className="float-right text-danger">
                    -{formatMoney((discount * totalMoney()) / 100)}
                  </span>
                </p>
                {/* tiền ship */}

                <p className="mb-1 text-success">
                  Tổng
                  <span className="float-right text-success">
                    {formatMoney(calculateTotal())}
                  </span>
                </p>
                <hr />

                <h6 className="font-weight-bold mb-0">
                  Tổng tiền{" "}
                  <span className="float-right">
                    {formatMoney(calculateTotal())}
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
                    : `Trả ${formatMoney(calculateTotal())}`}
                  <i className="feather-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
