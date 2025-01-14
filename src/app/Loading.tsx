// LoadingBar.tsx
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import MatrixRain from './MatrixRain';

const Loading: React.FC = () => {
    const router = useRouter();
    const [progress, setProgress] = useState(0);
    const [totalDots, setTotalDots] = useState(20); // Default value
    const [totalRows, setTotalRows] = useState(20); // Default value

    useEffect(() => {
        // Check window size on mount
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setTotalDots(20); // 10 dots for mobile
                setTotalRows(4);
            } else {
                setTotalDots(40); // 20 dots for desktop
                setTotalRows(5);
            }
        };
        handleResize(); // Set initial value
        window.addEventListener('resize', handleResize); // Update on resize
        return () => {
            window.removeEventListener('resize', handleResize); // Cleanup
        };
    }, []);
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
        }, 20); // Adjust the speed of the loading effect

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (progress === 100) {
            router.push("/home"); // Navigate to the specified route
        }
    }, [progress, router]);


  // Calculate how many dots to display based on progress
  const dotsToShow = Math.floor((progress / 100) * totalDots);

  return (
    <div className='relative min-h-[100vh]'>
        <MatrixRain />
        <div className="flex flex-col items-center justify-center h-screen bg-black space-y-10">        
            <Image 
                src="/assets/logo.png" 
                alt="Logo Icon" 
                width={170} 
                height={154}
                className='z-[600]'
            />        
            <div className='flex  relative'>
                <span className={`text-white font-bold text-[31px] absolute top-0 right-0 transform -translate-x-[15px] translate-y-[25px] ${
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
            <div className="loading-text text-[31px] z-[600]">Loading...</div>      
            <p className='text-[12px] text-white text-opacity-50 z-[600] font-mono absolute bottom-5 text-center p-5'>By clicking continue you agree to our Terms of Service & Privacy Policy</p>
        </div>
    </div>
    
  );
};

export default Loading;
