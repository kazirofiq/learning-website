import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import './Main.css'
import { ClipLoader } from 'react-spinners';
import { useState } from 'react';
import { useEffect } from 'react';

const Main = () => {
    const [loader, setLoader] = useState(false);
    useEffect(() => {
        setLoader(true)
        setTimeout(() => {
            setLoader(false)
        }, 1000)
    }, [])

    return (
        <div >
            {
                loader ?
                    <div className="flex justify-center items-center h-screen">
                        <ClipLoader color="#0000ff" size="50" loader={loader} />
                    </div>
                    :
                    <div>
                        <Navbar></Navbar>
                        <div className='bottom'>
                            <Outlet></Outlet>
                        </div>
                        <Footer></Footer>
                    </div>
            }
        </div>

    );
};

export default Main;