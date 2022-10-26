import { Marker } from "react-map-gl"
import HeatMap from "../maps/HeatMap"


const HeatMapExample = () => {

	return (
        <div className="w-[90vw] h-[500px] m-auto rounded-xl overflow-hidden">
            <HeatMap/>
        </div>
	)
}
export default HeatMapExample;