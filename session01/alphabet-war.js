// https://www.codewars.com/kata/59377c53e66267c8f6000027/train/javascript
const leftTeam = {
  w: 4,
  p: 3,
  b: 2,
  s: 1,
};

const rightTeam = {
  m: 4,
  q: 3,
  d: 2,
  z: 1,
};
function alphabetWar(fight) {
  // initialise scores for both teams
  let leftScore = 0;
  let rightScore = 0;

  // loop over the input argument and check every letter
  for (let i = 0; i < fight.length; i++) {
    const unit = fight[i];
    // if letter is from team left
    if (leftTeam[unit]) {
      // add letter score to left team
      leftScore += leftTeam[unit];
    }
    // else if letter is from team right
    if (rightTeam[unit]) {
      // add letter to right team
      rightScore += rightTeam[unit];
    }
    // else ignore the letter
  }
  // compare scores and return the appropriate answer
  return leftScore > rightScore
    ? 'Left side wins!'
    : rightScore > leftScore
    ? 'Right side wins!'
    : "Let's fight again!";
}

const units = {
  w: -4,
  p: -3,
  b: -2,
  s: -1,

  m: 4,
  q: 3,
  d: 2,
  z: 1,
};

function alphabetWar(fight) {
  let result = 0;
  for (let i = 0; i < fight.length; i++) {
    const unit = fight[i];
    if (units[unit]) {
      result += units[unit];
    }
  }
  return result
    ? (result < 0 ? 'Left' : 'Right') + ' side wins!'
    : "Let's fight again";
}

function alphabetWar(fight) {
  const result = [...fight].reduce((score, unit) => {
    if (units[unit]) {
      score += units[unit];
    }
  }, 0);
  return result
    ? (result < 0 ? 'Left' : 'Right') + ' side wins!'
    : "Let's fight again";
}
console.log(alphabetWar('z'), 'Right side wins!');
console.log(alphabetWar('zdqmwpbs'), "Let's fight again!");
console.log(alphabetWar('zzzzs'), 'Right side wins!');
console.log(alphabetWar('wwwwww'), 'Left side wins!');
