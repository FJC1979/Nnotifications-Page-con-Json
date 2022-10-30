/** @format */
import "./s";
document.addEventListener("click", () => restar(event));
function restar(ev) {
	let d = ev.target;
	let numCount = document.getElementById("notification_count_number").innerText;
	console.log(numCount, "fff");
	if (d.classList.contains("read")) {
		d.classList.remove("read");
		let res = numCount - 1;
		console.log(res);
		document.getElementById("notification_count_number").innerText = res;
	}
}
