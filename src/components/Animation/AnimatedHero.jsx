"use client"
import { useEffect, useRef } from 'react';

const AnimatedHero = () => {
    const canvasRef = useRef(null);

    function getDistance(p1, p2) {
        return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
    }

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width = window.innerWidth;
        let height = window.innerHeight;
        let target = { x: width / 2, y: height / 2 };
        let points = [];
        let animateHeader = true;

        canvas.width = width;
        canvas.height = height;
        const largeHeader = document.getElementById('large-header');
        largeHeader.style.height = height + 'px';

        // Create points
        for (let x = 0; x < width; x = x + width / 20) {
            for (let y = 0; y < height; y = y + height / 20) {
                const px = x + Math.random() * width / 20;
                const py = y + Math.random() * height / 20;
                const p = { x: px, originX: px, y: py, originY: py };
                points.push(p);
            }
        }

        // Find the closest points
        for (let i = 0; i < points.length; i++) {
            const closest = [];
            const p1 = points[i];
            for (let j = 0; j < points.length; j++) {
                const p2 = points[j];
                if (!(p1 === p2)) {
                    let placed = false;
                    for (let k = 0; k < 5; k++) {
                        if (!placed) {
                            if (closest[k] === undefined) {
                                closest[k] = p2;
                                placed = true;
                            }
                        }
                    }

                    for (let k = 0; k < 5; k++) {
                        if (!placed) {
                            if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                                closest[k] = p2;
                                placed = true;
                            }
                        }
                    }
                }
            }
            p1.closest = closest;
        }

        // Animation logic
        const animate = () => {
            if (animateHeader) {
                ctx.clearRect(0, 0, width, height);
                for (let i in points) {
                    if (Math.abs(getDistance(target, points[i])) < 4000) {
                        points[i].active = 0.3;
                    } else if (Math.abs(getDistance(target, points[i])) < 20000) {
                        points[i].active = 0.1;
                    } else if (Math.abs(getDistance(target, points[i])) < 40000) {
                        points[i].active = 0.02;
                    } else {
                        points[i].active = 0;
                    }

                    drawLines(points[i]);
                }
            }
            requestAnimationFrame(animate);
        };

        // Draw lines between points
        const drawLines = (p) => {
            if (!p.active) return;
            for (let i in p.closest) {
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p.closest[i].x, p.closest[i].y);
                ctx.strokeStyle = `rgba(156,217,249,${p.active})`;
                ctx.stroke();
            }
        };

        // Initial animation start
        animate();

        // Event listeners
        const mouseMove = (e) => {
            let posx = e.pageX || e.clientX;
            let posy = e.pageY || e.clientY;
            target = { x: posx, y: posy };
        };

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            largeHeader.style.height = height + 'px';
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener('mousemove', mouseMove);
        window.addEventListener('resize', resize);

        return () => {
            window.removeEventListener('mousemove', mouseMove);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <div id="large-header" className="absolute h-full w-full bg-transparent overflow-hidden -z-10">
            <canvas id="demo-canvas" ref={canvasRef}></canvas>
        </div>
    );
};

export default AnimatedHero;
