import * as React from "react";
import { Container, Typography } from "@mui/material";

// App related imports
import { isMobile } from "src/helpers";

const FallBackError = (props) => {
  const { status, message } = props;

  return (
    <Container sx={{ textAlign: "center", mt: "20%" }}>
      <Typography variant="h2">{status}</Typography>
      <Typography sx={{ fontSize: isMobile ? 24 : 20 }} color="text.secondary">
        Sorry, {message}
      </Typography>
    </Container>
  );
};

export default FallBackError;
