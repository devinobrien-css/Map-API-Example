import { Marker, ScaleControl, NavigationControl, GeolocateControl, FullscreenControl, AttributionControl } from "react-map-gl";
import { JGHQNY_geodata } from "../data/geodata";
import GeoFenceMap from "../maps/GeoFenceMap";



const GeoFenceMapExample = () => {
    return (
        <div className="h-[600px] m-auto rounded-xl overflow-hidden">
            <GeoFenceMap geodata={JGHQNY_geodata}>
                <ScaleControl />
                <NavigationControl />
                <GeolocateControl />
                <FullscreenControl />
                <Marker
                    latitude={JGHQNY_geodata.latitude}
                    longitude= {JGHQNY_geodata.longitude}
                >
                    <img src="./jg-pin.png" />
                </Marker>
            </GeoFenceMap>
        </div>
    )
}
export default GeoFenceMapExample;