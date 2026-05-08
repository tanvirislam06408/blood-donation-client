import DonerDetails from '@/components/shared/DonerDetails';
import UserNotifyForm from '@/components/UserNotifyForm';
import { getUserById } from '@/lib/data';


const DonorDetails = async ({ params }) => {
    const { id } = await params;

    const userInfo = await getUserById(id);

   

    return (
        <div className='container mx-auto mt-10 px-4'>
            <div className='flex flex-col lg:flex-row gap-10 items-center' >

                {/* donor details */}
                <div className="flex-1">
                    <DonerDetails userInfo={userInfo}/>
                </div>

                {/* form */}
                <div className='flex-1'>
                    <UserNotifyForm userInfo={userInfo}/>
                </div>

            </div>
        </div>
    );
};

export default DonorDetails;