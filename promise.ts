function achieveDegree(workHard: boolean): Promise<string> {
    return new Promise((resolve, reject) => {
        if (workHard) {
            let degree = "Degree";
            let job = "Developer"; // Assuming a good job after getting a degree
            resolve(job);
        } else {
            reject("You need to work hard to achieve your degree.");
        }
    });
}

function celebrate(job: string) {
    console.log(`Congratulations! You've achieved your degree and got a job as a ${job}.`);
}

achieveDegree(true) 
    .then((job) => {
        celebrate(job);
    })
    .catch((error) => {
        console.error(error);
    });
