import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Inventory } from 'src/database/entities/inventory.entity';
import { CreateInventoryDto, UpdateInventoryDto } from '../dto/inventory.dto';

@Injectable()
export class InventoryService {
  constructor(
    @InjectRepository(Inventory)
    private readonly inventoryRepository: Repository<Inventory>,
  ) {}

  async findAll() {
    return this.inventoryRepository.find({
      relations: ['productVariation', 'country'],
    });
  }

  async findOne(id: number) {
    const inventory = await this.inventoryRepository.findOne({
      where: { id },
      relations: ['productVariation', 'country'],
    });

    if (!inventory) {
      throw new NotFoundException(`Inventory with ID ${id} not found`);
    }

    return inventory;
  }

  async create(data: CreateInventoryDto) {
    const inventory = this.inventoryRepository.create(data);
    return this.inventoryRepository.save(inventory);
  }

  async update(id: number, data: UpdateInventoryDto) {
    const inventory = await this.findOne(id);
    Object.assign(inventory, data);
    return this.inventoryRepository.save(inventory);
  }

  async remove(id: number) {
    const inventory = await this.findOne(id);
    return this.inventoryRepository.remove(inventory);
  }
}
