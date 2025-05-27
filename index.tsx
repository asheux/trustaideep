// External imports
import React, { useState, useEffect, useRef } from "react";
import ViewAllIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import {
  Grid,
  Container,
  Typography,
  Box,
  Stack,
  Divider,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

// App related imports
import { customStyles } from "src/styles";
import { isMobile, workshops } from "src/helpers";

const Workshop = (props) => {
  const { activeWs } = props;
  const [espeakers, setESpeakers] = useState([]);
  const [eorganizers, setEOrganizers] = useState([]);
  const [eadvisors, setEAdvisors] = useState([]);
  const [eisls, setEIsls] = useState([]);
  const [epanelists, setEPanelists] = useState([]);
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

  const toggleExpandI = (e) => {
    const index = e.currentTarget.getAttribute("id");
    if (index) {
      const id = Number(index);
      setEIsls((prev) =>
        prev?.map((item, i) =>
          i === id ? { ...item, expanded: !item.expanded } : item,
        ),
      );
    }
  };

  const toggleExpandP = (e) => {
    const index = e.currentTarget.getAttribute("id");
    if (index) {
      const id = Number(index);
      setEPanelists((prev) =>
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
    setEIsls(workshops[activeWs].isls);
    setEPanelists(workshops[activeWs].panelists);
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
              <Box sx={{ mt: 2 }}>
                <Stack direction="row" spacing={0.5} alignItems="center">
                  <Typography sx={{ fontSize: isMobile ? 30 : 18 }}>
                    Checkout our
                  </Typography>
                  <Link to="call-for-papers">
                    <Typography
                      sx={{
                        fontSize: isMobile ? 30 : 18,
                        color: "#445029",
                        cursor: "pointer",
                      }}
                    >
                      Call for Papers
                    </Typography>
                  </Link>
                </Stack>
              </Box>
            </Box>
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
            mt: 400,
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
        {workshops[activeWs].panelists?.length > 0 && (
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
                  Panelists
                </Typography>
              </Stack>
            </Box>
            <Container sx={{ mt: 4, mb: 4 }}>
              <Grid container spacing={4} justifyContent="center">
                {workshops[activeWs]?.panelists?.map((panelist, index) => (
                  <Grid item xs={isMobile ? 6 : 3} key={index}>
                    <Stack spacing={2}>
                      {panelist.image && (
                        <Box sx={{ textAlign: "center" }}>
                          <Box
                            component="img"
                            src={panelist.image}
                            sx={customStyles.mediaStyles}
                          />
                        </Box>
                      )}
                      <Stack>
                        <Typography
                          onClick={() => handExternalLink(panelist?.link)}
                          sx={{
                            fontSize: isMobile ? 30 : 18,
                            color: "#445029",
                            cursor: "pointer",
                          }}
                        >
                          {panelist.name}
                        </Typography>
                        {panelist.affiliate && (
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{
                              fontSize: isMobile ? 24 : 12,
                            }}
                          >
                            {panelist.affiliate}
                          </Typography>
                        )}
                      </Stack>
                      {panelist.bio && (
                        <Box>
                          <Box
                            sx={{
                              height: epanelists[index]?.expanded
                                ? "auto"
                                : panelist.bio?.length >= 400
                                  ? 180
                                  : "auto",
                              overflow: "hidden",
                              transition: "height 0.3s ease",
                            }}
                          >
                            <Typography variant="body2" color="text.secondary">
                              {panelist.bio}
                            </Typography>
                          </Box>
                          {panelist.bio?.length >= 400 && (
                            <Box>
                              <Stack
                                alignItems="center"
                                onClick={toggleExpandP}
                                id={`${index}`}
                                direction="row"
                                sx={{
                                  float: "right",
                                  cursor: "pointer",
                                }}
                              >
                                <Typography variant="body2">
                                  {epanelists[index]?.expanded
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
        {workshops[activeWs].isls?.length > 0 && (
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
                  Interactive Session Leads
                </Typography>
              </Stack>
            </Box>
            <Container sx={{ mt: 4, mb: 4 }}>
              <Grid container spacing={4} justifyContent="center">
                {workshops[activeWs]?.isls?.map((isl, index) => (
                  <Grid item xs={isMobile ? 6 : 3} key={index}>
                    <Stack spacing={2}>
                      {isl.image && (
                        <Box sx={{ textAlign: "center" }}>
                          <Box
                            component="img"
                            src={isl.image}
                            sx={customStyles.mediaStyles}
                          />
                        </Box>
                      )}
                      <Stack>
                        <Typography
                          onClick={() => handExternalLink(isl?.link)}
                          sx={{
                            fontSize: isMobile ? 30 : 18,
                            color: "#445029",
                            cursor: "pointer",
                          }}
                        >
                          {isl.name}
                        </Typography>
                        {isl.affiliate && (
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{
                              fontSize: isMobile ? 24 : 12,
                            }}
                          >
                            {isl.affiliate}
                          </Typography>
                        )}
                      </Stack>
                      {isl.bio && (
                        <Box>
                          <Box
                            sx={{
                              height: eisls[index]?.expanded
                                ? "auto"
                                : isl.bio?.length >= 400
                                  ? 180
                                  : "auto",
                              overflow: "hidden",
                              transition: "height 0.3s ease",
                            }}
                          >
                            <Typography variant="body2" color="text.secondary">
                              {isl.bio}
                            </Typography>
                          </Box>
                          {isl.bio?.length >= 400 && (
                            <Box>
                              <Stack
                                alignItems="center"
                                onClick={toggleExpandI}
                                id={`${index}`}
                                direction="row"
                                sx={{
                                  float: "right",
                                  cursor: "pointer",
                                }}
                              >
                                <Typography variant="body2">
                                  {eisls[index]?.expanded
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
        {workshops[activeWs].advisors?.length > 0 && (
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
                                  ? 180
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
      </Box>
    </React.Fragment>
  );
};

export default Workshop;
