import { IsEmail, IsNotEmpty, Length } from 'class-validator';
import {
  IsValidCellphone,
  IsValidDocument,
  IsValidPassword,
  IsValidTellphone,
  Match,
} from '../../../validations';
import { IsSingleDocument } from '../validations/isSingleDocument.validator';
import { IsSingleEmail } from '../validations/isSingleEmail.validator';

export class SignupDTO {
  @IsNotEmpty({ message: 'O nome é obrigatório.' })
  @Length(3, undefined, {
    message: 'O nome deve conter mais de 3 caracteres.',
  })
  name: string;

  @IsNotEmpty({ message: 'O sobrenome é obrigatório.' })
  @Length(3, undefined, {
    message: 'O sobrenome deve conter mais de 3 caracteres.',
  })
  last_name: string;

  @IsNotEmpty({ message: 'O documento não pode estar vazio.' })
  @IsValidDocument({ message: 'O documento informado está inválido.' })
  @IsSingleDocument({ message: 'Este documento já foi cadastrado.' })
  document: string;

  @IsNotEmpty({ message: 'O e-mail não pode estar vazio.' })
  @IsEmail(undefined, { message: 'O e-mail informado não é válido.' })
  @IsSingleEmail({ message: 'Este e-mail já foi cadastrado.' })
  email: string;

  @IsNotEmpty({ message: 'A senha não pode estar vazia.' })
  @IsValidPassword({ message: 'A senha está fora dos padrões.' })
  password: string;

  @IsNotEmpty({ message: 'A confirmação de senha não pode estar vazia.' })
  @Match('password', {
    message: 'A confirmação de senha deve ser igual a senha.',
  })
  confirm_password: string;

  @IsValidCellphone({ message: 'O celular informado não é válido.' })
  cellphone?: string;

  @IsValidTellphone({ message: 'O telefone informado não é válido.' })
  tellphone?: string;
}
