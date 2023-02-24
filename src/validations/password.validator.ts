import { Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

/**
 * A senha deve conter:
 * - Ao menos uma letra minúscula.
 * - Ao menos uma letra maiúscula
 * - Ao menos um caractere especial
 */
@Injectable()
@ValidatorConstraint()
export class PasswordValidator implements ValidatorConstraintInterface {
  validate(value: any): boolean {
    if (!value) return true; // Se estiver vazio é outra validação

    const regex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;

    return regex.test(value);
  }
}

export const IsValidPassword = (options: ValidationOptions) => {
  return (object: object, property: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: property,
      options: options,
      constraints: [],
      validator: PasswordValidator,
    });
  };
};
