import validate from 'validate.js';
import { Alert } from 'react-native';

export default class ValidationService {
  static validateField(fieldName, values, constraints) {
    const validationErrors = validate(values, constraints);
    if (
      validationErrors &&
      validationErrors[fieldName] &&
      Object.keys(values).indexOf(fieldName) !== -1
    ) {
      return validationErrors[fieldName][0];
    }
    return null;
  }

  static validate(values, constraints) {
    const errors = ValidationService.getValidationErrors(values, constraints);
    if (errors.length > 0) {
      Alert.alert('Erro de validação', 'Verifique os dados informados');
    }
    return errors.length === 0;
  }

  static isValid(values, constraints) {
    return (
      ValidationService.getValidationErrors(values, constraints).length === 0
    );
  }

  static getValidationErrors(values, constraints) {
    const validationErrors = validate(values, constraints) || {};
    const errors = [];
    Object.keys(validationErrors).forEach(fieldName => {
      if (
        validationErrors[fieldName] &&
        Object.keys(values).indexOf(fieldName) !== -1
      ) {
        errors.push(validationErrors[fieldName][0]);
      }
    });
    return errors;
  }
}
