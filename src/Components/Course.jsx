import React from 'react';
import math from '../assets/math.jpg'
import science from '../assets/science.webp'
import {TbMathSymbols} from 'react-icons/tb'
import {GiMaterialsScience} from 'react-icons/gi'

const Course = () => {
    return (
        <section id='course' className=' bg-gray-100'>
            <div className='xl:mx-[14rem] px-6 md:py-[6rem] py-[4rem]'>
                <div className='border-l-2 border-green-500 pl-6'>
                    <h1 data-aos='fade-up' data-aos-duration='1000' className='text-5xl font-bold'><span className='text-green-500'>Our</span> Course</h1>
                    <p data-aos='fade-up' data-aos-duration='1000' data-aos-delay='100' className='py-5 mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt corporis <br /> qui rem error rerum earum minus distinctio labore doloremque debitis.</p>
                </div>
                <div className='grid gap-5 md:grid-cols-2'>
                    <div data-aos='fade-up' data-aos-duration='1000'>
                        <h4 data-aos='slide-down' data-aos-delay='200' className=' bg-blue-500 text-white absolute px-3 py-2'>Addmission Going On</h4>
                        <img className='w-[600px]' src={math} alt="" />
                        <div data-aos='fade-up' data-aos-duration='1000' className='bg-white shadow-lg md:py-8 py-4 px-7'>
                            <h4 className='flex items-center text-2xl text-green-500 font-bold py-2'> <TbMathSymbols className='mr-2'/> Mathematics</h4>
                            <p>dicta culpa possimus repellat a aut facere beatae debitis voluptatum velit.possimus repellat a aut facere beatae</p>
                        </div>
                    </div>
                    <div data-aos='fade-up' data-aos-duration='1000'>
                        <img className='w-[600px] ' src={science} alt="" />
                        <div data-aos='fade-up' data-aos-duration='1000' className='bg-white shadow-lg md:py-8 py-4 px-7'>
                            <h4 className='flex items-center text-2xl font-bold py-2 text-green-500 '> <GiMaterialsScience className='mr-2'/> Science</h4>
                            <p>dicta culpa possimus repellat a aut facere beatae debitis voluptatum velit.possimus repellat a aut facere beatae</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Course;