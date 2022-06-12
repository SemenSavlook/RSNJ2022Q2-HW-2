const { stdin, stdout } = process;

import { getValuefromCLI } from "./modules/getName.js";
import { DataHandler } from "./modules/DataHandler.js";

const userName = getValuefromCLI('--username=');

const dataHandler = new DataHandler();
process.on('exit', () => stdout.write(`\nThank you for using File Manager, ${userName}\n`));
process.on('SIGINT', () => process.exit());


stdout.write('Waiting for commands... \n');
stdin.on('data', (data) => {
  dataHandler.parser(data.toString());
  setTimeout(() => {
    dataHandler.curentWorkDir();    
  }, 5);
});
