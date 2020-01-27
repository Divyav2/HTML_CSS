function fakeAjax(url, cb) {
  var fakeResponses = {
    file1: "The first text",

    file2: "The middle text",

    file3: "The last text"
  };
  var randomDelay = (Math.round(Math.random() * 1e4) % 8000) + 1000;

  console.log("Requesting: " + url);
  setTimeout(function() {
    cb(fakeResponses[url]);
  }, randomDelay);
}

function getFile(file) {
  return new Promise((resolve) => {
    fakeAjax(file, function(text) {
      resolve(text);
     
    });
  })
  
}
file1 = getFile("file1");
file2 = getFile("file2");
file3 = getFile("file3");

file1
.then((text) =>
{
  console.log(text);
  return file2;
}
)
.then((text) =>{
  console.log(text);
  return file3;
})
.then((text) =>{
 console.log(text);
})
.then(()=> console.log("Complete"));
