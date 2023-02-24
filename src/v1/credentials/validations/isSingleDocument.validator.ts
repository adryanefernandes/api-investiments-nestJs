import { Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { UserEntity } from 'src/database/entities/user.entity';
import { UserRepository } from 'src/database/repositories/user.repository';

@Injectable()
@ValidatorConstraint({ async: true })
export class IsSingleDocumentValidator implements ValidatorConstraintInterface {
  constructor(private userRepository: UserRepository) {}

  async validate(value: any): Promise<boolean> {
    if (!value) return true;

    const userWithSameDocument: UserEntity =
      await this.userRepository.searchByDocument(value);

    return !userWithSameDocument;
  }
}

export const IsSingleDocument = (options: ValidationOptions) => {
  return (object: object, property: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: property,
      options: options,
      constraints: [],
      validator: IsSingleDocumentValidator,
    });
  };
};
