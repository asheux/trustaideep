import React from "react";
import { Box, Fade, Toolbar } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { styled } from "@mui/material/styles";

import { isMobile } from "src/helpers";

interface Props {
  children: React.ReactElement;
}

export const StyledToolbar = styled(Toolbar)(() => ({
  position: "sticky",
  ["@media (min-width:0px)"]: {
    minHeight: "50px",
  },
}));

export const ScrollTop = (props: Props) => {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{
          position: "fixed",
          bottom: isMobile ? 50 : 40,
          zIndex: 1302,
          right: 30,
        }}
      >
        {children}
      </Box>
    </Fade>
  );
};
