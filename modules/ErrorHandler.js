const { stdout } = process;

// Errors
export class ErrorHandler {
  constructor(){};

  static invalidInput() {
    stdout.write('\n--Invalid input--\n');
  }

  static operationFailed() {
    stdout.write('\n--Operation failed--\n');
  }

}