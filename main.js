// Get Slider Items | Array.form [ES6 Feature]
let sliderImages = Array.from(document.querySelectorAll('.slider-container img'));

// Get number of slide

let slidecount = sliderImages.length;

// set current slide 
let currentslide = 1;

// slidenumber  Element

let slidenumber = document.getElementById('slide-number');

// Previous and next button

let nextbutton = document.getElementById('next');
let prevbutton = document.getElementById('prev');


// Handle(manipuler) Click on Previous and Next Buttons
nextbutton.onclick = nextSlide;
prevbutton.onclick = prevSlide;

// Create the Main Ul Element
let paginationElement = document.createElement('ul');

// set ID on Created ul Element

paginationElement.setAttribute('id','pagination-ul');

// Creat list items based on slide count


    for (let i = 1; i <= slidecount; i++) {

        // craete the li
        let paginationItem = document.createElement('li');

        //set Custom Attribute
        paginationItem.setAttribute('data-index',i);

        // set items content le contenu d li
        paginationItem.appendChild(document.createTextNode(i));
        
        // Append Items to the Main Ul  or to parent
        paginationElement.appendChild(paginationItem);

    }
//*** */ Add The Created UL Element to The Page
document.getElementById('indicators').appendChild(paginationElement);

//*** */ Get a new Created UL
var paginationNewElement = document.getElementById('pagination-ul');

// Get paginitation Items | Array.form [ES6 Feature]
let paginationBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

// Loop Through All Bullets Items */
for (let i = 0; i < paginationBullets.length; i++) {
   paginationBullets[i].onclick =function(){
       currentslide = parseInt(this.getAttribute('data-index'));
       theChecker();
   }
    
}


//** */ trigger the checker function
theChecker();
 



//*** */ Next Slide Function

function nextSlide() {
    if (nextbutton.classList.contains('disabled')) {
        //do nothing
        return false;
    } else {
        currentslide++;
        theChecker();
    }
}

// Previous Slide Function

function prevSlide (){
    if (prevbutton.classList.contains('disabled')) {
        //do nothing
        return false;
    } else {
        currentslide--;
        theChecker();
    }
    
}

// create the checker function 
function theChecker() {
    //** */ Set The Slide Number
    slidenumber.textContent = 'Slide #' + (currentslide)+' of '+(slidecount);

    //** Remove All Active Classes ** */
    removeAllActive();

    //** */ Set Active Class On Current Slide
    sliderImages[currentslide-1].classList.add('active');

    //***Set Active Class on Current Pagination Item */
    // parant=>UL children => li selectioner lindex actuel
    paginationNewElement.children[currentslide-1].classList.add('active');

    //** */ Check if Current Slide is The First
    if (currentslide == 1) {
        // Add Disabled Class on Previous Button
        prevbutton.classList.add('disabled');
    } else {
         // Remove Disabled Class From Previous Button
         prevbutton.classList.remove('disabled');
    }
    //** */ Check if Current Slide is The Last
    if (currentslide == slidecount ) {
        // Add Disabled Class on Next Button
        nextbutton.classList.add('disabled')
    } else {
        // Remove Disabled Class frome Next Button
        nextbutton.classList.remove('disabled')
    }
   

}

//** // Remove All Active Classes From Images and Pagination Bullets */

function removeAllActive() {
    // Loop Through Images
    sliderImages.forEach(img => {
        img.classList.remove('active');
    });
    // Loop Through Pagination Bullets
    paginationBullets.forEach(bullet => {
       bullet.classList.remove('active'); 
    });
}