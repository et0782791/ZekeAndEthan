// function to display the number of pizzas
function pizzaNumber() {
    // Select ID NumOfPizzas from Div element
    var myDiv = document.getElementById("selectNumOfPizzas");

    //Create array of options to be added
    var pizzaNumberArray = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    //Create and append select list
    var selectNumber = document.createElement("select");
    selectNumber.id = "selectNumber";
    myDiv.appendChild(selectNumber);

    //Create and append the options
    for (var i = 0; i < pizzaNumberArray.length; i++) {
        var option = document.createElement("option");
        option.value = pizzaNumberArray[i];
        option.text = pizzaNumberArray[i];              
        selectNumber.appendChild(option);
    }

    loadAmountOfPizzas();
    

}
//creates onclick events to each individual pizza under select toppings
function loadAmountOfPizzas(){
    var options = document.getElementsByTagName("option");
    for(let i = 0; i < options.length; ++i){
        options[i].onclick = function(){
            document.getElementById("pizzaType").innerHTML = "Select Toppings: "
            for(let l = 0; l < options[i].value;++l){
                document.getElementById("pizzaType").innerHTML += "<div class='pizzas'>" + "Pizza " + (l + 1) + "  " + "</div>";
            }   
            pizzaType();                 
        }
    }
}

// Function to display the pizza toppings
function pizzaType() {

    var myDiv = document.getElementsByClassName("pizzas");
    //Create array of toppings
    var pizzaToppingArray = ["Cheese", "Pepperoni", "Sausage", "Pineapples", "Black Olives"];
    for(let l = 0; l < myDiv.length; ++l){
    //Create and append select list
    var toppings = document.createElement("select");
    // sets the id
    toppings.id = "toppingSelect";
    // sets the size of the select 
    toppings.size = "1";
    // create class name
    toppings.className = "toppins";
    // appends to mydiv
    myDiv[l].appendChild(toppings);
    
    //Create and append the options
    for (var i = 0; i < pizzaToppingArray.length; i++) {
        var option = document.createElement("option");
        option.value = pizzaToppingArray[i];
        option.text = pizzaToppingArray[i];
        toppings.appendChild(option);
    }
    // This allows the user to select multiple items from the select box
    document.getElementById("toppingSelect").multiple = false;
    }
}


// Funciton to display the order
function displayOrder() {
    orderReceipt = document.getElementById("OrderReceipt");
    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lstname").value;
    var numOfPizzas = document.getElementById("selectNumber").value;
    var toppings = document.getElementsByClassName("toppins");
    var size = toppings.length;
    for(var i = 0; i < size;++i){
        toppings[i] = toppings[i].value; 
    } 

    orderReceipt.innerHTML = ("<h2>Thank you! Your order has been placed!<h2>");
    orderReceipt.innerHTML += ("<h4>Order Details</h4>FIRST NAME: "+firstName+"<br> LAST NAME: " +lastName+"<br> NUMBER OF PIZZAS: "+numOfPizzas+ "<h4>Toppings </h4>");

    for(var i = 0; i < size;++i){
        orderReceipt.innerHTML += "Pizza " + (i+1) + ": " +  toppings[i].value + "<br>"; 
    }
    
    price = calculatePrice(numOfPizzas);
    orderReceipt.innerHTML += "<h4>Pricing</h4>";
    orderReceipt.innerHTML += "SubTotal: " + price[0] + "$"; 
    orderReceipt.innerHTML += "<br>Tax: " + price[1] + "$";
    orderReceipt.innerHTML += "<br>Total: " + price[2] + "$";

     
}
//calculates the price depending on how many pizzas were ordered
function calculatePrice(numOfPizzas){
    var subtotal = numOfPizzas * 5;
    var tax = .076 * subtotal;
    var total = tax + subtotal;
    //returns an array of the price values
    priceValues = [subtotal,tax,total];
    return priceValues;
}

function addPizzaFlavor()
{
    // I think she might be wanting the user to be able to add toppings with input, if so:
    //https://www.w3schools.com/jsref/met_select_add.asp
    // ^^^^^^^^^^^ This should be a good reference. 
}