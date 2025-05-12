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
 * Creates a new post using Promise syntax
 * @param {Object} post - The post object to be created
 * @returns {Promise} - Promise that resolves with the created post or rejects with an error
 */
async function createNewPost(post) {
    console.log('📝 Creating new post...');
    console.log(`📊 Current post count: ${posts.length}`);

    console.log('⏳ Starting async operation, waiting for post creation...');

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                posts.push(post);
                console.log(`✅ Post "${post.title}" created successfully`);
                console.log(`📊 New post count: ${posts.length}`);

                const error = false; // Simulated error condition

                if (!error) {
                    console.log('✅ No errors detected, resolving promise...');
                    alert('Post created');
                    resolve(post);
                } else {
                    console.error('❌ Error detected, rejecting promise...');
                    reject('Error creating post');
                }
            } catch (err) {
                console.error(`❌ Unexpected error: ${err.message}`);
                reject(`Unexpected error: ${err.message}`);
            }
        }, 2000); // Simulated 2-second creation delay
    });
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

createPost.addEventListener('click', async () => {
    console.log('🖱️ Create post button clicked');
    let newPost = {
        id: posts.length + 1,
        title: `Post ${posts.length + 1}`,
        body: `This is post ${posts.length + 1}`
    };
    console.log(`🆕 Preparing new post: ${JSON.stringify(newPost)}`);

    try {
        const post = await createNewPost(newPost);
        console.log(`🎉 Async operation completed with post: ${post.title}`);
        console.log('🔄 Calling getPosts to refresh the list...');
        getPosts(list);
    } catch (error) {
        console.error(`❌ Async operation failed with error: ${error}`);
    } finally {
        console.log('🏁 Post creation process completed');
    }
});

