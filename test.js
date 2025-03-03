if (window.location.host == "uk-www.securly.com"){
  function encode(str) {
  if (!str) return str;
  return "https://gmuv.fly.dev/uv/service/"+encodeURIComponent(
  str.toString().split('').map((char, ind) => ind % 2 ? String.fromCharCode(char.charCodeAt() ^ 2) : char).join(''));}
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  window.location = encode("https://"+atob(decodeURI(urlParams.get('url'))))
}  
