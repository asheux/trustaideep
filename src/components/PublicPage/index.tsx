// External imports
import React from "react";

import Workshop from "src/components/Workshop";
import Footer from "src/components/Footer";

import { activePage } from "src/helpers";

const PublicPage = (props) => {
  return (
    <React.Fragment>
      <Workshop {...props} activeWs={activePage} />
      <Footer />
    </React.Fragment>
  );
};

export default PublicPage;
