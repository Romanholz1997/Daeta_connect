// // src/app/MatrixRain.tsx
"use client";

import React, { useEffect, useRef } from 'react';

const MatrixRain: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');

        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;

        const characters = '0101010101010101010';
        const fontSize = 15;
        const columns = Math.floor(canvas.width / fontSize);
        const drops = Array(columns).fill(0);

        const draw = () => {
            if(ctx)
            {
                ctx.fillStyle = 'rgba(0,0,0, 0.05)';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.fillStyle ='rgb(247, 255, 154, 0.3)';
                ctx.font = `${fontSize}px monospace`;

                for (let i = 0; i < drops.length; i++) {
                    const text = characters.charAt(Math.floor(Math.random() * characters.length));
                    ctx.fillText(text, i * 30, drops[i] * fontSize);    
                    if (drops[i] * fontSize > canvas.height && Math.random() > 0.8) {
                        drops[i] = 0;
                    }
                    drops[i]++;
                }                
            }            
        };
        const interval = setInterval(draw, 43);
        return () => clearInterval(interval);
    }, []);

    return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-[100%] "/>;
};

export default MatrixRain;


// src/app/MatrixRain.tsx
// "use client";

// import React, { useEffect, useRef } from 'react';

// const MatrixRain: React.FC = () => {
//     const canvasRef = useRef<HTMLCanvasElement | null>(null);
//     const backgroundImage = useRef<HTMLImageElement | null>(null);

//     useEffect(() => {
//         const canvas = canvasRef.current;
//         if (!canvas) return;
//         const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');

//         canvas.height = window.innerHeight;
//         canvas.width = window.innerWidth;

//         // Load the background image
//         backgroundImage.current = new Image();
//         backgroundImage.current.src = '/assets/background.png'; // Adjust the path accordingly
//         backgroundImage.current.onload = () => {
//             draw(); // Start drawing once the image is loaded
//         };

//         const characters = '0101010101010101010';
//         const fontSize = 15;
//         const columns = Math.floor(canvas.width / fontSize);
//         const drops = Array(columns).fill(0);

//         const draw = () => {
//             if (ctx && backgroundImage.current) {
//                 // Draw the background image
//                 const topMargin = 50;
//                 const bottomMargin = 50;
//                 ctx.drawImage(
//                     backgroundImage.current,
//                     0,
//                     topMargin,
//                     canvas.width,
//                     canvas.height - topMargin - bottomMargin
//                 );

//                 // Draw the rain effect
//                 ctx.fillStyle = 'rgba(25,25,25, 0.05)';
//                 ctx.fillRect(0, 0, canvas.width, canvas.height);
//                 ctx.fillStyle ='rgb(247, 255, 154, 0.3)';
//                 ctx.font = `${fontSize}px monospace`;
        
//                 for (let i = 0; i < drops.length; i++) {
//                     const text = characters.charAt(Math.floor(Math.random() * characters.length));
//                     ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
//                     if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
//                         drops[i] = 0;
//                     }
//                     drops[i]++;
//                 }
//             }
//         };

//         const interval = setInterval(draw, 53);
//         return () => clearInterval(interval);
//     }, []);

//     return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full "/>;
// };

// export default MatrixRain;
