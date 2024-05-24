export class Config {
  inputStyles?: { [key: string]: any };
  containerStyles?: { [key: string]: any };
  allowKeyCodes?: string[];
  length: number = 0;
  allowNumbersOnly?: boolean;
  setTypePassword?: boolean;
  inputClass?: string;
  containerClass?: string;
  // allowNumbersOnly?: boolean;
  // isPasswordInput?: boolean;
  disableAutoFocus?: boolean;
}
