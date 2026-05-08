import DonerDetails from '@/components/shared/DonerDetails';
import { getUserById } from '@/lib/data';


const DonorDetails = async ({ params }) => {
    const { id } = await params;

    const userInfo = await getUserById(id);

   

    return (
        <div className='container mx-auto mt-10 px-4'>
            <div className='flex flex-col lg:flex-row gap-10'>

                {/* donor details */}
                <DonerDetails userInfo={userInfo}/>

                {/* form */}
                <div className='flex-1'>
                </div>

            </div>
        </div>
    );
};

export default DonorDetails;