import React from 'react';
import Modules from '../Modules/Modules';
import Buttons from '../../CreateCourse/Buttons/Buttons';


const GreetingsInstroduction = () => {

  return (
    <div className='poppins'>
      <Modules>
        <Buttons setDraft={() => { }} text={'Publish'} draft={false} />
      </Modules>
    </div>

  );
};

export default GreetingsInstroduction;