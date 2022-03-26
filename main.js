const io = require('socket.io-client')
const utils = require('./utils')
const perlinNoise3d = require('perlin-noise-3d')

const noise = new perlinNoise3d();
const socket = io.connect("https://bpc-server.herokuapp.com/")
const MATCH_ID = '8Q70VlJ6Nj59'
const ID = 'GCYgIJqzbJnS'
//CfA6UYkoMI1R
//GCYgIJqzbJnS

socket.on("connect", ()=>{
	console.log("connected")
	//socket.emit('matchs', `${ID}`)
	socket.emit('join', `{id: ${ID}, match:${MATCH_ID}}`)
})

let offset = 0;
let dir = 1;

socket.on('matchs', (data) => {
	console.log(data)
})

socket.on('input', (data)=>{
	data = JSON.parse(data)
	console.log(data)

	//data
	/*let fuels = data.fuels;
	let pos = data.ship;
	let angle = getAngle(pos, fuels);
	
	output = {
		match : `${MATCH_ID}`,
		id : `${ID}`,
		I : 1,
		angle : angle
	}
	console.log(output)
	socket.on('output', JSON.stringify(output))*/
})

socket.on('msg', (data) => {
	console.log(data)
})
