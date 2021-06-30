const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot,score,j;
score=0;

var bg = "sprites/bg1.png";
var plinkos=[]
var divisions=[]
var particles=[]
var divisionHeight=300;
var particle;
var count=0;
var gameState='play'

function setup(){
    //var canvas = createCanvas(480,800);
    createCanvas(800, 800);
    engine = Engine.create();
    world = engine.world;
    //test1 =new Particle(50,50,50);

    ground = new Ground(width/2,790,width,20);

    for(var k=0;k<=width;k=k+80){
        divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))

    }

    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50){
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
    for(c=100;c<=500;c+=100){
        for(var z=0;z<=width/2;z=z+80){
            text(c,z,height-divisionHeight/2)
        }
    }
    for(o=500;o>=100;o-=100){
        for(var z=width/2;z<width;z=z+80){
            text(o,z,height-divisionHeight/2)
        }
    }

}

function draw(){
    
    background("black");
    
    
    Engine.update(engine);


    ground.display();
    textSize(20)
    text("score: "+score,20,20);
    if(gameState==='play'){
        for(u=0;u<particles.length;u++){
            if(particles[u].y>=height-divisionHeight){
                if(particles[u].x>divisions[0].x&&particles[u].x<divisions[1].x){
                    score+=100
                }
                if(particles[u].x>divisions[1].x&&particles[u].x<divisions[2].x){
                    score+=200
                }
                if(particles[u].x>divisions[2].x&&particles[u].x<divisions[3].x){
                    score+=300
                }
                if(particles[u].x>divisions[3].x&&particles[u].x<divisions[4].x){
                    score+=400
                }
                if(particles[u].x>divisions[4].x&&particles[u].x<divisions[5].x){
                    score+=500
                }
                if(particles[u].x>divisions[5].x&&particles[u].x<divisions[6].x){
                    score+=500
                }
                if(particles[u].x>divisions[6].x&&particles[u].x<divisions[7].x){
                    score+=400
                }
                if(particles[u].x>divisions[7].x&&particles[u].x<divisions[8].x){
                    score+=300
                }
                if(particles[u].x>divisions[8].x&&particles[u].x<divisions[9].x){
                    score+=200
                }
                if(particles[u].x>divisions[9].x&&particles[u].x<divisions[10].x){
                    score+=100
                }
                
            }
        }
    }
   // test1.display()
    
    /*for(j=40;j<width;j+=50){
        for(var row=75; row < height/2;row+=200){
            plinkos.push(new Plinko(j,row))
        }

    }
    for(j= 15;j<width;j+=50){
        for(var row=175; row < height/2;row+=200){
            plinkos.push(new Plinko(j,row))
        }

    }
    */

    
    
    for(var z=0;z<plinkos.length;z++){
        
        plinkos[z].display();
        
    }
    


    if(gameState==='play'){
        for(u=0;u<particles.length;u++){
            console.log("drawing particles")
            particles[u].display();
        }
    }
    

   
    for(var a=0;a<divisions.length;a++){
        divisions[a].display();
    }
    if(count===5){
        gameState='end';
        if(gameState=='end'){
            push();
            textSize(40);
            text("Game Over",width/2-40,height/2);
            pop();
        }
    }
    

    
    

}
function mousePressed(){
    if(gameState==='play'){
        particles.push(new Particle(mouseX,10,10));
        count++
    }
}



    


