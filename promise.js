const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (kondisi) => {
  try {
    let data1 = await promiseTheaterIXX();
    let data2 = await promiseTheaterVGC();

    let arrData1 = [];
    for(let hasilData1 = 0; hasilData1 < data1.length; hasilData1++){
      arrData1.push(data1[hasilData1].hasil);
    }

    let arrData2 = [];
    for(let hasilData2 = 0; hasilData2 < data2.length; hasilData2++){
      arrData2.push(data2[hasilData2].hasil);
    }
    
    let arr = arrData1.concat(arrData2);
    
    const jumlah =[];
    arr.forEach(element => {
      if(element === kondisi){
        jumlah.push(element);
      }
    });     
    
    return jumlah.length;
   
  } catch (err) {
    console.log(err);
  }
};


module.exports = {
  promiseOutput,
};
