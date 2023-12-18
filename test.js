/// execute_script.js
window.addEventListener("keyup", event => {
  if (event.ctrlKey && event.which === 220) {
    let _button=4;
    let _ID;
    document.body.addEventListener('mousedown', (e)=>{if(e.button===_button){_ID=_ID||setInterval(()=>e.target.click(),1)}});
    document.body.addEventListener('mouseup', (e)=>{if(e.button===_button){clearInterval(_ID);_ID=0}});
  }
})
