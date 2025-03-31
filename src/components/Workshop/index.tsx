// External imports
import React, { useState, useEffect, useRef } from "react";
import ViewAllIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import SquareIcon from "@mui/icons-material/Square";
import {
  Grid,
  Container,
  Typography,
  Box,
  Stack,
  Divider,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

// App related imports
import { customStyles } from "src/styles";
import { isMobile, workshops } from "src/helpers";

const Workshop = (props) => {
  const { activeWs } = props;
  const [espeakers, setESpeakers] = useState([]);
  const [eorganizers, setEOrganizers] = useState([]);
  const [eadvisors, setEAdvisors] = useState([]);
  const mainContentRef = useRef<HTMLDivElement>(null);

  const theme = useTheme();

  const toggleExpandS = (e) => {
    const index = e.currentTarget.getAttribute("id");
    if (index) {
      const id = Number(index);
      setESpeakers((prev) =>
        prev?.map((item, i) =>
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
        prev?.map((item, i) =>
          i === id ? { ...item, expanded: !item.expanded } : item,
        ),
      );
    }
  };

  const toggleExpandA = (e) => {
    const index = e.currentTarget.getAttribute("id");
    if (index) {
      const id = Number(index);
      setEAdvisors((prev) =>
        prev?.map((item, i) =>
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
    setEAdvisors(workshops[activeWs].advisors);
  }, [activeWs]);

  const handExternalLink = (link) => {
    if (link) {
      window.open(link, "_blunk");
    }
  };

  const questions = [
    "What some researchers think trustworthy AI is about?",
    "What LLMs thinks trustworthy AI is about?",
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
              sx={{
                textAlign: "center",
                color: "#445029",
              }}
            >
              @ {workshops[activeWs].location}
            </Typography>
            {workshops[activeWs].datetime && (
              <Typography
                sx={{
                  textAlign: "center",
                  color: "#445029",
                  fontSize: isMobile ? 20 : 18,
                }}
              >
                {workshops[activeWs].datetime}
              </Typography>
            )}
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
                top: -70,
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: "#fff",
                padding: 2,
                width: "70%",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            >
              {workshops[activeWs].title && (
                <>
                  <Typography variant="h6">
                    {workshops[activeWs].title}
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    <Divider />
                  </Box>
                </>
              )}
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
        {activeWs !== "taid2025" && (
          <Container maxWidth="xl">
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={isMobile ? 12 : 7}>
                <Box
                  sx={{
                    height: 700,
                  }}
                >
                  <Box
                    component="img"
                    src={workshops[activeWs].locationimage}
                    sx={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </Box>
              </Grid>
              {!isMobile && (
                <Grid item xs={5}>
                  <Stack>
                    {questions?.map((question, index) => (
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
        )}
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
              {questions?.map((question, index) => (
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
            height: isMobile ? 100 : 60,
            mb: 2,
            mt: activeWs === "taid2025" ? 30 : 0,
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
          <Grid container spacing={2} justifyContent="center">
            {workshops[activeWs]?.speakers?.map((speaker, index) => (
              <Grid item xs={isMobile ? 12 : 3} key={index}>
                <Stack spacing={2}>
                  <Box sx={{ textAlign: "center" }}>
                    <Box
                      component="img"
                      src={speaker.image}
                      sx={customStyles.mediaStyles}
                    />
                  </Box>
                  <Stack>
                    <Typography
                      onClick={() => handExternalLink(speaker?.link)}
                      sx={{
                        fontSize: isMobile ? 30 : 18,
                        color: "#445029",
                        cursor: "pointer",
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
            height: isMobile ? 100 : 60,
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
        {workshops[activeWs]?.cfp ? (
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
                    <Typography sx={{ fontSize: isMobile ? 30 : 14 }}>
                      {workshops[activeWs].cfp?.description}
                    </Typography>
                  )}
                  <Typography sx={{ fontSize: 15 }}>
                    We welcome submissions across disciplines, including
                    computer science, law, social sciences, ethics, and policy.
                    Interdisciplinary approaches are highly encouraged. General
                    areas of interest include but are not limited to:
                  </Typography>
                  <Stack sx={{ pl: 5 }} spacing={1}>
                    {workshops[activeWs].cfp?.topics?.map((tps, index) => (
                      <Stack
                        direction="row"
                        alignItems="center"
                        spacing={1}
                        key={index}
                      >
                        <SquareIcon sx={{ fontSize: isMobile ? 18 : 9 }} />
                        <Typography sx={{ fontSize: isMobile ? 30 : 14 }}>
                          <span style={{ fontWeight: 700 }}>{tps.title}</span>{" "}
                          {tps.description}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>
                  {workshops[activeWs].cfp?.additionalinfo && (
                    <Typography sx={{ fontSize: 15 }}>
                      {workshops[activeWs].cfp?.additionalinfo}
                    </Typography>
                  )}
                  <Box>
                    <Typography
                      sx={{ fontSize: isMobile ? 33 : 16, fontWeight: 700 }}
                    >
                      Anonymization
                    </Typography>
                    <Typography sx={{ fontSize: isMobile ? 30 : 14 }}>
                      {workshops[activeWs].cfp?.anonymization}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{ fontSize: isMobile ? 33 : 16, fontWeight: 700 }}
                    >
                      Important Prerequisite
                    </Typography>
                    <Typography sx={{ fontSize: isMobile ? 30 : 14 }}>
                      Attendance at indaba requires a
                      <span
                        onClick={() =>
                          handExternalLink(
                            `https://deeplearningindaba.com/${workshops[activeWs].year}/`,
                          )
                        }
                        style={customStyles.externalLinks}
                      >
                        {" "}
                        pre-application
                      </span>
                      . To submit a paper to our workshop, at least one author
                      must be accepted at Indaba and have a ticket
                    </Typography>
                  </Box>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Typography
                      sx={{ fontSize: isMobile ? 33 : 16, fontWeight: 700 }}
                    >
                      Contact:
                    </Typography>
                    <Typography sx={{ fontSize: isMobile ? 30 : 14 }}>
                      For questions, please contact{" "}
                      <span style={customStyles.externalLinks}>
                        trustaideepindaba@gmail.com
                      </span>
                    </Typography>
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
                  {workshops[activeWs].cfp?.topicofsub && (
                    <Box>
                      <Typography
                        sx={{ fontSize: isMobile ? 33 : 16, fontWeight: 700 }}
                      >
                        Topic of the submission
                      </Typography>
                      <Typography sx={{ fontSize: isMobile ? 30 : 14 }}>
                        {workshops[activeWs].cfp?.topicofsub}
                      </Typography>
                    </Box>
                  )}
                  {workshops[activeWs].cfp?.submittype === "cmt" && (
                    <Box>
                      <Typography
                        sx={{ fontSize: isMobile ? 33 : 16, fontWeight: 700 }}
                      >
                        Submission instructions
                      </Typography>
                      <Typography sx={{ fontSize: isMobile ? 30 : 14 }}>
                        {workshops[activeWs].cfp?.submitinstruction}{" "}
                        <span
                          onClick={() =>
                            handExternalLink(
                              workshops[activeWs].cfp?.submitinstructionlink,
                            )
                          }
                          style={customStyles.externalLinks}
                        >
                          link
                        </span>
                      </Typography>
                    </Box>
                  )}
                  <Typography sx={{ fontSize: isMobile ? 30 : 14 }}>
                    If you’re interested in presenting your work at TrustAI
                    Workshop, please submit your extended abstract{" "}
                    <span
                      onClick={() =>
                        handExternalLink(
                          workshops[activeWs].cfp?.submissionlink,
                        )
                      }
                      style={customStyles.externalLinks}
                    >
                      here
                    </span>{" "}
                    before{" "}
                    <span style={{ color: "red" }}>
                      {workshops[activeWs].cfp?.abstractsubdate}.
                    </span>
                  </Typography>
                  <Box>
                    <Typography
                      sx={{ fontSize: isMobile ? 33 : 16, fontWeight: 700 }}
                    >
                      Formatting and Length
                    </Typography>
                    <Typography sx={{ fontSize: isMobile ? 30 : 14 }}>
                      {workshops[activeWs].cfp?.formatting}{" "}
                      <span
                        onClick={() =>
                          handExternalLink(workshops[activeWs].cfp?.formatlink)
                        }
                        style={customStyles.externalLinks}
                      >
                        {workshops[activeWs].cfp?.formatname}
                      </span>
                    </Typography>
                  </Box>
                  {workshops[activeWs].cfp?.dualsubpolicy && (
                    <Box>
                      <Typography
                        sx={{ fontSize: isMobile ? 33 : 16, fontWeight: 700 }}
                      >
                        No dual submission policy
                      </Typography>
                      <Typography sx={{ fontSize: isMobile ? 30 : 14 }}>
                        {workshops[activeWs].cfp?.dualsubpolicy}
                      </Typography>
                    </Box>
                  )}
                  <Box>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Typography
                        sx={{
                          fontSize: isMobile ? 30 : 14,
                          fontWeight: 700,
                          color: "black",
                        }}
                      >
                        Deadline:
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: isMobile ? 30 : 14,
                          color: "red",
                        }}
                      >
                        {workshops[activeWs].cfp?.abstractsubdate}
                      </Typography>
                    </Stack>
                    {workshops[activeWs].cfp?.notificationdate && (
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography
                          sx={{
                            fontSize: isMobile ? 30 : 14,
                            fontWeight: 700,
                            color: "black",
                          }}
                        >
                          Notifications:
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: isMobile ? 30 : 14,
                            color: "#90a959",
                          }}
                        >
                          {workshops[activeWs].cfp?.notificationdate}
                        </Typography>
                      </Stack>
                    )}
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Typography
                        sx={{
                          fontSize: isMobile ? 30 : 14,
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
                          fontSize: isMobile ? 30 : 14,
                        }}
                      >
                        {workshops[activeWs].cfp?.submitname}
                      </Typography>
                    </Stack>
                    {workshops[activeWs].cfp?.submittype === "cmt" && (
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography
                          sx={{
                            fontSize: isMobile ? 30 : 14,
                            fontWeight: 700,
                            color: "black",
                          }}
                        >
                          Microsoft CMT tutorial:
                        </Typography>
                        <Typography
                          onClick={() =>
                            handExternalLink(
                              workshops[activeWs].cfp?.tutoriallink,
                            )
                          }
                          sx={{
                            ...customStyles.externalLinks,
                            fontSize: isMobile ? 30 : 14,
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
        ) : (
          <Container sx={{ mt: 4, mb: 4 }}>
            <Typography sx={{ textAlign: "center", fontSize: 20 }}>
              Coming soon
            </Typography>
          </Container>
        )}
        <Box
          sx={{
            backgroundColor: "#e6ecda",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: isMobile ? 100 : 60,
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
          <Grid container spacing={4} justifyContent="center">
            {workshops[activeWs]?.organizers?.map((organizer, index) => (
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
                          height: eorganizers[index]?.expanded
                            ? "auto"
                            : organizer.bio?.length >= 400
                              ? 100
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
        {workshops[activeWs].advisors && (
          <>
            <Box
              sx={{
                backgroundColor: "#e6ecda",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: isMobile ? 100 : 60,
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
                  Advisory Committee
                </Typography>
              </Stack>
            </Box>
            <Container sx={{ mt: 4, mb: 4 }}>
              <Grid container spacing={4} justifyContent="center">
                {workshops[activeWs]?.advisors?.map((advisor, index) => (
                  <Grid item xs={isMobile ? 6 : 3} key={index}>
                    <Stack spacing={2}>
                      {advisor.image && (
                        <Box sx={{ textAlign: "center" }}>
                          <Box
                            component="img"
                            src={advisor.image}
                            sx={customStyles.mediaStyles}
                          />
                        </Box>
                      )}
                      <Stack>
                        <Typography
                          onClick={() => handExternalLink(advisor?.link)}
                          sx={{
                            fontSize: isMobile ? 30 : 18,
                            color: "#445029",
                            cursor: "pointer",
                          }}
                        >
                          {advisor.name}
                        </Typography>
                        {advisor.affiliate && (
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{
                              fontSize: isMobile ? 24 : 12,
                            }}
                          >
                            {advisor.affiliate}
                          </Typography>
                        )}
                      </Stack>
                      {advisor.bio && (
                        <Box>
                          <Box
                            sx={{
                              height: eadvisors[index]?.expanded
                                ? "auto"
                                : advisor.bio?.length >= 400
                                  ? 100
                                  : "auto",
                              overflow: "hidden",
                              transition: "height 0.3s ease",
                            }}
                          >
                            <Typography variant="body2" color="text.secondary">
                              {advisor.bio}
                            </Typography>
                          </Box>
                          {advisor.bio?.length >= 400 && (
                            <Box>
                              <Stack
                                alignItems="center"
                                onClick={toggleExpandA}
                                id={`${index}`}
                                direction="row"
                                sx={{
                                  float: "right",
                                  cursor: "pointer",
                                }}
                              >
                                <Typography variant="body2">
                                  {eadvisors[index]?.expanded
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
          </>
        )}

        <Box
          sx={{
            backgroundColor: "#e6ecda",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: isMobile ? 100 : 60,
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
