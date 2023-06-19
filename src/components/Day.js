import dayjs from "dayjs";
import React, { useContext, useState, useEffect } from "react";
import GlobalContext from "../context/GlobalContext";
import plus from "../assets/Icon ionic-ios-add-circle-outline.svg";
export default function Day({ day, rowIdx }) {
  const [dayEvents, setDayEvents] = useState([]);
  const {
    setDaySelected,
    setShowEventModal,
    filteredEvents,
    setSelectedEvent,
  } = useContext(GlobalContext);
  console.log({ filteredEvents });
  useEffect(() => {
    const events = filteredEvents.filter(
      (evt) =>
        dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY")
    );
    setDayEvents(events);
  }, [filteredEvents, day]);

  function getCurrentDayClass() {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-peach text-white justify-center float-right items-end p-2 flex-end flex rounded-full w-9"
      : "";
  }
  function getAvatar(name) {
    const avatar = [];
    const s = name.split(" ");
    if (s.length > 1) {
      return `${s[0][0]?.toUpperCase()}${s[1][0]?.toUpperCase()} `;
    } else {
      return name[0]?.toUpperCase();
    }
  }
  return (
    <div className="border-none mt-2  border-gray-200 flex flex-col sm:border">
      <header
        className="flex flex-col items-center"
        style={{ backgroundColor: "#faf4ee" }}
      >
        {rowIdx === 0 && (
          <>
            <p
              style={{ color: "#44554a" }}
              className=" font-semibold text-sm mt-1 hidden sm:block"
            >
              {day.format("dddd")?.toUpperCase()}
            </p>
            <p
              style={{ color: "#44554a" }}
              className=" font-semibold text-sm mt-1  sm:hidden"
            >
              {day.format("ddd")?.toUpperCase()}
            </p>
          </>
        )}
      </header>

      <div className="hidden sm:block">
        <p
          style={{ color: "#44554a" }}
          className={`text-sm font-semibold p-1  items-end text-center   ${getCurrentDayClass()}`}
        >
          {day.format("D")}
        </p>
      </div>
      <div className="block sm:hidden">
        <p
          style={{ color: "#44554a" }}
          className={`text-base mt-2 font-semibold items-end text-center border-2 border-peach  p-3  rounded-full w-5"`}
        >
          {day.format("D")}
        </p>
      </div>

        <div
        style={{
          width: "100%",
          position: "relative",
          height: "100%",
        }}
        className="flex-row hidden sm:flex"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "70%",
            flexWrap: "wrap",
          }}
          className="relative pl-2 pb-2 "
        >
          {dayEvents.map((evt, idx) => (
            <div
              key={idx}
              style={{ zIndex: -2 }}
              onClick={() => setSelectedEvent(evt)}
              className={`bg-${evt.label}-200   text-gray-600 initial-avatar truncate`}
            >
              <span>{getAvatar(evt.title)}</span>
            </div>
          ))}
        </div>

        <div className=" items-end  flex-row-reverse flex  ml-7 mb-2">
          <img
            style={{ cursor: "pointer" }}
            width={40}
            height={50}
            src={plus}
            onClick={() => {
              setDaySelected(day);
              setShowEventModal(true);
            }}
          />
        </div>
      </div>
    </div>
  );
}
