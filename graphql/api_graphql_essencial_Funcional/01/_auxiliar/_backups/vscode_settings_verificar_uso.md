

"[javascript]": {
    "editor.quickSuggestions": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },

/*  Controla se sugestões rápidas devem aparecer durante a digitação  */

  "editor.quickSuggestions": {
    "other": true,
    "comments": false,
    "strings": false
  },

// Controla se sugestões devem ser aceitas em caracteres de confirmação. Por exemplo, em JavaScript, o ponto-e-vírgula (`;`) pode ser um caractere de confirmação que aceita uma sugestão e digita esse caractere.

  "editor.acceptSuggestionOnCommitCharacter": true,

  // Controla se as sugestões devem ser aceitas em 'Enter' - além de 'Tab'. Ajuda a evitar ambiguidades entre inserir novas linhas ou aceitar sugestões. O valor 'inteligente' significa apenas aceitar uma sugestão com Enter quando faz uma alteração textual

  "editor.acceptSuggestionOnEnter": "on",

  // Controla o atraso em ms após o qual sugestões rápidas aparecerão.
  "editor.quickSuggestionsDelay": 10,

  // Controla se as sugestões devem aparecer automaticamente ao digitar os caracteres do acionador
  "editor.suggestOnTriggerCharacters": true,

  // Controla se pressionar a guia insere a melhor sugestão e se a guia alterna entre outras sugestões
  "editor.tabCompletion": "on",

  // Controla se a classificação favorece as palavras que aparecem perto do cursor
  "editor.suggest.localityBonus": true,

  //NAO USAR - DESABILITOU INTELISENSE >> Controla como as sugestões são pré-selecionadas ao mostrar a lista de sugestões
  // "editor.suggestSelection": "recentlyUsed",

  // Habilitar sugestões baseadas em palavras
  "editor.wordBasedSuggestions": true,

  // Habilitar dicas de parâmetro
  "editor.parameterHints.enabled": true,