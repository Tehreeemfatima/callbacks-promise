function achieveDegree(workHard) {
    return new Promise(function (resolve, reject) {
        if (workHard) {
            var degree = "Degree";
            var job = "Developer"; // Assuming a good job after getting a degree
            resolve(job);
        }
        else {
            reject("You need to work hard to achieve your degree.");
        }
    });
}
function celebrate(job) {
    console.log("Congratulations! You've achieved your degree and got a job as a ".concat(job, "."));
}
achieveDegree(false)
    .then(function (job) {
    celebrate(job);
})
    .catch(function (error) {
    console.error(error);
});
