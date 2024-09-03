import 'styled-components'
import { defaultTheme } from '../styles1/themes/default'

// armazenando esses valores do deafultTheme no ThemeType
type ThemeType = typeof defaultTheme

// estamos pegando styled-components e vamos sobrescrever algo que já existe, não criar algo novo
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
