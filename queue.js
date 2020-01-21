
var arr_max=100;
var front=-1;
var rear=-1;
var array_stack=[];

function insert(x){
  console.log("INSERTING");
  if(rear===arr_max.length-1)
  {
    console.log("queue overflow");
  }
  else{
    array_stack[++rear]=x;
    console.log(array_stack[rear]);
  }
}
function delete_q(){
  console.log("DELETING Rear element");
  if(front===rear)
  {
    console.log("stack underflow");
  }
  else{
    for (var i = 0; i < rear ; i++) { 
      array_stack[i] = array_stack[i + 1]; 
      
  } 
    rear--;
  }
}
function display(){
  console.log("DISPLAYING");
  for(var i=front+1;i<=rear;i++)
  {
    console.log(array_stack[i])
  }
}
insert(10);
insert(20);
insert(30);
display();
delete_q();
display();