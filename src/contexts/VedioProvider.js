import React, { createContext, useState } from 'react';

export const VedioContext = createContext()

const courseSummary = [
    {
        id: 1,
        moduleNumber: 1,
        module: 'Welcome And Overview Of The Course',
        lessons: [
            {
                vedioLesson: 'What is Amazon KDP ?',
                vedioLink: 'https://cdn.pixabay.com/photo/2017/07/18/18/24/dove-2516641__340.jpg'
            },
            {
                vedioLesson: 'Future and Earning Opportunity',
                vedioLink: 'https://i.pinimg.com/originals/9c/fd/4f/9cfd4fec14bfb9bdeef11494720636ec.jpg'
            },
            {
                vedioLesson: 'Amazon Kindle Copyright and Trademark Rules',
                vedioLink: 'https://i.pinimg.com/736x/5d/87/f5/5d87f5aa96107b62534fa6c9cf6baa95.jpg'
            },
            {
                vedioLesson: 'How to Make Book Cover Template for KDP',
                vedioLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq6oy5oJPmD04d-CqCcywDlFe73C8E23oD1IbrCzmzfk3v_JluW3TkFxiYlH5cCuqudk4&usqp=CAU'
            },
        ]
    },
    {
        id: 2,
        moduleNumber: 2,
        module: 'What Is KDP and How To setup KDP account',
        lessons: [
            'What is Amazon KDP ?',
            'Future and Earning Opportunity',
            'Amazon Kindle Copyright and Trademark Rules',
            'How to Make Book Cover Template for KDP'
        ]
    },
    {
        id: 3,
        moduleNumber: 3,
        module: 'All About Illustrator',
        lessons: [
            'What is Amazon KDP ?',
            'Future and Earning Opportunity',
            'Amazon Kindle Copyright and Trademark Rules',
            'How to Make Book Cover Template for KDP'
        ]
    },
    {
        id: 1,
        moduleNumber: 4,
        module: 'Niche Research On KDP',
        lessons: [
            {
                vedioLesson: 'What Is Niche?',
                vedioLink: 'https://cdn.pixabay.com/photo/2017/07/18/18/24/dove-2516641__340.jpg'
            },
            {
                vedioLesson: 'What is evergreen Niche?',
                vedioLink: 'https://i.pinimg.com/originals/9c/fd/4f/9cfd4fec14bfb9bdeef11494720636ec.jpg'
            },
            {
                vedioLesson: 'What is event Niche?',
                vedioLink: 'https://i.pinimg.com/736x/5d/87/f5/5d87f5aa96107b62534fa6c9cf6baa95.jpg'
            },
            {
                vedioLesson: "What is extension and why It's important?",
                vedioLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq6oy5oJPmD04d-CqCcywDlFe73C8E23oD1IbrCzmzfk3v_JluW3TkFxiYlH5cCuqudk4&usqp=CAU'
            },
            {
                vedioLesson: "How to add extensions?",
                vedioLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq6oy5oJPmD04d-CqCcywDlFe73C8E23oD1IbrCzmzfk3v_JluW3TkFxiYlH5cCuqudk4&usqp=CAU'
            },
            {
                vedioLesson: "All about BSR?",
                vedioLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq6oy5oJPmD04d-CqCcywDlFe73C8E23oD1IbrCzmzfk3v_JluW3TkFxiYlH5cCuqudk4&usqp=CAU'
            },
            {
                vedioLesson: ' All about search result, score and search volume?',
                vedioLink: 'https://i.pinimg.com/originals/9c/fd/4f/9cfd4fec14bfb9bdeef11494720636ec.jpg'
            },
            {
                vedioLesson: 'Different types of books on KDP With List Of the Books?',
                vedioLink: 'https://i.pinimg.com/originals/9c/fd/4f/9cfd4fec14bfb9bdeef11494720636ec.jpg'
            },
            {
                vedioLesson: 'Manually niche research on kdp?',
                vedioLink: 'https://i.pinimg.com/originals/9c/fd/4f/9cfd4fec14bfb9bdeef11494720636ec.jpg'
            },
            {
                vedioLesson: 'Manually  niche research on other marketplace?',
                vedioLink: 'https://i.pinimg.com/originals/9c/fd/4f/9cfd4fec14bfb9bdeef11494720636ec.jpg'
            },
            {
                vedioLesson: 'Niche research with paid tools Part 01?',
                vedioLink: 'https://i.pinimg.com/originals/9c/fd/4f/9cfd4fec14bfb9bdeef11494720636ec.jpg'
            },
            {
                vedioLesson: 'Niche research with paid tools part 02?',
                vedioLink: 'https://i.pinimg.com/originals/9c/fd/4f/9cfd4fec14bfb9bdeef11494720636ec.jpg'
            },
            {
                vedioLesson: ' My niche research Style ( Niche Nurturing) Part 01?',
                vedioLink: 'https://i.pinimg.com/originals/9c/fd/4f/9cfd4fec14bfb9bdeef11494720636ec.jpg'
            },
            {
                vedioLesson: 'My niche research Style ( Niche Nurturing) Part 02?',
                vedioLink: 'https://i.pinimg.com/originals/9c/fd/4f/9cfd4fec14bfb9bdeef11494720636ec.jpg'
            },
            {
                vedioLesson: 'How to take niche research service to save time?',
                vedioLink: 'https://i.pinimg.com/originals/9c/fd/4f/9cfd4fec14bfb9bdeef11494720636ec.jpg'
            },
        ]
    },
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