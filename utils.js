const fs = require("fs")

const getCommandLine = () => {
	switch (process.platform) {
		case "darwin":
			return "open"
		case "win32":
			return "start"
		case "win64":
			return "start"
		default:
			return "xdg-open"
	}
}

const zeroFirst = s => `0${s}`.substr(-2)

const getDateString = () => {
	let d = new Date()
	return `${zeroFirst(d.getDate())}.${zeroFirst(d.getMonth() + 1)}.${d.getFullYear()} ${zeroFirst(d.getHours())}:${zeroFirst(d.getMinutes())}:${zeroFirst(d.getSeconds())}`
}

const delay = d => {
	return new Promise(resolve => setTimeout(resolve, d))
}

const log = msg => {
	const logFile = "./log.txt"
	const newLine = `${getDateString()} ${msg}`
	console.log(newLine)
	const content = fs.readFileSync(logFile).toString()
	fs.writeFileSync(logFile, `${content}${newLine}\n`)
}

module.exports = {
	log,
	delay,
	getDateString,
	getCommandLine,
}
