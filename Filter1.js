//1.Get all the countries from Asia continent /region using Filter function

var req=new XMLHttpRequest();

req.open('Get','https://restcountries.eu/rest/v2/all',true);

req.send();

req.onload=function(){
    var data=JSON.parse(this.response);
    console.log(data);

    var regn=data.filter((element)=>element.region==='Asia');
    console.log(regn);
}
