import { Weapon } from "./Weapon";

export class Bow extends Weapon {
    constructor(name, baseDamage, baseDurability, value, weight) {
        super(name, baseDamage, baseDurability, value, weight);
        this.name = "bow";
    };

    polish(): void {
        this.MODIFIER_CHANGE_RATE({durabilityModifier: true});
    }
}
