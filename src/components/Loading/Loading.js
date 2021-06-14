import React from "react";
import { Image } from "./Loading.styles";
import spinner from "../../images/spinner.gif";

const Loading = () => {
  return <Image src={spinner} alt="spinner" />;
};

export { Loading };
