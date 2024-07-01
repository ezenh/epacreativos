import { models, events, examples } from "../scripts/invitationsArrays.js"

// CREAR ELEMENTOS DENTRO DE UN CONTENEDOR CON SCROLL
export function createSliderItems(container, source, dotsContainer) {
    switch (container.id) {
        case 'models_cards_container':
            source.forEach(model => {
                container.innerHTML += 
                `<article id= '${model.title}' class ='cards' style= 'background-image: url("../front/assets/vid/${model.background}")'>
                    <div class= 'model_arrow_container'>
                        <img class= 'model_arrow' src= '../front/assets/ico/up.png'>
                    </div>

                    <div class= 'model_slider'>
                            <h3 class= 'model_slider_text'>FRASE PRINCIPAL</h3>
                            <p class= 'model_slider_text'>Texto Introductorio</p>
                    </div>
                    <img class= 'model_logo' src='../front/assets/logos/${model.logo}'>                    
                </article>
                `

                document.getElementById('model_selection').innerHTML += `<option>${model.title}</option>`
            })
            break;

        case 'events_cards_container':
            source.forEach(event => {
                container.innerHTML += 
                `<div class= 'event' id='${event}'>
                </div>`
                event_selection.innerHTML += `<option>${event}</option>`
            })
            break;

// DEMO BAR://///////////////////////////////
        case 'categories_container':
            source.forEach(category => {
                let categoryName = String(Object.keys(category))

                container.innerHTML +=
                `<article id='${categoryName}' class='category_selector'>
                    <div></div>
                    <p>${categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}</p>
                </article>
                `
            })
        break
        case 'products_mini_container':
            source.forEach(product => {
                document.getElementById('products_mini_container').innerHTML += 
                `
                    <article class="product_mini">
                        <img class="product_mini_photo" src="../front/assets/demo/img/${category}.png" alt="">
                        <div class="product_mini_middle">
                            <p class="product_mini_name">${product.producto}</p>
                            <p class="product_mini_description">${product.short_description}</p>
                            <div class="product_mini_rate_container">
                                <p class="product_mini_rate">3.5</p>
                                <img src="./front/assets/ico/star.png" alt="">
                            </div>
                        </div>
                        <div class="product_mini_right">
                            <button class="zoom_in_button">ver más</button>
                            <p class="product_price">$${product.precio.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</p>
                        </div>
                    </article>
                `   
            })
            break;
        case 'products_zoom':
            source.forEach(product => {
            document.getElementById('products_zoom').innerHTML += 
            `
            <article id='${product.producto}' class="product_zoom">
                <div class="product_zoom_top">
                    <div class="product_zoom_top_left"></div>
                    <div class="product_zoom_top_right">
                        <div class="product_zoom_top_right_top">
                            <div class="zoom_top_left">
                                <p>3.5 <b>★</b></p>
                                <p>$${product.precio}</p>
                            </div>
                        </div>
                        <div class="product_zoom_top_right_center">
                            <img src="./front/assets/demo/ico/stacc.png" alt="">
                            <img src="./front/assets/demo/ico/veggie.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="product_zoom_bottom">
                    <p class="product_zoom_name">${product.producto}</p>
                    <p class="product_zoom_description">${product.long_description}</p>
                </div>
            </article>
            `
        })
        break;
    }

    if(dotsContainer) {
        Array.from(container.children).forEach(item => {
            dotsContainer.innerHTML += `<div class='dots'></div>`
        })
    }
}

// IDENTIFICAR AL ELEMEMNTO CENTRADO DENTRO DEL CONTENEDOR CON SCROLL
export function checkSliderItemPos(container, dotsContainer) {
    let containerArray = Array.from(container.children)
    let centeredItem
    let centeredItemIndex

    containerArray.forEach(item => {
        if(item.getBoundingClientRect().left >= 0 && item.getBoundingClientRect().right <= container.offsetWidth) {
            centeredItem = item
            centeredItemIndex = containerArray.indexOf(item)
    }})

    if(dotsContainer) {
        let dotsArray = Array.from(dotsContainer.children)

        dotsArray.forEach(dot => {
            if (dotsArray.indexOf(dot) == centeredItemIndex) {
                dot.style.transform = 'scale(1.2)'
                dot.style.opacity = '1'
            }else {
                dot.style.transform = 'scale(1)'
                dot.style.opacity = '.5'
            }
        }) 
    }
    animateSliderItems(container, centeredItemIndex)
    // console.log(centeredItemIndex)
    return centeredItemIndex
    }


// APLICAR ANIMACIONES A LOS ELEMENTOS DENTRO DEL CONTENEDOR CON SCROLL
export function animateSliderItems(container, centeredItemIndex) {
    let containerArray = Array.from(container.children)
    containerArray.forEach(item => {
        let card = item
        if(containerArray.indexOf(item) == centeredItemIndex) {
            card.style.opacity = '1'
            card.style.zIndex = '10'
            card.style.filter = 'blur(0)'
            switch (container.id) {
                case 'models_cards_container':
                    card.style.boxShadow = '0px 0px 50px 50px rgba(0, 0, 0, 0.673)'
                    let card_slider = card.children[1]
                    let card_sliderTextPrincipal = card_slider.children[0]
                    let card_sliderTextIntro = card_slider.children[1]

                    card.style.transform = 'scale(1)'
                    card_slider.style.height = `${card.offsetHeight * .7}px`
                    card_sliderTextPrincipal.style.transform = 'scale(1)'
                    card_sliderTextPrincipal.style.opacity = '1'
                    card_sliderTextIntro.style.transform = 'scale(1)'
                    card_sliderTextIntro.style.opacity = '1'
                    if(card.id == 'Aqua') {
                        card.children[2].style.opacity = '0'
                        }
                    if(centeredItemIndex > 0) {
                        nameLeft.innerText = models[centeredItemIndex - 1].title
                    }else{
                        nameLeft.innerText = ''
                        }

                    document.getElementById('nameCenter').innerText = models[centeredItemIndex].title

                    if(centeredItemIndex < models.length-1) {
                        nameRight.innerText = models[centeredItemIndex + 1].title
                    }else{
                        nameRight.innerText = ''
                        }
                        
                    break
                case 'events_cards_container':
                    card.style.boxShadow = '0px 0px 50px 50px rgba(0, 0, 0, 0.673)'
                    card.style.transform = 'scale(1)'
                    break
                case 'examples_cards_container':
                    card.style.transform = 'scale(.52)'
                    break
                case 'extras_cards_container':
                    card.style.transform = 'scale(1.1)'
                    card.style.filter = 'grayscale(0)'
                    card.style.opacity = 1
                    break
                case 'products_zoom':
                    card.style.transform = 'scale(1)'
                    card.style.opacity = 1
                    break
                }
        }
        else if(containerArray.indexOf(item) != centeredItemIndex){
            
            switch (container.id) {
                case 'models_cards_container':
                    card.style.opacity = '.6'
                    card.style.zIndex = '1'
                    card.style.filter = 'blur(3px)'
                    card.style.boxShadow = '0px 0px 0px 0px rgba(0, 0, 0, 0)'
                    let card_slider = card.children[1]
                    let card_sliderTextPrincipal = card_slider.children[0]
                    let card_sliderTextIntro = card_slider.children[1]
                    
                    card.style.transform = 'scale(.9)'
                    if(card.id == 'Aqua') {
                        card_slider.style.height = `${card.offsetHeight * 0.25}px`
                        card.children[2].style.opacity = '1'

                    }else{
                        card_slider.style.height = `${card.offsetHeight * 0}px`
                    }
                    card_sliderTextPrincipal.style.transform = 'scale(0)'
                    card_sliderTextPrincipal.style.opacity = '0'
                    card_sliderTextIntro.style.transform = 'scale(0)'
                    card_sliderTextIntro.style.opacity = '0'
                        
                    break
                case 'events_cards_container':
                    card.style.opacity = '.6'
                    card.style.zIndex = '1'
                    card.style.filter = 'blur(3px)'
                    card.style.boxShadow = '0px 0px 0px 0px rgba(0, 0, 0, 0)'
                    card.style.transform = 'scale(.9)'
                    break
                case 'extras_cards_container':
                    card.style.transform = 'scale(1)'
                    card.style.filter = 'grayscale(1)'
                    card.style.opacity = .3
                    break
                case 'products_zoom':
                    card.style.transform = 'scale(.8)'
                    card.style.opacity = .3
                    break
                }
            }
    }
)}