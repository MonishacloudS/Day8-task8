var req=new XMLHttpRequest();

req.open('Get','https://restcountries.eu/rest/v2/all',true);

req.send();

req.onload=function(){
    var data=JSON.parse(this.response);
    console.log(data);

    var total=data.reduce((acc,ele)=>ele.population);
    console.log(total);
}


//4.Print the total population of countries using reduce function
