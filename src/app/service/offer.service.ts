import {Injectable} from '@angular/core';
import {Offer} from "../model/offer.model";
import {from, Observable} from "rxjs";
import {AngularFirestore} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  private offers: Offer[] = [
    {
      address: "Warszawa, Śródmieście, Lekarska",
      area: 78.5,
      imageUrl: "https://galeria.domiporta.pl/pictures/big/17/14/ae/ae1478cc0f251659085d4f3ad784d7af1209f0d3/sprzedam-mieszkanie-warszawa-srodmiescie.jpg",
      numberOfRooms: 3,
      offerType: "SELL",
      offerUrl: "https://www.domiporta.pl/nieruchomosci/sprzedam-mieszkanie-trzypokojowe-warszawa-srodmiescie-lekarska-78m2/150114164?clickSource=Premium",
      price: 699000,
      propertyType: "FLAT",
      title: "Mieszkanie trzypokojowe na sprzedaż",
      vendor: "DOMIPORTA"
    },
    {
      address: "Gdynia, Wielki Kack, Damroki",
      area: 68.5,
      imageUrl: "https://img3.staticmorizon.com.pl/thumbnail/aHR0cDovL2ltZy5tb3Jpem9uLnBsL25vYmxlbi9iL25vYmxlbl9td182JTI1MkY0MDcwJTI1MkZPTVdfMS5qcGcjdj0xXzEyNTY4MzMwMjM=/832/468/2/mieszkanie-do-wynajecia-gdynia-wielki-kack-69-m-morizon-pl.jpg",
      numberOfRooms: 3,
      offerType: "RENT",
      offerUrl: "https://www.morizon.pl/oferta/wynajem-mieszkanie-gdynia-wielki-kack-damroki-68m2-mzn2033326951",
      price: 1790,
      propertyType: "FLAT",
      title: "Gdynia, Wielki Kack, Damroki",
      vendor: "MORIZON"
    },
    {
      address: "Wejherowski, Kębłowo, Wejherowska",
      area: 25,
      imageUrl: "https://img1.staticmorizon.com.pl/thumbnail/aHR0cDovL2ltZy5tb3Jpem9uLnBsL3R1dHVtLzIvdHV0dW1fZHdfVFgwMTEwNV8xLmpwZyN2PTFfMTI1MjIxMzQ2OQ==/832/468/2/dom-do-wynajecia-keblowo-wejherowska-25-m-morizon-pl-2546.jpg",
      numberOfRooms: 6,
      offerType: "RENT",
      offerUrl: "https://www.morizon.pl/oferta/wynajem-dom-wejherowski-luzino-wejherowska-25m2-mzn2033292546",
      price: 501,
      propertyType: "HOUSE",
      title: "Wejherowski, Kębłowo, Wejherowska",
      vendor: "MORIZON"
    },
    {
      address: "Pabianicki, Lutomiersk, Madaje Nowe",
      area: 170,
      imageUrl: "https://img1.staticmorizon.com.pl/thumbnail/aHR0cDovL2ltZy5tb3Jpem9uLnBsL2FqcHJvbW90LzcvYWpwcm9tb3RfZHNfNTYyNTFfMS5qcGcjdj0xXzEyNTY3NDgyMjE=/832/468/2/dom-na-sprzedaz-madaje-nowe-170-m-morizon-pl-6461.jpg",
      numberOfRooms: 5,
      offerType: "SELL",
      offerUrl: "https://www.morizon.pl/oferta/sprzedaz-dom-pabianicki-lutomiersk-170m2-mzn2033326461",
      price: 720000,
      propertyType: "HOUSE",
      title: "Pabianicki, Lutomiersk, Madaje Nowe",
      vendor: "MORIZON"
    },
    {
      address: "Warszawa, Mokotów, Ksawerów, Wielicka",
      area: 506,
      imageUrl: "https://img1.staticmorizon.com.pl/thumbnail/aHR0cDovL2ltZy5tb3Jpem9uLnBsL3JveWFsYy9jL3JveWFsY19kc181JTI1MkY1Nzc5JTI1MkZPRFNfMS5qcGcjdj0xXzEyNTY4MDc0NzQ=/832/468/2/dom-na-sprzedaz-warszawa-ksawerow-506-m-morizon-pl-7441.jpg",
      numberOfRooms: 9,
      offerType: "SELL",
      offerUrl: "https://www.morizon.pl/oferta/sprzedaz-dom-warszawa-mokotow-wielicka-506m2-mzn2033327441",
      price: 8500000,
      propertyType: "HOUSE",
      title: "Warszawa, Mokotów, Ksawerów, Wielicka",
      vendor: "MORIZON"
    },
    {
      address: "Warszawa, Wola, Giełdowa",
      area: 62,
      imageUrl: "https://galeria.domiporta.pl/pictures/big/12/6f/f7/f76f2024105865e7445c1e7adc2ca99c1d4da67b/wynajme-mieszkanie-warszawa-wola.jpg",
      numberOfRooms: 2,
      offerType: "RENT",
      offerUrl: "https://www.domiporta.pl/nieruchomosci/wynajme-mieszkanie-dwupokojowe-warszawa-wola-gieldowa-62m2/150455999?clickSource=Premium",
      price: 3800,
      propertyType: "FLAT",
      title: "Mieszkanie dwupokojowe na wynajem",
      vendor: "DOMIPORTA"
    },
    {
      address: "Kraków, Bieżanów-Prokocim",
      area: 275,
      imageUrl: "https://apollo-ireland.akamaized.net/v1/files/eyJmbiI6IjF6dmc0bTIwaXA4azEtQVBMIiwidyI6W3siZm4iOiJqMWozbzEzbTZiZ24xLUFQTCIsInMiOiIxNCIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.BgLkmz4JuDzDbUHI79xfL_FSGGYwYUVIqMux_rIaLds/image;s=1280x1024;q=80",
      numberOfRooms: 7,
      offerType: "RENT",
      offerUrl: "https://www.otodom.pl/oferta/dom-275-m-krakow-ID3YlqM.html#9bc90853af",
      price: 5000,
      propertyType: "HOUSE",
      title: "Dom, 275 m², Kraków",
      vendor: "OTODOM"
    },
    {
      address: "Osielsko, bydgoski, kujawsko-pomorskie",
      area: 210,
      imageUrl: "https://apollo-ireland.akamaized.net/v1/files/eyJmbiI6InV2ZnR2b2YxM3g3MjItQVBMIiwidyI6W3siZm4iOiJqMWozbzEzbTZiZ24xLUFQTCIsInMiOiIxNCIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.ijtNwbebRrPl6gXjSpXy6BQ1LdCJjD3IGv7WjWqb_tQ/image;s=1280x1024;q=80",
      numberOfRooms: 5,
      offerType: "RENT",
      offerUrl: "https://www.otodom.pl/oferta/dom-210-m-osielsko-ID3Y9xi.html#4fa60c1bbe",
      price: 3000,
      propertyType: "HOUSE",
      title: "Dom, 210 m², Osielsko",
      vendor: "OTODOM"
    },
    {
      address: "Warszawa, Wilanów",
      area: 420,
      imageUrl: "https://galeria.domiporta.pl/pictures/big/14/d3/b9/b9d340411364546a231e8e5c6d4377c80d4d83dd/sprzedam-dom-warszawa-wilanow.jpg",
      numberOfRooms: 6,
      offerType: "SELL",
      offerUrl: "https://www.domiporta.pl/nieruchomosci/sprzedam-dom-warszawa-wilanow-420m2/148557302?clickSource=Premium",
      price: 3700000,
      propertyType: "HOUSE",
      title: "Dom na sprzedaż",
      vendor: "DOMIPORTA"
    },
    {
      address: "Warszawa, Wola",
      area: 35,
      imageUrl: "https://apollo-ireland.akamaized.net/v1/files/eyJmbiI6InJoaTI0MXdlNjYzcTEtQVBMIiwidyI6W3siZm4iOiJqMWozbzEzbTZiZ24xLUFQTCIsInMiOiIxNCIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.dj-FGf5o0C22xFVQxQVXKOEwT_e2MV9SBHZbuKP314A/image;s=1280x1024;q=80",
      numberOfRooms: 2,
      offerType: "RENT",
      offerUrl: "https://www.otodom.pl/oferta/top-floor-apartment-okopowa-18-ID3XJnq.html#f6b6f3a412",
      price: 2990,
      propertyType: "FLAT",
      title: "Top Floor Apartment Okopowa 18",
      vendor: "OTODOM"
    },
    {
      address: "Warszawa, Mokotów, Ludwika Nabielaka",
      area: 100.59,
      imageUrl: "https://galeria.domiporta.pl/pictures/big/15/00/5b/5b00e6cef811dc926f904f21dce9d206aca6f781/sprzedam-mieszkanie-warszawa-mokotow.jpg",
      numberOfRooms: 4,
      offerType: "SELL",
      offerUrl: "https://www.domiporta.pl/nieruchomosci/sprzedam-mieszkanie-czteropokojowe-warszawa-mokotow-ludwika-nabielaka-101m2/150398460?clickSource=Premium",
      price: 1150000,
      propertyType: "FLAT",
      title: "Mieszkanie czteropokojowe na sprzedaż",
      vendor: "DOMIPORTA"
    },
    {
      address: "Warszawa, Wola, Giełdowa",
      area: 60,
      imageUrl: "https://galeria.domiporta.pl/pictures/big/18/e7/74/74e784ea371308b4bdc6d64b51cc1e4acf07faa0/wynajme-mieszkanie-warszawa-wola.jpg",
      numberOfRooms: 2,
      offerType: "RENT",
      offerUrl: "https://www.domiporta.pl/nieruchomosci/wynajme-mieszkanie-dwupokojowe-warszawa-wola-gieldowa-60m2/150425951?clickSource=Premium",
      price: 2500,
      propertyType: "FLAT",
      title: "Mieszkanie dwupokojowe na wynajem",
      vendor: "DOMIPORTA"
    },
    {
      address: "Zgorzelecki, Bogatynia, Energetyków",
      area: 46.9,
      imageUrl: "https://img1.staticmorizon.com.pl/thumbnail/aHR0cDovL2ltZy5tb3Jpem9uLnBsL2JpdXJvMzI1ODkvYi9iaXVybzMyNTg5X213X0hFWC1NVy0yNDhfMS5qcGcjdj0xXzEyNTY4MDYzNzY=/832/468/2/mieszkanie-do-wynajecia-bogatynia-energetykow-47-m-morizon.jpg",
      numberOfRooms: 2,
      offerType: "RENT",
      offerUrl: "https://www.morizon.pl/oferta/wynajem-mieszkanie-zgorzelecki-bogatynia-energetykow-46m2-mzn2033327300",
      price: 2700,
      propertyType: "FLAT",
      title: "Zgorzelecki, Bogatynia, Energetyków",
      vendor: "MORIZON"
    },
    {
      address: "Wrocław, Wrocław-Krzyki, Wapienna",
      area: 98.1,
      imageUrl: "https://img2.staticmorizon.com.pl/thumbnail/aHR0cDovL2ltZy5tb3Jpem9uLnBsL2c0NzQxL2UvZzQ3NDFfbXNfMzA3NDklMjUyRjE2OTMlMjUyRk9NU18xLmpwZyN2PTFfMTI1NjgzMjE3Mw==/832/468/2/mieszkanie-na-sprzedaz-wroclaw-krzyki-98-m-morizon-pl-7685.jpg",
      numberOfRooms: 3,
      offerType: "SELL",
      offerUrl: "https://www.morizon.pl/oferta/sprzedaz-mieszkanie-wroclaw-krzyki-wapienna-98m2-mzn2033327685",
      price: 620000,
      propertyType: "FLAT",
      title: "Wrocław, Wrocław-Krzyki, Wapienna",
      vendor: "MORIZON"
    },
    {
      address: "Kraków, Kliny, Józefa Kostrzewskiego",
      area: 193,
      imageUrl: "https://img1.staticmorizon.com.pl/thumbnail/aHR0cDovL2ltZy5tb3Jpem9uLnBsL2VtbWVyc29uMTUvZC9lbW1lcnNvbjE1X2R3XzEwNTYlMjUyRjYzNDIlMjUyRk9EV18xLmpwZyN2PTFfMTI1NjU2MTA5Mw==/832/468/2/dom-do-wynajecia-krakow-os-kliny-zacisze-193-m-morizon-pl.jpg",
      numberOfRooms: 5,
      offerType: "RENT",
      offerUrl: "https://www.morizon.pl/oferta/wynajem-dom-krakow-debniki-jozefa-kostrzewskiego-193m2-mzn2033323991",
      price: 3900,
      propertyType: "HOUSE",
      title: "Kraków, Kliny, Józefa Kostrzewskiego",
      vendor: "MORIZON"
    },
    {
      address: "Warszawa M., Warszawa, Wilanów, Zawady",
      area: 560,
      imageUrl: "https://img2.staticmorizon.com.pl/thumbnail/aHR0cDovL2ltZy5tb3Jpem9uLnBsL2hvbWVzdGF0ZS8wL2hvbWVzdGF0ZV9kd19IRVMtRFctMjMxOTFfMS5qcGcjdj0xXzEyNTY1OTU0MzA=/832/468/2/dom-do-wynajecia-warszawa-zawady-560-m-morizon-pl-4575.jpg",
      numberOfRooms: 7,
      offerType: "RENT",
      offerUrl: "https://www.morizon.pl/oferta/wynajem-dom-warszawa-wilanow-560m2-mzn2033324575",
      price: 18000,
      propertyType: "HOUSE",
      title: "Warszawa M., Warszawa, Wilanów, Zawady",
      vendor: "MORIZON"
    },
    {
      address: "Rzeszów, Krakowska 142",
      area: 62.91,
      imageUrl: "https://galeria.domiporta.pl/pictures/big/4/c0/63/034d1a8e453f7ea450e5c1f21a6858d7/sprzedam-mieszkanie-rzeszow.jpg.jpg",
      numberOfRooms: 4,
      offerType: "SELL",
      offerUrl: "https://www.domiporta.pl/nowe/ogloszenie/dworskie_ogrody_rzeszow_542055?clickSource=Premium",
      price: 317633,
      propertyType: "FLAT",
      title: "Mieszkanie czteropokojowe na sprzedaż Dworskie Ogrody",
      vendor: "DOMIPORTA"
    },
    {
      address: "Tychy M., Tychy",
      area: 160.29,
      imageUrl: "https://img3.staticmorizon.com.pl/thumbnail/aHR0cDovL2ltZy5tb3Jpem9uLnBsL21heHR5Y2h5L2MvbWF4dHljaHlfZHNfTk1YLURTLTI1OF8xLmpwZyN2PTFfMTI1Njc4NTMwOQ==/832/468/2/dom-na-sprzedaz-tychy-160-m-morizon-pl-7212.jpg",
      numberOfRooms: 4,
      offerType: "SELL",
      offerUrl: "https://www.morizon.pl/oferta/sprzedaz-dom-tychy-160m2-mzn2033327212",
      price: 946200,
      propertyType: "HOUSE",
      title: "Tychy M., Tychy",
      vendor: "MORIZON"
    },
    {
      address: "Brodnica, brodnicki, kujawsko-pomorskie",
      area: 160,
      imageUrl: "https://apollo-ireland.akamaized.net/v1/files/eyJmbiI6InNrazVjd2g1OGF2NDItQVBMIiwidyI6W3siZm4iOiJqMWozbzEzbTZiZ24xLUFQTCIsInMiOiIxNCIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.DSp2yapev9_U1myjT8gI9Wg-9abfpjwHULbUoHOb4CM/image;s=1280x1024;q=80",
      numberOfRooms: 4,
      offerType: "RENT",
      offerUrl: "https://www.otodom.pl/oferta/do-wynajecia-dom-2-niezalezne-mieszkania-nowe-ID3KJQM.html#cf30221547",
      price: 2700,
      propertyType: "HOUSE",
      title: "Do wynajęcia dom - 2 niezależne mieszkania - nowe!",
      vendor: "OTODOM"
    },
    {
      address: "Warszawa, Praga-Południe",
      area: 531,
      imageUrl: "https://galeria.domiporta.pl/pictures/big/19/91/e3/e39194bbd279768c01453c94b86ccbc9f954227b/wynajme-dom-warszawa-praga-poludnie.jpg",
      numberOfRooms: 12,
      offerType: "RENT",
      offerUrl: "https://www.domiporta.pl/nieruchomosci/wynajme-dom-warszawa-praga-poludnie-531m2/149295450?clickSource=Premium",
      price: 25000,
      propertyType: "HOUSE",
      title: "Dom na wynajem",
      vendor: "DOMIPORTA"
    },
    {
      address: "Wrocławski, Siechnice, Radomierzyce",
      area: 162.6,
      imageUrl: "https://img1.staticmorizon.com.pl/thumbnail/aHR0cDovL2ltZy5tb3Jpem9uLnBsL3p3bTQzNDgyL2QvendtNDM0ODJfZHNfMzUlMjUyRjY0NTMlMjUyRk9EU18xLmpwZyN2PTFfMTI1NjgzODc4OQ==/832/468/2/dom-na-sprzedaz-radomierzyce-163-m-morizon-pl-7765.jpg",
      numberOfRooms: 4,
      offerType: "SELL",
      offerUrl: "https://www.morizon.pl/oferta/sprzedaz-dom-wroclawski-siechnice-162m2-mzn2033327765",
      price: 670000,
      propertyType: "HOUSE",
      title: "Wrocławski, Siechnice, Radomierzyce",
      vendor: "MORIZON"
    },
    {
      address: "Warszawa, Śródmieście, Krucza",
      area: 21,
      imageUrl: "https://img3.staticmorizon.com.pl/thumbnail/aHR0cDovL2ltZy5tb3Jpem9uLnBsL29ncm9kLzIvb2dyb2RfbXdfMTA0MzYlMjUyRjM0ODIlMjUyRk9NV18xLmpwZyN2PTFfMTI1NjgwNjY4NA==/832/468/2/kawalerka-do-wynajecia-warszawa-srodmiescie-21-m-morizon-pl.jpg",
      numberOfRooms: 1,
      offerType: "RENT",
      offerUrl: "https://www.morizon.pl/oferta/wynajem-mieszkanie-warszawa-srodmiescie-krucza-21m2-mzn2033327408",
      price: 1950,
      propertyType: "FLAT",
      title: "Warszawa, Śródmieście, Krucza",
      vendor: "MORIZON"
    },
    {
      address: "Warszawa, Mokotów, Warszawa, Mokotów, Ojcowska",
      area: 346,
      imageUrl: "https://img3.staticmorizon.com.pl/thumbnail/aHR0cDovL2ltZy5tb3Jpem9uLnBsL3dpbHNvbnMvYy93aWxzb25zX2R3X1dJTDUxOTU2MF8xLmpwZyN2PTFfMTI1Njc3NjY1Mw==/832/468/2/dom-do-wynajecia-warszawa-mokotow-346-m-morizon-pl-7060.jpg",
      numberOfRooms: 1,
      offerType: "RENT",
      offerUrl: "https://www.morizon.pl/oferta/wynajem-dom-warszawa-mokotow-ojcowska-346m2-mzn2033327060",
      price: 9800,
      propertyType: "HOUSE",
      title: "Warszawa, Mokotów, Warszawa, Mokotów, Ojcowska",
      vendor: "MORIZON"
    },
    {
      address: "Warszawa, Śródmieście",
      area: 96,
      imageUrl: "https://apollo-ireland.akamaized.net/v1/files/eyJmbiI6Ijh1bWppZ256cmtwaTItQVBMIiwidyI6W3siZm4iOiJqMWozbzEzbTZiZ24xLUFQTCIsInMiOiIxNCIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.AKv1e8IFWL4ZpnIiSviybpGA-aa6rE-FSaIUTEplK3U/image;s=1280x1024;q=80",
      numberOfRooms: 2,
      offerType: "RENT",
      offerUrl: "https://www.otodom.pl/oferta/apartament-96m2-w-prestizowej-kamienicy-ID3YqPO.html#612ba5acf3",
      price: 5900,
      propertyType: "FLAT",
      title: "Apartament 96m2 w prestiżowej kamienicy!",
      vendor: "OTODOM"
    },
    {
      address: "Warszawa, Bemowo, Obrońców Tobruku",
      area: 70,
      imageUrl: "https://galeria.domiporta.pl/pictures/big/11/ed/89/89ed1db30336d74b8b75214ceab6aa33a6bcdfc0/wynajme-mieszkanie-warszawa-bemowo.jpg",
      numberOfRooms: 3,
      offerType: "RENT",
      offerUrl: "https://www.domiporta.pl/nieruchomosci/wynajme-mieszkanie-trzypokojowe-warszawa-bemowo-obroncow-tobruku-70m2/150420332?clickSource=Premium",
      price: 2700,
      propertyType: "FLAT",
      title: "Mieszkanie trzypokojowe na wynajem",
      vendor: "DOMIPORTA"
    },
    {
      address: "Zabierzów, krakowski, małopolskie",
      area: 200,
      imageUrl: "https://apollo-ireland.akamaized.net/v1/files/eyJmbiI6InV2a2g5aTQwZGpvaTItQVBMIiwidyI6W3siZm4iOiJqMWozbzEzbTZiZ24xLUFQTCIsInMiOiIxNCIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.d10ITHeIQrMttpm2E1dM75-zSVntHr-ni5sCxr6EXWE/image;s=1280x1024;q=80",
      numberOfRooms: 7,
      offerType: "RENT",
      offerUrl: "https://www.otodom.pl/oferta/dom-200-m-zabierzow-ID3Yl44.html#9bc90853af",
      price: 5500,
      propertyType: "HOUSE",
      title: "Dom, 200 m², Zabierzów",
      vendor: "OTODOM"
    },
    {
      address: "Warszawa, Śródmieście, Powiśle, Powiśle",
      area: 200,
      imageUrl: "https://galeria.domiporta.pl/pictures/big/14/78/c3/c378d050321881899fe5d84865595b69c1e26879/wynajme-mieszkanie-warszawa-srodmiescie,_powisle.jpg",
      numberOfRooms: 4,
      offerType: "RENT",
      offerUrl: "https://www.domiporta.pl/nieruchomosci/wynajme-mieszkanie-czteropokojowe-warszawa-srodmiescie-powisle-powisle-200m2/147646968?clickSource=Premium",
      price: 25000,
      propertyType: "FLAT",
      title: "Mieszkanie czteropokojowe na wynajem",
      vendor: "DOMIPORTA"
    },
    {
      address: "Warszawa, Śródmieście",
      area: 239,
      imageUrl: "https://apollo-ireland.akamaized.net/v1/files/eyJmbiI6Ino1MTM4Z3g1cW5scjItQVBMIiwidyI6W3siZm4iOiJqMWozbzEzbTZiZ24xLUFQTCIsInMiOiIxNCIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.ELDawffpzMQ_116WwZw5aEFfHbqLe2P9PSJKDHA7gZ0/image;s=1280x1024;q=80",
      numberOfRooms: 8,
      offerType: "RENT",
      offerUrl: "https://www.otodom.pl/oferta/apartament-w-stylu-paryskim-na-mokotowskiej-ID3YqXe.html#14fcfe9f8e",
      price: 18000,
      propertyType: "FLAT",
      title: "Apartament w stylu paryskim na Mokotowskiej",
      vendor: "OTODOM"
    },
    {
      address: "Warszawa, Sady Żoliborskie",
      area: 37,
      imageUrl: "https://apollo-ireland.akamaized.net/v1/files/eyJmbiI6ImltZ254ZTJ6MWJmOS1BUEwiLCJ3IjpbeyJmbiI6ImoxajNvMTNtNmJnbjEtQVBMIiwicyI6IjE0IiwicCI6IjEwLC0xMCIsImEiOiIwIn1dfQ.mCvSr8FVstcVGSt2uY6gTEMi4ZxmTa2BdCzCjMroU_s/image;s=1280x1024;q=80",
      numberOfRooms: 2,
      offerType: "RENT",
      offerUrl: "https://www.otodom.pl/oferta/37-m-sypialnia-salon-z-kuchnia-garaz-od-zaraz-ID3Y7m8.html#f6b6f3a412",
      price: 2100,
      propertyType: "FLAT",
      title: "37 m², sypialnia, salon z kuchnią, garaż, od zaraz",
      vendor: "OTODOM"
    },
    {
      address: "Wrocław, Śródmieście",
      area: 26,
      imageUrl: "https://apollo-ireland.akamaized.net/v1/files/eyJmbiI6InE4MWM0dDJlano2NjItQVBMIiwidyI6W3siZm4iOiJqMWozbzEzbTZiZ24xLUFQTCIsInMiOiIxNCIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.aCRqshtCIe_Bfaemu5_BdvVzJL6vHYigZR9ubxITuK4/image;s=1280x1024;q=80",
      numberOfRooms: 1,
      offerType: "RENT",
      offerUrl: "https://www.otodom.pl/oferta/wynajme-nowa-kawalerke-w-centrum-nad-rzeka-ID3X5rS.html#1382fb9d9d",
      price: 1800,
      propertyType: "FLAT",
      title: "wynajmę nową kawalerkę w centrum nad rzeką!",
      vendor: "OTODOM"
    },
    {
      address: "Wola Zgłobieńska, rzeszowski, podkarpackie",
      area: 112.17,
      imageUrl: "https://apollo-ireland.akamaized.net/v1/files/eyJmbiI6IjkzYXJ5OG9pZGdzeC1BUEwiLCJ3IjpbeyJmbiI6ImoxajNvMTNtNmJnbjEtQVBMIiwicyI6IjE0IiwicCI6IjEwLC0xMCIsImEiOiIwIn1dfQ.gDfZsYybeEaHgBw9i4JCTqhjZQvqYDuQ_k51I393GgU/image;s=1280x1024;q=80",
      numberOfRooms: 5,
      offerType: "RENT",
      offerUrl: "https://www.otodom.pl/oferta/nowy-dom-na-widokowej-dzialce-z-dwoma-garazami-ID3Yi0I.html#bbc701b71e",
      price: 1800,
      propertyType: "HOUSE",
      title: "Nowy dom na widokowej działce z dwoma garażami",
      vendor: "OTODOM"
    },
    {
      address: "Warszawa, Śródmieście, Wspólna",
      area: 38,
      imageUrl: "https://galeria.domiporta.pl/pictures/big/15/f6/61/61f65c79b62d3465aeb6245d8522c770d6fbf8c6/wynajme-mieszkanie-warszawa-srodmiescie.jpg",
      numberOfRooms: 2,
      offerType: "RENT",
      offerUrl: "https://www.domiporta.pl/nieruchomosci/wynajme-mieszkanie-dwupokojowe-warszawa-srodmiescie-wspolna-38m2/150456922?clickSource=Premium",
      price: 3000,
      propertyType: "FLAT",
      title: "Mieszkanie dwupokojowe na wynajem",
      vendor: "DOMIPORTA"
    },
    {
      address: "Leszno, Centrum",
      area: 130,
      imageUrl: null,
      numberOfRooms: 5,
      offerType: "RENT",
      offerUrl: "https://www.otodom.pl/oferta/dom-na-wynajem-do-negocjacji-ID3VQP2.html#cf30221547",
      price: 2000,
      propertyType: "HOUSE",
      title: "Dom na wynajem. DO NEGOCJACJI",
      vendor: "OTODOM"
    },
    {
      address: "Konstancin-Jeziorna, piaseczyński, mazowieckie",
      area: 800,
      imageUrl: "https://apollo-ireland.akamaized.net/v1/files/eyJmbiI6ImM4YjFiYTQ1ZTVoNi1BUEwiLCJ3IjpbeyJmbiI6ImoxajNvMTNtNmJnbjEtQVBMIiwicyI6IjE0IiwicCI6IjEwLC0xMCIsImEiOiIwIn1dfQ.KqdT5M_0oo-nKJzCzXSeCkmt6gnAZCspX8kuKXEvcBk/image;s=1280x1024;q=80",
      numberOfRooms: 10,
      offerType: "RENT",
      offerUrl: "https://www.otodom.pl/oferta/dom-800-m-konstancin-jeziorna-ID3YjFe.html#4e4944c0f1",
      price: 17000,
      propertyType: "HOUSE",
      title: "Dom, 800 m², Konstancin-Jeziorna",
      vendor: "OTODOM"
    },
    {
      address: "Tczew, tczewski, pomorskie",
      area: 120,
      imageUrl: "https://apollo-ireland.akamaized.net/v1/files/eyJmbiI6InB6cjdwMnp0MzltZi1BUEwiLCJ3IjpbeyJmbiI6ImoxajNvMTNtNmJnbjEtQVBMIiwicyI6IjE0IiwicCI6IjEwLC0xMCIsImEiOiIwIn1dfQ.WNZvj8vQ-c9XW94K55r-_aIwBXvJYNAqYbKQJGfhIt8/image;s=1280x1024;q=80",
      numberOfRooms: 7,
      offerType: "RENT",
      offerUrl: "https://www.otodom.pl/oferta/nowy-dom-z-7-pokojami-dla-pracownikow-dla-firm-ID3XpVs.html#cf30221547",
      price: 5500,
      propertyType: "HOUSE",
      title: "NOWY DOM z 7 pokojami dla pracowników (dla firm)",
      vendor: "OTODOM"
    },
    {
      address: "Rzeszów",
      area: 71.2,
      imageUrl: "https://img1.staticmorizon.com.pl/thumbnail/aHR0cDovL2ltZy5tb3Jpem9uLnBsL2dhbGljamFuaWUvNy9nYWxpY2phbmllX21zXzI3OCUyNTJGNzI5MCUyNTJGT01TXzEuanBnI3Y9MV8xMjU2ODExMjUy/832/468/2/mieszkanie-na-sprzedaz-rzeszow-71-m-morizon-pl-7477.jpg",
      numberOfRooms: 4,
      offerType: "SELL",
      offerUrl: "https://www.morizon.pl/oferta/sprzedaz-mieszkanie-rzeszow-71m2-mzn2033327477",
      price: 341760,
      propertyType: "FLAT",
      title: "Rzeszów",
      vendor: "MORIZON"
    },
    {
      address: "Warszawa, Wilanów",
      area: 300,
      imageUrl: "https://galeria.domiporta.pl/pictures/big/10/83/5a/5a8308eb5459314d5428012a7e246ca0e141b6c0/wynajme-dom-warszawa-wilanow.jpg",
      numberOfRooms: 5,
      offerType: "RENT",
      offerUrl: "https://www.domiporta.pl/nieruchomosci/wynajme-dom-warszawa-wilanow-300m2/150146787?clickSource=Premium",
      price: 8500,
      propertyType: "HOUSE",
      title: "Dom na wynajem",
      vendor: "DOMIPORTA"
    }
  ];

  constructor(private db: AngularFirestore) {
  }

  getOffersByOfferType(offerType: string): Observable<Offer[]> {
    return from([this.offers])
    /*return this.db
      .collection<Offer>('offers', ref => ref.where('offerType', '==', offerType.toUpperCase()))
      .valueChanges()*/
  }

}
