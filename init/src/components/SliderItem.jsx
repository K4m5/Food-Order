import { Link } from "react-router-dom";

const SliderItem = ({ banner }) => {
  console.log(banner)
  return (
    <div class="cat-item px-1 py-3">
      <Link class="d-block text-center shadow-sm" href="#">
        <img alt={"ảnh dep"} src={banner?.image} class="img-fluid rounded"/>
      </Link>
    </div>

  );
};

export default SliderItem;
