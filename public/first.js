console.log("I am connected");

const userDiv = document.getElementById("div");
console.log(userDiv);

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        data.forEach((post) => {
            console.log(post);
            userDiv.innerHTML += `
                <div class="card">
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                    <small>User ID: ${post.userId} | Post ID: ${post.id}</small>
                </div>
            `;
        });
    })