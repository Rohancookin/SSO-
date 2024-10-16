const users = JSON.parse(localStorage.getItem('users'))  [];
const currentUser = JSON.parse(localStorage.getItem('currentUser'))  null;

document.addEventListener('DOMContentLoaded', () => {
    if (currentUser) {
        document.getElementById('profileInfo').innerHTML = 
            <h3>${currentUser.username}</h3>
            <p>Bio: ${currentUser.bio}</p>
            <p>Pronouns: ${currentUser.pronouns}</p>
        ;
        loadUserPosts();
    }
});

// Sign Up Functionality
document.getElementById('signupForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const bio = e.target[3].value;
    const pronouns = e.target[4].value;

    users.push({ username, email, password, bio, pronouns, posts: [] });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Account created! You can now log in.');
    window.location.href = 'login.html';
});

// Login Functionality
document.getElementById('loginForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        window.location.href = 'profile.html';
    } else {
        alert('Invalid email or password');
    }
});

// Load User Posts
function loadUserPosts() {
    const userPostsContainer = document.getElementById('userPosts');
    userPostsContainer.innerHTML = '';
    currentUser.posts.forEach((post, index) => {
        userPostsContainer.innerHTML += 
            <div class="post">
                <p>${post}</p>
                <button onclick="likePost(${index})">Like</button>
                <span id="likeCount${index}">0</span>
            </div>
        ;
    });
}

// Post Functionality
document.g
etElementById('postForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const postContent = e.target[0].value;
    currentUser.posts.push(postContent);
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    loadUserPosts();
    e.target.reset();
});

// Like Functionality
function likePost(index) {
    const likeCountElement = document.getElementById(likeCount${index});
    let count = parseInt(likeCountElement.textContent) || 0;
    likeCountElement.textContent = count + 1;
}
