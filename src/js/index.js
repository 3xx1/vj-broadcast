var API_KEY = 'AIzaSyDSnYmVAfSouP9FOPJr0BrE_wLqZOZRrnE';
var lex = new RiLexicon();
var youtubeUrlBase = 'https://www.youtube.com/embed/';
var attributeTags = '?autoplay=1&controls=0&enablejsapi=1';
var counter = 0;

setInterval(function() {
  makeRequest(counter);
  counter++;
}, 1000);

function makeRequest() {
  var keyword = lex.randomWord();
  $.ajax({
    type: 'get',
    dataType: 'jsonp',
    url: "https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&q=" + keyword + "&key=" + API_KEY
  }).done(function(event) {
    var videoId = event.items[0].id.videoId;
    var iframeNum = $('iframe').length;
    $('iframe').eq(counter%iframeNum).prop('src', youtubeUrlBase + videoId + attributeTags);
  });
}
