import React from 'react'


const UserDetails = () => {


    return (
        <div>
            <main className='flex flex-col gap-y-6  border-2 border-[#905C5A] h-[30rem] bg-[#fffffe]'>
                <section className='flex flex-row gap-4 mx-4'>
                    <div className='h-[10rem] w-[10rem] rounded-full border-[#F57922] border-2'>
                        <img className='rounded-full'/>
                    </div>
                    <div className='border-[#F57922] border-2 h-24 w-[10rem]'>
                        <h1 className='text-[#808184] font-semibold'></h1>
                        <p className='text-[#afcfe6] font-medium'></p>
                    </div>
                    <p className='border-[#F57922] border-2 h-6 w-20 text-[#caced1] font-medium'></p>
                </section>
                <section className='ml-[9.4rem] mr-4 border-[#F57922] border-2 mx-4 h-full'>
                    <p className='text-[#b4b7c2]'></p>
                    <div className='w-full h-[8rem] bg-[#f4f9ff]'></div>
                </section>
            </main>
        </div>
    );
}

export default UserDetails;