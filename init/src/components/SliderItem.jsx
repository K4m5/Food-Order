import { Link } from "react-router-dom";

const SliderItem = () => {
  return (
    <div className="cat-item px-1 py-3">
      <Link className="d-block text-center shadow-sm" to="trending">
        <img alt="#" src="img/pro1.jpg" className="img-fluid rounded" />
      </Link>
    </div>
  );
};

export default SliderItem;
