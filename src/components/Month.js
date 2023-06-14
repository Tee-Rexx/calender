import React from "react";
import Day from "./Day";
import Filter from "./filter";
import CalendarHeader from "./CalendarHeader"
export default function Month({ month }) {
  return (
    <>

      
      



      
<div class="grid flex-row w-full  h-4/5">
    <div className="w-full h-auto">
    <Filter/>
    </div>
    <div className="w-full h-auto">
    <CalendarHeader/>
    </div>
    <div className="flex-1 h-auto  grid grid-cols-7 grid-rows-5">
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
