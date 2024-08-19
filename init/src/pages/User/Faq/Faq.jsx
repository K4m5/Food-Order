const Faq = () => {
  return (
    <div className="osahan-cart-item-profile">
      <div className="box bg-white mb-3 shadow-sm rounded">
        <div className="p-3 d-flex align-items-center">
          <i className="feather-message-circle display-4"></i>
          <div className="ml-3">
            <h6 className="text-dark mb-2 mt-0">Diễn đàn trợ giúp</h6>
            <p className="mb-0 text-muted">Tìm câu trả lời cho bất kỳ câu hỏi nào, từ những điều cơ bản ...</p>
          </div>
        </div>
        <div className="overflow-hidden border-top d-flex align-items-center p-3">
          <a className="font-weight-bold d-block" href="#">
            Diễn đàn trợ giúp
          </a>
          <i className="feather-arrow-right-circle ml-auto text-primary"></i>
        </div>
      </div>
      <div className="box bg-white mb-3 shadow-sm rounded">
        <div className="p-3 d-flex align-items-center">
          <i className="feather-lock display-4"></i>
          <div className="ml-3">
            <h6 className="text-dark mb-2 mt-0">Trung tâm an toàn</h6>
            <p className="mb-0 text-muted">Bạn muốn tìm hiểu thêm về cách thiết lập và quản lý ...</p>
          </div>
        </div>
        <div className="overflow-hidden border-top d-flex align-items-center p-3">
          <a className="font-weight-bold d-block" href="#">
            Trung tâm An toàn
          </a>
          <i className="feather-arrow-right-circle ml-auto text-primary"></i>
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
                    <span className="feather-chevron-down"></span>
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
                    <span className="feather-chevron-down"></span>
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
                    <span className="feather-chevron-down"></span>
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
                    <span className="feather-chevron-down"></span>
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
                    <span className="feather-chevron-down"></span>
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
                1234
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
                    <span className="feather-chevron-down"></span>
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
                1234
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
                    <span className="feather-chevron-down"></span>
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
                1234
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
                    <span className="feather-chevron-down"></span>
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
                1234
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faq

