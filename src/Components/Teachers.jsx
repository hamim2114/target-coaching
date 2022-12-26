import React from 'react';
import hafiz from '../assets/teacher/hafiz.jpg'
import aman from '../assets/teacher/aman.jpg'
import jahedul from '../assets/teacher/jahedul.jpg'
import pranto from '../assets/teacher/pranto.jpg'


const Teachers = () => {
    return (
        <section id='teacher' className='bg-gray-100'>
            
            <div className='flex relative flex-col md:mx-[14rem] md:py-[6rem] py-[3rem] px-6 text-center '>
                <div>
                    <h2 data-aos='slide-right' data-aos-duration='1000' className='text-5xl font-bold py-4 '>Our Experience <span className='text-green-500'>Advisors</span></h2>
                    <p data-aos='fade-up' data-aos-duration='1000' className='pb-7 text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br className='hidden md:block' /> Molestias, harum unde. Eligendi cumque corporis magni.</p>
                </div>
                <div className='grid gap-3 grid-cols-2 sm:grid-cols-4'>
                    <div data-aos='slide-left' data-aos-duration='1000' className=' border-b-2  border-green-500 shadow-gray-400 shadow-lg'>
                        <img className='w-full' src={hafiz} alt="" />
                        <h4 className='text-2xl font-bold pt-4'>Hafizur Rahman</h4>
                        <p className='pb-4'>B.Sc in Mathematics</p>
                    </div>
                    <div data-aos='slide-right' data-aos-duration='1000' className=' border-b-2 border-green-500 shadow-lg shadow-gray-400'>
                        <img className='w-full' src={aman} alt="" />
                        <h4 className='text-2xl font-bold pt-4'>Aman Uddin</h4>
                        <p className='pb-4'>B.S.S in Economics</p>
                    </div>
                    <div data-aos='fade-up' data-aos-duration='1000' className=' border-b-2 border-green-500 shadow-lg shadow-gray-400'>
                        <img className='w-full' src={jahedul} alt="" />
                        <h4 className='text-2xl font-bold pt-4'>Jahedul Islam</h4>
                        <p className='pb-4'>BA in English (Honours)</p>
                    </div>
                    <div data-aos='fade-down' data-aos-duration='1000' className=' border-b-2 border-green-500 shadow-lg shadow-gray-400'>
                        <img className='w-full' src={pranto} alt="" />
                        <h4 className='text-2xl font-bold pt-4'>Pranto Chowdhury</h4>
                        <p className='pb-4'>B.sc in CSE</p>
                    </div>
                </div>
            </div>

            <div className=' bg-slate-900 text-white md:py-[6rem] py-[3rem] text-center'>
                <p  data-aos='fade-up' data-aos-duration='1000'>Join hundreds of instructors!</p>
                <h1 data-aos='fade-down' data-aos-duration='1000' className='md:text-5xl text-4xl pb-6 font-serif font-bold'>Become an <span className='text-green-500'>Instructor?</span></h1>
                <button data-aos='fade-up' data-aos-duration='1000' data-aos-delay='200' className="bg-blue-600 text-white py-[10px] px-[25px] hover:bg-transparent duration-500 border border-blue-500 mr-2">GET STARTED NOW</button>
            </div>
        </section>
    );
};

export default Teachers;