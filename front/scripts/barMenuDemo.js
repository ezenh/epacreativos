import { menuCategories } from "../scripts/barMenuDemoArrays.js";

export function findProduct(productName) {
    function searchCategories(categories) {
        for (let category of categories) {
            for (let key in category) {
                let items = category[key];
                for (let item of items) {
                    if (Array.isArray(item)) {
                        let result = searchCategories([item]);
                        if (result) {
                            return result;
                        }
                    } else {
                        if (item.producto === productName) {
                            return item;
                        }
                    }
                }
            }
        }
        return null;
    }

    return searchCategories(menuCategories);
}

// Ejemplo de uso:
let producto = findProduct("Gaseosa Cola");
console.log(producto);