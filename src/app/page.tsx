// src/app/page.tsx
"use client";

import React from 'react';
import Loading from './Loading';

const Home: React.FC = () => {
    return (
        <div className='w-full h-full'>
            <Loading/>
        </div>
    );
};

export default Home;