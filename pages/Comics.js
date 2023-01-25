import Navbar from '../components/NavAbout'
export default function Comics(){
    return(
        <div className='overflow-y-hidden'>
            <Navbar/>
            <div  className='flex flex-col items-center md:mx-16 mx-4 overflow-hidden'>
            <h1 className='font-Kanit text-2xl text-[60px] text-blue-400 mt-[100px] mb-4'>Comics</h1>
            <div className='grid grid-flow-row md:grid-cols-2 space-x-6'>
                <img src='/comics/01.jpg' className='object-cover rounded-md h-full-w-full'/>
                <img src='/comics/02.jpg' className='object-cover rounded-md h-full-w-full'/>
                <img src='/comics/03.jpg' className='object-cover rounded-md h-full-w-full'/>
                <img src='/comics/04.jpg' className='object-cover rounded-md h-full-w-full'/>
            </div>
            </div>
        </div>
    )
}

