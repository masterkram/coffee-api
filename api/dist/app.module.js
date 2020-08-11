"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const user_module_1 = require("./user/user.module");
const typeorm_1 = require("@nestjs/typeorm");
const core_1 = require("@nestjs/core");
const logging_interceptor_1 = require("./shared/logging.interceptor");
const auth_module_1 = require("./auth/auth.module");
const coffee_module_1 = require("./coffee/coffee.module");
const coffee_mix_module_1 = require("./coffee-mix/coffee-mix.module");
const variety_module_1 = require("./variety/variety.module");
const roast_method_module_1 = require("./roast-method/roast-method.module");
const brew_method_module_1 = require("./brew-method/brew-method.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({ autoLoadEntities: true }),
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            coffee_module_1.CoffeeModule,
            coffee_mix_module_1.CoffeeMixModule,
            variety_module_1.VarietyModule,
            roast_method_module_1.RoastMethodModule,
            brew_method_module_1.BrewMethodModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            {
                provide: core_1.APP_INTERCEPTOR,
                useClass: logging_interceptor_1.LoggingInterceptor,
            },
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map