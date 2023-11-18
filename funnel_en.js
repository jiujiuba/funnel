/*datetime js*/
function displayEnglishTime() {
  var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var now = new Date();
  var fiveDaysLater = new Date(now.getTime() + 5 * 24 * 60 * 60 * 1000);
  var dayOfWeek = daysOfWeek[fiveDaysLater.getDay()];
  var month = months[fiveDaysLater.getMonth()];
  var date = fiveDaysLater.getDate();
  var englishTime = dayOfWeek + ", " + month + " " + date;
  return englishTime;
  //document.getElementById("englishTime").innerText = englishTime;
}

/*mulity country show or hidden*/
const urlParams = new URLSearchParams(window.location.search);
const acid = urlParams.get('acid');
const pxid = urlParams.get('pxid');
const links = document.querySelectorAll('a');
links.forEach(link => {
    let originalHref = link.href;
    let replacedHref = originalHref.replace(/{acid}/g, acid).replace(/{pxid}/g, pxid);
    link.href = replacedHref;
});
var containers = document.querySelectorAll('.au, .uk, .za, .us, .ca');
fetch('https://www.cloudflare.com/cdn-cgi/trace').then(response=> response.text()).then(data=>{
    const obj = {}
    var arr = data.trim().split('\n')
    for(var i = 0; i < arr.length; i++){
      var key = arr[i].split("=")
      obj[key[0]] = key[1]
    }
    var country = obj.loc;
    country = country.toLowerCase();
    if(country != 'au' && country !='uk' && country !='za' && country !='us' && country !='ca') {
        containers.forEach(function(container) {
          container.style.display = 'none';
        });
        const ukContainer = document.querySelectorAll('.uk')
        ukContainer.forEach((element) => {
            element.style.display = 'block';
        })

    } else {
        containers.forEach(function(container) {
          container.style.display = 'none';
          if (container.classList.contains(country)) {
            container.style.display = 'block';
          } else {
            container.style.display = 'none';
          }
        });
    }
  var usFlagUnicode = '\uD83C\uDDFA\uD83C\uDDF8';
  var shippingDateDiv = document.querySelector('.shipping_date');
  shippingDateDiv.innerHTML = '<div style="text-align:left;font-size:14px;">'+usFlagUnicode+' FREE SHIPPING: Order within <span style="color:#4CAF2B;font-weight:bold;">2h 35min</span> to get it by <span id="date" style="font-weight:bold">'+displayEnglishTime()+'</span></div>';
})
