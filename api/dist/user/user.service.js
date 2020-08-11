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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./user.entity");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async findAll() {
        const users = await this.userRepository.find();
        return users.map(user => user.toResponseObject());
    }
    async findOne(id) {
        const user = await this.userRepository.findOne(id);
        if (!user) {
            throw new common_1.HttpException('Not found', common_1.HttpStatus.NOT_FOUND);
        }
        return user;
    }
    async remove(id) {
        const user = await this.userRepository.findOne(id);
        if (!user) {
            throw new common_1.HttpException('Not found', common_1.HttpStatus.NOT_FOUND);
        }
        await this.userRepository.delete(id);
        return user;
    }
    async create(data) {
        const { email } = data;
        let user = await this.userRepository.findOne({ where: { email } });
        if (user) {
            throw new common_1.HttpException('User already exists', common_1.HttpStatus.FORBIDDEN);
        }
        user = this.userRepository.create(data);
        user.created = new Date();
        await this.userRepository.save(user);
        return user.toResponseObject();
    }
    async update(id, data) {
        const user = await this.userRepository.findOne(id);
        if (!user) {
            throw new common_1.HttpException('Not found', common_1.HttpStatus.NOT_FOUND);
        }
        await this.userRepository.update(id, data);
        return this.userRepository.findOne(id);
    }
    async getByEmail(email) {
        return await this.userRepository.findOne({ where: { email } });
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map