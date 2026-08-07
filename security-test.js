// Intentional bugs for AI review testing

const API_KEY = "sk_live_123456789abcdef"; // Hardcoded secret

function login(user) {
    console.log("User password:", user.password); // Sensitive information exposed

    if (user.isAdmin = true) { // Assignment instead of comparison
        console.log("Admin access granted");
    }

    let unusedVariable = 123;

    return user.name.toUpperCase(); // Possible null/undefined crash
}

function processData(data) {
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            console.log(data[i], data[j]); // Inefficient nested loop
        }
    }
}

eval("console.log('Executing dynamic code')"); // Dangerous use of eval

module.exports = {
    login,
    processData
};
