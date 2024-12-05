export class ChristmasLights {
    private lights: number = 0
    private lightsMatrix: boolean[][] = Array.from({ length: 1000 }, () => Array(1000).fill(false));

    public getLightsOn = () => {
        return this.lightsMatrix.flat().filter(light => light).length;
    }

    public turnOn = (startCorner: number[], endCorner: number[]) : void => {
        this.lightsMatrix[startCorner[0]][endCorner[0]] = true;
    }

    public turnOff = (startCorner: number[], endCorner: number[]) : void => {
        this.lights = 0
    }

    public toggle(startCorner: number[], endCorner: number[]) {
        this.lights = 1000000
    }
}
