import React from "react";
import Day from "./Day";
import Filter from "./filter";
export default function Month({ month }) {
  return (
    <>

      
      
        <div className="flex-1  grid grid-cols-7 grid-rows-5">
          {month.map((row, i) => (
            <React.Fragment key={i}>
              {row.map((day, idx) => (
                <Day day={day} key={idx} rowIdx={i} />
              ))}
            </React.Fragment>
          ))}
        </div>

      {/* <div class="grid grid-rows-2 w-full grid-flow-col">
        <div className="bg-gray-300">01</div>
        <div className="bg-gray-300  grid-cols-7 grid-rows-5">09</div>
      </div> */}
    </>
  );
}
