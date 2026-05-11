import {
    CalendarDays,
    Droplets,
    Mail,
    MapPin,
    Phone,
    UserRound
} from 'lucide-react';
import Image from 'next/image';




const DonerDetails = ({userInfo}) => {

     const {
            name,
            bloodGroup,
            age,
            image,
            location,
            lastDonation,
            phone,
            email,
            description
        } = userInfo;
    return (
        <div className=' space-y-5 shadow border border-gray-300 p-4 rounded-3xl'>

                    <div className='relative w-full h-[350px]'>
                        <Image
                            src={image}
                            alt={description}
                            fill
                            className='object-cover rounded-3xl'
                            sizes='(max-width: 768px) 100vw, 400px'
                        />
                    </div>

                    <div className='space-y-3'>
                        <h1 className='text-3xl font-bold'>
                            {name}
                        </h1>

                        <p className='text-gray-500 leading-relaxed'>
                            {description}
                        </p>
                    </div>

                 
                    <div className='space-y-4 pt-3'>

                        <div className='flex items-center gap-3'>
                            <UserRound className='text-red-500' size={20} />
                            <p className='text-sm'>
                                <span className='font-semibold'>
                                    Age:
                                </span>{' '}
                                {age}
                            </p>
                        </div>

                        <div className='flex items-center gap-3'>
                            <Droplets className='text-red-500' size={20} />
                            <p className='text-sm'>
                                <span className='font-semibold'>
                                    Blood Group:
                                </span>{' '}
                                {bloodGroup}
                            </p>
                        </div>

                        <div className='flex items-center gap-3'>
                            <MapPin className='text-red-500' size={20} />
                            <p className='text-sm'>
                                {location}
                            </p>
                        </div>

                        <div className='flex items-center gap-3'>
                            <CalendarDays className='text-red-500' size={20} />
                            <p className='text-sm'>
                                <span className='font-semibold'>
                                    Last Donation:
                                </span>{' '}
                                {lastDonation}
                            </p>
                        </div>

                        <div className='flex items-center gap-3'>
                            <Mail className='text-red-500' size={20} />
                            <p className='text-sm'>
                                {email}
                            </p>
                        </div>

                        <div className='flex items-center gap-3'>
                            <Phone className='text-red-500' size={20} />
                            <p className='text-sm'>
                                {phone}
                            </p>
                        </div>

                    </div>
                </div>
    );
};

export default DonerDetails;