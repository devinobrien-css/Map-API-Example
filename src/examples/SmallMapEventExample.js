import MiniMapEvent from "../maps/MiniMapEvent"
import { JGHQNY_geodata } from "../data/geodata";
import { appleLogo } from "../logos/apple";
import { awsLogo } from "../logos/aws";

const SmallMapEventExample = () => {
    
    return (
        <div className="flex flex-row flex-wrap">
            <MiniMapEvent 
                header={
                    <div className="flex p-2 h-min">
                        <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full"><path d="M50.187 13.2762L49.918 12.7382C49.8304 12.5395 49.7089 12.3574 49.559 12.2002C47.0992 8.44517 43.7416 5.36297 39.7903 3.23276C35.8389 1.10255 31.4186 -0.00839449 26.9296 0.000541769C22.4406 0.00947803 18.0248 1.13801 14.0819 3.28394C10.1391 5.42987 6.7938 8.52541 4.349 12.2902C4.26139 12.489 4.13991 12.671 3.99 12.8282L3.721 13.3662C1.29466 17.4989 0.0246246 22.208 0.0440036 27.0002C0.057863 31.2038 1.03992 35.3476 2.914 39.1102L3.183 39.6482L3.452 40.1862C5.78397 44.3726 9.19192 47.86 13.3234 50.2878C17.4549 52.7157 22.16 53.9958 26.952 53.9958C31.744 53.9958 36.4491 52.7157 40.5806 50.2878C44.7121 47.86 48.12 44.3726 50.452 40.1862L50.721 39.6482L50.99 39.1102C52.9072 35.3631 53.8933 31.2092 53.865 27.0002C53.8722 22.1811 52.6032 17.446 50.187 13.2762V13.2762ZM17.805 20.9002H21.662V25.6542C16.28 25.6542 15.024 25.6542 14.217 27.7172H9.373C10.27 23.2332 13.23 20.9002 17.805 20.9002V20.9002ZM28.031 12.2892V32.0242C28.1305 33.5424 27.7155 35.0497 26.8529 36.3029C25.9903 37.5562 24.7306 38.4821 23.277 38.9312C22.6042 39.1633 21.9145 39.3431 21.214 39.4692C20.4706 39.5734 19.7216 39.6332 18.971 39.6482C18.1607 39.64 17.3517 39.5802 16.549 39.4692C15.8399 39.3857 15.1456 39.2047 14.486 38.9312C11.167 37.7652 9.286 34.8052 9.286 29.2432H14.04C13.95 34.6252 16.283 35.4322 18.974 35.4322C19.556 35.4809 20.1417 35.4036 20.6913 35.2057C21.2408 35.0079 21.7413 34.694 22.1588 34.2855C22.5762 33.877 22.9008 33.3834 23.1105 32.8382C23.3202 32.2931 23.4101 31.7092 23.374 31.1262V11.4822H28.128C28.031 11.4822 28.031 11.7512 28.031 12.2892V12.2892ZM39.872 39.0202C39.0422 39.3354 38.1594 39.4878 37.272 39.4692H36.913C36.0475 39.5328 35.1785 39.5328 34.313 39.4692V34.9842C37.273 34.9842 40.592 34.9842 40.592 30.3192C40.592 25.6542 37.452 25.6542 34.313 25.6542H29.559V20.9002H37.273C40.233 20.9002 45.167 22.8732 45.167 30.2292C45.164 35.7002 42.473 38.1232 39.872 39.0202V39.0202Z" fill="#F4F4F4"></path></svg>
                        <p className="pl-2 text-white uppercase drop-shadow-xl font-bold text-2xl">Big Upcoming Event</p>
                    </div>
                }
                geodata={JGHQNY_geodata}
            >
                <div className="p-2">
                    <p className="dark:text-gray-300 text-2xl font-bold">JG Event</p>
                    <div className="flex">
                        <p className="text-gray-500 dark:text-gray-300 text-lg pr-2">when:</p>
                        <p className="text-lg text-blue-500">Saturday, October 1 2:30pm</p>
                    </div>

                    <div className="flex">
                        <p className="text-gray-500 dark:text-gray-300 text-lg pr-2">where:</p>
                        <p className="text-lg text-blue-500">This New Spot</p>
                    </div>
                </div>
            </MiniMapEvent>
            <MiniMapEvent 
                header={
                    <div className="flex p-2 h-min">
                        {awsLogo}
                        <p className="pl-2 text-white uppercase drop-shadow-xl font-bold text-2xl">Big Upcoming Event</p>
                    </div>
                }
                geodata={JGHQNY_geodata}
            >
                <div className="p-2">
                    <p className="dark:text-gray-300 text-2xl font-bold">AWS Event</p>
                    <div className="flex">
                        <p className="text-gray-500 dark:text-gray-300 text-lg pr-2">when:</p>
                        <p className="text-lg text-blue-500">Thursday, October 12 4:30pm</p>
                    </div>

                    <div className="flex">
                        <p className="text-gray-500 dark:text-gray-300 text-lg pr-2">where:</p>
                        <p className="text-lg text-blue-500">A cool Spot</p>
                    </div>
                </div>
            </MiniMapEvent>
            <MiniMapEvent 
                header={
                    <div className="flex p-2 h-min">
                        {appleLogo}
                        <p className="pl-2 text-white uppercase drop-shadow-xl font-bold text-2xl">Big Upcoming Event</p>
                    </div>
                }
                geodata={JGHQNY_geodata}
            >
                <div className="p-2">
                    <p className="dark:text-gray-300 text-2xl font-bold">Apple Event</p>
                    <div className="flex">
                        <p className="text-gray-500 dark:text-gray-300 text-lg pr-2">when:</p>
                        <p className="text-lg text-blue-500">Monday, September 22 9:30am</p>
                    </div>

                    <div className="flex">
                        <p className="text-gray-500 dark:text-gray-300 text-lg pr-2">where:</p>
                        <p className="text-lg text-blue-500">The regular Spot</p>
                    </div>
                </div>
            </MiniMapEvent>
        </div>
    )
}
export default SmallMapEventExample