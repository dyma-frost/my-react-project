import cardiologyArray from "./CategoryArrays/cardiologyArray"
import dentaldepArray from "./CategoryArrays/dentaldepArray"
import eartreatmentArray from "./CategoryArrays/eartreatmentArray"
import pediatricsArray from "./CategoryArrays/pediatricsArray"
import pregnancyArray from "./CategoryArrays/pregnancyArray"
import xrayArray from "./CategoryArrays/xrayArray"

export type Posts = {
    id: number
    image: string
    title: string
    description: string
    category: string
    fullDesc1: string
    fullDesc2: string
}

const postsArray: Posts[] = cardiologyArray.concat(dentaldepArray, eartreatmentArray, pediatricsArray, pregnancyArray, xrayArray)
// [
    // {
    //     id: 1,
    //     image: '/images/category/cardiology/cardiology-1.jpg',
    //     title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    //     description:
    //         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore beatae eligendi dignissimos consequuntur minima saepe repudiandae sapiente accusantium, veritatis eius blanditiis expedita molestias fuga quod doloribus quasi eum reiciendis? Minus.',
    //     category: 'cardiology',
    // },
    // {
    //     id: 2,
    //     image: '/images/category/cardiology/cardiology-2.jpg',
    //     title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    //     description:
    //         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque a voluptatibus nesciunt fugiat labore maxime distinctio corrupti rem quaerat? Corrupti deserunt excepturi accusantium vitae eum officia enim exercitationem aperiam tempora!',
    //     category: 'cardiology',
    // },
    // {
    //     id: 3,
    //     image: '/images/category/cardiology/cardiology-4.jpg',
    //     title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    //     description:
    //         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore beatae eligendi dignissimos consequuntur minima saepe repudiandae sapiente accusantium, veritatis eius blanditiis expedita molestias fuga quod doloribus quasi eum reiciendis? Minus.',
    //     category: 'cardiology',
    // },
    // {
    //     id: 4,
    //     image: '/images/category/cardiology/cardiology-5.jpg',
    //     title: 'Lorem ipsum dolor adipisicing elit.',
    //     description:
    //         'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto explicabo suscipit consequuntur eveniet natus cumque reprehenderit nemo. Facere provident dolorum, laudantium deleniti sint modi cum eligendi explicabo architecto ducimus quidem! Dolorem laboriosam magni reprehenderit a cumque nobis hic, aperiam dolorum facere. Omnis, nesciunt facere. Ducimus modi esse molestias deserunt nihil officia. Illo, voluptatibus. Fuga quod facere magni, laborum ipsa reprehenderit. Accusantium odit incidunt, a ipsam veritatis commodi dolore iusto suscipit molestias atque numquam sapiente neque in aliquid at! Rem perspiciatis magni repellendus atque aut excepturi blanditiis voluptatem numquam inventore illum.',
    //     category: 'cardiology',
    // },
    // {
    //     id: 5,
    //     image: '/images/category/cardiology/cardiology-3.jpg',
    //     title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    //     description:
    //         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore beatae eligendi dignissimos consequuntur minima saepe repudiandae sapiente accusantium, veritatis eius blanditiis expedita molestias fuga quod doloribus quasi eum reiciendis? Minus.',
    //     category: 'cardiology',
    // },
    // {
    //     id: 6,
    //     image: '/images/category/dental/dental-6.jpg',
    //     title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    //     description:
    //         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore beatae eligendi dignissimos consequuntur minima saepe repudiandae sapiente accusantium, veritatis eius blanditiis expedita molestias fuga quod doloribus quasi eum reiciendis? Minus.',
    //     category: 'dental department',
    // },
    // {
    //     id: 7,
    //     image: '/images/category/dental/dental-2.jpg',
    //     title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    //     description:
    //         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque a voluptatibus nesciunt fugiat labore maxime distinctio corrupti rem quaerat? Corrupti deserunt excepturi accusantium vitae eum officia enim exercitationem aperiam tempora!',
    //     category: 'dental department',
    // },
    // {
    //     id: 8,
    //     image: '/images/category/dental/dental-3.jpg',
    //     title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    //     description:
    //         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore beatae eligendi dignissimos consequuntur minima saepe repudiandae sapiente accusantium, veritatis eius blanditiis expedita molestias fuga quod doloribus quasi eum reiciendis? Minus.',
    //     category: 'dental department',
    // },
    // {
    //     id: 9,
    //     image: '/images/category/dental/dental-4.jpg',
    //     title: 'Lorem ipsum dolor adipisicing elit.',
    //     description:
    //         'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto explicabo suscipit consequuntur eveniet natus cumque reprehenderit nemo. Facere provident dolorum, laudantium deleniti sint modi cum eligendi explicabo architecto ducimus quidem! Dolorem laboriosam magni reprehenderit a cumque nobis hic, aperiam dolorum facere. Omnis, nesciunt facere. Ducimus modi esse molestias deserunt nihil officia. Illo, voluptatibus. Fuga quod facere magni, laborum ipsa reprehenderit. Accusantium odit incidunt, a ipsam veritatis commodi dolore iusto suscipit molestias atque numquam sapiente neque in aliquid at! Rem perspiciatis magni repellendus atque aut excepturi blanditiis voluptatem numquam inventore illum.',
    //     category: 'dental department',
    // },
    // {
    //     id: 10,
    //     image: '/images/category/dental/dental-5.jpg',
    //     title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    //     description:
    //         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore beatae eligendi dignissimos consequuntur minima saepe repudiandae sapiente accusantium, veritatis eius blanditiis expedita molestias fuga quod doloribus quasi eum reiciendis? Minus.',
    //     category: 'dental department',
    // },
    // {
    //     id: 11,
    //     image: '/images/category/dental/dental-1.jpg',
    //     title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    //     description:
    //         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore beatae eligendi dignissimos consequuntur minima saepe repudiandae sapiente accusantium, veritatis eius blanditiis expedita molestias fuga quod doloribus quasi eum reiciendis? Minus.',
    //     category: 'dental department',
    // },
    // {
    //     id: 12,
    //     image: '/images/category/ear-treatment/ear-treatment-1.jpg',
    //     title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    //     description:
    //         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore beatae eligendi dignissimos consequuntur minima saepe repudiandae sapiente accusantium, veritatis eius blanditiis expedita molestias fuga quod doloribus quasi eum reiciendis? Minus.',
    //     category: 'ear treatment',
    // },
    // {
    //     id: 13,
    //     image: '/images/category/ear-treatment/ear-treatment-2.jpg',
    //     title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    //     description:
    //         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque a voluptatibus nesciunt fugiat labore maxime distinctio corrupti rem quaerat? Corrupti deserunt excepturi accusantium vitae eum officia enim exercitationem aperiam tempora!',
    //     category: 'ear treatment',
    // },
    // {
    //     id: 14,
    //     image: '/images/category/ear-treatment/ear-treatment-3.jpg',
    //     title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    //     description:
    //         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore beatae eligendi dignissimos consequuntur minima saepe repudiandae sapiente accusantium, veritatis eius blanditiis expedita molestias fuga quod doloribus quasi eum reiciendis? Minus.',
    //     category: 'ear treatment',
    // },
    // {
    //     id: 15,
    //     image: '/images/category/ear-treatment/ear-treatment-4.jpg',
    //     title: 'Lorem ipsum dolor adipisicing elit.',
    //     description:
    //         'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto explicabo suscipit consequuntur eveniet natus cumque reprehenderit nemo. Facere provident dolorum, laudantium deleniti sint modi cum eligendi explicabo architecto ducimus quidem! Dolorem laboriosam magni reprehenderit a cumque nobis hic, aperiam dolorum facere. Omnis, nesciunt facere. Ducimus modi esse molestias deserunt nihil officia. Illo, voluptatibus. Fuga quod facere magni, laborum ipsa reprehenderit. Accusantium odit incidunt, a ipsam veritatis commodi dolore iusto suscipit molestias atque numquam sapiente neque in aliquid at! Rem perspiciatis magni repellendus atque aut excepturi blanditiis voluptatem numquam inventore illum.',
    //     category: 'ear treatment',
    // },
    // {
    //     id: 16,
    //     image: '/images/category/ear-treatment/ear-treatment-5.jpg',
    //     title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    //     description:
    //         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore beatae eligendi dignissimos consequuntur minima saepe repudiandae sapiente accusantium, veritatis eius blanditiis expedita molestias fuga quod doloribus quasi eum reiciendis? Minus.',
    //     category: 'ear treatment',
    // },
    // {
    //     id: 17,
    //     image: '/images/category/pediatrics/pediatrics-1.jpg',
    //     title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    //     description:
    //         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore beatae eligendi dignissimos consequuntur minima saepe repudiandae sapiente accusantium, veritatis eius blanditiis expedita molestias fuga quod doloribus quasi eum reiciendis? Minus.',
    //     category: 'pediatrics',
    // },
    // {
    //     id: 18,
    //     image: '/images/category/pediatrics/pediatrics-2.jpg',
    //     title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    //     description:
    //         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque a voluptatibus nesciunt fugiat labore maxime distinctio corrupti rem quaerat? Corrupti deserunt excepturi accusantium vitae eum officia enim exercitationem aperiam tempora!',
    //     category: 'pediatrics',
    // },
    // {
    //     id: 19,
    //     image: '/images/category/pediatrics/pediatrics-3.jpg',
    //     title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    //     description:
    //         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore beatae eligendi dignissimos consequuntur minima saepe repudiandae sapiente accusantium, veritatis eius blanditiis expedita molestias fuga quod doloribus quasi eum reiciendis? Minus.',
    //     category: 'pediatrics',
    // },
    // {
    //     id: 20,
    //     image: '/images/category/pediatrics/pediatrics-4.jpg',
    //     title: 'Lorem ipsum dolor adipisicing elit.',
    //     description:
    //         'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto explicabo suscipit consequuntur eveniet natus cumque reprehenderit nemo. Facere provident dolorum, laudantium deleniti sint modi cum eligendi explicabo architecto ducimus quidem! Dolorem laboriosam magni reprehenderit a cumque nobis hic, aperiam dolorum facere. Omnis, nesciunt facere. Ducimus modi esse molestias deserunt nihil officia. Illo, voluptatibus. Fuga quod facere magni, laborum ipsa reprehenderit. Accusantium odit incidunt, a ipsam veritatis commodi dolore iusto suscipit molestias atque numquam sapiente neque in aliquid at! Rem perspiciatis magni repellendus atque aut excepturi blanditiis voluptatem numquam inventore illum.',
    //     category: 'pediatrics',
    // },
    // {
    //     id: 21,
    //     image: '/images/category/pediatrics/pediatrics-5.jpg',
    //     title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    //     description:
    //         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore beatae eligendi dignissimos consequuntur minima saepe repudiandae sapiente accusantium, veritatis eius blanditiis expedita molestias fuga quod doloribus quasi eum reiciendis? Minus.',
    //     category: 'pediatrics',
    // },
    // {
    //     id: 22,
    //     image: '/images/category/pediatrics/pediatrics-6.jpg',
    //     title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    //     description:
    //         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore beatae eligendi dignissimos consequuntur minima saepe repudiandae sapiente accusantium, veritatis eius blanditiis expedita molestias fuga quod doloribus quasi eum reiciendis? Minus.',
    //     category: 'pediatrics',
    // },
    // {
    //     id: 28,
    //     image: '/images/category/x-ray/x-ray-1.jpg',
    //     title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    //     description:
    //         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore beatae eligendi dignissimos consequuntur minima saepe repudiandae sapiente accusantium, veritatis eius blanditiis expedita molestias fuga quod doloribus quasi eum reiciendis? Minus.',
    //     category: 'x-ray',
    // },
    // {
    //     id: 29,
    //     image: '/images/category/x-ray/x-ray-5.jpg',
    //     title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    //     description:
    //         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore beatae eligendi dignissimos consequuntur minima saepe repudiandae sapiente accusantium, veritatis eius blanditiis expedita molestias fuga quod doloribus quasi eum reiciendis? Minus.',
    //     category: 'x-ray',
    // },
    // {
    //     id: 30,
    //     image: '/images/category/x-ray/x-ray-3.jpg',
    //     title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    //     description:
    //         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore beatae eligendi dignissimos consequuntur minima saepe repudiandae sapiente accusantium, veritatis eius blanditiis expedita molestias fuga quod doloribus quasi eum reiciendis? Minus.',
    //     category: 'x-ray',
    // },
    // {
    //     id: 31,
    //     image: '/images/category/x-ray/x-ray-4.jpg',
    //     title: 'Lorem ipsum dolor adipisicing elit.',
    //     description:
    //         'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto explicabo suscipit consequuntur eveniet natus cumque reprehenderit nemo. Facere provident dolorum, laudantium deleniti sint modi cum eligendi explicabo architecto ducimus quidem! Dolorem laboriosam magni reprehenderit a cumque nobis hic, aperiam dolorum facere. Omnis, nesciunt facere. Ducimus modi esse molestias deserunt nihil officia. Illo, voluptatibus. Fuga quod facere magni, laborum ipsa reprehenderit. Accusantium odit incidunt, a ipsam veritatis commodi dolore iusto suscipit molestias atque numquam sapiente neque in aliquid at! Rem perspiciatis magni repellendus atque aut excepturi blanditiis voluptatem numquam inventore illum.',
    //     category: 'x-ray',
    // },

    // {
    //     id: 32,
    //     image: '/images/category/x-ray/x-ray-2.jpg',
    //     title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    //     description:
    //         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque a voluptatibus nesciunt fugiat labore maxime distinctio corrupti rem quaerat? Corrupti deserunt excepturi accusantium vitae eum officia enim exercitationem aperiam tempora!',
    //     category: 'x-ray',
    // },
// ]

export const getPostsObject = (array: Posts[]) =>
    array.reduce(
        (object, product) => ({
            ...object,
            [product.id]: product,
        }),
        {}
    )

export default postsArray
