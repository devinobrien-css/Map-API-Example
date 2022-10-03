
import { Geo } from "aws-amplify";


export function addressToCoordinates(address){
    return Geo.searchByText(address)
}


export function coordinatesToAddress(coords){

}