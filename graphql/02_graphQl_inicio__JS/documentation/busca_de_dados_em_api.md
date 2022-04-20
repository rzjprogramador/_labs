# BUSCA DE DADOS EM API

> AO INVES DE RETORNAR O ARRAY DE OBJETOS MARRETADOS
  /* return [
    { id: '1', nome: 'Reinaldo MARRETADO' },
    { id: '2', nome: 'Guga MARRETADO' },
    { id: '3', nome: 'Leonardo MARRETADO' },
  ];
  */

  > BUSCANDO DADOS::  AO INVES DE MARRETAR >> BUSCAR EM UMA FONTE EXTERNA EM UMA API
  - ESPERE E BUSQUE NA FONTE DE DADOS API O ENDPOINT QUE DESEJA 
  - E RETORNE O RESULTADO NO FORMATO VALIDO ONDE VAI USAR  EM JSON  ex:

  const users = await fetch('http:localhost:9999/usuarios');
  return users.json();

  ---
  