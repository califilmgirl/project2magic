// added by Venkat

var leagueIDInDB;

$(document).ready(function() {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    $.get("/api/user_data1").then(function(data) {
      // console.log("This is what I want to add: ", data.email);
      leagueIDInDB = data.id;
      $(".created-name").text(data.email);
    });

  });   //$(document)

  var createLeagueForm = $("form.createleaguename");
  var leagueNameInput = $("input#leagueName");

  var createleagueplayersForm = $("form.createleagueplayers");
  var leagueName;
  var leaguePlayersArray = [];

  // When the form is submitted, we validate there's an email and password entered
  createLeagueForm.on("submit", function(event) {
    event.preventDefault();
    // console.log(createLeagueForm);
    leagueName = leagueNameInput.val().trim();
    console.log("Caputured League Name:", leagueName);

    //Now disable the LeagueName and associated submit button and enable the players input on page
    document.getElementById("leagueName").disabled = true;
    document.getElementById("addLeague").disabled = true;
    let playerNameArray = document.getElementsByName("players[]");
    for (var i = 0; i < playerNameArray.length; i++)
        playerNameArray[i].disabled = false;
    document.getElementById("submitPlayers").disabled = false;
  });

  createleagueplayersForm.on("submit", function(event) {
    let playerNameArray = document.getElementsByName("players[]");
    // console.log(playerNameArray);
    for (var i = 0; i < playerNameArray.length; i++) {
      // console.log(playerNameArray[i].value.trim());
      if (playerNameArray[i].value.trim() !== "")
        leaguePlayersArray[i] = playerNameArray[i].value.trim();
    }
    console.log(leaguePlayersArray);

    // Constructing a newLeague object to hand to the database
    var newLeague = {
      leagueName: leagueName,
      leaguePlayers: JSON.stringify(leaguePlayersArray),
      leaguePoints: 0,
      leagueStanding: "LAST",
      leagueCurrentGames: 0,
      UserId: leagueIDInDB
    };
    console.log(newLeague);
    var leaguePlayersTest = JSON.stringify(leaguePlayersArray);
    console.log("Reverse stringify test for the player array: ", JSON.parse(leaguePlayersTest));
    submitLeague(newLeague);
  });

    // submitLeague does a post to our "api/createleague" route and if successful, redirects us the the "initial" page
    function submitLeague(newLeague) {
      $.post("/api/createleague", newLeague, function() {
        // window.location.href = "/login";
      });
    }







    // var userData = {
    //   email: emailInput.val().trim(),
    //   password: passwordInput.val().trim()
    // };

  // $(".addLeague").click(function() {
  //   console.log("NEW LEAGUE NAME");
  //   if (!leagueName.val().trim()) {
  //     return;
  //   }
  //   var newLeagueName = leagueName;
  //   console.log(leagueName);

  // });

  // function submitPlayer(stats) {
  //   $.post("/api/gameInfo", stats, function(){
  //     console.log("data sent");
  //     location.reload();
  //   });
  // };
