import { Marker } from "@react-google-maps/api";

export default function RegionMarker(region) {
    return (<div>
        <Marker
            title='現在地'
            position={{ lat: region.lat, lng: region.lng }}
        />
    </div>);
}