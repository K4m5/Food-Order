import { FaRegStar, FaRegHeart } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";

const Favorite = () => {
  return (
    <div className="osahan-favorites">
      <div className="d-none">
        <div className="bg-primary border-bottom p-3 d-flex align-items-center">
          <a className="toggle togglew toggle-2" href="#">
            <span></span>
          </a>
          <h4 className="font-weight-bold m-0 text-white">Yêu thích</h4>
        </div>
      </div>

      <div className="container most_popular py-5">
        <h2 className="font-weight-bold mb-3">Yêu thích</h2>
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm grid-card">
              <div className="list-card-image">
                <div className="star position-absolute">
                  <span className="badge badge-success">
                    <FaRegStar />3.1 (300+)
                  </span>
                </div>
                <div className="favourite-heart text-danger position-absolute">
                  <a href="#">
                    <FaRegHeart />
                  </a>
                </div>
                <div className="member-plan position-absolute">
                  <span className="badge badge-dark">Promoted</span>
                </div>
                <a href="restaurant">
                  <img alt="#" src="img/trending1.png" className="img-fluid item-img w-100" />
                </a>
              </div>
              <div className="p-3 position-relative">
                <div className="list-card-body">
                  <h6 className="mb-1">
                    <a href="restaurant" className="text-black">
                      The osahan Restaurant
                    </a>
                  </h6>
                  <p className="text-gray mb-3">North • Hamburgers • Pure veg</p>
                  <p className="text-gray mb-3 time">
                    <span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2">
                      <CiClock2 />
                      15–25 min
                    </span>
                  </p>
                </div>
                <div className="list-card-badge">
                  <span className="badge badge-danger">OFFER</span> <small>65% OSAHAN50</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm grid-card">
              <div className="list-card-image">
                <div className="star position-absolute">
                  <span className="badge badge-success">
                    <FaRegStar /> 3.1 (300+)
                  </span>
                </div>
                <div className="favourite-heart text-danger position-absolute">
                  <a href="#">
                    <FaRegHeart />
                  </a>
                </div>
                <div className="member-plan position-absolute">
                  <span className="badge badge-dark">Promoted</span>
                </div>
                <a href="restaurant">
                  <img alt="#" src="img/trending2.png" className="img-fluid item-img w-100" />
                </a>
              </div>
              <div className="p-3 position-relative">
                <div className="list-card-body">
                  <h6 className="mb-1">
                    <a href="restaurant" className="text-black">
                      Thai Famous Cuisine
                    </a>
                  </h6>
                  <p className="text-gray mb-3">North Indian • Indian • Pure veg</p>
                  <p className="text-gray mb-3 time">
                    <span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2">
                      <CiClock2 />30–35 min
                    </span>
                    <span className="float-right text-black-50"> $250 FOR TWO</span>
                  </p>
                </div>
                <div className="list-card-badge">
                  <span className="badge badge-success">OFFER</span> <small>65% off</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm grid-card">
              <div className="list-card-image">
                <div className="star position-absolute">
                  <span className="badge badge-success">
                    <FaRegStar /> 3.1 (300+)
                  </span>
                </div>
                <div className="favourite-heart text-danger position-absolute">
                  <a href="#">
                    <FaRegHeart />
                  </a>
                </div>
                <div className="member-plan position-absolute">
                  <span className="badge badge-dark">Promoted</span>
                </div>
                <a href="restaurant">
                  <img alt="#" src="img/trending3.png" className="img-fluid item-img w-100" />
                </a>
              </div>
              <div className="p-3 position-relative">
                <div className="list-card-body">
                  <h6 className="mb-1">
                    <a href="restaurant" className="text-black">
                      The osahan Restaurant
                    </a>
                  </h6>
                  <p className="text-gray mb-3">North • Hamburgers • Pure veg</p>
                  <p className="text-gray mb-3 time">
                    <span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2">
                      <CiClock2 /> 15–25 min
                    </span>
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
          <div className="col-md-4 mb-3">
            <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm grid-card">
              <div className="list-card-image">
                <div className="star position-absolute">
                  <span className="badge badge-success">
                    <FaRegStar /> 3.1 (300+)
                  </span>
                </div>
                <div className="favourite-heart text-danger position-absolute">
                  <a href="#">
                    <FaRegHeart />
                  </a>
                </div>
                <div className="member-plan position-absolute">
                  <span className="badge badge-dark">Promoted</span>
                </div>
                <a href="restaurant">
                  <img alt="#" src="img/trending5.png" className="img-fluid item-img w-100" />
                </a>
              </div>
              <div className="p-3 position-relative">
                <div className="list-card-body">
                  <h6 className="mb-1">
                    <a href="restaurant" className="text-black">
                      The osahan Restaurant
                    </a>
                  </h6>
                  <p className="text-gray mb-3">North • Hamburgers • Pure veg</p>
                  <p className="text-gray mb-3 time">
                    <span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2">
                      <CiClock2 /> 15–25 min
                    </span>
                  </p>
                </div>
                <div className="list-card-badge">
                  <span className="badge badge-danger">OFFER</span> <small>65% OSAHAN50</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm grid-card">
              <div className="list-card-image">
                <div className="star position-absolute">
                  <span className="badge badge-success">
                    <FaRegStar /> 3.1 (300+)
                  </span>
                </div>
                <div className="favourite-heart text-danger position-absolute">
                  <a href="#">
                    <FaRegHeart />
                  </a>
                </div>
                <div className="member-plan position-absolute">
                  <span className="badge badge-dark">Promoted</span>
                </div>
                <a href="restaurant">
                  <img alt="#" src="img/trending6.png" className="img-fluid item-img w-100" />
                </a>
              </div>
              <div className="p-3 position-relative">
                <div className="list-card-body">
                  <h6 className="mb-1">
                    <a href="restaurant" className="text-black">
                      Bite Me Sandwiches
                    </a>
                  </h6>
                  <p className="text-gray mb-3">North Indian • American • Pure veg</p>
                  <p className="text-gray mb-3 time">
                    <span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2">
                      <CiClock2 /> 30–35 min
                    </span>
                  </p>
                </div>
                <div className="list-card-badge">
                  <span className="badge badge-success">OFFER</span> <small>65% off</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm grid-card">
              <div className="list-card-image">
                <div className="star position-absolute">
                  <span className="badge badge-success">
                    <FaRegStar /> 3.1 (300+)
                  </span>
                </div>
                <div className="favourite-heart text-danger position-absolute">
                  <a href="#">
                    <FaRegHeart />
                  </a>
                </div>
                <div className="member-plan position-absolute">
                  <span className="badge badge-dark">Promoted</span>
                </div>
                <a href="restaurant">
                  <img alt="#" src="img/trending7.png" className="img-fluid item-img w-100" />
                </a>
              </div>
              <div className="p-3 position-relative">
                <div className="list-card-body">
                  <h6 className="mb-1">
                    <a href="restaurant" className="text-black">
                      The osahan Restaurant
                    </a>
                  </h6>
                  <p className="text-gray mb-3">North • Hamburgers • Pure veg</p>
                  <p className="text-gray mb-3 time">
                    <span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2">
                      <CiClock2 /> 15–25 min
                    </span>
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
          <div className="col-md-4 mb-3">
            <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm grid-card">
              <div className="list-card-image">
                <div className="star position-absolute">
                  <span className="badge badge-success">
                    <FaRegStar /> 3.1 (300+)
                  </span>
                </div>
                <div className="favourite-heart text-danger position-absolute">
                  <a href="#">
                    <FaRegHeart />
                  </a>
                </div>
                <div className="member-plan position-absolute">
                  <span className="badge badge-dark">Promoted</span>
                </div>
                <a href="restaurant">
                  <img alt="#" src="img/trending4.png" className="img-fluid item-img w-100" />
                </a>
              </div>
              <div className="p-3 position-relative">
                <div className="list-card-body">
                  <h6 className="mb-1">
                    <a href="restaurant" className="text-black">
                      Bite Me Sandwiches
                    </a>
                  </h6>
                  <p className="text-gray mb-3">North Indian • American • Pure veg</p>
                  <p className="text-gray mb-3 time">
                    <span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2">
                      <CiClock2 /> 30–35 min
                    </span>
                    <span className="float-right text-black-50"> $250 FOR TWO</span>
                  </p>
                </div>
                <div className="list-card-badge">
                  <span className="badge badge-success">OFFER</span> <small>65% off</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm grid-card">
              <div className="list-card-image">
                <div className="star position-absolute">
                  <span className="badge badge-success">
                    <FaRegStar /> 3.1 (300+)
                  </span>
                </div>
                <div className="favourite-heart text-danger position-absolute">
                  <a href="#">
                    <FaRegHeart />
                  </a>
                </div>
                <div className="member-plan position-absolute">
                  <span className="badge badge-dark">Promoted</span>
                </div>
                <a href="restaurant">
                  <img alt="#" src="img/trending8.png" className="img-fluid item-img w-100" />
                </a>
              </div>
              <div className="p-3 position-relative">
                <div className="list-card-body">
                  <h6 className="mb-1">
                    <a href="restaurant" className="text-black">
                      Bite Me Sandwiches
                    </a>
                  </h6>
                  <p className="text-gray mb-3">North Indian • American • Pure veg</p>
                  <p className="text-gray mb-3 time">
                    <span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2">
                      <CiClock2 /> 30–35 min
                    </span>
                    <span className="float-right text-black-50"> $250 FOR TWO</span>
                  </p>
                </div>
                <div className="list-card-badge">
                  <span className="badge badge-success">OFFER</span> <small>65% off</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Favorite;
