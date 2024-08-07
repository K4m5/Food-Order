import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='px-5 col-10 mx-auto'>
    <h2 className='text-dark my-0'>Chào mừng bạn chờ lai</h2>
    <p className='text-50'>Tiếp tục đăng nhập</p>
    <form className='mt-5 mb-4'  >
      <div className='form-group'>
        <label htmlFor='exampleInputEmail1' className='text-dark'>
          Email
        </label>
        <input
          type='email'
          placeholder='Enter Email'
          className='form-control'
          id='exampleInputEmail1'
          aria-describedby='emailHelp'
        />
      </div>
      <div className='form-group'>
        <label htmlFor='exampleInputPassword1' className='text-dark'>
          Mật khẩu
        </label>
        <input
          type='password'
          placeholder='Enter Password'
          className='form-control'
          id='exampleInputPassword1'
        />
      </div>
      <button className='btn btn-primary btn-lg btn-block'>Đăng nhập</button>
      <div className='py-2'>
        <button className='btn btn-lg btn-facebook btn-block'>
          <i className='feather-facebook'></i> Đăng nhập với Facebook
        </button>
      </div>
    </form>
    <Link to={'/forgot'} className='text-decoration-none'>
  
      <p className='text-center'>Quên mật khẩu?</p>
      </Link>
    <div className='d-flex align-items-center justify-content-center'>
      <Link to={'/sign-up'}>
        <p className='text-center m-0'>Bạn chưa có tài khoản? Đăng ký</p>
      </Link>
    </div>
  </div>
  )
}

export default Login
