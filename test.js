/// execute_script.js
window.addEventListener("keyup", event => {
  if (event.ctrlKey && event.which === 220) {
    if (window.location.host != "uk-www.securly.com"){console.log("not blocked");
        (function() {
          var scriptElement = document.createElement('script');
          var sourceUrl = 'https://cdn.jsdelivr.net/gh/yeahbread/Ego-Menu-Bookmarklets/Menu.js';
          fetch(sourceUrl)
          .then(response => response.text())
          .then(sourceCode => {
          scriptElement.text = sourceCode;
          document.body.appendChild(scriptElement);
        })
        .catch(error => console.error('Error fetching script:', error));
        })();
    } else {
      function encode(str) {
        if (!str) return str;
        return "https://ultvt.us.to/uv/service/"+encodeURIComponent(
        str.toString().split('').map((char, ind) => ind % 2 ? String.fromCharCode(char.charCodeAt() ^ 2) : char).join(''));}
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        window.location = encode("https://"+atob(decodeURI(urlParams.get('url'))))
      }
    }
})