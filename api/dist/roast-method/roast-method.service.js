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
exports.RoastMethodService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const roast_method_entity_1 = require("./roast-method.entity");
let RoastMethodService = class RoastMethodService {
    constructor(roastMethodRepository) {
        this.roastMethodRepository = roastMethodRepository;
    }
    async findAll() {
        return this.roastMethodRepository.find();
    }
    async findOne(id) {
        const roastMethod = await this.roastMethodRepository.findOne(id);
        if (!roastMethod) {
            throw new common_1.HttpException('Not found', common_1.HttpStatus.NOT_FOUND);
        }
        return roastMethod;
    }
    async create(data) {
        const { name } = data;
        let roastMethod = await this.roastMethodRepository.findOne({ where: { name } });
        if (roastMethod) {
            throw new common_1.HttpException('Roast Method already exists', common_1.HttpStatus.FORBIDDEN);
        }
        roastMethod = this.roastMethodRepository.create(data);
        roastMethod.created = new Date();
        await this.roastMethodRepository.save(roastMethod);
        return roastMethod;
    }
    async update(id, data) {
        const roastMethod = await this.roastMethodRepository.findOne(id);
        if (!roastMethod) {
            throw new common_1.HttpException('Not found', common_1.HttpStatus.NOT_FOUND);
        }
        await this.roastMethodRepository.update(id, data);
        return this.roastMethodRepository.findOne(id);
    }
    async remove(id) {
        const roastMethod = await this.roastMethodRepository.findOne(id);
        if (!roastMethod) {
            throw new common_1.HttpException('Not found', common_1.HttpStatus.NOT_FOUND);
        }
        await this.roastMethodRepository.delete(id);
        return roastMethod;
    }
};
RoastMethodService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(roast_method_entity_1.RoastMethod)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RoastMethodService);
exports.RoastMethodService = RoastMethodService;
//# sourceMappingURL=roast-method.service.js.map