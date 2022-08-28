var req=new XMLHttpRequest();

req.open('Get','https://restcountries.eu/rest/v2/all',true);

req.send();

req.onload=function(){
    var data=JSON.parse(this.response);
    console.log(data);

    data.forEach(myFunction);

    function myFunction(cname,ccaptital,cflag){
        for(i=0;i<=250;i++){
            var cname=data[i].name;
            var ccapital=data[i].capital;
            var cflag=data[i].flag;
            console.log(cname+","+ccapital+","+cflag);
        }
    }
}

//3.Print the following details name, capital, flag using forEach function
