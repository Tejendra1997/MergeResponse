 var responsePayload =context.getVariable("response.content");
 var calloutResponse =context.getVariable("calloutResponse.content");
 var jsonResPayload = JSON.parse(responsePayload);
 var jsonCalloutResponse = JSON.parse(calloutResponse);
 var arrayResponse = [];

 for(var i=0; i<jsonResPayload.length; i++)
 {
     if(jsonResPayload[0].id == jsonCalloutResponse[0].id)
     {
         var output = {
                        "Company": jsonResPayload[0].company,
                        "Latitute": jsonResPayload[0].address.geo.lat,
                        "Longitude": jsonResPayload[0].address.geo.lng,
                        "Title": jsonCalloutResponse[0].title,
                        "Body": jsonCalloutResponse[0].body
                        };
     }
     arrayResponse.push(output);
 }
 
response.content.asJSON = arrayResponse;