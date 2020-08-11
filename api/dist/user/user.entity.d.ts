import { Coffee } from 'src/coffee/coffee.entity';
export declare class User {
    id: number;
    email: string;
    username: string;
    firstname: string;
    lastname: string;
    password: string;
    created: Date;
    favoriteCoffees: Coffee[];
    hashPassword(): Promise<void>;
    toResponseObject(): {
        id: number;
        created: Date;
        email: string;
    };
}
