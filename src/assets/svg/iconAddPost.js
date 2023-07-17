import * as React from "react";
import Svg, { Path } from "react-native-svg";
const IconAddPost = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={13}
    height={13}
    fill="none"
    {...props}
  >
    <Path
      fill={props.focused ? props.color : "#fff"}
      fillRule="evenodd"
      d="M7.5.5h-1v6h-6v1h6v6h1v-6h6v-1h-6v-6Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconAddPost;
