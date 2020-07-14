class Player{
    constructor(){
this.id=null;
this.name=null;
this.distance=0;
    }
    getCount(){
        var playerCountref = database.ref("playerCount");
        playerCountref.on("value",(data)=> {
            playerCount=data.val();
        
        })
}
updateCount(Count){
    database.ref("/").update({ 
        playerCount:Count
    })

    
}
update(){
    var playerindex="players/player"+this.id;
    database.ref(playerindex).set({
        name:this.name,
        distance:this.distance
    
    })
}
static getplayerinfo(){
    var playerinforef = database.ref("players");
    playerinforef.on("value",(data)=>{
        allplayerinfo=data.val();
    })

    
}

}