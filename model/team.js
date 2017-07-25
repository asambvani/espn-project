function createTeam () {
  let id = 0
  return class {
    constructor(city, name){
      this.city = city;
      this.name = name;
      this.id = ++id;
      store.teams.push(this);
    }
    find(id) {
      store.teams.find(function (team) {
        team.id === id;
      });
    }
  }
}
let team = createTeam();
