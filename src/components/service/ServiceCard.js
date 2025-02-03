import "./ServiceCard.css"
function ServiceCard(props){
	return(
		<div className="service-card">
			<i className={props.pic} ></i>
			<p className="service-title">{props.name}</p>
			<p className="service-text">{props.text}</p>
		</div>


	)
}
export default ServiceCard;