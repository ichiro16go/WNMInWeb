import React from 'react';
import getRegion from "../../utils/getRegion.js";

export default function RegionReloadButton({ setRegion,setPlaces }) {
    const handlePress = () => {
        getRegion(setRegion,setPlaces);
    };

    return (
        <div>
            <button onClick={handlePress}>現在地を更新</button>
        </div>
    );
}
