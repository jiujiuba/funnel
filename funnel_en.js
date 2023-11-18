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
var usFlagUnicode = '\uD83C\uDDFA\uD83C\uDDF8';
var shippingDateDiv = document.querySelector('.shipping_date');
shippingDateDiv.innerHTML = '<div style="text-align:left;font-size:14px;">'+usFlagUnicode+' FREE SHIPPING: Order within <span style="color:#4CAF2B;font-weight:bold;">2h 35min</span> to get it by <span id="date" style="font-weight:bold">'+displayEnglishTime()+'</span></div>';
