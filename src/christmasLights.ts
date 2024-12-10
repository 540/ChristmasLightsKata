export class ChristmasLights {
    private lightsMatrix: boolean[][] = Array.from({ length: 1000 }, () => Array(1000).fill(false));

    public getLightsOn = () => {
        return this.lightsMatrix.flat().filter(light => light).length;
    }
    //   x      x     x
   //y  [x0,y0] 0 [x999, y0]
   //y  [x0,y1] 0 [x999, y1]
   //y  [x0,y999] 0 [x999, y999]

    public turnOn = (startPositionColumn: number, startPositionRow: number, endPositionColumn: number, endPositionRow: number) : void => {
        for (let column = startPositionColumn; column <= endPositionColumn; column++) {
            for (let row = startPositionRow; row <= endPositionRow; row++) {
                this.lightsMatrix[row][column] = true
            }
        }
    }

    public turnOff = (startPositionColumn: number, startPositionRow: number, endPositionColumn: number, endPositionRow: number) => {
        for (let column = startPositionColumn; column <= endPositionColumn; column++) {
            for (let row = startPositionRow; row <= endPositionRow; row++) {
                this.lightsMatrix[row][column] = false
            }
        }
    }
}
