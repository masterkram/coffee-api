"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrewMethodModule = void 0;
const common_1 = require("@nestjs/common");
const brew_method_service_1 = require("./brew-method.service");
const brew_method_controller_1 = require("./brew-method.controller");
const brew_method_entity_1 = require("./brew-method.entity");
const typeorm_1 = require("@nestjs/typeorm");
let BrewMethodModule = class BrewMethodModule {
};
BrewMethodModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([brew_method_entity_1.BrewMethod])],
        providers: [brew_method_service_1.BrewMethodService],
        controllers: [brew_method_controller_1.BrewMethodController]
    })
], BrewMethodModule);
exports.BrewMethodModule = BrewMethodModule;
//# sourceMappingURL=brew-method.module.js.map