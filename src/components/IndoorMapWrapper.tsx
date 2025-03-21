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
  const [barcode, setBarcode] = useState('');

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Append the key to the barcode string
      setBarcode((prev) => {
        console.log('===========', prev);
        return prev + event.key
      });

      // If "Enter" is pressed, assume the barcode is complete
      if (event.key === 'Enter') {
        alert('Hello'); 
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
  
  const { navigation, setNavigation } = useContext(
    NavigationContext
  ) as NavigationContextType;
  
  const handleObjectClick = async(e: React.MouseEvent<SVGPathElement>) => {
      const targetId = (e.target as HTMLElement).id;
      const selectedObject = objects.find((obj) => obj.name === targetId);
   
     handleOpenModal()
     
      if (selectedObject?.id) {
        navigateToObject(selectedObject.name, navigation, setNavigation);
      } else {
        toast.error("Object not found");
      }

  }

  return (
    <div className="relative w-full h-full bg-white center"  >
     
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
           
      
           
            <h2 className="modal-title">Room Details</h2>
            <div className="modal-body">
              <p>Room Name: Room 1</p>
              <p>Room Type: Meeting Room</p>
              <p>Room Capacity: 10</p>
              <p>Room Location: Ground Floor</p>
              <p>Room Description: This is a meeting room</p>
            </div>
         
        </Modal>
          <MapBackground>
            {/*Objects are the clickable areas on the map e.g. Rooms, Desks, ...*/}
            <Objects
              handleObjectClick={handleObjectClick}
              className="hover:cursor-pointer hover:opacity-50"
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
