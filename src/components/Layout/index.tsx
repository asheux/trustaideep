// External imports
import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useNavigate } from "react-router-dom";

// App related imports
import Footer from "src/commons/Footer";
import { StyledToolbar, ScrollTop } from "src/commons/Toolbar";
import { PreviousRouteProvider } from "src/routes/context";

import { customStyles } from "src/styles";
import { isMobile } from "src/helpers";

const settings = ["Workshop2023", "Workshop2022"];

const Layout = (props) => {
  const { children } = props;
  const [anchorElWs, setAnchorElWs] = useState(null);
  const [url, setUrl] = useState("");

  const navigate = useNavigate();

  const handleOpenWsMenu = (event) => {
    setAnchorElWs(event.currentTarget);
  };

  const handleCloseWsMenu = () => {
    setAnchorElWs(null);
  };

  const handleOpenSchedule = () => {
    navigate("/schedule");
  };

  useEffect(() => {
    if (url) {
      navigate(url);
    }
  }, [url]);

  return (
    <React.Fragment>
      <PreviousRouteProvider>
        <AppBar
          component="nav"
          sx={{
            boxShadow: 1,
            backgroundColor: "#445029",
          }}
        >
          <Container maxWidth="xl">
            <StyledToolbar disableGutters sx={isMobile ? { height: 140 } : {}}>
              <Box component="div" sx={customStyles.taidName}>
                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: "#f3f3f3",
                  }}
                >
                  <Stack direction="row" alignItems="center">
                    <Typography
                      component="h6"
                      sx={{
                        fontSize: isMobile ? 35 : 20,
                        fontWeight: 700,
                      }}
                    >
                      TrustAI Workshop
                    </Typography>
                  </Stack>
                </Link>
              </Box>
              <Box sx={{ flexGrow: 0, mr: 3 }}>
                <Typography
                  onClick={handleOpenSchedule}
                  sx={{
                    ...customStyles.wsProfileName,
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  Schedule
                </Typography>
              </Box>
              <Box sx={{ flexGrow: 0, mr: 1 }}>
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={isMobile ? 2 : 1}
                  sx={{
                    cursor: "pointer",
                  }}
                  onClick={handleOpenWsMenu}
                >
                  <Typography
                    sx={{
                      ...customStyles.wsProfileName,
                      color: "white",
                    }}
                  >
                    Workshops
                  </Typography>
                  {!anchorElWs ? (
                    <ArrowDropDownIcon sx={customStyles.arrowDropIcon} />
                  ) : (
                    <ArrowDropUpIcon sx={customStyles.arrowDropIcon} />
                  )}
                </Stack>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElWs}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  sx={{
                    mt: isMobile ? "65px" : "20px",
                  }}
                  open={Boolean(anchorElWs)}
                  onClose={handleCloseWsMenu}
                  PaperProps={{
                    sx: {
                      ...customStyles.menuPaperProps,
                      ...customStyles.menuPaperPropsBefore,
                    },
                  }}
                >
                  <MenuItem>
                    <Typography
                      textAlign="center"
                      sx={customStyles.wsnameMenuStyle}
                    >
                      All Workshops
                    </Typography>
                  </MenuItem>
                  <Divider sx={{ backgroundColor: "#6888ab" }} />
                  {settings.map((setting) => (
                    <MenuItem
                      key={setting}
                      sx={{ width: "300px" }}
                      onClick={() => {
                        handleCloseWsMenu();
                        setUrl(`/${setting.toLowerCase().replace(" ", "")}`);
                      }}
                    >
                      <Typography
                        textAlign="center"
                        sx={customStyles.settingStyles}
                      >
                        {setting}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </StyledToolbar>
          </Container>
        </AppBar>
        <StyledToolbar id="back-to-top-anchor" />
        {children}
        <Footer data={`@ ${new Date().getFullYear()}, Trust AI Workshop.`} />
        <ScrollTop {...props}>
          <Fab
            size="small"
            aria-label="scroll back to top"
            sx={{
              backgroundColor: "#90a959",
              "&:hover": {
                backgroundColor: "#445029",
              },
            }}
          >
            <KeyboardArrowUpIcon sx={{ color: "#ffffff" }} />
          </Fab>
        </ScrollTop>
        <Outlet />
      </PreviousRouteProvider>
    </React.Fragment>
  );
};

export default Layout;
