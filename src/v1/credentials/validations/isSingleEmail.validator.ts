import { Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { UserRepository } from 'src/database/repositories/user.repository';

@Injectable()
@ValidatorConstraint({ async: true })
export class IsSingleEmailValidator implements ValidatorConstraintInterface {
  constructor(private userRepository: UserRepository) {}

  async validate(value: any): Promise<boolean> {
    if (!value) return true;

    const userWithSameEmail = await this.userRepository.searchByEmail(value);
    return !userWithSameEmail;
  }
}

export const IsSingleEmail = (options: ValidationOptions) => {
  return (object: object, property: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: property,
      options: options,
      constraints: [],
      validator: IsSingleEmailValidator,
    });
  };
};
