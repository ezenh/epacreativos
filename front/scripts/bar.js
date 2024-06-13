import { menuCategories } from "./barMenuDemoArrays.js"
import {createSliderItems, checkSliderItemPos, animateSliderItems } from "./scrollFunctions.js"
import { findProduct } from "./barMenuDemo.js"


let selectedProducts = []
console.log(selectedProducts.length)
document.getElementById('items_counter').innerText = selectedProducts.length


function changeMockup() {
    let i = 0
    setInterval(()=>{
        if(i < 3) {
            i += 1
        }else{
            i = 1
        }
        introduction_mockup.src = `../front/assets/img/bmup${i}.png`
        }, 2000)
}
changeMockup()


function loadCategoryProducts (category, categoryProducts) {
    document.getElementById('products_mini_container').innerHTML = '' 
    document.getElementById('products_zoom').innerHTML = ''

    categoryProducts.forEach(product => {
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
        Array.from(document.getElementsByClassName('zoom_in_button')).forEach(button => {
            button.addEventListener('click', () => {
                products_zoom_container.style.display = 'flex'

                setTimeout(() => {
                    products_zoom_container.style.opacity = '1'

                }, 300);
            })
    
        })
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
}

// CATEGORIES CREATOR //////////////////////////////////////////////////////////////
menuCategories.forEach(category => {
    let category_name = Object.keys(category)[0]; // Obtener el nombre de la categoría
    let category_selector = 
    `<article id='${category_name}' class='category_selector'>
        <div></div>
        <p>${category_name.charAt(0).toUpperCase() + category_name.slice(1)}</p>
    </article>`

    document.getElementById('categories_container').innerHTML += category_selector    
});

// LOAD PRODUCTOS FROM SELECTED CATEGORY //////////////////////////////////////////////////////////////
// 1. Aplica el evento a todos los botones que representan cada categoria
Array.from(document.getElementsByClassName('category_selector')).forEach(button => {
    button.addEventListener('click', ()=> {

// 2. Al hacer click, llama a las funciones:
    // 2A. Borra el el contendor de sub categorias
        document.getElementById('sub_categories_container').innerHTML = ''
    // 2B. Anima el boton seleccionado:
        cat_subcat_animation (button, Array.from(document.getElementsByClassName('category_selector')))
    // 2C. Busca todos los productos en cada categoria:
        menuCategories.forEach(category => {
            if(Object.keys(category)[0] === button.id) {
                if(Object.keys(Object.values(category)[0][0])[0] == 'producto') {

    // 2D. Si no hay subcategorias, devuelve los productos:
                    let categoryProducts = Array.from(Object.values(category)[0])
                    createSliderItems(String(Object.keys(category)), categoryProducts)

                    sub_categories_container.style.height = '0px'
                    sub_categories_container.style.padding = '0px'
                    products_container.style.mask = 'linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 5%)'
                    products_container.style.paddingTop = '20px'

                    
    // 2E. Si hay subcategorias, primero devuelve las subcategorias:      
                }else{
                    let subCategories = Object.values(category)[0]

                    sub_categories_container.style.height = '90px'
                    sub_categories_container.style.paddingLeft = '20px'
                    products_container.style.mask = 'linear-gradient(rgba(0, 0, 0, 0) 8%, rgb(0, 0, 0) 10%)'
                    products_container.style.paddingTop = '60px'

                    subCategories.forEach(subCategory => {
                        let subCategoryName = String(Object.keys(subCategory))
                        document.getElementById('sub_categories_container').innerHTML += 
                        `
                        <article id='${subCategoryName}' class='subCategory_selector'>
                            <p>${subCategoryName.charAt(0).toUpperCase() + subCategoryName.slice(1)}</p>
                        </article>
                        `
                    })
                    loadCategoryProducts(String(Object.keys(category)), Object.values(Object.values(category)[0][0])[0])
                    cat_subcat_animation (Array.from(document.getElementsByClassName('subCategory_selector'))[0], Array.from(document.getElementsByClassName('subCategory_selector')))

                    Array.from(document.getElementsByClassName('subCategory_selector')).forEach( button => {
                        button.addEventListener('click', () => {
                            let indexOfSelectedSubcategory = Array.from(sub_categories_container.children).indexOf(button)
                            let subCategoryProducts = Object.values(subCategories[indexOfSelectedSubcategory])[0]
                            loadCategoryProducts(String(Object.keys(category)), subCategoryProducts)
                            cat_subcat_animation (button, Array.from(document.getElementsByClassName('subCategory_selector')))

                        })
                    })
                }
            }
        })
        })
})

////////////////////////////////////////////////////////////////////////////////////OK
// CATEGORY & SUB-CATEGORY SELECTOR ANIMATION //////////////////////////////////////////////////////////////
function cat_subcat_animation (selectedButton, arrayButtons) {
    arrayButtons.forEach(button => {
        if(selectedButton == button) {
            button.style.transform = 'scale(1.1)'
            button.style.backgroundColor = 'var(--bone)'
            button.style.color = 'white'
            if(button.children[1]) {
                button.children[1].style.fontWeight = '500'
            }
        }else{
            button.style.transform = 'scale(1)'
            button.style.backgroundColor = 'var(--font-grey)'
            button.style.color = 'black'
            if(button.children[1]) {
                button.children[1].style.fontWeight = '400'
            }
            }
    });
}

////////////////////////////////////////////////////////////////////////////////////OK
// DEACTIVATE ZOOM ////////////////////////////////////////////////////////
zoom_out_button.addEventListener('click', () => {
    products_zoom_container.style.opacity = '0'
    setTimeout(() => {
        products_zoom_container.style.display = 'none'
    }, 500);
})
////////////////////////////////////////////////////////////////////////////////////OK
// SCROLL LISTENER /////////////////////////////////////////////////////////////////
let scrollingTimeout;
checkSliderItemPos(extras_cards_container, extras_dots_container)
animateSliderItems(extras_cards_container, 0)

extras_cards_container.addEventListener('scroll', () => {
    let scrolling = true
    clearTimeout(scrollingTimeout);
    checkSliderItemPos(extras_cards_container, extras_dots_container)
    checkSliderItemPos(products_zoom, products_zoom_dots)

    scrollingTimeout = null;
    
    scrollingTimeout = setTimeout(function() {
    }, 350);
})

products_zoom.addEventListener('scroll', () => {
    let scrolling = true
    clearTimeout(scrollingTimeout);
    checkSliderItemPos(products_zoom, products_zoom_dots)

    scrollingTimeout = null;
    
    scrollingTimeout = setTimeout(function() {
    }, 350);
})

////////////////////////////////////////////////////////////////////////////////////OK
// AGREGAR PRODUCTOS AL CARRITO //////////////////////////////////////////////////////
add_to_cart.addEventListener('click', () => {
    let productsList = Array.from(products_zoom.children)
    let centeredProduct = productsList[checkSliderItemPos(products_zoom, products_zoom_dots)]

    let productoSeleccionado = findProduct(centeredProduct.id)
    selectedProducts.push(productoSeleccionado)
    console.log(selectedProducts.length)
document.getElementById('items_counter').innerText = selectedProducts.length

})

items_counter.addEventListener('click', () => {
    
})








menuCategories.forEach(category => {
    let categoryName = String(Object.keys(category))

    Object.values(category)[0].forEach(result => {
        if(result.producto) {
            let producto = result
        }else{
            let subCategory = result
            let subCategoryName = String(Object.keys(subCategory))
            console.log(subCategoryName)
            Object.values(subCategory)[0].forEach(product => {
                let subCategoryProduct = product
                console.log(subCategoryProduct)
            })
        }
    })
})






















////////////////////////////////////////////////////////////////////////////////////CHECK
// FORMULARIO //////////////////////////////////////////////////////////////////////
let idSufix

function checkForm (container){
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

    try {
// ENVIO LA SOLICITUD USANDO AXIOS
            // SI TIENE EXITO...
        const response = await axios.post('http://localhost:3000/bar/', datosJSON, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log('Solicitud exitosa:', response.data);
        alert('Se han enviado los datos para el desarrollo de su invitación. Muchas gracias!')

        // SI HAY UN ERROR...
    } catch (error) {
            console.error('Error en la solicitud:', error);
        }
    });
