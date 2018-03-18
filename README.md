# projectTwo
Team project TWO - Team members are Frederick Acorda, Vanessa Davis, Matthew Steward, Bob Stewart, Venkat Venkataraman

MAGIC GAME SET-UP REQUIREMENTS AND SPECIFICATIONS
 
User journey:
User:
Select how many games they will be playing.
Input which users are playing.




Authentication of user
Associate an user with a commander (e.g., Freya, Mogus) - could be an admin who adds players and add cards
Number of tables and given max players, how the table breakouts
Determines number of games

General
Maintain array of 25 custom cards as an array (card descriptions listed below) (link to card art)
Draw of 5 random cards per game
Users matched to their commanders
Maintain leaderboard with standings – nice to have but not absolute requirement

Table Layout
Four players – one pod of 4.
Five players – one pod of 5.
Six players – two pods of 3
Seven players – one pod of 4 and one pod of 3.
Eight players – two pods of 4.
Nine players – one pod of 5 and one pod of 4 .
Ten players – two pods of 5
Eleven players – two pods of 4 and one pod of 3 
Twelve players – three pods of 4.

 
User Interface (HTML/CSS)
Bootstrap for displaying selected cards
	Other styling candidates - Grid/Skeleton

Suggestions for card names as user begins typing (nice to have)
 
Client Side Logic (Javascript)
How many games (2 games max)
Cards as an array of objects
 
GET/POST
 
ORM
 
Database (mySQL/Sequelize)
 
Server Side Logic (Node.js)
 Functions:
Selecting 25 cards
Pulling 5 random cards out of that, Remove from array for game 1 and game 2
Store in database
Randomizing the amount of players per table

Authentication
User (role) authentication
Admin (role) authentication
 
Npm (magic API)
Npm install mtg-...
Supplies the commander cards


Vanessa Davis + Fred - Front-end and CSS

Bob+Matt - back end

Venkat - SQL Database, Main Repo


Specialty Card Descriptions:
Army of the Faceless
Control 3 or more face down creatures.
1
Boundless Realms
Control 25 or more lands.
1
Braingeyser
Draw 20 or more cards in one turn.
1
Burn It All
Deal 12 or more damage in one turn with targeted spells and / or abilities.
1
Crumbling Sanctuary
Be the first to have 10 cards or less in your library.
2
Earthquake
Eliminate all remaining players including yourself.
1
Enchanted for Victory
Attach 4 or more auras to the same creature.
1
Equipped for Battle
Equip a creature with 4 or more equipments.
1
General Death
Eliminate a player with general damage. (That player must have been dealt 21 or more combat damage by a general and not lose only due to having 0 ore less life or 10 or more poison counters.
1
Healing Hand
During one turn, cause an opponent to gain 10 or more life or prevent 10 or more damage that would be dealt to an opponent. (You need to cause a result that wouldn't have happened without your help. Preventing damage requires using an effect that says it prevents damage.)
1
Instant Death
Eliminate an opponent during another opponent's turn.
1
Legends Rule!
Control 5 or more legendary creatures.
2
Masochist
Deal 6 or more damage to yourself in one turn.
1
Necropotence
Cause yourself to lose 20 or more life in a single turn.
2
Prolific
Control 10 or more creature tokens.
1
Resource Management
Deal Exact Lethal non general damage to a player. (Infect damage that brings a player to exactly 10 poison counters counts, as does damage dealt by a general that brings a player to 0 life. Damage that uses an effect to make a player lose doesn't count.)
1
Sad, but True
Eliminate an opponent with a 1/1 creature.
1
Sharing
Use a sing spell or activated ability to make an opponent draw 3 or more cards. (Multiple activations of the same ability doesn't count, nor does casting the same spell multiple times in a row.)
1
Super Friends
Control 3 or more planeswalkers.
1
Survivor
Survive being attacked for lethal damage on three different occasions. (Damage being lethal includes continuous effects and triggered abilities, but not blockers spells, or activated abilities. Lethal damage invokes state based actions.)
1
The World Spell
Control 5 or more non-aura enchantments
1
Third Time's the Charm
Resolve your general from the command zone 3 times.
1
To Mount Doom
Destroy or exile a Sol Ring an opponent controls.
1
Turn Aside
Use a spell or ability to protect yourself and/or a permanent you control from a spell or ability by making its target illegal.
1
Twenty-One
Control two creatures with total power of 21
1


