$(document).ready(function () {
    // PSEUDO-CODE:
  //   1- intercept the form submission event using jQuery
  $('form').on('submit', function(event){
  //   2- prevent the default action for that event from happening
    event.preventDefault();
  //   3- generate a random number between 1 and 6 using JavaScript
    var randomnumber=Math.floor(Math.random()*5 + 1);
  //   4- use jQuery to submit an AJAX post to the form's action

    $.post("/rolls",{value: randomnumber}, function(result){
  //   5- when the AJAX post is done, replace the contents of the "#die" DIV 
  //      in the DOM using jQuery
       // console.log(result);
       // alert(result);
       //Why doesn't the below item work?
      // $("#die").html(result);
      $("body").html(result);

    });
  });
});
