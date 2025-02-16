const Emitter = require('events');

class EventManagement extends Emitter {
    constructor() {
        super();
    }
    startEvent(){
        this.emit('eventStarted');
    }
    stopEvent(){
        this.emit('eventStopped');
        }
    pendingEvent(){
        this.emit('eventPending');
    }
}
module.exports = EventManagement;