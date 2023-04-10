const posts = [
    {title: 'Post One', body: 'This is Post One'},
    {title: 'Post Two', body: 'This is Post Two'}
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
};

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if(!error){
                resolve();
            }
            else{
                reject("Error : something went wrong");
            }
        }, 2000);
    });
};

// createPost({ title: 'Post Three', body: 'This is post three'})
//     .then(getPosts)
//     .catch(err => console.log(err));

async function init() {
    await createPost({ title: 'Post Three', body: 'This is post three'});

    getPosts();
}

init();