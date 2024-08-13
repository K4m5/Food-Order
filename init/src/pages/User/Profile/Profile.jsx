import { Link } from "react-router-dom"

const Profile = () => {
  return (
    <>
      <h5 className='mb-4'>Tài khoản của tôi</h5>
      <div id='edit_profile'>
        <div>
          <form  >
            <div className='form-group'>
              <label htmlFor='exampleInputName1'>Tên</label>
              <input type='text' className='form-control' id='exampleInputName1d' value='Quân' />
            </div>
            <div className='form-group'>
              <label htmlFor='exampleInputName1'>Họ</label>
              <input type='text' className='form-control' id='exampleInputName1' value='Đỗ' />
            </div>
            <div className='form-group'>
              <label htmlFor='exampleInputNumber1'>Số điện thoại di động</label>
              <input type='number' className='form-control' id='exampleInputNumber1' value='1234567890' />
            </div>
            <div className='form-group'>
              <label htmlFor='exampleInputEmail1'>Email</label>
              <input type='email' className='form-control' id='exampleInputEmail1' value='abc@gmail.com' />
            </div>
            <div className='text-center'>
              <button type='submit' className='btn btn-primary btn-block'>
              Lưu thay đổi
              </button>
            </div>
          </form>
        </div>
        <div className='additional'>
          <div className='change_password my-3'>
            <Link to='forgot_password' className='p-3 border rounded bg-white btn d-flex align-items-center'>
            Thay đổi mật khẩu
              <i className='feather-arrow-right ml-auto'></i>
            </Link>
          </div>
          <div className='deactivate_account'>
            <Link to='/forgot_password' className='p-3 border rounded bg-white btn d-flex align-items-center'>
            Vô hiệu hóa tài khoản
              <i className='feather-arrow-right ml-auto'></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
