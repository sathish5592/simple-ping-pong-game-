document.addEventListener('DOMContentLoaded',()=>{
    let ball=document.getElementById('ball');
    let table=document.getElementById('ping-pong-table');
    let paddle=document.getElementById("paddle");
    
    let ballx=10;
   let bally=50;
   let dx=2;
   let dy=2;

   ball.style.left=`${ballx}px`;
    ball.style.top=`${bally}px`;
   setInterval(() => {
     ballx+=dx;
     bally+=dy;
     ball.style.left=`${ballx}px`;
     ball.style.top=`${bally}px`;
     
     if(ballx<paddle.offsetLeft+paddle.offsetWidth && bally>paddle.offsetTop && bally+ball.offsetHeight<paddle.offsetTop+paddle.offsetHeight){
        dx*=-1;
     }

     if(ballx > table.offsetWidth- ball.offsetWidth || ballx<=0) dx*=-1;
     if(bally > table.offsetHeight- ball.offsetHeight || bally<=0) dy*=-1;

   }, 1);

   let paddleY=0;
   let dPy=10;
   document.addEventListener('keydown',(event)=>{
    event.preventDefault();
    if(event.keyCode==38 && paddleY>0){
        
        paddleY+=(-1)*dPy;
    }
   else if(event.keyCode==40 && paddleY<table.offsetHeight-paddle.offsetHeight){
    paddleY+=dPy;
    }
    paddle.style.top=`${paddleY}px`;
   })
  
})