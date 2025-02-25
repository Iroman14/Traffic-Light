import { useState } from "react";

function Home() {
	const [selectedColor, setSelectedColor] = useState("red");
	const [color, setColor] = useState(["red", "yellow", "green"]);
	const [size, setSize] = useState("normal");

	const ChangeColor = () => {
		let color = ["red", "yellow", "green", "purple"];
		let index = Math.floor(Math.random() * color.length);
		setSelectedColor(color[index]);
		console.log(color[index]);
	}

	const AddColor = () => {
		if (!color.includes("purple")) {
			setColor([...color, "purple"]);
			setSize("Plus")
			console.log(setSize);
		}
	};

	const RemoveColor = () => {
		setColor(color.filter(color => color !== "purple"));
		setSize("normal");
	};

	return (
		<div className="Container">
			<div className="Cable"></div>
			<div className={`Traffic-Light${size === "Plus" ? "-Plus" : ""}`}>
				<div onClick={() => setSelectedColor("red")} className={"Light-Red" + (selectedColor === "red" ? " Shine" : "")}></div>
				<div onClick={() => setSelectedColor("yellow")} className={"Light-Yellow" + (selectedColor === "yellow" ? " Shine" : "")}></div>
				<div onClick={() => setSelectedColor("green")} className={"Light-Green" + (selectedColor === "green" ? " Shine" : "")}></div>
				{color.includes("purple") && (
					<div onClick={() => setSelectedColor("purple")} className={"Light-Purple" + (selectedColor === "purple" ? " Shine" : "")}></div>
				)}
			</div>
			<div className="d-flex justify-content-center">
				<button onClick={ChangeColor} className="btn btn-dark"> Cambiar Color </button>
				<button onClick={AddColor} className="btn btn-dark"> Añadir Color Púrpura </button>
				<button onClick={RemoveColor} className="btn btn-dark"> Quitar Color Púrpura </button>
			</div>
		</div>
	);
};

export default Home;