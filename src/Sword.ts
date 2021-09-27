import { Weapon } from "./Weapon";

export class Sword extends Weapon {
    constructor(name, baseDamage, baseDurability, value, weight) {
        super(name, baseDamage, baseDurability, value, weight);
        this.name = "sword";
    };

    polish(): void {
        const quorterOfDamage = this.baseDamage * 0.25;
        if(this.baseDamage > 100 && this.baseDamage < 125) {
            this.MODIFIER_CHANGE_RATE({damageModifier: 125});
        } else {
            this.MODIFIER_CHANGE_RATE({damageModifier: this.baseDamage + quorterOfDamage});
        }
    }
}
