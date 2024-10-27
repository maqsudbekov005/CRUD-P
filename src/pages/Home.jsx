import React, { useEffect, useRef } from 'react';

const Slider = () => {
    const sliderRef = useRef(null);

    useEffect(() => {
        const slider = sliderRef.current;

        const moveSlide = () => {
            const max = slider.scrollWidth - slider.clientWidth;
            const left = slider.clientWidth;

            if (max === slider.scrollLeft) {
                slider.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                slider.scrollBy({ left, behavior: 'smooth' });
            }
        };

        const intervalId = setInterval(moveSlide, 2000);

        return () => clearInterval(intervalId); // Clear the interval on component unmount
    }, []);

    return (
        <div
            className="h-screen w-full overflow-hidden flex flex-nowrap text-center"
            ref={sliderRef}
        >
            <div className="bg-black text-white space-y-4 flex-none w-full flex flex-col items-center justify-center">
                <img src="https://wallpapers-hub.art/wallpaper-images/19268.jpg" alt="" />
            </div>
            <div className="bg-pink-400 text-white space-y-4 flex-none w-full flex flex-col items-center justify-center">
                <img src="https://wallpapers.com/images/featured/japan-4k-qbc6mlnwowjbszld.jpg" alt="" />
            </div>
            <div className="bg-teal-500 text-white space-y-4 flex-none w-full flex flex-col items-center justify-center">
                <img src="https://wallpapers.com/images/featured/tokyo-dxva6ho3h8x6m3xb.jpg" alt="" />
            </div>
        </div>
    );
};

export default Slider;

