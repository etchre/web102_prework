/*****************************************************************************
 * Challenge 2: Review the provided code. The provided code includes:
 * -> Statements that import data from games.js
 * -> A function that deletes all child elements from a parent element in the DOM
*/

// import the JSON data about the crowd funded games from the games.js file
import GAMES_DATA from './games.js';

// create a list of objects to store the data about the games using JSON.parse
const GAMES_JSON = JSON.parse(GAMES_DATA);

// remove all child elements from a parent element in the DOM
function deleteChildElements(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

/*****************************************************************************
 * Challenge 3: Add data about each game as a card to the games-container
 * Skills used: DOM manipulation, for loops, template literals, functions
*/

// grab the element with the id games-container
const gamesContainer = document.getElementById("games-container");

// create a function that adds all data from the games array to the page
//games -> an array of objects
function addGamesToPage(games) {

    // loop over each item in the data
    games.forEach((game) => {
        // create a new div element, which will become the game card
        let newDiv = document.createElement("div");

        // add the class game-card to the list
        newDiv.classList.add('game-card');

        // set the inner HTML using a template literal to display some info
        // about each game
        // TIP: if your images are not displaying, make sure there is space
        // between the end of the src attribute and the end of the tag ("/>")
        newDiv.innerHTML = `
            <div>
                <img src=${game.img} class='game-img'/>
            </div>
        `;
        newDiv.innerHTML += `
            <div class='game-card-text'>
                <p class='game-card-title'>${game.name}</p>
                <p class='game-card-desc'>${game.description}</p>
            </div>
        `;

        // append the game to the games-container
        gamesContainer.append(newDiv);

        //calculate length of pledge progress bar
        let pledge_progress = (game.pledged / game.goal);
        let pledge_progress_uncapped = pledge_progress;
        let pledge_progress_atleast1 = pledge_progress;
        pledge_progress *= 100;
        pledge_progress = pledge_progress >= 100 ? 100: pledge_progress;
        pledge_progress_atleast1 = pledge_progress_atleast1 <= 1 ? 0 : pledge_progress_atleast1;

        let font_size = (2 + (pledge_progress_atleast1/8))

        newDiv.innerHTML += `
            <div class='game-card-money-spread'>
                <div class='money-spread-outline'>
                </div>
                <div 
                    class='money-spread-bar' 
                    style='
                        width: ${pledge_progress}%;
                    '
                >
                </div>
                <div class='money-spread-stats'>
                    <div class='money-percent-container'>
                        <p class='money-stats-percent'>
                            ${Math.round(pledge_progress_uncapped*100)}%
                        </p>
                        <p class='money-percent-flavor'>
                            of goal reached
                        </p>
                    </div>
                </div>
            </div>
        `
    });
}

// call the function we just defined using the correct variable
// later, we'll call this function using a different list of games
addGamesToPage(GAMES_JSON);

/*************************************************************************************
 * Challenge 4: Create the summary statistics at the top of the page displaying the
 * total number of contributions, amount donated, and number of games on the site.
 * Skills used: arrow functions, reduce, template literals
*/

// grab the contributions card element
const contributionsCard = document.getElementById("num-contributions");

// use reduce() to count the number of total contributions by summing the backers
const total_contributions = GAMES_JSON.reduce((acc, game) => {
    return acc + game.backers;
}, 0);

// set the inner HTML using a template literal and toLocaleString to get a number with commas
contributionsCard.textContent = `${total_contributions.toLocaleString('en-US')}`;

// grab the amount raised card, then use reduce() to find the total amount raised
const raisedCard = document.getElementById("total-raised");

const total_raised = GAMES_JSON.reduce((acc, game) => {
    return acc + game.pledged;
}, 0);

// set inner HTML using template literal
raisedCard.textContent = `$${total_raised.toLocaleString('en-US')}`;

// grab number of games card and set its inner HTML
const gamesCard = document.getElementById("num-games");
const total_games = GAMES_JSON.length;
gamesCard.textContent = `${total_games}`;


/*************************************************************************************
 * Challenge 5: Add functions to filter the funded and unfunded games
 * total number of contributions, amount donated, and number of games on the site.
 * Skills used: functions, filter
*/

// show only games that do not yet have enough funding
function filterUnfundedOnly() {
    deleteChildElements(gamesContainer);

    // use filter() to get a list of games that have not yet met their goal
    let filtered_list = GAMES_JSON.filter((game) => {
        if(game.pledged < game.goal) {
            return true;
        } 
        return false;
    });

    // use the function we previously created to add the unfunded games to the DOM
    addGamesToPage(filtered_list);
}

// show only games that are fully funded
function filterFundedOnly() {
    deleteChildElements(gamesContainer);

    // use filter() to get a list of games that have met or exceeded their goal
    let filtered_list = GAMES_JSON.filter((game) => {
        if(game.pledged >= game.goal) {
            return true;
        } 
        return false;
    });

    // use the function we previously created to add the unfunded games to the DOM
    addGamesToPage(filtered_list);
}

// shows only games that match the string
// meant for use with the search bar
function filterByName(name) {
    deleteChildElements(gamesContainer);

    let filtered_list = GAMES_JSON.filter((game) => {
        if(game.name.toLowerCase().includes(name.toLowerCase())) {
            return true;
        }
        return false;
    });

    addGamesToPage(filtered_list);
}

const games_anchor = document.getElementById('games-anchor');
// the on press search function for the search bar
function searchBar() {
    let input = document.getElementById('search-bar').value;

    //only do anything if there is any input
    if(input.length >= 1) {
        filterByName(input);

        //scroll down to the games section to show the searched for games
        games_anchor.scrollIntoView();
    }
}

const searchBtn = document.getElementById('search-button');
searchBtn.addEventListener(
    'click',
    searchBar
);

//allows the enter key to be used to submit search query
const searchInput = document.getElementById('search-bar');
searchInput.addEventListener(
    'keydown',
    (event) => {
        if(event.code === 'Enter') {
            event.preventDefault();
            searchBar();
        }
    }
);

// show all games
function showAllGames() {
    deleteChildElements(gamesContainer);

    // add all games from the JSON data to the DOM
    addGamesToPage(GAMES_JSON)
}

// select each button in the "Our Games" section
// and add event listeners with the correct functions to each button
const unfundedBtn = document.getElementById("unfunded-btn");
unfundedBtn.addEventListener(
    'click',
    filterUnfundedOnly
);

const fundedBtn = document.getElementById("funded-btn");
fundedBtn.addEventListener(
    'click',
    filterFundedOnly
)

const allBtn = document.getElementById("all-btn");
allBtn.addEventListener(
    'click',
    showAllGames
)

/*************************************************************************************
 * Challenge 6: Add more information at the top of the page about the company.
 * Skills used: template literals, ternary operator
*/

// grab the description container
const descriptionContainer = document.getElementById("description-container");

// use filter or reduce to count the number of unfunded games
const unfunded_games = GAMES_JSON.reduce((acc, game) => {
    //if game did not meet the goal, increase running total by 1, 
    // otherwise keep the running total the same
    return game.pledged < game.goal ? acc + 1 : acc;
}, 0);

// create a string that explains the number of unfunded games using the ternary operator
const displayStr = `Currently a total of $${total_raised.toLocaleString('en-US')} has been raised for ${total_games} games. Right now ${unfunded_games} ${unfunded_games == 1 ? 'game' : 'games' } remain unfunded. We need your help to fund ${unfunded_games == 1 ? 'this amazing game!' : 'these amazing games!' } `;

// create a new DOM element containing the template string and append it to the description container
let displayStrDiv = document.createElement('p');
displayStrDiv.textContent = displayStr;
descriptionContainer.append(displayStrDiv);

/************************************************************************************
 * Challenge 7: Select & display the top 2 games
 * Skills used: spread operator, destructuring, template literals, sort 
 */

const firstGameContainer = document.getElementById("first-game");
const secondGameContainer = document.getElementById("second-game");

const sortedGames =  GAMES_JSON.sort( (item1, item2) => {
    return item2.pledged - item1.pledged;
});

showAllGames();

// use destructuring and the spread operator to grab the first and second games
const [firstGame, secondGame, ...rest] = sortedGames;

// create a new element to hold the name of the top pledge game, then append it to the correct element
let topPledgeDiv = document.createElement('p');
topPledgeDiv.textContent = `${firstGame.name}`;
firstGameContainer.append(topPledgeDiv);

// do the same for the runner up item
let runnerUpDiv = document.createElement('p');
runnerUpDiv.textContent = `${secondGame.name}`;
secondGameContainer.append(runnerUpDiv);