import axios from 'axios';

// Hàm lấy tọa độ từ địa chỉ sử dụng Nominatim API
export const getCoordinates = async (address) => {
  const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json&limit=1`;
  try {
    const response = await axios.get(url);
    if (response.data && response.data.length > 0) {
      const { lat, lon } = response.data[0];
      return { lat, lon };
    } else {
      console.error("No results found for address:", address);
      return null;
    }
  } catch (error) {
    console.error("Error fetching coordinates:", error);
    return null;
  }
};

// Hàm xử lý tất cả các đơn hàng và lấy tọa độ
export const fetchOrderCoordinates = async (orders) => {
  const ordersWithCoordinates = await Promise.all(orders.map(async (order) => {
    const coordinates = await getCoordinates(order.address);
    return {
      ...order,
      coordinates: coordinates ? coordinates : { lat: 0, lon: 0 } // Trả về tọa độ mặc định nếu không tìm thấy
    };
  }));
  return ordersWithCoordinates;
};
