import { useContext, useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner";
import ProductItem from "../../components/ProductItem";
import { SidebarContext } from "../../context/SidebarContext";
import {
  fetchCategoryById,
  fetchFoodByCategory,
} from "../../features/category/categorySlice";

const FoodByCategory = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { toggleSidebar } = useContext(SidebarContext);

  const {
    foodByCategory,
    category,
    status,
    currentPage,
    totalPages,
    prev,
    next,
  } = useSelector((state) => state.category);
  const [page, setPage] = useState(1);
  const limit = 10;

  useEffect(() => {
    dispatch(fetchFoodByCategory({ id, page, limit }));
  }, [dispatch, id, page]);

  useEffect(() => {
    dispatch(fetchCategoryById({ id }));
  }, [dispatch, id]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <>
      <div className="d-none">
        <div className="bg-primary border-bottom p-3 d-flex align-items-center justify-content-between">
          <h4 className="font-weight-bold m-0 text-white">Danh sách món ăn</h4>
          <div onClick={toggleSidebar}>
            <FaBars size={24} color="white" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="py-5">
          <div className="row">
            <div className="col-md-12 mb-2">
              <h2>Danh sách món ăn của {category?.name}</h2>
            </div>
            {status === "loading" && (
              <div className="col-md-12 text-center">
                <LoadingSpinner />
              </div>
            )}
            {foodByCategory.map((food, index) => (
              <div className="col-md-3" key={index}>
                <ProductItem food={food} />
              </div>
            ))}
            {status === "succeeded" && foodByCategory.length === 0 && (
              <div
                className="col-md-12 text-center"
                style={{ fontSize: "20px" }}
              >
                <p>Không có món ăn</p>
              </div>
            )}
          </div>
          <div className="row mt-4">
            <div className="col-md-12">
              <nav>
                <ul className="pagination">
                  <li className={`page-item ${!prev ? "disabled" : ""}`}>
                    <button
                      className="page-link"
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={!prev}
                    >
                      Prev
                    </button>
                  </li>
                  {[...Array(totalPages)].map((_, index) => (
                    <li
                      key={index}
                      className={`page-item ${
                        index + 1 === currentPage ? "active" : ""
                      }`}
                    >
                      <button
                        className="bg-primary page-link"
                        onClick={() => handlePageChange(index + 1)}
                      >
                        {index + 1}
                      </button>
                    </li>
                  ))}
                  <li className={`page-item ${!next ? "disabled" : ""}`}>
                    <button
                      className="page-link"
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={!next}
                    >
                      Next
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodByCategory;
