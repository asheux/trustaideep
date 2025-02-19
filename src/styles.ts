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
  boldText: {
    fontWeight: 700,
  },
  likeIcon: {
    height: isMobile ? 40 : 16,
    width: isMobile ? 40 : 16,
    cursor: "pointer",
  },
  verifiedIcon: {
    height: isMobile ? 35 : 16,
    width: isMobile ? 35 : 16,
    cursor: "pointer",
    color: "#445029",
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
  messagePopover: {
    overflow: "visible",
    backgroundColor: "#025570",
    color: "#ffffff",
    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
    mt: 1.5,
    "&::before": {
      content: "''",
      display: "block",
      position: "absolute",
      bottom: -8,
      left: 14,
      width: 10,
      height: 10,
      bgcolor: "#025570",
      transform: "translateY(-50%) rotate(45deg)",
    },
  },
  searchResponseAppBar: {
    position: "sticky",
    top: isMobile ? 172 : 50,
    mr: 2,
    zIndex: 1,
    mb: isMobile ? 10 : 0,
    borderBottom: `1px solid ${isMobile ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0.2)"}`,
  },
  responseSearchToolbar: {
    height: isMobile ? 100 : 40,
  },
  filterSearchStyles: {
    pr: "40px",
    display: "flex",
    alignItems: "center",
    height: isMobile ? "100px" : "50px",
    cursor: "pointer",
  },
  searchIcon: {
    color: "#445029",
    width: isMobile ? 70 : 25,
    height: isMobile ? 70 : 25,
  },
  inputBase: {
    ml: 1,
    flex: 1,
    "& input::placeholder": {
      fontSize: isMobile ? 40 : 14,
    },
    "& input": {
      fontSize: isMobile ? 40 : 14,
    },
  },
  cardName: {
    pt: 1,
    fontSize: isMobile ? 22 : 16,
    color: "#445029",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    hyphens: "auto",
  },
  wsProfileName: {
    fontSize: isMobile ? 20 : 12,
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
    fontSize: isMobile ? 40 : 25,
    color: "white",
  },
  menuPaperProps: {
    overflow: "visible",
    backgroundColor: "#445029",
    borderRadius: 0,
    color: "#ffffff",
    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
    mt: 2.5,
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
      zIndex: 0,
    },
  },
  wsnameMenuStyle: {
    fontSize: isMobile ? 25 : 14,
    color: "#DCECFE",
  },
  settingStyles: {
    fontSize: isMobile ? 25 : 14,
    pt: 0.5,
    pb: 0.5,
  },
  externalLinks: {
    color: "#90a959",
    cursor: "pointer",
  }
};
