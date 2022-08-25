// console.log('https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_epowJR24KRya1wP4HjDTsXaJiMVsfCsQK2inym40C9UBLHRtj0IUO3XEjqSQJTnm')

// // API key: live_epowJR24KRya1wP4HjDTsXaJiMVsfCsQK2inym40C9UBLHRtj0IUO3XEjqSQJTnm
// //Cat breed ids: beng, cypr, manx, any random

// console.log($.ajax('https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_epowJR24KRya1wP4HjDTsXaJiMVsfCsQK2inym40C9UBLHRtj0IUO3XEjqSQJTnm'))
// // console.log($.ajax('https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=cypr&api_key=live_epowJR24KRya1wP4HjDTsXaJiMVsfCsQK2inym40C9UBLHRtj0IUO3XEjqSQJTnm'))
// console.log($.ajax('https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=manx&api_key=live_epowJR24KRya1wP4HjDTsXaJiMVsfCsQK2inym40C9UBLHRtj0IUO3XEjqSQJTnm'))
// console.log($.ajax('https://api.thecatapi.com/v1/images/search?limit=3&api_key=REPLACE_ME'))

console.log($.ajax("https://api.thecatapi.com/v1/breeds"));
///////////////////
///Global Variables
//////////////////
let breedId = [
  "abys",
  "aege",
  "abob",
  "acur",
  "asho",
  "awir",
  "amau",
  "amis",
  "bali",
  "bamb",
  "beng",
  "birm",
  "bomb",
  "bslo",
  "bsho",
  "bure",
  "buri",
  "cspa",
  "ctif",
  "char",
  "chau",
  "chee",
  "csho",
  "crex",
  "cymr",
  "cypr",
  "drex",
  "dons",
  "lihu",
  "emau",
  "ebur",
  "esho",
  "hbro",
  "hima",
  "jbob",
  "java",
  "khao",
  "kora",
  "kuri",
  "lape",
  "mcoo",
  "mala",
  "manx",
  "munc",
  "nebe",
  "norw",
  "ocic",
  "orie",
  "pers",
  "pixi",
  "raga",
  "ragd",
  "rblu",
  "sava",
  "sfol",
  "srex",
  "siam",
  "sibe",
  "sing",
  "snow",
  "soma",
  "sphy",
  "tonk",
  "toyg",
  "tang",
  "tvan",
  "ycho",
];
let names = [
  "Abyssinian",
  "Aegean",
  "American Bobtail",
  "American Curl",
  "American Shorthair",
  "American Wirehair",
  "Arabian Mau",
  "Australian Mist",
  "Balinese",
  "Bambino",
  "Bengal",
  "Birman",
  "Bombay",
  "British Longhair",
  "British Shorthair",
  "Burmese",
  "Burmilla",
  "California Spangled",
  "Chantilly-Tiffany",
  "Chartreux",
  "Chausie",
  "Cheetoh",
  "Colorpoint Shorthair",
  "Cornish Rex",
  "Cymric",
  "Cyprus",
  "Devon Rex",
  "Donskoy",
  "Dragon Li",
  "Egyptian Mau",
  "European Burmese",
  "Exotic Shorthair",
  "Havana Brown",
  "Himalayan",
  "Japanese Bobtail",
  "Javanese",
  "Khao Manee",
  "Korat",
  "Kurilian",
  "LaPerm",
  "Maine Coon",
  "Malayan",
  "Manx",
  "Munchkin",
  "Nebelung",
  "Norwegian Forest Cat",
  "Ocicat",
  "Oriental",
  "Persian",
  "Pixie-bob",
  "Ragamuffin",
  "Ragdoll",
  "Russian Blue",
  "Savannah",
  "Scottish Fold",
  "Selkirk Rex",
  "Siamese",
  "Siberian",
  "Singapura",
  "Snowshoe",
  "Somali",
  "Sphynx",
  "Tonkinese",
  "Toyger",
  "Turkish Angora",
  "Turkish Van",
  "York Chocolate",
];
let breedImg = [
  "https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg",
  "https://cdn2.thecatapi.com/images/ozEvzdVM-.jpg",
  "https://cdn2.thecatapi.com/images/hBXicehMA.jpg",
  "https://cdn2.thecatapi.com/images/xnsqonbjW.jpg",
  "https://cdn2.thecatapi.com/images/JFPROfGtQ.jpg",
  "https://cdn2.thecatapi.com/images/8D--jCd21.jpg",
  "https://cdn2.thecatapi.com/images/k71ULYfRr.jpg",
  "https://cdn2.thecatapi.com/images/_6x-3TiCA.jpg",
  "https://cdn2.thecatapi.com/images/13MkvUreZ.jpg",
  "https://cdn2.thecatapi.com/images/5AdhMjeEu.jpg",
  "https://cdn2.thecatapi.com/images/O3btzLlsO.png",
  "https://cdn2.thecatapi.com/images/HOrX5gwLS.jpg",
  "https://cdn2.thecatapi.com/images/5iYq9NmT1.jpg",
  "https://cdn2.thecatapi.com/images/7isAO4Cav.jpg",
  "https://cdn2.thecatapi.com/images/s4wQfYoEk.jpg",
  "https://cdn2.thecatapi.com/images/4lXnnfxac.jpg",
  "https://cdn2.thecatapi.com/images/jvg3XfEdC.jpg",
  "https://cdn2.thecatapi.com/images/B1ERTmgph.jpg",
  "https://cdn2.thecatapi.com/images/TR-5nAd_S.jpg",
  "https://cdn2.thecatapi.com/images/j6oFGLpRG.jpg",
  "https://cdn2.thecatapi.com/images/vJ3lEYgXr.jpg",
  "https://cdn2.thecatapi.com/images/IFXsxmXLm.jpg",
  "https://cdn2.thecatapi.com/images/oSpqGyUDS.jpg",
  "https://cdn2.thecatapi.com/images/unX21IBVB.jpg",
  "https://cdn2.thecatapi.com/images/3dbtapCWM.jpg",
  "https://cdn2.thecatapi.com/images/tJbzb7FKo.jpg",
  "https://cdn2.thecatapi.com/images/4RzEwvyzz.png",
  "https://cdn2.thecatapi.com/images/3KG57GfMW.jpg",
  "https://cdn2.thecatapi.com/images/BQMSld0A0.jpg",
  "https://cdn2.thecatapi.com/images/TuSyTkt2n.jpg",
  "https://cdn2.thecatapi.com/images/YnPrYEmfe.jpg",
  "https://cdn2.thecatapi.com/images/njK25knLH.jpg",
  "https://cdn2.thecatapi.com/images/CDhOtM-Ig.jpg",
  "https://cdn2.thecatapi.com/images/-tm9-znzl.jpg",
  "https://cdn2.thecatapi.com/images/xoI_EpOKe.jpg",
  "https://cdn2.thecatapi.com/images/165ok6ESN.jpg",
  "https://cdn2.thecatapi.com/images/DbwiefiaY.png",
  "https://cdn2.thecatapi.com/images/NZpO4pU56M.jpg",
  "https://cdn2.thecatapi.com/images/aKbsEYjSl.jpg",
  "https://cdn2.thecatapi.com/images/OOD3VXAQn.jpg",
  "https://cdn2.thecatapi.com/images/fhYh2PDcC.jpg",
  "https://cdn2.thecatapi.com/images/j5cVSqLer.jpg",
  "https://cdn2.thecatapi.com/images/OGTWqNNOt.jpg",
  "https://cdn2.thecatapi.com/images/06dgGmEOV.jpg",
  "https://cdn2.thecatapi.com/images/JAx-08Y0n.jpg",
  "https://cdn2.thecatapi.com/images/LutjkZJpH.jpg",
  "https://cdn2.thecatapi.com/images/-Zfz5z2jK.jpg",
  "https://cdn2.thecatapi.com/images/z7fJRNeN6.jpg",
  "https://cdn2.thecatapi.com/images/SMuZx-bFM.jpg",
  "https://cdn2.thecatapi.com/images/oGefY4YoG.jpg",
  "https://cdn2.thecatapi.com/images/Rhj-JsTLP.jpg",
  "https://cdn2.thecatapi.com/images/a8nIYvs6S.jpg",
  "https://cdn2.thecatapi.com/images/o9t0LDcsa.jpg",
  "https://cdn2.thecatapi.com/images/II9dOZmrw.jpg",
  "https://cdn2.thecatapi.com/images/ai6Jps4sx.jpg",
  "https://cdn2.thecatapi.com/images/3bkZAjRh1.jpg",
  "https://cdn2.thecatapi.com/images/Qtncp2nRe.jpg",
  "https://cdn2.thecatapi.com/images/MK-sYESvO.jpg",
  "https://cdn2.thecatapi.com/images/EPF2ejNS0.jpg",
  "https://cdn2.thecatapi.com/images/BDb8ZXb1v.jpg",
  "https://cdn2.thecatapi.com/images/KBroiVNCM.jpg",
  "https://cdn2.thecatapi.com/images/O3F3_S1XN.jpg",
  "https://cdn2.thecatapi.com/images/7CGV6WVXq.jpg",
  "https://cdn2.thecatapi.com/images/sxIXJax6h.jpg",
  "https://cdn2.thecatapi.com/images/0SxW2SQ_S.jpg",
];
let noImgBreed = ["ebur", "mala"];
//let breedsWithImgs = [];

//////////////
///functions//
/////////////
function getBreedsLoop() {
  $.ajax("https://api.thecatapi.com/v1/breeds").then(
    function (data) {
      for (let i = 0; i < data.length; i++) {
        breedId.push(data[i].id);
        names.push(data[i].name);
        if (data[i].image) {
          breedImg.push(data[i].image.url);
        } else {
          noImgBreed.push(data[i].id);
        }
      }
    },
    function (error) {
      console.log("There seems to be an error");
    }
  );
}
getBreedsLoop();
// console.log(breedId);
// console.log(breedImg);
// console.log(noImgBreed);
// console.log(names);
//console.log(breeds);

// let breedsWithImgs = names.filter((breed) => {
//   console.log(breed);
//   //return breed !== "ebur";
// });
let breedsWithImgs = breedId.filter(breed => {
    if(breed !== 'ebur' && breed !== 'mala'){
        return true
     }
     return false
})
// for (let i = 0; i < breeds.length; i++){
//     // if(breeds[i] !== 'ebur' && breeds[i] !== 'mala'){
//     //     breedsWithImgs.push(breeds[i]);
//     // }
//     console.log(breeds[i])
// }
console.log(breedsWithImgs);

// function getBreedTemp (breedsArr) {
//     console.log(breedsArr)
//     for(let i=0; i < breedsArr.length; i++){
//         console.log(breedsArr[i])
//         //console.log($.ajax(`https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${breedsArr[i]}&api_key=live_epowJR24KRya1wP4HjDTsXaJiMVsfCsQK2inym40C9UBLHRtj0IUO3XEjqSQJTnm`))
//         //.then( function(data){
//             //console.log(data);
//         //})
//     }

// }
// getBreedTemp(breeds);