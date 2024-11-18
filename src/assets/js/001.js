// const req = new Promise((resolve, reject) => {
//   let parsedPost;
//   const reqPosts = new XMLHttpRequest();
//   reqPosts.open("GET", "https://jsonplaceholder.typicode.com/posttts");
//   reqPosts.addEventListener("load", handleLoadPosts);
//   function handleLoadPosts() {
//     if (reqPosts.status === 200) {
//       //   parsedPost = JSON.parse(reqPosts.responseText);

//       resolve(reqPosts.responseText);
//     }
//     if (reqPosts.status === 404) {
//       reject("ERROR 404");
//     }
//   }

//   reqPosts.send();
// });

// req
//   .then((harchi) => {
//     return JSON.parse(harchi);
//   })
//   .then((json) => {
//     console.log(json);
//   }).catch(error => {
//     console.log(error);

//   }).finally(() => {
// console.log('end!!!!1');

//   })
// ================================================
const root = document.getElementById("root");

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => render(json))
  .catch((error) => console.log("error", error));

function render(products) {
  const template = products
    .map((product) => {
      return `

<div class="products text-center mt-5 grid grid-cols-2">

      <div
        class="shadow-md overflow-hidden border rounded-lg border-black  pt-4 products__container w-10/12 mx-auto flex flex-col gap-16"
      >
      
        <img class="w-full aspect-square object-contain " src="${product.image}" alt="" />
      
        <div class="flex flex-col gap-5 products__container__explain pb-8 pt-4 shadow-md">
        <span class="ms-3 w-fit text-white ">Price: ${product.price} $</span>
        <span class="ms-3 w-fit text-white">Rate: ${product.rating.rate}</span>
        <h2 class="ms-3 w-fit text-start text-white">${product.title}</h2>
        <a class="border ms-3 px-4 py-2 w-fit rounded-xl text-black bg-white text-sm" href="">buy now</a>
        </div>
      </div>
      
    </div>

`;
    })
    .join("");

  root.innerHTML = template;
}
