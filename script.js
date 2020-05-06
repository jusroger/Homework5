$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));

var currentTime = moment();
currentTime = currentTime.startOf("hour");
var beforeTime = moment().startOf('day').add(8, "hours");

for (let i = 0; i < 9; i++) {
    var currentHour = beforeTime.add(1, "h");
    var currentHourText = currentHour.format('hh:mm A');
    $(".block"+(i+1)).text(currentHourText);
}

function testTime() {
    var now = moment()
    for (let i = 9; i < 18; i++) {
        var hour = moment().startOf('day').add(i, "hours");
        hour = hour.startOf("hour");
        var $selector = $(".form" + i);
        if (now.format('HH') === hour.format('HH')) {
            $selector.addClass("present");
        } else if (now.isBefore(hour)){
            $selector.addClass("past");
        } else {
            $selector.addClass("future");
        }
    }
}

testTime();
var x = [9, 10, 11, 12, 13, 14, 15, 16, 17];
for (var i = 0; i < x.length; i++) {
    var dataHour = localStorage.getItem(x[i]);
    $(".form" + x[i]).val(dataHour);
}

$(".saveBtn").click(function () {
    event.preventDefault();
    var formValue = $(this).siblings(".form-control").val();
    var listItem = $(this).parent().data("hour");
    localStorage.setItem(listItem, formValue);
});