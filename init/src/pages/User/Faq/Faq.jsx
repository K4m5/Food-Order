import { FaRegMessage } from "react-icons/fa6";
import { CiLock } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";

const Faq = () => {
  return (
    <div className="osahan-cart-item-profile">
      <div className="box bg-white mb-3 shadow-sm rounded">
        <div className="p-3 d-flex align-items-center">
        <FaRegMessage size={50} />
          <div className="ml-3">
            <h6 className="text-dark mb-2 mt-0">Diễn đàn trợ giúp</h6>
            <p className="mb-0 text-muted">Tìm câu trả lời cho bất kỳ câu hỏi nào, từ những điều cơ bản ...</p>
          </div>
        </div>
        <div className="overflow-hidden border-top p-3">
          <a className="font-weight-bold d-block" href="#">
            Diễn đàn trợ giúp
          </a>
        </div>
      </div>
      <div className="box bg-white mb-3 shadow-sm rounded">
        <div className="p-3 d-flex align-items-center">
        <CiLock size={50}/>
          <div className="ml-3">
            <h6 className="text-dark mb-2 mt-0">Trung tâm an toàn</h6>
            <p className="mb-0 text-muted">Bạn muốn tìm hiểu thêm về cách thiết lập và quản lý ...</p>
          </div>
        </div>
        <div className="overflow-hidden border-top p-3">
          <a className="font-weight-bold d-block" href="#">
            Trung tâm An toàn
          </a>
        </div>
      </div>
      <div id="basics">
        <div className="mb-2 mt-3">
          <h5 className="font-weight-semi-bold mb-0">Câu hỏi thường gặp</h5>
        </div>

        <div id="basicsAccordion">
          <div className="box border-bottom bg-white mb-2 rounded shadow-sm overflow-hidden">
            <div id="basicsHeadingOne">
              <h5 className="mb-0">
                <button
                  className="shadow-none btn btn-block d-flex justify-content-between card-btn p-3 collapsed"
                  data-toggle="collapse"
                  data-target="#basicsCollapseOne"
                  aria-expanded="false"
                  aria-controls="basicsCollapseOne"
                >
                  Làm thế nào để đặt đồ ăn trên trang web của chúng tôi ?
                  <span className="card-btn-arrow">
                  <FaChevronDown />
                  </span>
                </button>
              </h5>
            </div>
            <div
              id="basicsCollapseOne"
              className="collapse show"
              aria-labelledby="basicsHeadingOne"
              data-parent="#basicsAccordion"
            >
              <div className="card-body border-top p-3 text-muted">
                Bạn có thể chọn món ăn từ danh sách menu, sau đó thêm vào giỏ hàng và làm theo hướng dẫn để hoàn tất đơn hàng.
              </div>
            </div>
          </div>
          <div className="box border-bottom bg-white mb-2 rounded shadow-sm overflow-hidden">
            <div id="basicsHeadingTwo">
              <h5 className="mb-0">
                <button
                  className="shadow-none btn btn-block d-flex justify-content-between card-btn p-3 collapsed"
                  data-toggle="collapse"
                  data-target="#basicsCollapseTwo"
                  aria-expanded="false"
                  aria-controls="basicsCollapseTwo"
                >
                  Tôi có thể thanh toán bằng những phương thức nào ?
                  <span className="card-btn-arrow">
                  <FaChevronDown />
                  </span>
                </button>
              </h5>
            </div>
            <div
              id="basicsCollapseTwo"
              className="collapse"
              aria-labelledby="basicsHeadingTwo"
              data-parent="#basicsAccordion"
            >
              <div className="card-body border-top p-3 text-muted">
                Chúng tôi chấp nhận thanh toán qua thẻ tín dụng, thẻ ghi nợ, ví điện tử, và tiền mặt khi nhận hàng.
              </div>
            </div>
          </div>
          <div className="box border-bottom bg-white mb-2 rounded shadow-sm overflow-hidden">
            <div id="basicsHeadingThree">
              <h5 className="mb-0">
                <button
                  className="shadow-none btn btn-block d-flex justify-content-between card-btn p-3 collapsed"
                  data-toggle="collapse"
                  data-target="#basicsCollapseThree"
                  aria-expanded="false"
                  aria-controls="basicsCollapseThree"
                >
                  Làm thế nào để theo dõi đơn hàng của tôi ?
                  <span className="card-btn-arrow">
                  <FaChevronDown />
                  </span>
                </button>
              </h5>
            </div>
            <div
              id="basicsCollapseThree"
              className="collapse"
              aria-labelledby="basicsHeadingThree"
              data-parent="#basicsAccordion"
            >
              <div className="card-body border-top p-3 text-muted">
                Sau khi đặt hàng, bạn sẽ nhận được một mã theo dõi. Bạn có thể nhập mã này trên trang web của chúng tôi để kiểm tra trạng thái đơn hàng.
              </div>
            </div>
          </div>
          <div className="box border-bottom bg-white mb-2 rounded shadow-sm overflow-hidden">
            <div id="basicsHeadingFour">
              <h5 className="mb-0">
                <button
                  className="shadow-none btn btn-block d-flex justify-content-between card-btn collapsed p-3"
                  data-toggle="collapse"
                  data-target="#basicsCollapseFour"
                  aria-expanded="false"
                  aria-controls="basicsCollapseFour"
                >
                  Phí giao hàng được tính như thế nào?
                  <span className="card-btn-arrow">
                  <FaChevronDown />
                  </span>
                </button>
              </h5>
            </div>
            <div
              id="basicsCollapseFour"
              className="collapse"
              aria-labelledby="basicsHeadingFour"
              data-parent="#basicsAccordion"
            >
              <div className="card-body border-top p-3 text-muted">
                Phí giao hàng sẽ được hiển thị trong quá trình thanh toán và phụ thuộc vào khoảng cách từ nhà hàng đến địa chỉ của bạn.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="account">
        <div className="mb-2 mt-3">
          <h5 className="font-weight-semi-bold mb-0">Tài khoản</h5>
        </div>

        <div id="accountAccordion">
          <div className="box border-bottom bg-white mb-2 rounded shadow-sm overflow-hidden">
            <div id="accountHeadingOne">
              <h5 className="mb-0">
                <button
                  className="shadow-none btn btn-block d-flex justify-content-between card-btn p-3"
                  data-toggle="collapse"
                  data-target="#accountCollapseOne"
                  aria-expanded="false"
                  aria-controls="accountCollapseOne"
                >
                  Làm cách nào để thay đổi mật khẩu của tôi ?
                  <span className="card-btn-arrow">
                  <FaChevronDown />
                  </span>
                </button>
              </h5>
            </div>
            <div
              id="accountCollapseOne"
              className="collapse show"
              aria-labelledby="accountHeadingOne"
              data-parent="#accountAccordion"
            >
              <div className="card-body border-top p-3 text-muted">
              Để thay đổi mật khẩu của bạn, hãy đăng nhập vào tài khoản, vào mục "Cài đặt" hoặc "Bảo mật." Tìm phần "Thay đổi mật khẩu" và nhập mật khẩu hiện tại cùng mật khẩu mới của bạn. Xác nhận thay đổi bằng cách nhấn "Lưu" hoặc "Cập nhật." Nếu bạn quên mật khẩu, hãy chọn tùy chọn "Quên mật khẩu" trên màn hình đăng nhập để nhận hướng dẫn đặt lại mật khẩu qua email.
              </div>
            </div>
          </div>

          <div className="box border-bottom bg-white mb-2 rounded shadow-sm overflow-hidden">
            <div id="accountHeadingTwo">
              <h5 className="mb-0">
                <button
                  className="shadow-none btn btn-block d-flex justify-content-between card-btn collapsed p-3"
                  data-toggle="collapse"
                  data-target="#accountCollapseTwo"
                  aria-expanded="false"
                  aria-controls="accountCollapseTwo"
                >
                  Làm cách nào để xóa tài khoản của tôi ?
                  <span className="card-btn-arrow">
                  <FaChevronDown />
                  </span>
                </button>
              </h5>
            </div>
            <div
              id="accountCollapseTwo"
              className="collapse"
              aria-labelledby="accountHeadingTwo"
              data-parent="#accountAccordion"
            >
              <div className="card-body border-top p-3 text-muted">
              Để xóa tài khoản của bạn, hãy đăng nhập vào tài khoản và truy cập vào mục "Cài đặt" hoặc "Quản lý tài khoản." Tìm tùy chọn "Xóa tài khoản" hoặc "Đóng tài khoản" và làm theo các hướng dẫn. Lưu ý rằng việc xóa tài khoản là hành động không thể hoàn tác, nên hãy đảm bảo bạn đã sao lưu các thông tin quan trọng trước khi xác nhận.
              </div>
            </div>
          </div>

          <div className="box border-bottom bg-white mb-2 rounded shadow-sm overflow-hidden">
            <div id="accountHeadingThree">
              <h5 className="mb-0">
                <button
                  className="shadow-none btn btn-block d-flex justify-content-between card-btn collapsed p-3"
                  data-toggle="collapse"
                  data-target="#accountCollapseThree"
                  aria-expanded="false"
                  aria-controls="accountCollapseThree"
                >
                  Làm cách nào để thay đổi cài đặt tài khoản của tôi ?
                  <span className="card-btn-arrow">
                  <FaChevronDown />
                  </span>
                </button>
              </h5>
            </div>
            <div
              id="accountCollapseThree"
              className="collapse"
              aria-labelledby="accountHeadingThree"
              data-parent="#accountAccordion"
            >
              <div className="card-body border-top p-3 text-muted">
              Để thay đổi cài đặt tài khoản của bạn, hãy đăng nhập vào tài khoản, sau đó điều hướng đến mục "Cài đặt" hoặc "Tài khoản" trong menu. Tại đây, bạn có thể cập nhật thông tin cá nhân, thay đổi mật khẩu, và quản lý các tùy chọn bảo mật khác. Sau khi thực hiện xong các thay đổi, nhớ nhấn "Lưu" để lưu lại các cập nhật.
              </div>
            </div>
          </div>

          <div className="box border-bottom bg-white mb-2 rounded shadow-sm overflow-hidden">
            <div id="accountHeadingFour">
              <h5 className="mb-0">
                <button
                  className="shadow-none btn btn-block d-flex justify-content-between card-btn collapsed p-3"
                  data-toggle="collapse"
                  data-target="#accountCollapseFour"
                  aria-expanded="false"
                  aria-controls="accountCollapseFour"
                >
                  Tôi quên mật khẩu của mình. Làm cách nào để thiết lập lại nó ?
                  <span className="card-btn-arrow">
                  <FaChevronDown />
                  </span>
                </button>
              </h5>
            </div>
            <div
              id="accountCollapseFour"
              className="collapse"
              aria-labelledby="accountHeadingFour"
              data-parent="#accountAccordion"
            >
              <div className="card-body border-top p-3 text-muted">
              Nếu bạn quên mật khẩu, hãy truy cập vào trang đăng nhập và nhấp vào liên kết "Quên mật khẩu." Nhập địa chỉ email đã đăng ký của bạn và làm theo hướng dẫn để nhận email đặt lại mật khẩu. Sau khi nhận được email, nhấp vào liên kết trong đó và tạo mật khẩu mới. Nếu bạn không nhận được email, hãy kiểm tra thư mục "Spam" hoặc liên hệ với bộ phận hỗ trợ khách hàng để được giúp đỡ.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faq

