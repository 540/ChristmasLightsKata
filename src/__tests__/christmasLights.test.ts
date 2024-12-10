import {ChristmasLights} from "../christmasLights";

describe("Christmas lights", ()=> {
    let christmasLights: ChristmasLights;

    beforeEach(() => {
        christmasLights = new ChristmasLights()
    });

    test("Initially all lights are off", ()=> {
        expect(christmasLights.getLightsOn()).toBe(0)
    })

    test("Turns on the first light", ()=> {
        christmasLights.turnOn(0,0, 0,0)

        expect(christmasLights.getLightsOn()).toBe(1)
    })

    test("Turns on first row", ()=> {
        christmasLights.turnOn(0,0, 999, 0)

        expect(christmasLights.getLightsOn()).toBe(1000)
    })

    test("Turns on first two rows", ()=> {
        christmasLights.turnOn(0,0, 999, 1)

        expect(christmasLights.getLightsOn()).toBe(2000)
    })

    test("Turns on all lights", ()=> {
        christmasLights.turnOn(0,0, 999, 999)

        expect(christmasLights.getLightsOn()).toBe(1000000)
    })

    test("Turns off all lights", ()=> {
        christmasLights.turnOn(0,0, 999, 999)
        christmasLights.turnOff(0,0, 999, 999)

        expect(christmasLights.getLightsOn()).toBe(0)
    })

    test("Turns off one light", ()=> {
        christmasLights.turnOn(0,0, 999, 999)
        christmasLights.turnOff(999, 999, 999, 999)

        expect(christmasLights.getLightsOn()).toBe(999999)
    })
})
