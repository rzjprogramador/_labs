/* ###

^ === começaem...
$ === termina com 

*/

const ips = `
Os Ips são:
   0.0.0.0
   192.168.0.25
        10.10.5.12
        10.01.10.20 (ESTE IP NÃO É VÁLIDO)
        10.021.08.20 (ESTE IP NÃO É VÁLIDO)
   255.255.255.255
`;


/* ENCONTRAR CPFS =================================================
# CONCEITO -- FAZER UM FOR PRA SIMULAR OS NUMEROS PROXIMOS AO DO MAIS ALTO DOS IPS
300.300.300.300 -- O FOR FOI ATE " menor igual 300 -- pra chegar nos 300" PRA TER ALGUNS INVALIDOS E NAO FALTAR

// ## PRONTO TEMOS 4 CASAS COM 300.300.300.300

## vou precisar capturar os range ::
- capturar de 250 á 255 --regex>> 25[0-5]  >> vai achar de 250á255 --truque: 2 primeiros q preciso 25[primeiro-ultimo q preciso]
- Obs em grupos ...com o \. pra separar por pontos e dentro do grupo separar por OU | 
- capturar de 200 á 249 >> regex 20[0-4][0-9]
- capturar de 100 á 199 >> regex >> 1\d{2}  >>>> --> de 0 a 9 2 vezez


- capturar de 10 á 99 >>>> regex >>> [1-9]\d  >>>>> De 1 a 9 e de 0 a 9 OBS: cpomo é abaixo de 100 são decimais entao nao colocar fora dos []
- capturar de 0 á 9 >>>> regex >>> \d  >>>>> De 0 a 9

### PRONTO CAPTURADOS TODOS AGORA SÓ REPETIR
POEM ESTE GRUPO --DENTRO D EOPUTRO NOVO GRUPO
E POEM ESTE TRECHO COM O PONTO QUE FOI REPETIDO 3 VEZES

COMENTAR O for



*/

const ipRegex = /((25[0-5]|20[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|20[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g;


// for (let i = 0; i<=300; i++) {
//     const ip = `${i}.${i}.${i}.${i}`
//     console.log(ip, ip.match(ipRegex))
// }
// ## PRONTO TEMOS 4 CASAS COM 300.300.300.300


// # final MOSTRAR O RESULTADO FINAL SÓ COM OS IPS CAPTURADOS DO TEXTO
console.log(ips.match(ipRegex))
