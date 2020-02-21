class locations {
	category : string;
	constructor (public name, public img, public code, public city, public adress){
		this.name = name
		this.img = img;
		this.code = code;
		this.city = city;
		this.adress = adress;
		this.category = "";
	}

info(){
	return [this.name, this.img, this.code, this.city, this.adress];
	}
display(){
	return `<div class="">
				<div class="card-body">
					<h5 class="card-title text-center">${this.name}</h5>
					<p class="card-title text-center">${this.adress}, ${this.code}, ${this.city} </p>
				</div>
				<div class="">
					<img src="${this.img}" class="card-img-top img img-fluid" height="165px"alt="...">
				</div>


			
		</div>`
}
}
class sight extends locations {
	constructor (name, img, code, city, adress){
		super(name, img, code, city, adress);
		this.category = "sights";
	}
	//For Future addings//
	display(){
		return super.display() + `<div class="card-body custom">
					<h4 class="card-title text-center">Custom text</h4>
					<h4 class="card-title text-center">Custom text</h4>
					<a class="card-title text-center" href="">Custom link</a>
				</div>`
	}
}
class Restaurant extends locations {
	type : string = "";
	phone : string = "";
	website : string = "";

	constructor (name, img, code, city, adress, type, phone, website){
		super(name, img, code, city, adress);
		this.type = type;
		this.phone = phone;
		this.website = website;
		this.category = "food";
	}
	display(){
		return super.display() + `<div class="card-body text">
					<h4 class="card-title text-left pl-2">Category of Food: ${this.type}</h4>
					<p class="card-title text-left pl-2">Phone Number: ${this.phone} </p>
					<a class="card-title text-center pl-2" href="${this.website}" target="_blank">More Info</a>
				</div>`
	}
}
class Events extends locations {
	date : string = "";
	time : string = "";
	price : number = 0;
	website : string = "";

	constructor (name, img, code, city, adress, date, time, price, website){
		super(name, img, code, city, adress);
		this.date = date;
		this.time = time;
		this.price = price;
		this.website = website;
		this.category = "event";
	}
	display(){
		return super.display() + `<div class="card-body text ">
					<h4 class="card-title text-left pl-2">Date of Event: ${this.date}</h4>
					<hp class="card-title text-left pl-2">Starting Time: ${this.time}</p>
					<a class="card-title text-center" href="${this.website}" target="_blank">More Info</a>
				</div>`
	}
}
let church = new sight ("St. Charles Church", "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-400x400/07/31/a6/db.jpg", 1010, "Vienna", "Karlsplatz 1")
let park = new sight ("Schönbrunn Park", "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-400x400/06/71/12/45.jpg", 1130, "Vienna", "Maxingstraße 13b")
let on = new Restaurant ("ON Restaurant", "https://gastronews.wien/restaurants/wp-content/uploads/2016/05/Restaurant-ON_cPhilipp-Horak.jpg", 1050, "Vienna", "Wehrgasse 8", "Chinese", "43(1)5854900", "http://www.restaurant-on.at/" )
let bio = new Restaurant ("BioFrische", "https://biofrische.wien/assets/img/restaurant/001.jpg", 1150, "Vienna", "Stutterheimstraße 9", "Indian", "43(1)9529215", "https://biofrische.wien/",)
let cats = new Events ("Cats- the musical", "https://lp.bb-promotion.com/wp-content/uploads/2019/12/1400x1400_Cats_Header.jpg", 1010, "Vienna", "Ronachers - Seilerstätte 9", "Fr., 15.12.2020.", "20:00", 120, "https://lp.bb-promotion.com/landingpage/cats/")
let guns = new Events ("Guns ´n Roses", "https://cdn.ontourmedia.io/gunsnroses/site_v2/animations/gnr_loop_logo_01.jpg", 1020, "Vienna", "Ernst-Happel-Stadion, Meierstraße 7", "Sat., 09.06.2020", "19:30", 95.50, "https://www.gunsnroses.com/")

let items:Array<locations> = [];

items.push(church, park, on, bio, cats, guns);
console.log(items);

for (var i = 0; i < items.length; i++) {
		switch (items[i].category) {
			case "sights":
				var card = document.createElement("DIV");
				card.className = "col-lg-3 col-md-6 col-sm-12 infos bg-white";
				card.innerHTML = items[i].display();
				document.getElementById("cards").appendChild(card);
				break;
			case "food":
				var card = document.createElement("DIV");
				card.className = "col-lg-3 col-md-6 col-sm-12 infos bg-white";
				card.innerHTML = items[i].display();
				document.getElementById("cards").appendChild(card);
				break;
			case "event":
				var card = document.createElement("DIV");
				card.className = "col-lg-3 col-md-6 col-sm-12 infos bg-white";
				card.innerHTML = items[i].display();
				document.getElementById("cards").appendChild(card);
				break;
		}
	}
