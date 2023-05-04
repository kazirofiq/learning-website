import React from 'react';
import { CircularProgressbar } from "react-circular-progressbar";
const percentage = 60;
const customColor = '#3D419F';
const styles = {
  path: {
    stroke: customColor,
  },
  trail: {
    stroke: '#d6d6d6',
  },
  text: {
    fill: customColor,
  },
};
const textStyle = {
  textAnchor: 'middle',
  dominantBaseline: 'middle',
};
const ProfileCompleteProgressbar = () => {
  return (
    <div className='flex justify-center items-center mt-4'>
      <div className='flex justify-center items-center mr-[12px]'>
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={styles}
          textStyle={textStyle}
          width={58}
          height={58}
        />
      </div>

      <h5 className='font-normal lg:text-base leading-[19px] text-[#333333]'>Profile Complete</h5>
    </div>
  );
};

export default ProfileCompleteProgressbar;