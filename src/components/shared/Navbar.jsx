import { Droplet } from 'lucide-react';
import React from 'react';
import Navlinks from './Navlinks';
import { Button } from '@heroui/react';
import Link from 'next/link';
import { SideNav } from './SideNav';

const Navbar = () => {
    return (
        <nav className='bg-gray-50 border-b border-gray-200 py-3.5 backdrop:blur px-2.5'>
            <div className="container mx-auto flex gap-3 justify-between">

                <Link href={'/'} className='flex gap-2 items-center mt-3 ' >
                    <div className='h-9 w-9 justify-center rounded-xl gradient-primary items-center flex'>
                        <Droplet className='h-5  w-5  text-white' fill='currentColor' />
                    </div>
                    <h1 className='text-xl font-bold tracking-tight'> Blood<span className='text-primary'>Bridge</span></h1>
                </Link>
                <ul className=' items-center gap-5 hidden md:flex'>
                    <Navlinks href={'/'}>Home </Navlinks>
                    <Navlinks href={'/all-donor'}>All Donors</Navlinks>
                    <Navlinks href={'/profile'}>Profile </Navlinks>
                </ul>
                <div className='md:flex hidden items-center gap-3.5'>
                        <Link href={'/login'}><Button variant='danger-soft'>Login</Button></Link>
                        <Link href={'/register'}><Button variant='danger'>Register</Button></Link>
                </div>
                <div className="md:hidden">
                    <SideNav/>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;