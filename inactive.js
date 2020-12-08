const user = {
    name: "Qasim Asad",
    age: "25",
    city: "san francisco",
    lastActivity: new Date().getTime()
}

const inactiveFirstStage = () => {
    console.log("User has been inactive for the past 1-2 minutes");
}

const inactiveSecondStage = () => {
    console.log("User has been inactive for the past 3-4 minutes");
}

const inactiveThirdStage = () => {
    console.log("User has been inactive for the past 5-6 minutes");
}


// this is the main method that acts like a worker and runs every 1 minute
setInterval(function(){
    // please write your code here
    
    const timeDiff = new Date().getTime() - user.lastActivity;
    let timeDiffMinutes = Math.floor( timeDiff /1000/60);
    
    timeDiffMinutes = timeDiffMinutes % 5
    
    if (timeDiffMinutes == 1){

        inactiveFirstStage()

    } else if ( timeDiffMinutes == 2 ) {

        inactiveSecondStage()

    } else if(timeDiffMinutes == 4 || timeDiffMinutes == 5){
        inactiveThirdStage()
    }
}, 1000);
