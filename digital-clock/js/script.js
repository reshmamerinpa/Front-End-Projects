function clock() {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var seconds = date.getSeconds();
    var meridiem = "AM";

    if (hour == 0) {
        hour = 12;
    } else if (hour > 12) {
        hour = hour - 12;
        meridiem = "PM"
    }
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (minute < 10) {
        minute = "0" + minute;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    document.getElementsByClassName('time')[0].innerHTML = hour + ":" + minute + ":" + seconds + " " + meridiem;
    setTimeout('clock()', 1000);
}
clock();