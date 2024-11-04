let reqComments;
const reqPosts = new XMLHttpRequest();

reqPosts.open("GET", "https://jsonplaceholder.typicode.com/posts");

reqPosts.addEventListener("load", handleLoadPosts);

reqPosts.send();

function handleLoadPosts() {
  reqComments = new XMLHttpRequest();
  reqComments.open("GET", "https://jsonplaceholder.typicode.com/comments");
  reqComments.addEventListener("load", handleLoadComments);
  reqComments.send();


  let responseData = JSON.parse(reqPosts.responseText);
  renderPosts(responseData);
}

const handleLoadComments = () => {
  const commentData = JSON.parse(reqComments.responseText);
  console.log(commentData);
  
};

function renderComments(comment) {}



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

// class Car {
//   constructor(brand, color) {
//     this.brand = brand;
//     this.color = color;
//   }
// changeColor(newColor){
//   this.color = newColor
// }

// }

// const newredCar = new Car("saipa", "red");
// const newBlueCar = new Car("BMW", "blue");

// newBlueCar.changeColor('white')

// console.log(newredCar);
// console.log(newBlueCar);
