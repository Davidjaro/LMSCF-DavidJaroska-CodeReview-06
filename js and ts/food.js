var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var locations = /** @class */ (function () {
    function locations(name, img, code, city, adress) {
        this.name = name;
        this.img = img;
        this.code = code;
        this.city = city;
        this.adress = adress;
        this.name = name;
        this.img = img;
        this.code = code;
        this.city = city;
        this.adress = adress;
        this.category = "";
    }
    locations.prototype.info = function () {
        return [this.name, this.img, this.code, this.city, this.adress];
    };
    locations.prototype.display = function () {
        return "<div class=\"\">\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t<h5 class=\"card-title text-center\">" + this.name + "</h5>\n\t\t\t\t\t<p class=\"card-title text-center\">" + this.adress + ", " + this.code + ", " + this.city + " </p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"\">\n\t\t\t\t\t<img src=\"" + this.img + "\" class=\"card-img-top img img-fluid\" height=\"165px\"alt=\"...\">\n\t\t\t\t</div>\n\n\n\t\t\t\n\t\t</div>";
    };
    return locations;
}());
var sight = /** @class */ (function (_super) {
    __extends(sight, _super);
    function sight(name, img, code, city, adress) {
        var _this = _super.call(this, name, img, code, city, adress) || this;
        _this.category = "sights";
        return _this;
    }
    //For Future addings//
    sight.prototype.display = function () {
        return _super.prototype.display.call(this) + "<div class=\"card-body custom\">\n\t\t\t\t\t<h4 class=\"card-title text-center\">Custom text</h4>\n\t\t\t\t\t<h4 class=\"card-title text-center\">Custom text</h4>\n\t\t\t\t\t<a class=\"card-title text-center\" href=\"\">Custom link</a>\n\t\t\t\t</div>";
    };
    return sight;
}(locations));
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(name, img, code, city, adress, type, phone, website) {
        var _this = _super.call(this, name, img, code, city, adress) || this;
        _this.type = "";
        _this.phone = "";
        _this.website = "";
        _this.type = type;
        _this.phone = phone;
        _this.website = website;
        _this.category = "food";
        return _this;
    }
    Restaurant.prototype.display = function () {
        return _super.prototype.display.call(this) + ("<div class=\"card-body text\">\n\t\t\t\t\t<h4 class=\"card-title text-left pl-2\">Category of Food: " + this.type + "</h4>\n\t\t\t\t\t<p class=\"card-title text-left pl-2\">Phone Number: " + this.phone + " </p>\n\t\t\t\t\t<a class=\"card-title text-center pl-2\" href=\"" + this.website + "\" target=\"_blank\">More Info</a>\n\t\t\t\t</div>");
    };
    return Restaurant;
}(locations));
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(name, img, code, city, adress, date, time, price, website) {
        var _this = _super.call(this, name, img, code, city, adress) || this;
        _this.date = "";
        _this.time = "";
        _this.price = 0;
        _this.website = "";
        _this.date = date;
        _this.time = time;
        _this.price = price;
        _this.website = website;
        _this.category = "event";
        return _this;
    }
    Events.prototype.display = function () {
        return _super.prototype.display.call(this) + ("<div class=\"card-body text \">\n\t\t\t\t\t<h4 class=\"card-title text-left pl-2\">Date of Event: " + this.date + "</h4>\n\t\t\t\t\t<hp class=\"card-title text-left pl-2\">Starting Time: " + this.time + "</p>\n\t\t\t\t\t<a class=\"card-title text-center\" href=\"" + this.website + "\" target=\"_blank\">More Info</a>\n\t\t\t\t</div>");
    };
    return Events;
}(locations));
var church = new sight("St. Charles Church", "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-400x400/07/31/a6/db.jpg", 1010, "Vienna", "Karlsplatz 1");
var park = new sight("Schönbrunn Park", "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-400x400/06/71/12/45.jpg", 1130, "Vienna", "Maxingstraße 13b");
var on = new Restaurant("ON Restaurant", "https://gastronews.wien/restaurants/wp-content/uploads/2016/05/Restaurant-ON_cPhilipp-Horak.jpg", 1050, "Vienna", "Wehrgasse 8", "Chinese", "43(1)5854900", "http://www.restaurant-on.at/");
var bio = new Restaurant("BioFrische", "https://biofrische.wien/assets/img/restaurant/001.jpg", 1150, "Vienna", "Stutterheimstraße 9", "Indian", "43(1)9529215", "https://biofrische.wien/");
var cats = new Events("Cats- the musical", "https://lp.bb-promotion.com/wp-content/uploads/2019/12/1400x1400_Cats_Header.jpg", 1010, "Vienna", "Ronachers - Seilerstätte 9", "Fr., 15.12.2020.", "20:00", 120, "https://lp.bb-promotion.com/landingpage/cats/");
var guns = new Events("Guns ´n Roses", "https://cdn.ontourmedia.io/gunsnroses/site_v2/animations/gnr_loop_logo_01.jpg", 1020, "Vienna", "Ernst-Happel-Stadion, Meierstraße 7", "Sat., 09.06.2020", "19:30", 95.50, "https://www.gunsnroses.com/");
var items = [];
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
