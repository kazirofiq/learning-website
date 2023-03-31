import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const PremiumCourseNavebar = () => {

  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const menuItemIds = ['aboutTheCourse', 'courseCurriculum', 'mentor', 'learnerReview', 'frequentlyAskedQuestion'];
      const menuItems = menuItemIds.map(id => document.getElementById(id));
      // const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      let activeIndex = menuItemIds.length - 1;

      menuItems.forEach((item, index) => {
        const top = item.offsetTop - 50; // subtract header height
        const bottom = top + item.offsetHeight;

        if (scrollPosition >= top && scrollPosition < bottom) {
          activeIndex = index;
        }
      });

      setActiveItem(menuItemIds[activeIndex]);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <div className="bg-[#ECECF5] rounded-[10px] mt-[32px] sticky top-0">
      <ul className="flex justify-between h-[40px] items-center">

        <li className=''>
          <Link className={activeItem === 'aboutTheCourse' ? 'active bg-[#3D419F] rounded-[10px] text-[#FFFFFF] h-[40px] flex items-center w-[152px] justify-center' : 'bg-[#ECECF5] rounded-[10px] text-[#FFFFFF] h-[40px] flex items-center w-[152px] justify-center'}>
            <a href="#aboutTheCourse">Overview</a>
          </Link>
        </li>
        <li>
          <Link className={activeItem === 'courseCurriculum' ? 'active bg-[#3D419F] rounded-[10px] text-[#FFFFFF] h-[40px] flex items-center w-[152px] justify-center' : 'bg-[#ECECF5] rounded-[10px] text-[#FFFFFF] h-[40px] flex items-center w-[152px] justify-center'}>
            <a href="#courseCurriculum">Curriculum</a>
          </Link>
        </li>
        <li>
          <Link className={activeItem === 'mentor' ? 'active bg-[#3D419F] rounded-[10px] text-[#FFFFFF] h-[40px] flex items-center w-[152px] justify-center' : 'bg-[#ECECF5] rounded-[10px] text-[#FFFFFF] h-[40px] flex items-center w-[152px] justify-center'}>
            <a href="#mentor">Instructor</a>
          </Link>
        </li>
        <li>
          <Link className={activeItem === 'learnerReview' ? 'active bg-[#3D419F] rounded-[10px] text-[#FFFFFF] h-[40px] flex items-center w-[152px] justify-center' : 'bg-[#ECECF5] rounded-[10px] text-[#FFFFFF] h-[40px] flex items-center w-[152px] justify-center'}>
            <a href="#learnerReview">Reviews</a>
          </Link>
        </li>
        <li>
          <Link className={activeItem === 'frequentlyAskedQuestion' ? 'active bg-[#3D419F] rounded-[10px] text-[#FFFFFF] h-[40px] flex items-center w-[152px] justify-center' : 'bg-[#ECECF5] rounded-[10px] text-[#FFFFFF] h-[40px] flex items-center w-[152px] justify-center'}>
            <a href="#frequentlyAskedQuestion">FAQ</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default PremiumCourseNavebar;