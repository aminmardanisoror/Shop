const req = new Promise((resolve, reject) => {
  let parsedPost;
  const reqPosts = new XMLHttpRequest();
  reqPosts.open("GET", "https://jsonplaceholder.typicode.com/posttts");
  reqPosts.addEventListener("load", handleLoadPosts);
  function handleLoadPosts() {
    if (reqPosts.status === 200) {
      //   parsedPost = JSON.parse(reqPosts.responseText);

      resolve(reqPosts.responseText);
    }
    if (reqPosts.status === 404) {
      reject("ERROR 404");
    }
  }

  reqPosts.send();
});

req
  .then((harchi) => {
    return JSON.parse(harchi);
  })
  .then((json) => {
    console.log(json);
  }).catch(error => {
    console.log(error);
    
  }).finally(() => {
console.log('end!!!!1');


  })
