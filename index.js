const dgram=require('node:dgram')
const dnsPacket=require('dns-packet')

const server=dgram.createSocket('udp4')

server.on('message', (msg,rinfo)=>{
    const  incommmingRequest=dnsPacket.decode(msg)
    console.log({
        msg:incommmingRequest.questions,
        rinfo
    })
})
server.bind(53,()=>{console.log('server is runnig on port number 53')})