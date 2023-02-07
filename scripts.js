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

const episodes = [
  { name: "Sleezy Vibes With Sean Patrick O'Brien", id: "spotify:episode:698meYf0NBDzQQuweD4Euc", description: "Pro Wrestling Referee/Good Friend Sean Patrick O'Brien makes his first appearance on Vibing With Sleezy. We discuss pro wrestling, Louisville, music, and just life in general. This is the premiere episode, so this one is special!"  },
  { name: "Episode 2", id: "spotify:episode:2UGrlKxwb7wbD1MWiypXso", description: "This is the description for Episode 2."  },
  { name: "Episode 3", id: "spotify:episode:4kVNt9xWelNS0sVPLb8xfp", description: "This is the description for Episode 3."  },
  { name: "Episode 4", id: "spotify:episode:0syTEh0axYKYb63G436uw4", description: "This is the description for Episode 4."  },
  { name: "Episode 5", id: "spotify:episode:4tHq6qsZjXdBhX06qJxUhI", description: "This is the description for Episode 5."  },
];

const ul = document.createElement("ul");
ul.setAttribute("id", "episodes");

episodes.forEach(episode => {
  const li = document.createElement("li");
  const button = document.createElement("button");
  button.innerHTML = episode.name;
  button.dataset.spotifyId = episode.id;
  button.dataset.description = episode.description;

  button.addEventListener("click", () => {
    EmbedController.loadUri(button.dataset.spotifyId);
    document.querySelector(".glass").style.display = "block";
    document.querySelector("#episode-description").innerHTML = button.dataset.description;
  });

  li.appendChild(button);
  ul.appendChild(li);
});

document.querySelector("#some-container").appendChild(ul);

document.querySelectorAll("ul#episodes > li > button").forEach((button, index) => {
  button.innerHTML = episodes[index].name;
  button.dataset.spotifyId = episodes[index].id;
  button.dataset.description = episodes[index].description;

  button.addEventListener("click", () => {
    EmbedController.loadUri(button.dataset.spotifyId);
    document.querySelector(".glass").style.display = "block";
    document.querySelector("#episode-description").innerHTML = button.dataset.description;
  });
});