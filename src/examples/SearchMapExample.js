import {
	MapView,
  LocationSearch
} from '@aws-amplify/ui-react'

const SearchMapExample = () => {

    return (
        <MapView
            initialViewState={{
                longitude: -100.3381659,
                latitude: 37.615686,
                zoom: 3,
            }}
            style={{height:'100%',width:'100%'}}
        >
            <LocationSearch position="top-left" />
        </MapView>
    )
}
export default SearchMapExample;