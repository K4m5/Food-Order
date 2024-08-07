import { Link } from 'react-router-dom'

const ForgotPassword = () => {
  return (
    <>
      <div className='px-5 col-10 mx-auto'>
        <h2>Quên mật khẩu</h2>
        <p>
        Nhập địa chỉ email của bạn bên dưới và chúng tôi sẽ gửi cho bạn một email kèm theo hướng dẫn về cách thay đổi mật khẩu của bạn

        </p>
        <form   className='mt-5 mb-4'>
          <div className='form-group'>
            <label htmlFor='exampleInputEmail1'>Email</label>
            <input type='email' className='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' />
          </div>
          <button className='btn btn-primary btn-lg btn-block'>Gửi</button>
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

export default ForgotPassword
