function id(element) {
   return document.getElementById(element);
}

function init(){

   id("gotoPage2Butt").addEventListener("click", function(){
      gotoPage2();
      noti();
      showDatePicker();
      showTimePicker();
  });

  id("gotoPage3Butt").addEventListener("click", function(){
         gotoPage3();
         noti();
         showDatePicker();
         showTimePicker();
     });

   id("loadListButt").addEventListener("click", function(){
      loadList();
  });

}

function gotoPage2(){
   $.mobile.navigate("#page2", {info:"info goes here"});
}

function gotoPage3(){
   $.mobile.navigate("#page3", {info:"info goes here"});
}


function loadList(){
   var data = {"notifications":["08/12/2017 - 11:30","07/12/2017 - 12:30","22/12/2017 - 15:30"]}

   var myHtml ="";

   for (i=0;i<data.notifications.length;i++){
       myHtml += "<li>" + data.notifications[i] + "</li>";
   }

  id("myList").innerHTML = myHtml;


}


function noti(){
cordova.plugins.notification.local.schedule({
    title: 'Date Alert',
    text: moment().format('MMMM Do YYYY, h:mm:ss a'),
    foreground: true
});
}

function showDatePicker(){

    var options = {
    type: 'date',         // 'date' or 'time', required
    date: new Date(),     // date or timestamp, default: current date

};

window.DateTimePicker.pick(options, function (date) {
    $("#DatePrint").empty();
    $("#DatePrint").append(moment(date).format('MMMM Do YYYY'));
    DateTime = {year:moment(date).format('YYYY'),month:moment(date).format('MM'), day:moment(date).format('DD')};
});

}

function showTimePicker(){
    var options = {
    type: 'time',         // 'date' or 'time', required
    date: new Date(),     // date or timestamp, default: current date

};

window.DateTimePicker.pick(options, function (date) {
    $("#TimePrint").empty();
    $("#TimePrint").append(moment(date).format('h:mm a'));
    DateTime.hour = moment(date).format('HH');
    DateTime.minute = moment(date).format('mm');

});

}