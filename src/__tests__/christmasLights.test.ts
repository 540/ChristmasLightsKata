import {ChristmasLights} from "../christmasLights";

describe("Christmas lights", ()=> {
    let christmasLights: ChristmasLights;

    beforeEach(() => {
        christmasLights = new ChristmasLights()
    });

    test("Initially all lights are off", ()=> {
        expect(christmasLights.getLightsOn()).toBe(0)
    })

    test("Turns on all lights", ()=> {
        christmasLights.turnOn([0,0], [999,999])

        expect(christmasLights.getLightsOn()).toBe(1000000)
    })

    test("Turns off all lights", ()=> {
        christmasLights.turnOn([0,0], [999,999])
        christmasLights.turnOff([0,0], [999,999])

        expect(christmasLights.getLightsOn()).toBe(0)
    })

    test("Toggles all lights and check if are on", ()=> {
        christmasLights.toggle([0,0], [999,999])

        expect(christmasLights.getLightsOn()).toBe(1000000)
    })

    test("Turns on the first light", ()=> {
        christmasLights.turnOn([0,0], [0,0])

        expect(christmasLights.getLightsOn()).toBe(1)
    })
})
