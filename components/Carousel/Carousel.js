class Carousel {
    constructor(newCaro) {
        this.original = newCaro;
        this.slides = this.original.querySelectorAll('.carousel img')
        // buttons
        
        this.leftButton = this.original.querySelector('.left-button')
        this.leftButton.addEventListener('click', () => goLeft())

        this.rightButton = this.original.querySelector('.right-button')
        this.rightButton.addEventListener('click', () => goRight())
    }
    
    goLeft() {
        showSlides(currentIndex -= n);

    }
    
    goRight(n) {
        showSlides(currentIndex += n);
    }

    showSlides(n) {
        let i;
        if (n > this.slides.length) {currentIndex = 1}
        if (n < 1) {currentIndex = slides.length}
        for (i=0; i < this.slides.length; i++) {
            this.slides[i].style.display = "none";
        }
        // for (i=0; i < )
    }

}

const carousel = document.querySelectorAll('.carousel');
carousel.forEach((newCaro) => new Carousel(newCaro))

let currentIndex = 1;

console.log(carousel)






/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons DONE
    2. You will need to grab a reference to all of the images DONE
    3. Create a current index DONE
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
