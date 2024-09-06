import { useState } from 'react'
import { Link } from 'react-router-dom'

const Offers = () => {
  const [activeTab, setActiveTab] = useState('profile')

  const handleTabChange = (tab) => {
    setActiveTab(tab)
  }
  return (
    <>
      <div className='d-none'>
        <div className='bg-primary p-3 d-flex align-items-center'>
          <Link className='toggle togglew toggle-2' to='#'>
            <span></span>
          </Link>
          <h4 className='font-weight-bold m-0 text-white'>Offer</h4>
        </div>
      </div>
      <div className='offer-section'>
        <div className='container'>
          <div className='py-5 d-flex align-items-center'>
            <div>
              <h2 className='text-white'>Ưu đãi dành cho bạn</h2>
              <p className='h6 text-white'>Khám phá các ưu đãi và ưu đãi hàng đầu dành riêng cho bạn!</p>
            </div>
            <div className='ml-auto'>
              <img alt='#' src='img/offers.png' className='img-fluid offers_img' />
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white shadow-sm'>
        <div className='container'>
          <div className='bg-white'>
            <ul className='nav nav-tabs' id='myTab' role='tablist'>
              <li className='nav-item' role='presentation'>
                <div
                  className='px-0 py-3 nav-link text-dark h6 border-0 mb-0 active'
                  id='profile-tab'
                  data-toggle='tab'
                  to='#profile'
                  role='tab'
                  style={{ cursor: 'pointer' }}
                  aria-controls='profile'
                  onClick={() => handleTabChange('profile')}
                  aria-selected='false'
                >
                  Ưu đãi thanh toán/Phiếu giảm giá
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
        <div className='container'>
        <div className='tab-content' id='myTabContent'>
          {activeTab === 'profile' && (
            <div className='tab-pane fade show active py-4' id='profile' role='tabpanel' aria-labelledby='profile-tab'>
              <h5 className='mb-3 mt-0'>Phiếu giảm giá có sẵn</h5>
              <div className='row'>
                <div className='col-md-4 mb-3'>
                  <div className='bg-white shadow-sm rounded p-4'>
                    <p className='h6 mb-3'>
                      <span className='feather-home text-primary'></span>
                      <span className='ml-3'>GIAM50</span>
                    </p>
                    <p className='font-weight-bold mb-2'>Nhận giảm giá 15% khi sử dụng Thẻ tín dụng</p>
                    <p className='mb-4'>Giảm 50% cho đơn hàng đầu tiên của bạn (tối đa giảm 100.000 VNĐ).</p>
                    <p>
                      <Link to='#' className='text-primary'>
                        + MORE
                      </Link>
                    </p>
                    <Link to='#' className='btn btn-outline-primary'>
                      COPY CODE
                    </Link>
                  </div>
                </div>
                <div className='col-md-4 mb-3'>
                  <div className='bg-white shadow-sm rounded p-4'>
                    <p className='h6 mb-3'>
                      <span className='feather-home text-primary'></span>
                      <span className='ml-3'>COMBO25</span>
                    </p>
                    <p className='font-weight-bold mb-2'>Nhận giảm giá 15% khi sử dụng Thẻ tín dụng</p>
                    <p className='mb-4'>Giảm 25% khi đặt combo món ăn từ nhà hàng tham gia chương trình.</p>
                    <p>
                      <Link to='#' className='text-primary'>
                        + MORE
                      </Link>
                    </p>
                    <Link to='#' className='btn btn-outline-primary'>
                      COPY CODE
                    </Link>
                  </div>
                </div>
                <div className='col-md-4 mb-3'>
                  <div className='bg-white shadow-sm rounded p-4'>
                    <p className='h6 mb-3'>
                      <span className='feather-home text-primary'></span>
                      <span className='ml-3'>LP75</span>
                    </p>
                    <p className='font-weight-bold mb-2'>Get flat cashback of Rs.75 using LazyPay</p>
                    <p className='mb-4'>
                      Use code LP75 & get flat cashback of Rs.75 on orders above Rs.250 on first LazyPay
                    </p>
                    <p>
                      <Link to='#' className='text-primary'>
                        + MORE
                      </Link>
                    </p>
                    <Link to='#' className='btn btn-outline-primary'>
                      COPY CODE
                    </Link>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-4 mb-3'>
                  <div className='bg-white shadow-sm rounded p-4'>
                    <p className='h6 mb-3'>
                      <span className='feather-home text-primary'></span>
                      <span className='ml-3'>RUPAYFEST</span>
                    </p>
                    <p className='font-weight-bold mb-2'>Get 30% discount using RuPay Cards</p>
                    <p className='mb-4'>Use code RUPAYFEST and get 30% discount up to Rs.100 on orders above Rs.199</p>
                    <p>
                      <Link to='#' className='text-primary'>
                        + MORE
                      </Link>
                    </p>
                    <Link to='#' className='btn btn-outline-primary'>
                      COPY CODE
                    </Link>
                  </div>
                </div>
                <div className='col-md-4 mb-3'>
                  <div className='bg-white shadow-sm rounded p-4'>
                    <p className='h6 mb-3'>
                      <span className='feather-home text-primary'></span>
                      <span className='ml-3'>FCH50</span>
                    </p>
                    <p className='font-weight-bold mb-2'>Get 20% cashback using Freecharge</p>
                    <p className='mb-4'>
                      Use code FCH50 and get 20% cashback up to Rs.50 on transaction using Freecharge.
                    </p>
                    <p>
                      <Link to='#' className='text-primary'>
                        + MORE
                      </Link>
                    </p>
                    <Link to='#' className='btn btn-outline-primary'>
                      COPY CODE
                    </Link>
                  </div>
                </div>
              </div>
              <h5 className='mb-3 mt-2'>Ưu đãi ngân hàng
              </h5>
              <div className='row'>
                <div className='col-md-4 mb-3'>
                  <div className='bg-white shadow-sm rounded p-4 d-flex'>
                    <div>
                      <img alt='#' src='img/axis.png' className='img-fluid' />
                    </div>
                    <div className='ml-4'>
                      <p className='mb-1 font-weight-bold'>Get 4% cashback with Flipkart Axis Bank Credit Card</p>
                      <p className='text-muted'>Get 4% cashback on orders using Flipkart Axis Bank Credit Cards</p>
                      <p className='mb-0'>
                        <Link to='#' className='text-primary'>
                          + MORE
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col-md-4 mb-3'>
                  <div className='bg-white shadow-sm rounded p-4 d-flex'>
                    <div>
                      <img alt='#' src='img/axis.png' className='img-fluid' />
                    </div>
                    <div className='ml-4'>
                      <p className='mb-1 font-weight-bold'>Get 4% cashback using Axis Bank Ace Credit Cards</p>
                      <p className='text-muted'>Get 4% cashback on orders using Axis Bank Ace Credit Cards</p>
                      <p className='mb-0'>
                        <Link to='#' className='text-primary'>
                          + MORE
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Offers
