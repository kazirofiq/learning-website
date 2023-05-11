import React, { createContext, useEffect, useState } from 'react';

export const VedioContext = createContext()

const VedioProvider = ({ children }) => {
    const [allModules, setAllModules] = useState([])
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggling = () => setIsOpen(!isOpen);
    const onOptionClicked = value => () => {
        setIsOpen(false);
        setSelectedOption(value);
    };

    useEffect(() => {
        fetch('http://localhost:5000/batch-1')
            .then(res => res.json())
            .then(data => setAllModules(data))

    }, [])

    const vedioInfo = {
        setIsOpen,
        isOpen,
        setSelectedOption,
        selectedOption,
        onOptionClicked,
        toggling,
        allModules
    }

    return (
        <VedioContext.Provider value={vedioInfo}>
            {children}
        </VedioContext.Provider>
    );
};

export default VedioProvider;