import { getUserData } from '@/lib/data';
import React from 'react';
import FeaturedCard from './shared/FeaturedCard';
import { Button } from '@heroui/react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const Featured = async () => {
    const userData = await getUserData();

    return (
        <div className='mx-auto container mt-4 px-4 md:px-0 mt-28'>
            <h1 className='font-bold text-2xl md:w-3xl'>Featured Donors</h1>
            <p className='text-muted mt-2 text-sm'>Active heroes ready to help when you need it most.</p>
            <div className='flex justify-between items-center'>
                <div>
                </div>
                <div>
                   <Link href={'/all-donor'}><Button variant='outline'>View All <ArrowRight /></Button></Link>
                </div>
            </div>
            <dir className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5'>
                {
                    userData.slice(0, 4).map(donor => <FeaturedCard key={donor._id} donor={donor} />)
                }
            </dir>
        </div>
    );
};

export default Featured;