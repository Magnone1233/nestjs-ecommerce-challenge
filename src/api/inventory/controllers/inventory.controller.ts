import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { InventoryService } from '../services/inventory.service';
import { CreateInventoryDto, UpdateInventoryDto } from '../dto/inventory.dto';

@Controller('inventory')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @Get()
  async findAll() {
    return this.inventoryService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.inventoryService.findOne(id);
  }

  @Post()
  async create(@Body() data: CreateInventoryDto) {
    return this.inventoryService.create(data);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() data: UpdateInventoryDto) {
    return this.inventoryService.update(id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.inventoryService.remove(id);
  }
}
