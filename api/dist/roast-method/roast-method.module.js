"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoastMethodModule = void 0;
const common_1 = require("@nestjs/common");
const roast_method_controller_1 = require("./roast-method.controller");
const roast_method_service_1 = require("./roast-method.service");
const typeorm_1 = require("@nestjs/typeorm");
const roast_method_entity_1 = require("./roast-method.entity");
let RoastMethodModule = class RoastMethodModule {
};
RoastMethodModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([roast_method_entity_1.RoastMethod])],
        controllers: [roast_method_controller_1.RoastMethodController],
        providers: [roast_method_service_1.RoastMethodService]
    })
], RoastMethodModule);
exports.RoastMethodModule = RoastMethodModule;
//# sourceMappingURL=roast-method.module.js.map