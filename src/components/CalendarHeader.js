import dayjs from "dayjs";
import React, { useContext, useState, useEffect } from "react";
import logo from "../assets/logo.png";
import GlobalContext from "../context/GlobalContext";
export default function CalendarHeader() {
  const { monthIndex, setMonthIndex} = useContext(GlobalContext);
  const [years, setYears] = useState()

  const [selectedMonthYear, setSelectedMonthYear] = useState(dayjs().format('MMM YYYY'))
  const [selectedMonthYearIndex, setSelectedMonthYearIndex] = useState(dayjs().format('M/YYYY'))

  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
    const monthYear = dayjs().month(monthIndex - 1).format('MMM YY')
    setSelectedMonthYear(monthYear)
  }
  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
    const monthYear = dayjs().month(monthIndex + 1).format('MMM YY')
    setSelectedMonthYear(monthYear)
  }

  const getYearsList = () => {

    const yearsList = []
    const currentMonthYear = dayjs();
    const numMonths = 11;

    for (let i = 0; i < numMonths; i++) {
      const monthYearText = currentMonthYear.add(i, 'month').format('MMM YY');
      const monthNumeric = currentMonthYear.add(i, 'month').format('M');
      const yearNumeric = currentMonthYear.add(i, 'month').format('YYYY');
      yearsList.push({ text: monthYearText, monthIndex: monthNumeric, yearIndex: yearNumeric});
    }

    setYears(yearsList)
  }

  const keyChange = (data) => {
    setMonthIndex(parseInt(data?.monthIndex) -1);
    setSelectedMonthYear(data?.text)
  }

  useEffect(() => {
    getYearsList()
  }, [])

  return (
    <>
    <header className="px-4 py-2 flex items-center">
      
      <button onClick={handlePrevMonth}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2 my-2">
          chevron_left
        </span>
      </button>

      <div  className="w-full flex flex-row items-center text-center align-middle justify-between">

      {years?.map(val => (

        <h3 style={{color:'#44554a'}} onClick={() => keyChange(val)} className="ml-2 font-semibold mr-2 text-lg cursor-pointer">
          {val?.text}
        </h3>

      ))
      }
      </div>

      <button onClick={handleNextMonth}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2 my-2">
          chevron_right
        </span>
      </button>


    </header>
      <div style={{border:'1px solid #dac58c'}} className="w-full items-center text-center justify-center flex h-10 mt-2">
        <p className="text-lg font-semibold" style={{color:'#44554a'}}> {selectedMonthYear ? selectedMonthYear : ""} </p>
      </div>
      </>
  );
}
