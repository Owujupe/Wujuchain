const theme = {
  token: {
    fontFamily:
      "'GT Walsheim Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  },
  components: {
    Modal: {
      fontFamily:
        "'GT Walsheim Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    },
    Select: {
      activeBorderColor: "#7a28ff",
      activeOutlineColor: "rgba(122, 40, 255, 0.09)",
      hoverBorderColor: "#7a28ff",
    },
    Calendar: {
      // These are the available calendar-specific tokens
      fullBg: "#ffffff", // Background for full calendar mode
      fullPanelBg: "#ffffff", // Panel background in full mode
      itemActiveBg: "#000000", // Background for selected dates
      miniContentHeight: 100, // Height when not in fullscreen
    },
  },
};

export default theme;
