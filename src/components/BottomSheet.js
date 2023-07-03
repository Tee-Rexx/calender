import React, { useState } from "react";
import Draggable from "react-draggable";
import { useSpring, animated, config } from "react-spring";
import RightChevron from '../assets/Icon ionic-ios-arrow-back-1.svg'
import dayjs from "dayjs";
import moment from "moment";
export default function BottomSheet({expanded,setExpanded,handleOpen}) {
    const [isOpen, setIsOpen] = useState(true);
    const [dragY, setDragY] = useState(0);
    
const Event = [
    { id: 1, name: "Lululemon", description: "Create 2x TikToks for them" },
    { id: 2, name: "Dior", description: "Create 2x TikToks for them" },
    { id: 3, name: "SpaceNK", description: "Review eyecream & create instagram stories" },
    { id: 4, name: "SpaceNK", description: "Review eyecream & create instagram stories" },
]
    // const [expanded, setExpanded] = useState(false);
    const deviceHeight = window.innerHeight;
  
    const sheetHeight = useSpring({
      height: expanded ? `${deviceHeight * 0.7}px` : `${deviceHeight * 0.001}px`,
      from: {
        height: !expanded
          ? `${deviceHeight * 0.7}px`
          : `${deviceHeight * 0.001}px`,
      },
      config: config.slow,
    });
  
   
  
    const handleClose = () => {
      setIsOpen(false);
    };
  
    const handleDrag = (_, { deltaY }) => {
      setDragY(deltaY);
    };
  
    const handleStopDrag = () => {
      if (dragY <= 0) {
        setExpanded(true);
      } else {
        setExpanded(false);
      }
      setDragY(0);
    };
    return (
    <> 
    <div className="md:hidden">
            {(
                <div className="bottom-sheet" >
                    <div className="flex justify-center items-center">
                        <div className="handle" onClick={handleOpen} style={{ cursor: "grab" }}/>
                    </div>
                    <animated.div style={sheetHeight}>
                        <div className="sheet-container ">
                            <div className="flex flex-row justify-between items-center mb-3">
                                <p className="text-xl text-gray-600">{dayjs().format("dddd") + ", " + dayjs().format("MMM") + " " + moment(dayjs().format("D"),"D").format("Do")+"."}  </p>
                                <p className="text-xl font-semibold text-gray-400 font-lato"> TODAY </p>
                            </div>
                                {expanded ?
                                    <>
                                        <hr className="pb-5" />
                                        <div className="event-container ">
                                        {Event.map((event, key) => (
                                            <div key={key} className="flex flex-col pt-3 pb-4 justify-between">
                                            <div className="flex flex-row justify-between items-center px-7 h-32 event bg-white ">
                                                <div className="flex flex-col">
                                                    <p className="text-2xl text-black font-bold font-montserrat">{event.name}</p>
                                                    <p className="text-xl w-60 pt-1">{event.description}</p>
                                                </div>
                                                <img
                                                    alt="left-arrow"
                                                    src={RightChevron}
                                                    width={15}
                                                    height={15}
                                                    className="mx-2 my-2 cursor-pointer"
                                                />
                                            </div>
                                            </div>
                                        ))}
                            </div>
                                    </>
                                    :
                                    <> </>
                                }
                        </div>
                    </animated.div>
                </div>
            )}
        </div></>
  )
}
