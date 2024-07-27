const menuItems = {
    // Categoría de Bebidas
    bebidas: {
      producto: {
        es: "Bebidas",
        en: "Drinks"
      },
      subcategorias: {
        // Subcategoría de Bebidas con Alcohol
        con_alcohol: {
          es: "Con Alcohol",
          en: "With Alcohol",
          productos: [
            {
              producto: "Cerveza",
              foto: "url_de_la_imagen",
              precio: 5.99,
              descripcion: "Cerveza fría",
              promocion: false,
              STACC: true
            },
            // Otros productos con alcohol...
          ]
        },
        // Subcategoría de Bebidas sin Alcohol
        sin_alcohol: {
          es: "Sin Alcohol",
          en: "Non-Alcoholic",
          productos: [
            {
              producto: "Agua Mineral",
              foto: "url_de_la_imagen",
              precio: 2.50,
              descripcion: "Agua mineral sin gas",
              promocion: true,
              STACC: false
            },
            // Otros productos sin alcohol...
          ]
        }
      }
    },
    // Categoría de Entradas
    entradas: {
      producto: {
        es: "Entradas",
        en: "Starters"
      },
      productos: [
        {
          producto: "Empanadas",
          foto: "url_de_la_imagen",
          precio: 8.50,
          descripcion: "Selección de empanadas",
          promocion: false,
          STACC: true
        },
        // Otros productos de entradas...
      ]
    },
    // Categoría de Picadas
    picadas: {
      producto: {
        es: "Picadas",
        en: "Appetizers"
      },
      productos: [
        // Productos de picadas...
      ]
    },
    // Categoría de Papas
    papas: {
      producto: {
        es: "Papas",
        en: "Fries"
      },
      productos: [
        // Productos de papas...
      ]
    },
    // Categoría de Hamburguesas
    hamburguesas: {
      producto: {
        es: "Hamburguesas",
        en: "Burgers"
      },
      productos: [
        // Productos de hamburguesas...
      ]
    },
    // Categoría de Pizzas
    pizzas: {
      producto: {
        es: "Pizzas",
        en: "Pizzas"
      },
      subcategorias: {
        // Subcategoría de Pizzas Chicas
        chica: {
          es: "Chica",
          en: "Small",
          productos: [
            // Productos de pizzas chicas...
          ]
        },
        // Subcategoría de Pizzas Medianas
        mediana: {
          es: "Mediana",
          en: "Medium",
          productos: [
            // Productos de pizzas medianas...
          ]
        },
        // Subcategoría de Pizzas Grandes
        grande: {
          es: "Grande",
          en: "Large",
          productos: [
            // Productos de pizzas grandes...
          ]
        }
      }
    },
    // Categoría de Sandwiches
    sandwiches: {
      producto: {
        es: "Sandwiches",
        en: "Sandwiches"
      },
      subcategorias: {
        // Subcategoría de Sandwiches Fríos
        frios: {
          es: "Fríos",
          en: "Cold",
          productos: [
            // Productos de sandwiches fríos...
          ]
        },
        // Subcategoría de Sandwiches Calientes
        calientes: {
          es: "Calientes",
          en: "Hot",
          productos: [
            // Productos de sandwiches calientes...
          ]
        }
      }
    },
    // Categoría de Pastas
    pastas: {
      producto: {
        es: "Pastas",
        en: "Pastas"
      },
      productos: [
        // Productos de pastas...
      ]
    },
    // Categoría de Menús Infantiles
    menus_infantiles: {
      producto: {
        es: "Menús Infantiles",
        en: "Kids Menus"
      },
      productos: [
        // Productos de menús infantiles...
      ]
    },
    // Categoría de Recomendaciones
    recomendaciones: {
      producto: {
        es: "Recomendaciones",
        en: "Recommendations"
      },
      productos: [
        // Productos de recomendaciones...
      ]
    },
    // Categoría de Postres
    postres: {
      producto: {
        es: "Postres",
        en: "Desserts"
      },
      productos: [
        // Productos de postres...
      ]
    },
    // Categoría de Promociones
    promociones: {
      producto: {
        es: "Promociones",
        en: "Promotions"
      },
      productos: [
        // Productos de promociones...
      ]
    }
  };
  