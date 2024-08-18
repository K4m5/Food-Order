import { Link } from "react-router-dom"

 
const Privacy = () => {
  return (
    <>
    <div className='osahan-privacy bg-white rounded shadow-sm p-4'>
      <div id='intro' className='mb-4'>
        <div className='mb-3'>
          <h2 className='h5 text-primary'>Giới thiệu</h2>
        </div>

        <p>Cảm ơn bạn đã sử dụng sản phẩm và dịch vụ của chúng tôi.</p>
        
      </div>
      <div id='services' className='mb-4'>
        <div className='mb-3'>
          <h3 className='h5 text-primary'>1. Sử dụng dịch vụ của chúng tôi</h3>
        </div>

        <p>Bạn phải tuân theo mọi chính sách được cung cấp cho bạn trong Dịch vụ.</p>
        <p>
        Đừng lạm dụng Dịch vụ của chúng tôi. Ví dụ: không can thiệp vào Dịch vụ của chúng tôi hoặc cố truy cập chúng bằng phương pháp khác ngoài giao diện và hướng dẫn mà chúng tôi cung cấp. Bạn chỉ có thể sử dụng Dịch vụ của chúng tôi khi được pháp luật cho phép, bao gồm các luật và quy định hiện hành về kiểm soát xuất khẩu và tái xuất khẩu. Chúng tôi có thể tạm dừng hoặc ngừng cung cấp Dịch vụ cho bạn nếu bạn không tuân thủ các điều khoản hoặc chính sách của chúng tôi hoặc nếu chúng tôi đang điều tra hành vi bị nghi ngờ là sai trái.
        </p>

        <div id='personal-data' className='mb-3 active'>
          <h4 className='h6 text-primary'>A. Dữ liệu cá nhân mà chúng tôi thu thập về bạn.</h4>
        </div>

        <p>
        Dữ liệu cá nhân là bất kỳ thông tin nào liên quan đến một cá nhân được xác định hoặc có thể nhận dạng. Dữ liệu cá nhân
        mà bạn cung cấp trực tiếp cho chúng tôi thông qua Trang web của chúng tôi sẽ được thể hiện rõ ràng trong bối cảnh bạn cung cấp
        dữ liệu. Đặc biệt:
        </p>
        <ul className='text-secondary'>
          <li className='pb-2'>
          Khi bạn đăng ký tài khoản , chúng tôi sẽ thu thập tên đầy đủ, địa chỉ email và thông tin đăng nhập tài khoản của bạn
          thông tin xác thực.
          </li>
          <li className='pb-2'>
          Khi bạn điền vào mẫu liên hệ trực tuyến để yêu cầu hỗ trợ hoặc gửi phản hồi, chúng tôi sẽ thu thập tên đầy đủ, email công việc (nếu có), quốc gia và bất kỳ thông tin nào khác bạn cung cấp về yêu cầu của bạn. Thông tin này giúp chúng tôi hỗ trợ bạn hiệu quả hơn và cải thiện dịch vụ của chúng tôi.
          </li>
          <li className='pb-2'>
          Khi bạn sử dụng tính năng trong quá trình thanh toán, chúng tôi sẽ thu thập địa chỉ email, số thẻ thanh toán, mã CVC và ngày hết hạn của thẻ. Những thông tin này giúp bạn tiết kiệm thời gian trong các giao dịch sau và bảo mật thông tin thanh toán của bạn.
          </li>
        </ul>
        <p>
          Khi bạn trả lời email hoặc khảo sát, chúng tôi sẽ thu thập địa chỉ email, tên của bạn và bất kỳ thông tin nào khác
          thông tin bạn chọn đưa vào nội dung email hoặc phản hồi của mình. Nếu bạn liên hệ với chúng tôi qua điện thoại, chúng tôi
          sẽ thu thập số điện thoại bạn sử dụng. Nếu bạn liên hệ với chúng tôi qua điện thoại với tư cách là Người dùng, chúng tôi
          có thể thu thập thêm thông tin để xác minh danh tính của bạn.
        </p>

        <div id='information' className='mb-3 active'>
          <h4 className='h6 text-primary'>B. Thông tin mà chúng tôi thu thập tự động trên Trang web của chúng tôi.</h4>
        </div>

        <p>
          Chúng tôi cũng có thể thu thập thông tin về các hoạt động trực tuyến của bạn trên các trang web và thiết bị được kết nối theo thời gian và
          trên các trang web, thiết bị, ứng dụng của bên thứ ba cũng như các tính năng và dịch vụ trực tuyến khác.
        </p>
        <p>
        Để tìm hiểu thêm về các cookie có thể được cung cấp thông qua Trang web của chúng tôi và cách bạn có thể kiểm soát việc sử dụng cookie và phân tích của bên thứ ba, vui lòng xem Chính sách cookie của chúng tôi.
        </p>
      </div>
      <div id='privacy' className='mb-4'>
        <div className='mb-3'>
          <h3 className='h5 text-primary'>2. Bảo vệ quyền riêng tư và bản quyềnn</h3>
        </div>

        <p>
        Chính sách quyền riêng tư giải thích cách chúng tôi xử lý dữ liệu cá nhân của bạn và bảo vệ quyền riêng tư của bạn khi bạn sử dụng.
        </p>
        <p>
        Chúng tôi phản hồi các thông báo về cáo buộc vi phạm bản quyền và chấm dứt tài khoản của những người vi phạm nhiều lần theo quy trình. 
        </p>
        <p>
        Chúng tôi cung cấp thông tin để giúp chủ bản quyền quản lý tài sản trí tuệ của họ trực tuyến. Nếu bạn cho rằng ai đó đang vi phạm bản quyền của bạn và muốn thông báo cho chúng tôi, bạn có thể tìm thông tin về cách gửi thông báo và chính sách về việc phản hồi thông báo trong Trung tâm trợ giúp của chúng tôi.
           <p><Link to='help'>Our Help Center</Link>.</p>
        </p>
      </div>
      <div id='yourContent' className='active'>
        <div className='mb-3'>
          <h3 className='h5 text-primary'>3. Nội dung của bạn trong các dịch vụ của chúng tôi</h3>
        </div>

        <p>
        Một số Dịch vụ của chúng tôi cho phép bạn tải lên, gửi, lưu trữ, gửi hoặc nhận nội dung. Bạn giữ quyền sở hữu mọi quyền sở hữu trí tuệ mà bạn nắm giữ đối với nội dung đó. Tóm lại, những gì thuộc về bạn vẫn là của bạn.
        </p>
        <p>
        Khi bạn tải lên, gửi, lưu trữ, gửi hoặc nhận nội dung đến hoặc thông qua Dịch vụ của chúng tôi, bạn cấp cho (và những người chúng tôi hợp tác cùng) giấy phép trên toàn thế giới để sử dụng, lưu trữ, lưu trữ, sao chép, sửa đổi, tạo các tác phẩm phái sinh (chẳng hạn như các tác phẩm bắt nguồn từ bản dịch, điều chỉnh hoặc các thay đổi khác mà chúng tôi thực hiện để nội dung của bạn hoạt động tốt hơn với Dịch vụ của chúng tôi), truyền đạt, xuất bản, trình diễn công khai, hiển thị và phân phối công khai nội dung đó.
        </p>
      </div>
    </div>
  </>
  )
}

export default Privacy
