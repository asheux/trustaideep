import React, { useState, useEffect, useRef } from "react";
import ViewAllIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { Box, Stack, Typography, Container, Grid } from "@mui/material";

import { customStyles } from "src/styles";
import { workshops, isMobile, activeOrganizers } from "src/helpers";

const Organizers = () => {
  const [active, setActive] = useState(activeOrganizers);
  const [organizers, setOrganizers] = useState([]);
  const mainContentRef = useRef<HTMLDivElement>(null);

  const wsyears = Object.keys(workshops).map((item) => item.slice(-4));

  useEffect(() => {
    if (mainContentRef.current) {
      mainContentRef.current.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    }
    setOrganizers(workshops[`taid${active}`]?.organizers);
  }, [active]);

  const handleChangeActive = (e) => {
    const id = e.currentTarget.getAttribute("id");
    if (id) {
      setActive(id);
    }
  };

  const handExternalLink = (link) => {
    if (link) {
      window.open(link, "_blunk");
    }
  };

  const toggleExpandO = (e) => {
    const index = e.currentTarget.getAttribute("id");
    if (index) {
      const id = Number(index);
      setOrganizers((prev) =>
        prev?.map((item, i) =>
          i === id ? { ...item, expanded: !item.expanded } : item,
        ),
      );
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
              @ {workshops[`taid${active}`].location}
            </Typography>
            {workshops[`taid${active}`].datetime && (
              <Typography
                sx={{
                  textAlign: "center",
                  color: "#445029",
                  fontSize: isMobile ? 20 : 18,
                }}
              >
                {workshops[`taid${active}`].datetime}
              </Typography>
            )}
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
          {!Object.keys(organizers)?.length && (
            <Box mt={2}>
              <Typography>No organizers for this year.</Typography>
            </Box>
          )}
          <Container sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={4} justifyContent="center">
              {organizers?.map((organizer, index) => (
                <Grid item xs={isMobile ? 6 : 3} key={index}>
                  <Stack spacing={2}>
                    {organizer.image && (
                      <Box sx={{ textAlign: "center" }}>
                        <Box
                          component="img"
                          src={organizer.image}
                          sx={customStyles.mediaStyles}
                        />
                      </Box>
                    )}
                    <Stack>
                      <Typography
                        onClick={() => handExternalLink(organizer?.link)}
                        sx={{
                          fontSize: isMobile ? 30 : 18,
                          color: "#445029",
                          cursor: "pointer",
                        }}
                      >
                        {organizer.name}
                      </Typography>
                      {organizer.affiliate && (
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            fontSize: isMobile ? 24 : 12,
                          }}
                        >
                          {organizer.affiliate}
                        </Typography>
                      )}
                    </Stack>
                    {organizer.bio && (
                      <Box>
                        <Box
                          sx={{
                            height: organizers[index]?.expanded
                              ? "auto"
                              : organizer.bio?.length >= 400
                                ? 180
                                : "auto",
                            overflow: "hidden",
                            transition: "height 0.3s ease",
                          }}
                        >
                          <Typography variant="body2" color="text.secondary">
                            {organizer.bio}
                          </Typography>
                        </Box>
                        {organizer.bio?.length >= 400 && (
                          <Box>
                            <Stack
                              alignItems="center"
                              onClick={toggleExpandO}
                              id={`${index}`}
                              direction="row"
                              sx={{
                                float: "right",
                                cursor: "pointer",
                              }}
                            >
                              <Typography variant="body2">
                                {organizers[index]?.expanded
                                  ? "Read less"
                                  : "Read more"}
                              </Typography>
                              <ViewAllIcon
                                sx={{ fontSize: isMobile ? 25 : 15 }}
                              />
                            </Stack>
                          </Box>
                        )}
                      </Box>
                    )}
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default Organizers;
