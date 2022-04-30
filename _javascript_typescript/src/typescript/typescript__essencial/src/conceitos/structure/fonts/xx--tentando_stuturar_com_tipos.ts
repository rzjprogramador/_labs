interface FontProtocol {
    font: FontType
}
type FontType = {
    classFont: ClassFont
    classPeso: PesoFont
}
type ClassFont = {
    primary: string
    second: string
}
type PesoFont {
    normal: number
    medium: number
    bold: number
}

export class Font implements FontProtocol {
    constructor(
        private _font: FontType, 
    ) {}
  
}

const font1 = new Font()

