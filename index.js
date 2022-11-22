
const os = require('node:os')

const cpu = os.cpus()

const {model} = cpu[1]

const arch = os.arch()

const network = os.networkInterfaces()["Ethernet"]

var addressvar = network.filter(scope=>{
    return scope.family == "IPv4"
})
const {address,netmask,family} = addressvar[0]
addressvar = [{address,netmask,family}]

setInterval(()=>{

    console.clear();
    const memory = parseInt(os.totalmem() / 1024 / 1024)
    const usage = parseInt(os.freemem() / 1024 / 1024)
    const porcents = parseInt((memory-usage)/memory * 100)

    const MonitoringMemory = {
        TotalMemory: memory + " MB",
        Disponible: usage + " MB",
        porcents: porcents + "%"
    }

    console.log("\n Processador: ",model,"\n Arquitetura: ",arch)
    console.log("\n Memorys")
    console.table(MonitoringMemory)
    console.table(" Internets:")
    console.table(addressvar)
},2000)