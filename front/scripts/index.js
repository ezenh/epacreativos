import { models, events, examples } from "../scripts/invitationsArrays.js"
import { createSliderItems, checkSliderItemPos, animateSliderItems } from "./scrollFunctions.js"
import { checkFirstLogin } from "./firstlogin.js"

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

// let serverURL;
console.log(window.location.hostname)

//CHECKEA LA URL DEL PROYECTO => localhost o web
// if (window.location.hostname === 'localhost') {
//     serverURL = 'http://localhost:3000/invitations/';
// } else {
//     serverURL = 'https://epacreativos.vercel.app/invitations/';
//     serverURL = 'http://localhost:3000/invitations/'
// }

const serverURL = window.location.hostname === '127.0.0.1'
    ? 'http://localhost:3000/invitations/'
    : 'https://epacreativos.vercel.app/invitations/';

console.log(serverURL)

document.getElementById('models_animation_button').addEventListener('click', (event) => {
    let centeredItemIndex = checkSliderItemPos(models_cards_container, models_dots)
    // console.log(centeredItemIndex)
    let card = models_cards_container.children[centeredItemIndex]
    let card_slider = card.children[1]
    let card_sliderTextPrincipal = card_slider.children[0]
    let card_sliderTextIntro = card_slider.children[1]

    if (card_slider.style.transform == 'scaleY(0)' || card_slider.style.transform == 'scaleY(0.95)') {
        card_slider.style.height = `${card.offsetHeight * .7}px`
        card_slider.style.transform = 'scaleY(1)'
        card_sliderTextPrincipal.style.transform = 'scale(1)'
        card_sliderTextPrincipal.style.opacity = '1'
        card_sliderTextIntro.style.transform = 'scale(1)'
        card_sliderTextIntro.style.opacity = '1'
        if(card.id == 'Aqua') {
            card.children[2].style.opacity = '0'
        }
    }else{
        if(card.id == 'Aqua') {
            card_slider.style.transform = 'scaleY(0.95)'
            card_slider.style.height = `${card.offsetHeight * 0.25}px`
            card.children[2].style.opacity = '1'
        }else{
            card_slider.style.transform = 'scaleY(0)'
            card_slider.style.height = `${card.offsetHeight * 0}px`
        }
        card_sliderTextPrincipal.style.transform = 'scale(0)'
        card_sliderTextPrincipal.style.opacity = '0'
        card_sliderTextIntro.style.transform = 'scale(0)'
        card_sliderTextIntro.style.opacity = '0'
    }
})

createSliderItems(models_cards_container, models, models_dots)
createSliderItems(events_cards_container, events)

function changeMockup() {
    let i = 0
    setInterval(()=>{
        if(i < 5) {
            i += 1
        }else{
            i = 1
        }
        introduction_mockup.src = `../front/assets/img/mup${i}.png`
        }, 2000)
}
changeMockup()

////////////////////////////////////////////////////////////////////////////////////OK
// SCROLL LISTENER /////////////////////////////////////////////////////////////////
let scrollingTimeout;

models_cards_container.addEventListener('scroll', () => {
    let scrolling = true
    clearTimeout(scrollingTimeout);
    checkSliderItemPos(models_cards_container, models_dots)

    scrollingTimeout = null;
    
    scrollingTimeout = setTimeout(function() {
    }, 350);
})

events_cards_container.addEventListener('scroll', () => {
    let scrolling = true
    clearTimeout(scrollingTimeout);
    checkSliderItemPos(events_cards_container)

    scrollingTimeout = null;

    scrollingTimeout = setTimeout(function() {
    }, 350);
})
// EXAMPLES ///////////////////////////////////////////////////////////////////////
// EXAMPLE BUTTONS LISTENER ////////////////////////////////////////////////////////
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
    AquaButton.style.backgroundColor = 'rgba(128, 128, 128, 0.52)'
}
loadFirstExample()

Array.from(examples_selector.children).forEach(button => {
    button.addEventListener('click', (event) => {
        Array.from(examples_selector.children).forEach(option => {
            if(option == event.target) {
                option.style.color = 'rgb(255, 255, 255)'
                option.style.backgroundColor = 'rgba(128, 128, 128, 0.52)'
            }else{
                option.style.color = 'rgba(128, 128, 128, 0.612)'
                option.style.backgroundColor = 'rgba(128, 128, 128, 0.138)'
            }

        let itemIndex =  Array.from(examples_selector.children).indexOf(event.target)
        console.log(examples[itemIndex].url)
        example_iframe.src = examples[itemIndex].url
    })
})
})

////////////////////////////////////////////////////////////////////////////////////CHECK
// FORMULARIO //////////////////////////////////////////////////////////////////////
let idSufix

function checkForm (container){
// 1. Deshabilita fechas anteriores al dia actual:
    const now = new Date()
    const startDate = new Date(date_start.value)
    const endDate = new Date(date_end.value)

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Mes empieza en 0
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    const currentDateTime = `${year}-${month}-${day}T${hours}:${minutes}`;
    date_start.setAttribute('min', currentDateTime);
    date_end.setAttribute('min', currentDateTime);
    
// 2. Setea los requisitos para completar adecuadamente el campo de telefono
    let pais = country.options[country.selectedIndex].id
    const phonePatterns = {
        AR: /^\d{10}$/,
        BO: /^\d{7,8}$/,
        BR: /^\d{10,11}$/,
        CH: /^\d{8}$/,
        ES: /^\d{9}$/,
        MX: /^\d{10}$/,
        PY: /^\d{7,8}$/,
        PE: /^\d{9}$/,
        UY: /^\d{8}$/,
        US: /^\d{10}$/
    };

// 3. Verifica que todos los campos esten completos y cumplas los requisitos preestablecidos
    // let check = 0
    error_message.innerText = ''
    Array.from(container).forEach(input => {
        // Si todos los campos estan completados
        if (input.value == '' && input.id != 'submit'){
            return error_message.innerText = 'Completar todos los datos del formulario'
        }
        // Si puso las mismas fecha de inicio y de cierre
        else if (date_start.value == date_end.value && date_start.value != ''){
            return error_message.innerText = 'Estas indicando misma fecha de inicio y finalización.'
            }
        // Si puso una fecha de cierre menor que la de inicio
        else if(endDate - startDate < 0) {
            console.log(endDate - startDate)

            return error_message.innerText = 'Indicaste una fecha de inicio posterior a la de finalización.'
            }
        // Si entre inicio y cierre hay por lo menos 1 hora de diferencia
        else if((endDate - startDate)/ (1000 * 60 * 60) < 1) {
            return error_message.innerText = 'El evento debe tener al menos 1 hora de duracóion.'
            }
        // Si el telefono cumple los criterios
        else if (phone.value != '' && !phonePatterns[pais].test(phone.value)) {
            return error_message.innerText = 'Debes completar correctamente el campo de tu teléfono'
            }
        else if (phone.value == '3816376266') {
            return error_message.innerText = 'Lindo intento, pero el número de Epa no es válido. 🤭'
            }

    })

    if(error_message.innerText == '') {
        return submit.disabled = false, submit.style.backgroundColor = 'rgb(0, 115, 230)', submit.style.color = 'white', idSufix = date_start.value.slice(0, 10), error_message.innerText = '', error_message.style.backgroundColor = 'rgba(0,0,0,0)'
    }else{
        return submit.disabled = true, submit.style.backgroundColor = 'rgba(0, 115, 230, .3)', submit.style.color = 'rgba(255,255,255, .3'

    }
}
checkForm(form.children)

// Asignar funcion checkForm como evento para cada input
Array.from(form.children).forEach(input => input.addEventListener('input', () => {
    checkForm(form.children)
}))

// Enviar datos
form.addEventListener('submit', async function(event){
    event.preventDefault()

    let datos = {
        "_id": country.value + phone.value + '-' + date_start.value.slice(0, 10),
        "event_type": event_selection.value,
        "theme": model_selection.value,
        "name": client_name.value,
        "lastname": lastname.value,
        "phone": country.value + phone.value,
        "date_start": date_start.value,
        "date_end": date_end.value
        }
// CONVIERTO LOS DATOS A JSON
    let datosJSON = JSON.stringify(datos);

// DETERMINAR LA URL DEL SERVIDOR

    try {
// ENVIO LA SOLICITUD USANDO AXIOS
        // SI TIENE EXITO...
        const response = await axios.post(serverURL, datosJSON, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log('Solicitud exitosa:', response.data);
        alert('Se han enviado los datos para el desarrollo de su invitación. Muchas gracias!')

        // SI HAY UN ERROR...
    } catch (error) {
            console.error('Error en la solicitud:', error);
            alert(error + 'Ha ocurrido un error y la solicitud no se ha podido enviar correctamente. Por favor comunicarse por whatsapp y solicitar el servicio por chat.')

        }
    });

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
});
