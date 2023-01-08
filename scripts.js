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
          EmbedController.loadUri(episode.dataset.spotifyId)
        });
      })
  };
  IFrameAPI.createController(element, options, callback);
};