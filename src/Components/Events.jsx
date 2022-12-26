import React from 'react';
import event1 from '../assets/event1.jpg'
import event2 from '../assets/event2.jpg'
import {MdLocationOn} from 'react-icons/md'
import {BiTimeFive} from 'react-icons/bi'

const Events = () => {
    return (
        <section id='event' className='md:py-[8rem] py-[3rem]'>
            <div className='sm:mx-[14rem] px-6'>
                <div data-aos='fade-up' data-aos-duration='1000' className=' border-l-2 border-green-500 pl-6'>
                    <h1 data-aos='fade-right' data-aos-duration='1000' className='text-5xl font-bold mb-2'> <span className='text-green-500'>Our</span> Event</h1>
                    <p data-aos='fade-right' data-aos-duration='1000' data-aos-delay='200' className='mb-8'>amet consectetur adipisicing elit. Quos beatae itaque <br className='hidden md:block' /> accusantium quas voluptas iusto.adipisicing elit. Quos beatae</p>
                </div>

                <div className='sm:flex justify-between'>

                    <div data-aos='fade-up' data-aos-duration='1000' className=' shadow-lg pb-2 md:mx-2 mb-4 md:mb-0 shadow-gray-400'>
                        <div className='bg-green-500 absolute px-6 font-bold text-white py-2'>
                            <h4>1st <br /> Dec</h4>
                        </div>
                        <img className='w-[34rem]' src={event1} alt="" />
                        <div data-aos='fade-down' data-aos-duration='1000' className='mx-6'>
                            <h6 className='font-bold my-2 text-2xl'>Academic Conference</h6>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br className='hidden md:block' /> Iure molestias autem ut quo asperiores molestiae!</p>
                            <div className=' mb-4 my-2 text-green-500'>
                                <p className='flex items-center'> <MdLocationOn/> Bandarban Sadar </p>
                                <p className='flex items-center'> <BiTimeFive/> 10.00 AM TO 12.00 PM </p>
                            </div>
                        </div>
                    </div>

                    <div data-aos='fade-up' data-aos-duration='1000' data-aos-delay='200' className=' pb-2 shadow-lg md:mx-2 shadow-gray-400'>
                        <div className='bg-green-500 absolute px-6 font-bold text-white py-2'>
                            <h4>1st <br /> Dec</h4>
                        </div>
                        <img className='w-[34rem]' src={event2} alt="" />
                        <div data-aos='fade-down' data-aos-duration='1000' className='mx-6'>
                            <h6 className='font-bold my-2 text-2xl'>Academic Conference</h6>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br className='hidden md:block' /> Iure molestias autem ut quo asperiores molestiae!</p>
                            <div className=' mb-4 my-2 text-green-500'>
                                <p className='flex items-center'> <MdLocationOn/> Bandarban Sadar </p>
                                <p className='flex items-center'> <BiTimeFive/> 10.00 AM TO 12.00 PM </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Events;