import React from 'react';
import getRegion from "../../utils/getRegion.js";

export default function RegionReloadButton({ region, setRegion }) {
    const handlePress = () => {
        getRegion(region, setRegion);
    };

    return (
        <div>
            <button onClick={handlePress}>現在地を更新</button>
        </div>
    );
}
