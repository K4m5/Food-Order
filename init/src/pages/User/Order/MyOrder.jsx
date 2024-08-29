
const MyOrder = () => {
  return (
    <>
       <div className="tab-content  " id="myTabContent">
                    <div className="tab-pane fade show active" id="completed" role="tabpanel" aria-labelledby="completed-tab">
                        <div className="order-body">
                            <div className="pb-3">
                                <div className="p-3 rounded shadow-sm bg-white">
                                    <div className="d-flex border-bottom pb-3">
                                        <div className="mr-3">
                                            <img alt="#" src="img/popular5.png" className="img-fluid order_img rounded"/>
                                        </div>
                                        <div>
                                            <p className="mb-0 font-weight-bold"><a href="restaurant.html" className="text-dark">Nhà hàng...</a></p>
                                            <p className="mb-0">Khu vực</p>
                                            <p>Đơn hàng</p>
                                            <p className="mb-0 small"><a href="status_complete.html">Xem chi tiết</a></p>
                                        </div>
                                        <div className="ml-auto">
                                            <p className="bg-success text-white py-1 px-2 rounded small mb-1">Đã giao</p>
                                            <p className="small font-weight-bold text-center"> 26/08/2024</p>
                                        </div>
                                    </div>
                                    <div className="d-flex pt-3">
                                        <div className="small">
                                            <p className="text- font-weight-bold mb-0">Món ăn.. x 1</p>
                                            <p className="text- font-weight-bold mb-0">Nước x 4</p>
                                        </div>
                                        <div className="text-muted m-0 ml-auto mr-3 small">Tổng tiền<br/>
                                            <span className="text-dark font-weight-bold">250.000 VND</span>
                                        </div>
                                        <div className="text-right">
                                            <a href="checkout" className="btn btn-primary mx-2 px-3 ">Đặt hàng lại</a>
                                            <a href="contact" className="btn btn-outline-primary px-3">Hỏi đáp</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pb-3">
                                <div className="p-3 rounded shadow-sm bg-white">
                                    <div className="d-flex border-bottom pb-3">
                                        <div className="mr-3">
                                            <img alt="#" src="img/popular4.png" className="img-fluid order_img rounded"/>
                                        </div>
                                        <div>
                                            <p className="mb-0 font-weight-bold"><a href="restaurant.html" className="text-dark">Nhà hàng...</a></p>
                                            <p className="mb-0">Khu vực</p>
                                            <p>Đơn hàng</p>
                                            <p className="mb-0 small"><a href="status_complete.html">Xem chi tiết</a></p>
                                        </div>
                                        <div className="ml-auto">
                                            <p className="bg-success text-white py-1 px-2 rounded small mb-1">Đã giao</p>
                                            <p className="small font-weight-bold text-center">27/08/2024</p>
                                        </div>
                                    </div>
                                    <div className="d-flex pt-3">
                                        <div className="small">
                                            <p className="text- font-weight-bold mb-0">Món ăn x 1</p>
                                            <p className="text- font-weight-bold mb-0">Nước uốngx 4</p>
                                        </div>
                                        <div className="text-muted m-0 ml-auto mr-3 small">Tổng tiền<br/>
                                            <span className="text-dark font-weight-bold">250.000 VND</span>
                                        </div>
                                        <div className="text-right">
                                            <a href="checkout" className="btn btn-primary mx-2 px-3">Đặt hàng lại</a>
                                            <a href="contact" className="btn btn-outline-primary px-3">Hỏi đáp</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tab-pane fade" id="progress" role="tabpanel" aria-labelledby="progress-tab">
                        <div className="order-body">
                            <div className="pb-3">
                                <div className="p-3 rounded shadow-sm bg-white">
                                    <div className="d-flex border-bottom pb-3">
                                        <div className="text-muted mr-3">
                                            <img alt="#" src="img/popular1.png" className="img-fluid order_img rounded"/>
                                        </div>
                                        <div>
                                            <p className="mb-0 font-weight-bold"><a href="restaurant.html" className="text-dark">Conrad Chicago Restaurant</a></p>
                                            <p className="mb-0">Punjab, India</p>
                                            <p>ORDER #321DERS</p>
                                            <p className="mb-0 small"><a href="status_onprocess.html">Xem chi tiết</a></p>
                                        </div>
                                        <div className="ml-auto">
                                            <p className="bg-warning text-white py-1 px-2 rounded small mb-1">Đang xử lý</p>
                                            <p className="small font-weight-bold text-center"> 06/04/2020</p>
                                        </div>
                                    </div>
                                    <div className="d-flex pt-3">
                                        <div className="small">
                                            <p className="text- font-weight-bold mb-0">Kesar Sweet x 1</p>
                                            <p className="text- font-weight-bold mb-0">Gulab Jamun x 4</p>
                                        </div>
                                        <div className="text-muted m-0 ml-auto mr-3 small">Tổng tiền<br/>
                                            <span className="text-dark font-weight-bold">$12.74</span>
                                        </div>
                                        <div className="text-right">
                                            <a href="status_onprocess.html" className="btn btn-primary mx-2 px-3">Theo dõi</a>
                                            <a href="contact" className="btn btn-outline-primary px-3">Hỏi đáp</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pb-3">
                                <div className="p-3 rounded shadow-sm bg-white">
                                    <div className="d-flex border-bottom pb-3">
                                        <div className="text-muted mr-3">
                                            <img alt="#" src="img/popular2.png" className="img-fluid order_img rounded"/>
                                        </div>
                                        <div>
                                            <p className="mb-0 font-weight-bold"><a href="restaurant.html" className="text-dark">Conrad Chicago Restaurant</a></p>
                                            <p className="mb-0">Punjab, India</p>
                                            <p>ORDER #321DERS</p>
                                            <p className="mb-0 small"><a href="status_onprocess.html">Xem chi tiết</a></p>
                                        </div>
                                        <div className="ml-auto">
                                            <p className="bg-warning text-white py-1 px-2 rounded small mb-1">Đang xử lý</p>
                                            <p className="small font-weight-bold text-center"> 06/04/2020</p>
                                        </div>
                                    </div>
                                    <div className="d-flex pt-3">
                                        <div className="small">
                                            <p className="text- font-weight-bold mb-0">Kesar Sweet x 1</p>
                                            <p className="text- font-weight-bold mb-0">Gulab Jamun x 4</p>
                                        </div>
                                        <div className="text-muted m-0 ml-auto mr-3 small">Tổng tiền<br/>
                                            <span className="text-dark font-weight-bold">$12.74</span>
                                        </div>
                                        <div className="text-right">
                                            <a href="status_onprocess.html" className="btn btn-primary mx-2 px-3">Theo dõi</a>
                                            <a href="contact" className="btn btn-outline-primary px-3">Hỏi đáp</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pb-3">
                                <div className="p-3 rounded shadow-sm bg-white">
                                    <div className="d-flex border-bottom pb-3">
                                        <div className="text-muted mr-3">
                                            <img alt="#" src="img/popular3.png" className="img-fluid order_img rounded"/>
                                        </div>
                                        <div>
                                            <p className="mb-0 font-weight-bold"><a href="restaurant.html" className="text-dark">Conrad Chicago Restaurant</a></p>
                                            <p className="mb-0">Punjab, India</p>
                                            <p>ORDER #321DERS</p>
                                            <p className="mb-0 small"><a href="status_onprocess.html">Xem chi tiết</a></p>
                                        </div>
                                        <div className="ml-auto">
                                            <p className="bg-warning text-white py-1 px-2 rounded small mb-1">Đang xử lý</p>
                                            <p className="small font-weight-bold text-center"> 06/04/2020</p>
                                        </div>
                                    </div>
                                    <div className="d-flex pt-3">
                                        <div className="small">
                                            <p className="text- font-weight-bold mb-0">Kesar Sweet x 1</p>
                                            <p className="text- font-weight-bold mb-0">Gulab Jamun x 4</p>
                                        </div>
                                        <div className="text-muted m-0 ml-auto mr-3 small">Tổng tiền<br/>
                                            <span className="text-dark font-weight-bold">$12.74</span>
                                        </div>
                                        <div className="text-right">
                                            <a href="status_onprocess.html" className="btn btn-primary mx-2 px-3">Theo dõi</a>
                                            <a href="contact" className="btn btn-outline-primary px-3">Hỏi đáp</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tab-pane fade" id="canceled" role="tabpanel" aria-labelledby="canceled-tab">
                        <div className="order-body">
                            <div className="pb-3">
                                <div className="p-3 rounded shadow-sm bg-white">
                                    <div className="d-flex border-bottom pb-3">
                                        <div className="text-muted mr-3">
                                            <img alt="#" src="img/popular6.png" className="img-fluid order_img rounded"/>
                                        </div>
                                        <div>
                                            <p className="mb-0 font-weight-bold"><a href="restaurant.html" className="text-dark">Conrad Chicago Restaurant</a></p>
                                            <p className="mb-0">Punjab, India</p>
                                            <p>ORDER #321DERS</p>
                                            <p className="mb-0 small"><a href="status_canceled.html">Xem chi tiết</a></p>
                                        </div>
                                        <div className="ml-auto">
                                            <p className="bg-danger text-white py-1 px-2 rounded small mb-1">Thanh toán lỗi</p>
                                            <p className="small font-weight-bold text-center"> 06/04/2020</p>
                                        </div>
                                    </div>
                                    <div className="d-flex pt-3">
                                        <div className="small">
                                            <p className="text- font-weight-bold mb-0">Kesar Sweet x 1</p>
                                            <p className="text- font-weight-bold mb-0">Gulab Jamun x 4</p>
                                        </div>
                                        <div className="text-muted m-0 ml-auto mr-3 small">Tổng tiền<br/>
                                            <span className="text-dark font-weight-bold">$12.74</span>
                                        </div>
                                        <div className="text-right">
                                            <a href="contact" className="btn btn-outline-primary px-3">Hỏi đáp</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pb-3">
                                <div className="p-3 rounded shadow-sm bg-white">
                                    <div className="d-flex border-bottom pb-3">
                                        <div className="text-muted mr-3">
                                            <img alt="#" src="img/popular6.png" className="img-fluid order_img rounded"/>
                                        </div>
                                        <div>
                                            <p className="mb-0 font-weight-bold"><a href="restaurant.html" className="text-dark">Conrad Chicago Restaurant</a></p>
                                            <p className="mb-0">Punjab, India</p>
                                            <p>ORDER #321DERS</p>
                                            <p className="mb-0 small"><a href="status_canceled.html">Xem chi tiết</a></p>
                                        </div>
                                        <div className="ml-auto">
                                            <p className="bg-danger text-white py-1 px-2 rounded small mb-1">Đã hủy</p>
                                            <p className="small font-weight-bold text-center"> 06/04/2020</p>
                                        </div>
                                    </div>
                                    <div className="d-flex pt-3">
                                        <div className="small">
                                            <p className="text- font-weight-bold mb-0">Kesar Sweet x 1</p>
                                            <p className="text- font-weight-bold mb-0">Gulab Jamun x 4</p>
                                        </div>
                                        <div className="text-muted m-0 ml-auto mr-3 small">Tổng tiền<br/>
                                            <span className="text-dark font-weight-bold">$12.74</span>
                                        </div>
                                        <div className="text-right">
                                            <a href="contact" className="btn btn-outline-primary px-3">Hỏi đáp</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </>
  )
}

export default MyOrder
