// return username & log greetings 
export const getValuefromCLI = (argName = '--username=') => {
  const args = process.argv.slice(2);
  const arrValues = args.filter((el) => {
    return el.includes(argName);
  });

  let flag, value;

  if (arrValues.length > 0) {
    value = arrValues[0].replace(argName, '');
  }

  flag = value?.length > 0 ? true : false;
  
  if (flag) {
    console.log(`Welcome to the File Manager, ${value}!\n`)
    return value;
  } else {
    console.log('Incorrect user name\nProgramm closed');
    process.exit();
  }
}