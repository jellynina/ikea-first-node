var profile = require("./profile.js");

console.dir(process); // 不知道這是什麼
/*
	process is a global object we can access things like the current version of node and arguments passed in as a command line.
*/


// var users =["ninalee", "chalkers", "nikepettit"];

// 或是使用terminal 輸入
var users = process.argv.slice(2);
users.forEach(profile.get);