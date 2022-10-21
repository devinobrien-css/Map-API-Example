import { userLocationData, groupLocationData, groupClusters } from "../data/geodata"
import { Marker } from "react-map-gl"
import ScalingMap from "../maps/ScalingMap"

/**
 * 
 * @returns 
 */
const ScalingMapExample = () => {
	const over = userLocationData.map((loc) => (
		<Marker
			key={"over" + loc.id}
			latitude={loc.latitude}
			longitude={loc.longitude}
		/>
	))
	const under = []
	const clusterData = groupClusters(userLocationData,4)

	for (const [key, value] of Object.entries(clusterData)) {
		const coords = key.split("|")
		under.push(
			<Marker
				key={"under" + key}
				latitude={coords[0]}
				longitude={coords[1]}
			>
				<div className="bg-gray-200 rounded-full w-10 ">
					<p className="my-auto block text-center h-min py-1 text-lg font-bold">{value.length}</p>
				</div>
			</Marker>
		)
	}

	return (
        <div className="w-[90vw] h-[500px] m-auto rounded-xl overflow-hidden">
            <ScalingMap
                cutoff={3}
                over={over}
                under={under}
            />
        </div>
	)
}
export default ScalingMapExample;