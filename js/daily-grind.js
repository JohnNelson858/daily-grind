/*

    One unique image, with appropriate and matching content in the alt tag.  
    A paragraph or two of content that describes the daily item (paragraph must include the name of the highlighted weekday)
    A unique color that supports the image and paragraph of content

    pic - image src
    alt - the alt tag for the image
    desc - a description of the coffee
    day - the day of the week for the coffee
    color - color associated with coffee
    name - the name of the coffee

*/

// Current date object
let myDate = new Date();
let myDay = myDate.getDay();
let today = "";

// Use location object to access query string
const queryString = window.location.search;

// Output query string to console
console.log(queryString);

// Separate query string parameters
const urlParams = new URLSearchParams(queryString);

// Retrieve data from query string if it exists
if(urlParams.has("day")){

    myDay = urlParams.get("day");

}

// Convert string into integer
myDay = parseInt(myDay);

// Coffee object
let coffee = {};

// Switch block for each day
switch(myDay){

    case 0:
        today = "Sunday";

        coffee = {
            name:"Caramel Latte",
            pic:"caramel-latte.jpg",
            alt:"A delicious caramel latte topped with whipped cream.",
            color:"#C68E57",
            day:"Sunday",
            desc:`<strong>Sunday's Coffee Special:</strong> Sunday is the perfect day to relax with a warm <strong>Caramel Latte</strong>. Its smooth caramel flavor and creamy finish make it a perfect weekend treat while preparing for the week ahead.`
        };

    break;

    case 1:
        today = "Monday";

        coffee = {
            name:"Pumpkin Spice Latte",
            pic:"pumpkin-spice-latte.jpg",
            alt:"A pumpkin spice latte served hot for Fall weather.",
            color:"#FF7518",
            day:"Monday",
            desc:`<strong>Monday's Coffee Special:</strong> Monday's featured drink is our famous <strong>Pumpkin Spice Latte</strong>. This seasonal favorite combines warm spices and creamy coffee flavors to help energize the start of your week.`
        };

    break;

    case 2:
        today = "Tuesday";

        coffee = {
            name:"Bubble Tea",
            pic:"bubble-tea.jpg",
            alt:"A refreshing bubble tea with chewy tapioca pearls.",
            color:"pink",
            day:"Tuesday",
            desc:`<strong>Tuesday's Coffee Special:</strong> Tuesday brings a fun twist with our refreshing <strong>Bubble Tea</strong>. Sweet flavors and chewy tapioca pearls make this a customer favorite during busy afternoons.`
        };

    break;

    case 3:
        today = "Wednesday";

        coffee = {
            name:"Cold Brew",
            pic:"cold-brew.jpg",
            alt:"A smooth and refreshing cold brew coffee over ice.",
            color:"#4B3621",
            day:"Wednesday",
            desc:`<strong>Wednesday's Coffee Special:</strong> Midweek calls for our smooth and bold <strong>Cold Brew</strong>. Slow brewed for rich flavor, this chilled coffee is perfect for staying focused and refreshed.`
        };

    break;

    case 4:
        today = "Thursday";

        coffee = {
            name:"Mocha",
            pic:"mocha.jpg",
            alt:"A rich chocolate mocha coffee topped with foam.",
            color:"#5C4033",
            day:"Thursday",
            desc:`<strong>Thursday's Coffee Special:</strong> Thursday features our rich and creamy <strong>Mocha</strong>. Chocolate and espresso combine together to create a comforting drink that powers you toward the weekend.`
        };

    break;

    case 5:
        today = "Friday";

        coffee = {
            name:"Drip Coffee",
            pic:"drip.jpg",
            alt:"A fresh hot cup of classic drip coffee.",
            color:"brown",
            day:"Friday",
            desc:`<strong>Friday's Coffee Special:</strong> Friday keeps things classic with our bold <strong>Drip Coffee</strong>. Freshly brewed and simple, it is the perfect fuel for ending the work week strong.`
        };

    break;

    case 6:
        today = "Saturday";

        coffee = {
            name:"Frappaccino",
            pic:"frappaccino.jpg",
            alt:"A frozen frappaccino blended coffee drink.",
            color:"#8B5A2B",
            day:"Saturday",
            desc:`<strong>Saturday's Coffee Special:</strong> Saturday is all about fun and relaxation with our icy <strong>Frappaccino</strong>. This blended frozen drink is sweet, refreshing, and perfect for weekend adventures.`
        };

    break;

    default:
        today = "Unknown Day";

}

// Output coffee object to console
console.log(coffee);

// Coffee template function
function coffeeTemplate(coffee){

    let myReturn = "";

    myReturn += `
        <h2>${coffee.day} Special: ${coffee.name}</h2>

        <p>
            <img src="images/${coffee.pic}" alt="${coffee.alt}" id="coffee">
            ${coffee.desc}
        </p>
    `;

    return myReturn;

}

// Inject HTML into page
document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);

// Change background color
document.querySelector("html").style.backgroundColor = coffee.color;

// Change strong tags inside coffee-cup
document.querySelectorAll("#coffee-cup strong").forEach(el => {
    el.style.color = coffee.color;
});
