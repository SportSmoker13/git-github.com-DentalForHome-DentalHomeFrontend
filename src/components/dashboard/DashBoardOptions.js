import React from 'react';
import { MdDesignServices } from 'react-icons/md'

function DashBoardOptions() {
  return (
      <div className='options-main'>
          <div className='option service'>
              <MdDesignServices  style={{marginRight:`15px`}}/>
            Services
          </div>
          <div className='option booking'>
            Booking
          </div>
          <div className='option prescription'>
            Prescription
          </div>
          <div className='option download'>
            My Downloads
          </div>
      </div>
  );
}

export default DashBoardOptions;
