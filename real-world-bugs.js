// Test file for AI Code Reviewer

# SAFE: Load from environment variable instead
value = os.getenv('YOUR_SECRET_KEY')

function login(user) {
    console.log("Password:", user.password); // Sensitive information

    if (user.isAdmin = true) { // Assignment instead of comparison
        console.log("Admin Login");
    }

    return user.name.toUpperCase(); // Possible null crash
}

function execute(input) {
    return eval(input); // Dangerous
}

function duplicate(items) {
    let result = [];

    for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < items.length; j++) {
            if (items[i] === items[j]) {
                result.push(items[i]);
            }
        }
    }

    return result;
}

login(null);
