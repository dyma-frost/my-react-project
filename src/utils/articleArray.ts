export type Article = {
    id: number
    image: string
    title: string
    description: string
    category: string
}

const articleArray: Article[] = [
    {
        id: 1,
        title: 'Dental Department',
        description: 'Sodales habitasse aliquam solli primis.',
        image: '/images/Dental Department.webp',
        category: 'dental',
    },
    {
        id: 2,
        title: 'Cardiology',
        description: 'Tristique nam porttitor at vivamus.',
        image: '/images/Cardiology.webp',
        category: 'cardiology',
    },
    {
        id: 3,
        title: 'Pediatrics',
        description: 'Blandit donec convallis feugiat velit.',
        image: '/images/Pediatrics.webp',
        category: 'pediatrict',
    },
    {
        id: 4,
        title: 'X-Ray',
        description: 'Enim cursus nullam eu dolor.',
        image: '/images/X-ray.webp',
        category: 'x-ray',
    },
    {
        id: 5,
        title: 'Ear treatment',
        description: 'Vitae enim aliquam aliquet sit.',
        image: '/images/Ear treatment.webp',
        category: 'ear treatment',
    },
    {
        id: 6,
        title: 'Pregnancy',
        description: 'Neque cubilia etiam fringilla integer.',
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
