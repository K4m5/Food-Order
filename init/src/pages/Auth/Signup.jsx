import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <>
      <div className='px-5 col-10 mx-auto'>
        <h2 className='text-dark my-0'>Xin chào</h2>
        <p className='text-50'>Tiếp tục đăng ký</p>
        <form className='mt-5 mb-4'  >
          <div className='form-group'>
            <label htmlFor='exampleInputName1' className='text-dark'>
              Tên
            </label>
            <input
              type='text'
              placeholder='Enter Name'
              className='form-control'
              id='exampleInputName1'
              aria-describedby='nameHelp'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='exampleInputNumber1' className='text-dark'>
              Số điện thoại
            </label>
            <input
              type='number'
              placeholder='Enter Mobile'
              className='form-control'
              id='exampleInputNumber1'
              aria-describedby='numberHelp'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='exampleInputPassword1' className='text-dark'>
              Mật khẩu
            </label>
            <input type='password' placeholder='Enter Password' className='form-control' id='exampleInputPassword1' />
          </div>
          <button className='btn btn-primary btn-lg btn-block'>Đăng ký</button>
          <div className='py-2'>
            <button className='btn btn-facebook btn-lg btn-block'>
              <i className='feather-facebook'></i> Đăng ký với Facebook
            </button>
          </div>
        </form>
      </div>
      <div className='new-acc d-flex align-items-center justify-content-center'>
        <Link to={'/login'}>
          <p className='text-center m-0'>Bạn đã có tài khoản? Đăng nhập</p>
        </Link>
      </div>
    </>
  )
}

export default Signup
