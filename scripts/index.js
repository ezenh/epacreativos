import { models, events, examples } from "./invitationsArrays.js"
import { createSliderItems, checkSliderItemPos, animateSliderItems } from "./scrollFunctions.js"
import { checkFirstLogin } from "./firstlogin.js"

const maps_key = 'AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8'


function getOS() {
    const userAgent = window.navigator.userAgent;
    if (userAgent.indexOf('Win') !== -1) return 'Windows';
    if (userAgent.indexOf('Mac') !== -1) return 'MacOS';
    if (userAgent.indexOf('X11') !== -1) return 'UNIX';
    if (userAgent.indexOf('Linux') !== -1) return 'Linux';
    if (userAgent.indexOf('Android') !== -1) return 'Android';
    if (userAgent.indexOf('like Mac') !== -1) return 'iOS';
    return 'Unknown OS';
    }

createSliderItems(events_cards_container, events)

function changeMockup() {
    let i = 0
    setInterval(()=>{
        if(i < 5) {
            i += 1
        }else{
            i = 1
        }
        introduction_mockup.src = `./assets/img/mup${i}.png`
        }, 2000)
}
// changeMockup()

////////////////////////////////////////////////////////////////////////////////////OK
// SCROLL LISTENER /////////////////////////////////////////////////////////////////
let scrollingTimeout;

cardcover_examples.addEventListener('scroll', () => {
    let scrolling = true

    clearTimeout(scrollingTimeout);
    checkSliderItemPos(cardcover_examples, cardcover_dots)
    scrollingTimeout = null;
    
    scrollingTimeout = setTimeout(function() {
    }, 350);
})

document.addEventListener('DOMContentLoaded', () => {
    const eventsCardsContainer = document.getElementById('events_cards_container');
    const eventsBkgContainer = document.getElementById('events_bkg_container');

    let lastScrollLeft = eventsCardsContainer.scrollLeft;

    eventsCardsContainer.addEventListener('scroll', () => {
        const scrollLeft = eventsCardsContainer.scrollLeft;
        const scrollDiff = scrollLeft - lastScrollLeft;

        // Calcula el porcentaje de desplazamiento
        const maxScroll = eventsCardsContainer.scrollWidth - eventsCardsContainer.clientWidth;
        const scrollPercentage = scrollLeft / maxScroll * 1.1;

        // Aplica el mismo porcentaje de desplazamiento al contenedor de fondo
        const bkgMaxScroll = eventsBkgContainer.scrollWidth - eventsBkgContainer.clientWidth;
        eventsBkgContainer.scrollLeft = bkgMaxScroll * scrollPercentage;

        lastScrollLeft = scrollLeft;
    });
});

models_scroll_container.addEventListener('scroll', () => {
    let container = models_scroll_container
    Array.from(models_scroll_container.children).forEach(article => {
        if (article.getBoundingClientRect().left >= container.getBoundingClientRect().left && article.getBoundingClientRect().right <= container.getBoundingClientRect().right) {
            article.style.opacity = '1'
            article.style.transform = 'scale(1)'
            article.style.filter = 'grayscale(0)'
        }else{
            article.style.opacity = '.5'
            article.style.transform = 'scale(.8)'
            article.style.filter = 'grayscale(1)'
        }
    }) 
})
let container = models_scroll_container
Array.from(models_scroll_container.children).forEach(article => {
    if (article.getBoundingClientRect().left >= container.getBoundingClientRect().left && article.getBoundingClientRect().right <= container.getBoundingClientRect().right) {
        article.style.opacity = '1'
        article.style.transform = 'scale(1)'

    }else{
        article.style.opacity = '.5'
        article.style.transform = 'scale(.8)'

    }
}) 
// BUTTONS LISTENER ////////////////////////////////////////////////////////
function animateElements(elements, delay = 100) {
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('animate');
        }, index * delay);
    });
}

plus_standard.addEventListener('click', () => {
    let icon = event.target
    if(standard_detail.style.display === 'none') {
        icon.style.transform = 'rotate(0deg)'

        standard_detail.style.display = 'flex'
        standard_description.style.display = 'none'

        // Reset animations
        standard_detail.querySelectorAll('li').forEach(li => li.classList.remove('animate'));
        // Animate list items
        animateElements(standard_detail.querySelectorAll('li'));

    }else{
        icon.style.transform = 'rotate(45deg)'

        standard_detail.style.display = 'none'
        standard_description.style.display = 'flex'

        // Reset animations
        standard_description.querySelectorAll('p').forEach(p => p.classList.remove('animate'));
        // Animate paragraphs
        animateElements(standard_description.querySelectorAll('p'));
    }
})


plus_extended.addEventListener('click', () => {
    let icon = event.target
    if(extended_detail.style.display === 'none') {
        icon.style.transform = 'rotate(0deg)'

        extended_detail.style.display = 'flex'
        extended_description.style.display = 'none'

        // Reset animations
        extended_detail.querySelectorAll('li').forEach(li => li.classList.remove('animate'));
        // Animate list items
        animateElements(extended_detail.querySelectorAll('li'));

    }else{
        icon.style.transform = 'rotate(45deg)'

        extended_detail.style.display = 'none'
        extended_description.style.display = 'flex'

        // Reset animations
        extended_description.querySelectorAll('p').forEach(p => p.classList.remove('animate'));
        // Animate paragraphs
        animateElements(extended_description.querySelectorAll('p'));
    }
})
animateElements(standard_detail.querySelectorAll('li'));
animateElements(extended_detail.querySelectorAll('li'));

function createExamplesItems() {
    examples.forEach(example => {
        let exampleButton = document.createElement('button')
        exampleButton.id = `${example.title}Button`
        exampleButton.className = 'example_buttons'
        exampleButton.style.width = `${examples_selector.offsetWidth/(examples.length)}px`
        exampleButton.innerText = example.title
        examples_selector.appendChild(exampleButton)
    })
}

createExamplesItems()

function loadFirstExample() {
    example_iframe.src = examples[1].url
    let AquaButton = document.getElementById('AquaButton')
    AquaButton.style.color = 'rgb(255, 255, 255)'
    AquaButton.style.backgroundColor = 'rgba(128, 128, 128, 0.600)'
    let examplesContainer = document.getElementById('examples')
    examplesContainer.style.background = examples[1].bkg_color
    ur.style.background = 'radial-gradient(circle 34px at bottom left ,#0000 98%, rgb(38 171 228) ) top left'
    br.style.background = 'radial-gradient(circle 34px at top left ,#0000 98%, rgb(71 224 200) ) top left'
    ul.style.background = 'radial-gradient(circle 34px at bottom right ,#0000 98% , rgb(17 142 243) ) top left'
    bl.style.background = 'radial-gradient(circle 34px at top right ,#0000 98%, rgb(52 195 217) ) top left'
}
loadFirstExample()

Array.from(examples_selector.children).forEach(button => {
    button.addEventListener('click', (event) => {
        Array.from(examples_selector.children).forEach(option => {
            if(option == event.target) {
                option.style.color = 'rgb(255, 255, 255)'
                option.style.backgroundColor = 'rgba(0, 0, 0, 0.2)'
            }else{
                option.style.color = 'rgb(255, 255, 255)'
                option.style.backgroundColor = 'rgba(128, 128, 128, 0.200)'
            }
    })

    let itemIndex =  Array.from(examples_selector.children).indexOf(event.target)
    let examplesContainer = document.getElementById('examples')

    console.log(examples[itemIndex].url)
    example_iframe.src = examples[itemIndex].url
    examplesContainer.style.background = examples[itemIndex].bkg_color

    if(itemIndex == 0) {
        ur.style.background = 'radial-gradient(circle 34px at bottom left ,#0000 98%, rgb(251 104 255) ) top left'
        br.style.background = 'radial-gradient(circle 34px at top left ,#0000 98%, rgb(244 160 254) ) top left'
        ul.style.background = 'radial-gradient(circle 34px at bottom right ,#0000 98% , rgb(254 68 255) ) top left'
        bl.style.background = 'radial-gradient(circle 34px at top right ,#0000 98%, rgb(249 129 255) ) top left'
    }else if ( itemIndex == 1) {
        ur.style.background = 'radial-gradient(circle 34px at bottom left ,#0000 98%, rgb(38 171 228) ) top left'
        br.style.background = 'radial-gradient(circle 34px at top left ,#0000 98%, rgb(71 224 200) ) top left'
        ul.style.background = 'radial-gradient(circle 34px at bottom right ,#0000 98% , rgb(17 142 243) ) top left'
        bl.style.background = 'radial-gradient(circle 34px at top right ,#0000 98%, rgb(52 195 217) ) top left'
    }else {
        ur.style.background = 'radial-gradient(circle 34px at bottom left ,#0000 98%,rgb(143 101 255) ) top left'
        br.style.background = 'radial-gradient(circle 34px at top left ,#0000 98%, rgb(186, 163, 249) ) top left'
        ul.style.background = 'radial-gradient(circle 34px at bottom right ,#0000 98% ,rgb(114 64 255) ) top left'
        bl.style.background = 'radial-gradient(circle 34px at top right ,#0000 98%, rgb(160 124 255)) top left'
    }
})
})

////////////////////////////////////////////////////////////////////////////////////
// SOLICITAR PROTECCION DE DATOS SENSIBLES A IFRAMES ///////////////////////////////OK
document.addEventListener('DOMContentLoaded', function() {
    checkFirstLogin();
    // console.log('todo cargado');
    example_iframe.addEventListener('load', () => {
        example_iframe.contentWindow.postMessage(
            { action: 'hideSensitiveInfo' },
            '*'
        );
    });
})

////////////////////////////////////////////////////////////////////////////////////
// SECCION COUNTDOWN////////////////////////////////////////////////////////////////OK
function countdown() {
    let count = 3;
    const countdownElement = document.getElementById('number');
    const congrats = document.getElementById('congrats');

    function updateDisplay(text) {
        congrats.style.opacity = '1';
        countdownElement.style.opacity = '1';
        congrats.style.transform = 'scale(0.5)';
        countdownElement.style.transform = 'scale(0.5)';
        
        setTimeout(() => {
            congrats.innerText = text;
            countdownElement.innerText = text;
            congrats.classList.add('animate');
            countdownElement.classList.add('animate');
            countdownElement.style.mixBlendMode = 'color-burn';
        }, 50);

        setTimeout(() => {
            congrats.classList.remove('animate');
            countdownElement.classList.remove('animate');
            congrats.style.transform = 'scale(1.5)'; // Mantener la escala
            countdownElement.style.transform = 'scale(1.5)'; // Mantener la escala
        }, 1000);
    }

    const intervalId = setInterval(() => {
        if (count >= 0) {
            document.getElementById('countdown_bkg').style.backgroundImage = null;
            updateDisplay(count);
            count--;
        } else {
            clearInterval(intervalId);
            updateDisplay("¡Bienvenido!");
            document.getElementById('countdown_bkg').style.backgroundImage = 'url(../assets/img/confetti.gif)';
        }
    }, 1500);
}
countdown();  

setInterval(() => {
    countdown();  
}, 9500);


////////////////////////////////////////////////////////////////////////////////////
// SECCION MAPA/////////////////////////////////////////////////////////////////////OK

async function initMap() {
    if ("geolocation" in navigator) {
        try {
            const position = await new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(resolve, reject);
            });

            const latitud = position.coords.latitude;
            const longitud = position.coords.longitude;

            // Crear el iframe con la ubicación del usuario
            createGoogleMapsIframe(latitud, longitud);
        } catch (error) {
            console.error("Error al obtener la geolocalización:", error);
        }
    } else {
        console.error("La geolocalización no está disponible en este dispositivo.");
    }
}

function createGoogleMapsIframe(lat, lng) {
    const iframe = document.createElement('iframe');
    iframe.style.border = "0";
    iframe.src = `https://www.google.com/maps/embed/v1/view?key=${maps_key}&center=${lat},${lng}&zoom=15`;
    
    // Insertar el iframe en el elemento HTML deseado
    const mapContainer = document.getElementById('map');
    mapContainer.appendChild(iframe);
}

initMap();


