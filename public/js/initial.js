// added by Venkat

$(document).ready(function() {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    $.get("/api/user_data").then(function(data) {
      $(".member-name").text(data.email);
    });

    var leagueForm = $("#league");
    var leagueName = $("#leagueName");
    var games = $("#numberOfGames");
    var name = $("#name");
    var commander = $("#commander");
    var league = "Austinerds";
    var leaguePlayers;
    var gameSize = [];

    getLeagueData(league);
    // $(leagueForm).on("click", ".btn-primary", getLeagueData);
    var url = window.location.search;
    var gameId;
    var LeagueId;

    $(".addPlayer").click("#name", function() {
      console.log("NEW PLAYER")
      if (!name.val().trim()) {
        return;
      }
      var playerData = {
        playerName: name.val().trim(),
        checkedIn: true,
        commander: "none",
        assignedTable: 0,
        points: 0,
        LeagueId: 1
      };
      submitPlayer(playerData);
    });

    function submitPlayer(stats) {
      $.post("/api/gameInfo", stats, function(){
        console.log("data sent");
        location.reload();
      });
    };


    function getLeagueData() {
      $.get("/api/gameInfo", renderPlayerList);
    }


    function renderPlayerList(data) {
      leaguePlayers = data;
      console.log("data", leaguePlayers);
      console.log(data.length);
      for (var i = 0; i < data.length; i++) {
        var newRow = $("<div class='row'>")
        var player = $("<div class='col-md-4 form-check teamMember'>");
        var inputElement = $("<input id=" + data[i].id + " class='form-check-input checkbox position-static' type='checkbox'>");

        // add h6 tag as well
        var labelElement = $("<label for='leagueName'><h6>"+data[i].playerName+"</h6></label>")
        player.append(inputElement);
        player.append(labelElement);

        var commander = $("<div class='col-md-4'><h6><span>"+data[i].commander+"<button class='btn btn-outline-secondary' type='button'>Edit</button></span></h6></div>");
        // var commander = $("<input type='text' class='form-control' id='commander'"+[i]+"readonly><section class='input-group-addon'><span class='glyphicon glyphicon-pencil' onclick=editcommander+[i+1]+"></span></div>");
        // // $(commander).append(editCommander);
        // $("#commanderList").append(commander);
        var playerPoints = $("<div class='col-md-4'>"+data[i].points+"<span><button class='btn btn-outline-secondary' type='button'>Edit</button></span></div>");
        // $("#points").append(playerPoints);
        $(newRow).append(player);
        $(newRow).append(commander);
        $(newRow).append(playerPoints);
        $(".dynamicPlayers").append(newRow);
      };
    }
    // adds and removes check property when clicked
    $("#playerList").click(function() {
      $(this).prop("checked");
    });

    $(".start").click(function(event) {
      event.preventDefault();
      // store the number of games selected into the gameCount variable
      var gameCount = $("#exampleFormControlSelect1").val().trim();
      // clear local storage
      localStorage.clear();
      // store the the gameCount amount into an object with a key of gameCount
      localStorage.setItem("gameCount", gameCount);
      // iterate through all the elements with the checkbox class to see if they are checked
      $(".checkbox").each(function(){
        if ($(this).prop("checked")) {
          // if checked assign the element id to the key "id" with an addtional key value to change the checkedIn value to true, then push into the gameSize array...each key-value pair will be called during the PUT Ajax request
          gameSize.push({
            "id": $(this).attr("id"),
            "checkedIn": true
          });
        };
        // possibly put an else statement with to make checkedIn false and tableAssignment null

        if (gameSize.length <= 1) {
          console.log("must be more than one")
          return;
        } else {
          console.log("more than 1", gameSize);
          tableAssignment(gameSize);
        }
      });
    });

    function tableAssignment(gameLayout) {
      var numOfTables;
      var counter = 1;
      var gamers = gameLayout.length;

      if (gamers < 4) {
        numOfTables = 1;
      } else {
        numOfTables = Math.floor(gamers / 4);
        var overflow = gamers % 4;
        if (gamers < 11 && overflow == 2) {
          numOfTables += 1;
        } else if (overflow > 2) {
          numOfTables += 1;
        };
      };

      for (var i = 0; i < gamers; i++) {
        // has to have more than 5 people to generate more than 1 table
        gameLayout[i].assignedTable = counter;
        counter ++;
        if (counter > numOfTables) {
          counter = 1;
        };
      };
      console.log(gameLayout);
      updateTables(gameLayout);
    }

    function updateTables(assignments) {
      console.log("assignments", assignments);
      var newAssign = [];
      for (var i = 0; i < assignments.length; i++) {
        $.ajax({
          method: "PUT",
          url: "/api/gameInfo",
          data: assignments[i]
        })
        .then(function(newValues) {
          console.log(newValues);
          newAssign.push(newValues);
        });
      console.log("values", newAssign);
      }
    }

});
