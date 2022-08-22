fetch("https://jsonplaceholder.typicode.com/posts",{
    method: "GET"
}).then(function(res){
    return res.json()
}).then(function(posts){
    let htmls = posts.map(function(post){
        return `<tr>
                    <td>${post.id}</td>
                    <td>${post.title}</td>
                    <td>${post.body}</td>
                </tr>`
    })
    document.querySelector('#tbPosts').innerHTML = htmls.join("");
})

// fetch("https://jsonplaceholder.typicode.com/posts",{
//     method: "GET"
// }).then(async function(res){
//     let posts = await res.json();
//     let htmls = posts.map(function(post){
//         return `<tr>
//                     <td>${post.id}</td>
//                     <td>${post.title}</td>
//                     <td>${post.body}</td>
//                 </tr>`
//     })
//     document.querySelector('#tbPosts').innerHTML = htmls.join("");
// })
