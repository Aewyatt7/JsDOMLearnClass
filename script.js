/*How to Select an Element from the HTML */
const signup = document.getElementById("signup");

signup.classList.add("highlighted");
signup.style.fontSize = "24px";
//Query Selector 
const unorderdList = document.querySelector("ul");
unorderdList.classList.add ("highlighted");

const liTags = document.querySelectorAll("li");
console.log (liTags);

//How can I change something on every list item
liTags[0].style.fontSize = "40px";
//Iterates over the array (nodeList) and changes each item
liTags.forEach(function (item){
    item.style.fontSize = "20px";
});

const h1Tag = document.querySelector("h1");
console.log(h1Tag);
h1Tag.textContent = "Padme's Padawans";
h1Tag.style.fontFamily = "aerial";

//Selec the H1 tag without using querySelector 
const allH1s = document.getElementsByTagName("h1")
console.log(allH1s);
allH1s[0].style.color = "red";


//We are going to create a elmeent 
//1. Make the thing
//2. Change the thing (give it text)
//3. Add the thing to the page

/*Pupils will be raining daily from 9:00am to 3:00pm with a lunch break supervised by Anakin.Anakin
"Lucnes will be catered by Dex's Diner Platter Services Inc"*/

const NewParagraph = document.createElement("p");
NewParagraph.textContent = "Pupils will be training daily from 9:00am to 3:00pm with a lunch break supervised by Anakin";
unorderdList.insertAdjacentElement("afterend", NewParagraph);

//Removing elemnts 
//nerParagraph.remove
//NewParagraph.remove();

//Make a button to remove the highlights the page
const unHighlightButton = document.createElement('button');
unHighlightButton.textContent = "Remove Highlights";
document.body.append(unHighlightButton);
//add an event listener to the button
unHighlightButton.addEventListener("click",(event) => {
    console.log(event);
    //Do the thing that you wanted to do when it gets clicked
    //select all the pages elements that have the "highlighted" class
    const highlightedElements = document.querySelectorAll(".highlighted");
    //we use the "." to select the class "#" for id and "tag" for tags
    //Remove that class from them
      //Iterate over the elements we need to do a for loop
      for (let i = 0; i < highlightedElements.length; i++){
        //Remove the class from one element at a time
        highlightedElements[i].classList.remove("highlighted");
      }
});

//Handling a FORM SUBMIT event
//Select the form
const myForm = document.querySelector("form");
//Add the event listner to the form
myForm.addEventListener("submit", handleSubmit);
function handleSubmit(event){
    console.log(event);
    //Prevents the default submit action that puts info in the URL and refreshes the page
    event.preventDefault();
    //NOW I can actually do whatever it is I wanted to do
    const userInput = document.getElementById('fName');
    //Used the input element's value (aka the text that was input)
    console.log (`The user's name they gave was:${userInput.value}`);
// Lets let the childeren get to pick who they want

// This is where we start working on their fav jedi
const radioInputs = document.querySelectorAll("input[type=radio]");
console.log (radioInputs);
//Iterate over my list of radio inputs
for (let i = 0; i < radioInputs.length; i++){
    //look for the on that was checked
    if (radioInputs[i].checked == true){
        console.log(`The user decided that ${radioInputs[i].value} is their favorite Jedi`);
        //  Since we just found the right input, we can stop searching
    }
}
}
//Make an annoying button for the Thanksgiving Holiday!!
const trollButton = document.querySelector("#troll");
//Add an event listener to the button for when it gets hovered
trollButton.addEventListener("mouseenter", (event) =>{
    // Generate a random coordinate within the containing block
    console.log(event);
    const containingParent = event.target.parentElement;
    const randomX = Math.floor(Math.random() * 
    containingParent.clientwidth);
    const randomY = Math.floor(Math.random() * 
    containingParent.clientheight);
    //Move the button to that coordinate
    trollButton.style.left = `${randomX}px`;
    trollButton.style.top = `${randomY}px`;
    console.log (randomX, randomY);});

