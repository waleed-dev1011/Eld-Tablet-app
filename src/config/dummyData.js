// dummyData.js
import MallSvg from "../assets/icons/user/mallSvg";
import CafeSvg from "../assets/icons/user/cafeSvg";
import PumpSvg from "../assets/icons/user/pumpSvg";
import WareSvg from "../assets/icons/user/wareHouse";

export const routeCoordinates = [
  { latitude: 37.78825, longitude: -122.4324 },
  { latitude: 37.75825, longitude: -122.4624 },
];

export const stops = [
  {
    name: "Albert Mall",
    address: "Street 2, Block 11",
    time: "11:00 am - 12:05 pm",
    icon: <MallSvg />,
  },
  {
    name: "Cafe XYZ",
    address: "Smith John Society",
    time: "12:10 pm - 01:00 pm",
    icon: <CafeSvg />,
  },
  {
    name: "Shell Petrol Pump",
    address: "Main Highway",
    time: "02:00 am - 03:05 pm",
    icon: <PumpSvg />,
  },
  {
    name: "XYZ Warehouse",
    address: "Warehouse B",
    time: "03:10 pm - 03:25 pm",
    icon: <WareSvg />,
  },
];
