import React from 'react';

const Register = () => {
    return (
        <section id='contact' className='bg-slate-900'>
            <div className='xl:mx-[25rem] md:mx-[8rem] px-9 md:py-[7rem] py-[4rem] '>
                <div className='md:mb-6 mb-3 text-center text-white'>
                    <h1 data-aos='fade-right' data-aos-duration='1000' className='text-5xl font-bold '>Register <span className='text-green-500'>Now</span></h1>
                    <p data-aos='fade-up' data-aos-duration='1000' className='py-2'>Winter Admission Is Going On. We are announcing for winter batch 2022.</p>
                </div>
                <div data-aos='fade-up' data-aos-duration='1000' className='flex'>
                    <div>
                        <h4 className='py-4 text-white'>Get A Free Registration</h4>
                        <form action="">
                            <input className='py-2 px-6 mb-4 w-full' placeholder='First Name' type="text" />
                            <input className='py-2 px-6 mb-4 w-full' placeholder='Last Name' type="text" />
                            <input className='py-2 px-6 mb-4 w-full' placeholder='Phone Number' type="phone" />
                            <input className='py-2 px-6 mb-4 w-full' placeholder='Email' type="email" />
                            <textarea className='w-full px-6 mb-1 py-2' name="" placeholder='Message' cols="0" rows="5"></textarea>
                            <button className="bg-blue-600 w-full text-white py-[10px] px-[25px] hover:bg-transparent duration-500 border border-blue-500 mr-2">SUBMIT</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;