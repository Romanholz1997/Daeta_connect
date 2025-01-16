// src/app/page.tsx
"use client";

import React from 'react';
import DefaultLayout from '../DefaultLayout';
import Image from 'next/image';
import history1 from './history1.png'
import history2 from './history1.png'
import history3 from './history1.png'

const Home: React.FC = () => {
    return (
        <DefaultLayout>
            <div className='flex flex-col items-center w-full h-full rounded-t-3xl p-5 px-5 md:px-20 space-y-10'>
                <div className='flex space-x-10 w-full justify-center'>     
                    <Image 
                        src={history1} 
                        alt="Description of history1" 
                        width={356} // Set the desired width
                        height={253} // Set the desired height
                    />  
                    <Image 
                        src={history2} 
                        alt="Description of history2" 
                        width={496} // Set the desired width
                        height={253} // Set the desired height
                    />  
                    <Image 
                        src={history3} 
                        alt="Description of history3" 
                        width={446} // Set the desired width
                        height={250} // Set the desired height
                    />                                                
                </div>
                <div className='flex flex space-x-10 w-full justify-center'>     
                    <Image 
                        src="/assets/history1.png" 
                        alt="Logo Icon" 
                        width={356} // Set the desired width
                        height={253} // Set the desired height
                        className='w-full'
                    />  
                     <Image 
                        src="/assets/history2.png" 
                        alt="Logo Icon" 
                        width={496} // Set the desired width
                        height={253} // Set the desired height
                        className='w-full'
                    />  
                     <Image 
                        src="/assets/history3.png" 
                        alt="Logo Icon" 
                        width={446} // Set the desired width
                        height={250} // Set the desired height
                        className='w-full'
                    />    
                     <Image 
                        src="/assets/history3.png" 
                        alt="Logo Icon" 
                        width={446} // Set the desired width
                        height={250} // Set the desired height
                        className='w-full'
                    />                                                
                </div>
                <div className='flex flex space-x-10 w-full justify-center'>     
                    <Image 
                        src="/assets/history1.png" 
                        alt="Logo Icon" 
                        width={356} // Set the desired width
                        height={253} // Set the desired height
                        className='w-full'
                    />  
                     <Image 
                        src="/assets/history2.png" 
                        alt="Logo Icon" 
                        width={496} // Set the desired width
                        height={253} // Set the desired height
                        className='w-full'
                    />  
                     <Image 
                        src="/assets/history3.png" 
                        alt="Logo Icon" 
                        width={446} // Set the desired width
                        height={250} // Set the desired height
                        className='w-full'
                    />                                                
                </div>
            </div>
        </DefaultLayout>


    );
};

export default Home;