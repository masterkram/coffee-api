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
exports.CoffeeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const coffee_entity_1 = require("./coffee.entity");
let CoffeeService = class CoffeeService {
    constructor(coffeeRepository) {
        this.coffeeRepository = coffeeRepository;
    }
    async findAll() {
        return await this.coffeeRepository.find();
    }
    async findOne(id) {
        const coffee = await this.coffeeRepository.findOne(id);
        if (!coffee) {
            throw new common_1.HttpException('Not found', common_1.HttpStatus.NOT_FOUND);
        }
        return coffee;
    }
    async create(data) {
        const { name } = data;
        let coffee = await this.coffeeRepository.findOne({ where: { name } });
        if (coffee) {
            throw new common_1.HttpException('User already exists', common_1.HttpStatus.FORBIDDEN);
        }
        coffee = this.coffeeRepository.create(data);
        coffee.created = new Date();
        await this.coffeeRepository.save(coffee);
        return coffee;
    }
    async update(id, data) {
        const coffee = await this.coffeeRepository.findOne(id);
        if (!coffee) {
            throw new common_1.HttpException('Not found', common_1.HttpStatus.NOT_FOUND);
        }
        await this.coffeeRepository.update(id, data);
        return this.coffeeRepository.findOne(id);
    }
    async remove(id) {
        const coffee = await this.coffeeRepository.findOne(id);
        if (!coffee) {
            throw new common_1.HttpException('Not found', common_1.HttpStatus.NOT_FOUND);
        }
        await this.coffeeRepository.delete(id);
        return coffee;
    }
    async findUserCoffees(id) {
        this.coffeeRepository.find({ where: { users: id } });
    }
};
CoffeeService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(coffee_entity_1.Coffee)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CoffeeService);
exports.CoffeeService = CoffeeService;
//# sourceMappingURL=coffee.service.js.map