'use client'
import { postBloodReq } from '@/lib/action';
import React from 'react';
import Swal from 'sweetalert2';



const UserNotifyForm = ({ userInfo }) => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const bloodReq = new FormData(e.currentTarget);
        const formData = Object.fromEntries(bloodReq.entries());
        const data = await postBloodReq(formData);
        if (data.acknowledged) {
            Swal.fire({
                title: "Blood Request Send !",
                icon: "success",
                draggable: true
            });
            e.target.reset();
        }
        else{
            Swal.fire({
                title: "Failed !",
                icon: "warning",
                draggable: true
            });
        }
        return data;
    }

    return (
        <div className=''>
            <form onSubmit={handleSubmit} className="bg-white border-red-100 rounded-3xl p-8 space-y-6 shadow-sm">

                {/* heading */}
                <div>
                    <h2 className="text-3xl font-bold text-gray-900">
                        Request Blood
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Fill out the form and the donor will be notified.
                    </p>
                </div>

                {/* name */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                        Your Name
                    </label>

                    <input
                        name='name'
                        type="text"
                        placeholder="Jane Doe"
                        className="
                w-full
                rounded-2xl
                border
                border-gray-200
                px-4
                py-3
                outline-none
                transition-all
                focus:border-red-500
                focus:ring-4
                focus:ring-red-100
            "
                    />
                </div>

               
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">
                            Email
                        </label>

                        <input
                            type="email"
                            name='email'
                            placeholder="you@example.com"
                            className="
                    w-full
                    rounded-2xl
                    border
                    border-gray-200
                    px-4
                    py-3
                    outline-none
                    transition-all
                    focus:border-red-500
                    focus:ring-4
                    focus:ring-red-100
                "
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">
                            Phone
                        </label>

                        <input
                            name='phone'
                            type="text"
                            placeholder="+1 555 123 4567"
                            className="
                    w-full
                    rounded-2xl
                    border
                    border-gray-200
                    px-4
                    py-3
                    outline-none
                    transition-all
                    focus:border-red-500
                    focus:ring-4
                    focus:ring-red-100
                "
                        />
                    </div>

                </div>


                {/* hospital address */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                        Hospital Address
                    </label>

                    <textarea
                        name='hospital-address'
                        rows={4}
                        placeholder="Hospital name, street, city"
                        className="
                w-full
                rounded-2xl
                border
                border-gray-200
                px-4
                py-3
                outline-none
                transition-all
                resize-none
                focus:border-red-500
                focus:ring-4
                focus:ring-red-100
            "
                    />
                </div>

                
                <button
                    type="submit"
                    className="
            w-full
            rounded-2xl
            bg-gradient-to-r
            from-red-600
            to-red-400
            py-3
            font-semibold
            text-white
            transition-all
            hover:scale-[1.01]
        "
                >
                    Send Request
                </button>

            </form>
        </div>
    );
};

export default UserNotifyForm;