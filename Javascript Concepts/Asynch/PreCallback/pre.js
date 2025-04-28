// --- Data Structure ---
// Sample posts array to simulate a database
const posts = [
    { id: 1, title: 'Post 1', body: 'This is post 1' },
    { id: 2, title: 'Post 2', body: 'This is post 2' }
];

// --- DOM Elements ---
const showPost = document.querySelector('#posts');
const hidePost = document.querySelector('#hide-post');
const createPost = document.querySelector('#create-post');
const list = document.createElement('ul');

// Add the list container to the DOM
document.body.appendChild(list);

/**
 * Retrieves and displays posts with a deliberate delay to simulate API call
 * @param {HTMLElement} listElement - The DOM element to render posts into
 */
function getPosts(listElement) {
    console.log('🔍 Fetching posts...');

    try {
        setTimeout(() => {
            let output = '';
            posts.forEach((post) => {
                output += `<li>${post.title}, ${post.body}</li>`;
                console.log(`📄 Rendering post: ${post.title}`);
            });
            listElement.innerHTML = output;
            console.log('✅ Posts rendered successfully');
        }, 1000); // Simulated 1-second network delay
    } catch (error) {
        console.error('❌ Error fetching posts:', error);
    }
}

/**
 * Creates a new post and executes a callback function after completion
 * @param {Object} post - The post object to be created
 * @param {Function} callback - Function to be executed after post creation
 */
function createNewPost(post, callback) {
    console.log('📝 Creating new post...');

    setTimeout(() => {
        posts.push(post);
        console.log(`✅ Post "${post.title}" created successfully`);
        alert('Post created');

        // Execute the callback function (getPosts) after creating the post
        console.log('🔄 Executing callback to refresh posts...');
        callback(list);
    }, 2000); // Simulated 2-second creation delay
}

// --- Event Listeners ---
showPost.addEventListener('click', () => {
    console.log('🖱️ Show posts button clicked');
    getPosts(list);
});

hidePost.addEventListener('click', () => {
    console.log('🖱️ Hide posts button clicked');
    list.innerHTML = '';
});

createPost.addEventListener('click', () => {
    console.log('🖱️ Create post button clicked');
    const newPost = {
        id: posts.length + 1,
        title: `Post ${posts.length + 1}`,
        body: `This is post ${posts.length + 1}`
    };
    createNewPost(newPost, getPosts);
});