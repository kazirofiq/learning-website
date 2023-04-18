import React from 'react';
import externalLink from '../../../assest/icon/bottomNavIcon/External Link.png';
import account from '../../../assest/icon/bottomNavIcon/account.png';
import planer from '../../../assest/icon/bottomNavIcon/planner.png';
import history from '../../../assest/icon/bottomNavIcon/order history.png';
import './ResponsiveBottomNav.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const ResponsiveBottomNav = () => {

  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (item) => {
    setActiveItem(item === activeItem ? null : item);
  };
  return (
    <div className='w-full h-[119px] fixed bottom-0 left-0 right-0'>
      <div className='h-[100px] bg-[#3D419F] fixed bottom-0 left-0 right-0 rounded-tl-3xl rounded-tr-3xl flex items-center justify-center mb-[-1px] mr-[-1px]'>
        <ul className='flex items-center justify-center gap-x-[48px]'>
          <Link to='/profile/importent'>
            <li className={activeItem === "external" && "mb-[78px] w-12 h-12 bg-[#FFFFFF] p-2 rounded-lg transition duration-150 ease-out"} onClick={() => handleItemClick('external')}>
              <img src={externalLink} alt="" />
            </li>
          </Link>
          <Link to='/profile'>
            <li className={activeItem === "account" && "mb-[78px] w-12 h-12 bg-[#FFFFFF] p-2 rounded-lg transition duration-150 ease-out"} onClick={() => handleItemClick('account')}>
              <img src={account} alt="" />
            </li>
          </Link>
          <li className={activeItem === "planer" && "mb-[78px] w-12 h-12 bg-[#FFFFFF] p-2 rounded-lg transition duration-150 ease-out"} onClick={() => handleItemClick('planer')}>
            <img src={planer} alt="" />
          </li>
          <Link to='/profile/orderhistory'>
            <li className={activeItem === "history" && "mb-[78px] w-12 h-12 bg-[#FFFFFF] p-2 rounded-lg transition duration-150 ease-out"} onClick={() => handleItemClick('history')}>
              <img src={history} alt="" />
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default ResponsiveBottomNav;