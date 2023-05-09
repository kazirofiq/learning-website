import React from 'react';
import rightArrow from "../../../assest/icon/right arrow.png";
import { useState } from 'react';
import plusIcon from '../../../assest/icon/plus.png';
import UploadPhotoAndVideo from './../UploadPhotoAndVideo/UploadPhotoAndVideo';
import Buttons from '../Buttons/Buttons';
import { useNavigate } from 'react-router-dom';

const CourseDetailsInput = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Select");
  const [promotionVideoId, setPromotionVideoId] = useState("");
  const [image, setImage] = useState("");
  const [draft, setDraft] = useState(false);
  const [error, setError] = useState("");
  const [willLearns, setWillLearns] = useState(["willLearn"]);
  const navigate = useNavigate();

  const levels = ["Beginner", "Advanced"];
  const toggleSelect = () => setIsOpen(!isOpen);
  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  const addWillLearn = () => {
    setWillLearns([
      ...willLearns,
      "willLearn"
    ])
  }

  const handleAddCourse = e => {
    e.preventDefault();
    setError("");

    const form = e.target;
    const title = form.title.value;
    const subtitle = form.subtitle.value;
    const price = form.price.value;
    const instructor = form.instructor.value;
    const description = form.description.value;
    let will_learn = [];

    if (form.will_learn.length) {
      will_learn = [...form.will_learn].map(will_lrn => will_lrn.value).filter(will_lrn => will_lrn);
    } else {
      will_learn = form.will_learn.value ? [form.will_learn.value] : [];
    }

    if (title && subtitle && selectedItem && selectedItem !== "Select" && price && image && promotionVideoId && instructor && description && will_learn.length > 0) {
      const course = { title, subtitle, selectedItem, price, image, promotionVideoId, instructor, description, will_learn, draft };

      fetch("http://localhost:5000/courses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(course)
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          navigate(`/admindashboard/course-create/course-curriculum/${data.insertedId}`);
        })
        .catch(err => console.error(err))
    } else {
      setError("All Fields Are Required");
    }
  };

  return (
    <form onSubmit={handleAddCourse} className='poppins'>
      <div>
        <label className="label text-[#666666] font-normal text-sm">Course Title</label>
        <input name='title' type="text" placeholder="Course Title" className="input w-full focus:outline-none bg-[#F8F8FF] focus:border-[1px] focus:border-[#C3C4E1] h-[45px] lg:h-[48px] shadow-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]" />
      </div>
      <div className='mt-4'>
        <label className="label text-[#666666] font-normal text-sm">Course Subtitle</label>
        <div className="form-control">
          <textarea name='subtitle' className="textarea textarea-bordered h-[104px] w-full focus:outline-none bg-[#F8F8FF] focus:border-[1px] focus:border-[#C3C4E1] shadow-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]" placeholder="Course Subtitle"></textarea>
        </div>
      </div>
      <div className='mt-4 grid grid-cols-2'>
        <div>
          <label
            htmlFor="Level"
            className="block text-[#666666] font-normal text-sm mb-2"
          >
            Level
          </label>
          <button
            type="button"
            id="Level"
            className="input border-[1px] rounded-[8px] focus:border-[#C3C4E1]  w-[288px] lg:w-[375px] h-[45px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48] relative"
            aria-haspopup="listbox"
            aria-expanded={isOpen}
            onClick={toggleSelect}
          >
            <span className="block truncate text-left ml-4">
              {selectedItem}
            </span>
            <span className="absolute inset-y-0 right-[9%] lg:right-[18px] flex items-center pr-2 pointer-events-none">
              <img
                className={isOpen ? "rotate-90" : ""}
                src={rightArrow}
                alt=""
              />
            </span>
          </button>
          {isOpen && (
            <div className="flex justify-end">
              <ul
                className="absolute mt-1 lg:mr-[18px] text-right w-[176px] bg-[#FFFFFF] rounded-md shadow-lg max-h-40 overflow-auto z-10"
                tabindex="-1"
                role="listbox"
                aria-labelledby="listbox-label"
                aria-activedescendant="listbox-item-3"
              >
                {levels.map((item) => (
                  <li
                    key={item}
                    className={`${selectedItem === item
                      ? "font-medium text-[#1B1D48] text-base pl-4 my-4"
                      : "font-medium text-[#1B1D48] text-base pl-4 my-4"
                      } cursor-pointer select-none relative`}
                    onClick={() => handleItemClick(item)}
                  >
                    <div className="flex items-center">
                      <span
                        className={`${selectedItem === item
                          ? "font-semibold"
                          : "font-normal"
                          } block truncate`}
                      >
                        {item}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div>
          <label
            htmlFor="Price"
            className="block text-[#666666] font-normal text-sm mb-2"
          >
            Price
          </label>
          <input name='price' type="number" id='Price' placeholder="Price" className="input border-[1px] rounded-[8px] focus:border-[#C3C4E1] w-[288px] lg:w-[375px] h-[45px] lg:h-[48px] shadow-none bg-[#F8F8FF] focus:outline-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]" />
        </div>
      </div>
      <div className='mt-4'>
        <label htmlFor='Instructor' className="label text-[#666666] font-normal text-sm">Instructor</label>
        <input name='instructor' id='Instructor' type="text" placeholder="Instructor" className="input w-full focus:outline-none bg-[#F8F8FF] focus:border-[1px] focus:border-[#C3C4E1] h-[45px] lg:h-[48px] shadow-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]" />
      </div>
      <div className='mt-4'>
        <label htmlFor='Course-Description' className="label text-[#666666] font-normal text-sm">Course Description</label>
        <div className="form-control">
          <textarea name='description' className="textarea textarea-bordered h-[238px] w-full focus:outline-none bg-[#F8F8FF] focus:border-[1px] focus:border-[#C3C4E1] shadow-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]" placeholder="Course Description"></textarea>
        </div>
      </div>
      <div className='mt-4'>
        <label htmlFor='Will-Learn' className="label text-[#666666] font-normal text-sm">What Students Will Learn?</label>
        {
          willLearns.map((willLearn, i) => <input key={i} name='will_learn' type="text" placeholder="What Students Will Learn?" className="input w-full focus:outline-none bg-[#F8F8FF] focus:border-[1px] focus:border-[#C3C4E1] h-[45px] lg:h-[48px] shadow-none text-[#1B1D48] font-medium text-base placeholder-[#1B1D48]" />)
        }
      </div>
      <div className='flex items-center mt-3'>
        <img className='mr-3' src={plusIcon} alt="" />
        <span onClick={addWillLearn} className='font-normal text-base text-[#3D419F] cursor-pointer'>Add More</span>
      </div>
      <div>
        <UploadPhotoAndVideo setPromotionVideoId={setPromotionVideoId} setImage={setImage} />
      </div>
      {
        error && <p className='text-center text-red-600 font-bold my-5'>{error}</p>
      }
      <div>
        <Buttons setDraft={setDraft} text={'Save & Continue'} draft={true} />
      </div>
    </form>
  );
};

export default CourseDetailsInput;