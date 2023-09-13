import { Request, Response } from 'express';

export abstract class CRUDController {
  constructor() {}

  public getAll(_req: Request, res: Response): void {
    res.status(200).send('GET all tags from CRUD controller');
  }
}
