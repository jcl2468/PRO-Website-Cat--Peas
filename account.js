// Firebase initialization for Firebase v8.x
const firebaseConfig = {
    apiKey: "AIzaSyA-EunuASzAgMonfzkd_yWsNopk6hOnbBA",
    authDomain: "pro-website-5b826.firebaseapp.com",
    databaseURL: "https://pro-website-5b826-default-rtdb.firebaseio.com",
    projectId: "pro-website-5b826",
    storageBucket: "pro-website-5b826.firebasestorage.app",
    messagingSenderId: "497085760591",
    appId: "1:497085760591:web:6d7baa9f0c7c5fbe55963a",
    measurementId: "G-NFS200XZE1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.database(); // Using firebase.database() in Firebase 8.x


function handleUserRedirect() {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // User is logged in
            window.location.href = "account.html";
        } else {
            // User is not logged in
            window.location.href = "login.html";
        }
    });
}

// Function to log in the user with email and password
function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    // Validate inputs
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }
  
    // Sign in with email and password
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(function(userCredential) {
        const user = userCredential.user;
  
        // Check if the email is verified
        if (user.emailVerified) {
          alert("Login successful!");
          window.location.href = "index.html";  // Redirect to the main page after successful login
        } else {
          alert("Please verify your email before logging in.");
          user.sendEmailVerification()
            .then(() => {
              alert("A verification email has been sent to your email address.");
            })
            .catch((error) => {
              console.error("Error sending verification email:", error);
              alert("Error sending verification email.");
            });
        }
      })
      .catch(function(error) {
        console.error("Error during sign-in:", error);
        alert("Failed to log in. Please check your email and password.");
      });
  }

  // Function to register the user and store data in Realtime Database
function register() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Check if fields are filled
    if (!email || !password) {
        alert("Please fill in both email and password.");
        return;
    }

    // Register the user with email and password
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function(userCredential) {
            const user = userCredential.user;
            const uid = user.uid; // Unique ID of the newly created user

            // Save user data to Realtime Database
            const db = firebase.database();
            db.ref(`users/${uid}`).set({
                email: email,
                password: password // It's better not to store plaintext passwords in practice
            })
            .then(() => {
                console.log("User data stored successfully in Realtime Database.");

                // Send verification email
                user.sendEmailVerification()
                    .then(function() {
                        alert("Verification email sent! Please check your email to verify your account.");
                        window.location.href = "check-your-email.html"; // Redirect to a confirmation page
                    })
                    .catch(function(error) {
                        console.error("Error sending verification email:", error);
                        alert("Failed to send verification email.");
                    });
            })
            .catch((error) => {
                console.error("Error saving user data to Realtime Database:", error);
            });
        })
        .catch(function(error) {
            console.error("Error during registration:", error);
            alert(error.message); // Show Firebase error messages to guide the user
        });
}

// Toggle Dropdown Visibility and highlight the account icon
function toggleDropdown(event) {
    event.preventDefault();

    const dropdown = document.querySelector('.dropdown');
    const accountIcon = document.getElementById('accountIcon');
    if (!dropdown || !accountIcon) {
        console.error("Dropdown or account icon element not found.");
        return;
    }

    dropdown.classList.toggle('show');
    accountIcon.classList.toggle('active');

    // Populate the email when the dropdown is shown
    populateEmail();
}

// Toggle Search Bar
function toggleSearchBar(event) {
    event.preventDefault();

    const lg_search = document.querySelector('.lg_search');
    if (!lg_search) {
        console.error("Search bar element not found.");
        return;
    }

    // Toggle the open class
    lg_search.classList.toggle('open');

    // If the search bar is opened, listen for clicks outside to close it
    if (lg_search.classList.contains('open')) {
        document.addEventListener('click', closeSearchBar);
    } else {
        // Close search bar if it is already open when clicking the magnifying glass
        document.removeEventListener('click', closeSearchBar);
    }
}

// Function to close the search bar if clicked outside
function closeSearchBar(event) {
    const lg_search = document.querySelector('.lg_search');
    const navbar = document.querySelector('#navbar'); // to avoid closing when clicking inside navbar
    if (lg_search && !lg_search.contains(event.target) && !navbar.contains(event.target)) {
        lg_search.classList.remove('open'); // Close the search bar
        document.removeEventListener('click', closeSearchBar); // Remove the event listener
    }
}

// Close the search bar when clicking on the close icon
document.getElementById('close')?.addEventListener('click', function() {
    const lg_search = document.querySelector('.lg_search');
    if (lg_search) {
        lg_search.classList.remove('open');
    }
});

// Search Function
function searchProducts() {
    const query = document.getElementById('searchBar').value.toLowerCase();
    const products = document.querySelectorAll('.pro'); // Select all products

    products.forEach(product => {
        const productText = product.innerText.toLowerCase();
        if (productText.includes(query)) {
            product.style.display = "block"; // Show matching products
        } else {
            product.style.display = "none"; // Hide non-matching products
        }
    });
}

// Update Content Dynamically
function changeContent(option) {
    // Hide all content sections
    document.querySelectorAll('.content-container').forEach((section) => {
        section.style.display = 'none';
    });

    // Show the selected section
    switch (option) {
        case 'profile':
            document.getElementById('profile-content').style.display = 'block';
            break;
        case 'settings':
            document.getElementById('settings-content').style.display = 'block';
            break;
        case 'logout':
            // Log out the user
            firebase.auth().signOut()
                .then(() => {
                    console.log('User logged out');
                    // Redirect to the login page after logout
                    window.location.href = "login.html";
                })
                .catch((error) => {
                    console.error("Error logging out: ", error);
                });
            break;
        case 'email':
            document.getElementById('email-content').style.display = 'block';
            break;
        case 'orders':
            document.getElementById('orders-content').style.display = 'block';
            break;
        default:
            break;
    }

    // Clear all active states
    clearActiveStates();

    // Set active class for the selected tab
    // For navigation bar
    const navLink = document.querySelector(`#navbar li a[onclick="changeContent('${option}')"]`);
    if (navLink) navLink.classList.add('active');

    // For dropdown
    const dropdownItem = document.querySelector(`.dropdown-content li[onclick="changeContent('${option}')"]`);
    if (dropdownItem) dropdownItem.classList.add('active');

    // Hide the dropdown after selecting an option
    const dropdown = document.querySelector('.dropdown');
    if (dropdown) {
        dropdown.classList.remove('show');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    changeContent('orders'); // Default tab
});

// Example function to populate orders info
function populateOrdersInfo() {
    console.log('Orders content populated!');
}

// Get User Email from Firebase Authentication
function getUserEmail() {
    const user = auth.currentUser;
    if (user) {
        return user.email;
    } else {
        return 'Not logged in';
    }
}

// Populate email in the dropdown and profile section
function populateEmail() {
    const userEmail = getUserEmail();
    document.getElementById('emailText').textContent = userEmail;
    document.getElementById('profile-email').textContent = userEmail;
}

// Show the name popup and blur the main content
document.getElementById('edit-name-button').addEventListener('click', () => {
    document.getElementById('name-popup').style.display = 'block';
    document.getElementById('main-content').classList.add('blurred');
});

// Save the first and last name to Realtime Database
document.getElementById('save-name-button').addEventListener('click', () => {
    const firstName = document.getElementById('first-name-input').value.trim();
    const lastName = document.getElementById('last-name-input').value.trim();

    if (firstName === "" || lastName === "") {
        alert("First Name and Last Name cannot be empty.");
        return;
    }

    const fullName = `${firstName} ${lastName}`;
    document.getElementById('profile-fullname').textContent = fullName;

    // Save to Firebase Realtime Database
    const user = auth.currentUser;
    if (user) {
        const userId = user.uid; // Get the authenticated user's UID
        db.ref(`users/${userId}`).update({
            firstName: firstName,
            lastName: lastName
        })
            .then(() => {
                alert("Name successfully updated.")
                console.log("Full name updated successfully in Realtime Database!");
            })
            .catch((error) => {
                console.error("Error updating full name in Realtime Database: ", error);
            });
    }

    // Close the popup and remove blur
    document.getElementById('name-popup').style.display = 'none';
    document.getElementById('main-content').classList.remove('blurred');
});

// Cancel the popup and remove blur
document.getElementById('cancel-name-button').addEventListener('click', () => {
    document.getElementById('name-popup').style.display = 'none';
    document.getElementById('main-content').classList.remove('blurred');
});

// Populate the full name dynamically from Firebase
function populateFullName() {
    const user = auth.currentUser;
    if (!user) {
        console.error("No user is logged in.");
        document.getElementById('profile-fullname').textContent = 'Not provided';
        return;
    }

    const userId = user.uid;
    db.ref(`users/${userId}`).once('value')
        .then((snapshot) => {
            const data = snapshot.val();
            if (data) {
                const { firstName = "Not", lastName = "Provided" } = data;
                document.getElementById('profile-fullname').textContent = `${firstName} ${lastName}`;
            } else {
                console.warn("No data found for user:", userId);
                document.getElementById('profile-fullname').textContent = 'Not provided';
            }
        })
        .catch((error) => {
            console.error("Error fetching full name:", error);
            document.getElementById('profile-fullname').textContent = 'Error fetching name';
        });
}

// Firebase authentication state change listener
auth.onAuthStateChanged((user) => {
    if (user) {
        // Populate the user info once the user is logged in
        populateProfileInfo();
    } else {
        console.log('No user logged in');
    }
});

// Populate full name and email
function populateProfileInfo() {
    populateEmail();
    populateFullName();
}

// Close dropdown when clicking outside
document.addEventListener('click', (event) => {
    const dropdown = document.querySelector('.dropdown');
    const accountIcon = document.getElementById('accountIcon');
    if (!dropdown || !accountIcon) {
        console.error("Dropdown or account icon element not found.");
        return;
    }

    if (!dropdown.contains(event.target) && !accountIcon.contains(event.target)) {
        dropdown.classList.remove('show');
        accountIcon.classList.remove('active');
    }
});

// Clear Active Tabs
function clearActiveStates() {
    // Remove 'active' class from navigation links
    document.querySelectorAll('#navbar li a').forEach((link) => {
        link.classList.remove('active');
    });

    // Remove 'active' class from dropdown items
    document.querySelectorAll('.dropdown-content li').forEach((item) => {
        item.classList.remove('active');
    });
}

// Logout
function logoutUser() {
    const auth = firebase.auth(); // Initialize Firebase Auth
    auth.signOut()
        .then(() => {
            console.log("User logged out successfully.");
            // Redirect to the login page or home page
            window.location.href = "/login.html"; // Update this with your login page path
        })
        .catch((error) => {
            console.error("Error logging out:", error);
        });
}

// Search
document.getElementById('search-icon').addEventListener('click', function () {
    const searchBarWrapper = document.getElementById('search-bar-wrapper');
    
    // Check if the search bar is currently hidden or visible
    if (searchBarWrapper.style.maxHeight === '0px' || searchBarWrapper.style.maxHeight === '') {
      searchBarWrapper.style.maxHeight = '50px'; // Adjust based on input height + padding
      searchBarWrapper.style.padding = '5px 0';  // Add padding when opening
    } else {
      searchBarWrapper.style.maxHeight = '0px';
      searchBarWrapper.style.padding = '0';      // Remove padding when closing
    }
  });
  