import { IconProps } from "../../types";
import Svg, { Path } from "react-native-svg";

export const NFCIcon = (props: IconProps) => {
  const width = 22;
  const height = 22;
  const aspectRatio = width / height;

  return (
    <Svg
      width={props.height * aspectRatio}
      height={props.height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      preserveAspectRatio="xMidYMid meet"
    >
      <Path
        d="M8 1V3M14 1V3M8 19V21M14 19V21M19 8H21M19 13H21M1 8H3M1 13H3M7.8 19H14.2C15.8802 19 16.7202 19 17.362 18.673C17.9265 18.3854 18.3854 17.9265 18.673 17.362C19 16.7202 19 15.8802 19 14.2V7.8C19 6.11984 19 5.27976 18.673 4.63803C18.3854 4.07354 17.9265 3.6146 17.362 3.32698C16.7202 3 15.8802 3 14.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V14.2C3 15.8802 3 16.7202 3.32698 17.362C3.6146 17.9265 4.07354 18.3854 4.63803 18.673C5.27976 19 6.11984 19 7.8 19ZM9.6 14H12.4C12.9601 14 13.2401 14 13.454 13.891C13.6422 13.7951 13.7951 13.6422 13.891 13.454C14 13.2401 14 12.9601 14 12.4V9.6C14 9.03995 14 8.75992 13.891 8.54601C13.7951 8.35785 13.6422 8.20487 13.454 8.10899C13.2401 8 12.9601 8 12.4 8H9.6C9.03995 8 8.75992 8 8.54601 8.10899C8.35785 8.20487 8.20487 8.35785 8.10899 8.54601C8 8.75992 8 9.03995 8 9.6V12.4C8 12.9601 8 13.2401 8.10899 13.454C8.20487 13.6422 8.35785 13.7951 8.54601 13.891C8.75992 14 9.03995 14 9.6 14Z"
        stroke={props.color}
        strokeWidth={props.strokeWidth || 1}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};