import {
  WiDaySunny,
  WiNightClear,
  WiDayCloudy,
  WiNightCloudy,
  WiCloud,
  WiCloudy,
  WiShowers,
  WiRainMix,
  WiThunderstorm,
  WiSnow,
  WiFog,
} from "react-icons/wi";

export function IconWeather({ icon }) {
  let iconCode = "";
  
  switch (icon) {
    case "01d":
      iconCode = <WiDaySunny size={90} />;
      break;
    case "01n":
      iconCode = <WiNightClear size={90} />;
      break;
    case "02d":
      iconCode = <WiDayCloudy size={90} />;
      break;
    case "02n":
      iconCode = <WiNightCloudy size={90} />;
      break;
    case "03d":
    case "03n":
      iconCode = <WiCloud size={90} />;
      break;
    case "04d":
    case "04n":
      iconCode = <WiCloudy size={90} />;
      break;
    case "09d":
    case "09n":
      iconCode = <WiShowers size={90} />;
      break;
    case "10d":
    case "10n":
      iconCode = <WiRainMix size={90} />;
      break;
    case "11d":
    case "11n":
      iconCode = <WiThunderstorm size={90} />;
      break;
    case "13d":
    case "13n":
      iconCode = <WiSnow size={90} />;
      break;
    default:
      iconCode = <WiFog size={90} />;
      break;
  }

  return <>{iconCode}</>;
}
