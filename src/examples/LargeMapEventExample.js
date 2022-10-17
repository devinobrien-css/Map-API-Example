import { MiniDiskCollection } from "../components/MiniDiskCollection"
import MapEventSection from "../maps/MapEventSection"
import { JGHQNY_geodata } from "../data/geodata";

const LargeMapEventExample = () => {
    return (

        <MapEventSection 
            header={
                <div className="p-2">
                    <p className="text-4xl uppercase dark:text-gray-300">an upcoming event</p>
                </div>
            }
            geodata={JGHQNY_geodata}
        >

            {/*  Example Decription of Event    */}
            <div className="px-4">
                <p className="text-4xl py-2 dark:text-gray-300">Join us for Coffee!</p>

                <p className="text-lg py-2 dark:text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium blanditiis sit minus, itaque doloremque quibusdam.</p>

                <hr className="border-2 my-2"/>

                <div className="flex">
                    <p className="text-gray-600 text-lg pr-2">when:</p>
                    <p className="text-lg text-blue-500">Saturday, October 22 8:30pm</p>
                </div>

                <div className="flex">
                    <p className="text-gray-600 text-lg pr-2">where:</p>
                    <p className="text-lg text-blue-500">This New Spot</p>
                </div>
                
                <div className="flex flex-col justify-left w-fit">
                    <p className="text-lg  text-gray-600 my-auto mx-0 w-fit ">attending: </p>  
                    <MiniDiskCollection/>
                </div>


            </div>
        
        </MapEventSection>
    )
}
export default LargeMapEventExample;