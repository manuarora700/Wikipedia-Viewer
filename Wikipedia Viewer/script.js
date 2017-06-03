$(document).ready(function() {
    
    $('#search').click(function() {
        var searchTerm = $('#searchTerm').val(); //jQuery function to get the value from the searchBox
        
        
        //This below string is the WIKIPEDIA API; API URL
        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm +"&format=json&callback=?";
        
        //ajax call to show the results without refreshing the page! Pretty cool huh :p
        
        $.ajax({
            type:"GET",
            url:url,
            async:false,
            dataType: "json",
            success:function(data) {
                
                $('#output').html('');
                for(var i=0; i<data[1].length; i++) {
                    $('#output').prepend("<li><a href= " +data[3][i]+">"+data[1][i] +"</a><p>"+data[2][i]+"</p></li>");    
                    
                }
                
                $('#searchTerm').val(''); //Searches and empties out the box
                /*console.log(data[1][0]);
                console.log(data[2][0]);
                console.log(data[3][0]);*/
            },
            
            error: function(errorMessage) {
                alert("Error");
            }
        });
        
        
        
    });
    //Search works when the user presses ENTER key
    $('#searchTerm').keypress(function(e) {
            if(e.which==13) {
                $('#search').click();
            }
            
        });
    
});