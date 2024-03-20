import React from 'react';
import { auth, signOut } from '../../../../../auth';
import { Button } from '@/Components/ui/button';
import Image from 'next/image';
import { user } from '@nextui-org/react';

const SettingsPage = async () => {

  const session = await auth()
  
  return (
    <div className="profile-container max-w-md mx-auto p-8 bg-white shadow-lg rounded-lg">
    <header className="profile-header flex items-center">
      <h1 className="profile-title text-2xl font-semibold mb-4">Account Settings</h1>
      {/* <div className="profile-image-container w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
        <img className="rounded-full w-full h-full object-cover" src={session.user.image} alt={session.user.name} />
      </div> */}
    </header>
    <section className="profile-info mt-8">
      <ul className="profile-details list-none p-0 m-0">
        <li className="mb-4">
          <span className="info-label text-gray-700 block font-bold w-20">Name:</span>
          <span className="info-value text-gray-600 block">{session.user.name}</span>
        </li>
        <li className="mb-4">
          <span className="info-label text-gray-700 block font-bold w-20">Email:</span>
          <span className="info-value text-gray-600 block">{session.user.email}</span>
        </li>
        <li className="mb-4">
          <span className="info-label text-gray-700 block font-bold w-20">Role:</span>
          <span className="info-value text-gray-600 block">{session.user.role}</span>
        </li>
      </ul>
    </section>
    <footer className="profile-actions text-center mt-8">
      <form action={async () => {
        "use server"
        await signOut()
      }}>
        <Button type="submit" variant="destructive">Sign Out</Button>
      </form>
    </footer>
  </div>
  
  );
}

export default SettingsPage;