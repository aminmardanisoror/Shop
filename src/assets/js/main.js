const req = new XMLHttpRequest();

req.open("GET", "https://jsonplaceholder.typicode.com/posts");

req.addEventListener("load", handleLoadData);

req.send();

function handleLoadData() {
  let responseData = JSON.parse(req.responseText);

  renderPosts(responseData);
}

function renderPosts(posts) {
  const template = posts
    .map((post) => {
      return `
            <div>
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        
            </div>
            
            `;
    })
    .join("");
  document.body.innerHTML = template;
}
