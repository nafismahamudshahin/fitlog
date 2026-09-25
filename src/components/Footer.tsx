import React from 'react';
import FooterLogo from "@/assets/footer_logo.png";
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className='border-t'>
            <div className='container py-10 md:mx-auto flex flex-col md:flex-row items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <div>
                        <Image width={20} height={20} src={FooterLogo} alt='Footer logo'></Image>
                    </div>
                    <span className="text-white font-bold text-xl">
                        FITLOG
                    </span>
                </div>
                <div>
                    <p className='text-[#6B7280] text-center md:text-start'>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;