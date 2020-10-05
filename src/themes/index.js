const palette = {
  primaries: {
    blackest: (alpha = 1) => `rgba(19, 25, 33, ${alpha})`, //#131921
    whitest: (alpha = 1) => `rgba(255, 255, 255, ${alpha})`, //#ffffff
    main: (alpha = 1) => `rgba(205, 144, 66, ${alpha})`, //#cd9042
    grayest: (alpha = 1) => `rgba(234, 237, 237, ${alpha})`,
  },
  secondaries: {
    mostOrange: (alpha = 1) => `rgba(240, 193, 75, ${alpha})`, //#f0c14b
    grayish: (alpha = 1) => `rgba(243, 243, 243, ${alpha})`, //#f3f3f3
  },
};

export default {
  colors: {
    login: {
      main: {
        border: palette.primaries.blackest(0.2),
      },
      input: {
        bg: palette.primaries.whitest(),
      },
      register: {
        border: palette.primaries.blackest(0.2),
      },
    },
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
    orderSummary: {
      bg: palette.primaries.whitest(),
      border: palette.primaries.blackest(0.2),
    },
    checkout: {
      bg: palette.primaries.whitest(),
      titleLine: palette.primaries.blackest(0.1),
    },
    payment: {
      bg: palette.primaries.whitest(),
      secondaryBg: palette.primaries.grayest(),
      border: palette.primaries.blackest(0.1),
    },
    subtotal: {
      bg: palette.secondaries.grayish(),
      border: palette.secondaries.grayish(0.5),
      button: {
        bg: palette.secondaries.mostOrange(),
        bgDisabled: palette.secondaries.grayish(),
        color: palette.primaries.blackest(),
      },
    },
  },
};
