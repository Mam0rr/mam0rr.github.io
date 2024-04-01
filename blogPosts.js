
var blogPosts = [
    { title: "Blog Post 1", url: "blog-post1.html" },
    { title: "Blog Post 2", url: "blog-post2.html" },
    { title: "Blog Post 3", url: "blog-post3.html" }
];

function generateBlogPostLinks() {
    var dropdownContent = document.querySelector('.dropdown-content');

    blogPosts.forEach(function(post) {
        var postLink = document.createElement('a');
        postLink.href = post.url;
        postLink.textContent = post.title;

        dropdownContent.appendChild(postLink);
    });
}

generateBlogPostLinks();
