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
exports.BrewMethodService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const brew_method_entity_1 = require("./brew-method.entity");
let BrewMethodService = class BrewMethodService {
    constructor(brewMethodRepository) {
        this.brewMethodRepository = brewMethodRepository;
    }
    async findAll() {
        return await this.brewMethodRepository.find();
    }
    async findOne(id) {
        const brewMethod = await this.brewMethodRepository.findOne(id);
        if (!brewMethod) {
            throw new common_1.HttpException('Not found', common_1.HttpStatus.NOT_FOUND);
        }
        return brewMethod;
    }
    async create(data) {
        const { name } = data;
        let brewMethod = await this.brewMethodRepository.findOne({ where: { name } });
        if (brewMethod) {
            throw new common_1.HttpException('User already exists', common_1.HttpStatus.FORBIDDEN);
        }
        brewMethod = this.brewMethodRepository.create(data);
        brewMethod.created = new Date();
        await this.brewMethodRepository.save(brewMethod);
        return brewMethod;
    }
    async update(id, data) {
        const brewMethod = await this.brewMethodRepository.findOne(id);
        if (!brewMethod) {
            throw new common_1.HttpException('Not found', common_1.HttpStatus.NOT_FOUND);
        }
        await this.brewMethodRepository.update(id, data);
        return this.brewMethodRepository.findOne(id);
    }
    async remove(id) {
        const brewMethod = await this.brewMethodRepository.findOne(id);
        if (!brewMethod) {
            throw new common_1.HttpException('Not found', common_1.HttpStatus.NOT_FOUND);
        }
        await this.brewMethodRepository.delete(id);
        return brewMethod;
    }
};
BrewMethodService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(brew_method_entity_1.BrewMethod)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BrewMethodService);
exports.BrewMethodService = BrewMethodService;
//# sourceMappingURL=brew-method.service.js.map