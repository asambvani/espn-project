function createPlayers() {
  let id = 0
  return class {
    constructor(name, team, age, hometown, points){
      this.name = name;
      this.id = ++id;
      this.age = age;
      this.hometown = hometown
      this.points = points
      this.teamID = team.id;
      store.players.push(this);
    }
  }
}
let player =  createPlayers()
