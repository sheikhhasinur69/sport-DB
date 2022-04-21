const allPlayers = () => {
    document.getElementById("player-container").innerHTML ='';
    const searchValue = document.getElementById('search-box').value;

    const url = `
    https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}
    `
    fetch(url)
    .then(res => res.json())
    .then(data => showPlayerDetails(data.player))
    
}

const showPlayerDetails = (players) => {
        for(const player of players){
            const parent = document.getElementById('player-container');
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card border p-5">
          <div class="pro-pic">
              <img class="w-25" src="${player.strThumb}" alt="">
              <h2>Name:${player.strPlayer}</h2>
              <h2>Country:${player.strNationality}</h2>
              <p></p>
              <div class="allbutton">
                  <button class="btn btn-danger">Delete</button>
                  <button onclick="details('${player.idPlayer}')" class="btn btn-success">Details</button>
              </div>
          </div>
      </div>
        `
        parent.appendChild(div);
        console.log(player);
        }
        
};

const details = (id) => {
    const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => setDetails(data.players[0]))
}

const setDetails = (info) => {
    console.log(info)
    document.getElementById('details-container').innerHTML =
     `
    <div>
        <img class="w-50" src="${info.strThumb}" alt="">
         <h1>Name: ${info.strPlayer}</h1>
         <h2>Nationality: ${info.strNationality}</h2>
         <h2>Height: ${info.strHeight}</h2>
         <h2>Weight: ${info.strWeight}</h2>
         <h2>Side: ${info.strSide}</h2>
    </div>
    `;
};



