const os = require('os-utils');

function getCpuUsage(){
    return new Promise((resolve, reject) => {
        try{
            os.cpuUsage((cpu) => resolve(cpu));
        } catch (error) {
            reject(error);
        }
    })
}

function memoryUsage(){
    const arr = [1, 2, 3, 4, 5, 6, 9, 7, 8, 9, 10];
    arr.reverse();
    const used = process.memoryUsage().heapUsed / 1024 / 1024;
    return Math.round(used * 100) / 100;
}

module.exports = {
    getCpuUsage,
    memoryUsage
}