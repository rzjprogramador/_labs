# Simultaniamente npm
```npm install concurrently ```

> se precisar legacy node
> ``` sudo apt-get install nodejs-legacy ```


# Compilar Ts para js com watch
script package json :
```"start": "tsc && concurrently \"tsc -w\" \"lite-server\" "```
tuto: https://pretagteam.com/question/how-to-watch-and-compile-all-typescript-sources

