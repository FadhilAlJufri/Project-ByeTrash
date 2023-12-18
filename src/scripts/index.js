import "../styles/main.css";
import "regenerator-runtime";
import app from "./views/app";

const App = new app({
  content: document.querySelector("main"),
  button: document.querySelector(".navbar-toggler"),
});

window.addEventListener("hashchange", () => {
   App.renderpage();
});

window.addEventListener("load", () => {
  App.renderpage();
});

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader-hidden");

  loader.addEventListener("transitioned", () => {
    document.body.removeChild("loader");
  });
});

window.addEventListener("hashchange", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader-hidden");

  loader.addEventListener("transitioned", () => {
    document.body.removeChild("loader");
  });
});
