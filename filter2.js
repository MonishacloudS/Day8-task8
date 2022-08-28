var req=new XMLHttpRequest();

req.open('Get','https://restcountries.eu/rest/v2/all',true);

req.send();

req.onload=function(){
    var data=JSON.parse(this.response);
    console.log(data);

    var popu=data.filter((element)=>element.population<200000);
    console.log(popu);
}


//Get all the countries with a population of less than 2 lakhs using Filter function
