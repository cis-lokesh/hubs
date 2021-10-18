import React from "react";
import PropTypes from "prop-types";
import { LoadingScreenLayout } from "../layout/LoadingScreenLayout";
import { Spinner } from "../misc/Spinner";
import { useRandomMessageTransition } from "./useRandomMessageTransition";
import "./LoadingScreen.css";
export function LoadingScreen({ logoSrc, message, infoMessages }) {
  const infoMessage = useRandomMessageTransition(infoMessages);

  return (
    <LoadingScreenLayout
      logoSrc={logoSrc}
      center={
        <>
          <div>{message == "Loading" && <div className="loadinggradient" />}</div>
        </>
      }
      // bottom={
      //   <>
      //     <h3>{infoMessage.heading}</h3>
      //     <p>{infoMessage.message}</p>
      //   </>
      // }
    />
  );
}

LoadingScreen.propTypes = {
  logoSrc: PropTypes.string,
  message: PropTypes.node,
  infoMessages: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.node.isRequired,
      message: PropTypes.node.isRequired
    })
  )
};

LoadingScreen.defaultProps = {
  infoMessages: []
};
