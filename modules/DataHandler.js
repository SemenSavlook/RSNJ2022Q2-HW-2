import { CRUD } from './CRUD.js';
const { stdout } = process;
// import * as os from 'os';
import * as crypto from 'crypto';
import { access, readFile } from "fs/promises";

export class DataHandler extends CRUD {
  constructor() {
    super();
  }

  parser(command) {
    // remove EOL
    const [actionName, actionArgument] = command.replace(/(\r\n|\n|\r)/gm, '').replace(/ +/g, ' ').trim().split(' ');

    if (this[actionName]) {
      this[actionName](actionArgument);
    } else {
      DataHandler.invalidInput();
    }
  }

  hash(path) {
    if (!path) {
      DataHandler.invalidInput();
      return;
    }

    const hash = crypto.createHash('sha256');
    access(path)
      .then(() => readFile(path))
      .then((res) => hash.update(res))
      .then((hash) => hash.digest('hex'))
      .then((res) => stdout.write('Hash for file: ' + res + '\n'))
      .catch(() => { DataHandler.operationFailed() });

  }
}