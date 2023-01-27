const execute = require('./index')
const { myFileWriter, myFileUpdater, myFileReader, myFileDeleter } = execute;

const fileName = 'file.txt'
const fileContent = 'Hello'
const updateContent = 'World'

myFileWriter(fileName, fileContent)

myFileUpdater(fileName, updateContent)

myFileReader(fileName).then(data =>{
        console.log(data);
})

myFileDeleter(fileName)