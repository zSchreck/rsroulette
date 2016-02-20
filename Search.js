/**
 * main serch engine 
 * */


var dist = DISTANCE;
var zip = ZIPCODE;
var keycode = "a9DtHbJ5UyLUua4umVtSAgQzwpd1ub8aeEBr2zhg";

title = Factual ID   r0
title = name   r1
title = address;   r2
title Address    r3
title = locality (town/City)    r4
title = Neighborhood    r5
title = Region (State/Province)    r6
title = Post Code     r7
title hours of operations    r23
title = hours (display)    r24



{"Places":[
              {"firstName":"John", "lastName":"Doe"},
              {"firstName":"Anna", "lastName":"Smith"},
              {"firstName":"Peter", "lastName":"Jones"}
          ]}


GET http://api.v3.factual.com/t/restaurants-us?geo={"$circle":{"$center":[34.06018, -118.41835],"$meters": 2500}}&KEY=keycode
	
	
	