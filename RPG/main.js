var mapArray,ctx,currentimgMX,currentimgMY;
var imgMount,imgmain,imgEnemy;
$(document).ready(function(){
    mapArray=[0,1,1,0,0,0,3,1,2];
    ctx=$("#mycanvas")[0].getContext("2d");
    imgmain=new Image();
    imgmain.src="images/spriteSheet.png";
    currentimgMX=0;
    currentimgMY=0;
    imgmain.onload=function(){
        ctx.drawImage(imgmain,0,0,80,130,currentimgMX,currentimgMY,200,200)
    }
    imgMount=new Image();
    imgMount.src="images/material.png";
    imgEnemy=new Image();
    imgEnemy.src="images/Enemy.png";
    imgMount.onload=function(){
        imgEnemy.onload=function(){
            for(var x in mapArray)
                {
                    if(mapArray[x]==1)
                        ctx.drawImage(imgMount,32,65,32,32,x%3*200,Math.floor(x/3)*200,200,200);
                    else if(mapArray[x]==3)
                        ctx.drawImage(imgEnemy,7,40,104,135,x%3*200,Math.floor(x/3)*200,200,200);
                }
        }
    }
})
$(document).keydown(function(Event){
    var targetIX,targetIY,targetBlock,cutI
    Event.preventDefault();
    switch(Event.which){
        case 37:
            targetIX=currentimgMX-200;
            targetIY=currentimgMY;
            cutI=175;
            break;
        case 38:
            targetIX=currentimgMX;
            targetIY=currentimgMY-200;
            cutI=355;
            break;
        case 39:
            targetIX=currentimgMX+200;
            targetIY=currentimgMY;
            cutI=540
            break;
        case 40:
            targetIX=currentimgMX;
            targetIY=currentimgMY+200;
            cutI=0
            break;
        default:
            return;
    }
    console.log(targetIX);
    console.log(targetIY);
    if(targetIX<=400&&targetIX>=0&&targetIY<=400&&targetIY>=0)
        targetBlock=targetIX/200+targetIY/200*3;
    else
        targetBlock=-1
    ctx.clearRect(currentimgMX,currentimgMY,200,200)
    if(targetBlock==-1||mapArray[targetBlock]==1||mapArray[targetBlock]==3){
        
        }
    else{
        $("#talkbox").text("")
        currentimgMX=targetIX;
        currentimgMY=targetIY;
    }
    ctx.drawImage(imgmain,cutI,0,80,130,currentimgMX,currentimgMY,200,200);
    switch(mapArray[targetBlock]){
            case undefined:
                $("#talkbox").text("邊界");
                break;
            case 1:
                $("#talkbox").text("有山");
                break;
            case 2:
                $("#talkbox").text("抵達終點");
                break;
            case 3:
                $("#talkbox").text("嗨~");
                break;
    }
})
                    
                    
                    
                
