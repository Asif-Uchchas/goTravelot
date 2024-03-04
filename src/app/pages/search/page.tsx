"use client "
import Hero from '@/Components/Hero';
import React from 'react'
import Main from './components/Main';

export default function Search() {
    return (
      <main className="overflow-hiden bg-gray-100">
        <Main searchParams={{location:""}}/>
      </main>
    );
  }