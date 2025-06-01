//play/stop beeping
function playBuzzer(num: number) {
    pins.digitalWritePin(DigitalPin.P0, 1);
    pause(num * 10);
    pins.digitalWritePin(DigitalPin.P0, 0);
    pause(num * 10);
}

function stopBuzzer() {
    pins.digitalWritePin(DigitalPin.P0, 0);
}

//start/stop vibrator
function vibrate(){
    pins.servoWritePin(AnalogPin.P1, 10);
    pause(10);
    pins.servoWritePin(AnalogPin.P1, 0);
    pause(10);
}