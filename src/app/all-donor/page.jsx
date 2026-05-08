import FeaturedCard from '@/components/shared/FeaturedCard';
import { getUserData } from '@/lib/data';
import { Button } from '@heroui/react';
import { ArrowRight } from 'lucide-react';
import React from 'react';

const AllDonors = async () => {
    const userData = await getUserData();
    return (
        <div className='mx-auto container mt-4 px-4 md:px-0 mt-28'>
            <h1 className='font-bold text-2xl md:w-3xl'>All Donors</h1>
            <p className='text-muted mt-2 text-sm'>Browse and connect with verified blood donors worldwide.</p>
            <div className='flex justify-between items-center'>
                <div>
                </div>
                <div>
                    <Button variant='outline'>View All <ArrowRight /></Button>
                </div>
            </div>
            <dir className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5'>
                {
                    userData.map(donor => <FeaturedCard key={donor._id} donor={donor} />)
                }
            </dir>
        </div>
    );
};

export default AllDonors;