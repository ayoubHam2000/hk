const io = require('socket.io-client')
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
	socket.emit('join', `{match:${MATCH_ID}, id: ${ID}}`)
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
	let fuels = data.fuels;
	let pos = data.ship;
	let angle = 0;
	
	if (length(fuels) > 0)
	{
		fuel = fuels[0]
		let angle = Math.atan2(fuel.y - pos.y, fuel.y - pos.x)
		if (angle <= 0)
			angle = -angle
		else
			angle = 360 - angle
	}
	output = {
		match : '',
		id : '',
		I : 1,
		angle : angle
	}
	socket.on('output', JSON.stringify(output))
})

socket.on('msg', (data) => {
	console.log(data)
})
