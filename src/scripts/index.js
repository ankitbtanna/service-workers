import "../styles/index.scss";

if (process.env.NODE_ENV === "development") {
  require("../index.html");
}

console.log("webpack starterkit");

setupSW();

function setupSW() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.getRegistrations().then((registration) => {
      console.log(registration);
    });
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("sw.js", { scope: "/" }).then(
        (registration) => {
          console.log(
            `Service Worker installed on scope ${registration.scope}`
          );
        },
        (err) => {
          console.log(`Service Worker failed to install ${err}`);
        }
      );
    });
  }
}
