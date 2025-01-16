// "use client";

import React from "react";  
import Image from 'next/image';
import MatrixRain from './MatrixRain';
import Link from 'next/link';

export default function DefaultLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {

//   const isDarkMode = typeof window !== "undefined" && document.documentElement.classList.contains('dark');

  return (
    <div className='flex flex-col items-center min-h-[100vh]  relative'>
        <MatrixRain />
        <div className='container mx-auto px-5 md:px-20 z-[600] h-fit md:h-[100vh] pb-[100px]'>
            <div className='flex justify-between items-center py-[30px] h-[15%]'>       
                <Link className='flex' href="/">
                    <Image 
                        src="/assets/logo.png" 
                        alt="Logo Icon" 
                        width={84} // Set the desired width
                        height={76} // Set the desired height
                        className=' hover:scale-105 cursor-pointer'
                    />
                </Link>        
                <div className='flex items-center space-x-3'>
                    <Link href="/chat" className='font-bold text-[15px] px-2 py-4 rounded-lg  text-[#FFFFFFAA] hover:text-[#F7FF9A]'>Terminal Chat</Link>
                    <Link href="/history" className='font-bold text-[15px] px-2 py-4 rounded-lg text-[#F7FF9A] hover:text-[#FFFFFFAA]'>Agent History</Link>
                    <Link href="/" className='focus:ring-4 focus:ring-[#F9FFCA] border border-[#F7FF9A] font-bold text-[15px] px-10 py-4 rounded-lg text-[#F7FF9A] hover:bg-[#F7FF9A] hover:text-[#262626]'>Create Agent</Link>
                </div>
            </div>
            {children}
            <div className='flex h-[10%] items-center justify-center absolute bottom-0 left-1/2 transfrom -translate-x-1/2'>
                <p className='text-[12px] text-white text-opacity-50 font-mono text-center'>By clicking continue you agree to our Terms of Service & Privacy Policy</p>
            </div>
        </div>
    </div>
  );
}
