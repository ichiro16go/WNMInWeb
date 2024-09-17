import React from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import SearchBar from '../components/searchBar';
import { useState } from 'react';
import getRegion from '../../utils/getRegion';
import { Marker } from 'react-leaflet';

const containerStyle = {
    width: '100vw', // ビューポート全体の幅
    height: '100vh', // ビューポート全体の高さ
};


export default function MapPage() {

    const center = {
        lat: 35.6895, // 東京の緯度
        lng: 139.6917, // 東京の経度
    };
    const [region, setRegion] = useState(center);
    const [places, setPlaces] = useState([region,]);
    // Google Maps APIをロードする
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyDGwpHlnLrF3qeaH-6Kcvhhuce11jMwsxY"
        // googleMapsApiKey: process.env.GOOGLE_PLACE_API_KEY, // 環境変数からAPIキーを取得
    });

    if (!isLoaded) {
        return <div>Loading...</div>;
    }
    getRegion(setRegion, setPlaces);
    

    return (
        <div>
            <div>
                <SearchBar />
            </div>
            <GoogleMap
                mapContainerStyle={styles.map}
                center={region}
                zoom={10}
            >
                {/* {places.map((place, index) => (
                    <Marker
                        key={index}
                        position={{ lat: place.lat, lng: place.lng }}
                        title={place.name}
                    />
                ))} */}
                {/* 地図上に追加したいマーカーやコンポーネントをここに挿入できます */}
            </GoogleMap>

        </div>
    );
}

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
    buttonContainer:{
        position:'absolute',
        bottom: 20,
        right:20,
        zIndex:1,
    }
};
