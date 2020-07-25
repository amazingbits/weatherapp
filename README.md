# Weather App (aplicação que informa o clima)

![Imagem da aplicação](https://amazingbits.com.br/imagens/print_weatherapp.jpg)

Esta é uma aplicação simples que informa o clima de uma cidade assim que o usuário digitar o nome dela.

## Tecnologias

- HTML5
- CSS
- JavaScript

## Como funciona?

A aplicação utiliza uma API pública que retorna os dados de uma cidade tendo como parâmetros o nome da cidade e uma chave de autenticação.

## Como testar?

Basta ter um servidor web instalado em sua máquina (APACHE, por exemplo). Baixe e coloque os arquivos da aplicação numa pasta raíz (se você tem o XAMPP instalado, por exemplo, a pasta é a "htdocs") e rode a aplicação através do navegador.

## Informações adicionais

API:https://api.openweathermap.org/data/2.5/weather?q=VALORDIGITADO&appid=CHAVEAPI&units=metric (aonde está "VALORDIGITADO" substitua pelo nome da cidade, e onde está escrito CHAVEAPI substitua pela chave gerada para fazer consultas na API).

Para gerar uma chave, faça um cadastro [Neste Link](https://home.openweathermap.org/users/sign_up)

A API traz um item chamado "icone" com um endereço. Para acessar a imagem do clima eu utilizei um outro servidor: https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/ICONE.svg (onde ICONE.svg é o nome do icone trazido pela API).
