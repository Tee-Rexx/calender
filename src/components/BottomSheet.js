import React, { useState } from "react";
import Draggable from "react-draggable";
import { useSpring, animated, config } from "react-spring";

export default function BottomSheet() {
    const [isOpen, setIsOpen] = useState(true);
    const [dragY, setDragY] = useState(0);
    const [expanded, setExpanded] = useState(false);
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
  
    const handleOpen = () => {
        if(isOpen){
            setExpanded(true);
            setIsOpen(!isOpen) 
        }else{
            setExpanded(false);
            setIsOpen(!isOpen)
        }
        // 
    };
  
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
    <> <div>
    {!isOpen && <button >Open Bottom Sheet</button>}
    {(
      
        <div
          className="bottom-sheet"
          style={{
            backgroundColor: '#FAF3ED',
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
            borderTopLeftRadius: '20px',
            borderTopRightRadius: '20px',
            padding: "16px",
            position: "absolute",
            left: "0",
            right: "0",
            bottom: '0',
            zIndex: "999",
          }}
        >
          <div className="handle" onClick={handleOpen} style={{ cursor: "grab" }}>
            Drag up to expand, Drag down to close
          </div>
          <animated.div style={sheetHeight}>
            <div style={{ marginTop: "16px" }}>
              Write bottom sheet content here
            </div>
          </animated.div>
          
        </div>
 
    )}
  </div></>
  )
}
