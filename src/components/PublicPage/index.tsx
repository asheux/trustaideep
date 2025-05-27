// External imports
import React from "react";

import Workshop from "src/components/Workshop";

import { activePage } from "src/helpers";

const PublicPage = (props) => {
  return (
    <React.Fragment>
      <Workshop {...props} activeWs={activePage} />
    </React.Fragment>
  );
};

export default PublicPage;
