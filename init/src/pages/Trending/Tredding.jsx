import { ProductItem } from '../../components'

const Tredding = () => {
  return (
    <>
      <div className="d-none">
        <div className="bg-primary p-3 d-flex align-items-center">
          <a className="toggle togglew toggle-2" href="#">
            <span></span>
          </a>
          <h4 className="font-weight-bold m-0 text-white">Trending</h4>
        </div>
      </div>
      <div className="osahan-trending">
        <div className="container">
          <div className="most_popular py-5">
            <div className="d-flex align-items-center mb-4">
              <h3 className="font-weight-bold text-dark mb-0">Xu hướng</h3>
              <a href="#" data-toggle="modal" data-target="#filters" className="ml-auto btn btn-primary">
                Lọc
              </a>
            </div>
            <div className="row">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i, index) => (
                <div key={index} className="col-lg-4 mb-3">
                  <ProductItem />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/*  modal - filters*/}
      <div
        className="modal fade"
        id="filters"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Lọc</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body p-0">
              <div className="osahan-filter">
                <div className="filter">
                  <div className="p-3 bg-light border-bottom">
                    <h6 className="m-0">Sắp xếp</h6>
                  </div>
                  <div className="custom-control border-bottom px-0  custom-radio">
                    <input
                      type="radio"
                      id="customRadio1f"
                      name="location"
                      className="custom-control-input"
                      defaultChecked
                    />
                    <label className="custom-control-label py-3 w-100 px-3" htmlFor="customRadio1f">
                      Đánh giá
                    </label>
                  </div>
                  <div className="custom-control border-bottom px-0  custom-radio">
                    <input type="radio" id="customRadio2f" name="location" className="custom-control-input" />
                    <label className="custom-control-label py-3 w-100 px-3" htmlFor="customRadio2f">
                      Gần nhất
                    </label>
                  </div>
                  <div className="custom-control border-bottom px-0  custom-radio">
                    <input type="radio" id="customRadio3f" name="location" className="custom-control-input" />
                    <label className="custom-control-label py-3 w-100 px-3" htmlFor="customRadio3f">
                      Giá cao đến thấp
                    </label>
                  </div>
                  <div className="custom-control border-bottom px-0  custom-radio">
                    <input type="radio" id="customRadio4f" name="location" className="custom-control-input" />
                    <label className="custom-control-label py-3 w-100 px-3" htmlFor="customRadio4f">
                      Giá thấp đến cao
                    </label>
                  </div>
                  <div className="custom-control border-bottom px-0  custom-radio">
                    <input type="radio" id="customRadio5f" name="location" className="custom-control-input" />
                    <label className="custom-control-label py-3 w-100 px-3" htmlFor="customRadio5f">
                      Phổ biến nhất
                    </label>
                  </div>

                  <div className="p-3 bg-light border-bottom">
                    <h6 className="m-0">Lọc</h6>
                  </div>
                  <div className="custom-control border-bottom px-0  custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="defaultCheck1" defaultChecked />
                    <label className="custom-control-label py-3 w-100 px-3" htmlFor="defaultCheck1">
                      Mở ngay
                    </label>
                  </div>
                  <div className="custom-control border-bottom px-0  custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="defaultCheck2" />
                    <label className="custom-control-label py-3 w-100 px-3" htmlFor="defaultCheck2">
                      Credit Cards
                    </label>
                  </div>
                  <div className="custom-control border-bottom px-0  custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="defaultCheck3" />
                    <label className="custom-control-label py-3 w-100 px-3" htmlFor="defaultCheck3">
                      Tuân thủ các quy định
                    </label>
                  </div>

                  <div className="p-3 bg-light border-bottom">
                    <h6 className="m-0">Lọc thêm</h6>
                  </div>
                  <div className="px-3 pt-3">
                    <input type="range" className="custom-range" min="0" max="100" name="minmax" />
                    <div className="form-row">
                      <div className="form-group col-6">
                        <label>Min</label>
                        <input className="form-control" placeholder="$0" type="number" />
                      </div>
                      <div className="form-group text-right col-6">
                        <label>Max</label>
                        <input className="form-control" placeholder="$1,0000" type="number" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer p-0 border-0">
              <div className="col-6 m-0 p-0">
                <button type="button" className="btn border-top btn-lg btn-block" data-dismiss="modal">
                  Đóng
                </button>
              </div>
              <div className="col-6 m-0 p-0">
                <button type="button" className="btn btn-primary btn-lg btn-block">
                  Áp dụng
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Tredding
