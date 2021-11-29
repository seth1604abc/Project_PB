import React from 'react';

function Membericon({image}) {
  return (
    <>
      <div className="Courses__singlecourse__card__coach">
        <img src={`/images/${image}.jpg`} alt="coach" />
      </div>
    </>
  );
}
export default Membericon;
