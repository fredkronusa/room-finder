import React, { useContext, useState, useEffect } from "react";
import { isMobile } from "react-device-detect";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import { MapDataContext, NavigationContext } from "../pages/BunningsMap";
import "../styles/map.css";
import {
  MapDataContextType,
  NavigationContextType,
} from "../utils/types";
import { MapBackground, Paths, Positions, Objects } from "./IndoorMap";
import Modal from "../components/Modal/Modal";

import Controls from "./MapControls";
import { navigateToObject } from "@/utils/navigationHelper";
import { toast } from "react-toastify";

function IndoorMapWrapper() {
  const positionRadius = isMobile ? 10 : 8;
  const { objects } = useContext(MapDataContext) as MapDataContextType;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [barcode, setBarcode] = useState('');
  const [roomName, setRoomName] = useState('');
  const [roomDescription, setRoomDescription] = useState('');

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Append the key to the barcode string
      setBarcode((prev) => {
        console.log('===========', prev);
        return prev + event.key
      });

      // If "Enter" is pressed, assume the barcode is complete
      if (event.key === 'Enter') {
        navigateToObject("Wagga Wagga", navigation, setNavigation);
        setIsPopoverOpen(true);
        setBarcode('');  
      }
    };

    // Add event listener for keydown
    window.addEventListener('keydown', handleKeyDown);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleClosePopover = () => {
    setIsPopoverOpen(false);
  };

  const { navigation, setNavigation } = useContext(
    NavigationContext
  ) as NavigationContextType;
  
  const handleObjectClick = async(e: React.MouseEvent<SVGPathElement>) => {
      const targetId = (e.target as HTMLElement).id;
      const selectedObject = objects.find((obj) => obj.name === targetId);
      setRoomName(selectedObject?.name ?? '');
      setRoomDescription(selectedObject?.desc ?? '');
   
      handleOpenModal()
     
      if (selectedObject?.id) {
          const parentElement = document.getElementById("Objects");
          if (parentElement) {
              const elements = parentElement.querySelectorAll(".object");
              elements.forEach((el) => el.classList.remove("selected"));
              document.getElementById(targetId)?.classList.add("selected");
          }

        navigateToObject(selectedObject.name, navigation, setNavigation);
      } else {
        toast.error("Object not found");
      }

  }

  return (
    <div className="relative w-full h-full bg-white center"  >
        <Modal popoverModal style={{ }} isOpen={isPopoverOpen} onClose={handleClosePopover}>
      <h4>Hello, Fred</h4>
      <h6>You next meeting room is in Wagga Wagga</h6>
      

      <div style={{width: 200, height: 100, backgroundColor: 'white'}}></div>
       </Modal>
      <TransformWrapper
        centerOnInit
        minScale={isMobile ? 0.4 : 1}
        doubleClick={{ mode: "reset" }}
        initialScale={isMobile ? 0.4 : 1}
        smooth={true}
        wheel={{ smoothStep: 0.01 }}
         
      >
        <TransformComponent wrapperClass="bg-white" >
        <Modal style={{ left: '50%', position: 'absolute'}} isOpen={isModalOpen} onClose={handleCloseModal}> 
          <h2 className="modal-title">{roomName}</h2>
          <div className="modal-body">
            <p>Level: 3</p>
            <p>{roomDescription}</p>
            <p>Availability: <span className="status">RESERVED</span></p>
            <p className="hidden">{barcode}</p>
          </div>
        </Modal>
          <MapBackground>
            {/*Objects are the clickable areas on the map e.g. Rooms, Desks, ...*/}
            <Objects
              handleObjectClick={handleObjectClick}
              className="hover:cursor-pointer hover:opacity-50 occupied"
            />

            {/*Edges are the lines on the map aka the paths*/}
            <Paths />

            {/*Vertexes are the circles on the map aka the positions*/}
            <Positions
              positionRadius={positionRadius}
              className='opacity-0'
              navigation={navigation}
            />
          </MapBackground>
        </TransformComponent>
        <Controls />
      </TransformWrapper>
    </div>
  );
}
export default IndoorMapWrapper;
