const child_process = require("child_process");

child_process.exec("echo 'Hello world'", (err, stdout, stderr) => {
  if (err) {
    throw err;
  }
  console.log(stdout);
});
