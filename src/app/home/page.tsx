// src/app/page.tsx
// "use client";

// import React from 'react';
// import Image from 'next/image';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
// import { faWallet } from '@fortawesome/free-solid-svg-icons';
// import MatrixRain from '../MatrixRain';

// const Home: React.FC = () => {
//     return (
//         <div className='flex flex-col items-center min-h-[100vh]  relative'>
//             <MatrixRain />
//             <div className='container mx-auto flex justify-between items-center p-[30px]'>                
//                 <Image 
//                     src="/assets/logo.png" 
//                     alt="Logo Icon" 
//                     width={84} // Set the desired width
//                     height={76} // Set the desired height
//                     className=' z-[600] hover:scale-105 cursor-pointer'
//                     />
//                 <button type="button" className='focus:ring-4 focus:ring-[#F9FFCA] border border-[#F7FF9A] font-bold text-[15px] px-10 py-4 rounded-lg text-[#F7FF9A] z-[600] hover:bg-[#F7FF9A] hover:text-[#262626]'>Create Agent</button>
//             </div>
//             <div className='max-w-[1000px] mx-auto flex flex-col p-5 md:flex-row justify-between space-x-0 md:space-x-14 mt-0 md:mt-[120px] z-[600] '>
//                 <div className='border border-[#F7FF9A] border-opacity-50 rounded-xl flex-col items-center justify-center w-full mt-5  z-[600]'>
//                     <div className='flex flex-col w-full items-center py-5 px-16 bg-[#262626] rounded-t-xl h-3/4 space-y-2'>
//                         <p className='font-bold text-[32px] font-mono text-center'>HOW IT WORK?</p>
//                         <span className="gradient-border block w-full h-[3px] z-[600]"></span>
//                         <p className='font-normal text-[19px] font-mono text-center text-white text-opacity-50'>Want to know how DÆTA empowers AI?
//                         Click here to learn more.</p>
//                     </div>
//                     <button type='button' className='flex w-full border-t-[#F7FF9A] border-t border-opacity-50 items-center justify-center space-x-2 p-5 bg-[#191919] rounded-b-xl h-1/4 text-[#F7FF9A]  hover:bg-[#F7FF9A] hover:text-[#262626]'>
//                         <p className='font-bold text-[21px] font-mono'>READ MORE </p>
//                         <FontAwesomeIcon icon={faArrowRight} className="text-[20px]" />
//                     </button>
//                 </div>
//                 <div className='border border-[#F7FF9A] border-opacity-50 rounded-xl flex-col justify-center w-full mt-5  z-[600]'>
//                     <div className='flex flex-col w-full items-center p-5 px-16 bg-[#262626] rounded-t-xl h-3/4 space-y-2'>
//                         <p className='font-bold text-[32px] font-mono text-center'>DATA TERMINAL</p>
//                         <span className="gradient-border block w-full h-[3px] z-[600]"></span>
//                         <p className='font-normal text-[19px] font-mono text-center text-white text-opacity-50'>Want to interact with data’s autonomous AI agent?</p>
//                     </div>
//                     <button type='button' className='flex w-full border-t-[#F7FF9A] border-t border-opacity-50 items-center justify-center space-x-2 p-5 bg-[#191919] rounded-b-xl h-1/4 text-[#F7FF9A] hover:bg-[#F7FF9A] hover:text-[#262626]'>
//                         <FontAwesomeIcon icon={faWallet} className="text-[25px]" />
//                         <p className='font-bold text-[21px] font-mono'>CONNECT WALLET</p>
//                     </button>
//                 </div>
//             </div>
//             <p className='text-[12px] text-white text-opacity-50 z-[600] font-mono mt-0 md:mt-[300px] text-center p-5'>By clicking continue you agree to our Terms of Service & Privacy Policy</p>
//         </div>
//     );
// };

// export default Home;




// src/app/page.tsx
"use client";

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faWallet } from '@fortawesome/free-solid-svg-icons';
import DefaultLayout from '../DefaultLayout';

const Home: React.FC = () => {
    return (
        <DefaultLayout>
            <div className='max-w-[1000px] mx-auto flex flex-col p-5 md:flex-row justify-between items-center space-x-0 md:space-x-14 mt-0 md:mt-[120px]'>
                <div className='border border-[#F7FF9A] border-opacity-50 rounded-xl flex-col items-center justify-center w-full h-full mt-5'>
                    <div className='flex flex-col w-full items-center py-5 px-16 bg-[#262626] rounded-t-xl h-3/4 space-y-2'>
                        <p className='font-bold text-[32px] font-mono text-center'>HOW IT WORK?</p>
                        <span className="gradient-border block w-full h-[3px]"></span>
                        <p className='font-normal text-[19px] font-mono text-center text-white text-opacity-50'>Want to know how DÆTA empowers AI?
                        Click here to learn more.</p>
                    </div>
                    <button type='button' className='flex w-full border-t-[#F7FF9A] border-t border-opacity-50 items-center justify-center space-x-2 p-5 bg-[#191919] rounded-b-xl h-1/4 text-[#F7FF9A]  hover:bg-[#F7FF9A] hover:text-[#262626]'>
                        <p className='font-bold text-[21px] font-mono'>READ MORE </p>
                        <FontAwesomeIcon icon={faArrowRight} className="text-[20px]" />
                    </button>
                </div>
                <div className='border border-[#F7FF9A] border-opacity-50 rounded-xl flex-col justify-center w-full h-full  mt-5'>
                    <div className='flex flex-col w-full items-center p-5 px-16 bg-[#262626] rounded-t-xl h-3/4 space-y-2'>
                        <p className='font-bold text-[32px] font-mono text-center'>DATA TERMINAL</p>
                        <span className="gradient-border block w-full h-[3px]"></span>
                        <p className='font-normal text-[19px] font-mono text-center text-white text-opacity-50'>Want to interact with data’s autonomous AI agent?</p>
                    </div>
                    <button type='button' className='flex w-full border-t-[#F7FF9A] border-t border-opacity-50 items-center justify-center space-x-2 p-5 bg-[#191919] rounded-b-xl h-1/4 text-[#F7FF9A] hover:bg-[#F7FF9A] hover:text-[#262626]'>
                        <FontAwesomeIcon icon={faWallet} className="text-[25px]" />
                        <p className='font-bold text-[21px] font-mono'>CONNECT WALLET</p>
                    </button>
                </div>
            </div>
        </DefaultLayout>
    );
};

export default Home;