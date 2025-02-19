import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

import { isMobile } from "src/helpers";

const Footer = (props) => {
  const { data } = props;
  const theme = useTheme();

  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        textAlign: "center",
        paddingTop: isMobile ? 2 : 1,
        paddingBottom: isMobile ? 2 : 1,
        backgroundColor: "#445029",
        color: "#fff",
        borderRadius: 0,
      }}
      elevation={3}
    >
      <Typography
        sx={{
          fontSize: isMobile ? 20 : 11,
        }}
      >
        {data}
      </Typography>
    </Paper>
  );
};

export default Footer;
