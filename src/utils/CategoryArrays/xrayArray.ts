
export type Article = {
    id: number
    image: string
    title: string
    description: string
    category: string
}

const xrayArray: Article[] = [
    {
        id: 1,
        image: '/images/category/x-ray/x-ray-1.jpg',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore beatae eligendi dignissimos consequuntur minima saepe repudiandae sapiente accusantium, veritatis eius blanditiis expedita molestias fuga quod doloribus quasi eum reiciendis? Minus.',
        category: 'x-ray',
    },
    {
        id: 2,
        image: '/images/category/x-ray/x-ray-5.jpg',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore beatae eligendi dignissimos consequuntur minima saepe repudiandae sapiente accusantium, veritatis eius blanditiis expedita molestias fuga quod doloribus quasi eum reiciendis? Minus.',
        category: 'x-ray',
    },
    {
        id: 3,
        image: '/images/category/x-ray/x-ray-3.jpg',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore beatae eligendi dignissimos consequuntur minima saepe repudiandae sapiente accusantium, veritatis eius blanditiis expedita molestias fuga quod doloribus quasi eum reiciendis? Minus.',
        category: 'x-ray',
    },
    {
        id: 4,
        image: '/images/category/x-ray/x-ray-4.jpg',
        title: 'Lorem ipsum dolor adipisicing elit.',
        description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto explicabo suscipit consequuntur eveniet natus cumque reprehenderit nemo. Facere provident dolorum, laudantium deleniti sint modi cum eligendi explicabo architecto ducimus quidem! Dolorem laboriosam magni reprehenderit a cumque nobis hic, aperiam dolorum facere. Omnis, nesciunt facere. Ducimus modi esse molestias deserunt nihil officia. Illo, voluptatibus. Fuga quod facere magni, laborum ipsa reprehenderit. Accusantium odit incidunt, a ipsam veritatis commodi dolore iusto suscipit molestias atque numquam sapiente neque in aliquid at! Rem perspiciatis magni repellendus atque aut excepturi blanditiis voluptatem numquam inventore illum.',
        category: 'x-ray',
    },
    
    {
        id: 5,
        image: '/images/category/x-ray/x-ray-2.jpg',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque a voluptatibus nesciunt fugiat labore maxime distinctio corrupti rem quaerat? Corrupti deserunt excepturi accusantium vitae eum officia enim exercitationem aperiam tempora!',
        category: 'x-ray',
    },
]

// export const getProductsObject = (array: Article[]) =>
//     array.reduce(
//         (object, product) => ({
//             ...object,
//             [product.id]: product,
//         }),
//         {}
//     )

export default xrayArray
