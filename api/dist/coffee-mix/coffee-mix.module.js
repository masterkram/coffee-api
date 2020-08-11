"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoffeeMixModule = void 0;
const common_1 = require("@nestjs/common");
const coffee_mix_controller_1 = require("./coffee-mix.controller");
const coffee_mix_service_1 = require("./coffee-mix.service");
const typeorm_1 = require("@nestjs/typeorm");
const coffee_mix_entity_1 = require("./coffee-mix.entity");
let CoffeeMixModule = class CoffeeMixModule {
};
CoffeeMixModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([coffee_mix_entity_1.CoffeeMix])],
        controllers: [coffee_mix_controller_1.CoffeeMixController],
        providers: [coffee_mix_service_1.CoffeeMixService]
    })
], CoffeeMixModule);
exports.CoffeeMixModule = CoffeeMixModule;
//# sourceMappingURL=coffee-mix.module.js.map