


$(document).ready(function(){

  //Call data pull function
  indexPull();
  

   /*script for hiding/showing indexcards
    Cards will only appear after a filter is applied
    A alpabatical filter needs to be applied before
    you can filter based on gender*/

    //Hide filter buttons until a filter is applied
    cloak(".genderIndex");  

    //Trigger event handler
    $(".button").click(function(){

        //Hide all cards
        cloak(".indexKaart");

        //Make or unmake buttoncolor red (=active) upon click event
        if($(this).css("background-color") == "rgb(255, 0, 0)") {
           $(this).css("background-color", "");
        } else {
            $(this).css("background-color", "rgb(255,0,0)");
        }

        //Store all indexcards in one variable
        mijnLijst = $('.indexKaart');

        //Declare a variable to collect filtered indexcards based on active/inactive button
        reslijst = $();

        //Declare a variable to hide/show genderfilter (userfriendly)
        x = 0;

        //Filter through all buttons to check button color (red=active)
         if ($(".aTotiCheck").css("background-color") == "rgb(255, 0, 0)") {
            reslijst = reslijst.add(mijnLijst.filter(".aToti"));
            x++;
         }
         if ($(".jTotrCheck").css("background-color") == "rgb(255, 0, 0)") {
            reslijst = reslijst.add(mijnLijst.filter(".jTotr"));
            x++;
         }
         if ($(".sTotzCheck").css("background-color") == "rgb(255, 0, 0)") {
            reslijst = reslijst.add(mijnLijst.filter(".sTotz"));
            x++;
         }

         //Only show the genderfilter when a alpabatical filter has been selected
         if (x < 1) {
            cloak(".genderIndex");
              } else {
            $(".genderIndex").show();
         }

         //Continue button filtering
        if ($(".manBtn").css("background-color") == "rgb(255, 0, 0)") {
            reslijst = reslijst.filter(".man");
        }
        if ($(".vrouwBtn").css("background-color") == "rgb(255, 0, 0)") {
            reslijst = reslijst.filter(".vrouw");
        }

        //Show collection
        if (reslijst != null)
          reslijst.show();
    });

    //Call save function when clicking the save btn/img
    $(".saveImg").click(function(){

      //Put form values in array
      let x= $("#dataForm" ).serializeArray();
      console.log(x);
      
      //Clean up form array to nice JSON
      let obj = {};
      for( let i = 0; i < x.length; ++i ) {
			let element = x[i];
			let name = element.name;
			let value = element.value;
			if( name ) {
				obj[name] = value;
			}
		}
	
         //Sent JSON to php script
         $.ajax({
         url: "create.php",
         data: {myJson: JSON.stringify(obj)},
         type: "POST",
         dataType : "TEXT",

         //Upon succes
         success: function(result) { 
            //console.log(result.firstName);
            console.log(result);
            //indexPull()
            resetFormFields();
         if (result) {console.log("SUCCES")};
         },

         //Upon error
         error: function(XMLHttpRequest, textStatus, errorThrown) { 
            alert("Status: " + textStatus); alert("Error: " + errorThrown); 
        }  
     })
    });

    //Call card values to form values upon clicking a address card
    $(document).on('click','.indexKaart',function(){

      //Get data from database with ajax call
      $.ajax({
         url: "search.php",
         data: {id: this.id},
         type: "POST",
         dataType : "JSON",

         //Upon succes
         success: function(result) { 
            storeData(result);
            if (result) {console.log("SUCCES")};
         },

         //Upon error
         error: function(XMLHttpRequest, textStatus, errorThrown) { 
            alert("Status: " + textStatus); alert("Error: " + errorThrown); 
        }  
     })

      //Display hidden form 
      $("#dataEntry").css("display", "block");

      
    });


    //----------FUNCTION DECLARATIONS---------

    //Reset data entry fields on click cancel btn
    $(".cancelImg").click(function(){
      resetFormFields();
   });

   //RESET FORM FIELDS
   function resetFormFields () {
      $("#id").val("");
      $("#input1").val("");
      $("#input2").val("");
      $("input[name='gender']").prop('checked', false);
      $("#input4").val("");
      $("#dataEntry").css("display", "none"); 
   }


      //STORE DATA IN FORM FIELDS
      function storeData(res) {
         $("#id").val(res.id);
         $("#input1").val(res.firstname);
         $("#input2").val(res.lastname);
         res.gender == "man" ?  $("input[id='input3']").prop('checked', true) :  $("input[id='input5']").prop('checked', true);
         $("#input4").val(res.city);
      }

  //COLLECT ALL ADDRESS CARDS FROM DATABASE
  function indexPull() {
   $.get("http://10.1.254.102/Smoelenboek-3.0/PHP_JSON.php", function(data, status){
 
   //Iterate through the JSON array for all entries
   for (x in data) {
      createAddresCard(data,x);
       }
    });
   }

   //HIDE DIV BASED IN VAL
   function cloak(val) {
      $(val).hide();
   }

   function createAddresCard(array, counter) {

      //Set variables
     let indexCardClass = "indexKaart";
     let strFirstLtr = array[counter].lastname.charAt(0);
     
     //Check for class values and set accordingly
     array[counter].gender == "man" ? indexCardClass += " man": indexCardClass += " vrouw";
     if (strFirstLtr.match(/[a-i]/i)){indexCardClass += " aToti"};
     if (strFirstLtr.match(/[j-r]/i)){indexCardClass += " jTotr"};
     if (strFirstLtr.match(/[s-z]/i)){indexCardClass += " sTotz"};
    
     //Create new div and insert into DOM
     $("#cards").append('<div id="' + array[counter].id + '" class="' + indexCardClass + '"><div class="persInfo"><p>ID: '+ array[counter].id + '</br>Naam: ' + array[counter].firstname
                         + ' ' + array[counter].lastname + '</br>Woonplaats: ' + array[counter].city + ' </br>Geslacht: ' + array[counter].gender + '</p></div></div>');
    
   }
});
