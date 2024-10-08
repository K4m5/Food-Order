import { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
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
        <div className="input-group mt-3 rounded shadow-sm overflow-hidden">
          <div className="input-group-prepend">
            <button className="border-0 btn btn-outline-secondary text-dark bg-white btn-block">
              <IoSearch />
            </button>
          </div>
          <input
            type="text"
            className="shadow-none border-0 form-control"
            placeholder="Search for restaurants or dishes"
          />
        </div>
      </div>
      <CategoryMain />

      <BannerMain />
      <div className="container">
        <ProductMain />
      </div>
    </div>
  );
};

export default Home;
