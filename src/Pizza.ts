import { Consumable } from "./Consumable";

export class Pizza extends Consumable {
    numberOfSlices: number;
    slicesEaten: number;

    constructor(numberOfSlices, slicesEaten) {
        super();
        this.numberOfSlices = numberOfSlices;
        this.slicesEaten = slicesEaten;
    };

    eat(): string {
        if (this.slicesEaten < this.numberOfItems) {
            this.slicesEaten++;

            if(this.slicesEaten >= this.numberOfItems) {
                this.setConsumed(true)
            };
            return `You eat a slice of the pizza`
        } else {
            return "";
        }
    }
}
