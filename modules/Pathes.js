
import { OSI } from './OSI.js';
import * as os from 'os';
import { chdir, cwd } from 'process';
import * as path from 'path';
import { access, readdir } from "fs/promises";
const { stdout } = process;

// Pathes & navigation
export class Pathes extends OSI {
  constructor() {
    super();
    this.homeDirectory = os.homedir();
    chdir(this.homeDirectory);
    this.curentWorkDir();
  }

  curentWorkDir() {
    const CWD = path.resolve(cwd());
    stdout.write('\n');
    stdout.write('You are currently in: ' + CWD + '\n');
    stdout.write('\n');
    return CWD;
  }

  static getCurentWorkDir() {
    return path.resolve(cwd());
  }

  up() {
    let upper = Pathes.getCurentWorkDir().split('\\');
    upper.pop();
    const upperPath = upper.join('\\') + '\\';
    chdir(upperPath);
  }

  cd(path) {
    try {
      chdir(path)
    } catch (e) {
      Pathes.operationFailed();
    }
  }

  ls(filePath) {
    access(filePath)
      .then(() => readdir(filePath))
      .then((result) => console.log(result))
      .catch(() => { Pathes.operationFailed() })
  }
}