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
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      window.location = "https://ultvt.us.to/?url="+urlParams.get('url')
    }
  }
})
