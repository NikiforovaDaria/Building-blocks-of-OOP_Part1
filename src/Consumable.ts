import { Item } from "./Item";

export class Consumable extends Item {
    consumed: boolean;
    spoiled: boolean;

    constructor(name?, value?, weight?, spoiled?) {
        super(name, value, weight);
        this.spoiled = false;
    };

    // setters
    setConsumed(consumed: boolean): void {
        this.consumed = consumed;
    }

    // common methods
    use() {
        if(!this.consumed && !this.spoiled) {
            this.eat()
        }
    };

    eat(): string {
        if(this.consumed) {
            return `There is nothing left of the ${this.name} to consume.”`
        };

        if(this.spoiled) {
            return `You eat the ${this.name}. 
            You feel sick.`
        };

        return `You eat the ${this.name}.`
    };

    isConsumed(): boolean {
        return this.consumed;
    };

    isSpoiled(): boolean {
        return this.spoiled;
    };

    toString() {
        return `some overwritten string`
    };
}
