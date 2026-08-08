// Final production validation for AI Code Reviewer

function calculateDiscount(price, discount) {
    // Logic bug: assignment instead of comparison
    if (discount = 100) {
        return 0;
    }

    return price - (price * discount / 100);
}

function getUser(user) {
    // Possible null dereference
    return user.profile.email.toLowerCase();
}

function execute(command) {
    // Dangerous code execution
    return eval(command);
}

function authenticate(username, password) {
    // Hardcoded admin credentials
    if (username === "admin" && password === "admin123") {
        return true;
    }

    return false;
}

function debug(user) {
    // Sensitive information exposure
    console.log("JWT:", user.token);
}
