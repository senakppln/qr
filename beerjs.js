function scrollToContent(e){document.getElementById(e).scrollIntoView({behavior:"smooth"})}function showAlertOnClick(){alert("You entered: "+document.querySelector(".search-place").value.trim())}function showAlertOnSubmit(){var e=document.querySelector(".search-place").value.trim();""!==e&&alert("You entered: "+e)}document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("checkbox");e.addEventListener("change",function(){let t=document.querySelector(".slider");e.checked&&t.classList.contains("tr")?window.location.href="trbeerpage.html":e.checked&&t.classList.contains("eng")&&(window.location.href="index.html")});let t=document.querySelectorAll(".buttons");function l(e){let t=document.querySelector(".beer-content"),l=document.querySelector(".food-containers");document.querySelectorAll(".beer-content > div").forEach(function(e){e.style.display="none"}),"food"===e?(l.style.display="flex",t.style.margin="10px 0"):(l.style.display="none",t.style.margin="40px 0 10px 0");var c=document.querySelector(".scroll-"+e);c&&(c.style.display="flex",document.body.style.backgroundImage="url('"+e+".png')")}function c(){t.forEach(e=>{e.classList.remove("selected")});let e=window.location.hash.slice(1);if(e)l(e);else{let c=document.querySelector(".beer-content div:first-child");l(e=c.classList[0].split("-")[1])}let o=document.querySelector("[data-category='"+e+"']");o.classList.add("selected"),o.scrollIntoView()}t.forEach(e=>{e.addEventListener("click",function(){t.forEach(t=>{t!==e&&t.classList.remove("selected")}),e.classList.add("selected");let c=e.getAttribute("data-category");l(c)})}),c(),window.addEventListener("hashchange",c)});
