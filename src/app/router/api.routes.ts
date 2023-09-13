import { Router } from 'express';

// ROUTES
import TagRoutes from './tag.routes';

export const APIRouter: Router = Router();
APIRouter.use('/tags', TagRoutes);
