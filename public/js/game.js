window.onload = function () {

  var supplementalCardsDiv = document.getElementById("supplementalCardsDiv");

  var gameCount = window.location.href.split("?gameCount=")[1];
  if (!gameCount) {
    gameCount = 1;
  } else {
    gameCount = parseInt(gameCount);
  }
  if (isNaN(gameCount)) {
    gameCount = 1;
  }
  console.log(gameCount)
  Array.prototype.randsplice = function () {
    var randomCard = Math.floor(Math.random() * this.length);
    var randomSplice = this.splice(randomCard, 1);

    return randomSplice[0];
  }

  var cards = ["ArmyOfTheFaceless.png", "BoundlessRealms.png", "Braingeyser.png", "BurnItAll.png", "CrumblingSanctuary.png", "Earthquake.png", "EnchantedForVictory.png", "EquippedForBattle.png", "GeneralDeath.png", "HealingHand.png", "InstantDeath.png", "LegendsRule.png", "Masochist.png", "Necropotence.png", "Prolific.png", "ResourceManagement.png", "SadButTrue.png", "Sharing.png", "SuperFriends.png", "Survivor.png", "TheWorldSpell.png", "ThirdTimesTheCharm.png", "ToMountDoom.png", "TurnAside.png", "Twenty-One.png"];

  var newDeck = [];
  var gameDecks = {};
// gameDecks['chris'] = 22;
// gameDecks['josh'] = 'cat';
// gameDecks['rob'] = ['cat','dog'];
// console.log(gameDecks);

  for (var j = 0; j < gameCount; j++) {
    gameDecks[j] = [];
    for (var i = 0; i < 5; i++) {
      // newDeck.push(cards.randsplice());
      gameDecks[j].push(cards.randsplice());
    }
  }
  console.log(gameDecks);

  let str = `<h4 class="card-title">Supplemental Cards</h4>
                <br>`;
  for (var j = 0; j < gameCount; j++) {
    str += `<div class="card-deck">`;
    for (var i = 0; i < gameDecks[j].length; i++) {
      str += `
      <div class="card w3-hover-shadow">
        <img class="card-img-top" src="images/${gameDecks[j][i]}" alt="image">
      </div>
    `
    }
    str += `</div><br>`;
  }
  supplementalCardsDiv.innerHTML = str;


$('.card-deck').addClass('animated infinte flipInX');
$('.card-body').addClass('animated infinte slideInRight');
// console.log(newDeck);
//   console.log(cards);
}
