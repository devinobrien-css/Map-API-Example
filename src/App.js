import LargeMap from "./maps/large_map_section"





function App() {

  return(
    <div className='p-4 bg-gray-800 h-screen'>
      <p className='text-6xl text-gray-100'>Map Examples Using AmplifyUI</p>
      <p className='text-2xl text-gray-500'>a set of various map tamplates</p>
      <hr /> 

      <div className="">


        <LargeMap />  
      </div>

    </div>
  )
}

export default App