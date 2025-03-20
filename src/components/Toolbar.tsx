import { NavigationContext } from "@/pages/BunningsMap";
import { NavigationContextType } from "@/utils/types";
import { useContext } from "react";
import { isDesktop } from "react-device-detect";
import DesktopRouteDetails from "./DesktopRouteDetails";
import SearchBar from "./SearchBar";

function Toolbar() {
  const { navigation } = useContext(NavigationContext) as NavigationContextType;
  return (
    <div className="flex space-x-1 mb-4 h-12 relative">
      <SearchBar />
      {navigation.end && isDesktop && <DesktopRouteDetails />}
    </div>
  );
}

export default Toolbar;
