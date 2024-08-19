import { FiChevronsRight } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { CategoryItem, ProductItem, ProductSale, SliderItem } from "../../components";
import TrendingItem from "../../components/TrendingItem";

const Home = () => {
  const settingsCat = {
    slidesToShow: 8,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 4
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 4
        }
      }
    ]
  };

  const settingOther = {
    slidesToShow: 4,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 2
        }
      }
    ]
  };

  const settingTrendding = {
    slidesToShow: 3,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div className="osahan-home-page">
      <div className="bg-primary p-3 d-none">
        <div className="text-white">
          <div className="title d-flex align-items-center">
            <Link className="toggle" to="#">
              <span></span>
            </Link>
            <h4 className="font-weight-bold m-0 pl-5">Trang Chủ</h4>
            <Link
              className="text-white font-weight-bold ml-auto"
              data-toggle="modal"
              data-target="#exampleModal"
              to="#"
            >
              Lọc
            </Link>
          </div>
        </div>
        <div className="input-group mt-3 rounded shadow-sm overflow-hidden">
          <div className="input-group-prepend">
            <button className="border-0 btn btn-outline-secondary text-dark bg-white btn-block">
              <IoSearch />
            </button>
          </div>
          <input
            type="text"
            className="shadow-none border-0 form-control"
            placeholder="Tìm kiếm nhà hàng hoặc món ăn..."
          />
        </div>
      </div>

      <div className="container">
        <div className="cat-slider">
          <Slider {...settingsCat}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i, index) => (
              <CategoryItem key={index} />
            ))}
          </Slider>
        </div>
      </div>

      <div className="bg-white">
        <div className="container">
          <div className="offer-slider">
            <Slider {...settingOther}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i, index) => (
                <SliderItem key={index} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="pt-4 pb-2 title d-flex align-items-center">
          <h5 className="m-0">Xu hướng của tuần</h5>
          <Link className="font-weight-bold ml-auto" to="trending">
            Xem tất cả
            <FiChevronsRight />
          </Link>
        </div>

        <div className="trending-slider">
          <Slider {...settingTrendding}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <ProductItem key={i} />
            ))}
          </Slider>
        </div>

        <div className="py-3 title d-flex align-items-center">
          <h5 className="m-0">Phổ biến nhất</h5>
          <Link className="font-weight-bold ml-auto" to="most_popular">
            26 địa điểm <i className="feather-chevrons-right"></i>
          </Link>
        </div>

        <div className="most_popular">
          <div className="row">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i, index) => (
              <div key={index} className="col-md-3 pb-3">
                <TrendingItem />
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 pb-3 title d-flex align-items-center">
          <h5 className="m-0">Bán chạy</h5>
          <Link className="font-weight-bold ml-auto" to="#">
            26 địa điểm <i className="feather-chevrons-right"></i>
          </Link>
        </div>

        <div className="most_sale">
          <div className="row mb-3">
            {[1, 2, 3, 4].map((i, index) => (
              <div key={index} className="col-md-4 mb-3">
                <ProductSale />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
