import { IsEmail, IsNotEmpty, Length } from 'class-validator';
import {
  IsValidCellphone,
  IsValidDocument,
  IsValidPassword,
  IsValidTellphone,
} from '../../validations';

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
  document: string;

  @IsEmail(undefined, { message: 'O e-mail informado não é válido.' })
  // TODO - Provider verificar se email existe
  email: string;

  @IsNotEmpty({ message: 'A senha não pode estar vazia.' })
  @IsValidPassword({ message: 'A senha está fora dos padrões.' })
  password: string;

  // TODO - como fazer??
  confirm_password: string;

  @IsValidCellphone({ message: 'O celular informado não é válido.' })
  cellphone?: string;

  @IsValidTellphone({ message: 'O telefone informado não é válido.' })
  tellphone?: string;
}
