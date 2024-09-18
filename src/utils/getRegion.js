import axios from 'axios';

// Geolocation APIを使って現在地を取得する関数
export default async function getRegion(setRegion, setPlaces) {
  if (!navigator.geolocation) {
    console.log('Geolocation is not supported by your browser.');
    return;
  }

  // 現在地の取得
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;

      // 地図の領域を設定
      setRegion({
        lat: latitude,
        lng: longitude,
        latDelta: 0.02305,
        lngDelta: 0.0105,
      });

      // 周辺スポットを取得する関数を呼び出し
      getNearSpot(latitude, longitude, setPlaces);
    },
    (error) => {
      console.error('Error getting location: ', error);
    }
  );
}

// 周辺スポットを取得する関数（スポットコントローラー）
async function getNearSpot(latitude, longitude, setPlaces) {
  const apiKey =process.env.REACT_APP_PLACE_API_KEY; // .envファイルにAPIキーを保存
  console.log(`APIKEY${apiKey}`)
  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=1500&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    const places = response.data.results;
    setPlaces(places);
  } catch (error) {
    console.error('Error fetching places: ', error);
  }
}
