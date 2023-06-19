import React from "react";
import Day from "./Day";
import Filter from "./filter";
import CalendarHeader from "./CalendarHeader"
export default function Month({ month }) {
  return (
    <>

      
      



      
<div className="flex flex-col w-full">
    <div className="w-full h-auto">
    <Filter/>
    </div>
    <div className="w-full h-auto">
    <CalendarHeader/>
    </div>
    <div className="flex-1 h-full  grid grid-cols-7 gap-2 sm:gap-0  grid-rows-5">
          {month.map((row, i) => (
            <React.Fragment key={i}>
              {row.map((day, idx) => (
                <Day day={day} key={idx} rowIdx={i} />
              ))}
            </React.Fragment>
          ))}
        </div>

</div>

    </>
  );
}
