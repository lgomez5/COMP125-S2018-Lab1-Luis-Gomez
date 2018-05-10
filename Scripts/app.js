/* Custom JS Goes Here*/

//IIFE -Immediately Invoked Function Expression

//anonymous self executing function

(function(){

    function Start(){
        //Local Variable to retur, it will be check at inspect Console on Chrome
        var title = document.title;

    console.log("App Started!");
    console.log("-----------------------");
    console.log("Title: " + title);
}

window.onload = Start;
})();