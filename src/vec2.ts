export default class Vec2 {
    x: number
    y: number

    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }

    static zero(): Vec2 {
        return new Vec2();
    }
}