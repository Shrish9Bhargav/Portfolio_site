var brd=document.createElement("DIV");
document.body.insertAdjacentElement(brd,document.getElementById("board"));

bubbles=[];
 function newBubble(x,y,size,color)
 {
    var bubble=document.createElement("DIV");
    bubble.setAtribute('class','bubble');
    bubble.style="background-color :"+color+ ";";
    bubble.bubbleSize=size;

    bubble.style.height=bubble.bubbleSize*2 + "px";
    bubble.velocity=[];
    bubble.velocity.x=0;
    bubble.velecity.y=0;
    bubble.position=[];
    bubble.position.x=x;
    bubble.position.y=y;
    bubble.style.left=bubble.position.x -bubble.bubbleSize +'px';
    bubble.style.top=bubble.position.y-bubble.bubbleSize + 'px';
    brd.appendChild(bubble);

    if(bubble== null)
        
        bubble[];

        bubble.push(bubble);
        return bubble;
}

newBubble(200,200,50,"black");