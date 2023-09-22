// Scenario: getting job

function achieveDegree(workHard: boolean, callback: (job: string) => void)
 {
    if (workHard) {
      let degree = "Degree";
      let  job = "Developer"; // Assuming a good job after getting a degree
      callback(job);
    } else {
      console.log("You need to work hard to achieve your degree.");
    }
  }
  
  function celebrate(job: string) {
    console.log(`Congratulations! You've achieved your degree and got a job as a develpoer.`);
  }
  
 achieveDegree(true, celebrate);
  

// //  ===================================================================

