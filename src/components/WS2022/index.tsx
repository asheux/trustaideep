// External imports
import React, { useState,  useEffect } from "react";

import Workshop from "src/components/Workshop";


const WS2022 = (props) => {

  return (
    <React.Fragment>
      <Workshop {...props} activeWs="taid2022" />
    </React.Fragment>
  );
};

export default WS2022;
