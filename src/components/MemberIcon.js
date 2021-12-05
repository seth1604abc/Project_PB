import React from 'react';

function Membericon({image}) {
  return (
    <>
      <div className="Courses__singlecourse__card__coach">
        <img src={`/image/${image}`} alt="coach" style={{backgroundColor:"#537895"}} />
      </div>
    </>
  );
}
export default Membericon;
