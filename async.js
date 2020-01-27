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

async function getFile(file) {
  return new Promise((resolve) => {
    fakeAjax(file, function(text) {
      resolve(text);
    });
  })
  
}
f1 = getFile("file1");

f2 = getFile("file2");

f3 = getFile("file3");

(async() =>{
  console.log(await f1);
  console.log(await f2);
  console.log(await f3);
  console.log("Complete");
})();