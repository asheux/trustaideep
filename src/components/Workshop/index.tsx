// External imports
import React, { useState, useEffect, useRef } from "react";
import ViewAllIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import SquareIcon from "@mui/icons-material/Square";
import { Grid, Container, Typography, Box, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// App related imports
import { customStyles } from "src/styles";
import { isMobile, workshops } from "src/helpers";

const Workshop = (props) => {
  const { activeWs } = props;
  const [espeakers, setESpeakers] = useState([]);
  const [eorganizers, setEOrganizers] = useState([]);
  const mainContentRef = useRef<HTMLDivElement>(null);

  const theme = useTheme();

  const toggleExpandS = (e) => {
    const index = e.currentTarget.getAttribute("id");
    if (index) {
      const id = Number(index);
      setESpeakers((prev) =>
        prev.map((item, i) =>
          i === id ? { ...item, expanded: !item.expanded } : item,
        ),
      );
    }
  };

  const toggleExpandO = (e) => {
    const index = e.currentTarget.getAttribute("id");
    if (index) {
      const id = Number(index);
      setEOrganizers((prev) =>
        prev.map((item, i) =>
          i === id ? { ...item, expanded: !item.expanded } : item,
        ),
      );
    }
  };

  useEffect(() => {
    if (mainContentRef.current) {
      mainContentRef.current.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    }
    setESpeakers(workshops[activeWs].speakers);
    setEOrganizers(workshops[activeWs].organizers);
  }, [activeWs]);

  const handExternalLink = (link) => {
    if (link) {
      window.open(link, "_blunk");
    }
  };

  const questions = [
    "What some researchers think trustworthy AI is about?",
    "What gpt thinks trustworthy AI is about?",
    "What trustworthy AI is actually about?",
  ];

  return (
    <React.Fragment>
      <Box
        ref={mainContentRef}
        sx={{
          overflowY: "auto",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#e6ecda",
            pt: 2,
            mt: -2,
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
              sx={{
                textAlign: "center",
              }}
            >
              @ {workshops[activeWs].location}
            </Typography>
          </Stack>
        </Box>
        {!isMobile && (
          <Container
            sx={{
              position: "relative",
              color: theme.palette.text.primary,
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: -100,
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: "#fff",
                padding: 2,
                width: "70%",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            >
              <Typography
                sx={{
                  fontSize: 15,
                }}
              >
                {workshops[activeWs].about}
              </Typography>
            </Box>
          </Container>
        )}
        <Container maxWidth="xl">
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={isMobile ? 12 : 7}>
              <Box
                sx={{
                  height: 700,
                }}>
                <Box
                  component="img"
                  src={workshops[activeWs].locationimage}
                  sx={{
                    width: "100%",
                    height: "100%"
                  }}
                />
              </Box>
            </Grid>
            {!isMobile && (
              <Grid item xs={5}>
                <Stack>
                  {questions.map((question, index) => (
                    <Typography
                      key={index}
                      variant="h6"
                      sx={{ color: "#445029" }}
                    >
                      {question}
                    </Typography>
                  ))}
                </Stack>
                <Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ float: "middle" }}
                  >
                    Join us and find out
                  </Typography>
                </Box>
              </Grid>
            )}
          </Grid>
        </Container>
        {isMobile && (
          <Box sx={{ p: 5 }}>
            <Typography
              sx={{
                fontSize: 15,
              }}
            >
              {workshops[activeWs].about}
            </Typography>
          </Box>
        )}
        {isMobile && (
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Box>
              {questions.map((question, index) => (
                <Typography
                  key={index}
                  sx={{
                    color: "#445029",
                    fontSize: 14,
                  }}
                >
                  {question}
                </Typography>
              ))}
            </Box>
            <Box>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ float: "middle" }}
              >
                Join us and find out
              </Typography>
            </Box>
          </Box>
        )}
        <Box
          sx={{
            backgroundColor: "#e6ecda",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: isMobile ? 100 : 50,
            mb: 2,
          }}
        >
          <Stack>
            <Typography
              variant={isMobile ? "h3" : "h5"}
              sx={{
                fontWeight: 700,
                color: "#445029",
              }}
            >
              Invited Speakers
            </Typography>
          </Stack>
        </Box>
        <Container sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={2}>
            {workshops[activeWs]?.speakers?.map((speaker, index) => (
              <Grid
                item
                xs={
                  isMobile
                    ? 12
                    : workshops[activeWs]?.speakers?.length > 3
                      ? 3
                      : 12 / workshops[activeWs]?.speakers?.length
                }
                key={index}
              >
                <Stack spacing={2}>
                  <Box sx={{ textAlign: "center" }}>
                    <Box
                      component="img"
                      src={speaker.image}
                      sx={{
                        width: isMobile ? 400 : 200,
                        height: isMobile ? 400 : 200,
                        borderRadius: 50,
                      }}
                    />
                  </Box>
                  <Stack>
                    <Typography
                      onClick={() => handExternalLink(speaker?.link)}
                      sx={{
                        fontSize: isMobile ? 30 : 18,
                        color: "#445029",
                        cursor: "pointer",
                        textAlign: "center",
                      }}
                    >
                      {speaker.name}
                    </Typography>
                    {speaker.affiliate && (
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          fontSize: isMobile ? 24 : 12,
                        }}
                      >
                        {speaker.affiliate}
                      </Typography>
                    )}
                  </Stack>
                  {speaker.bio && (
                    <Box>
                      <Box
                        sx={{
                          height: espeakers[index]?.expanded
                            ? "auto"
                            : speaker.bio?.length >= 400
                              ? isMobile
                                ? 400
                                : 199
                              : "auto",
                          overflow: "hidden",
                          transition: "height 0.3s ease",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: isMobile ? 26 : 13,
                          }}
                        >
                          {speaker.bio}
                        </Typography>
                      </Box>
                      {speaker.bio?.length >= 400 && (
                        <Box>
                          <Stack
                            alignItems="center"
                            onClick={toggleExpandS}
                            id={`${index}`}
                            direction="row"
                            sx={{
                              float: "right",
                              cursor: "pointer",
                            }}
                          >
                            <Typography sx={{ fontSize: isMobile ? 25 : 14 }}>
                              {espeakers[index]?.expanded
                                ? "Read less"
                                : "Read more"}
                            </Typography>
                            <ViewAllIcon
                              sx={{ fontSize: isMobile ? 28 : 15 }}
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
        <Box
          sx={{
            backgroundColor: "#e6ecda",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: isMobile ? 100 : 50,
            mb: 2,
          }}
        >
          <Stack>
            <Typography
              variant={isMobile ? "h3" : "h5"}
              sx={{
                fontWeight: 700,
                color: "#445029",
              }}
            >
              Call for Papers
            </Typography>
          </Stack>
        </Box>
        <Container sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={2}>
            <Grid item xs={isMobile ? 12 : 8}>
              <Stack spacing={2}>
                <Typography
                  variant={isMobile ? "h4" : "h6"}
                  sx={{
                    fontWeight: 500,
                  }}
                >
                  {workshops[activeWs].cfp?.title}
                </Typography>
                {workshops[activeWs].cfp?.description && (
                  <Typography sx={{ fontSize: 15 }}>
                    {workshops[activeWs].cfp?.description}
                  </Typography>
                )}
                <Typography sx={{ fontSize: 15 }}>
                  We’re looking for extended abstracts that will be presented as
                  contributed talks (10 to 15 minutes) related to:
                </Typography>
                <Stack sx={{ pl: 5 }} spacing={1}>
                  {workshops[activeWs].cfp?.topics.map((tps, index) => (
                    <Stack
                      direction="row"
                      alignItems="center"
                      spacing={1}
                      key={index}
                    >
                      <SquareIcon sx={{ fontSize: isMobile ? 18 : 9 }} />
                      <Typography sx={{ fontSize: isMobile ? 30 : 14 }}>
                        {tps}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={isMobile ? 12 : 4}>
              <Stack spacing={2}>
                <Typography
                  variant={isMobile ? "h4" : "h6"}
                  sx={{
                    fontWeight: 500,
                  }}
                >
                  Submissions & Dates
                </Typography>
                <Typography sx={{ fontSize: 15 }}>
                  If you’re interested in presenting your work at TrustAI
                  Workshop, please submit your extended abstract{" "}
                  <span
                    onClick={() =>
                      handExternalLink(workshops[activeWs].cfp?.submissionlink)
                    }
                    style={customStyles.externalLinks}
                  >
                    here
                  </span>{" "}
                  before{" "}
                  <span style={{ color: "red" }}>
                    {workshops[activeWs].cfp?.abstractsubdate}
                  </span>
                  . The short paper must be formatted using the{" "}
                  <span
                    onClick={() =>
                      handExternalLink(workshops[activeWs].cfp?.resourcelink)
                    }
                    style={customStyles.externalLinks}
                  >
                    DLI Author Kit
                  </span>
                  .
                </Typography>
                {activeWs === "taid2023" && (
                  <Typography sx={{ fontSize: 15 }}>
                    This year we will use CMT to manage the submissions, if this
                    is your first time using the platform, you can watch a great
                    tutorial{" "}
                    <span
                      onClick={() =>
                        handExternalLink(workshops[activeWs].cfp?.tutoriallink)
                      }
                      style={customStyles.externalLinks}
                    >
                      here
                    </span>{" "}
                    on how to create an account and make a submission.
                  </Typography>
                )}
                <Box>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Typography
                      sx={{
                        fontSize: isMobile ? 27 : 18,
                        fontWeight: 700,
                        color: "black",
                      }}
                    >
                      Deadline:
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: isMobile ? 27 : 18,
                        color: "red",
                      }}
                    >
                      {workshops[activeWs].cfp?.abstractsubdate}
                    </Typography>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Typography
                      sx={{
                        fontSize: isMobile ? 27 : 18,
                        fontWeight: 700,
                        color: "black",
                      }}
                    >
                      Submission portal:
                    </Typography>
                    <Typography
                      onClick={() =>
                        handExternalLink(
                          workshops[activeWs].cfp?.submissionlink,
                        )
                      }
                      sx={{
                        ...customStyles.externalLinks,
                        fontSize: isMobile ? 27 : 18,
                      }}
                    >
                      {workshops[activeWs].cfp?.submitname}
                    </Typography>
                  </Stack>
                  {activeWs === "taid2023" && (
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Typography
                        sx={{
                          fontSize: isMobile ? 27 : 18,
                          fontWeight: 700,
                          color: "black",
                        }}
                      >
                        CMT tutorial:
                      </Typography>
                      <Typography
                        onClick={() =>
                          handExternalLink(
                            workshops[activeWs].cfp?.tutoriallink,
                          )
                        }
                        sx={{
                          ...customStyles.externalLinks,
                          fontSize: isMobile ? 27 : 18,
                        }}
                      >
                        here
                      </Typography>
                    </Stack>
                  )}
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Container>
        <Box
          sx={{
            backgroundColor: "#e6ecda",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: isMobile ? 100 : 50,
            mb: 2,
          }}
        >
          <Stack>
            <Typography
              variant={isMobile ? "h3" : "h5"}
              sx={{
                fontWeight: 700,
                color: "#445029",
              }}
            >
              Organizers
            </Typography>
          </Stack>
        </Box>
        <Container sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={2}>
            {workshops[activeWs]?.organizers?.map((organizer, index) => (
              <Grid
                item
                xs={
                  isMobile
                    ? 6
                    : workshops[activeWs]?.organizers?.length > 3
                      ? 3
                      : 12 / workshops[activeWs]?.organizers?.length
                }
                key={index}
              >
                <Stack spacing={2}>
                  {organizer.image && (
                    <Box
                      component="img"
                      src={organizer.image}
                      sx={{
                        width: isMobile ? 400 : 200,
                        height: isMobile ? 400 : 200,
                        borderRadius: 50,
                      }}
                    />
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
                          height: eorganizers[index]?.expanded
                            ? "auto"
                            : organizer.bio?.length >= 400
                              ? 200
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
                              {eorganizers[index]?.expanded
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
        <Box
          sx={{
            backgroundColor: "#e6ecda",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: isMobile ? 100 : 50,
            mb: 2,
          }}
        >
          <Stack>
            <Typography
              variant={isMobile ? "h3" : "h5"}
              sx={{
                fontWeight: 700,
                color: "#445029",
              }}
            >
              Code of Conduct
            </Typography>
          </Stack>
        </Box>
        <Container sx={{ mt: 4, mb: 4 }}>
          <Typography sx={{ fontSize: 15 }}>
            This workshop follows{" "}
            <span
              onClick={() => handExternalLink(workshops[activeWs]?.coc.source)}
              style={customStyles.externalLinks}
            >
              Deep Learning Indaba Code of Conduct
            </span>
            .
          </Typography>
        </Container>
        <Box sx={{ mb: 10 }}></Box>
      </Box>
    </React.Fragment>
  );
};

export default Workshop;
