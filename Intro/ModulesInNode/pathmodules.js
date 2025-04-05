const path=require("path");
console.log(__dirname);
console.log(__filename)

const filepath=path.join("folder","students","data.txt");
console.log(filepath)

const xyz=path.resolve(filepath)
console.log(xyz)

const a=path.dirname(filepath)
console.log(a)
const filename=path.basename(filepath)
console.log(filename)

const ext=path.extname(filepath)
console.log(ext)

const parsedata=path.parse(filepath)
console.log(parsedata)
