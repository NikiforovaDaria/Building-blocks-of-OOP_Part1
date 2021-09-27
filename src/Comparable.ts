export interface Comparable<T> {
    // attributes
    numberOfItems: number;
    id: number;
    value: number;
    weight: number;
    name: string;
    // operations
    use(): void;
    compareTo(other: T): number;
    toString(): string;
    getId(): number;
    getValue(): number;
    getName(): string;
    getWeight(): number;
    setValue(price: number): void;
    setName(name: string): void;
    setWeight(weight: number): void;
    reset(): void;
}
