import React from 'react';

const ConsultationAboutTC = () => {
    return (
        <div className='px-[20px] lg:px-[145px]'>
            <div id="aboutTheCourse" className='mx-auto'>
                <h3 className='font-bold text-2xl text-[#1B1D48] pt-[30px] text-left'>What Will You Learn?</h3>
                <div className='grid mx-auto grid-cols-1 lg:grid-cols-2 gap-[30px] pt-[10px] text-left'>
                    <div className='poppins max-w-[540px] text-left' id='aboutTheCourse'>
                        <p className='font-normal text-sm lg:text-base leading-6 text-[#666666] mt-2 lg:mt-4'>Expert guidance for designers to jumpstart their careers and expand their work. Personalized consultations to identify strengths, set goals, and develop strategies.<br/>
                            <span className='block pt-[10px]'>Lorem ipsum dolor sit amet consectetur adipiscing elit posuere risus, massa nisl ultricies malesuada maecenas consequat aliquet sem, accumsan aliquam ornare sagittis ad montes dictum scelerisque.Rutrum venenatis viverra nec aenean semper tristique, augue ridiculus condimentum mus donec, conubia per scelerisque torquent non. .</span></p>
                    </div>
                    <div className='poppins  max-w-[540px]' id='aboutTheCourse'>
                        <p className='font-normal text-sm lg:text-base leading-6 text-[#666666] mt-2 lg:mt-4'>Expert guidance for designers to jumpstart their careers and expand their work. Personalized consultations to identify strengths, set goals, and develop strategies.<br/>
                            <span className='block mt-[10px]'>Lorem ipsum dolor sit amet consectetur adipiscing elit posuere risus, massa nisl ultricies malesuada maecenas consequat aliquet sem, accumsan aliquam ornare sagittis ad montes dictum scelerisque.Rutrum venenatis viverra nec aenean semper tristique, augue ridiculus condimentum mus donec, conubia per scelerisque torquent non. .</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConsultationAboutTC;