export type Faq = {
    id: number
    question: string
    answer: string
}

const faqArray: Faq[] = [
    {
        id: 1,
        question: 'Nostra ultricies gravida luctus hac',
        answer: 'Suscipit dictum tellus senectus. Pede vehicula mattis lacinia ultrices diam luctus ornare tempor erat eu non. Ad leo aptent interdum libero neque si. Quis curabitur mus convallis fermentum at tempor per.',
    },
    {
        id: 2,
        question: 'Malesuada velit dictum fusce vehicula',
        answer: 'Si enim amet sollicitudin eros. Penatibus suscipit elit ipsum accumsan morbi conubia non. Magna eu dolor semper risus himenaeos porta rhoncus venenatis primis. Hendrerit imperdiet venenatis in vitae per hac taciti ridiculus nullam at. Lobortis cras vestibulum metus risus montes conubia faucibus facilisi ligula. Gravida cursus ad sed ligula dis sit turpis curae. Elit vel platea per letius suscipit sapien ultricies rhoncus interdum.',
    },
    {
        id: 3,
        question: 'Tellus in morbi accumsan letius',
        answer: 'quis vivamus iaculis lacus nascetur eget. Id quam dictumst cubilia cras turpis elit quis etiam felis aenean senectus.',
    },
    {
        id: 4,
        question: 'Imperdiet diam nascetur si vehicula',
        answer: 'Pulvinar turpis magnis a in. Nostra massa duis praesent odio ornare vivamus aliquet.',
    },
    {
        id: 5,
        question: 'Maximus mollis leo donec euismod',
        answer: 'Fermentum dapibus lorem enim ultrices natoque velit a. Eget velit rutrum convallis iaculis platea.',
    },
    {
        id: 6,
        question: 'Eros fames curae ultrices',
        answer: 'Et facilisis elit bibendum efficitur litora tristique luctus. Potenti blandit rutrum donec laoreet curabitur. Phasellus dapibus nam consequat gravida libero dictumst cursus elit integer. Sapien interdum ipsum ultricies auctor tincidunt lobortis eget felis letius molestie lacus.',
    },
]

// export const getProductsObject = (array: Faq[]) =>
//     array.reduce(
//         (object, product) => ({
//             ...object,
//             [product.id]: product,
//         }),
//         {}
//     )

export default faqArray
