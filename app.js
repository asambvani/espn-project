store = {teams: [], players: []};
$(function() {
  let a = new team("Greenbay", "Packers");
  let b = new team("Carolina", "Panthers");
  let c = new team("Arizona", "Cardinals");
  new player("DJ", a, 50, "Bahamas", 5);
  new player("Yelstin", a, 26, "Hawaii", 47);
  new player("Bob Ross", a, 57, "Florida", 58)
  new player("Ice T", a, 88, "the streets", 80)
  new player("Jeff", b, 22, "Arkansas", 155);
  new player("William", c, 49, "Phillyburg", 154);
  new player("DJ", b, 50, "Bahamas", 5);
  new player("Yelstin", b, 26, "Hawaii", 47);
  new player("Bob Ross", b, 57, "Florida", 58)
  new player("Ice T", b, 88, "the streets", 80)
  new player("Jeff", c, 22, "Arkansas", 155);
  new player("William", c, 49, "Phillyburg", 154);

store.teams.forEach( function(team) {
  $('table.table-team').append(`<tr class="team" id="team-${team.id}"> <td>${team.city}</td> <td>${team.name}</td> </tr>`)
});

function renderPlayers() {
  $('.player-destroy').parents('tr').remove()
  store.players.forEach( function(player) {
    let foundTeam = store.teams.find(function(team){return team.id === player.teamID})
    $('table.table-players').append(`<tr> <td>${player.name}</td> <td>${player.age} years old</td> <td>${foundTeam.name}</td> <td class='player-destroy' id= 'player-${player.id}'> X </td></tr>`)
  });
}
renderPlayers()
  function teamDropDown() {
    $('body').on('click', 'table.table-team tr.team', function(){
      let teamID = parseInt(this.id.split('-')[1])
      let foundTeam = store.teams.find(function(team){ return team.id === teamID})
      let foundPlayers =  store.players.filter(function(player){return player.teamID === foundTeam.id})
      foundPlayers.sort(function (a, b){
        return b.points - a.points
      })
      $('.player-dropdown').remove()
      $(this).after(`<tr class='player-dropdown'><td>Player 1: ${foundPlayers[0].name}</td></tr><tr  class='player-dropdown'><td>Player 2: ${foundPlayers[1].name}</td></tr><tr class='player-dropdown'><td>Player 3: ${foundPlayers[2].name}</td></tr>`)
    });
  };
  teamDropDown()
  function playerDestroy() {
    $('body').on('click', '.player-destroy', function() {
      let playerId = parseInt(this.id.split('-')[1])
      let foundPlayer = store.players.find(function (player) {
          return player.id === playerId
      })
      let playerIndex = store.players.indexOf(foundPlayer)
      store.players.splice(playerIndex, 1)
      renderPlayers()
  })}
  playerDestroy()
})
