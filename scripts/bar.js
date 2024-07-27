import { menuCategories } from "./barMenuDemoArrays.js"
import {createSliderItems, checkSliderItemPos, animateSliderItems } from "./scrollFunctions.js"
import { findProduct } from "./barMenuDemo.js"

locallink.style.fontWeight = '600'
locallink.style.color = 'rgb(255, 255, 1255, .8)'

let selectedProducts = []
// console.log(selectedProducts.length)
document.getElementById('items_counter').innerText = selectedProducts.length


function changeMockup() {
    let i = 0
    setInterval(()=>{
        if(i < 3) {
            i += 1
        }else{
            i = 1
        }
        introduction_mockup.src = `./assets/img/bmup${i}.png`
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
                <img class="product_mini_photo" src="../assets/demo/img/${category}.png" alt="">
                <div class="product_mini_middle">
                    <p class="product_mini_name">${product.product}</p>
                    <p class="product_mini_description">${product.short_description}</p>
                    <div class="product_mini_rate_container">
                        <p class="product_mini_rate">3.5</p>
                        <img src="./assets/ico/star.png" alt="">
                    </div>
                </div>
                <div class="product_mini_right">
                    <button class="zoom_in_button">ver más</button>
                    <p class="product_price">$${product.price.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</p>
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
            <article id='${product.product}' class="product_zoom">
                <button>Ver menos</button>
                <div class="product_zoom_top">
                    <div class="product_zoom_top_left"></div>
                    <div class="product_zoom_top_right">
                        <div class="product_zoom_top_right_top">
                            <div class="zoom_top_left">
                                <p>3.5 <b>★</b></p>
                                <p>$${product.price}</p>
                            </div>
                        </div>
                        <div class="product_zoom_top_right_center">
                            <img src="../assets/demo/ico/stacc.png" alt="">
                            <img src="../assets/demo/ico/veggie.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="product_zoom_bottom">
                    <p class="product_zoom_name">${product.product}</p>
                    <p class="product_zoom_description">${product.long_description}</p>
                </div>
                <button> + Agregar al carrito</button>
            </article>
            `
    })
}

// CATEGORIES CREATOR //////////////////////////////////////////////////////////////
menuCategories.forEach(category => {
    let category_name = Object.keys(category)[0]; // Obtener el nombre de la categoría
    let category_selector = 
    `<button id='${category_name}' class='category_selector'>
        <div></div>
        ${category_name.charAt(0).toUpperCase() + category_name.slice(1)}
    </button>`

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
                if(Object.keys(Object.values(category)[0][0])[0] == 'product') {

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
                        <button id='${subCategoryName}' class='subCategory_selector'>
                            ${subCategoryName.charAt(0).toUpperCase() + subCategoryName.slice(1)}
                        </button>
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
    console.log(centeredProduct)
    console.log(selectedProducts.length)
    document.getElementById('items_counter').innerText = selectedProducts.length
})

items_counter.addEventListener('click', () => {
    if(products_shop_container.style.display === 'flex' ) {
        products_shop_container.style.display = 'none'
    }else{
        products_shop_container.style.display = 'flex'
    }

    console.log(selectedProducts)
    selectedProducts.forEach(product => {
        products_shop_container.innerHTML = ''

        products_shop_container += 
        `
        <!-- <article class="product_shop">
            <img class="product_shop_photo" src="./assets/demo/img/hamburguesas.png" alt="">            
            <div class="product_shop_middle">
                <p class="product_shop_name">${product.product}</p>
                <p class="product_shop_description">${product.short_description}</p>
                <div class="product_shop_rate_container">
                    <p class="product_shop_rate">3.5 <b>★</b></p>
                    <p class="product_price">$1099</p>
                </div>
            </div>
            <div class="product_shop_right">
                <button class="zoom_in_button">ver más</button>
                <button class="delete_article">eliminar</button>
            </div>
        </article>`

    })
})


menuCategories.forEach(category => {
    let categoryName = String(Object.keys(category))

    Object.values(category)[0].forEach(result => {
        if(result.product) {
            let producto = result
        }else{
            let subCategory = result
            let subCategoryName = String(Object.keys(subCategory))
            // console.log(subCategoryName)
            Object.values(subCategory)[0].forEach(product => {
                let subCategoryProduct = product
                // console.log(subCategoryProduct)
            })
        }
    })
})







// search.addEventListener('input', findProduct(search.value) {

// })