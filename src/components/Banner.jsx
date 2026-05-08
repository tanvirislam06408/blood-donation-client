import { Droplet } from 'lucide-react';
import Image from 'next/image';
import bannerImg from '../assets/hero-donate.jpg'
import { Button } from '@heroui/react';

const Banner = () => {
    return (
        <div className=' w-full bg-[#FEFAFA] flex justify-center items-center px-4'>
            <div className="container mx-auto flex flex-col-reverse w-full md:flex-row md:justify-between items-center min-h-[60vh]">
                <div>
                    <div className="flex items-center gap-2.5 bg-red-100 rounded-2xl max-w-3xs justify-center py-1.5">
                        <Droplet fill='currentColor' className='text-red-400' />
                        <h1 className='font-semibold text-xl text-red-500'> Every drop counts</h1>
                    </div>
                    <h1 className='text-4xl md:text-6xl font-bold mt-3'>Save Lives by <br /> <span className='text-primary'>Donating Blood</span></h1>
                    <p className='text-lg mt-8 text-muted max-w-xl'>Join thousands of heroes around the world. Find verified donors near you, request blood in emergencies, or become a donor in just a few clicks.</p>
                   <div className="flex items-center gap-3 mt-3">
                     <Button variant='primary' className={'gradient-primary font-medium '}>Find Donor</Button>
                    <Button variant='outline'>Become a Donor</Button>
                   </div>
                </div>
                <div className='relative mb-10'>
                    <div className='blur-2xl -inset-4  absolute opacity-20'>
                    </div>
                    <Image className=' rounded-3xl relative shadow-2xl w-full object-cover' src={bannerImg} width={600} height={600} alt='bannerImg' />

                </div>
            </div>
        </div>
    );
};

export default Banner;