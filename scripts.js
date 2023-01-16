window.onSpotifyIframeApiReady = (IFrameAPI) => {
  let element = document.getElementById('embed-iframe');
  let options = {
      width: '100%',
      height: '200',
      uri: 'spotify:episode:10tt2L4Yh59dsbBL3qOooO?si=4fbe1a98b94040c6'
    };
  let callback = (EmbedController) => {
    document.querySelectorAll('ul#episodes > li > button').forEach(
      episode => {
        episode.addEventListener('click', () => {
          EmbedController.loadUri(episode.dataset.spotifyId);
          document.querySelector(".glass").style.display = "block";
          document.querySelector('#episode-description').innerHTML = episode.dataset.description;
        });
      });
  };
  IFrameAPI.createController(element, options, callback);
};

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    const target = document.querySelector(n.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth"
    });
  })
);

window.addEventListener("scroll", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
});


