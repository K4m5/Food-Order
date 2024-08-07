 import { Link } from 'react-router-dom'

const Verification = () => {
  return (
    <>
      <div className='px-5 col-10 mx-auto mb-4'>
        <h2 className='mb-3'>Xác thực số điện thoại</h2>
        <h6 className='text-black-50'>Nhập code ở đây</h6>
        <form  >
          <div className='row my-5 mx-0 otp'>
            <div className='col pr-1 pl-0'>
              <input type='text' value='4' className='form-control form-control-lg' />
            </div>
            <div className='col px-2'>
              <input type='text' value='0' className='form-control form-control-lg' />
            </div>
            <div className='col px-2'>
              <input type='text' value='8' className='form-control form-control-lg' />
            </div>
            <div className='col pl-1 pr-0'>
              <input type='text' value='0' className='form-control form-control-lg' />
            </div>
          </div>
          <button className='btn btn-lg btn-primary btn-block'>Xác thực ngay</button>
        </form>
      </div>
      <div className='new-acc d-flex align-items-center justify-content-center'>
        <Link to='/login'>
          <p className='text-center m-0'>Bạn đã có tài khoản? Đăng nhập</p>
        </Link>
      </div>
    </>
  )
}

export default Verification
