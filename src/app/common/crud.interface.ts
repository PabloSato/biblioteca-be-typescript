export interface CRUDInterface {
  findAll(): Promise<Object[]>;
  findBy(value: string): Promise<Object | null>;
  insertOne(obj: Object): Promise<Object | null>;
  updateOne(id: string, item: Object): Promise<string>;
  deleteOne(id: string): Promise<string>;
}
