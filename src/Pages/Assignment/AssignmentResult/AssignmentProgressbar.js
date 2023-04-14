import React from 'react';
import { CircularProgressbar } from "react-circular-progressbar";

const percentage = 70;
const customColor = '#3D419F';
const middleTextColor = '#333333';
const styles = {
    path: {
        stroke: customColor,
    },
    trail: {
        stroke: '#C0C0D0',
    },
    text: {
        fill: middleTextColor,
    },
};
const textStyle = {
    textAnchor: 'middle',
    dominantBaseline: 'middle',
};
const AssignmentProgressbar = () => {
    return (
        <div className='flex justify-center items-center mt- gap-3'>
            <div className='flex justify-center items-center'>
                <CircularProgressbar
                    value={percentage}
                    text={`${percentage}`}
                    styles={styles}
                    textStyle={textStyle}
                    width={68}
                    height={68}
                />
            </div>
            <div>
                <h5 className='w-[130px] font-normal lg:text-base leading-[22.28px] text-[#333333]'>Your Score
                    <br />Out of 100 Marks</h5>
            </div>
        </div>
    );
};

export default AssignmentProgressbar;