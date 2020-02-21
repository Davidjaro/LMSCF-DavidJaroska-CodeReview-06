class locations {
	constructor (public name, public img, public code, public city, public adress){
		this.name = name
		this.img = img;
		this.code = code;
		this.city = city;
		this.adress = adress;
	}

info(){
	return [this.name, this.img, this.code, this.city, this.adress];
	}
display(){
	return `<div class="col-lg-3 col-md-6 col-sm-12" style="width: 18rem;">
				<div class="card-body text">
					<h5 class="card-title text-center">${this.name}</h5>
					<h4 class="card-title text-center">${this.adress}, </h4>
					<h4 class="card-title text-center d-inline">${this.code} </h4>
					<h4 class="card-title text-center d-inline">${this.city}</h4>
				</div>
				<div class="card mx-3" style="width: 18rem;">
					<img src="${this.img}" class="card-img-top" height="165px"alt="...">
				</div>


			
		</div>`
}
}
class Restaurant extends locations {
	type : string = "";
	phone : number = 0;
	website : string = "";

	constructor (name, img, code, city, adress, type, phone, website,){
		super(name, img, code, city, adress);
		this.type = type;
		this.phone = phone;
		this.website = website;
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
	}
}
let church = new locations ("St. Charles Church", "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-400x400/07/31/a6/db.jpg", 1010, "Vienna", "Karlsplatz 1")
let park = new locations ("Schönbrunn Park", "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-400x400/06/71/12/45.jpg", 1130, "Vienna", "Maxingstraße 13b")
let on = new Restaurant ("ON Restaurant", "https://gastronews.wien/restaurants/wp-content/uploads/2016/05/Restaurant-ON_cPhilipp-Horak.jpg", 1050, "Vienna", "Wehrgasse 8", "Chinese", 4315854900, "http://www.restaurant-on.at/" )
let bio = new Restaurant ("BioFrische", "https://biofrische.wien/assets/img/restaurant/001.jpg", 1150, "Vienna", "Stutterheimstraße 9", "Indian", 4319529215, "https://biofrische.wien/")
let cats = new Events ("Cats- the musical", "https://lp.bb-promotion.com/wp-content/uploads/2019/12/1400x1400_Cats_Header.jpg", 1010, "Vienna", "Ronachers - Seilerstätte 9", "Fr., 15.12.2020.", "20:00", 120, "https://lp.bb-promotion.com/landingpage/cats/")
let guns = new Events ("Guns ´n Roses", "https://cdn.ontourmedia.io/gunsnroses/site_v2/animations/gnr_loop_logo_01.jpg", 1020, "Vienna", "Ernst-Happel-Stadion, Meierstraße 7", "Sat., 09.06.2020", "19:30", 95.50, "https://www.gunsnroses.com/")

let items:Array<locations> = [];

items.push(church, park, on, bio, cats, guns);