// Bug test file for AI review - stats verification
const API_KEY = '123456789abcdef';

function testSecurityBug() {
    const user = { password: 'secret123' };
    console.log(user.password);
    return user;
}

function testUnusedVariable() {
    const temp = 10;
    return 'done';
}

function testDuplicateCode() {
    return 'result';
}

function testDuplicateCode() {
    return 'result';
}

function testNullCheck() {
    const user = null;
    return user.name.toUpperCase();
}

function testInefficientLoop() {
    const users = [{id: 1}, {id: 2}, {id: 3}];
    for (let i = 0; i < users.length; i++) {
        users.find(u => u.id === i);
    }
}

function testDeadCode() {
    return true;
    console.log('never runs');
}

console.log('Bug test file loaded - stats verification');
