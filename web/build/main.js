webpackJsonp([0],{

/***/ 110:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__places_places__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__places_places__["a" /* PlacesPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__about_about__["a" /* AboutPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\development\ionic\daerecomenda\src\pages\tabs\tabs.html"*/'<ion-tabs selectedIndex="0">\n\n  <ion-tab [root]="tab1Root" tabTitle="Início" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Locais" tabIcon="map"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Sobre a DAE" tabIcon="information-circle"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\development\ionic\daerecomenda\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        //Set day salut
        var time_hour = new Date().getHours();
        if (time_hour >= 0 && time_hour < 12) {
            this.period = 'bom dia';
        }
        else if (time_hour >= 12 && time_hour < 18) {
            this.period = 'boa tarde';
        }
        else {
            this.period = 'boa noite';
        }
    }
    HomePage.prototype.switchTab = function (tabIndex, origin) {
        var _this = this;
        this.storage.set('selectedTabOrigin', origin).then(function () {
            _this.navCtrl.parent.select(tabIndex);
        });
    };
    HomePage.prototype.ngOnInit = function () {
    };
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\development\ionic\daerecomenda\src\pages\home\home.html"*/'<ion-content>\n\n\n\n  <header>\n\n    <img src="assets/imgs/logo-dae-recomenda.png"/>\n\n    <div class="text-welcome">\n\n      <h1>Olá, {{period}}!</h1>\n\n      <p>Como podemos te ajudar hoje?</p>\n\n    </div>\n\n  </header>\n\n  \n\n  <ion-list>\n\n    \n\n    <ion-card (click)="switchTab(1, \'help\')">\n\n      <ion-card-content>\n\n        <h2>Me ajude a encontrar um local de apoio</h2>\n\n        <p>\n\n          Escolhendo os filtros de pesquisa vamos poder informar o lugar mais apropriado\n\n        </p>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card (click)="switchTab(1, \'places\')">\n\n      <ion-card-content>\n\n        <h2>Mostrar locais de apoio</h2>\n\n        <p>\n\n          Acesse a lista completa de locais de apoio recomendados pela DAE\n\n        </p>\n\n      </ion-card-content>\n\n    </ion-card>\n\n    \n\n    <ion-card (click)="switchTab(2 , \'about\')">\n\n      <ion-card-content>\n\n        <h2>Conhecer a DAE</h2>\n\n        <p>\n\n          Saiba mais informações sobre a Divisão de Atenção ao Estudante, a DAE\n\n        </p>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\development\ionic\daerecomenda\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__places_modal_places_modal__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__filters_modal_filters_modal__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_place_service_place_service__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_geolib__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_geolib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_geolib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_leaflet__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_leaflet__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PlacesPage = /** @class */ (function () {
    function PlacesPage(navCtrl, navParams, modalCtrl, loadingCtrl, geolocation, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.geolocation = geolocation;
        this.storage = storage;
        this.user_location = null;
        this.map_center_default = [-3.798484, -38.534546];
        this.placesServiceInstance = new __WEBPACK_IMPORTED_MODULE_4__providers_place_service_place_service__["a" /* PlaceService */]();
        this.filter = {
            search: '',
            c: [
                this.placesServiceInstance.categories.psicologico.name
            ],
            t: []
        };
        this.places = this.placesServiceInstance.getPlaces(this.filter);
        this.map_markers = new Array();
        this.view_mode = 'view-mode-list';
        this.map_ready = false;
    }
    PlacesPage.prototype.viewModeChange = function (event) {
        var _this = this;
        if (this.view_mode === 'view-mode-map') {
            if (!this.map_ready) {
                this.buildMap();
                this.map_ready = true;
            }
            else {
                setTimeout(function () {
                    _this.map.invalidateSize();
                }, 400);
            }
        }
    };
    PlacesPage.prototype.onSearchInput = function (event) {
        this.places = this.placesServiceInstance.getPlaces(this.filter);
    };
    PlacesPage.prototype.openFiltersModal = function () {
        var _this = this;
        var data = {
            filter: this.filter,
            categories: this.placesServiceInstance.categories,
            tags: this.placesServiceInstance.tags
        };
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__filters_modal_filters_modal__["a" /* FiltersModalPage */], data);
        modal.present();
        modal.onDidDismiss(function (data) {
            _this.places = _this.placesServiceInstance.getPlaces(data);
        });
    };
    PlacesPage.prototype.openPlaceModal = function (place) {
        var _this = this;
        var data = {
            filters: this.filter,
            place: place,
            categories: this.placesServiceInstance.categories,
            tags: this.placesServiceInstance.tags
        };
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__places_modal_places_modal__["a" /* PlacesModalPage */], data);
        modal.present();
        modal.onDidDismiss(function (data) {
            _this.places = _this.placesServiceInstance.getPlaces(data);
        });
    };
    PlacesPage.prototype.getPlaceDistance = function (place) {
        if (this.user_location !== null && place.location.latlng !== null) {
            var distance = __WEBPACK_IMPORTED_MODULE_7_geolib___default.a.getDistance({ 'latitude': this.user_location[0], 'longitude': this.user_location[1] }, { 'latitude': place.location.latlng[0], 'longitude': place.location.latlng[1] });
            if (distance < 1000) {
                return distance + " metros de dist\u00E2ncia";
            }
            else {
                return (distance / 1000).toFixed(2) + " km de dist\u00E2ncia";
            }
        }
        else {
            return 'Informação não disponível';
        }
    };
    PlacesPage.prototype.buildMap = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Carregando mapa...'
        });
        loading.present();
        var map_center = (this.user_location !== null) ? this.user_location : this.map_center_default;
        this.map = __WEBPACK_IMPORTED_MODULE_8_leaflet___default.a.map('map', {
            center: map_center,
            zoom: 12
        });
        __WEBPACK_IMPORTED_MODULE_8_leaflet___default.a.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'DAE Recomenda - UFC SMD',
            maxzoom: 18,
            id: 'daerecomenda.places',
            accessToken: 'pk.eyJ1IjoiZmFsbWVpZGFjbyIsImEiOiJjam94Z3VueTIwdWlmM3ZvM25xMjh3enlnIn0.rr08D5uKKc-X9aJwxvviQQ'
        }).addTo(this.map);
        if (this.user_location !== null) {
            var user_location_market = __WEBPACK_IMPORTED_MODULE_8_leaflet___default.a.marker(this.user_location, { 'icon': __WEBPACK_IMPORTED_MODULE_8_leaflet___default.a.icon({
                    iconUrl: 'assets/imgs/icon-pin-user-location-2.png',
                    iconSize: [38, 38],
                    iconAnchor: [17, 38],
                    popupAnchor: [0, -30]
                }) })
                .bindPopup('<p>Esta é sua localização</p>')
                .addTo(this.map);
        }
        var _loop_1 = function (i) {
            if (this_1.places[i].location.latlng !== null) {
                var marker = __WEBPACK_IMPORTED_MODULE_8_leaflet___default.a.marker(this_1.places[i].location.latlng);
                this_1.map.addLayer(marker);
                marker.bindPopup("\n          <div class=\"marker-popup-title\"><strong>" + this_1.places[i].name + "</strong></div>\n          <div class=\"marker-popup-content\">\n            <a href=\"#placeIndex-" + i + "\" class=\"marker-item-action-id-" + i + "\">Saiba mais</a>\n          </div>\n        ").on('click', function (event) {
                    document.querySelector('.marker-item-action-id-' + i).addEventListener('click', function (ev) {
                        ev.preventDefault();
                        _this.openPlaceModal(_this.places[i]);
                    }, false);
                });
                this_1.map_markers.push(marker);
            }
        };
        var this_1 = this;
        for (var i = 0; i < this.places.length; i = i + 1) {
            _loop_1(i);
        }
        setTimeout(function () {
            _this.map.invalidateSize();
            loading.dismiss();
        }, 400);
    };
    PlacesPage.prototype.getUserCoordinates = function () {
        var _this = this;
        this.geolocation.getCurrentPosition()
            .then(function (resp) {
            _this.user_location = [resp.coords.latitude, resp.coords.longitude];
        }).catch(function (error) {
            _this.user_location = null;
        });
    };
    PlacesPage.prototype.noOnInit = function () {
    };
    PlacesPage.prototype.ionViewDidLoad = function () {
        this.getUserCoordinates();
    };
    PlacesPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.storage.get('selectedTabOrigin').then(function (val) {
            console.log('enter with: ', val);
            if (val === 'help') {
                _this.openFiltersModal();
                _this.storage.set('selectedTabOrigin', '');
            }
            console.log('leav with: ', val);
        });
    };
    PlacesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-places',template:/*ion-inline-start:"C:\development\ionic\daerecomenda\src\pages\places\places.html"*/'<ion-header>\n\n  <ion-navbar icon-start>\n\n    <ion-title>Locais de Apoio</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-start (click)="openFiltersModal()" color="primary">\n\n        <ion-icon name="list-box"></ion-icon>\n\n        Filtros\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n  <ion-toolbar>\n\n    <ion-segment [(ngModel)]="view_mode" (ionChange)="viewModeChange($event)">\n\n      <ion-segment-button value="view-mode-list">\n\n        Exibir lista\n\n      </ion-segment-button>\n\n      <ion-segment-button value="view-mode-map">\n\n        Exibir mapa\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content [class]="view_mode">\n\n  <div id="list-container">\n\n    <ion-searchbar [(ngModel)]="filter.search" (ionInput)="onSearchInput($event)" placeholder="Pesquise pelo nome"></ion-searchbar>\n\n    <ion-scroll style="width:100%;height:100vh" scrollY="true">\n\n      <header>\n\n          <p>Locais encontrados <ion-badge>{{places.length}}</ion-badge> </p>\n\n      </header>\n\n      <main class="content-list">    \n\n        <!-- List of cads -->\n\n        <ion-card *ngFor="let place of places" (click)="openPlaceModal(place)">\n\n          <img src="{{place.image}}"/>\n\n          <ion-card-content>\n\n            <div class="block-content content-title">\n\n              <ion-card-title>{{place.name}}</ion-card-title>\n\n              <p class="place-distance">\n\n                <ion-icon name="pin" small></ion-icon> {{getPlaceDistance(place)}}\n\n              </p>\n\n              <p>{{place.description | slice:0:255}}...</p>\n\n            </div>\n\n            <div class="block-content content-categories">\n\n                <div>\n\n                  <span *ngFor="let category of place.categories" class="ion-badge-list">\n\n                    <ion-badge>{{placesServiceInstance.categories[category].label | uppercase}}</ion-badge>\n\n                  </span>\n\n                </div>\n\n            </div>\n\n            <button ion-button icon-end outline block color="primary">\n\n              <div>Saiba mais</div>\n\n              <ion-icon name="arrow-round-forward"></ion-icon>\n\n            </button>\n\n          </ion-card-content>     \n\n        </ion-card>\n\n        <!-- /List of cards -->\n\n      </main>\n\n    </ion-scroll>\n\n  </div>\n\n  <div id="map-container">\n\n    <div id="map"></div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\development\ionic\daerecomenda\src\pages\places\places.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]])
    ], PlacesPage);
    return PlacesPage;
}());

//# sourceMappingURL=places.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacesModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlacesModalPage = /** @class */ (function () {
    function PlacesModalPage(navCtrl, navParams, viewCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.phones = new Array();
        this.websites = new Array();
        this.emails = new Array();
        this.filters = navParams.get('filters');
        this.place = navParams.get('place');
        this.categories = navParams.get('categories');
        this.tags = navParams.get('tags');
        for (var i = 0; i < this.place.metadata.length; i = i + 1) {
            if (this.place.metadata[i].name === 'phone') {
                this.phones.push(this.place.metadata[i]);
            }
            else if (this.place.metadata[i].name === 'email') {
                this.emails.push(this.place.metadata[i]);
            }
            else if (this.place.metadata[i].name === 'website') {
                this.websites.push(this.place.metadata[i]);
            }
        }
    }
    PlacesModalPage.prototype.toggleFilter = function (event, filter_type, filter) {
        var toast_action;
        if (this.filters[filter_type].indexOf(filter.name) > -1) {
            this.filters[filter_type] = this.filters[filter_type].filter(function (item) {
                return (filter.name === item) ? false : true;
            });
            toast_action = 'desabilitado';
        }
        else {
            this.filters[filter_type].push(filter.name);
            toast_action = 'habilitado';
        }
        var toast = this.toastCtrl.create({
            message: "Filtro \"" + filter.label + "\" " + toast_action,
            duration: 2000,
            position: 'bottom'
        });
        toast.present();
    };
    PlacesModalPage.prototype.isSelectedFilter = function (type, name) {
        var t = (type === 'category') ? 'c' : 't';
        return (this.filters[t].indexOf(name) > -1) ? 'ion-badge-list badge-selected' : 'ion-badge-list';
    };
    PlacesModalPage.prototype.metadataAction = function (type, value) {
        if (type === 'phone') {
            window.open('tel:' + value.replace(/[^0-9\.]+/g, ''));
        }
        else if (type === 'map') {
            window.open('https://maps.google.com/?q=' + value);
        }
        else if (type === 'email') {
            window.open('mailto:' + value);
        }
        else if (type === 'website') {
            window.open(value);
        }
    };
    PlacesModalPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss(this.filters);
    };
    PlacesModalPage.prototype.ionViewDidLoad = function () {
    };
    PlacesModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-places-modal',template:/*ion-inline-start:"C:\development\ionic\daerecomenda\src\pages\places-modal\places-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Informações do local</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-start (click)="closeModal()" color="danger">\n\n        <ion-icon name="close"></ion-icon>\n\n        Fechar\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <header>\n\n    <h1>{{place.name}}</h1>\n\n    <p>{{place.description}}</p>\n\n  </header>\n\n  <div class="block-content">\n\n    <h2>Endereço</h2>\n\n    <p>{{place.location.full_address}} - {{place.location.city}}, {{place.location.state}}</p>\n\n  </div>\n\n  <div class="block-content block-content-categories">\n\n    <h2>Serviços</h2>\n\n    <div>\n\n      <span *ngFor="let category of place.categories" [class]="isSelectedFilter(\'category\', categories[category].name)">\n\n        <ion-badge (click)="toggleFilter($event, \'c\', categories[category])">{{categories[category].label | uppercase}}</ion-badge>\n\n      </span>\n\n    </div>\n\n  </div>\n\n  <div class="block-content block-content-tags">\n\n    <h2>Características do local</h2>\n\n    <div>\n\n      <span *ngFor="let tag of place.tags" [class]="isSelectedFilter(\'tag\', tags[tag].name)">\n\n        <ion-badge (click)="toggleFilter($event, \'t\', tags[tag])" color="lightgray">{{tags[tag].label | uppercase}}</ion-badge>\n\n      </span>\n\n    </div>\n\n  </div>\n\n  <div class="metatag-list">\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-icon name="map" item-start></ion-icon>\n\n        <h2>Endereço</h2>\n\n        <h3>{{place.location.full_address}}</h3>\n\n        <button ion-button clear item-end (click)="metadataAction(\'map\', place.location.full_address + \' - \' + place.location.city + \', \' + place.location.state)">Mapa</button>\n\n      </ion-item>\n\n      <ion-item *ngFor="let phone of phones">\n\n        <ion-icon name="call" item-start></ion-icon>\n\n        <h2>Telefone</h2>\n\n        <h3>{{phone.value}}</h3>\n\n        <button ion-button clear item-end (click)="metadataAction(\'phone\', phone.value)">Ligar</button>\n\n      </ion-item>\n\n      <ion-item *ngFor="let email of emails">\n\n        <ion-icon name="mail" item-start></ion-icon>\n\n        <h2>E-mail</h2>\n\n        <h3>{{email.value}}</h3>\n\n        <button ion-button clear item-end (click)="metadataAction(\'email\', email.value)">Mensagem</button>\n\n      </ion-item>\n\n      <ion-item *ngFor="let website of websites">\n\n        <ion-icon name="globe" item-start></ion-icon>\n\n        <h2>Site</h2>\n\n        <h3>{{website.value}}</h3>\n\n        <button ion-button clear item-end (click)="metadataAction(\'website\', website.value)">Acessar</button>\n\n      </ion-item>\n\n    </ion-list>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\development\ionic\daerecomenda\src\pages\places-modal\places-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], PlacesModalPage);
    return PlacesModalPage;
}());

//# sourceMappingURL=places-modal.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiltersModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FiltersModalPage = /** @class */ (function () {
    function FiltersModalPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.categories_array = new Array();
        this.tags_array = new Array();
        this.filter = navParams.get('filter');
        this.categories = navParams.get('categories');
        for (var key in this.categories) {
            this.categories_array.push(this.categories[key]);
        }
        this.tags = navParams.get('tags');
        for (var key in this.tags) {
            this.tags_array.push(this.tags[key]);
        }
    }
    FiltersModalPage.prototype.isCategoryEnabled = function (key) {
        return this.filter.c.indexOf(key) > -1;
    };
    FiltersModalPage.prototype.isTagEnabled = function (key) {
        return this.filter.t.indexOf(key) > -1;
    };
    FiltersModalPage.prototype.changeFilter = function (event, type, value) {
        if (event._value) {
            if (type === 'category') {
                this.filter.c.push(value);
            }
            else if (type === 'tag') {
                this.filter.t.push(value);
            }
        }
        else {
            if (type === 'category') {
                this.filter.c = this.filter.c.filter(function (v) {
                    return !(v == value);
                });
            }
            else if (type === 'tag') {
                this.filter.t = this.filter.t.filter(function (v) {
                    return !(v == value);
                });
            }
        }
    };
    FiltersModalPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss(this.filter);
    };
    FiltersModalPage.prototype.ionViewDidLoad = function () {
    };
    FiltersModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-filters-modal',template:/*ion-inline-start:"C:\development\ionic\daerecomenda\src\pages\filters-modal\filters-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Filtar Locais</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-start (click)="closeModal()" color="danger">\n\n        <ion-icon name="close"></ion-icon>\n\n        Fechar\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n\n\n    <ion-item>\n\n      <h2>Categorias de serviço</h2>\n\n      <p>Escolha as categorias de serviços que deseja</p>\n\n    </ion-item>\n\n    <ion-item *ngFor="let category of categories_array">\n\n      <ion-label>{{category.label}}</ion-label>\n\n      <ion-toggle (ionChange)="changeFilter($event, \'category\', category.name)" checked="{{isCategoryEnabled(category.name)}}"></ion-toggle>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <h2>Características dos locais</h2>\n\n      <p>Escolha as características dos locais indicados</p>\n\n    </ion-item>\n\n    <ion-item *ngFor="let tag of tags_array">\n\n      <ion-label>{{tag.label}}</ion-label>\n\n      <ion-toggle (ionChange)="changeFilter($event, \'tag\', tag.name)" checked="{{isTagEnabled(tag.name)}}"></ion-toggle>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <button ion-button block large outline (click)="closeModal()">Fechar</button>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n  '/*ion-inline-end:"C:\development\ionic\daerecomenda\src\pages\filters-modal\filters-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], FiltersModalPage);
    return FiltersModalPage;
}());

//# sourceMappingURL=filters-modal.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_modal_about_modal__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    AboutPage.prototype.openAboutModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__about_modal_about_modal__["a" /* AboutModalPage */]);
        modal.present();
        modal.onDidDismiss(function (data) {
        });
    };
    AboutPage.prototype.closeAboutModal = function () {
    };
    AboutPage.prototype.metadataAction = function (type, value) {
        if (type === 'phone') {
            window.open('tel:' + value.replace(/[^0-9\.]+/g, ''));
        }
        else if (type === 'map') {
            window.open('https://maps.google.com/?q=' + value);
        }
        else if (type === 'email') {
            window.open('mailto:' + value);
        }
        else if (type === 'website') {
            window.open(value);
        }
    };
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\development\ionic\daerecomenda\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Conheça a DAE</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-start (click)="openAboutModal()">\n\n        <ion-icon name="flash"></ion-icon>\n\n        Sobre o App\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <div class="block-content">\n\n    <h2>Sobre a DAE</h2>\n\n    <p>\n\n      A Divisão de Atenção ao Estudante (DAE) faz parte da Pró-reitoria de Assuntos Estudantis (PRAE) da Universidade Federal do Ceará (UFC).\n\n    </p>\n\n  </div>\n\n  <div class="block-content">\n\n    <h2>Sobre a PRAE</h2>\n\n    <p>\n\n      A PRAE é a unidade gestora de políticas para a promoção e apoio ao estudante de graduação da UFC, e tem por missão fortalecer o vínculo institucional do estudante pelas condições de acesso, permanência, melhoria contínua e qualidade de vida. Alguns dos serviços ofertados pela DAE são o acompanhamento psicológico, psicossocial e psicopedagógico.\n\n    </p>\n\n  </div>\n\n  <div class="block-content">\n\n    <h2>Sobre os atendimentos</h2>\n\n    <p>\n\n      O atendimento <strong>psicológico</strong> inclui a avaliação, a prevenção, o aconselhamento, a psicoterapia, que ajuda no acolhimento das emoções e também contribui para o autoconhecimento.\n\n    </p>\n\n    <p>\n\n      O atendimento <strong>psicopedagógico</strong> auxilia e facilita a aprendizagem, ajudando a assimilar e construir conhecimento. Também busca identificar as causas das dificuldades no aprendizado, que podem ser emocionais, sociais, mentais ou físicas, e a partir disso, elaborar e realizar ações de tratamento.\n\n    </p>\n\n    <p>\n\n      O atendimento <strong>psicossocial</strong> baseia-se nas relações que o indivíduo mantém com a sociedade. O desenvolvimento psicossocial abrange estudos sobre confiança, autonomia, iniciativa, produtividade, identidade, entre outros.\n\n    </p>\n\n  </div>\n\n  <div class="block-content">\n\n    <h2>Endereço</h2>\n\n    <div>\n\n      <p>Rua Paulino Nogueira, 315 - Bloco III - 1° Andar - Benfica - CEP 60020-270 - Fortaleza - CE</p>\n\n    </div>\n\n  </div>\n\n  <div class="block-content">\n\n    <h2>Contatos</h2>\n\n    <div class="metatag-list">\n\n      <ion-list>\n\n        <ion-item>\n\n          <ion-icon name="call" item-start></ion-icon>\n\n          <h2>Telefone</h2>\n\n          <h3>(85) 3366 7447</h3>\n\n          <button ion-button clear item-end (click)="metadataAction(\'phone\', \'(85) 3366 7447\')">Ligar</button>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-icon name="mail" item-start></ion-icon>\n\n            <h2>E-mail</h2>\n\n            <h3>papeu@ufc.br</h3>\n\n            <button ion-button clear item-end (click)="metadataAction(\'email\', \'papeu@ufc.br\')">Mensagem</button>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-icon name="globe" item-start></ion-icon>\n\n            <h2>Site</h2>\n\n            <h3>https://www.prae.ufc.br</h3>\n\n            <button ion-button clear item-end (click)="metadataAction(\'website\', \'https://www.prae.ufc.br\')">Acessar</button>\n\n        </ion-item>\n\n      </ion-list>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\development\ionic\daerecomenda\src\pages\about\about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutModalPage = /** @class */ (function () {
    function AboutModalPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    AboutModalPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    AboutModalPage.prototype.ionViewDidLoad = function () {
    };
    AboutModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about-modal',template:/*ion-inline-start:"C:\development\ionic\daerecomenda\src\pages\about-modal\about-modal.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <ion-title>Sobre o APP</ion-title>\n\n      <ion-buttons end>\n\n        <button ion-button icon-start (click)="closeModal()">\n\n          <ion-icon name="close"></ion-icon>\n\n          Fechar\n\n        </button>\n\n      </ion-buttons>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n  <ion-content padding>\n\n    <section class="header">\n\n      <h1>Dae Recomenda</h1>\n\n      <p>Versão 1.0</p>\n\n    </section>\n\n    <section class="about-app">\n\n      <p>Este é um trabalho desenvolvido para a disciplina Projeto Integrado I, no curso Sistemas e Mídias Digitais pela Universidade Federal do Ceará, onde teve como cliente do projeto, a Divisão de Atenção ao Estudante (DAE), núcleo pertencente à Pró-Reitoria de Assuntos Estudantis.</p>\n\n      <h2>PROFESSORES</h2>\n\n      <p>Ester Farias, MSc. | Ticianne Darin, PhD.<br /> Paulo Filho, Bel. | Guilherme Pedrosa, Bel.</p>\n\n      <img src="assets/imgs/logo-thundergeeks.png"/>\n\n      <h2>EQUIPE THUNDERGEEKS</h2>\n\n      <p>Felipe Almeida | Saynara Roana | Evelyn Kirlian<br />Beatriz Ferreira |  Lucas Farias</p>\n\n      <h2>DESIGN E DESENVOLVIMENTO</h2>\n\n      <p>Felipe Almeida | felipealmeidacosta@gmail.com</p>\n\n    </section>\n\n  </ion-content>\n\n  '/*ion-inline-end:"C:\development\ionic\daerecomenda\src\pages\about-modal\about-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], AboutModalPage);
    return AboutModalPage;
}());

//# sourceMappingURL=about-modal.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_places_places__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_about_about__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_places_modal_places_modal__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_filters_modal_filters_modal__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_about_modal_about_modal__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_geolocation__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_storage__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_places_places__["a" /* PlacesPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_places_modal_places_modal__["a" /* PlacesModalPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_filters_modal_filters_modal__["a" /* FiltersModalPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_about_modal_about_modal__["a" /* AboutModalPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_14__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_places_places__["a" /* PlacesPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_places_modal_places_modal__["a" /* PlacesModalPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_filters_modal_filters_modal__["a" /* FiltersModalPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_about_modal_about_modal__["a" /* AboutModalPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_geolocation__["a" /* Geolocation */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.backgroundColorByHexString("#4a1e86");
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\development\ionic\daerecomenda\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\development\ionic\daerecomenda\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__place__ = __webpack_require__(279);

var PlaceService = /** @class */ (function () {
    function PlaceService() {
        // Categories registry
        this.categories = {
            psicologico: new __WEBPACK_IMPORTED_MODULE_0__place__["b" /* PlaceCategory */]('psicologico', 'Psicológico'),
            psicopedagogico: new __WEBPACK_IMPORTED_MODULE_0__place__["b" /* PlaceCategory */]('psicopedagogico', 'Psicopedagógico'),
            psicossocial: new __WEBPACK_IMPORTED_MODULE_0__place__["b" /* PlaceCategory */]('psicossocial', 'Psicossocial')
        };
        // TAGs registry
        this.tags = {
            gratuito: new __WEBPACK_IMPORTED_MODULE_0__place__["c" /* PlaceTag */]('gratuito', 'Serviço gratuito'),
            pago: new __WEBPACK_IMPORTED_MODULE_0__place__["c" /* PlaceTag */]('pago', 'Serviço pago'),
            ligacaogratuita: new __WEBPACK_IMPORTED_MODULE_0__place__["c" /* PlaceTag */]('ligacaogratuita', 'Ligaçao gratuita'),
            acessibilidade: new __WEBPACK_IMPORTED_MODULE_0__place__["c" /* PlaceTag */]('acessibilidade', 'Possui acessibilidade'),
            planosaude: new __WEBPACK_IMPORTED_MODULE_0__place__["c" /* PlaceTag */]('planosaude', 'Aceita Plano de Saúde'),
            aceitacartao: new __WEBPACK_IMPORTED_MODULE_0__place__["c" /* PlaceTag */]('aceitacartao', 'Aceita cartão de crédito'),
            estacionamento: new __WEBPACK_IMPORTED_MODULE_0__place__["c" /* PlaceTag */]('estacionamento', 'Possui estacionamento')
        };
        // Places registry
        this.places = [
            /* Places */
            new __WEBPACK_IMPORTED_MODULE_0__place__["a" /* Place */]({
                id: 1,
                name: 'Núcleo de Atenção Média Integrada / NAMI - Unifor',
                description: 'O NAMI presta serviços ao público nas áreas de reabilitação física auditiva e intelectual, terapia ocupacional, psicologia, fonoaudiologia, fisioterapia, nutrição, consultas médicas e de enfermagem ambulatoriais. Além disso, os usuários têm acesso a assistência farmacêutica, posto de coleta de leite humano, serviço social, clínica de vacinas e serviço de apoio ao diagnóstico (laboratório de análises clínicas e setor de imagens). Os usuários são encaminhados pelo Sistema Único de Saúde (SUS) via rede pública municipal de Saúde de Fortaleza, atendidos de forma particular e de convênios, além de atendimentos por meio de programas responsabilidade social. Confira cada um deles:',
                image: 'assets/imgs/places/unifor.jpg',
                categories: [
                    this.categories.psicologico.name,
                    this.categories.psicopedagogico.name,
                    this.categories.psicossocial.name
                ],
                tags: [
                    this.tags.gratuito.name,
                    this.tags.acessibilidade.name,
                    this.tags.estacionamento.name
                ],
                location: {
                    full_address: 'Rua Desembargador Floriano Benevides Magalhães, 221 - Edson Queiroz',
                    zip: '60811-905',
                    city: 'Fortaleza',
                    state: 'Ceará',
                    latlng: [-3.772107, -38.480089]
                },
                metadata: [
                    {
                        name: 'phone',
                        value: '(85) 3477-3611'
                    },
                    {
                        name: 'website',
                        value: 'https://www.unifor.br/nami'
                    },
                    {
                        name: 'email',
                        value: 'nami@unifor.br'
                    }
                ]
            }),
            new __WEBPACK_IMPORTED_MODULE_0__place__["a" /* Place */]({
                id: 1,
                name: 'Clínica Escola de Psicologia - FIC/Estácio',
                description: 'A Clínica Escola de Psicologia do Centro Universitário Estácio do Ceará oferece plantão psicológico gratuito, às quartas-feiras, das 8h às 11h, e às sextas-feiras, das 15h às 17h, sem necessidade de agendamento prévio. Esta modalidade de atendimento é indicada para pessoas em situações de urgência, que necessitam de auxílio para superar circunstâncias imediatas de crises psicoemocionais. Além dos plantões, a Clínica Escola de Psicologia da Estácio oferece consultas destinadas a crianças, adolescentes, adultos, idosos, casais e famílias. Dentre os tratamentos, estão a ludoterapia (psicoterapia infantil), orientação profissional, atendimentos individuais e grupais, além de rodas de conversas com grupos da terceira idade.',
                image: 'assets/imgs/places/default-place-image.png',
                categories: [
                    this.categories.psicologico.name,
                    this.categories.psicossocial.name
                ],
                tags: [
                    this.tags.gratuito.name,
                    this.tags.acessibilidade.name,
                    this.tags.estacionamento.name
                ],
                location: {
                    full_address: 'Rua Eliseu Uchôa Beco, 600 - Patriolino Ribeiro',
                    zip: '000000-000',
                    city: 'Fortaleza',
                    state: 'Ceará',
                    latlng: [-3.764320, -38.485906]
                },
                metadata: [
                    {
                        name: 'phone',
                        value: '85 3271-1992'
                    }
                ]
            }),
            new __WEBPACK_IMPORTED_MODULE_0__place__["a" /* Place */]({
                id: 1,
                name: 'NIS - UniFanor Wyden',
                description: 'O Núcleo Integrado de Saúde (NIS) promove a interdisciplinaridade por meio do UniFanor, juntamente às outras colaborações acadêmicas do grupo Adtalem Global Education, como Ross School of Medicine, Ross School de Veterinary e Chamberlain School of Nursing, centrando a saúde como um substancial valor humano, bem como em todos os âmbitos socioeconômicos e culturais. O NIS promove a saúde em locais com recursos limitados, incentivando o compromisso dos estudantes, professores e parceiros de diversas disciplinas para tratar as doenças mais presentes nas comunidades.',
                image: 'assets/imgs/places/unifanor.jpg',
                categories: [
                    this.categories.psicologico.name,
                    this.categories.psicossocial.name
                ],
                tags: [
                    this.tags.gratuito.name,
                    this.tags.acessibilidade.name,
                    this.tags.estacionamento.name
                ],
                location: {
                    full_address: 'Rua Antônio Gomes Guimarães, 256-270 - Manoel Dias Branco',
                    zip: '000000-000',
                    city: 'Fortaleza',
                    state: 'Ceará',
                    latlng: [-3.749607, -38.462271]
                },
                metadata: [
                    {
                        name: 'phone',
                        value: '85 3003-4430'
                    },
                    {
                        name: 'website',
                        value: 'https://www.wyden.com.br/unifanor/nis'
                    }
                ]
            }),
            new __WEBPACK_IMPORTED_MODULE_0__place__["a" /* Place */]({
                id: 1,
                name: 'Faculdade Maurício de Nassau',
                description: 'Os serviços de psicologia encontrados na instituição são direcionados aos mais diversos perfis; da criança ao adulto idoso, pertencentes a todas as camadas sociais. O atendimento individual, tanto infantil quanto adulto, acontece dentro das perspectivas desejadas pelo conselho de psicologia da região, bem como os atendimentos em grupo que são inteiramente gratuitos. Serviços da clínica-escola: Plantão Psicológico (Gratuito); Psicoterapia - Abordagens: Psicanalítica, Analítica Junguiana, Gestalt-Terapia, Abordagem Centrada na Pessoa, Terapia Cognitivo Comportamental e Fenomenologia Existencial. (Taxa Social); Orientação Profissional (Gratuito); Psicodiagnóstico (Avaliação Psicológica) - taxa social.',
                image: 'assets/imgs/places/nassau.jpg',
                categories: [
                    this.categories.psicologico.name,
                    this.categories.psicopedagogico.name,
                    this.categories.psicossocial.name
                ],
                tags: [
                    this.tags.gratuito.name,
                    this.tags.acessibilidade.name,
                    this.tags.estacionamento.name
                ],
                location: {
                    full_address: 'Travessa Juvenal de Carvalho, 140 - São Gerardo',
                    zip: '000000-000',
                    city: 'Fortaleza',
                    state: 'Ceará',
                    latlng: [-3.732982, -38.557355]
                },
                metadata: [
                    {
                        name: 'phone',
                        value: '85 3201-2446'
                    },
                    {
                        name: 'website',
                        value: 'https://www.uninassau.edu.br/tags/clinica-escola'
                    }
                ]
            }),
            new __WEBPACK_IMPORTED_MODULE_0__place__["a" /* Place */]({
                id: 1,
                name: 'UECE',
                description: 'Universidade Estadual do Ceará UECE Lema Lumen ad viam (Luz para o seu caminho) Fundação 5 de março de 1975 (43 anos) Tipo de instituição Pública Estadual Localização Fortaleza, Ceará Reitor(a) José Jackson Coelho Sampaio Vice-reitor(a) Hidelbrando dos Santos Soares Docentes 1.094 (2016) Total de estudantes 18.703 (2016) Graduação 16.975 (2016) Pós-graduação 1.728 (2016) Campus 10 Afiliações CRUB, RENEX e ABRUEM Índice Geral de Cursos 3 Orçamento anual 227.335.201,80 (2016) Página oficial http://www.uece.br A Universidade Estadual do Ceará (UECE) é uma universidade pública brasileira, com atuação em ensino, pesquisa e extensão, mantida pela Fundação Universidade Estadual do Ceará (FUNECE). A instituição é uma das três universidades mantidas pelo governo do estado do Ceará, ao lado da Universidade Estadual Vale do Acaraú (UEVA) e da Universidade Regional do Cariri (URCA).',
                image: 'assets/imgs/places/uece.jpg',
                categories: [
                    this.categories.psicologico.name,
                    this.categories.psicopedagogico.name,
                    this.categories.psicossocial.name
                ],
                tags: [
                    this.tags.gratuito.name,
                    this.tags.acessibilidade.name,
                    this.tags.estacionamento.name
                ],
                location: {
                    full_address: 'Avenida Dr. Silas Munguba, 1700 – Campus Itaperi (ao lado do bloco P) - Itaperi',
                    zip: '000000-000',
                    city: 'Fortaleza',
                    state: 'Ceará',
                    latlng: [-3.785801, -38.552688]
                },
                metadata: [
                    {
                        name: 'phone',
                        value: '85 3101-9981'
                    },
                    {
                        name: 'email',
                        value: 'assecom.ch@uece.br'
                    }
                ]
            }),
            new __WEBPACK_IMPORTED_MODULE_0__place__["a" /* Place */]({
                id: 1,
                name: 'Clínica Escola de Saúde (CES) - UniChristus',
                description: 'A Clínica Escola de Saúde (CES) do Centro Universitário Christus integra o programa de responsabilidade social da Instituição. Realiza atendimentos gratuitos, em múltiplas especialidades, de forma integrada, humanizada e de qualidade para o cuidado, ensino e pesquisa junto à comunidade da cidade de Fortaleza e circum-adjacências. Desenvolve o Programa Serviço de Atenção Especializada (SAE) em IST/AIDS, em parceria com o Sistema Único de Saúde (SUS). A equipe de profissionais da CES tem como valores o comprometimento, o respeito, a ética e o profissionalismo para desenvolver um atendimento primoroso e eficaz, junto aos usuários de saúde, os alunos dos cursos da área da saúde e seus respectivos preceptores.',
                image: 'assets/imgs/places/unichristus.jpg',
                categories: [
                    this.categories.psicologico.name,
                    this.categories.psicopedagogico.name,
                    this.categories.psicossocial.name
                ],
                tags: [
                    this.tags.gratuito.name,
                    this.tags.acessibilidade.name,
                    this.tags.estacionamento.name
                ],
                location: {
                    full_address: 'Avenida Padre Antônio Tomás, 3380 - Campus Parque Ecológico Cocó - Cocó',
                    zip: '000000-000',
                    city: 'Fortaleza',
                    state: 'Ceará',
                    latlng: [-3.746177, -38.481732]
                },
                metadata: [
                    {
                        name: 'phone',
                        value: '85 3265-8100'
                    },
                    {
                        name: 'website',
                        value: 'https://unichristus.edu.br/institucional/infraestrutura/clinica-escola-de-saude/'
                    }
                ]
            }),
            new __WEBPACK_IMPORTED_MODULE_0__place__["a" /* Place */]({
                id: 1,
                name: 'Instituto Raízes',
                description: 'Realiza-se atendimento clínico no segmento particular e social, sendo preciso que a sessão seja previamente agendada. Ambos os serviços são constituídos por um padrão de excelência, no que se refere ao acolhimento dos profissionais e da infra-estrutura utilizada. O atendimento clínico social é um trabalho que tem a finalidade de tornar os serviços da psicologia, acessíveis à todos os públicos. Sendo os valores determinados, conforme a análise da condição sócio-econômica. Para participar do projeto, o interessado deverá comprovar que corresponde ao perfil solicitado.',
                image: 'assets/imgs/places/raizes.jpg',
                categories: [
                    this.categories.psicologico.name,
                    this.categories.psicopedagogico.name,
                    this.categories.psicossocial.name
                ],
                tags: [
                    this.tags.pago.name,
                    this.tags.acessibilidade.name,
                    this.tags.aceitacartao.name,
                    this.tags.planosaude.name
                ],
                location: {
                    full_address: 'Rua Adolfo Moreira de Carvalho, 86 - Edson Queiroz',
                    zip: '000000-000',
                    city: 'Fortaleza',
                    state: 'Ceará',
                    latlng: [-3.773206, -38.477296]
                },
                metadata: [
                    {
                        name: 'phone',
                        value: '85 3459-2477'
                    },
                    {
                        name: 'phone',
                        value: '85 98623-8241'
                    },
                    {
                        name: 'website',
                        value: 'http://www.raizesefac.com.br/'
                    },
                    {
                        name: 'email',
                        value: 'contato@raizesefac.com.br'
                    }
                ]
            }),
            new __WEBPACK_IMPORTED_MODULE_0__place__["a" /* Place */]({
                id: 1,
                name: 'Instituto Roda Viva',
                description: 'O Instituto Roda da Vida surgiu da necessidade de oferecer para pacientes oncológicos o acesso a práticas integrativas e complementares por entendermos que precisamos cuidar da "PESSOA" ao invés de cuidar da doença. A médica onco-hematologista Paola Tôrres Costa, que hoje é FELLOW em Medicina Integrativa pela Universidade do Arizona (EUA) e um grupo de profissionais das mais diversas áreas (psicológos, educadores, professores de educação física, fisioterapeutas, terapeutas holísticos, entre outros) e pacientes oncológicos se reuniram em 2011 e criaram uma associação sem fins lucrativos a qual chamaram "Instituto Roda da Vida". A idéia do nome veio do próprio ciclo constante de mudanças pelas quais passam os pacientes oncológicos e os desafios que significa estar com câncer. Ao mesmo tempo nos faz refletir sobre a transitoriedade de todos os processos vitais, com os quais devemos estar conectados para podermos obter qualidade de vida e saúde.',
                image: 'assets/imgs/places/rodaviva.jpg',
                categories: [
                    this.categories.psicologico.name,
                    this.categories.psicopedagogico.name,
                ],
                tags: [
                    this.tags.pago.name,
                    this.tags.acessibilidade.name,
                    this.tags.planosaude.name
                ],
                location: {
                    full_address: 'Rua Lauro Maia, 1245 - Bairro de Fátima',
                    zip: '000000-000',
                    city: 'Fortaleza',
                    state: 'Ceará',
                    latlng: [-3.750914, -38.522094]
                },
                metadata: [
                    {
                        name: 'phone',
                        value: '85 3055-5029'
                    },
                    {
                        name: 'website',
                        value: 'https://www.institutorodadavida.org.br/sobre-1-c1ori'
                    },
                    {
                        name: 'email',
                        value: 'contato@institutorodadavida.org.br'
                    }
                ]
            }),
            new __WEBPACK_IMPORTED_MODULE_0__place__["a" /* Place */]({
                id: 1,
                name: 'Centro de Atenção Psicossocial – CAPS SER II',
                description: 'A Rede de Atenção Psicossocial do Município de Fortaleza dispõe de 15 Centros, sendo seis CAPS GERAL, sete CAPS AD – Álcool e Drogas e dois CAPS Infantis. O perfil de atendimento são pessoas que apresentam sofrimentos psíquicos e/ou transtornos mentais severos e persistentes além de dependentes químicos. Nesses casos, o cuidado é partilhado com a Atenção Primária e com os recursos comunitários do território.',
                image: 'assets/imgs/places/caps.jpg',
                categories: [
                    this.categories.psicologico.name,
                    this.categories.psicopedagogico.name,
                    this.categories.psicossocial.name
                ],
                tags: [
                    this.tags.gratuito.name,
                    this.tags.acessibilidade.name,
                    this.tags.ligacaogratuita.name
                ],
                location: {
                    full_address: 'Rua Pinto Madeira, 1550',
                    zip: '000000-000',
                    city: 'Fortaleza',
                    state: 'Ceará',
                    latlng: [-3.734218, -38.511618]
                },
                metadata: [
                    {
                        name: 'phone',
                        value: '85 3281-2012'
                    },
                    {
                        name: 'website',
                        value: 'https://catalogodeservicos.fortaleza.ce.gov.br/categoria/saude/servico/321'
                    }
                ]
            })
        ];
    }
    PlaceService.prototype.getPlaces = function (filter) {
        if (filter === void 0) { filter = {}; }
        var places = this.places;
        // Category filter
        if (filter['c'].length > 0) {
            places = places.filter(function (value) {
                for (var i = 0; i < filter['c'].length; i = i + 1) {
                    if (value.categories.indexOf(filter['c'][i]) > -1) {
                        return true;
                    }
                }
                return false;
            });
        }
        // Tag filter
        if (filter['t'].length > 0) {
            places = places.filter(function (value) {
                for (var i = 0; i < filter['t'].length; i = i + 1) {
                    if (value.tags.indexOf(filter['t'][i]) > -1) {
                        return true;
                    }
                }
                return false;
            });
        }
        // Search term filter
        if (filter['search'].trim() !== '') {
            places = places.filter(function (value) {
                return value.name.toLowerCase().search(filter['search'].toLowerCase()) > -1;
            });
        }
        return places;
    };
    return PlaceService;
}());

//# sourceMappingURL=place-service.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Place; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PlaceCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PlaceTag; });
var Place = /** @class */ (function () {
    function Place(content) {
        this.id = content.id;
        this.name = content.name;
        this.description = content.description;
        this.image = content.image;
        this.location = content.location;
        this.categories = content.categories;
        this.tags = content.tags;
        this.metadata = content.metadata;
    }
    return Place;
}());

var PlaceCategory = /** @class */ (function () {
    function PlaceCategory(name, label) {
        this.name = name;
        this.label = label;
    }
    return PlaceCategory;
}());

var PlaceTag = /** @class */ (function () {
    function PlaceTag(name, label) {
        this.name = name;
        this.label = label;
    }
    return PlaceTag;
}());

//# sourceMappingURL=place.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map