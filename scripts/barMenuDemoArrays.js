export let menuCategories = [
    {
        bebidas: [
            {
                "sin alcohol": [
                    { product: "Gaseosa Cola", size: "500 ml", price: 1200, short_description: "Refrescante gaseosa de cola.", long_description: "Una clásica y refrescante gaseosa de cola, perfecta para cualquier ocasión.", photo: "https://i.imgur.com/o3a3Q1L.jpg", discount: false, STACC: true, rate: 4.2 },
                    { product: "Gaseosa Naranja", size: "500 ml", price: 1200, short_description: "Deliciosa gaseosa de naranja.", long_description: "Una gaseosa de naranja burbujeante y llena de sabor, ideal para refrescarte.", photo: "https://i.imgur.com/Kc6K9OD.jpg", discount: false, STACC: true, rate: 3.8 },
                    { product: "Gaseosa Lima", size: "500 ml", price: 1200, short_description: "Refrescante gaseosa de lima.", long_description: "Disfruta de la frescura cítrica de nuestra gaseosa de lima, perfecta para calmar la sed.", photo: "https://i.imgur.com/KR1q3VG.jpg", discount: false, STACC: true, rate: 4.1 },
                    { product: "Jugo Natural Exprimido Chico", size: "400 ml", price: 1500, short_description: "Jugo natural exprimido de naranja o limonada.", long_description: "Un jugo natural exprimido con amor, lleno de los vibrantes sabores de naranja fresca o una limonada refrescante.", photo: "https://i.imgur.com/O0d6yLy.jpg", discount: false, STACC: true, rate: 4.5 },
                    { product: "Jugo Natural Exprimido en Jarra", size: "500 ml", price: 3000, short_description: "Jugo natural exprimido de naranja o limonada.", long_description: "Una jarra llena de jugo natural, perfecta para compartir y disfrutar de los sabores frescos de naranja o limonada.", photo: "https://i.imgur.com/3yNeyc2.jpg", discount: false, STACC: true, rate: 4.7 },
                    { product: "Agua Mineral", size: "500 ml", price: 1000, short_description: "Agua mineral pura.", long_description: "Agua mineral pura y refrescante, ideal para mantenerte hidratado en cualquier momento.", photo: "https://i.imgur.com/WbF1rfX.jpg", discount: false, STACC: true, rate: 4.0 }
                ]
            },
            {
                "con alcohol": [
                    { product: "Cerveza Rubia", size: "500 ml", price: 2000, short_description: "Cerveza rubia refrescante.", long_description: "Una cerveza rubia dorada y refrescante, perfecta para acompañar tus mejores momentos.", photo: "https://i.imgur.com/Jed5kz5.jpg", discount: false, STACC: true, rate: 4.3 },
                    { product: "Cerveza Negra", size: "500 ml", price: 2000, short_description: "Cerveza negra robusta.", long_description: "Una cerveza negra con cuerpo y sabor intenso, ideal para los amantes de las cervezas fuertes.", photo: "https://i.imgur.com/zE4QoFG.jpg", discount: false, STACC: true, rate: 4.1 },
                    { product: "Vino Tinto", size: "750 ml", price: 3500, short_description: "Vino tinto elegante.", long_description: "Un vino tinto elegante y sofisticado, perfecto para acompañar tus comidas más especiales.", photo: "https://i.imgur.com/NzvXxJ7.jpg", discount: false, STACC: true, rate: 4.6 },
                    { product: "Vino Blanco", size: "750 ml", price: 3500, short_description: "Vino blanco fresco.", long_description: "Un vino blanco fresco y afrutado, ideal para maridar con pescados y mariscos.", photo: "https://i.imgur.com/Tv5iTcw.jpg", discount: false, STACC: true, rate: 4.4 },
                    { product: "Whisky", size: "50 ml", price: 2500, short_description: "Whisky premium.", long_description: "Un whisky premium de sabor complejo y suave, perfecto para disfrutar solo o en compañía.", photo: "https://i.imgur.com/pHQG8z1.jpg", discount: false, STACC: true, rate: 4.7 },
                    { product: "Gin Tonic", size: "300 ml", price: 2200, short_description: "Clásico gin tonic.", long_description: "Un gin tonic clásico y refrescante, preparado con gin de calidad y una rodaja de limón.", photo: "https://i.imgur.com/nvn4F3h.jpg", discount: false, STACC: true, rate: 4.5 }
                ]
            }
        ]
    },
    {
        papas: [
            { product: "Papas Cheddar", size: "300 g", price: 2500, short_description: "Papas fritas con queso cheddar fundido.", long_description: "Crocantes papas fritas cubiertas con un delicioso queso cheddar fundido, un verdadero placer para tu paladar.", photo: "https://i.imgur.com/OyDyE8U.jpg", discount: false, STACC: true, rate: 4.3 },
            { product: "Papas Provenzal", size: "300 g", price: 2300, short_description: "Papas fritas con ajo y perejil.", long_description: "Disfruta de nuestras papas fritas sazonadas con ajo y perejil fresco, una combinación perfecta de sabor y aroma.", photo: "https://i.imgur.com/Fx8N3xe.jpg", discount: false, STACC: true, rate: 4.1 },
            { product: "Papas Bacon", size: "300 g", price: 2700, short_description: "Papas fritas con queso cheddar y panceta.", long_description: "Nuestras papas fritas con queso cheddar y crujiente panceta son la elección perfecta para los amantes de los sabores intensos.", photo: "https://i.imgur.com/tcDMI8O.jpg", discount: false, STACC: true, rate: 4.5 },
            { product: "Papas Bravas", size: "300 g", price: 2400, short_description: "Papas fritas con salsa picante.", long_description: "Deléitate con nuestras papas bravas, servidas con una salsa picante que despertará todos tus sentidos.", photo: "https://i.imgur.com/dV6v8bp.jpg", discount: false, STACC: true, rate: 4.2 },
            { product: "Papas Trufadas", size: "300 g", price: 3000, short_description: "Papas fritas con aceite de trufa.", long_description: "Una sofisticada versión de papas fritas, realzadas con el exquisito sabor del aceite de trufa.", photo: "https://i.imgur.com/Yf2f8IW.jpg", discount: false, STACC: true, rate: 4.7 },
            { product: "Papas 4 Quesos", size: "300 g", price: 2800, short_description: "Papas fritas con mezcla de cuatro quesos.", long_description: "Déjate seducir por nuestras papas fritas cubiertas con una mezcla de cuatro quesos fundidos, un manjar irresistible.", photo: "https://i.imgur.com/LNY8eWd.jpg", discount: false, STACC: true, rate: 4.4 }
        ],
    },
    {
        hamburguesas: [
            { product: "Hamburguesa Clásica", size: "200 g", price: 3500, short_description: "Hamburguesa con lechuga, tomate y mayonesa.", long_description: "Nuestra hamburguesa clásica, con lechuga fresca, tomate jugoso y mayonesa cremosa, es una delicia atemporal.", photo: "https://i.imgur.com/EM9Pj7E.jpg", discount: false, STACC: true, rate: 4.6 },
            { product: "Hamburguesa con Queso", size: "200 g", price: 3700, short_description: "Hamburguesa con queso cheddar fundido.", long_description: "Una hamburguesa jugosa coronada con queso cheddar fundido, perfecta para los amantes del queso.", photo: "https://i.imgur.com/EVW3U5j.jpg", discount: false, STACC: true, rate: 4.5 },
            { product: "Hamburguesa BBQ", size: "200 g", price: 4000, short_description: "Hamburguesa con salsa BBQ y cebolla caramelizada.", long_description: "Disfruta de nuestra hamburguesa BBQ, con salsa barbacoa ahumada y cebolla caramelizada, una explosión de sabor en cada bocado.", photo: "https://i.imgur.com/5aDOb3o.jpg", discount: false, STACC: true, rate: 4.7 },
            { product: "Hamburguesa Doble", size: "400 g", price: 4500, short_description: "Hamburguesa con doble carne y queso.", long_description: "Una hamburguesa imponente con doble carne y queso derretido, ideal para los verdaderos fanáticos de las hamburguesas.", photo: "https://i.imgur.com/rRHDdPY.jpg", discount: false, STACC: true, rate: 4.8 },
            { product: "Hamburguesa Veggie", size: "200 g", price: 3800, short_description: "Hamburguesa de garbanzos con vegetales frescos.", long_description: "Nuestra opción vegetariana, con una sabrosa hamburguesa de garbanzos y vegetales frescos, es una alternativa deliciosa y saludable.", photo: "https://i.imgur.com/bwGijPS.jpg", discount: false, STACC: true, rate: 4.3 },
            { product: "Hamburguesa Picante", size: "200 g", price: 3900, short_description: "Hamburguesa con jalapeños y salsa picante.", long_description: "Una hamburguesa con carácter, acompañada de jalapeños y salsa picante, perfecta para los amantes del picante.", photo: "https://i.imgur.com/Lq3YbQl.jpg", discount: false, STACC: true, rate: 4.4 }
        ]
    },
    {
        pizzas: [
            {
                // Subcategoría de Pizzas Chicas
                chica: [
                    { product: "Pizza Margarita", size: "4 porciones", price: 2500, short_description: "Pizza con tomate, mozzarella y albahaca.", long_description: "Nuestra Pizza Margarita, con tomate fresco, mozzarella derretida y albahaca aromática, es un clásico que nunca falla.", photo: "https://i.imgur.com/W5ZlP5u.jpg", discount: false, STACC: true, rate: 4.5 },
                    { product: "Pizza Pepperoni", size: "4 porciones", price: 2700, short_description: "Pizza con pepperoni y queso mozzarella.", long_description: "Una pizza irresistible con abundante pepperoni y queso mozzarella derretido, una combinación que siempre complace.", photo: "https://i.imgur.com/jxZ6LtX.jpg", discount: false, STACC: true, rate: 4.6 },
                    { product: "Pizza Hawaiana", size: "4 porciones", price: 2600, short_description: "Pizza con jamón, piña y queso mozzarella.", long_description: "La dulzura de la piña combinada con el jamón y el queso mozzarella en una pizza hawaiana que te encantará.", photo: "https://i.imgur.com/m6EzvDZ.jpg", discount: false, STACC: true, rate: 4.2 },
                    { product: "Pizza Cuatro Quesos", size: "4 porciones", price: 2800, short_description: "Pizza con mezcla de cuatro quesos.", long_description: "Una delicia para los amantes del queso, nuestra Pizza Cuatro Quesos está cargada con una mezcla fundida de los mejores quesos.", photo: "https://i.imgur.com/x1TwKgO.jpg", discount: false, STACC: true, rate: 4.7 },
                    { product: "Pizza Vegetariana", size: "4 porciones", price: 2400, short_description: "Pizza con vegetales frescos y queso mozzarella.", long_description: "Una opción fresca y saludable, con una variedad de vegetales frescos y queso mozzarella derretido sobre una base crujiente.", photo: "https://i.imgur.com/OizM8PI.jpg", discount: false, STACC: true, rate: 4.3 },
                    { product: "Pizza BBQ", size: "4 porciones", price: 2900, short_description: "Pizza con salsa BBQ, pollo y cebolla roja.", long_description: "Una pizza única con salsa BBQ, pollo jugoso y cebolla roja, una combinación que sorprenderá a tus papilas gustativas.", photo: "https://i.imgur.com/MnF6B0F.jpg", discount: false, STACC: true, rate: 4.8 }
                ]
            },
            {
                // Subcategoría de Pizzas Grandes
                grande: [
                    { product: "Pizza Margarita", size: "8 porciones", price: 4500, short_description: "Pizza con tomate, mozzarella y albahaca.", long_description: "Nuestra Pizza Margarita, con tomate fresco, mozzarella derretida y albahaca aromática, es un clásico que nunca falla.", photo: "https://i.imgur.com/W5ZlP5u.jpg", discount: false, STACC: true, rate: 4.5 },
                    { product: "Pizza Pepperoni", size: "8 porciones", price: 4800, short_description: "Pizza con pepperoni y queso mozzarella.", long_description: "Una pizza irresistible con abundante pepperoni y queso mozzarella derretido, una combinación que siempre complace.", photo: "https://i.imgur.com/jxZ6LtX.jpg", discount: false, STACC: true, rate: 4.6 },
                    { product: "Pizza Hawaiana", size: "8 porciones", price: 4700, short_description: "Pizza con jamón, piña y queso mozzarella.", long_description: "La dulzura de la piña combinada con el jamón y el queso mozzarella en una pizza hawaiana que te encantará.", photo: "https://i.imgur.com/m6EzvDZ.jpg", discount: false, STACC: true, rate: 4.2 },
                    { product: "Pizza Cuatro Quesos", size: "8 porciones", price: 5000, short_description: "Pizza con mezcla de cuatro quesos.", long_description: "Una delicia para los amantes del queso, nuestra Pizza Cuatro Quesos está cargada con una mezcla fundida de los mejores quesos.", photo: "https://i.imgur.com/x1TwKgO.jpg", discount: false, STACC: true, rate: 4.7 },
                    { product: "Pizza Vegetariana", size: "8 porciones", price: 4600, short_description: "Pizza con vegetales frescos y queso mozzarella.", long_description: "Una opción fresca y saludable, con una variedad de vegetales frescos y queso mozzarella derretido sobre una base crujiente.", photo: "https://i.imgur.com/OizM8PI.jpg", discount: false, STACC: true, rate: 4.3 },
                    { product: "Pizza BBQ", size: "8 porciones", price: 4900, short_description: "Pizza con salsa BBQ, pollo y cebolla roja.", long_description: "Una pizza única con salsa BBQ, pollo jugoso y cebolla roja, una combinación que sorprenderá a tus papilas gustativas.", photo: "https://i.imgur.com/MnF6B0F.jpg", discount: false, STACC: true, rate: 4.8 }
                ]
            }
        ]
    },
    {
        entradas: [
            { product: "Empanadas de Carne", size: "3 unidades", price: 1500, short_description: "Empanadas rellenas de carne.", long_description: "Nuestras empanadas de carne son un clásico irresistible, rellenas con una mezcla sabrosa de carne y especias.", photo: "https://i.imgur.com/xjVCeZ5.jpg", discount: false, STACC: true, rate: 4.3 },
            { product: "Empanadas de Pollo", size: "3 unidades", price: 1500, short_description: "Empanadas rellenas de pollo.", long_description: "Disfruta de nuestras empanadas de pollo, rellenas con jugosa carne de pollo y un toque de especias.", photo: "https://i.imgur.com/XsCojCo.jpg", discount: false, STACC: true, rate: 4.1 },
            { product: "Bruschettas", size: "4 unidades", price: 1200, short_description: "Pan tostado con tomate y albahaca.", long_description: "Las bruschettas, con su pan tostado, tomate fresco y albahaca, son el aperitivo perfecto para empezar tu comida.", photo: "https://i.imgur.com/k6YtIvS.jpg", discount: false, STACC: true, rate: 4.4 },
            { product: "Alitas de Pollo", size: "6 unidades", price: 2000, short_description: "Alitas de pollo con salsa BBQ.", long_description: "Nuestras alitas de pollo, cubiertas con salsa BBQ, son un delicioso bocado que te dejará pidiendo más.", photo: "https://i.imgur.com/Ek5hdgH.jpg", discount: false, STACC: true, rate: 4.6 },
            { product: "Mozzarella Sticks", size: "6 unidades", price: 1800, short_description: "Palitos de mozzarella empanizados.", long_description: "Disfruta de nuestros mozzarella sticks, crujientes por fuera y con queso derretido por dentro, un verdadero placer.", photo: "https://i.imgur.com/hStICZN.jpg", discount: false, STACC: true, rate: 4.5 },
            { product: "Nachos con Guacamole", size: "1 porción", price: 2500, short_description: "Nachos con guacamole fresco.", long_description: "Nuestros nachos crujientes servidos con guacamole fresco son el acompañamiento perfecto para cualquier comida.", photo: "https://i.imgur.com/j6Tf3wd.jpg", discount: false, STACC: true, rate: 4.7 }
        ]
    },
    {
        postres: [
            { product: "Brownie con Helado", size: "1 porción", price: 2200, short_description: "Brownie de chocolate con helado de vainilla.", long_description: "Un delicioso brownie de chocolate servido con helado de vainilla, el postre perfecto para cualquier ocasión.", photo: "https://i.imgur.com/YQHqsFt.jpg", discount: false, STACC: true, rate: 4.8 },
            { product: "Cheesecake", size: "1 porción", price: 2500, short_description: "Cheesecake con salsa de frutos rojos.", long_description: "Nuestro cheesecake, con su base crujiente y cobertura de frutos rojos, es una delicia que no puedes dejar de probar.", photo: "https://i.imgur.com/A5Y4OdT.jpg", discount: false, STACC: true, rate: 4.6 },
            { product: "Tiramisu", size: "1 porción", price: 2400, short_description: "Tiramisu con café y cacao.", long_description: "Disfruta de nuestro tiramisu, con capas de mascarpone, café y un toque de cacao, un postre clásico italiano.", photo: "https://i.imgur.com/cXkAG9V.jpg", discount: false, STACC: true, rate: 4.7 },
            { product: "Helado de Vainilla", size: "2 bolas", price: 1500, short_description: "Helado de vainilla artesanal.", long_description: "Nuestro helado de vainilla artesanal, cremoso y lleno de sabor, es la opción perfecta para los amantes del helado.", photo: "https://i.imgur.com/otv6Vd1.jpg", discount: false, STACC: true, rate: 4.5 },
            { product: "Flan con Dulce de Leche", size: "1 porción", price: 1700, short_description: "Flan casero con dulce de leche.", long_description: "Un flan casero suave y delicioso, servido con una generosa porción de dulce de leche.", photo: "https://i.imgur.com/av2Ne3F.jpg", discount: false, STACC: true, rate: 4.6 },
            { product: "Frutillas con Crema", size: "1 porción", price: 2000, short_description: "Frutillas frescas con crema.", long_description: "Frescas frutillas servidas con crema batida, un postre ligero y refrescante.", photo: "https://i.imgur.com/ztMzv2V.jpg", discount: false, STACC: true, rate: 4.4 }
        ]
    },
    {
        discounts: [
            { product: "Combo 1", size: "1 combo", price: 5000, short_description: "Combo de hamburguesa y papas fritas.", long_description: "Disfruta de nuestro Combo 1, con una jugosa hamburguesa y crocantes papas fritas, perfecto para una comida completa.", photo: "https://i.imgur.com/Gt4BNb8.jpg", discount: true, STACC: true, rate: 4.6 },
            { product: "Combo 2", size: "1 combo", price: 6000, short_description: "Combo de pizza y gaseosa.", long_description: "Nuestro Combo 2 incluye una deliciosa pizza y una refrescante gaseosa, ideal para compartir.", photo: "https://i.imgur.com/W5ZlP5u.jpg", discount: true, STACC: true, rate: 4.7 },
            { product: "Combo 3", size: "1 combo", price: 5500, short_description: "Combo de pasta y bebida.", long_description: "Disfruta de una sabrosa pasta acompañada de tu bebida favorita con nuestro Combo 3, una opción deliciosa y completa.", photo: "https://i.imgur.com/1vvjVq5.jpg", discount: true, STACC: true, rate: 4.5 },
            { product: "Happy Hour Cerveza", size: "500 ml", price: 1800, short_description: "Cerveza a price especial durante happy hour.", long_description: "Aprovecha nuestro Happy Hour y disfruta de una cerveza bien fría a un price especial.", photo: "https://i.imgur.com/Jed5kz5.jpg", discount: true, STACC: true, rate: 4.8 },
            { product: "2x1 Cocktails", size: "300 ml", price: 2500, short_description: "Dos cocktails por el price de uno.", long_description: "Disfruta de nuestra oferta 2x1 en cocktails, perfectos para compartir con amigos.", photo: "https://i.imgur.com/nvn4F3h.jpg", discount: true, STACC: true, rate: 4.6 },
            { product: "Descuento Estudiantes", size: "1 porción", price: 4000, short_description: "Descuento en menús para estudiantes.", long_description: "Presenta tu credencial de estudiante y obtén un descuento especial en nuestros menús seleccionados.", photo: "https://i.imgur.com/bDO6gim.jpg", discount: true, STACC: true, rate: 4.5 }
        ]
    }
];
