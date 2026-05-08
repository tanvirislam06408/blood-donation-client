import React from 'react';

const UserNotifyForm = ({userInfo}) => {
    return (
        <div className=''>
            <form className="bg-white border-red-100 rounded-3xl p-8 space-y-6 shadow-sm">

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

                {/* email + phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">
                            Email
                        </label>

                        <input
                            type="email"
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

                {/* button */}
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