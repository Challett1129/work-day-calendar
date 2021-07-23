console.log('hello world');
const currentDay = $('#currentDay');

//array of hours with am/pm, id's, the hour it is, and a time for moment.js to read. 
let schedule = [
    {
        hour: "9",
        id: "0",
        text: "",
        latin: "a.m.",
        time: "9"
    },
    {
        hour: "10",
        id: "1",
        text: "",
        latin: "a.m.",
        time: "10"
    },
    {
        hour: "11",
        id: "2",
        text: "",
        latin: "a.m.",
        time: "11"
    },
    {
        hour: "12",
        id: "3",
        text: "",
        latin: "p.m.",
        time: "12"
    },
    {
        hour: "1",
        id: "4",
        text: "",
        latin: "p.m.",
        time: "13"
    },
    {
        hour: "2",
        id: "5", 
        text: "",
        latin: "p.m.",
        time: "14"
    },
    {
        hour: "3",
        id: "6", 
        text: "",
        latin: "p.m.",
        time: "15"
    },
    {
        hour: "4",
        id: "7",
        text: "",
        latin: "p.m.",
        time: "16"
    },
    {
        hour: "5", 
        id: "8", 
        text: "",
        latin: "p.m.",
        time: "17"
    },
    // {
    //     hour: "6",
    //     id: "9", 
    //     text: "",
    //     latin: "p.m.",
    //     time: "18"
    // }
    // {
    //     hour: "8",
    //     id: "9",
    //     text: "",
    //     latin: "p.m.",
    //     time: "20"
    // }
]

//set current date and append it to the screen 


// pass the schedule info through plus the time of the array to determine what class to add to our schedule
checkHour = function(hour, scheduleInfo) {
    if(hour === moment().format("HH")){
      return  scheduleInfo.addClass("present");
    } 
    else if(hour < moment().format("HH")) {
       return scheduleInfo.addClass("past");
    }
    else if(hour > moment().format("HH")) {
        return scheduleInfo.addClass("future");
    }
}

console.log(currentDate);
let saveTasks = function() {
     localStorage.setItem("tasks", JSON.stringify(schedule));
}

//creates the row and column for each hour, description, and save button
schedule.forEach(function(eachHour) {
    //creates a form for each hour so we can insert a textarea inside of the description class
    const row = $('<form>').addClass('row');
    $(".container").append(row);

    const hour = $("<div>").addClass("col-1 hour").text(`${eachHour.hour}${eachHour.latin}`);
    console.log(hour);
    //does not work 
    // $(".row").append(hour);
    //create div for hour activities to be displayed in 
    const hourDescription = $("<div>").addClass("col-10 description")
    //create textarea to be able to write in activities
    const scheduleInfo = $("<textarea>")

    hourDescription.append(scheduleInfo);


    scheduleInfo.attr("id", eachHour.id);
    console.log(scheduleInfo.attr("id"));

    console.log(checkHour(eachHour.time, scheduleInfo));

    //create save button and icon 
    const saveButton = $("<button>").addClass("saveBtn");
    const saveImg = $('<img  src="https://img.icons8.com/ios-glyphs/30/000000/save--v1.png"/>');
    saveButton.append(saveImg);
    // console.log(saveButton);
    row.append(hour, hourDescription, saveButton);
})

currentDate = moment().format("dddd MMMM Do"); 
currentDay.append(currentDate);
