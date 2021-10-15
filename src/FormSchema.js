import * as yup from 'yup'

const formSchema = yup.object().shape({
    orderName: yup
        .string()
        .trim()
        .required('name must be at least 2 characters')
        .min(2, 'name must be at least 2 characters'),
    size: yup
        .string()
        .oneOf(['small', 'medium', 'large', 'extra-large', 'super'], 'Must pick a size'),
    special: yup
        .string()
        .trim(),
    pepperoni: yup.boolean(),
    mushrooms: yup.boolean(),
    sausage: yup.boolean(),
    pineapple: yup.boolean()

})

export default formSchema