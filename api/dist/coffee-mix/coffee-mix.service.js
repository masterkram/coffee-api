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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoffeeMixService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const coffee_mix_entity_1 = require("./coffee-mix.entity");
const typeorm_2 = require("typeorm");
const coffee_entity_1 = require("../coffee/coffee.entity");
const coffee_dto_1 = require("../coffee/coffee.dto");
let CoffeeMixService = class CoffeeMixService {
    constructor(coffeeMixRepository) {
        this.coffeeMixRepository = coffeeMixRepository;
    }
    async findAll() {
        return await this.coffeeMixRepository.find();
    }
    async findOne(id) {
        const coffeeMix = await this.coffeeMixRepository.findOne(id);
        if (!coffeeMix) {
            throw new common_1.HttpException('Not found', common_1.HttpStatus.NOT_FOUND);
        }
        return coffeeMix;
    }
    async remove(id) {
        const coffeeMix = await this.coffeeMixRepository.findOne(id);
        if (!coffeeMix) {
            throw new common_1.HttpException('Not found', common_1.HttpStatus.NOT_FOUND);
        }
        await this.coffeeMixRepository.delete(id);
        return coffeeMix;
    }
    async create(data) {
        const { name } = data;
        let coffeeMix = await this.coffeeMixRepository.findOne({ where: { name } });
        if (coffeeMix) {
            throw new common_1.HttpException('coffeeMix already exists', common_1.HttpStatus.FORBIDDEN);
        }
        coffeeMix = this.coffeeMixRepository.create(data);
        coffeeMix.created = new Date();
        await this.coffeeMixRepository.save(coffeeMix);
        return coffeeMix;
    }
    async update(id, data) {
        const coffeeMix = await this.coffeeMixRepository.findOne(id);
        if (!coffeeMix) {
            throw new common_1.HttpException('Not found', common_1.HttpStatus.NOT_FOUND);
        }
        await this.coffeeMixRepository.update(id, data);
        return this.coffeeMixRepository.findOne(id);
    }
};
CoffeeMixService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(coffee_mix_entity_1.CoffeeMix)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CoffeeMixService);
exports.CoffeeMixService = CoffeeMixService;
//# sourceMappingURL=coffee-mix.service.js.map