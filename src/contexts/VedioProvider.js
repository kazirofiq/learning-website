import React, { createContext, useState } from 'react';

export const VedioContext = createContext()

const courseSummary = [
    {
        id: 1,
        module: "Types of Niches in Amazon KDP",
        moduleNo: 1,
        lessons: [
            {
                lessonNumber: 1,
                videoLink: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
                name: "What is Amazon KDP?"
            },
            {
                lessonNumber: 2,
                videoLink: "https://www.w3schools.com/html/mov_bbb.mp4",
                name: "Future and Earning Opportunity"
            },
            {
                lessonNumber: 3,
                videoLink: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
                name: "Amazon Kindle Copyright and Trademark Rules"
            },
            {
                lessonNumber: 4,
                videoLink: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
                name: "How to Make Book Cover Template for KDP"
            }
        ],
    },
    // {
    //     id: 1,
    //     module: "Types of Niches in Amazon KDP",
    //     moduleNo: 1,
    //     lessons: [
    //         {
    //             lessonNumber: 1,
    //             videoLink: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
    //             name: "What is Amazon KDP?"
    //         },
    //         {
    //             lessonNumber: 2,
    //             videoLink: "https://www.w3schools.com/html/mov_bbb.mp4",
    //             name: "Future and Earning Opportunity"
    //         },
    //         {
    //             lessonNumber: 3,
    //             videoLink: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
    //             name: "Amazon Kindle Copyright and Trademark Rules"
    //         },
    //         {
    //             lessonNumber: 4,
    //             videoLink: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
    //             name: "How to Make Book Cover Template for KDP"
    //         }
    //     ],
    // },
]


const VedioProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggling = () => setIsOpen(!isOpen);
    const onOptionClicked = value => () => {
        setIsOpen(false);
        setSelectedOption(value);
        console.log(value);
    };

    const vedioInfo = {
        setIsOpen,
        isOpen,
        setSelectedOption,
        selectedOption,
        onOptionClicked,
        toggling,
        courseSummary
    }

    return (
        <VedioContext.Provider value={vedioInfo}>
            {children}
        </VedioContext.Provider>
    );
};

export default VedioProvider;