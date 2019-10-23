const fs = require('fs');

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file}`;
    }, '');

    console.log(filesToString);
  });
};

module.exports.touch = (fileName) => {
  if (!fs.existsSync(fileName)) {
    fs.writeFileSync(fileName);
    console.log(`${fileName} created successfully.`);
  } else {
    console.log(`${fileName} already exists.`);
  }
};

module.exports.mkdir = (folderName) => {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
    console.log(`${folderName} created successfully.`);
  } else {
    console.log(`${folderName} already exists.`);
  }
};
