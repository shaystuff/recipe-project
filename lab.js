var d = new Date();
var dateEl = document.getElementById("date");
var tableHeadEl = document.getElementsByClassName("thead-dark");

dateEl.innerHTML = d.toDateString();

var items = document.getElementsByTagName('th');

items.forEach(item => {
    item.innerHTML = (d.toDateString + item);
});
