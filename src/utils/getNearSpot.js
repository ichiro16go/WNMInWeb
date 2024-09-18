import axios from 'axios';

// 周辺スポットを取得する関数（スポットコントローラー）
export async function getNearSpot(latitude, longitude, setPlaces) {
  const url = `http://localhost:5000/api/nearby?lat=${latitude}&lng=${longitude}`;

  try {
    const response = await axios.get(url);
    const places = response.data.results;
    setPlaces(places);
  } catch (error) {
    console.error('Error fetching places: ', error);
  }
}