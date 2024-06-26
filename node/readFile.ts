import fs from "fs";

export default class ReadFile {
    filePath: string;
    
    constructor() {
        this.filePath = "sample.txt"
    }

    start(): Promise<any> {
        return new Promise((resolve, reject) => {
            fs.readFile(this.filePath, (err, data) => {
                if(err) {
                    console.log("Error while reading file.")
                    reject(err)
                    return err
                } else {
                    console.log("Reading the file...")
                    
                    const buff = Buffer.from(data)
                    console.log("DATA - ", data.toString())
                    resolve(data)
                    return data
                }
            })
        })
    }
}