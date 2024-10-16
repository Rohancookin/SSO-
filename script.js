const users = JSON.parse(localStorage.getItem('users')) || [];
const currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

// Predefined Posts
const predefinedPosts = [
    "This is the first predefined post!",
    "Here is another amazing post!",
    "Enjoying this beautiful day!",
    "Feeling great and loving life!",
    "Check out my new project!"
];

document.addEventListener('DOMContentLoaded', () => {
    if (currentUser) {
        document.getElementById('profileInfo').innerHTML = `
            <h3>${currentUser.username}</h3>
            <p>Bio: ${currentUser.bio}</p>
            <p>Pronouns: ${currentUser.pronouns}</p>
        `;
        loadUserPosts();
    }
});

// Load User Posts (predefined)
function loadUserPosts() {
    const userPostsContainer = document.getElementById('userPosts');
    userPostsContainer.innerHTML = '';

    // Creating a like count array to track likes
    const likeCounts = JSON.parse(localStorage.getItem('likeCounts')) || new Array(predefinedPosts.length).fill(0);

    predefinedPosts.forEach((post, index) => {
        userPostsContainer.innerHTML += `
            <div class="post">
                <p>${post}</p>
                <button onclick="likePost(${index})">Like</button>
                <span id="likeCount${index}">${likeCounts[index]}</span>
            </div>
        `;
    });
}

// Like Functionality
function likePost(index) {
    const likeCountElement = document.getElementById(likeCount${index});
    let count = parseInt(likeCountElement.textContent) || 0;
    count++;
    likeCountElement.textContent = count;

    // Update like counts in localStorage
    const likeCounts = JSON.parse(localStorage.getItem('likeCounts')) || new Array(predefinedPosts.length).fill(0);
    likeCounts[index] = count;
    localStorage.setItem('likeCounts', JSON.stringify(likeCounts));
}

// Logout Functionality
function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}
