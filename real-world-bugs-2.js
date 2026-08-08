// Intentional bugs for AI review validation

const SECRET = "sk_live_123456789abcdef";

function process(user) {
    console.log("User password:", user.password);

    if (user.isAdmin = true) {
        return "admin";
    }

    return user.name.toUpperCase();
}

function dangerous(input) {
    return eval(input);
}
