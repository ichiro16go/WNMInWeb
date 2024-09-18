
// Geolocation APIを使って現在地を取得する関数
export default async function getRegion(setRegion) {
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

    },
    (error) => {
      console.error('Error getting location: ', error);
    }
  );
}
