import { Server } from './server/Server';

export class Launcher {
  private server = new Server();

  public start() {
    this.server.startServer();
  }

  public stop() {
    this.server.stopServer();
  }
}

new Launcher().start();
