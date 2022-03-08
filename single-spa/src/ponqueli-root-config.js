import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: (location)=> location.pathname ==='/',
});

registerApplication({
  name: "@ponqueli/react-single",
  app: () =>
    System.import("@ponqueli/react-single"),
  activeWhen: (location)=> location.pathname ==='/react-single',
});

registerApplication({
  name: "@ponqueli/react-multiples",
  app: () =>
    System.import("@ponqueli/react-multiples"),
  activeWhen: ['/react-multiples'],
});

// registerApplication({
//   name: "@ponqueli/navbar",
//   app: () => System.import("@ponqueli/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
