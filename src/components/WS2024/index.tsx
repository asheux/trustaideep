// External imports
import React from "react";

import { Container, Box, Stack, Typography } from "@mui/material";

import { isMobile } from "src/helpers";
import { customStyles } from "src/styles";

const WS2024 = () => {
  return (
    <React.Fragment>
      <Box
        sx={{
          backgroundColor: "#e6ecda",
          pt: 2,
          mt: isMobile ? 10 : -2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 350,
        }}
      >
        <Stack>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              color: "#445029",
            }}
          >
            Trust AI Workshop
          </Typography>
          <Typography
            variant={isMobile ? "h4" : "h5"}
            sx={{ textAlign: "center" }}
          >
            @ IJCAI 2024
          </Typography>
        </Stack>
      </Box>
      <Container sx={{ mt: 3 }}>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography variant={isMobile ? "h4" : "h6"}>
            There was an affiliated workshop at IJCAI conference in 2024 which
            can be found at
          </Typography>
          <Typography
            variant={isMobile ? "h4" : "h6"}
            onClick={() =>
              window.open(
                "https://trustaiijcai.github.io/trustai-ijcai24/",
                "_blank",
              )
            }
            sx={customStyles.externalLinks}
          >
            TrustAI @ IJCAI 2024
          </Typography>
        </Stack>
      </Container>
    </React.Fragment>
  );
};

export default WS2024;
