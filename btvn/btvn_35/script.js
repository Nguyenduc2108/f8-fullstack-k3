let isLoading = false;

function fetchPosts() {
  if (isLoading) {
    return;
  }

  isLoading = true;
  document.getElementById("loading").style.display = "block";

  setTimeout(() => {
    fetch(`https://35c3j3-8080.csb.app/post`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("lỗi mạng");
        }
        return response.json();
      })
      .then((data) => {
        document.getElementById("loading").style.display = "none";
        isLoading = false;

        if (data.length === 0) {
          page = 1;
          fetchPosts();
          return;
        }

        data.forEach((post) => {
          const postElement = `
                         <div class="post">
                              <h2>${post.title}</h2>
                              <p>${post.content}</p>
                              <div><img src="${post.image}" alt="image" /></div>
                         </div>
                    `;
          document.getElementById("post-list").innerHTML += postElement;
        });
        page++;
      })
      .catch((error) => {
        document.getElementById("loading").style.display = "none";
        isLoading = false;
        console.error("Error fetching the data:", error);
      });
  }, 1500);
}

fetchPosts();

window.onscroll = function () {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
    fetchPosts();
  }
};
