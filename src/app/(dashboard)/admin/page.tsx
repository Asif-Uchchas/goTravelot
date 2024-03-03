import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import React from 'react'

const page = async () => {

    const session = await getServerSession(authOptions);
    if(session?.user){
        return (
            <div className='flex items-center justify-center h-screen'>
                <h1 className='cursor-pointer bg-orange-400'>HELLO {session?.user.username} JUST LOGGED IN MAN!! GREAT!!</h1>
            </div>
        )
    }

    return (
        <div className='flex items-center justify-center h-screen'>
            <h2 className='text-2xl'>Please Login first to see this page</h2>
        </div>
    )
};

export default page
