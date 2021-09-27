import { Comparable } from './Comparable';

let id = 0;
let counter = 0;

export abstract class Item implements Comparable<Item> {
    numberOfItems: number = counter;
    id: number = id;
    value: number;
    weight: number;
    name: string;
    constructor(name?: string, value?: number, weight?: number) {
        this.name = name;
        this.value = value;
        this.weight = weight;
        counter++
        this.setId();
    };

    // getters
    getId(): number {
        return this.id;
    };

    getValue(): number {
        return this.value;
    };

    getName(): string {
        return this.name;
    };

    getWeight(): number {
        return this.weight;
    };

    // setters
    setId() {
        id++;
        this.id++;
    };

    setValue(price: number): void {
        this.value = price;
    };

    setName(name: string): void {
        this.name = name;
    };

    setWeight(weight: number): void {
        this.weight = weight;
    };
    
    // common methods
    compareTo(other: Item): number {
        let integer: number = 0;
        if (this.value === other.value) {
           integer = this.name.toLowerCase() > this.name.toLowerCase() ? 1 : -1
        } else {
            integer = this.value > other.value ? 1 : -1;
        }
        return integer;
    };
    toString(): string {
        return `ring − Value: ${this.value}, Weight: ${this.weight}`
    };
    
    reset(): void {
        counter = 0;
    };
    use(): void {};
}
