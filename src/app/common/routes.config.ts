import { Router } from 'express';

export default abstract class RoutesConfig {
  abstract routes(): Router;
}
