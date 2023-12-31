import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./PremiumCourseNavebar.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const PremiumCourseNavebar = () => {
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const menuItemIds = [
        "aboutTheCourse",
        "courseCurriculum",
        "mentor",
        "learnerReview",
        "frequentlyAskedQuestion",
        "free-course",
      ];
      const menuItems = menuItemIds.map((id) => document.getElementById(id));
      const scrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      let activeIndex = menuItemIds.length + 1;

      menuItems.forEach((item, index) => {
        const top = item.offsetTop - 50;
        const bottom = top + item.offsetHeight;

        if (scrollPosition >= top && scrollPosition < bottom) {
          activeIndex = index;
        }
      });

      setActiveItem(menuItemIds[activeIndex]);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleItemClick = (itemId) => {
    const scrollPosition = document.getElementById(itemId).offsetTop - 50; // subtract header height
    window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    setActiveItem(itemId);
  };

  return (
    <div className={activeItem === "free-course" ? 'hidden' : "sticky stop top-0 rounded-[10px] lg:z-20 lg:block hidden"}>
      <nav className="bg-[#ECECF5] rounded-[10px] mt-[32px] lg:block hidden w-[730px]">
        <ul className="flex justify-between h-[37px] items-center">
          <li className=''>
            <Link className={activeItem === 'aboutTheCourse' ? 'active bg-[#3D419F] rounded-[10px] text-[#FFFFFF] h-[37px] flex items-center w-[97px] lg:w-[146px] justify-center' : 'bg-[#ECECF5] rounded-[10px] text-[#333] h-[37px] flex items-center w-[97px] lg:w-[146px] justify-center'} onClick={() => handleItemClick('aboutTheCourse')}>
              <a href="#aboutTheCourse">Overview</a>
            </Link>
          </li>
          <li>
            <Link className={activeItem === 'courseCurriculum' ? 'active bg-[#3D419F] rounded-[10px] text-[#FFFFFF] h-[37px] flex items-center w-[97px] lg:w-[146px] justify-center' : 'bg-[#ECECF5] rounded-[10px] text-[#333] h-[37px] flex items-center w-[97px] lg:w-[146px] justify-center'} onClick={() => handleItemClick('courseCurriculum')}>
              <a href="#courseCurriculum">Curriculum</a>
            </Link>
          </li>
          <li>
            <Link className={activeItem === 'mentor' ? 'active bg-[#3D419F] rounded-[10px] text-[#FFFFFF] h-[37px] flex items-center w-[97px] lg:w-[146px] justify-center' : 'bg-[#ECECF5] rounded-[10px] text-[#333] h-[37px] flex items-center w-[97px] lg:w-[146px] justify-center'} onClick={() => handleItemClick('mentor')}>
              <a href="#mentor">Instructor</a>
            </Link>
          </li>
          <li>
            <Link className={activeItem === 'learnerReview' ? 'active bg-[#3D419F] rounded-[10px] text-[#FFFFFF] h-[37px] flex items-center w-[97px] lg:w-[146px] justify-center' : 'bg-[#ECECF5] rounded-[10px] text-[#333] h-[37px] flex items-center w-[97px] lg:w-[146px] justify-center'} onClick={() => handleItemClick('learnerReview')}>
              <a href="#learnerReview">Reviews</a>
            </Link>
          </li>
          <li>
            <Link className={activeItem === 'frequentlyAskedQuestion' ? 'active bg-[#3D419F] rounded-[10px] text-[#FFFFFF] h-[37px] flex items-center w-[97px] lg:w-[146px] justify-center' : 'bg-[#ECECF5] rounded-[10px] text-[#333] h-[37px] flex items-center w-[97px] lg:w-[146px] justify-center'} onClick={() => handleItemClick('frequentlyAskedQuestion')}>
              <a href="#frequentlyAskedQuestion">FAQ</a>
            </Link>
          </li>
        </ul>
      </nav>
      {/* Responsive nav */}
      <nav className="bg-[#ECECF5] rounded-[10px] mt-6 lg:hidden mx-auto">
        <ul className="flex justify-between h-[37px] items-center">
          <Swiper
            slidesPerView={3}
            centeredSlides={true}
            spaceBetween={30}
            grabCursor={true}
            pagination={{
              clickable: true,
            }}
            // modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <li className="">
                <Link
                  className={
                    activeItem === "aboutTheCourse"
                      ? "active bg-[#3D419F] rounded-[10px] text-[#FFFFFF] h-[37px] flex items-center w-[97px] lg:w-[152px] justify-center"
                      : "bg-[#ECECF5] rounded-[10px] text-[#FFFFFF] h-[37px] flex items-center w-[97px] lg:w-[152px] justify-center"
                  }
                  onClick={() => handleItemClick("aboutTheCourse")}
                >
                  <a href="#aboutTheCourse">Overview</a>
                </Link>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li>
                <Link
                  className={
                    activeItem === "courseCurriculum"
                      ? "active bg-[#3D419F] rounded-[10px] text-[#FFFFFF] h-[37px] flex items-center w-[97px] lg:w-[152px] justify-center"
                      : "bg-[#ECECF5] rounded-[10px] text-[#FFFFFF] h-[37px] flex items-center w-[97px] lg:w-[152px] justify-center"
                  }
                  onClick={() => handleItemClick("courseCurriculum")}
                >
                  <a href="#courseCurriculum">Curriculum</a>
                </Link>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li>
                <Link
                  className={
                    activeItem === "mentor"
                      ? "active bg-[#3D419F] rounded-[10px] text-[#FFFFFF] h-[37px] flex items-center w-[97px] lg:w-[152px] justify-center"
                      : "bg-[#ECECF5] rounded-[10px] text-[#FFFFFF] h-[37px] flex items-center w-[97px] lg:w-[152px] justify-center"
                  }
                  onClick={() => handleItemClick("mentor")}
                >
                  <a href="#mentor">Instructor</a>
                </Link>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li>
                <Link
                  className={
                    activeItem === "learnerReview"
                      ? "active bg-[#3D419F] rounded-[10px] text-[#FFFFFF] h-[37px] flex items-center w-[97px] lg:w-[152px] justify-center"
                      : "bg-[#ECECF5] rounded-[10px] text-[#FFFFFF] h-[37px] flex items-center w-[97px] lg:w-[152px] justify-center"
                  }
                  onClick={() => handleItemClick("learnerReview")}
                >
                  <a href="#learnerReview">Reviews</a>
                </Link>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li>
                <Link
                  className={
                    activeItem === "frequentlyAskedQuestion"
                      ? "active bg-[#3D419F] rounded-[10px] text-[#FFFFFF] h-[37px] flex items-center w-[97px] lg:w-[152px] justify-center"
                      : "bg-[#ECECF5] rounded-[10px] text-[#FFFFFF] h-[37px] flex items-center w-[97px] lg:w-[152px] justify-center"
                  }
                  onClick={() => handleItemClick("frequentlyAskedQuestion")}
                >
                  <a href="#frequentlyAskedQuestion">FAQ</a>
                </Link>
              </li>
            </SwiperSlide>
          </Swiper>
        </ul>
      </nav>
    </div>
  );
};

export default PremiumCourseNavebar;