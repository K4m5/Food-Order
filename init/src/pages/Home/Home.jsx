import { useContext } from "react";
import { FaBars } from "react-icons/fa";
import BannerMain from "../../components/BannerMain";
import CategoryMain from "../../components/CategoryMain";
import ProductMain from "../../components/ProductMain";
import FoodCategory from "../../components/FoodCategory";
import { SidebarContext } from "../../context/SidebarContext";
const Home = () => {
  const { toggleSidebar } = useContext(SidebarContext);
  return (
    <div className="osahan-home-page">
      <div className="d-none">
        <div className="bg-primary border-bottom p-3 d-flex align-items-center justify-content-between">
          <h4 className="font-weight-bold m-0 text-white">Trang chủ</h4>
          <div onClick={toggleSidebar}>
            <FaBars size={24} color="white" />
          </div>
        </div>
      </div>
      <CategoryMain />

      <BannerMain />
      <div className="container">
        <ProductMain />
        <FoodCategory />
      </div>
    </div>
  );
};

export default Home;
