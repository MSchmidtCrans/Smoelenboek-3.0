


$(document).ready(function(){

  //Call a php script to collect data from backend
  function indexPull() {
  $.get("http://10.1.254.102/Smoelenboek-3.0/smoelDataPull.php", function(data, status){

  console.log(data);
  
   //Set variables
    let indexCardClass = "indexKaart";
    let strFirstLtr = data.lastName.charAt(0);
    
    //Check for class  values and set accordingly
    data.gender == "man" ? indexCardClass += " man": indexCardClass += " vrouw";
    if (strFirstLtr.match(/[a-i]/i)){indexCardClass += " aToti"};
    if (strFirstLtr.match(/[j-r]/i)){indexCardClass += " jTotr"};
    if (strFirstLtr.match(/[s-z]/i)){indexCardClass += " sTotz"};
   
    //Create new div and insert into DOM
    $("#cards").append('<div class="' + indexCardClass + '"><div class="persInfo">' + '<p>Naam: ' + data.firstName
                        + ' ' + data.lastName + '</br>Woonplaats: ' + data.city + ' </br>Geslacht: ' + data.gender + '</p></div></div>');
  });
  }

  indexPull();



/*script for hiding/showing indexcards
    Cards will only appear after a filter is applied
    A alpabatical filter needs to be applied before
    you can filter based on gender*/

    //Hide all cards until a filter is applied
    $(".indexKaart").hide();
    $(".genderIndex").hide();

    

    //Trigger event handler
    $("button").click(function(){

        //Hide all cards
        $(".indexKaart").hide();



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
            $(".genderIndex").hide();
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
});
