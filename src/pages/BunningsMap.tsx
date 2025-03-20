import IndoorMapWrapper from "@/components/IndoorMapWrapper";
import MobileRouteDetails from "@/components/MobileRouteDetails";
import Toolbar from "@/components/Toolbar";
import useMapData from "@/hooks/useMapData";
import { createContext, useEffect, useMemo, useState } from "react";
import { isDesktop, isMobile } from "react-device-detect";
import { useSearchParams } from "react-router-dom";
import {
  MapDataContextType,
  Navigation,
  NavigationContextType,
} from "../utils/types";
import Sidebar from "@/components/Sidebar";

export const MapDataContext = createContext<MapDataContextType | null>(null);
export const NavigationContext = createContext<NavigationContextType | null>(
  null
);

const BunningsMap = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const defaultPosition = "v1";
  const startPosition = searchParams.get("position") ?? defaultPosition;
  const [navigation, setNavigation] = useState<Navigation>({
    start: startPosition,
    end: "",
  });

  const [selectedLevel, setSelectedLevel] = useState<number>(3);

  const navigationValue: NavigationContextType = useMemo(() => {
    return {
      navigation,
      setNavigation,
      selectedLevel,
      setSelectedLevel
    };
  }, [navigation, setNavigation, selectedLevel, setSelectedLevel]);

  useEffect(() => {
    setSearchParams({ position: navigation.start });
  }, [navigation.start]);

  const mapData = useMapData();

  return (
    <MapDataContext.Provider value={mapData}>
      <NavigationContext.Provider value={navigationValue}>
        <div className="flex bg-gray-100 text-gray-800 relative overflow-hidden w-full h-screen">
          {isDesktop && <Sidebar />}
          <main
            className={`flex w-full ${isDesktop && "-ml-96"} justify-center flex-grow flex-col md:p-10 p-2 transition-all duration-150 ease-in lg:ml-0`}
          >
            <Toolbar />
            <div className="center w-full h-full">
              <IndoorMapWrapper />
            </div>
          </main>
          {navigation.end && isMobile && <MobileRouteDetails />}
        </div>
      </NavigationContext.Provider>
    </MapDataContext.Provider>
  );
};

export default BunningsMap;
