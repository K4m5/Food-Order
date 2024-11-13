import L from "leaflet";
import "leaflet/dist/leaflet.css";
import React, { useContext, useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import {
  Circle,
  LayerGroup,
  MapContainer,
  Marker,
  Polyline,
  Popup,
  TileLayer,
} from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import { SidebarContext } from "../../context/SidebarContext";
import {
  fetchDetailsOrder,
  fetchOrders,
} from "../../features/order/orderSlice";
import { formatMoney } from "../../utils/formatMoney";
import { fetchOrderCoordinates } from "../../utils/getLongLat";
const Map = () => {
  const { orders, order } = useSelector((state) => state.orders);
  const dispatch = useDispatch();
  const [ordersWithCoordinates, setOrdersWithCoordinates] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(false);
  const { toggleSidebar } = useContext(SidebarContext);

  useEffect(() => {
    dispatch(fetchOrders(1, 100));
  }, [dispatch]);

  useEffect(() => {
    const fetchCoordinates = async () => {
      const result = await fetchOrderCoordinates(orders);
      setOrdersWithCoordinates(result);
    };

    fetchCoordinates();
  }, [orders]);
  const customIcon = L.icon({
    iconUrl: "/icon.png",
    iconSize: [32, 32], // size of the icon
    iconAnchor: [16, 32], // point of the icon which will correspond to marker's location
    popupAnchor: [0, -32], // point from which the popup should open relative to the iconAnchor
  });
  const center = [20.98177624011233, 105.79562539037852];
  const handleMarkerClick = (id) => {
    setSelectedOrder(true);
    dispatch(fetchDetailsOrder(id));
  };
  const greenOptions = { color: "green", fillColor: "green" };
  const polyline = [
    [51.505, -0.09],
    [51.51, -0.1],
    [51.51, -0.12],
  ];
  const limeOptions = { color: "lime" };

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
      <div className="osahan-map">
        <section className="section bg-white osahan-track-order-page position-relative">
          <MapContainer
            center={center}
            zoom={10}
            style={{ height: "500px", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {ordersWithCoordinates.map((order, index) => (
              <React.Fragment key={index}>
                <LayerGroup>
                  <Circle
                    center={[order.coordinates.lat, order.coordinates.lon]}
                    pathOptions={greenOptions}
                    radius={100}
                  />
                </LayerGroup>

                <LayerGroup>
                  <Circle
                    center={[center[0], center[1]]}
                    pathOptions={greenOptions}
                    radius={100}
                  />
                </LayerGroup>

                <Marker
                  key={index}
                  icon={customIcon} // Use custom icon
                  position={[order.coordinates.lat, order.coordinates.lon]}
                  eventHandlers={{
                    click: () => handleMarkerClick(order._id),
                  }}
                >
                  <Popup>
                    <div>
                      <p>{order.name}</p>
                      <p>{order.address}</p>
                    </div>
                  </Popup>
                </Marker>
                <Polyline
                  pathOptions={limeOptions}
                  positions={
                    order.coordinates.lat > 0
                      ? [
                          [order.coordinates.lat, order.coordinates.lon],
                          [center[0], center[1]],
                        ]
                      : []
                  }
                />
              </React.Fragment>
            ))}
            <Marker
              icon={customIcon} // Use custom icon
              position={[center[0], center[1]]}
            >
              <Popup>
                <div>
                  <p>Cửa hàng</p>
                  <p>Đây là địa chỉ cửa hàng</p>
                </div>
              </Popup>
            </Marker>
          </MapContainer>
          {/* Order Details
           */}
          {selectedOrder && (
            <div className="container pt-5 pb-5">
              <div className="row d-flex align-items-center">
                Chi tiết đơn hàng
              </div>
              <div className="order-body">
                {order?.detailOrders?.map((o, index) => (
                  <div className="pb-3" key={index}>
                    <div className="p-3 rounded shadow-sm bg-white">
                      <div className="d-flex border-bottom pb-3">
                        <div className="text-muted mr-3">
                          <img
                            alt="#"
                            src={o.food.image}
                            className="img-fluid order_img rounded"
                          />
                        </div>
                        <div>
                          <p className="mb-0 font-weight-bold">
                            <a href="restaurant.html" className="text-dark">
                              {o.food.name}
                            </a>
                          </p>
                          <p className="mb-0">Punjab, India</p>
                          <p>{order.order.code}</p>
                          <p className="mb-0 small">
                            <a href="status_complete.html">View Details</a>
                          </p>
                        </div>
                        <div className="ml-auto">
                          <p className="bg-success text-white py-1 px-2 rounded small mb-1">
                            {order.order.status === "Pending" && "Đang chờ"}
                            {order.order.status === "Completed" && "Đã giao"}
                            {order.order.status === "Cancelled" && "Đã hủy"}
                            {order.order.status === "Processing" &&
                              "Đang xử lý"}
                          </p>
                          <p className="small font-weight-bold text-center">
                            <i className="feather-clock"></i>{" "}
                            {new Date(order.order.created_at).toLocaleString()}
                          </p>
                        </div>
                      </div>
                      <div className="d-flex pt-3">
                        <div className="small">
                          {o.toppings.map((topping, index) => (
                            <div
                              className="gold-members d-flex align-items-center justify-content-between px-3 py-2 border-bottom"
                              key={index}
                            >
                              <div className="d-flex align-items-center">
                                <div className="me-2 text-danger ">·</div>
                                <div className="media-body">
                                  <p className="m-0"> {topping.name}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="text-muted m-0 ml-auto mr-3 small">
                          Tổng tiền
                          <br />
                          <span className="text-dark font-weight-bold">
                            {formatMoney(order.order.amount)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      </div>
    </>
  );
};

export default Map;
