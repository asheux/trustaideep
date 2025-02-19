// External imports
import React, { useState,  useEffect } from "react";

import Workshop from "src/components/Workshop";


const WS2023 = (props) => {

  return (
    <React.Fragment>
      <Workshop {...props} activeWs="taid2023" />
    </React.Fragment>
  );
};

export default WS2023;
