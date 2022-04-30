interface FontProtocol {
    primary?: string
    second?: string
    pesoNormal?: number
    pesoMedium?: number
    pesoBold?: number
}

export class Font implements FontProtocol {
    constructor(
        private _primary: string,
        private _second: string,
        private _pesoNormal: number,
        private _pesoMedium: number,
        private _pesoBold: number,
    ) {}

    get primary(): string {
        return this._primary
    }
    get second(): string {
        return this._second
    }
    get pesoNormal(): number {
        return this._pesoNormal
    }
    get pesoMedium(): number {
        return this._pesoMedium
    }
    get pesoBold(): number {
        return this._pesoBold
    }

    handlerFontPrimary() {
        return `https://fonts.googleapis.com/css2?family=${this.primary}:wght@${this.pesoNormal};${this.pesoMedium};${this.pesoBold}&display=swap`
    }

    handlerFontSecond() {
        return `https://fonts.googleapis.com/css2?family=${this.second}:wght@${this.pesoNormal};${this.pesoMedium};${this.pesoBold}&display=swap`
    }
}

/*  


-----------------------------------------
Origem chakra : 

<link
    href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
    rel="stylesheet"
/>


*/
