import { Model } from 'mongoose';
import { CRUDInterface } from '../common/crud.interface';
import { Item } from 'app/model/item.type';

export class CRUDService<T extends Item> implements CRUDInterface {
  private model: Model<T>;

  constructor(model: Model<T>) {
    this.model = model;
  }

  async findAll(): Promise<Object[]> {
    return await this.model.find();
  }
  async findBy(value: string): Promise<Object | null> {
    throw new Error('Method not implemented.');
  }
  async insertOne(obj: Object): Promise<Object | null> {
    throw new Error('Method not implemented.');
  }
  async updateOne(id: string, item: Object): Promise<string> {
    throw new Error('Method not implemented.');
  }
  async deleteOne(id: string): Promise<string> {
    throw new Error('Method not implemented.');
  }
}
