const https = require("https")
const readline = require("readline")
const fs = require("fs")
const exec = require("child_process").exec
const {log, delay, getDateString, getCommandLine} = require("./utils.js")

let isConnected = false
;(function loop() {
	const onError = async () => {
		log("No connection")
		isConnected = false
		await delay(3000)
		loop()
	}
	const onSucces = async () => {
		log("Connected!")
		!isConnected && exec(`${getCommandLine()} ${__dirname}/beep.mp3`)
		isConnected = true
		await delay(3000)
		loop()
	}
	const req = https.get("https://google.com", res => {
		onSucces()
	})
	req.on("error", onError)
	req.end()
})()
