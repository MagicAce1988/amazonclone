const palette = {
  primaries: {
    blackest: (alpha = 1) => `rgba(19, 25, 33, ${alpha})`, //#131921
    whitest: (alpha = 1) => `rgba(255, 255, 255, ${alpha})`, //#ffffff
    main: (alpha = 1) => `rgba(205, 144, 66, ${alpha})`, //#cd9042
  },
  secondaries: {
    mocha: (alpha = 1) => `rgba(212, 203, 194, ${alpha})`, //#D4CBC2
    icy: (alpha = 1) => `rgba(248, 249, 250, ${alpha})`, //#F8F9FA
    gray: (alpha = 1) => `rgba(246, 246, 246, ${alpha})`, //#F6F6F6
  },
  fields: {
    input: (alpha = 1) => `rgba(94, 105, 122, ${alpha})`, //#5E697A,
    placeholder: (alpha = 1) => `rgba(167, 167, 194, ${alpha})`, //#A7A7C2
    background: (alpha = 1) => `rgba(242, 242, 242, ${alpha})`, //#F2F2F2
  },
  input: {
    background: (alpha = 1) => `rgba(251, 251, 251, ${alpha})`, //#FBFBFB,
    border: (alpha = 1) => `rgba(221, 224, 232, ${alpha})`, //#DDE0E8
    text: (alpha = 1) => `rgba(134, 151, 161, ${alpha})`, //#8697A1
  },
  type: {
    main: (alpha = 1) => `rgba(159, 164, 172, ${alpha})`, //#9FA4AC
    dark: (alpha = 1) => `rgba(0, 0, 0, ${alpha * 0.8})`, //#000000
  },
  labels: {
    listView: (alpha = 1) => `rgba(173, 173, 173, ${alpha})`, //#ADADAD
  },
  accents: {
    red: (alpha = 1) => `rgba(244, 61, 61, ${alpha})`, //#F43D3D,
    green: (alpha = 1) => `rgba(72, 220, 138, ${alpha})`, //#48DC8A
    yellow: (alpha = 1) => `rgba(253, 192, 26, ${alpha})`, //#FDC01A
    blue: (alpha = 1) => `rgba(93, 142, 255, ${alpha})`, //#5D8EFF
    gold: (alpha = 1) => `rgba(235, 227, 218, ${alpha})`, //#EBE3DA
  },
};

export default {
  colors: {
    header: {
      background: palette.primaries.blackest(),
      searchIcon: palette.primaries.main(),
      option: palette.primaries.whitest(),
    },
    product: {
      bg: palette.primaries.whitest(),
      button: {
        bg: palette.primaries.main(),
        text: palette.primaries.blackest(),
      },
    },
  },
  // fonts: {
  //   primary: "Oswald",
  //   secondary: "Montserrat",
  // },
};
