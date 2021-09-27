import { Item } from './Item';
import { ItemComparator } from './ItemComparator';

export class ItemWeightComparator implements ItemComparator {
    public compare(first: Item, second: Item) {
        let integer: number = 0;
        if (first.weight === second.weight) {
           integer = first.compareTo(second)
        } else {
            integer = first.weight > second.weight ? 1 : -1;
        }
        return integer;
    }
}
