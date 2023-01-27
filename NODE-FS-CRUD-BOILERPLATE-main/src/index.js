const fs = require('fs/promises')

// const os = require("os");
// const path = require("path");

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	await fs.writeFile(fileName, fileContent, (err) => {
		console.log(err);
	})
}
myFileWriter("File.txt", "This is the content of my file.")

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	// console.log(process.argv);
	
	await fs.readFile(fileName, {encoding: "utf-8"}).then((data) => {
		console.log(data);
	});
}

myFileReader("File.txt")

const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	await fs.appendFile("File.txt", "\nThis is my updated additional strings/ content ", (issue) => {
	    console.log(issue);
	})
}
myFileUpdater("File.txt");


const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	// await fs.unlink(fileName).then(console.log("File is deleted"));

	await fs.unlink(fileName, setTimeout((err) => {
        if(err){
            console.log(err,"FIle is already deleted");
        }else {
            console.log("File is deleted");
        }
    },3000));
	
}
// myFileDeleter("File.txt");



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter}