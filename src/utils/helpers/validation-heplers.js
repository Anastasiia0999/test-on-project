import * as Yup from 'yup';

export const authValidation = Yup.object().shape({
    email: Yup.string()
        .email('Невірна ел.пошта')
        .required('Обов`язкове поле'),
    password: Yup.string()
        .min(8, 'Мінімум 8 символів')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
            'Мінімум одна велика літера,мала літера та цифра',
        )
        .required('Обов`язкове поле'),
});

export const registrationValidation = Yup.object().shape({
    login: Yup.string()
        .email('Невірна ел.пошта')
        .required('Обов`язкове поле'),
    password: Yup.string()
        .min(8, 'Мінімум 8 символів')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
            'Мінімум одна велика літера,мала літера та цифра',
        )
        .required('Обов`язкове поле'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Паролі не збігаються')
        .required('Обов`язкове поле'),
    name: Yup.string()
        .min(2, 'Мінімум 2 символи')
        .matches('^([A-Za-zА-Яа-яёЁ][ -]?)+[A-Za-zА-Яа-яёЁ]+$', 'Некоректне введення')
        .max(50, 'Максимум 50 символів')
        .required("Обов'язкове поле"),
    surname: Yup.string()
        .min(2, 'Мінімум 2 символи')
        .matches('^([A-Za-zА-Яа-яёЁ][ -]?)+[A-Za-zА-Яа-яёЁ]+$', 'Некоректне введення')
        .max(50, 'Максимум 50 символів')
        .required('Обов\'язкове поле'),
    fathername: Yup.string()
        .min(2, 'Мінімум 2 символи')
        .matches('^([A-Za-zА-Яа-яёЁ][ -]?)+[A-Za-zА-Яа-яёЁ]+$', 'Некоректне введення')
        .max(50, 'Максимум 50 символів')
        .required('Обов\'язкове поле'),
    role: Yup.number()
        .required("Обов'язкове поле"),
});

export const addTestValidation = Yup.object().shape({
    email: Yup.string()
        .email('Невірна ел.пошта'),
    topic: Yup.string()
        .min(2, 'Мінімум 2 символи')
        .matches('^([A-Za-zА-Яа-яёЁ0-9.#/]([ &_-]|, |: )?)+[A-Za-zА-Яа-яёЁ0-9]+$', 'Некоректне введення')
        .max(50, 'Максимум 50 символів')
        .required('Обов`язкове поле'),
    dateTime: Yup.string()
        .required('Обов`язкове поле'),
    timeLimit:Yup.number()
        .min(0, 'Мінімум 0 символи')
        .max(200, 'Максимум 200 символів')
});

export const addQuestionValidation = Yup.object().shape({
    question: Yup.string()
        .min(2, 'Мінімум 2 символи')
        .max(500, 'Максимум 500 символів'),
    type: Yup.string()
        .required('Обов`язкове поле'),
    answer: Yup.string()
        .min(2, 'Мінімум 2 символи')
        .max(500, 'Максимум 500 символів'),
    mark: Yup.number()
        .required('Обов`язкове поле'),
});

export const addCourseValidation = Yup.object().shape({
    description: Yup.string()
        .min(2, 'Мінімум 2 символи')
        .max(500, 'Максимум 500 символів')
        .required('Обов`язкове поле'),
    name: Yup.string()
        .min(2, 'Мінімум 2 символи')
        .max(100, 'Максимум 100 символів')
        .required('Обов`язкове поле'),
    email: Yup.string()
        .email('Невірна ел.пошта'),
});

/*
export const addCourseValidation = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too short')
        .matches('^([A-Za-zА-Яа-яёЁ0-9.#/]([ &_-]|, |: )?)+[A-Za-zА-Яа-яёЁ0-9]+$', 'Invalid course name')
        .max(50, 'Too long')
        .required('This field is required'),
});

export const editCourseValidation = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too short')
        .matches('^([A-Za-zА-Яа-яёЁ0-9.#/]([ &_-]|, |: )?)+[A-Za-zА-Яа-яёЁ0-9]+$', 'Invalid course name')
        .max(50, 'Too long')
        .required('This field is required'),
});

export const editGroupValidation = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too short')
        .matches('^([A-Za-zА-Яа-яёЁ0-9][ _-]?)+[A-Za-zА-Яа-яёЁ0-9]+$', 'Invalid group name')
        .max(50, 'Too long')
        .required('This field is required'),
    startDate: Yup.date()
        .required('This field is required'),
    finishDate: Yup.date()
        .min(Yup.ref('startDate'), 'Finish date can\'t be before start date')
        .required('This field is required'),
});

export const addLessonValidation = Yup.object().shape({
    themeName: Yup.string()
        .min(1, 'Too short')
        .max(200, 'Too long')
        .required('This field is required'),
    lessonDate: Yup.string()
        .max(new Date(), 'The lesson cannot start in the future')
        .required('This field is required'),
});

export const lessonValidation = Yup.object().shape({
    themeName: Yup.string()
        .min(1, 'Too short')
        .max(200, 'Too long')
        .required('This field is required'),
    groupName: Yup.string()
        .min(1, 'Too short')
        .matches('^([A-Za-zА-Яа-яёЁ0-9][ _-]?)+[A-Za-zА-Яа-яёЁ0-9]+$', 'Invalid group name')
        .max(50, 'Too long')
        .required('This field is required'),
    lessonDate: Yup.string()
        .max(new Date(), 'The lesson cannot start in the future')
        .required('This field is required'),
    mentorEmail: Yup.string()
        .email('Invalid email address')
        .required('This field is required'),
});

export const editSecretaryValidation = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too short')
        .matches('^([A-Za-zА-Яа-яёЁ][ -]?)+[A-Za-zА-Яа-яёЁ]+$', 'Invalid first name')
        .max(50, 'Too long')
        .required('This field is required'),
    lastName: Yup.string()
        .min(2, 'Too short')
        .matches('^([A-Za-zА-Яа-яёЁ][ \'-]?)+[A-Za-zА-Яа-яёЁ]+$', 'Invalid last name')
        .max(50, 'Too longs')
        .required('This field is required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('This field is required'),
});

export const editMentorValidation = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too short')
        .matches('^([A-Za-zА-Яа-яёЁ][ -]?)+[A-Za-zА-Яа-яёЁ]+$', 'Invalid first name')
        .max(50, 'Too long')
        .required('This field is required'),
    lastName: Yup.string()
        .min(2, 'Too short')
        .matches('^([A-Za-zА-Яа-яёЁ][ \'-]?)+[A-Za-zА-Яа-яёЁ]+$', 'Invalid last name')
        .max(50, 'Too longs')
        .required('This field is required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('This field is required'),
});

export const editStudentValidation = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too short')
        .matches('^([A-Za-zА-Яа-яёЁ][ -]?)+[A-Za-zА-Яа-яёЁ]+$', 'Invalid first name')
        .max(50, 'Too long')
        .required('This field is required'),
    lastName: Yup.string()
        .min(2, 'Too short')
        .matches('^([A-Za-zА-Яа-яёЁ][ \'-]?)+[A-Za-zА-Яа-яёЁ]+$', 'Invalid last name')
        .max(50, 'Too longs')
        .required('This field is required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('This field is required'),
});

export const changePasswordValidation = Yup.object().shape({
    currentPassword: Yup.string()
        .required('This field is required'),
    newPassword: Yup.string()
        .min(8, 'Password must contain at least 8 characters')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
            'Must contain at least one uppercase, one lowercase, one number',
        )
        .notOneOf([Yup.ref('currentPassword'), null], 'You should provide a new password')
        .required('This field is required'),
    confirmNewPassword: Yup.string()
        .oneOf([Yup.ref('newPassword'), null], 'You should confirm your password')
        .required('This field is required'),
});
*/
