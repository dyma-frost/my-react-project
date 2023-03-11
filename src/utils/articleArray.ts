export type Article = {
    id: number
    image: string
    title: string
    description: string
    desc1: string
    desc2: string
    desc3: string
    category: string
}

const articleArray: Article[] = [
    {
        id: 1,
        title: 'Dental Department',
        description: 'Sodales habitasse aliquam solli primis.',
        desc1: 'Ac amet in adipiscing in sed sit eget. Aliquam suspendisse viverra varius.',
        desc2: 'Ac justo, elementum sed nec consequat odio velit, imperdiet eu risus eget.',
        desc3: 'Nunc in senectus bibendum ut dictum.',
        image: '/images/Dental Department.webp',
        category: 'dental',
    },
    {
        id: 2,
        title: 'Cardiology',
        description: 'Tristique nam porttitor at vivamus.',
        desc1: 'Ac amet in adipiscing in sed sit eget. Aliquam suspendisse viverra varius.',
        desc2: 'Ac justo, elementum sed nec consequat odio velit, imperdiet eu risus eget.',
        desc3: 'Nunc in senectus bibendum ut dictum.',
        image: '/images/Cardiology.webp',
        category: 'cardiology',
    },
    {
        id: 3,
        title: 'Pediatrics',
        description: 'Blandit donec convallis feugiat velit.',
        desc1: 'Ac amet in adipiscing in sed sit eget. Aliquam suspendisse viverra varius.',
        desc2: 'Ac justo, elementum sed nec consequat odio velit, imperdiet eu risus eget.',
        desc3: 'Nunc in senectus bibendum ut dictum.',
        image: '/images/Pediatrics.webp',
        category: 'pediatrict',
    },
    {
        id: 4,
        title: 'X-Ray',
        description: 'Enim cursus nullam eu dolor.',
        desc1: 'Ac amet in adipiscing in sed sit eget. Aliquam suspendisse viverra varius',
        desc2: 'Ac justo, elementum sed nec consequat odio velit, imperdiet eu risus eget.',
        desc3: 'Nunc in senectus bibendum ut dictum.',
        image: '/images/X-ray.webp',
        category: 'x-ray',
    },
    {
        id: 5,
        title: 'Ear treatment',
        description: 'Vitae enim aliquam aliquet sit.',
        desc1: 'Ac amet in adipiscing in sed sit eget. Aliquam suspendisse viverra varius',
        desc2: 'Ac justo, elementum sed nec consequat odio velit, imperdiet eu risus eget.',
        desc3: 'Nunc in senectus bibendum ut dictum.',
        image: '/images/Ear treatment.webp',
        category: 'ear treatment',
    },
    {
        id: 6,
        title: 'Pregnancy',
        description: 'Neque cubilia etiam fringilla integer.',
        desc1: 'Ac amet in adipiscing in sed sit eget. Aliquam suspendisse viverra varius',
        desc2: 'Ac justo, elementum sed nec consequat odio velit, imperdiet eu risus eget.',
        desc3: 'Nunc in senectus bibendum ut dictum.',
        image: '/images/Pregnancy.webp',
        category: 'pregnancy',
    },
]

export const getProductsObject = (array: Article[]) =>
    array.reduce(
        (object, product) => ({
            ...object,
            [product.id]: product,
        }),
        {}
    )

export default articleArray
