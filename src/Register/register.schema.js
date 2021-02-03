
    import * as yup from 'yup';

    export const registerSchema = yup.object().shape({
    username:yup.string()
        .min(3)
        .max(60)
        .required(),
    password:yup.string()
        .min(6)
        .max(26)
        .required(),
    email:yup.string()
        .min(100)
        .max()
        .email().required(),
    agreeToTerms:yup.mixed().oneOf([true]),
    });