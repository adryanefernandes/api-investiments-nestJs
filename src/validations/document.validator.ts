import { Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { CPF, CNPJ } from 'cpf_cnpj';
import { onlyNumbers } from 'src/utils';

@Injectable()
@ValidatorConstraint()
export class DocumentValidator implements ValidatorConstraintInterface {
  validate(value: any): boolean {
    if (!value) return true; // Se estiver vazio é outra validação

    const document = onlyNumbers(value);
    if (!document) return false;

    return document.length === 11
      ? CPF.isValid(document)
      : CNPJ.isValid(document);
  }
}

export const IsValidDocument = (options: ValidationOptions) => {
  return (object: object, property: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: property,
      options: options,
      constraints: [],
      validator: DocumentValidator,
    });
  };
};
