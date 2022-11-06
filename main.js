/** @format */
const d = document;
const $fragment = d.createDocumentFragment();

const respuesta = async (url) => {
	const resp = await fetch(url);
	const data = await resp.json();
	data.forEach((element) => {
		console.log(element.name);
		let $name = d.createElement("p");
		$name.textContent = element.name;
		let $cel = d.createElement("p");
		$cel.textContent = element.cell;
		let $adress = d.createElement("p");
		$adress.textContent = element.adress;
		let $foto = d.createElement("img");
		$foto.src = element.photo;
		$foto.classList.add("foto");
		const div = d.createElement("div");
		div.classList.add("d");
		div.appendChild($name);
		div.appendChild($cel);
		div.appendChild($adress);
		div.appendChild($foto);
		$fragment.appendChild(div);
	});
	d.getElementById("tarjetas").appendChild($fragment);
};
respuesta("/datas.json");
/* )
fetch("/datas.json").then((Response) =>
	Response.json().then((json) => {
		const divMain = d.getElementById("contactos");
		json.map((element) => {
			let $img = d.createElement("img");
			let $p = d.createElement("p");
			$img.src = element.photo;
			$p.textContent = element.name;
			let divv = d.createElement("div");
			divv.className = "ff";

			divMain.appendChild(divv);
			divv.appendChild($p);
		});
		//divInfoContactos.appendChild(fragment);
	})
); */
