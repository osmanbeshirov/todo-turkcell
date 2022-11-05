import * as Yup from 'yup';

export interface Values {
    todo: string
}

const validations = Yup.object().shape({
    todo: Yup.string().required('Text is a required field').min(4)
})

export default validations;
