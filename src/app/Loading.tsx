// LoadingBar.tsx
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";

const Loading: React.FC = () => {
    const router = useRouter();
    const [progress, setProgress] = useState(0);
    const totalDots = 50; // Total number of dots per row
    const totalRows = 5; // Total number of rows

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev < 100) {
                    return prev + 1; // Increment progress
                } else {
                    clearInterval(interval);
                    return prev; // Stop at 100%
                }
            });
        }, 50); // Adjust the speed of the loading effect

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (progress === 100) {
            router.push("/page2"); // Navigate to the specified route
        }
    }, [progress, router]);


  // Calculate how many dots to display based on progress
  const dotsToShow = Math.floor((progress / 100) * totalDots);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black space-y-10">
        <Image 
            src="/assets/logo.png" 
            alt="Logo Icon" 
            width={170} 
            height={154}
        />        
        <div className='flex relative'>
            <span className={`text-white font-bold text-[31px] absolute top-0 right-0 transform -translate-x-[10px] translate-y-[25px] ${
                                dotsToShow ===totalDots? 'opacity-0':'opacity-100'
                            }`}>{progress}%</span>
            <div className='flex flex-col mt-4'>
                {Array.from({ length: totalRows + 2 }).map((_, rowIndex) => (
                    <div key={rowIndex} className="flex justify-center">
                        <div
                            className={`w-2 h-2 m-[1px] transition-opacity duration-300 ${
                                dotsToShow ===totalDots? 'bg-[#F7FF9A] opacity-100' : 'bg-white opacity-100'
                            }`}
                        ></div>
                    </div>
                ))}
            </div>
            <div className="flex flex-col mt-4">
                <div className="flex justify-center">
                    {Array.from({ length: totalDots }).map((_, dotIndex) => (
                    <div
                        key={dotIndex}
                        className={`w-2 h-2 m-[1px] transition-opacity duration-300 ${
                        dotsToShow ===totalDots? 'bg-[#F7FF9A] opacity-100' : 'bg-white opacity-100'
                        }`}
                    ></div>
                    ))}
                </div>
                {Array.from({ length: totalRows }).map((_, rowIndex) => (
                <div key={rowIndex} className="flex justify-center">
                    {Array.from({ length: totalDots }).map((_, dotIndex) => (
                    <div
                        key={dotIndex}
                        className={`w-2 h-2 m-[1px] transition-opacity duration-300 ${
                        dotIndex < dotsToShow ? 'bg-white opacity-100' : 'opacity-0'
                        }`}
                    ></div>
                    ))}
                </div>
                ))}            
                <div className="flex justify-center">
                    {Array.from({ length: totalDots }).map((_, dotIndex) => (
                    <div
                        key={dotIndex}
                        className={` w-2 h-2 m-[1px] transition-opacity duration-300 ${
                            dotsToShow ===totalDots? 'bg-[#F7FF9A] opacity-100' : 'bg-white opacity-100'
                        }`}
                    ></div>
                    ))}
                </div>
            </div>
            <div className='flex flex-col mt-4'>
            {Array.from({ length: totalRows + 2 }).map((_, rowIndex) => (
                <div key={rowIndex} className="flex justify-center">
                    <div
                        className={`w-2 h-2 m-[1px] transition-opacity duration-300 ${
                            dotsToShow ===totalDots ? 'bg-[#F7FF9A] opacity-100' : 'bg-white opacity-100'
                        }`}
                    ></div>
                </div>
                ))}
            </div>
        </div>
        <div className="loading-text text-[31px]">Loading...</div>
      
    </div>
  );
};

export default Loading;
