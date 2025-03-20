

export interface ObjectItem {
  id: string;
  name: string;
  desc: string;
  level: number;
}
export interface Category {
  id: string;
  name: string;
}

export interface Beacon {
  _id: string;
  beacon_id: string;
  rssi: number;
}

export interface Navigation {
  start: string;
  end?: string;
}

export interface NavigationContextType {
  navigation: Navigation;
  setNavigation: React.Dispatch<React.SetStateAction<Navigation>>;
  selectedLevel: number;
  setSelectedLevel: React.Dispatch<React.SetStateAction<number>>;
}

export interface MapDataContextType {
  objects: ObjectItem[];
}

export interface BleBeacon {
  name: string;
  id: string;
  rssi: number;
  txPower: number;
  uuids: string[];
}
