import React from "react";
import SyncLoader from "react-spinners/SyncLoader";
import { css } from "@emotion/react";
const LoadingSpinner = () => {
   const override = css`
    display: block;
    margin: 11;
    border-color: yellow;
  `;
  return (
    <div className="box">
      <div className="sweet-loading">
        <SyncLoader size={50} css={override} color={"#123abc"} loading={true} speedMultiplier={1} />
      </div>
    </div>
  );
};

export default LoadingSpinner;