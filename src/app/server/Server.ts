import http from 'http';
import { App } from './App';

export class Server {
  private app;
  private server:
    | http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>
    | undefined = undefined;

  constructor() {
    this.app = new App();
  }

  public startServer() {
    const port: number = process.env.PORT ? +process.env.PORT : 3000;
    this.server = this.app.listen(port);
  }

  public stopServer() {
    if (this.server) {
      this.server.close();
      console.log('Server close');
    }
  }
}
