const palette = {
  primaries: {
    blackest: (alpha = 1) => `rgba(19, 25, 33, ${alpha})`, //#131921
    whitest: (alpha = 1) => `rgba(255, 255, 255, ${alpha})`, //#ffffff
    main: (alpha = 1) => `rgba(205, 144, 66, ${alpha})`, //#cd9042
  },
  secondaries: {
    mostOrange: (alpha = 1) => `rgba(240, 193, 75, ${alpha})`, //#f0c14b
    grayish: (alpha = 1) => `rgba(243, 243, 243, ${alpha})`, //#f3f3f3
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
    checkout: {
      bg: palette.primaries.whitest(),
      titleLine: palette.primaries.blackest(0.1),
    },
    subtotal: {
      bg: palette.secondaries.grayish(),
      border: palette.secondaries.grayish(0.5),
      button: {
        bg: palette.secondaries.mostOrange(),
        color: palette.primaries.blackest(),
      },
    },
  },
};
