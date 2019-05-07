let data = []

let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
let tf = [true, false]

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function getRandomIntMM(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

for(let i=1; i < 25; i++) {
    let obj = {}
    obj.id =  i;
    obj.storeAddress = "401 1st Ave S, Seattle, WA 98104";
    obj.timeDate = "2019-4-"+i;
    obj.didSellOut = tf[getRandomInt(2)];

    if(obj.didSellOut === true) {
        obj.sellOutDate = days[getRandomInt(6)];
        obj.sellOutTime = getRandomIntMM(13, 15);
    }
      
    




    data.push(obj)

}

console.log(data);