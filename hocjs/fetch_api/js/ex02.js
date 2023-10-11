// tách phần fetch api => thành object client
// -> dễ bảo trì
// -> giải quyết các bài toán phức tạp trong bài toán liên quan đến API trong dự án

import { client } from "./client.js";

/*
 <div class="row g-3">
          <div class="col-6 col-lg-4">
            <div class="post-item border p-3">
              <h3>
                <a href="#" class="text-decoration-none">Tieu de bai viet 1</a>
              </h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Exercitationem, quam, laboriosam adipisci facere impedit
                suscipit inventore ullam recusandae fugiat explicabo sequi odit
                assumenda ab eligendi nihil nesciunt facilis iste aliquam.
              </p>
            </div>
          </div>
          <div class="col-6 col-lg-4">
            <div class="post-item border p-3">
              <h3>
                <a href="#" class="text-decoration-none">Tieu de bai viet 1</a>
              </h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Exercitationem, quam, laboriosam adipisci facere impedit
                suscipit inventore ullam recusandae fugiat explicabo sequi odit
                assumenda ab eligendi nihil nesciunt facilis iste aliquam.
              </p>
            </div>
          </div>
          <div class="col-6 col-lg-4">
            <div class="post-item border p-3">
              <h3>
                <a href="#" class="text-decoration-none">Tieu de bai viet 1</a>
              </h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Exercitationem, quam, laboriosam adipisci facere impedit
                suscipit inventore ullam recusandae fugiat explicabo sequi odit
                assumenda ab eligendi nihil nesciunt facilis iste aliquam.
              </p>
            </div>
          </div>
          <div class="col-6 col-lg-4">
            <div class="post-item border p-3">
              <h3>
                <a href="#" class="text-decoration-none">Tieu de bai viet 1</a>
              </h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Exercitationem, quam, laboriosam adipisci facere impedit
                suscipit inventore ullam recusandae fugiat explicabo sequi odit
                assumenda ab eligendi nihil nesciunt facilis iste aliquam.
              </p>
            </div>
          </div>
        </div>
      </div>
*/

const render = (posts) => {
  const stripHTML = (html) => html.replace(/(<([^>]+)>)/gi, "");

  const postsEl = document.querySelector(".posts");
  console.log(posts);

  const postsHtml = posts
    .map(
      ({ title, excerpt }) => `
  <div class="col-6 col-lg-4">
  <div class="post-item border p-3">
      <h3><a href="#" class="text-decoration-none">${stripHTML(title)}</a></h3>
      <p>${stripHTML(excerpt)}</p>
  </div>
</div>
  `
    )
    .join(" ");

  //   posts.forEach(({ title, excerpt, content }) => {
  //     console.log(excerpt);
  //     postsHtml += `
  //     <div class="col-6 col-lg-4">
  //         <div class="post-item border p-3">
  //             <h3><a href="#" class="text-decoration-none">${title}</a></h3>
  //             <p>${excerpt}</p>
  //         </div>
  //     </div>
  //     `;
  //   });

  postsEl.innerHTML = `
  <div class="row g-3">
  ${postsHtml}
  </div>`;
};

const getPosts = async (query = {}) => {
  const querySring = new URLSearchParams(query).toString();
  const { data: posts } = await client.get("/posts?" + querySring);
  render(posts);
};

let order = "desc";
let sort = "id";
let keyword = "";

getPosts({
  _sort: sort,
  _order: order,
});

//Xay dung chuc nang tim kiem
const searchForm = document.querySelector(".search");
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const keywordEl = e.target.querySelector(".keyword");
  keyword = keywordEl.value;

  getPosts({
    _sort: sort,
    _order: order,
    q: keyword,
  });
  keywordEl.value = "";
});

// Sap xep
const sortByEl = document.querySelector(".sort-by");
sortByEl.addEventListener("change", (e) => {
  order = e.target.value;
  getPosts({
    _sort: sort,
    _order: order,
    q: keyword,
  });
});
