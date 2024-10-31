import { useEffect, useState } from "react";

function ModalAlert(props) {
	let initState = {
		title: "",
		subTitle: "",
		image: "check.png",
		textClass: "",
		modalClass: "",
	};
	const [state, setState] = useState(initState);

	function closeModalHandler() {
        console.log("closed");
        props.updateGlobalState({alertBoxMsg:initState})
    }
	useEffect(() => {
		let alrtBox = props.globalState.alertBoxMsg,
			newState = {
				title: alrtBox.title,
				subTitle: alrtBox.subTitle,
				image: alrtBox.img || "check.png",
				textClass: alrtBox.class,
				modalClass: alrtBox.title ? "active" : "",
			};
		setState(newState);
	}, [props.globalState.alertBoxMsg]);

	return (
		<div id="alertModal" className={"modal_bg_overlay " + state.modalClass}>
			<div className={"modal-content " + state.modalClass} id="modal_box">
				<img
					src={require("../../assets/icons/" + state.image)}
					alt=""
					className="alert_img"
				/>
				<span className="close" id="modal_close" onClick={closeModalHandler}>
					×
				</span>
				<h1 className={"alert_title " + state.textClass}>{state.title}</h1>
				<h1 className={"alert_subtitle " + state.textClass}>
					{state.subTitle}
				</h1>
			</div>
		</div>
	);
}

export default ModalAlert;
