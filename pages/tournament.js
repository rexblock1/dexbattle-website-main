import Navbar from '../components/NavAbout'
import ReactPlayer from 'react-player/youtube';


export default function Tournament ( ) {
    return (
        <div className='overflow-y-hidden'>
          <Navbar/>
          <div className='h-full lg:mx-16 mx-4 flex flex-col items-center'>
            <div className='mt-[100px] mb-8'>
                <ReactPlayer url='https://youtu.be/P19JkM2k2hI'
                 controls={true} muted playing
                 width='1080px' height='720px' /> 
             </div>
          </div>  
        </div>
    )
}