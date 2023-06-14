import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

export default function Labels() {
  const { labels, updateLabel } = useContext(GlobalContext);
  const indicator=[{label:"green",txt:"Talent Type?"},{label:"indigo",txt:"Talent Type?"},{label:"red",txt:"Talent Type?"}]
  return (
    <React.Fragment>
      <p className="text-gray-500 font-bold mt-10"></p>
      <div className="mt-20">
      {indicator.map((labl, idx) => (
        <label key={idx} className="flex items-center mt-3 block">
          <div className={`h-2 w-2 bg-${labl.label}-900 rounded-lg `}></div>
          <span className="ml-2 text-gray-700 capitalize">{labl.txt}</span>
        </label>
      ))}
      </div>
    </React.Fragment>
  );
}
