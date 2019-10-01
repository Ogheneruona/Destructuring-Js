// Destructuring

const obj = {
  player: "Messi",
  experience: 100,
  wizardLevel: false
}

const player = obj.player;
const experience = onj.experience;
let wizardLevel = obj.wizardLevel;

//Destructured as
const {player, experience} = obj;
let {wizardLevel} = obj;
