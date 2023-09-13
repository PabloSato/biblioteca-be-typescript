import { TagController } from './../controller/tag.controller';
import RoutesConfig from './../common/routes.config';
import { Router } from 'express';

class TagRoutes extends RoutesConfig {
  private router: Router;
  private controller: TagController;

  constructor() {
    super();
    this.router = Router();
    this.controller = new TagController();
  }
  routes(): Router {
    this.router.route('/').get(this.controller.getAll);

    return this.router;
  }
}

export default new TagRoutes().routes();
