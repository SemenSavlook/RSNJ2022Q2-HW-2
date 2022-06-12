import { ErrorHandler } from "./ErrorHandler.js";
import * as os from 'os';
const { stdout } = process;

function cpuParser(arr) {
  stdout.write('Host machine CPUs info:\n');
  arr.forEach((el, index) => {
    stdout.write((index + 1) + ': ' + el.model + '\n');
  })
}

// OSI commands
export class OSI extends ErrorHandler {
  constructor() {
    super();
  }

  os(arg){
    if (!arg) {
      OSI.invalidInput();
      return;
    }

    try {
      switch (arg) {
        case '--EOL':
          stdout.write('Default system End-Of-Line: ' + JSON.stringify(os.EOL));
          break;
  
        case '--homedir':
          stdout.write('Home directory: ' + this.homeDirectory);
          break;
          
        case '--username':
          stdout.write('System user name: ' + os.userInfo().username);
          break;

        case '--cpus':
          cpuParser(os.cpus());
          break;

        case '--architecture':
          stdout.write('Architecture: ' + os.arch() + '\n');
          break;
  
        default:
          OSI.invalidInput();
          break;
      }      
    } catch (e) {
      OSI.operationFailed();
    }

  }
}