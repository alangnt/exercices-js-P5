//votre code ici
function printNumbers(n) {
	let chain = []
	for (let i = 1; i <= n; i++) {
		chain.push(i)
	}
	return String(chain.join(' '));
}
export default printNumbers
