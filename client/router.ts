import { Router } from "@vaadin/router";

const router = new Router(document.querySelector(".root"));

router.setRoutes([
  { path: "/", component: "home-page" },
  { path: "/about", component: "access-page" },
  { path: "/contact", component: "new-room-page" },
  { path: "/stack", component: "game-room-page" },
  { path: "/proyects", component: "pre-game-room-page" },
]);
