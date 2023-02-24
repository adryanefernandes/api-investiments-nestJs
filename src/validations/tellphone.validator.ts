import { Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { onlyNumbers } from 'src/utils';

@Injectable()
@ValidatorConstraint()
export class TellphoneValidator implements ValidatorConstraintInterface {
  validate(value: any): boolean {
    if (!value) return true; // É opcional

    const regex =
      /^([14689][0-9]|2[12478]|3([1-5]|[7-8])|5([13-5])|7[193-7])[0-9]{8}$/;

    const tellphone = onlyNumbers(value);
    return regex.test(tellphone);
  }
}

export const IsValidTellphone = (options: ValidationOptions) => {
  return (object: object, property: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: property,
      options: options,
      constraints: [],
      validator: TellphoneValidator,
    });
  };
};
