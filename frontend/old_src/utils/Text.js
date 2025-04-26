export function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

export function isPasswordValid(val) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/.test(val);
}

export function getPasswordCriteria(val) {
    return {
        minLength: val.length >= 8,
        hasUppercase: /[A-Z]/.test(val),
        hasLowercase: /[a-z]/.test(val),
        hasDigit: /\d/.test(val),
        hasSpecialChar: /[^A-Za-z0-9]/.test(val),
    };
};