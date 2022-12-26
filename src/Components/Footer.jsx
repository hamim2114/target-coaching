import React from 'react';
import {MdEmail, MdPhone, MdLocationOn} from 'react-icons/md'
import {BsFacebook,BsYoutube, BsTwitter,BsLinkedin} from 'react-icons/bs'

const Footer = () => {
    return (
        <footer className='bg-slate-900 pb-[1rem] pt-[4rem]'>
            <div className='md:mx-[19rem] px-6 border-b-2 border-slate-700 pb-12 justify-between md:flex'>
                <div data-aos='fade-up' data-aos-duration='3000' className=''>
                    <div className='text-slate-300'>
                        <h3 className='font-bold'>ABOUT US</h3>
                        <p className='my-4'>Lratione error qui corporis molestiae impedit corrupti eos <br className='hidden md:block' /> omnis provident commodi, modi ab minima ipsum.</p>
                        <p className='flex items-center'> <MdLocationOn className='mr-2'/> Bandarban Sadar, Bandarban</p>
                        <p className='flex items-center'> <MdEmail className='mr-2'/>targetcoaching@gmail.com</p>
                        <p className='flex items-center'><MdPhone className='mr-2'/>+8801839420283</p>
                    </div>
                    <div data-aos='slide-right' data-aos-duration='3000' className='mt-4 md:pb-0 pb-16'>
                        <h3 className='text-white font-bold py-2'>NEWSLATTER</h3>
                        <form  action="">
                            <input className='py-[10px] px-2' type="email" placeholder='Your Email Address' />
                            <button className="bg-blue-600 text-white py-[10px] px-[25px] hover:bg-transparent duration-500 border border-blue-500 mr-2">SUBMIT</button>
                        </form>
                    </div>
                </div>
                <div data-aos='fade-down' data-aos-duration='3000' className='flex px-8 flex-col'>
                    <div className='flex justify-between  md:px-0 text-white'>
                        <div className='flex flex-col md:px-20'>
                            <h3 className='mb-4 font-bold'>QUICK LINK </h3>
                            <a href="">Home</a>
                            <a href="">About Us</a>
                            <a href="">Course</a>
                            <a href="">Admission</a>
                            <a href="">Terms & Conditions</a>
                        </div>
                        <div className='flex flex-col'>
                            <h3 className='mb-4 font-bold'>COURSES</h3>
                            <a href="">Under Graduate</a>
                            <a href="">Diploma Course</a>
                            <a href="">Mathmatics</a>
                            <a href="">Science</a>
                            <a href="">English</a>
                            <a href="">Short Course</a>
                        </div>
                    </div>
                    <div className='text-white flex md:ml-8 justify-between px-14 md:mt-12 mt-8'>
                        <BsFacebook size={25}/>
                        <BsYoutube size={25}/>
                        <BsLinkedin size={25}/>
                        <BsTwitter size={25}/>
                    </div>
                    
                </div>
            </div>
                <marquee className='text-white pt-4' behavior="" direction="">DEVELOPED BY <span className='font-bold '>HAMIM</span> 2023</marquee>
        </footer>
    );
};

export default Footer;