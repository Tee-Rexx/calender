import dayjs from "dayjs";
import React, { useContext, useState, useEffect } from "react";
import GlobalContext from "../context/GlobalContext";
import left from "../assets/Icon ionic-ios-arrow-back.svg";
import right from "../assets/Icon ionic-ios-arrow-back-1.svg";
import sun from "../assets/sun_icn.svg"
export default function CalendarHeader() {
  const { monthIndex, setMonthIndex, setYearIndex } =
    useContext(GlobalContext);
  const [years, setYears] = useState();

  const [selectedMonthYear, setSelectedMonthYear] = useState(
    dayjs().format("MMM YYYY")
  );
  const [selectedMonthYearMob, setSelectedMonthYearMob] = useState(
    dayjs().format("MMMM YY")
  );
  const [selectedMonthYearIndex, setSelectedMonthYearIndex] =
    useState(dayjs().format("M/YYYY"));

  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
    const monthYear = dayjs()
      .month(monthIndex - 1);
    setSelectedMonthYear(monthYear.format("MMM YYYY"));
    setSelectedMonthYearMob(monthYear.format("MMMM YY"))
  }
  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
    const monthYear = dayjs()
      .month(monthIndex + 1);
    setSelectedMonthYear(monthYear.format("MMM YYYY"));
    setSelectedMonthYearMob(monthYear.format("MMMM YY"))
  }

  const getYearsList = () => {
    const yearsList = [];
    const currentMonthYear = dayjs();
    const numMonths = 11;

    for (let i = 0; i < numMonths; i++) {
      const monthYearText = currentMonthYear
        .add(i, "month")
        .format("MMM YY");
        const monthYearTextFull = currentMonthYear
        .add(i, "month")
        .format("MMM YYYY");
      const monthNumeric = currentMonthYear
        .add(i, "month")
        .format("M");
      const yearNumeric = currentMonthYear
        .add(i, "month")
        .format("YYYY");
      yearsList.push({
        text: monthYearText,
        fullText: monthYearTextFull,
        monthIndex: monthNumeric,
        yearIndex: yearNumeric,
      });
    }

    setYears(yearsList);
  };

  const keyChange = (data) => {
    setMonthIndex(parseInt(data?.monthIndex) - 1);
    setSelectedMonthYear(data?.fullText);
    setYearIndex(parseInt(data?.yearIndex));
  };

  useEffect(() => {
    getYearsList();
  }, []);

  return (
    <>
      <header className="px-0 py-2 items-center hidden md:flex ">
        {/* <button >
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2 my-2">
          chevron_left
        </span>
      </button> */}
        <img
          src={left}
          onClick={handlePrevMonth}
          width={7}
          height={7}
          className="mx-2 my-2 cursor-pointer"
        />

        <div className="w-full flex flex-row items-center text-center align-middle justify-between">
          {years?.map((val) => (
            <h3
              style={{ color: "#44554a" }}
              onClick={() => keyChange(val)}
              className={`ml-2 font-semibold mr-2 text-lg cursor-pointer ${val.fullText===selectedMonthYear?"underline underline-offset-8":""}`}
            >
              {val?.text}
            </h3>
          ))}
        </div>

        <img
          src={right}
          onClick={handleNextMonth}
          width={7}
          height={7}
          className="mx-2 my-2 cursor-pointer"
        />
      </header>
      <div
        style={{ border: "1px solid #dac58c" }}
        className="w-full items-center text-center justify-center  h-10 mt-2 hidden md:flex"
      >
        <p
          className="text-lg font-semibold"
          style={{ color: "#44554a" }}
        >
          {" "}
          {selectedMonthYear ? selectedMonthYear : ""}{" "}
        </p>
      </div>

      <header className="px-3 py-2 w-full items-center flex justify-between md:hidden ">
        <div className="px-0 py-2 items-center flex">
        <p
          className="text-xl whitespace-nowrap font-bold capitalize"
          style={{ color: "#44554a" }}
        >
          {" "}
          {selectedMonthYearMob ? selectedMonthYearMob : ""}{" "}
        </p>

        <img
          src={left}
          onClick={handlePrevMonth}
          width={7}
          height={7}
          className="mx-2 my-2 cursor-pointer"
        />

        <img
          src={right}
          onClick={handleNextMonth}
          width={7}
          height={7}
          className="mx-2 my-2 cursor-pointer"
        />
        </div>
        <div className="flex">
          <img
          src={sun}
          width={12}
          height={12}
          />
          <p className="p-2 whitespace-nowrap text-sm underline decoration-peach text-peach">
            Vacation time
          </p>
        </div>
      </header>
    </>
  );
}
