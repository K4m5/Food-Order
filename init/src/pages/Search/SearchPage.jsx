import { Link } from 'react-router-dom'
import { FaHome, FaRegHeart, FaRegStar, FaSearch} from "react-icons/fa";
import { MdOutlineFastfood } from "react-icons/md";
import { IoMdRefresh } from "react-icons/io";

const SearchPage = () => {
  return (
    <>
      <div className="d-none">
        <div className="bg-primary p-3 d-flex align-items-center">
          <Link className="toggle togglew toggle-2" to="#">
            <span></span>
          </Link>
          <h4 className="font-weight-bold m-0 text-white">Search</h4>
        </div>
      </div>
      <div className="osahan-popular">
        <div className="container">
          <div className="search py-5">
            <div className="input-group mb-4">
              <input    
                type="text"
                className="form-control form-control-lg input_search border-right-0"
                id="inlineFormInputGroup"
                value="Tìm kiếm ..."
              />
              <div className="input-group-prepend">
                <div className="btn input-group-text bg-white border_search border-left-0 text-primary">
                <FaSearch />
                </div>
              </div>
            </div>

            <ul className="nav nav-tabs border-0" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <Link
                  className="nav-link active border-0 bg-light text-dark rounded"
                  id="home-tab"
                  data-toggle="tab"
                  to="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <FaHome />
                  Nhà hàng (8)
                </Link>
              </li>
              <li className="nav-item" role="presentation">
                <Link
                  className="nav-link border-0 bg-light text-dark rounded ml-3"
                  id="profile-tab"
                  data-toggle="tab"
                  to="#profile"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <MdOutlineFastfood />
                  Món ăn (23)
                </Link>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <div className="container mt-4 mb-4 p-0">
                  
                  <div className="row">

                    <div className="col-md-3 pb-3">
                      <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                        <div className="list-card-image">
                          <div className="star position-absolute">
                            <span className="badge badge-success">
                            <FaRegStar />
                            3.1 (300+)
                            </span>
                          </div>
                          <div className="favourite-heart text-danger position-absolute">
                            <Link to="#">
                            <FaRegHeart />
                            </Link>
                          </div>
                          <div className="member-plan position-absolute">
                            <span className="badge badge-dark">Promoted</span>
                          </div>
                          <Link to="restaurant">
                            <img alt="#" src="img/popular1.png" className="img-fluid item-img w-100" />
                          </Link>
                        </div>
                        <div className="p-3 position-relative">
                          <div className="list-card-body">
                            <h6 className="mb-1">
                              <Link to="restaurant" className="text-black">
                                The osahan Restaurant
                              </Link>
                            </h6>
                            <p className="text-gray mb-1 small">• North • Hamburgers</p>
                            <p className="text-gray mb-1 rating">
                              <ul className="rating-stars list-unstyled">
                                <li>
                                <FaRegStar className="feather-star star_active" />
                                <FaRegStar className="feather-star star_active" />
                                <FaRegStar className="feather-star star_active" />
                                <FaRegStar className="feather-star star_active" />
                                <FaRegStar className="feather-star  " />
                                </li>
                              </ul>
                            </p>
                          </div>
                          <div className="list-card-badge">
                            <span className="badge badge-danger">OFFER</span> <small>65% OSAHAN50</small>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-3 pb-3">
                      <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                        <div className="list-card-image">
                          <div className="star position-absolute">
                            <span className="badge badge-success">
                            <FaRegStar />
                            3.1 (300+)
                            </span>
                          </div>
                          <div className="favourite-heart text-danger position-absolute">
                            <Link to="#">
                            <FaRegHeart />
                            </Link>
                          </div>
                          <div className="member-plan position-absolute">
                            <span className="badge badge-dark">Promoted</span>
                          </div>
                          <Link to="restaurant">
                            <img alt="#" src="img/popular2.png" className="img-fluid item-img w-100" />
                          </Link>
                        </div>
                        <div className="p-3 position-relative">
                          <div className="list-card-body">
                            <h6 className="mb-1">
                              <Link to="restaurant" className="text-black">
                                Thai Famous Indian Cuisine
                              </Link>
                            </h6>
                            <p className="text-gray mb-1 small">• Indian • Pure veg</p>
                            <p className="text-gray mb-1 rating">
                              <ul className="rating-stars list-unstyled">
                                <li>
                                <FaRegStar className="feather-star star_active" />
                                <FaRegStar className="feather-star star_active" />
                                <FaRegStar className="feather-star star_active" />
                                <FaRegStar className="feather-star star_active" />
                                <FaRegStar className="feather-star  " />
                                </li>
                              </ul>
                            </p>
                          </div>
                          <div className="list-card-badge">
                            <span className="badge badge-success">OFFER</span> <small>65% off</small>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-3 pb-3">
                      <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                        <div className="list-card-image">
                          <div className="star position-absolute">
                            <span className="badge badge-success">
                            <FaRegStar />
                            3.1 (300+)
                            </span>
                          </div>
                          <div className="favourite-heart text-danger position-absolute">
                            <Link to="#">
                            <FaRegHeart />
                            </Link>
                          </div>
                          <div className="member-plan position-absolute">
                            <span className="badge badge-dark">Promoted</span>
                          </div>
                          <Link to="restaurant">
                            <img alt="#" src="img/popular3.png" className="img-fluid item-img w-100" />
                          </Link>
                        </div>
                        <div className="p-3 position-relative">
                          <div className="list-card-body">
                            <h6 className="mb-1">
                              <Link to="restaurant" className="text-black">
                                The osahan Restaurant
                              </Link>
                            </h6>
                            <p className="text-gray mb-1 small">• Hamburgers • Pure veg</p>
                            <p className="text-gray mb-1 rating">
                              <ul className="rating-stars list-unstyled">
                                <li>
                                <FaRegStar className="feather-star star_active" />
                                <FaRegStar className="feather-star star_active" />
                                <FaRegStar className="feather-star star_active" />
                                <FaRegStar className="feather-star star_active" />
                                <FaRegStar className="feather-star  " />
                                </li>
                              </ul>
                            </p>
                          </div>
                          <div className="list-card-badge">
                            <span className="badge badge-danger">OFFER</span> <small>65% OSAHAN50</small>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-3 pb-3">
                      <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                        <div className="list-card-image">
                          <div className="star position-absolute">
                            <span className="badge badge-success">
                            <FaRegStar />
                            3.1 (300+)
                            </span>
                          </div>
                          <div className="favourite-heart text-danger position-absolute">
                            <Link to="#">
                            <FaRegHeart />
                            </Link>
                          </div>
                          <div className="member-plan position-absolute">
                            <span className="badge badge-dark">Promoted</span>
                          </div>
                          <Link to="restaurant">
                            <img alt="#" src="img/popular4.png" className="img-fluid item-img w-100" />
                          </Link>
                        </div>
                        <div className="p-3 position-relative">
                          <div className="list-card-body">
                            <h6 className="mb-1">
                              <Link to="restaurant" className="text-black">
                                Bite Me Sandwiches
                              </Link>
                            </h6>
                            <p className="text-gray mb-1 small">• North • Hamburgers</p>
                            <p className="text-gray mb-1 rating">
                              <ul className="rating-stars list-unstyled">
                                <li>
                                <FaRegStar className="feather-star star_active" />
                                <FaRegStar className="feather-star star_active" />
                                <FaRegStar className="feather-star star_active" />
                                <FaRegStar className="feather-star star_active" />
                                <FaRegStar className="feather-star  " />
                                </li>
                              </ul>
                            </p>
                          </div>
                          <div className="list-card-badge">
                            <span className="badge badge-danger">OFFER</span> <small>65% OSAHAN50</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="text-center load-more">
                        <button className="btn btn-primary" >
                        <IoMdRefresh />
                        Load More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchPage;
