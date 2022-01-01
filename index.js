
   // function superbowlWin(record) {
      //  
       // return winningGame.year;

function superbowlWin(record) {
    //const winningGame = record.find(game => game.result === 'W');


    //let winningYear = record.find((record) => record.result === "W");
    //if (winningGame) {
      //return winningGame;
   // } else {
    //    return undefined

  
  const superbowlWon = record.find(record => record.result === "W")
  if (superbowlWon) {
      return superbowlWon.year;
  } else {
      return undefined;
  }
}
