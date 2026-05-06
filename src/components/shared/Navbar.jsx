import { Droplet } from 'lucide-react';
import React from 'react';
import Navlinks from './Navlinks';

const Navbar = () => {
    return (
        <nav className='bg-gray-50 border-b border-gray-200 py-3.5 backdrop:blur '>
            <div className="container mx-auto flex gap-3 justify-between">

                <div className='flex gap-2 items-center mt-3 ' >
                    <div className='h-9 w-9 justify-center rounded-xl gradient-primary items-center flex'>
                        <Droplet className='h-5  w-5  text-white' fill='currentColor' />
                    </div>
                    <h1 className='text-xl font-bold tracking-tight'> Blood<span className='text-primary'>Bridge</span></h1>
                </div>
                <ul className='flex items-center gap-5'>
                    <Navlinks href={'/'}>Home </Navlinks>
                    <Navlinks href={'/all-donors'}>All Donors</Navlinks>
                    <Navlinks href={'/profile'}>Profile </Navlinks>
                </ul>
                <div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;