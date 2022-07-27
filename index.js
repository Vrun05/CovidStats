$.ajax({

   type:'get',
     url:'https://api.covid19api.com/summary',
   success:function(responce)
   {
       console.log(responce)
       for(var i=0; i<responce.Countries.length;i++)
       {
        var tatalactive = responce.Countries[i].TotalConfirmed - responce.Countries[i].TotalRecovered;
        var tablerow = `<tr> <td>${responce.Countries[i].Country} </td> <td>${responce.Countries[i].TotalConfirmed}</td>  <td>${tatalactive} </td> <td>${responce.Countries[i].TotalRecovered}</td> <td>${responce.Countries[i].TotalDeaths}</td>   </tr>`;
        console.log(tablerow);

       $('#tbody').append(tablerow) 

       }

         $('#covidtable'). DataTable()
  
        },
   
   error:function(error)
   {
   
      console.log(error)
    
   }

})
                            