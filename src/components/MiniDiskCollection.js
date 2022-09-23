export const MiniDiskCollection = () => {
	return (
		<div className='flex'>
			<div className='group h-fit -ml-0'>
				<div className='md:shrink-0 m-auto w-fit h-min '>
					<img className='rounded-full shadow-xl m-auto border-2 border-solid border-gray-100 active:grayscale' src="https://i.pravatar.cc/40?img=24" />
				</div>
				<p className='group-hover:visible invisible bg-gray-800 text-gray-100 rounded m-auto transition-all absolute min-w-max'>One More</p>
			</div>
			<div className='group h-fit -ml-2'>
				<div className='md:shrink-0 m-auto w-fit h-min '>
					<img className='rounded-full shadow-xl m-auto border-2 border-solid border-gray-100 active:grayscale' src="https://i.pravatar.cc/40?img=64" />
				</div>
				<p className='group-hover:visible invisible bg-gray-800 text-gray-100 rounded m-auto transition-all absolute min-w-max'>Rand Name</p>
			</div>
			<div className='group h-fit -ml-2'>
				<div className='md:shrink-0 m-auto w-fit h-min '>
					<img className='rounded-full shadow-xl m-auto border-2 border-solid border-gray-100 active:grayscale' src="https://i.pravatar.cc/40?img=63" />
				</div>
				<p className='group-hover:visible invisible bg-gray-800 text-gray-100 rounded m-auto transition-all absolute min-w-max'>First Last</p>
			</div>
			<div className='group h-fit -ml-2'>
				<div className='md:shrink-0 m-auto w-fit h-min '>
					<img className='rounded-full shadow-xl m-auto border-2 border-solid border-gray-100 active:grayscale' src="https://i.pravatar.cc/40?img=60" />
				</div>
				<p className='group-hover:visible invisible bg-gray-800 text-gray-100 rounded m-auto transition-all absolute min-w-max'>Another User</p>
			</div>
		</div>
	)
}