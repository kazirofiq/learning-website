import React, { createContext, useState } from 'react';

export const VedioContext = createContext()

const courseSummary = [
    {
        id: 1,
        moduleNumber: 1,
        module: 'Types of Niches in Amazon KDP',
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
        module: 'Working Process and Necessary Document',
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
        module: 'Types of Paperback Book Categories',
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
        module: 'Types of Niches in Amazon KDP',
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