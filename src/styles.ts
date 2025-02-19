import { isMobile } from "src/helpers";

export const customStyles = {
  centerStuff: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  loaderStyle: {
    fontSize: isMobile ? 30 : 20,
    color: "#445029",
  },
  taidName: {
    mr: 2,
    display: { xs: "none", md: "flex" },
    letterSpacing: ".3rem",
    color: "inherit",
    flexGrow: 1,
  },
  buttonStyle: {
    fontSize: isMobile ? 25 : 12,
  },
  spinnerSize: isMobile ? 40 : 21,
  scrollableBox: {
    height: "100vh",
    overflowY: "auto",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      display: "none", // For Chrome, Safari, and Edge
    },
    position: "relative",
  },
  wsProfileName: {
    fontSize: isMobile ? 30 : 12,
    fontWeight: 700,
    lineHeight: 1.2,
  },
  wsnameShow: {
    display: {
      xs: "block",
      sm: "none",
      md: "none",
      lg: "block",
    },
  },
  arrowDropIcon: {
    fontSize: isMobile ? 50 : 25,
    color: "white",
  },
  menuPaperProps: {
    overflow: "visible",
    backgroundColor: "#445029",
    borderRadius: 0,
    color: "#ffffff",
    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
    mt: isMobile ? 4.5 : 2.5,
  },
  menuPaperPropsBefore: {
    "&::before": {
      content: "''",
      display: "block",
      position: "absolute",
      top: 0,
      right: 10,
      width: 10,
      height: 10,
      bgcolor: "#445029",
      transform: "translateY(-50%) rotate(45deg)",
    },
  },
  wsnameMenuStyle: {
    fontSize: isMobile ? 30 : 14,
    color: "#DCECFE",
  },
  settingStyles: {
    fontSize: isMobile ? 30 : 14,
    pt: 0.5,
    pb: 0.5,
  },
  externalLinks: {
    color: "#90a959",
    cursor: "pointer",
  },
};
