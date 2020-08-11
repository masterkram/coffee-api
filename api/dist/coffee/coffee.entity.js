"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coffee = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../user/user.entity");
const coffee_mix_entity_1 = require("../coffee-mix/coffee-mix.entity");
const roast_method_entity_1 = require("../roast-method/roast-method.entity");
const brew_method_entity_1 = require("../brew-method/brew-method.entity");
let Coffee = class Coffee {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Coffee.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Coffee.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Coffee.prototype, "description", void 0);
__decorate([
    typeorm_1.ManyToOne(type => coffee_mix_entity_1.CoffeeMix),
    __metadata("design:type", coffee_mix_entity_1.CoffeeMix)
], Coffee.prototype, "coffeeMix", void 0);
__decorate([
    typeorm_1.ManyToOne(type => roast_method_entity_1.RoastMethod),
    __metadata("design:type", roast_method_entity_1.RoastMethod)
], Coffee.prototype, "roastMethod", void 0);
__decorate([
    typeorm_1.ManyToOne(type => brew_method_entity_1.BrewMethod),
    __metadata("design:type", brew_method_entity_1.BrewMethod)
], Coffee.prototype, "brewMethod", void 0);
__decorate([
    typeorm_1.ManyToMany(type => user_entity_1.User, user => user.favoriteCoffees),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], Coffee.prototype, "users", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Coffee.prototype, "created", void 0);
Coffee = __decorate([
    typeorm_1.Entity('coffee')
], Coffee);
exports.Coffee = Coffee;
//# sourceMappingURL=coffee.entity.js.map