console.log('logging!');
console.log(window.location.href);

if (window.location.href == "https://www.google.com/calendar/render") {
  chrome.extension.sendRequest({redirect: "https://calendar.sunrise.am"});
}
