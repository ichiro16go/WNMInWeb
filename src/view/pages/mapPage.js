import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { useState, useEffect,useCallback,useRef } from 'react';
import getRegion from '../../utils/getRegion.js';
import RegionReloadButton from '../components/regionReloadButton.js';
import './mapPage.css'
import { MdSearch, MdMic, MdCameraAlt, MdMenu, } from 'react-icons/md';
import { IoReloadCircle } from "react-icons/io5";
import Direction from '../components/directionExample.js';

export default function MapPage() {
    
    const options = {
        disableDefaultUI: true,
        zoomControl: true,
    };
    const [region, setRegion] = useState({
        lat: 35.6895, // 東京の緯度
        lng: 139.6917, // 東京の経度
    });
    const mapRef = useRef();
    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
      }, []);
    const [places, setPlaces] = useState([region,]);
    const [searchResult, setSearchResult] = useState(null);
    //現在地取得
    useEffect(() => {
        getRegion(setRegion, setPlaces);
    }, []); // 空の依存配列を渡す
    // Google Maps APIをロードする
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_PLACE_API_KEY, // 環境変数からAPIキーを取得
    });
    if (!isLoaded) {
        return <div>Loading...</div>;
    }

    //検索機能
    console.log('周辺情報', places)

    return (
        <div className="hollContainer">
            <div className="headerContainer">
                {/*検索バー */}
                <div className="searchContainer">
                    <input
                        type="text"
                        className="input"
                        placeholder="Googleで検索またはURLを入力"
                    />
                    <a>
                        <MdSearch size={24} color="black" />
                    </a>
                    <MdMic size={24} color="gray" />
                    <MdCameraAlt size={24} color="gray" />
                </div>
                {/*ハンバーガーメニュー（後程肉球に） */}
                <a className="menuButton">
                    <MdMenu size={30} color="black" />
                </a>
            </div>
            <GoogleMap
                mapContainerClassName="map"
                center={region}
                zoom={17}
                options={options}
                onLoad={onMapLoad}
            >
                <Direction/>
                <Marker
                    title='現在地'
                    className="marker"
                    position={{ lat: region.lat, lng: region.lng }}
                />
                {searchResult && (
                    <Marker
                        position={searchResult}
                        title="検索結果"
                    />
                )}
            </GoogleMap>
            <div className="aContainer">
                <a >
                    <IoReloadCircle className='reloadButton'/>
                </a>
                {/* <RegionReloadButton setRegion={setRegion} setPlaces={setPlaces} /> */}
            </div>
        </div>
    );
}

