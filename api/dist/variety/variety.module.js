"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VarietyModule = void 0;
const common_1 = require("@nestjs/common");
const variety_service_1 = require("./variety.service");
const variety_controller_1 = require("./variety.controller");
const typeorm_1 = require("@nestjs/typeorm");
const variety_entity_1 = require("./variety.entity");
let VarietyModule = class VarietyModule {
};
VarietyModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([variety_entity_1.Variety]), variety_entity_1.Variety],
        providers: [variety_service_1.VarietyService],
        controllers: [variety_controller_1.VarietyController],
        exports: [variety_service_1.VarietyService, variety_entity_1.Variety],
    })
], VarietyModule);
exports.VarietyModule = VarietyModule;
//# sourceMappingURL=variety.module.js.map