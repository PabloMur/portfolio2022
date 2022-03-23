import { Router } from "@vaadin/router";

const router = new Router(document.querySelector(".root"));

router.setRoutes([
  { path: "/", component: "home-page" },
  { path: "/about", component: "about-page" },
  { path: "/contact", component: "contact-page" },
  { path: "/stack", component: "stack-page" },
  { path: "/proyects", component: "proyects-page" },
]);
