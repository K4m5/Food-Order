import { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import BannerMain from "../../components/BannerMain";
import CategoryMain from "../../components/CategoryMain";
import ProductMain from "../../components/ProductMain";
import { SidebarContext } from "../../context/SidebarContext";

const Home = () => {
  const { toggleSidebar } = useContext(SidebarContext);

  return (
    <div className="osahan-home-page">
      <div className="bg-primary p-3 d-none">
        <div className="text-white">
          <div className="title d-flex align-items-center">
          <div onClick={toggleSidebar}>
              <FaBars size={24} />
            </div>
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
   
      </div>

      <CategoryMain />

      <BannerMain />

      <div className="container">
        <ProductMain />
        {/* 
        <div className="py-3 title d-flex align-items-center">
          <h5 className="m-0">Phổ biến nhất</h5>
          <Link className="font-weight-bold ml-auto" to="most_popular">
            26 địa điểm
            <FiChevronsRight />
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
            26 địa điểm
            <FiChevronsRight />
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
        */}
      </div>
    </div>
  );
};

export default Home;
