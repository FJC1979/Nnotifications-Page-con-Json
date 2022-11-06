/** @format */

function f(arr) {
	const ar = [];
	console.log(ar);
	for (const i in arr) {
		if (arr[i].length < 6) {
			ar.push(arr[i]);
		}
	}
	console.log(ar);
}
f(["jarra", "jarronaso", "jarronaso2", "jarri"]);
