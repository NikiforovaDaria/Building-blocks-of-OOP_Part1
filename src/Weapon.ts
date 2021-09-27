import { Item } from "./Item";

export class Weapon extends Item {
    baseDamage: number;
    damageModifier: number;
    baseDurability: number;
    durabilityModifier: number;
    
    constructor(name, baseDamage, baseDurability, value, weight) {
        super(name, value, weight);
        this.baseDamage = baseDamage;
        this.baseDurability = baseDurability;
        Object.defineProperty(this, "durabilityModifier",{           
            get: () => {
                return value;
            },
            set: function () {
                if (this.isHammer() && this.getEffectiveDurability <=0) {
                    console.log("durabilityModifier is not able to modify anymore")
                }
            }
        
        });
    };
    
    // getters
    getDamage(): number {
        return this.baseDamage;
    };
    
    getDurability(): number {
        return this.baseDurability;
    };

    getDurabilityModifier(): number {
        return this.durabilityModifier;
    }

    // setters
    setDamage(damage: number) {
        if (this.getEffectiveDurability() > 0) {
            this.baseDamage - damage;
        } else {
            throw new Error("Weapon is broken and cannot be used.")
        }
    };

    setDurability(durability: number) {
        if (this.getEffectiveDurability() > 0) {
            this.baseDurability - durability;
        } else {
            throw new Error("Weapon is broken and cannot be used.")
        }
    };

    setDurabilityModifier(durabilityModifier: number) {
        this.durabilityModifier = durabilityModifier;
    };

    // private
    private isHammer(): boolean {
        return this.name === "hammer"
    };

    private getFixedGamage(): string {
        return (this.baseDamage + this.damageModifier).toFixed(2);
    };

    private getEffectiveDurability(): number {
        return this.baseDurability + this.durabilityModifier;
    }

    // common
    polish(): void {};
    
    use(): string {
        const fixedDamage = this.getFixedGamage();
        if (this.isHammer()) {
            return `You can't use the hammer , it is broken.`
        }
        return `You use the ${this.name} , dealing ${fixedDamage} points of damage.`
    };

    toString(): string {
        const fixedWeight = this.weight.toFixed(2);
        const fixedDamage = this.getFixedGamage();
        const durability = "Should be count somehow but unfortunately I have no idea to how count it";
            return `${this.name} − Value: ${this.value}, Weight : ${fixedWeight}, Damage : ${fixedDamage}, Durability : ${durability}`
    };

    MODIFIER_CHANGE_RATE({damageModifier, durabilityModifier}: {damageModifier?: number, durabilityModifier?: boolean}) {
        // inreases from Sword
        if(damageModifier) {
            this.setDamage(damageModifier)
        };

        // increases from Bow
        if(durabilityModifier) {
            this.setDurability(0.5)
            this.setDurabilityModifier(0.5)
        }; 

        // default implementation
        const effectiveDurability = Number((this.getEffectiveDurability()).toFixed(2));
        if (effectiveDurability < 0) {
            if (this.isHammer()) {
                this.use();
            };
            return `The ${this.name} breaks.:
                You use the ${this.name} , dealing ${effectiveDurability} points of damage . The ${this.name} breaks.`
        } else {
            return `You use the ${this.name} , dealing ${effectiveDurability} points of damage . The ${this.name} breaks.`
        };

    }
}
