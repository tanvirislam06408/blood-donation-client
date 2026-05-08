import { ArrowRight, Calendar, LocateIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const FeaturedCard = ({donor}) => {
    return (
        <div className=" overflow-hidden rounded-2xl border border-zinc-200 bg-white transition duration-200 hover:-translate-y-1 dark:border-zinc-800 dark:bg-zinc-900">

            <div className="relative w-full overflow-hidden bg-zinc-200">
                <div className='relative md:max-h-[450px] aspect-square'>
                    <Image
                    src={donor.image}
                    fill
                    alt={donor.name}
                    className="h-full w-full object-cover absolute"
                />
                </div>

                <div
                    className={`absolute left-3 top-3 flex  items-center gap-1 rounded-full px-3 py-1 text-[11px] font-semibold text-white ${donor.availability === "Available"
                            ? "bg-emerald-500"
                            : "bg-zinc-500"
                        }`}
                >
                    <span
                        className={`h-1.5 w-1.5 rounded-full ${donor.availability === "Available"
                                ? "bg-white"
                                : "bg-zinc-300"
                            }`}
                    ></span>

                    {donor.availability}
                </div>

                <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-white">
                    {donor.bloodGroup}
                </div>
            </div>

            <div className="p-4">
                <h3 className="mb-2 text-base font-semibold text-zinc-900 dark:text-white">
                    {donor.name}
                </h3>

                <div className="mb-1 flex items-center gap-2 text-xs text-zinc-500">
                    <LocateIcon className='text-red-500'/>
                    <i className="ti ti-map-pin text-pink-600"></i>
                    {donor.location}
                </div>

                <div className="flex items-center gap-2 text-xs text-zinc-500 mt-3">
                    <Calendar className='text-red-500'/>
                    <i className="ti ti-calendar text-pink-600"></i>
                    Last donated: {donor.lastDonation}
                </div>

                <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-red-500 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700 active:scale-[0.98]">
                    View Details
                    <ArrowRight />
                </button>
            </div>
        </div>
    );
};

export default FeaturedCard;