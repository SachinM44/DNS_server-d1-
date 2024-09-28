const dgram=require('node:dgram')

const server=dgram.createSocket('udp4');
server.on('message',( msg, rinfo)=>{
    console.log('incommig message is', msg.toString());
})
server.bind(53,()=>{
    console.log('server is listeng on the post number 51')
})