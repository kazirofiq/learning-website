import React, { createContext, useEffect, useState } from 'react';

export const VedioContext = createContext()

const VedioProvider = ({ children }) => {
    const [allModules, setAllModules] = useState([])
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [contents, setContents] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const toggling = () => setIsOpen(!isOpen);
    const onOptionClicked = value => () => {
        setIsOpen(false);
        setSelectedOption(value);
        // console.log(value);
    };

    useEffect(() => {
        fetch('http://localhost:5000/batch-1')
            .then(res => res.json())
            .then(data => setAllModules(data))

    }, [])

    useEffect(() => {
        fetch('http://localhost:5000/batch-1/contents')
            .then(res => res.json())
            .then(data => setContents(data))
    }, [])


    const currentContent = contents[currentIndex];
    // console.log(currentContent[1]);

    // console.log(contents);

    const handleNext = () => {
        if (currentIndex < contents.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const vedioInfo = {
        setIsOpen,
        isOpen,
        setSelectedOption,
        selectedOption,
        onOptionClicked,
        toggling,
        allModules,
        currentContent,
        handleNext,
        handlePrevious,
        currentIndex,
        contents


    }

    return (
        <VedioContext.Provider value={vedioInfo}>
            {children}
        </VedioContext.Provider>
    );
};

export default VedioProvider;