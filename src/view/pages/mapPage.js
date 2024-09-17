import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import SearchBar from '../components/searchBar.js';
import { useState } from 'react';
import getRegion from '../../utils/getRegion.js';
import RegionReloadButton from '../components/regionReloadButton.js';



export default function MapPage() {
    //css
    const styles = {
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
        map: {
            width: '100vw',
            height: '100vh',
        },
        searchBarContainer: {
            position: 'absolute',
            top: 80,
            left: 0,
            right: 0,
            zIndex: 1,
        },
        buttonContainer: {
            position: 'absolute',
            bottom: 90,
            right: 20,
            zIndex: 1,
        }
    };
    //css
    const options = {
        disableDefaultUI: true,
        zoomControl: true,
    };
    const center = {
        lat: 35.6895, // 東京の緯度
        lng: 139.6917, // 東京の経度
    };
    const [region, setRegion] = useState(center);
    const [places, setPlaces] = useState([region,]);
    const [searchResult, setSearchResult] = useState(null);
    // Google Maps APIをロードする
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_PLACE_API_KEY, // 環境変数からAPIキーを取得
    });
    if (!isLoaded) {
        return <div>Loading...</div>;
    }
    //現在地取得
    getRegion(setRegion, setPlaces);
    //検索機能
    console.log(places)

    return (
        <div>
            <div>
                <SearchBar/>
            </div>
            <GoogleMap
                mapContainerStyle={styles.map}
                center={region}
                zoom={17}
                options={options}
            >
                <Marker
                    title='現在地'
                    // icon={customIconForRegion}
                    position={{ lat: region.lat, lng: region.lng }}
                />
                {searchResult && (
                    <Marker
                        position={searchResult}
                        title="検索結果"
                    />
                )}
            </GoogleMap>
            <div style={styles.buttonContainer}>
                <RegionReloadButton setRegion={setRegion} setPlaces={setPlaces} />
            </div>
        </div>
    );
}

