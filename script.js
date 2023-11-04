var tablinks=document.getElementsByClassName("tab-links")
var tabcontains=document.getElementsByClassName("tab-contents")
function opentab(tabname){
    // console.log("ok");
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontain of tabcontains){
        tabcontain.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}

// for menu

var sidemenu=document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right="0"
}
function closemenu(){
    sidemenu.style.right="-200px"
}

// google sheet data
const scriptURL = 'https://script.google.com/macros/s/AKfycbwptHoLY0KR_64tDUeZsqkWdjHLc8UQpMhQOeAgtO6zNMCSiJU-gHl41tNgjLmI1CL7Pg/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
          msg.innerHTML="Massage sent successfully"
          setTimeout(function(){
              msg.innerHTML=""
          },5000)
          form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })