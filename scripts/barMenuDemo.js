import { menuCategories } from "./barMenuDemoArrays.js";

export function findProduct(array, search, results) {
    for (let product of array) {
        let productName = product.product.toLowerCase();

        if (search === productName) {
            results.found = true;
            console.log(`Se ha encontrado el producto "${product.product}" como resultado de la búsqueda`);
        }
    }
}

export function findInMenu(input) {
    let results = { found: false };
    let search = input.toLowerCase();

    // 1. PRIMERO BUSCA COINCIDENCIA POR CATEGORIA
    for (let category of menuCategories) {
        let categoryName = String(Object.keys(category)[0]).toLowerCase();
        if (search === categoryName) {
            results.found = true;
            console.log(`Se ha encontrado la categoría "${categoryName}" como resultado de la búsqueda`);
            break;
        } else {
            if (!Object.values(category)[0][0].product) {
                let subCategories = Object.values(category)[0];

                for (let subCategory of subCategories) {
                    let subCategoryName = String(Object.keys(subCategory)[0]).toLowerCase();

                    if (search === subCategoryName) {
                        results.found = true;
                        console.log(`Se ha encontrado la sub-categoría "${subCategoryName}" como resultado de la búsqueda`);
                        break;
                    } else {
                        for (let productsArray of Object.values(subCategory)) {
                            findProduct(productsArray, search, results);
                        }
                    }
                }
            } else {
                let productsArray = Object.values(category)[0];
                findProduct(productsArray, search, results);
            }
        }

        if (results.found) break;
    }

    if (!results.found) {
        console.log("nada encontrado");
    }
}

// Ejemplo de uso:
let producto = "bruschetta";
findInMenu(producto);