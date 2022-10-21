import DirectionsMap from "../maps/DirectionsMap"

/* TEST DATA */
const src = {
    longitude:  -56.164532,
    latitude: -34.901112
}
const dst = {
    longitude: -56.1,
    latitude: -34.70
}

const DirectionsMapExample = () => {
    return (
        <div className='h-[50vw] w-[90vw] md:w-4/5 mx-auto rounded-lg overflow-hidden'>
            <DirectionsMap src={src} dst={dst}/>
        </div>
    )

}
export default DirectionsMapExample