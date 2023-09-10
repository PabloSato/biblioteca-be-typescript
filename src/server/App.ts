import express, { Application } from 'express';
import { IncomingMessage, Server, ServerResponse } from 'http';
import morgan from 'morgan';

export class App {
  private app: Application;

  constructor() {
    this.app = express();
    this.middleware();
  }

  private middleware() {
    if (process.env.NOD_ENV === 'development') {
      this.app.use(morgan('dev'));
    }
    this.app.use(express.json());
  }

  public listen(
    port: number
  ): Server<typeof IncomingMessage, typeof ServerResponse> {
    return this.app.listen(port, () => {
      console.log(`Listening on port: ${port}...`);
    });
  }
}
