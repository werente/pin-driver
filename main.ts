enum Pin {
    //% block="A"
    P0 = 0,

    //% block="B"
    P1 = 1,

    //% block="C"
    P2 = 2,

    //% block="D"
    P8 = 8,

    //% block="E"
    P13 = 13,

    //% block="F"
    P14 = 14,

    //% block="G"
    P15 = 15,
}
namespace pinsHelper {
    export function pinToDigitalPin(pin: Pin): DigitalPin {
        let truePin: DigitalPin;
        if (pin === 0) {
            truePin = DigitalPin.P0;
        } else if (pin === 1) {
            truePin = DigitalPin.P1;
        } else if (pin === 2) {
            truePin = DigitalPin.P2;
        } else if (pin === 8) {
            truePin = DigitalPin.P8;
        } else if (pin === 13) {
            truePin = DigitalPin.P13;
        } else if (pin === 14) {
            truePin = DigitalPin.P14;
        } else if (pin === 15) {
            truePin = DigitalPin.P15;
        }
        return truePin;
    }
    export function pinToAnalogPin(pin: Pin): AnalogPin {
        let truePin: AnalogPin;
        if (pin === 0) {
            truePin = AnalogPin.P0;
        } else if (pin === 1) {
            truePin = AnalogPin.P1;
        } else if (pin === 2) {
            truePin = AnalogPin.P2;
        } else if (pin === 8) {
            truePin = AnalogPin.P8;
        } else if (pin === 13) {
            truePin = AnalogPin.P13;
        } else if (pin === 14) {
            truePin = AnalogPin.P14;
        } else if (pin === 15) {
            truePin = AnalogPin.P15;
        }
        return truePin;
    }
}