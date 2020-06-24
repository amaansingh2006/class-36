class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerRef = database.ref('playerCount');
      playerRef.once("value");
      if (playerRef.exists()){
        playerCount = playerRef.val();
        player.getCount();
      }
     
      form = new Form()
      form.display();
    }
  }

  play(){
    form.hide();
    text("GAME START", 150, 100);
    Player.getPlayerInfo();
    if(allPlayers !== undefined){
var displayPosition = 100;
displayPosition = displayPosition + 20;
text("name " + allPlayers[plr])
    }

  }
}
