
    if (document.getElementById("signup-button")) {
        handleSignup();
    }

    if (document.getElementById("login-button")) {
        handleLogin();
    }

    if (document.querySelector(".Welcome h2")) {
        handleWelcomePage();
    }


function handleSignup() {
    const signupButton = document.getElementById("signup-button");
    signupButton.onclick = function () {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("pass").value.trim();

        if (name && email && password) {
            const user = { name, email, password };

            let users = JSON.parse(localStorage.getItem("users")) || [];

            if (users.some(function (e) { return e.email === email; })) {
                alert("Email is already registered. Please log in.");
                return;
            }

            users.push(user);
            localStorage.setItem("users", JSON.stringify(users));
            window.location.href = "../index.html"; 
        } else {
            alert("Please fill in all fields.");
        }
    };
}

function handleLogin() {
    const loginButton = document.getElementById("login-button");
    loginButton.onclick = function () {
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("pass").value.trim();

        if (email && password) {
            const users = JSON.parse(localStorage.getItem("users")) || [];

            const user = users.find(function (e) {
                return e.email === email && e.password === password;
            });

            if (user) {
                window.location.href = `./html/home.html?name=${user.name}`;
            } else {
                alert("Incorrect email or password.");
            }
        } else {
            alert("Please fill in all fields.");
        }
    };
}

function handleWelcomePage() {
    const welcomeElement = document.querySelector(".Welcome h2");
    if (welcomeElement) {
        const params = new URLSearchParams(window.location.search);
        const userName = params.get("name"); 

        welcomeElement.textContent = `Welcome ${userName}`;
    }
}
