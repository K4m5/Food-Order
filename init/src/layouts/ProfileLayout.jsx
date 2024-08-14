import { Link, Outlet } from 'react-router-dom'

const ProfileLayout = () => {
  return (
    <>
      <div className='osahan-profile'>
        <div className='d-none'>
          <div className='bg-primary border-bottom p-3 d-flex align-items-center'>
            <Link className='toggle togglew toggle-2' to='#'>
              <span></span>
            </Link>
            <h4 className='font-weight-bold m-0 text-white'>Hồ sơ</h4>
          </div>
        </div>
        <div className='container position-relative'>
          <div className='py-5 osahan-profile row'>
            <div className='col-md-4 mb-3'>
              <div className='bg-white rounded shadow-sm sticky_sidebar overflow-hidden'>
                <Link to='profile' className=''>
                  <div className='d-flex align-items-center p-3'>
                    <div className='left mr-3'>
                      <img alt='#' src='img/user1.jpg' className='rounded-circle' />
                    </div>
                    <div className='right'>
                      <h6 className='mb-1 font-weight-bold'>
                        Đỗ Quân <i className='feather-check-circle text-success'></i>
                      </h6>
                      <p className='text-muted m-0 small'>abc@gmail.com</p>
                    </div>
                  </div>
                </Link>
                <div className='osahan-credits d-flex align-items-center p-3 bg-light'>
                  <p className='m-0'>Tài khoản tín dụng</p>
                  <h5 className='m-0 ml-auto text-primary'>100.000 VND</h5>
                </div>

                <div className='bg-white profile-details'>
                  <Link
                    to={"#"}
                    data-toggle='modal'
                    data-target='#paycard'
                    className='d-flex w-100 align-items-center border-bottom p-3'
                  >
                    <div className='left mr-3'>
                      <h6 className='font-weight-bold mb-1 text-dark'>Thẻ thanh toán</h6>
                      <p className='small text-muted m-0'>Thêm thẻ tín dụng hoặc thẻ ghi nợ</p>
                    </div>
                    <div className='right ml-auto'>
                      <h6 className='font-weight-bold m-0'>
                        <i className='feather-chevron-right'></i>
                      </h6>
                    </div>
                  </Link>
                  <Link
                    to={'#'}
                    data-toggle='modal'
                    data-target='#modalAddress'
                    className='d-flex w-100 align-items-center border-bottom p-3'
                  >
                    <div className='left mr-3'>
                      <h6 className='font-weight-bold mb-1 text-dark'>Địa chỉ</h6>
                      <p className='small text-muted m-0'>Thêm hoặc xóa địa chỉ giao hàng
                      </p>
                    </div>
                    <div className='right ml-auto'>
                      <h6 className='font-weight-bold m-0'>
                        <i className='feather-chevron-right'></i>
                      </h6>
                    </div>
                  </Link>
                  <Link
                    className='d-flex align-items-center border-bottom p-3'
                    data-toggle='modal'
                    data-target='#inviteModal'
                  >
                    <div className='left mr-3'>
                      <h6 className='font-weight-bold mb-1'>Giới thiệu bạn bè</h6>
                      <p className='small text-primary m-0'>MIỄN PHÍ 10%</p>
                    </div>
                    <div className='right ml-auto'>
                      <h6 className='font-weight-bold m-0'>
                        <i className='feather-chevron-right'></i>
                      </h6>
                    </div>
                  </Link>
                  <Link to='faq' className='d-flex w-100 align-items-center border-bottom px-3 py-4'>
                    <div className='left mr-3'>
                      <h6 className='font-weight-bold m-0 text-dark'>
                        <i className='feather-truck bg-danger text-white p-2 rounded-circle mr-2'></i> Hỗ trợ giao hàng
                      </h6>
                    </div>
                    <div className='right ml-auto'>
                      <h6 className='font-weight-bold m-0'>
                        <i className='feather-chevron-right'></i>
                      </h6>
                    </div>
                  </Link>
                  <Link to='contact' className='d-flex w-100 align-items-center border-bottom px-3 py-4'>
                    <div className='left mr-3'>
                      <h6 className='font-weight-bold m-0 text-dark'>
                        <i className='feather-phone bg-primary text-white p-2 rounded-circle mr-2'></i> Liên hệ
                      </h6>
                    </div>
                    <div className='right ml-auto'>
                      <h6 className='font-weight-bold m-0'>
                        <i className='feather-chevron-right'></i>
                      </h6>
                    </div>
                  </Link>
                  <Link to='terms' className='d-flex w-100 align-items-center border-bottom px-3 py-4'>
                    <div className='left mr-3'>
                      <h6 className='font-weight-bold m-0 text-dark'>
                        <i className='feather-info bg-success text-white p-2 rounded-circle mr-2'></i> Điều khoản sử dụng
                      </h6>
                    </div>
                    <div className='right ml-auto'>
                      <h6 className='font-weight-bold m-0'>
                        <i className='feather-chevron-right'></i>
                      </h6>
                    </div>
                  </Link>
                  <Link to='privacy' className='d-flex w-100 align-items-center px-3 py-4'>
                    <div className='left mr-3'>
                      <h6 className='font-weight-bold m-0 text-dark'>
                        <i className='feather-lock bg-warning text-white p-2 rounded-circle mr-2'></i> Chính sách bảo mật
                      </h6>
                    </div>
                    <div className='right ml-auto'>
                      <h6 className='font-weight-bold m-0'>
                        <i className='feather-chevron-right'></i>
                      </h6>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-md-8 mb-3'>
              <div className='rounded shadow-sm'>
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className='modal fade'
        id='modalAddress'
        tabIndex='-1'
        role='dialog'
        aria-labelledby='modalAddressLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-dialog-centered'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title'>Thêm địa chỉ giao hàng</h5>
              <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div className='modal-body'>
              <form className=''>
                <div className='form-row'>
                  <div className='col-md-12 form-group'>
                    <label className='form-label'>Khu vực giao hàng</label>
                    <div className='input-group'>
                      <input placeholder='' type='text' className='form-control' />
                      <div className='input-group-append'>
                        <button type='button' className='btn btn-outline-secondary'>
                          <i className='feather-map-pin'></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-12 form-group'>
                    <label className='form-label'>Địa chỉ đầy đủ</label>
                    <input
                      placeholder=''
                      type='text'
                      className='form-control'
                    />
                  </div>
                  <div className='col-md-12 form-group'>
                    <label className='form-label'>Ghi chú</label>
                    <input
                      placeholder=''
                      type='text'
                      className='form-control'
                    />
                  </div>
                  <div className='mb-0 col-md-12 form-group'>
                    <label className='form-label'>Tên</label>
                    <div className='btn-group btn-group-toggle w-100' data-toggle='buttons'>
                      <label className='btn btn-outline-secondary active'>
                        <input type='radio' name='options' id='option1' checked /> Trang chủ
                      </label>
                      <label className='btn btn-outline-secondary'>
                        <input type='radio' name='options' id='option2' /> Công việc
                      </label>
                      <label className='btn btn-outline-secondary'>
                        <input type='radio' name='options' id='option3' /> Khác
                      </label>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className='modal-footer p-0 border-0'>
              <div className='col-6 m-0 p-0'>
                <button type='button' className='btn border-top btn-lg btn-block' data-dismiss='modal'>
                  Đóng
                </button>
              </div>
              <div className='col-6 m-0 p-0'>
                <button type='button' className='btn btn-primary btn-lg btn-block'>
                  Lưu thay đổi
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* paymentmodel */}
      <div className="modal fade" id="paycard" tabIndex="-1" role="dialog" aria-labelledby="paycardLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Thêm thẻ tín dụng/thẻ ghi nợ</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                    <h6 className="m-0">Thêm thẻ mới</h6>
                    <p className="small">CHÚ Ý: TÔI CHẤP NHẬN <span className="osahan-card ml-2 font-weight-bold">( Master Card / Visa Card )</span></p>
                    <form>
                        <div className="form-row">
                            <div className="col-md-12 form-group">
                                <label className="form-label font-weight-bold small">Số thẻ</label>
                                <div className="input-group">
                                    <input placeholder="Số thẻ" type="number" className="form-control"/>
                                    <div className="input-group-append"><button type="button" className="btn btn-outline-secondary"><i className="feather-credit-card"></i></button></div>
                                </div>
                            </div>
                            <div className="col-md-8 form-group"><label className="form-label font-weight-bold small">Có hiệu lực đến hết (MM/YY)</label><input placeholder="Nhập" type="number" className="form-control"/></div>
                            <div className="col-md-4 form-group"><label className="form-label font-weight-bold small">CVV</label><input placeholder="Nhập số CVV" type="number" className="form-control"/></div>
                            <div className="col-md-12 form-group"><label className="form-label font-weight-bold small">Tên trên thẻ</label><input placeholder="Nhập số thẻ" type="text" className="form-control"/></div>
                            <div className="col-md-12 form-group mb-0">
                                <div className="custom-control custom-checkbox"><input type="checkbox" id="custom-checkbox1" className="custom-control-input"/><label title="" type="checkbox" htmlFor="custom-checkbox1" className="custom-control-label small pt-1">Hãy lưu thẻ này một cách an toàn để lần thanh toán tiếp theo được nhanh hơn.</label></div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="modal-footer p-0 border-0">
                    <div className="col-6 m-0 p-0">
                        <button type="button" className="btn border-top btn-lg btn-block" data-dismiss="modal">Close</button>
                    </div>
                    <div className="col-6 m-0 p-0">
                        <button type="button" className="btn btn-primary btn-lg btn-block">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ProfileLayout
