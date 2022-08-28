var req=new XMLHttpRequest();

req.open('Get','https://restcountries.eu/rest/v2/all',true);

req.send();

req.onload=function(){
    var data=JSON.parse(this.response);
    console.log(data);

    var total=data.filter(element=>{
        for(var i in element.currencies){
            if(element.currencies[i].code==='USD'){
                return true;
            }
        }
    });
    console.log(total);
}


//5.Print the country which uses US Dollars as currency.
