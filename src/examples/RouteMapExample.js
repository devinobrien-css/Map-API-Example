import RouteMap from "../maps/RouteMap"

/* TEST DATA */
const src = {
    longitude:  -56.164532,
    latitude: -34.901112
}
const dst = {
    longitude: -56.1,
    latitude: -34.70
}
const dst1 = {
    longitude: -56.8,
    latitude: -34.6
}
const dst2 = {
    longitude: -56.5,
    latitude: -34.6
}
const dst3 = {
    longitude: -56.3,
    latitude: -33.4
}
const dst4 = {
    longitude: -53.3,
    latitude: -33.4
}
const dst5 = {
    longitude: -56.3,
    latitude: -32.4
}


const RouteMapExample = () => {
    return (
        <div className='h-[60vh] w-full md:w-4/5 mx-auto'>
            <RouteMap src={src} dst_set={[dst,dst1,dst2,dst3,dst4,dst5]}/>
        </div>
    )

}

export default RouteMapExample