// Scenario: getting job
function achieveDegree(workHard, callback) {
    if (workHard) {
        var degree = "Degree";
        var job = "Developer"; // Assuming a good job after getting a degree
        callback(job);
    }
    else {
        console.log("You need to work hard to achieve your degree.");
    }
}
function celebrate(job) {
    console.log("Congratulations! You've achieved your degree and got a job as a develpoer.");
}
achieveDegree(true, celebrate);
// //  ===================================================================
