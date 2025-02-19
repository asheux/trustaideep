import React, { useState, useEffect, useRef } from "react";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import {
  Box,
  Stack,
  Typography,
  Container,
  Grid,
  Divider,
} from "@mui/material";

import { workshops, isMobile } from "src/helpers";

const Schedule = () => {
  const mainContentRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState("2023");

  const wsyears = Object.keys(workshops).map((item) => item.slice(-4));

  useEffect(() => {
    if (mainContentRef.current) {
      mainContentRef.current.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    }
  }, []);

  const handleChangeActive = (e) => {
    const id = e.currentTarget.getAttribute("id");
    if (id) {
      setActive(id);
    }
  };

  return (
    <React.Fragment>
      <Box
        ref={mainContentRef}
        sx={{
          overflowY: "auto",
          mb: 6,
        }}
      >
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
              @ DeepIndaba
            </Typography>
          </Stack>
        </Box>
        <Container sx={{ mt: isMobile ? 4 : 2, mb: isMobile ? 8 : 2 }}>
          <Stack direction="row" alignItems="center" spacing={2} mt={2}>
            {wsyears.map((wssy) => (
              <Box
                key={wssy}
                onClick={handleChangeActive}
                id={wssy}
                sx={{
                  border: "2px solid #445029",
                  backgroundColor: active === wssy ? "#445029" : "white",
                  color: active === wssy ? "white" : "#445029",
                  p: 1,
                  width: isMobile ? 100 : 50,
                  zIndex: 1302,
                  textAlign: "center",
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "#445029",
                    color: "white",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: isMobile ? 24 : 16,
                  }}
                >
                  {wssy}
                </Typography>
              </Box>
            ))}
          </Stack>
          {workshops[`taid${active}`]?.schedule?.map((sch, index) => (
            <Box key={index} sx={{ mt: 2 }}>
              <Box sx={{ mb: 1 }}>
                <Divider />
              </Box>
              <Grid container alignItems="start" spacing={isMobile ? 10 : 2}>
                <Grid item xs={3}>
                  <Stack direction="row" alignItems="center">
                    <Typography
                      sx={{
                        fontSize: isMobile ? 27 : 15,
                      }}
                    >
                      {sch.starttime}
                    </Typography>
                    {sch.endtime && (
                      <>
                        <HorizontalRuleIcon />
                        <Typography
                          sx={{
                            fontSize: isMobile ? 27 : 15,
                          }}
                        >
                          {sch.endtime}
                        </Typography>
                      </>
                    )}
                  </Stack>
                </Grid>
                <Grid item xs={9}>
                  <Stack>
                    <Typography
                      sx={{
                        fontWeight: 500,
                        fontSize: isMobile ? 27 : 18
                      }}
                    >
                      {sch.title}
                    </Typography>
                    {sch.speakername && (
                      <Typography
                        sx={{
                          color: "#90a959",
                          fontSize: isMobile ? 27 : 13,
                        }}
                      >
                        {sch.speakername}
                      </Typography>
                    )}
                  </Stack>
                  {sch.abstract && (
                    <Box mt={2}>
                      <Typography
                        sx={{
                          fontStyle: "italic",
                          fontSize: isMobile ? 15 : 14,
                        }}
                      >
                        Abstract: {sch.abstract}
                      </Typography>
                    </Box>
                  )}
                </Grid>
              </Grid>
            </Box>
          ))}
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default Schedule;
