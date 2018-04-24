// 5->5,5,5,5,5,5

let func1=()=>{
	for(var i = 0; i< 5; i++){
		setTimeout(function(){
			console.log(new Date(), i)
		},1000)
	}
	console.log(new Date,i)
}

// 5->0,1,2,3,4
let func2_1=()=>{
	for(var i = 0; i < 5; i++){
		(function(j){
			setTimeout(function(){
				console.log(new Date(),j)
			},1000)
		}
		)(i)
	}
	console.log(new Date(),i)
}

let func2_2=()=>{
	let timeout = (j)=>{
		setTimeout(function(){
				console.log(new Date(),j)
			},1000)
	}
	for(var i = 0; i < 5; i++){
		timeout(i)
	}
	console.log(new Date(),i)
}

let func2_3=()=>{
	let j = 0
	for(let i = 0; i < 5; i++, j++){
		setTimeout(function(){
			console.log(new Date(), i)
		},1000)
	}
	console.log(new Date(),j)
}

// 0->1->2->3->4->5
let func3_1=()=>{
	let j=0;
	for(let i=0; i<5; i++, j++){
		setTimeout(()=>{
			console.log(new Date(), i)
		},1000*i)
	}	
	setTimeout(()=>{
		console.log(new Date(),j)
	},1000*j)
}

let func3_2= async()=>{
	for(var i=0; i < 5; i++){
		await sleep(1000)
		console.log(new Date(),i)
	}
	await sleep(1000)
	console.log(new Date(),i)
}

let func3_3=()=>{
	let promises = []
	let promise = (j)=>{
		return new Promise((resolve,reject)=>{
			setTimeout(()=>{
				console.log(new Date(),j)
				resolve()
			},1000*j)
		})
	}
	for(var i = 0; i < 5; i++){
		promises.push(promise(i))
	}
	Promise.all(promises).then(()=>{
		setTimeout(()=>{
			console.log(new Date(),i)
		},1000)
	})
}


let sleep = (sleepTime)=>{
	return new Promise((resolve, reject)=>{
		setTimeout(resolve, sleepTime)
	})
}

( async()=>{
	console.log('=============func1============')
	func1()
	await sleep(2000)
	console.log('=============func2_1==========')
	func2_1()
	await sleep(2000)
	console.log('=============func2_2==========')
	func2_2()
	await sleep(2000)
	console.log('=============func2_3==========')
	func2_3()
	await sleep(2000)
	console.log('=============func3_1==========')
	func3_1()
	await sleep(6000)
	console.log('=============func3_2==========')
	func3_2()
	await sleep(7000)
	console.log('=============func3_3==========')
	func3_3()
})()
