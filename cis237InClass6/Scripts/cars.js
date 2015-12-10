﻿

//You need this first document ready function almost always. Code goes inside it.
$(document).ready(function () {

    //This is a jQuery selector. The '.' is to select an element with the class that, 
    //follows the '.', the '#' is to select an element with the id that follows the '#'.
    $(".dataRow").click(function (firedEvent) {
        console.log("the event fired");
        
        //this line will redirect the browser to this URL.
        document.location = "/Cars/Edit/0C02938";

    });


});