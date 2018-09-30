// get arguments
let args = process.argv; utilMULTISHIFT(args, 2);

switch (args[0]) {
	case "-h": case "--help": {
		console.log(utilINFO([
			"-r --range\ta shuffled range of numbers (eg. -r 1-100)"
		]));
	} break;

	case "-r": case "--range": {
		args.shift();

		let range = args.join(""); 
		range = range.replace(/ |[a-z]/gi, "");
		range = range.split("-");
		range = utilGENARR(parseInt(range[0]), parseInt(range[1]));
		range = utilSHUFFLE(range);

		console.log(`Input:  [${range.join()}]`);
		console.log(`Sorted: [${compsort(range).join()}]`);

	} break;

	default:
		console.log(utilERROR("Invalid argument\n\tSee -h for available commands"));
}

function compsort(array) {
	return array;
}

function utilERROR(details, source = "compsort") { return `${source} [error]\n=>\t${details}`; }
function utilINFO(details) { return `compsort [info]\n=>\t${details.join("\n\t")}`; }

function utilMULTISHIFT(array, amount) {
	for (let i = 0; i < amount; i++)
		array.shift();
}

function utilSHUFFLE(array) {
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}

	return array;
}

function utilGENARR(rOne, rTwo) {
	let array = [];

	for (let i = rOne; i < rTwo + 1; i++)
		array.push(i);

	return array;
}
