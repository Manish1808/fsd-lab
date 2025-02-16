const EventManagement = require('./EventManagement');

const event = new EventManagement();

event.on("eventStarted",()=>{
    console.log("Event Started");
});
event.on("eventStopped",()=>{
    console.log("Event Stopped");
});
event.on("eventPending",()=>{
    console.log("Event Pending");
});

event.startEvent();
event.pendingEvent();
event.stopEvent();