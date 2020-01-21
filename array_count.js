var arr1=[10,3,5,12,5,3,9,1];
var len=arr1.length;
var visited_ele=[];
var count;
for(var i=0;i<len;i++)
{
  count=1;

  for(var j=i+1;j<len;j++)
  {
    if(arr1[i]===arr1[j])
    {
      count++;
      visited_ele[j]=0;
    }
    
  }
  if(visited_ele[i]!=0)
  {
    visited_ele[i]=count;
  }
}
for(var i=0;i<len;i++)
{
  if(visited_ele[i]!=0)
  console.log(arr1[i]+" occured "+visited_ele[i]+" times");
}




