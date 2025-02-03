import ServiceCard from "./ServiceCard";
function ServiceBox() {
  let card = [
    {
      id: 1,
      name: "WEB DESIGN",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.",
	  pic:"bi bi-briefcase card-icon"
    },
	{
		id: 2,
		name: "WEB DEVELOPMENT",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.",
		pic:"bi bi-card-checklist card-icon"
	  },
	  {
		id: 3,
		name: "PHOTOGRAPHY",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.",
		pic:"bi bi-bar-chart card-icon"
	  },
	  {
		id: 4,
		name: "RESPONSIVE DESIGN",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.",
		pic:"bi bi-binoculars card-icon"
	  },
	  {
		id: 5,
		name: "GRAPHIC DESIGN",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.",
		pic:"bi bi-brightness-high card-icon"
	  },
	  {
		id: 6,
		name: "MARKETING SERVICES",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.",
		pic:"bi bi-calendar4-week card-icon"
	  }
  ];
  return (
    <div className="service-box">
      <ServiceCard {...card[0]}></ServiceCard>
	  <ServiceCard {...card[1]}></ServiceCard>
	  <ServiceCard {...card[2]}></ServiceCard>
	  <ServiceCard {...card[3]}></ServiceCard>
	  <ServiceCard {...card[4]}></ServiceCard>
	  <ServiceCard {...card[5]}></ServiceCard>
    </div>
  );
}
export default ServiceBox;
