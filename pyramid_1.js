var row=require('readline');
var prompts=row.createInterface(process.stdin,process.stdout);
prompts.question("How many row you want to print ?",function(n){

for(var i=0;i<n;i++)
{
  var space=' ';
  for(var j=1;j<n-i;j++)
  {
    space=space+' ';
  }
  for(var k=1;k<=(i+1);k++)
   {
      space=space+'| ';
   }
   console.log(space);
}
});