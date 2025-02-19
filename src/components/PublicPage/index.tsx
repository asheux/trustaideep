// External imports
import React from "react";

import Workshop from "src/components/Workshop";

const PublicPage = (props) => {
  return (
    <React.Fragment>
      <Workshop {...props} activeWs="taid2023" />
    </React.Fragment>
  );
};

export default PublicPage;
