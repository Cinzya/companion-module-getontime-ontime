/**
 * @param {number} number - number to pad
 * @return {string} - padded number
 */

function padTo2Digits(number: Number) {
	return number.toString().padStart(2, '0')
}

/**
 *
 * @typedef {Object} ReadableTime
 * @property {string} hours - hours in format hh
 * @property {string} minutes - minutes in format mm
 * @property {string} seconds - seconds in format ss
 */

/**
 * @param {number} time - time in format s or ms
 * @param {string} [format=ms] - format of time (s or ms)
 * @return {ReadableTime} - object with hours, minutes and seconds
 */

export function toReadableTime(time: number, format: string = 'ms') {
	let negative = false
	time = Number(time)
	if (time < 0) {
		time = time * -1
		negative = true
	} else {
		negative = false
	}

	if (format === 's') {
		time = time * 1000
	}

	const s = Math.floor(time / 1000)
	const m = Math.floor(s / 60)
	const h = Math.floor(m / 60)

	const seconds = padTo2Digits(s % 60)
	const minutes = padTo2Digits(m % 60)
	let hours = padTo2Digits(h % 24)

	if (negative) {
		hours = '-' + hours
	}

	return {
		hours: String(hours),
		minutes: String(minutes),
		seconds: String(seconds),
	}
}
