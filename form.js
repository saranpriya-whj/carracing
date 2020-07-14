class Form{
    constructor(){
this.button=createButton("play");
this.input=createInput("name");
this.greeting=createElement("h3");
  this.title=createElement("h3");
  }
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    
    }
        display(){
        
        this.title.html("car racing game");
       this.title.position(displayWidth/2,0);
        this.input.position(displayWidth/2,displayHeight/2);
        this.button.position(displayWidth/2,displayHeight/2+30);
        this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount+=1;
        player.id=playerCount;
       player.update();
       player.updateCount(playerCount);
       this.greeting.html("Hello"+ player.name);
       this.greeting.position(130,160);

        })
     }
      
      
}