import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDetailsOrder } from "../../../features/order/orderSlice";
import { formatMoney } from "../../../utils/formatMoney";

const OrderDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { order } = useSelector((state) => state.orders);
  useEffect(() => {
    dispatch(fetchDetailsOrder(id));
  }, [dispatch, id]);
  return (
    <section className="bg-white osahan-main-body rounded shadow-sm overflow-hidden">
      <div className="container p-0">
        <div className="row">
          <div className="col-lg-12">
            <div className="osahan-status">
              <div className="p-3 status-order bg-white border-bottom d-flex align-items-center">
                <p className="m-0">
                  <i className="feather-calendar text-primary"></i>{" "}
                  {new Date(order?.order?.updated_at).toLocaleString()}
                </p>
                <a
                  href="review.html"
                  className="text-primary ml-auto text-decoration-none"
                >
                  Review
                </a>
              </div>
               

              <div className="p-3 border-bottom bg-white">
                <h6 className="font-weight-bold">Địa chỉ</h6>
                <p className="m-0 small">{order.order?.address}</p>
              </div>
              <div className="p-3 border-bottom">
                <p className="font-weight-bold   mb-1">Đơn hàng</p>
                {order.detailOrders?.map((item) => (
                  <>
                    <img
                      alt="#"
                      src={item.food.image}
                      className="img-fluid sc-osahan-logo mr-2"
                    />{" "}
                    <span className="text-primary font-weight-bold">
                      {item.food.name}
                    </span>
                    {item.toppings.map((topping, i) => (
                      <div
                        key={i}
                        className="gold-members d-flex align-items-center justify-content-between   py-2 border-bottom"
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
                  </>
                ))}
              </div>

              <div className="p-3 bg-white">
                <div className="d-flex align-items-center mb-2">
                  <h6 className="font-weight-bold mb-1">Tổng tiền</h6>
                  <h6 className="font-weight-bold ml-auto mb-1">
                    {" "}
                    {formatMoney(order.order?.amount)}
                  </h6>
                </div>
                <p className="m-0 small text-muted">
                  Bạn có thể kiểm tra chi tiết đơn hàng của mình tại đây,
                  <br />
                  Cảm ơn bạn đã đặt hàng.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderDetail;
