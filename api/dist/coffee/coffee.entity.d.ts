import { User } from 'src/user/user.entity';
import { CoffeeMix } from 'src/coffee-mix/coffee-mix.entity';
import { RoastMethod } from 'src/roast-method/roast-method.entity';
import { BrewMethod } from 'src/brew-method/brew-method.entity';
export declare class Coffee {
    id: number;
    name: string;
    description: string;
    coffeeMix: CoffeeMix;
    roastMethod: RoastMethod;
    brewMethod: BrewMethod;
    users: User[];
    created: Date;
}
