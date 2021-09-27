import { Item } from './Item';
import { ItemComparator } from './ItemComparator';

export class Inventory  {
    items: Item[];

    constructor(items) {
        this.items = items;
    };

    sort(comparator?: ItemComparator): void {
        if(comparator) {
            this.items.sort(item => item.weight);
        };

        this.items.map((item, idx) => {
            comparator.compare(item[idx], item[idx+1])
        });
    };

    toString(): string {
        return this.items.join(', ');
    };

    addItem(item: Item): void {};
}
