import floorPlanLevel3 from "@/assets/img/level3Map.svg";
import floorPlanLevel4 from "@/assets/img/level4Map.svg";
import { NavigationContext } from "@/pages/BunningsMap";
import { NavigationContextType } from "@/utils/types";
import { ReactNode, useContext } from "react";
interface MapBackgroundProps {
  children: ReactNode;
}

const MapBackground = ({ children }: MapBackgroundProps) => {

  const { selectedLevel } = useContext(
    NavigationContext
  ) as NavigationContextType;
  

  const floorPlan = selectedLevel === 3 ? floorPlanLevel3: floorPlanLevel4;

  return (
    <svg
      // must match SVG viewBox
      viewBox="0 0 3717 2059"
      className="lg:h-[85vh] lg:w-[75vw] h-[85dvh]"
    >
      <image id="background" width="100%" height="100%" href={floorPlan} />
      {children}
    </svg>
  );
}

export default MapBackground;

