// src/app/page.tsx
"use client";

import React from 'react';
import MatrixRain from '../MatrixRain';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faWallet } from '@fortawesome/free-solid-svg-icons';

const Page2: React.FC = () => {
    return (
        <div className='container mx-auto'>
            <MatrixRain />
            <div className='flex justify-between items-center p-[30px]'>
                <Image 
                    src="/assets/logo.png" 
                    alt="Logo Icon" 
                    width={84} 
                    height={76} 
                    className='z-[600] duration-100 hover:scale-105'
                />
                <button type="button" className='focus:ring-4 focus:ring-[#F9FFCA] hover:bg-[#F9FFAA] border border-[#F7FF9A] font-bold text-[15px] px-5 py-3 rounded-lg text-[#262626] bg-[#F7FF9A] z-[600] duration-100 hover:scale-105'>Create Agent</button>
            </div>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[1000px] flex flex-col md:flex-row justify-between space-x-0 md:space-x-10 z-[600]'>
                {/* First Card */}
                <div className='border border-[#F7FF9A] border-opacity-50 rounded-xl flex-col items-center justify-center w-full mt-5'>
                    <div className='flex flex-col w-full items-center py-5 px-10 bg-[#262626] rounded-t-xl h-3/4 space-y-2'>
                        <p className='font-bold text-[32px] font-mono text-center'>HOW IT WORK?</p>
                        <span className="gradient-border block w-full h-[3px] z-[600]"></span>
                        <p className='font-normal text-[19px] font-mono text-center text-white text-opacity-50'>Want to know how Origent empowers AI? Click here to uncover the magic behind this innovation.</p>
                    </div>
                    <button type='button' className='flex w-full border-t-[#F7FF9A] border-t border-opacity-50 items-center justify-center space-x-2 p-5 bg-[#F7FF9A] rounded-b-xl h-1/4'>
                        <p className='font-bold text-[21px] text-[#262626] font-mono duration-100 hover:scale-105'>READ MORE</p>
                        <FontAwesomeIcon icon={faArrowRight} className="text-[#262626] text-[20px]" />
                    </button>
                </div>
                {/* Second Card */}
                <div className='border border-[#F7FF9A] border-opacity-50 rounded-xl flex-col justify-center w-full mt-5'>
                    <div className='flex flex-col w-full items-center p-5 px-10 bg-[#262626] rounded-t-xl h-3/4 space-y-2'>
                        <p className='font-bold text-[32px] font-mono text-center'>DATA TERMINAL</p>
                        <span className="gradient-border block w-full h-[3px] z-[600]"></span>
                        <p className='font-normal text-[19px] font-mono text-center text-white text-opacity-50'>Want to interact with data’s autonomous AI agent?</p>
                    </div>
                    <button type='button' className='flex w-full border-t-[#F7FF9A] border-t border-opacity-50 items-center justify-center space-x-2 p-5 bg-[#F7FF9A] rounded-b-xl h-1/4'>
                        <FontAwesomeIcon icon={faWallet} className="text-[#262626] text-[25px]" />
                        <p className='font-bold text-[21px] text-[#262626] font-mono duration-100 hover:scale-105'>CONNECT WALLET</p>
                    </button>
                </div>
            </div>
        </div>

    );
};

export default Page2;