// get arguments
let args = process.argv; utilMULTISHIFT(args, 2);

switch (args[0]) {
	case "-h": case "--help": {
		console.log(utilINFO([
			"-r --range\ta shuffled range of numbers (eg. -r 1-100)"
		]));
	} break;

	default:
		console.log(utilERROR("Invalid argument\n\tSee -h for available commands"));
}

function utilERROR(details, source = "compsort") { return `${source} [error]\n=>\t${details}`; }
function utilINFO(details) { return `compsort [info]\n=>\t${details.join("\n\t")}`; }

function utilMULTISHIFT(array, amount) {
	for (let i = 0; i < amount; i++)
		array.shift();
}
