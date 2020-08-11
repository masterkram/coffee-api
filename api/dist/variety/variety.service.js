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
exports.VarietyService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const variety_entity_1 = require("./variety.entity");
const typeorm_2 = require("typeorm");
let VarietyService = class VarietyService {
    constructor(varietyRepository) {
        this.varietyRepository = varietyRepository;
    }
    async findAll() {
        return await this.varietyRepository.find();
    }
    async findOne(id) {
        const variety = await this.varietyRepository.findOne(id);
        if (!variety) {
            throw new common_1.HttpException('Not found', common_1.HttpStatus.NOT_FOUND);
        }
        return variety;
    }
    async remove(id) {
        const variety = await this.varietyRepository.findOne(id);
        if (!variety) {
            throw new common_1.HttpException('Not found', common_1.HttpStatus.NOT_FOUND);
        }
        await this.varietyRepository.delete(id);
        return variety;
    }
    async create(data) {
        const { name } = data;
        let variety = await this.varietyRepository.findOne({ where: { name } });
        if (variety) {
            throw new common_1.HttpException('variety already exists', common_1.HttpStatus.FORBIDDEN);
        }
        variety = this.varietyRepository.create(data);
        variety.created = new Date();
        await this.varietyRepository.save(variety);
        return variety;
    }
    async update(id, data) {
        const variety = await this.varietyRepository.findOne(id);
        if (!variety) {
            throw new common_1.HttpException('Not found', common_1.HttpStatus.NOT_FOUND);
        }
        await this.varietyRepository.update(id, data);
        return this.varietyRepository.findOne(id);
    }
};
VarietyService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(variety_entity_1.Variety)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], VarietyService);
exports.VarietyService = VarietyService;
//# sourceMappingURL=variety.service.js.map