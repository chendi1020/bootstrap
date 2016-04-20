


    
$(document).ready(function() {
         var orderCount = 0;
    var container = d3.select("#dvData").append('table');
        $('#example-limit').multiselect({
            onChange: function(option, checked) {
                if (checked) {
                    orderCount++;
                    $(option).data('order', orderCount);
                }
                else {
                    $(option).data('order', '');
                }
                
                var selected = [];
                $('#example-limit').each(function() {
                    selected.push([$(this).val()]);
                });
                
                 var text = '';
                    for (var i = 0; i < selected.length; i++) {
                        text += selected[i][0] + ', ';
                 
                    }
               
            
              //console.log(text.substr(0, text.length -2));
               
                    
  
     var parsedCSV1= [];
    d3.text("enrollmentfile.csv", function(data) {
                var parsedCSV = d3.csv.parseRows(data);

                 for (var j=0; j<selected.length; j++){
                     for (var k=0; k < selected[j][0].length; k++){
                       for (var i=0;i<parsedCSV.length;i++){
                                if (i === 0 && j === 0 && k ===0) {parsedCSV1.push(parsedCSV[0]) }
                                else if((parsedCSV[i][2]=== selected[j][0][k]  && parsedCSV[i][0]=== "FS15")){
                                parsedCSV1.push(parsedCSV[i]);
                        }  
                    }  
                }
                        
                     
                      //console.log(selected[j][0].length);
					};
          console.log(parsedCSV1);
        
      
                  //  console.log(parsedCSV1);
                
        
         function update() {
                var rows =  container.selectAll("tr")
                        .data(parsedCSV1);
                        
                    
                     rows.enter().append("tr");
                        
                var cells = rows.selectAll("td")
                        .data(function(d) { return d; });
                    
                    cells.enter().append("td");
                    
                    cells.text(function(d) { return d; });
                   
                    cells.exit().remove();
                    rows.exit().remove();
                   // container.exit().remove();
             
         };
           update();      
        
            }); 
                
            }
            

     
     
        });
     
        
        
    });



     
