const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // Example API URL

// Fetch users and display them
async function fetchUsers() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error('Network response was not ok');
        const users = await response.json();
        displayUsers(users);
    } catch (error) {
        console.error('Error fetching users:', error);
    }
}

// Display users in the DOM
function displayUsers(users) {
    const userList = document.getElementById('users');
    userList.innerHTML = ''; // Clear the list before adding new items
    users.forEach(user => {
        const li = document.createElement('li');
        li.textContent = `${user.name} (${user.email})`;
        userList.appendChild(li);
    });
}

// Create a new user
async function createUser(user) {
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        if (!response.ok) throw new Error('Network response was not ok');
        const newUser = await response.json();
        console.log('User created:', newUser);
        fetchUsers(); // Refresh the user list
    } catch (error) {
        console.error('Error creating user:', error);
    }
}

// Form submission handler
document.getElementById('user-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const newUser = { name, email };
    createUser(newUser);
});

// Initial fetch of users
fetchUsers();
