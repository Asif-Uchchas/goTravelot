import React from 'react';
import { auth, signOut } from '../../../../../auth';
import { Button } from '@/Components/ui/button';
import Image from 'next/image';
import { user } from '@nextui-org/react';

const SettingsPage = async () => {

  const session = await auth()
  
  return (
      <div className="max-w-md mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-semibold mb-4">Account Settings</h1>
      {session && (
        <div>
          {/* <div className="mb-2">
            <strong className="text-gray-700">Image:</strong>{' '}
            <Image src={session.user.image} alt={session.user.name} />
          </div> */}
          <div className="mb-2">
            <strong className="text-gray-700">Name:</strong>{' '}
            <span className="text-gray-600">{session.user.name}</span>
          </div>
          <div className="mb-4">
            <strong className="text-gray-700">Email:</strong>{' '}
            <span className="text-gray-600">{session.user.email}</span>
          </div>
          <div className="mb-4">
            <strong className="text-gray-700">Role:</strong>{' '}
            <span className="text-gray-600">{session.user.role}</span>
          </div>
          
        </div>
      )}
      {/* {JSON.stringify(session)} */}
      <form action={async () => {
        "use server"

        await signOut()
      }}>
        <Button type='submit' variant={'destructive'}>
          Sign Out
        </Button>
      </form>
    </div>
  );
}

export default SettingsPage;