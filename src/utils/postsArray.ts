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


export const getPostsObject = (array: Posts[]) =>
    array.reduce(
        (object, product) => ({
            ...object,
            [product.id]: product,
        }),
        {}
    )

export default postsArray
