let http = new easyhttp();

http.get("https://jsonplaceholder.typicode.com/posts/1", function(response){
  console.log(posts);
});

