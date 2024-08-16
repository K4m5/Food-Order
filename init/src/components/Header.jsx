import { CiSearch } from 'react-icons/ci'
import { FiDisc } from 'react-icons/fi'
import { IoNavigate, IoSearchOutline } from 'react-icons/io5'
import { LuUser } from 'react-icons/lu'
import { RiMapPinLine, RiShoppingCartLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='section-header'>
      <section className='header-main shadow-sm bg-white'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-1'>
              <Link to='/' className='brand-wrap mb-0'>
                <img alt='#' className='img-fluid' src='img/logo_web.png' />
              </Link>
            </div>
            <div className='col-3 d-flex align-items-center m-none'>
              <div className='dropdown mr-3'>
                <Link
                  className='text-dark dropdown-toggle d-flex align-items-center py-3'
                  to='#'
                  id='navbarDropdown'
                  role='button'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  <div>
                    <RiMapPinLine className=' mr-2  ' />
                  </div>

                  <div>
                    <p className='text-muted mb-0 small'>Chọn địa chỉ</p>
                    Korea
                  </div>
                </Link>
                <div className='dropdown-menu p-0 drop-loc' aria-labelledby='navbarDropdown'>
                  <div className='osahan-country'>
                    <div className='search_location bg-primary p-3 text-right'>
                      <div className='input-group rounded shadow-sm overflow-hidden'>
                        <div className='input-group-prepend'>
                          <button className='border-0 btn btn-outline-secondary text-dark bg-white btn-block'>
                            <CiSearch />
                          </button>
                        </div>
                        <input
                          type='text'
                          className='shadow-none border-0 form-control'
                          placeholder='Tìm kiếm'
                        />
                      </div>
                    </div>
                    <div className='p-3 border-bottom'>
                      <Link to='/' className='text-decoration-none'>
                        <p className='font-weight-bold text-primary m-0'>
                          <IoNavigate className='mr-2' />
                          New York, USA
                        </p>
                      </Link>
                    </div>
                    <div className='filter'>
                      <h6 className='px-3 py-3 bg-light pb-1 m-0 border-bottom'>Chọn quốc gia</h6>
                      <div className='custom-control  border-bottom px-0 custom-radio'>
                        <input type='radio' id='customRadio1' name='location' className='custom-control-input' />
                        <label className='custom-control-label py-3 w-100 px-3' htmlFor='customRadio1'>
                          Afghanistan
                        </label>
                      </div>
                      <div className='custom-control  border-bottom px-0 custom-radio'>
                        <input
                          type='radio'
                          id='customRadio2'
                          name='location'
                          className='custom-control-input'
                          defaultChecked
                        />
                        <label className='custom-control-label py-3 w-100 px-3' htmlFor='customRadio2'>
                          India
                        </label>
                      </div>
                      <div className='custom-control  border-bottom px-0 custom-radio'>
                        <input type='radio' id='customRadio3' name='location' className='custom-control-input' />
                        <label className='custom-control-label py-3 w-100 px-3' htmlFor='customRadio3'>
                          USA
                        </label>
                      </div>
                      <div className='custom-control  border-bottom px-0 custom-radio'>
                        <input type='radio' id='customRadio4' name='location' className='custom-control-input' />
                        <label className='custom-control-label py-3 w-100 px-3' htmlFor='customRadio4'>
                          Australia
                        </label>
                      </div>
                      <div className='custom-control  border-bottom px-0 custom-radio'>
                        <input type='radio' id='customRadio5' name='location' className='custom-control-input' />
                        <label className='custom-control-label py-3 w-100 px-3' htmlFor='customRadio5'>
                          Japan
                        </label>
                      </div>
                      <div className='custom-control  px-0 custom-radio'>
                        <input type='radio' id='customRadio6' name='location' className='custom-control-input' />
                        <label className='custom-control-label py-3 w-100 px-3' htmlFor='customRadio6'>
                          China
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-8'>
              <div className='d-flex align-items-center justify-content-end pr-5'>
                <Link to='/search' className='widget-header mr-4 text-dark'>
                  <div className='icon d-flex align-items-center'>
                    <IoSearchOutline className='h6 mr-2 mb-0' />

                    <span>Tìm kiếm</span>
                  </div>
                </Link>

                <Link to='/offers' className='widget-header mr-4 text-white btn bg-primary m-none'>
                  <div className='icon d-flex align-items-center'>
                    <FiDisc className=' h6 mr-2 mb-0' />

                    <span>Ưu đãi</span>
                  </div>
                </Link>

                <Link to='/login' className='widget-header mr-4 text-dark m-none'>
                  <div className='icon d-flex align-items-center'>
                    <LuUser className='h6 mr-2 mb-0' />

                    <span>Đăng nhập </span>
                  </div>
                </Link>

                <div className='dropdown mr-4 m-none'>
                  <Link
                    to='#'
                    className='dropdown-toggle text-dark py-3 d-block'
                    id='dropdownMenuButton'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    <img
                      alt='#'
                      src='img/user/1.jpg'
                      className='img-fluid rounded-circle header-user mr-2 header-user'
                    />
                    Hi Đỗ Quân
                  </Link>
                  <div className='dropdown-menu dropdown-menu-right' aria-labelledby='dropdownMenuButton'>
                    <Link className='dropdown-item' to='/profile'>
                      Tài khoản
                    </Link>
                    <Link className='dropdown-item' to='/faq'>
                    Câu hỏi thường gặp
                    </Link>
                    <Link className='dropdown-item' to='/contact'>
                      Liên hệ
                    </Link>
                    <Link className='dropdown-item' to='/terms'>
                    Điều khoản sử dụng

                    </Link>
                    <Link className='dropdown-item' to='/privacy'>
                    Chính sách bảo mật
                    </Link>
                    <Link className='dropdown-item' to='/login'>
                      Đăng xuất
                    </Link>
                  </div>
                </div>

                <Link to='/checkout' className='widget-header mr-4 text-dark'>
                  <div className='icon d-flex align-items-center'>
                    <RiShoppingCartLine className='h6 mr-2 mb-0' />

                    <span>Giỏ hàng</span>
                  </div>
                </Link>
                <Link className='toggle  ' to='#' role='button' aria-controls='hc-nav-1'>
                  <span></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  )
}

export default Header
