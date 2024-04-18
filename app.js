const formEl = document.querySelector('form');
const playerName = document.querySelector('#playername')
const submit_bt = document.querySelector('#submit_bt')
const resultsContent = document.querySelector('.results_content')
const errorMsg = document.querySelector('.error_msg')

// const player = document.querySelector('.Player')
// const age = document.querySelector('.age')
// const games = document.querySelector('.games')
// const gamesStarted = document.querySelector('.games_started')
// const minutesPlayed = document.querySelector('.minutes_played')
// const fieldGoals = document.querySelector('.field_goals')
// const AST = document.querySelector('.AST')
// const STL = document.querySelector('.STL')
// const BLK = document.querySelector('.BLK')
// const team = document.querySelector('.team')
// const season = document.querySelector('.season')



// const url = `https://nba-stats-db.herokuapp.com/api/playerdata/name/jrue`





const fetchStats = async () => {



    // const res = await axios.get(`https://nba-stats-db.herokuapp.com/api/playerdata/name/${playerName.value}`)
    // const feedback = res

    // console.log(feedback)




    
    if (!playerName.value) {
        // errorMsg.innerHTML = 'FAILED, ENTER PLAYER NAME!!'
        resultsContent.innerHTML = 'FAILED, ENTER PLAYER NAME!!'
    }
    else {

        try {
            const res = await axios.get(`https://nba-stats-db.herokuapp.com/api/playerdata/name/${playerName.value}`)
            const feedback = res.data.results[0]

            const { player_name, age, games, games_started, minutes_played, field_goals, AST: assists, STL: steals, BLK: blocks, team, season } = feedback;

            // console.log(feedback)

        
            resultsContent.innerHTML = `<div class="results_container">
            <div class="results" >
            <h3>${player_name} seasonal stats:</h3>
            <div class="text_data">
            <p>Player name : ${player_name}</p>
            <p>age: ${age}</p>
            <p>games: ${games} </p>
            <p>games_started: ${games_started} </p>
            <p>minutes_played : ${minutes_played} </p>
            <p>field_goals : ${field_goals} </p>
            <p>AST: ${assists} </p>
            <p>STL: ${steals} </p>
            <p>BLK: ${blocks} </p>
            <p>team: ${team} </p>
            <p>season: ${season} </p>
            </div>
            </div>
            </div>`

            playerName.value = '';

        }
        catch (err) {
            // errorMsg.innerHTML = `FAILED`
            resultsContent.innerHTML = `ERROR!!, ${err}`;
        }
    }
}

            
        
    

   
   
   
    

   
        
   
    
    
    



formEl.addEventListener('submit', function (e) {
    e.preventDefault();

    fetchStats();
})