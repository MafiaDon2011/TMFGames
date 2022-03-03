document.getElementById('Change_Theme').addEventListener("click", function(){
    var stylesheet = document.getElementById('Main_Style');
    var maximum = 3;
    var minimum = 0;
    var randomnumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    console.log(randomnumber);
    if (randomnumber == 0){
        stylesheet.setAttribute("href", "./StyleSheets/Purple-Style.css");
    }
    else if(randomnumber == 1){
        stylesheet.setAttribute("href", "./StyleSheets/Green-Style.css");
    }
    else if (randomnumber == 2){
        stylesheet.setAttribute("href", "./StyleSheets/Orange-Style.css");
    }
    else {
        stylesheet.setAttribute("href", "./StyleSheets/Yellow-Style.css");
    }





    // console.log("Theme Clicked!"");

});
