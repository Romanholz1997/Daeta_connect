// src/app/page.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import DefaultLayout from '../DefaultLayout';

const Home: React.FC = () => {
    return (
        <DefaultLayout>
            <div className='w-full h-[75%]'>
                <div className='flex flex-col items-start border border-[#504E4E] w-full bg-[#000000] h-[600px] rounded-t-3xl p-5 overflow-y-auto scrollbar'>
                    <div className='flex items-center  space-x-2'>
                        <Image 
                            src="/assets/logo.png" 
                            alt="Logo Icon" 
                            width={60} // Set the desired width
                            height={54} // Set the desired height
                            className=' hover:scale-105 cursor-pointer'
                        />
                        <div className='flex flex-col'>
                            <p className='font-bold text-[24px] text-[#F7FF9A]'>Daeta</p>
                            <p className='font-normal text-white text-[13px] text-[F7FF9A]'>by chat Gpt  </p>
                        </div>
                    </div>   
                    <div className='flex flex-col space-y-3 w-full p-5'>
                        <div className='flex w-full justify-end'>
                            <div className='flex items-start w-full md:w-[45%] bg-[#504E4E] bg-opacity-[20%] border border-[#504E4E22] rounded-xl p-3 space-x-2'>
                                <Image 
                                    src="/assets/avatar.png" 
                                    alt="Logo Icon" 
                                    width={41} // Set the desired width
                                    height={41} // Set the desired height
                                    className='z-[600] hover:scale-105 cursor-pointer pt-1'
                                />
                                <p className='text-left text-[#CACAC8] text-[14px] font-normal'>
                                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </div>
                        <div className='flex w-full'>
                            <div className='flex items-start w-full md:w-[45%] bg-[#504E4E] bg-opacity-[20%] border border-[#504E4E22] rounded-xl p-3 space-x-2'>
                                <Image 
                                    src="/assets/logo.png" 
                                    alt="Logo Icon" 
                                    width={36} // Set the desired width
                                    height={33} // Set the desired height
                                    className='z-[600] hover:scale-105 cursor-pointer pt-1'
                                />
                                <p className='text-left text-[#CACAC8] text-[14px] font-normal'>
                                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </div> 
                        <div className='flex w-full justify-end'>
                            <div className='flex items-start w-full md:w-[45%] bg-[#504E4E] bg-opacity-[20%] border border-[#504E4E22] rounded-xl p-3 space-x-2'>
                                <Image 
                                    src="/assets/avatar.png" 
                                    alt="Logo Icon" 
                                    width={41} // Set the desired width
                                    height={41} // Set the desired height
                                    className='z-[600] hover:scale-105 cursor-pointer pt-1'
                                />
                                <p className='text-left text-[#CACAC8] text-[14px] font-normal'>
                                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </div>
                        <div className='flex w-full'>
                            <div className='flex items-start w-full md:w-[45%] bg-[#504E4E] bg-opacity-[20%] border border-[#504E4E22] rounded-xl p-3 space-x-2'>
                                <Image 
                                    src="/assets/logo.png" 
                                    alt="Logo Icon" 
                                    width={36} // Set the desired width
                                    height={33} // Set the desired height
                                    className='z-[600] hover:scale-105 cursor-pointer pt-1'
                                />
                                <p className='text-left text-[#CACAC8] text-[14px] font-normal'>
                                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </div>                 
                        <div className='flex w-full justify-end'>
                            <div className='flex items-start w-full md:w-[45%] bg-[#504E4E] bg-opacity-[20%] border border-[#504E4E22] rounded-xl p-3 space-x-2'>
                                <Image 
                                    src="/assets/avatar.png" 
                                    alt="Logo Icon" 
                                    width={41} // Set the desired width
                                    height={41} // Set the desired height
                                    className='z-[600] hover:scale-105 cursor-pointer pt-1'
                                />
                                <p className='text-left text-[#CACAC8] text-[14px] font-normal'>
                                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </div>
                        <div className='flex w-full'>
                            <div className='flex items-start w-full md:w-[45%] bg-[#504E4E] bg-opacity-[20%] border border-[#504E4E22] rounded-xl p-3 space-x-2'>
                                <Image 
                                    src="/assets/logo.png" 
                                    alt="Logo Icon" 
                                    width={36} // Set the desired width
                                    height={33} // Set the desired height
                                    className='z-[600] hover:scale-105 cursor-pointer pt-1'
                                />
                                <p className='text-left text-[#CACAC8] text-[14px] font-normal'>
                                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </div> 
                        <div className='flex w-full justify-end'>
                            <div className='flex items-start w-full md:w-[45%] bg-[#504E4E] bg-opacity-[20%] border border-[#504E4E22] rounded-xl p-3 space-x-2 '>
                                <Image 
                                    src="/assets/avatar.png" 
                                    alt="Logo Icon" 
                                    width={41} // Set the desired width
                                    height={41} // Set the desired height
                                    className='z-[600] hover:scale-105 cursor-pointer pt-1'
                                />
                                <p className='text-left text-[#CACAC8] text-[14px] font-normal'>
                                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </div>
                        <div className='flex w-full'>
                            <div className='flex items-start w-full md:w-[45%] bg-[#504E4E] bg-opacity-[20%] border border-[#504E4E22] rounded-xl p-3 space-x-2'>
                                <Image 
                                    src="/assets/logo.png" 
                                    alt="Logo Icon" 
                                    width={36} // Set the desired width
                                    height={33} // Set the desired height
                                    className='z-[600] hover:scale-105 cursor-pointer pt-1'
                                />
                                <p className='text-left text-[#CACAC8] text-[14px] font-normal'>
                                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </div> 
                        <div className='flex w-full justify-end'>
                            <div className='flex items-start w-full md:w-[45%] bg-[#504E4E] bg-opacity-[20%] border border-[#504E4E22] rounded-xl p-3 space-x-2'>
                                <Image 
                                    src="/assets/avatar.png" 
                                    alt="Logo Icon" 
                                    width={41} // Set the desired width
                                    height={41} // Set the desired height
                                    className='z-[600] hover:scale-105 cursor-pointer pt-1'
                                />
                                <p className='text-left text-[#CACAC8] text-[14px] font-normal'>
                                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </div>
                        <div className='flex w-full'>
                            <div className='flex items-start w-full md:w-[45%] bg-[#504E4E] bg-opacity-[20%] border border-[#504E4E22] rounded-xl p-3 space-x-2'>
                                <Image 
                                    src="/assets/logo.png" 
                                    alt="Logo Icon" 
                                    width={36} // Set the desired width
                                    height={33} // Set the desired height
                                    className='z-[600] hover:scale-105 cursor-pointer pt-1'
                                />
                                <p className='text-left text-[#CACAC8] text-[14px] font-normal'>
                                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </div> 
                        <div className='flex w-full justify-end'>
                            <div className='flex items-start w-full md:w-[45%] bg-[#504E4E] bg-opacity-[20%] border border-[#504E4E22] rounded-xl p-3 space-x-2'>
                                <Image 
                                    src="/assets/avatar.png" 
                                    alt="Logo Icon" 
                                    width={41} // Set the desired width
                                    height={41} // Set the desired height
                                    className='z-[600] hover:scale-105 cursor-pointer pt-1'
                                />
                                <p className='text-left text-[#CACAC8] text-[14px] font-normal'>
                                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </div>
                        <div className='flex w-full'>
                            <div className='flex items-start w-full md:w-[45%] bg-[#504E4E] bg-opacity-[20%] border border-[#504E4E22] rounded-xl p-3 space-x-2'>
                                <Image 
                                    src="/assets/logo.png" 
                                    alt="Logo Icon" 
                                    width={36} // Set the desired width
                                    height={33} // Set the desired height
                                    className='z-[600] hover:scale-105 cursor-pointer pt-1'
                                />
                                <p className='text-left text-[#CACAC8] text-[14px] font-normal'>
                                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </div>                 
                        <div className='flex w-full justify-end'>
                            <div className='flex items-start w-full md:w-[45%] bg-[#504E4E] bg-opacity-[20%] border border-[#504E4E22] rounded-xl p-3 space-x-2'>
                                <Image 
                                    src="/assets/avatar.png" 
                                    alt="Logo Icon" 
                                    width={41} // Set the desired width
                                    height={41} // Set the desired height
                                    className='z-[600] hover:scale-105 cursor-pointer pt-1'
                                />
                                <p className='text-left text-[#CACAC8] text-[14px] font-normal'>
                                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </div>
                        <div className='flex w-full'>
                            <div className='flex items-start w-full md:w-[45%] bg-[#504E4E] bg-opacity-[20%] border border-[#504E4E22] rounded-xl p-3 space-x-2'>
                                <Image 
                                    src="/assets/logo.png" 
                                    alt="Logo Icon" 
                                    width={36} // Set the desired width
                                    height={33} // Set the desired height
                                    className='z-[600] hover:scale-105 cursor-pointer pt-1'
                                />
                                <p className='text-left text-[#CACAC8] text-[14px] font-normal'>
                                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </div> 
                        <div className='flex w-full justify-end'>
                            <div className='flex items-start w-full md:w-[45%] bg-[#504E4E] bg-opacity-[20%] border border-[#504E4E22] rounded-xl p-3 space-x-2 '>
                                <Image 
                                    src="/assets/avatar.png" 
                                    alt="Logo Icon" 
                                    width={41} // Set the desired width
                                    height={41} // Set the desired height
                                    className='z-[600] hover:scale-105 cursor-pointer pt-1'
                                />
                                <p className='text-left text-[#CACAC8] text-[14px] font-normal'>
                                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </div>
                        <div className='flex w-full'>
                            <div className='flex items-start w-full md:w-[45%] bg-[#504E4E] bg-opacity-[20%] border border-[#504E4E22] rounded-xl p-3 space-x-2'>
                                <Image 
                                    src="/assets/logo.png" 
                                    alt="Logo Icon" 
                                    width={36} // Set the desired width
                                    height={33} // Set the desired height
                                    className='z-[600] hover:scale-105 cursor-pointer pt-1'
                                />
                                <p className='text-left text-[#CACAC8] text-[14px] font-normal'>
                                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </div>        
                    </div>
                </div>
                <div className='flex items-center justify-between border border-[#504E4E] w-full bg-[#000000] min-h-[80px] rounded-b-3xl p-5'>
                    <input
                        type="search"
                        id="default-search"
                        className="appearance-none w-10/12 p-2 text-sm text-white rounded-lg bg-black focus:border-black"
                        placeholder="Type your question here...."
                        required
                    />
                    <button className='flex items-center space-x-2 hover:scale-105'>
                        <p className='text-[#F7FF9A] text-[14px] font-normal'>SEND MESSAGE</p>
                        <Image 
                            src="/assets/send.png" 
                            alt="Logo Icon" 
                            width={31} // Set the desired width
                            height={31} // Set the desired height
                            className='z-[600] hover:scale-105 cursor-pointer pt-1'
                        />
                    </button>
                </div>
            </div>
        </DefaultLayout>
    );
};

export default Home;