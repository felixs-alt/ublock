/// execute_script.js
window.addEventListener("keyup", event => {
  if (event.ctrlKey && event.which === 220) {
      for (let i = 1; i < 50001; i++) {
            setTimeout(function(){
                console.log("Robux:"+i)
            }, 1);
        }
  }
})
