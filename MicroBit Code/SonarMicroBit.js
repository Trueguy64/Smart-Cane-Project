//rotate primary and secondary servos
function rotateSecondary() {
    if (yRot < 0) {
        pins.servoWritePin(AnalogPin.P1, yRot + 90);
        if (yRot > -179 && yRot < -90) {
            pins.servoWritePin(AnalogPin.P1, yRot + 270);
        }
    } else {
        pins.servoWritePin(AnalogPin.P1, 90);
    }
}

function rotatePrimary() {
    if (yRot < 0 && yRot > -90) {
        pins.servoWritePin(AnalogPin.P0, 0);
    } else {
        pins.servoWritePin(AnalogPin.P0, yRot > -180 && yRot < -90 ? 180 : yRot);
    }
}

//receive data from the ultrasonic sensor
function sonarMeasure() {
    pins.digitalWritePin(DigitalPin.P4, 0);
    control.waitMicros(2);
    pins.digitalWritePin(DigitalPin.P4, 1);
    control.waitMicros(10);
    pins.digitalWritePin(DigitalPin.P4, 0);
    distance = Math.idiv(pins.pulseIn(DigitalPin.P3, PulseValue.High), 58);
    if (distance >= 500) {
        distance = 1;
    }
    serial.writeValue("distance(cm)", distance);
    basic.pause(50);
}