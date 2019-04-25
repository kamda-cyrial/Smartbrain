import React from 'react';
// import './rank.css';

const rank = ({rank,entries,name}) => {
  return(
       <div>
         <div className='white f3'>
         {name}{', with '}{entries} {'entries, your current rank is :_ '}
         </div>
         <div className='white f1'>
         {rank}
         </div>
       </div>
  );
}

export default rank;