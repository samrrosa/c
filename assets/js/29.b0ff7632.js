(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{414:function(a,t,s){"use strict";s.r(t);var e=s(42),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"_5-variaveis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-variaveis"}},[a._v("#")]),a._v(" 5 - Variáveis")]),a._v(" "),s("p",[a._v("Um programa pode adquirir dados para trabalhar de várias maneiras: de um arquivo ou banco de dados, através de uma rede, do usuário fornecendo entrada em um teclado ou do programador colocando dados diretamente no código-fonte do próprio programa. Na seção 3, fizemos o programa exibir um "),s("code",[a._v("Hello World")]),a._v(", o texto "),s("code",[a._v('"Hello World"')]),a._v(" Foi inserido diretamente no código-fonte do programa, fornecendo dados para o programa usar. O programa então manipula esses dados enviando-os ao monitor para exibir para o usuário.Os dados em um computador são normalmente armazenados em um formato que é eficiente para armazenamento ou processamento, sendo não-legíveis por humanos.")]),a._v(" "),s("p",[a._v("Todos os computadores têm memória, chamada RAM (abreviação de memória de acesso aleatório), que está disponível para uso pelos seus programas. Você pode pensar na RAM como uma série de caixas de correio que podem ser usadas para armazenar dados enquanto o programa está em execução. Um único dado, armazenado na memória em algum lugar, é chamado de valor.")]),a._v(" "),s("p",[a._v("Em C++, o acesso direto à memória não é permitido. Em vez disso, acessamos a memória indiretamente por meio de um objeto. Um objeto é uma região de armazenamento (geralmente memória) que possui um valor e outras propriedades associadas (que serão abordadas em seções futuras). Quando um objeto é definido, o compilador determina automaticamente onde o objeto será colocado na memória. Como resultado, em vez de dizer para obter o valor armazenado em um local específico, podemos dizer para obter o valor armazenado por este objeto e o compilador sabe onde na memória procurar esse valor. Isso significa que podemos nos concentrar no uso de objetos para armazenar e recuperar valores e não ter que nos preocupar com o local da memória em que eles estão sendo colocados.")]),a._v(" "),s("p",[a._v("Objetos podem ser nomeados ou não nomeados. Um objeto nomeado é chamado de variável e o nome do objeto é chamado de identificador. Em nossos programas, a maioria dos objetos que criamos serão variáveis.")]),a._v(" "),s("h1",{attrs:{id:"tipos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tipos"}},[a._v("#")]),a._v(" Tipos")]),a._v(" "),s("ul",[s("li",[a._v("CPP é uma linguagem fortemente tipada:")])]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("Tipos")]),a._v(" "),s("th",{staticStyle:{"text-align":"center"}},[a._v("Características")]),a._v(" "),s("th",{staticStyle:{"text-align":"right"}},[a._v("Exemplos")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[a._v("void")]),a._v(" "),s("td",{staticStyle:{"text-align":"center"}},[a._v("não é associado a nenhum tipo de dado")]),a._v(" "),s("td",{staticStyle:{"text-align":"right"}},[a._v("Tipo incompleto")])]),a._v(" "),s("tr",[s("td",[a._v("int")]),a._v(" "),s("td",{staticStyle:{"text-align":"center"}},[a._v("número inteiro")]),a._v(" "),s("td",{staticStyle:{"text-align":"right"}},[a._v("1, 2, 3, 6, -2")])]),a._v(" "),s("tr",[s("td",[a._v("float")]),a._v(" "),s("td",{staticStyle:{"text-align":"center"}},[a._v("número fracionário (range curto)")]),a._v(" "),s("td",{staticStyle:{"text-align":"right"}},[a._v("2.34f, 23.544f, 3.1f")])]),a._v(" "),s("tr",[s("td",[a._v("double")]),a._v(" "),s("td",{staticStyle:{"text-align":"center"}},[a._v("número fracionário (range longo)")]),a._v(" "),s("td",{staticStyle:{"text-align":"right"}},[a._v("2.343223232322321")])]),a._v(" "),s("tr",[s("td",[a._v("char")]),a._v(" "),s("td",{staticStyle:{"text-align":"center"}},[a._v("caractere")]),a._v(" "),s("td",{staticStyle:{"text-align":"right"}},[a._v("'c', 'A', ' '")])]),a._v(" "),s("tr",[s("td",[a._v("bool")]),a._v(" "),s("td",{staticStyle:{"text-align":"center"}},[a._v("booleano")]),a._v(" "),s("td",{staticStyle:{"text-align":"right"}},[a._v("true, false")])])])]),a._v(" "),s("p",[a._v("Existem mais tipos, mas no momento vamos trabalhar apenas com estes.")]),a._v(" "),s("p",[a._v("Para criar uma variável, usamos um tipo especial de declaração chamado de definição")]),a._v(" "),s("p",[a._v("Veja um exemplo de como definir uma variável do tipo "),s("code",[a._v("int")]),a._v("chamada "),s("code",[a._v("inteiro")]),a._v(":")]),a._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" inteiro"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("Também podemos criar a variável já com um valor,no caso o valor "),s("code",[a._v("5")])]),a._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" inteiro "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Como vimos na tabela acima, int aceita números inteiros, então 5 poderia ser -212, 40242, etc...")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("ul",[s("li",[a._v("Nesse caso, estamos atribuindo pelo operador "),s("code",[a._v("=")]),a._v(" o valor de "),s("code",[a._v("5")]),a._v(" para a nossa variável chamada "),s("code",[a._v("inteiro")]),a._v(" do tipo "),s("code",[a._v("int")])])]),a._v(" "),s("p",[a._v("Em tempo de compilação, quando o compilador vê esta declaração, ele faz uma nota para si mesmo que estamos definindo uma variável, dando a ela o nome "),s("code",[a._v("inteiro")]),a._v(", e que é do tipo "),s("code",[a._v("int")]),a._v(" (mais em tipos em um momento). Desse ponto em diante (com algumas limitações sobre as quais falaremos em uma lição futura), sempre que o compilador vir o identificador "),s("code",[a._v("inteiro")]),a._v(", saberá que estamos fazendo referência a essa variável.")]),a._v(" "),s("p",[a._v("Quando o programa é executado (chamado runtime), a variável será instanciada. A instanciação é uma palavra sofisticada que significa que o objeto será criado e atribuído a um endereço de memória. As variáveis devem ser instanciadas antes de poderem ser usadas para armazenar valores. Por exemplo, digamos que a variável "),s("code",[a._v("inteiro")]),a._v(" é instanciada no local da memória 23. Sempre que o programa usar a variável "),s("code",[a._v("inteiro")]),a._v(", ele acessará o valor no local da memória 23. Um objeto instanciado às vezes também é chamado de instância. Na seção de ponteiros iremos aprender a manipular diretamente pelo endereço de memória.")]),a._v(" "),s("h1",{attrs:{id:"comentarios"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#comentarios"}},[a._v("#")]),a._v(" Comentários")]),a._v(" "),s("ul",[s("li",[a._v("Podemos escrever conteúdo no nosso código apenas para visualização utlizando "),s("code",[a._v("//")]),a._v(" e "),s("code",[a._v("/* */")])])]),a._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" numero "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// variavel numero de tipo inteiro que recebe o valor '3'")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/*\n    Podemos também comentar trechos de código\n    que não quisermos utilizar em um\n    determinado momento\n    */")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("ul",[s("li",[a._v("Exemplos de declaração de variáveis e utilizações gerais:")])]),a._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[a._v("#"),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[a._v("include")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("<iostream>")])]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/*|--------------------------------------|\n     *|                                      |\n     *|           He4rt Developers           |\n     *|                                      |\n     *|--------------------------------------|\n     */")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" inteiro "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("char")]),a._v(" caractere "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'a'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("float")]),a._v(" fracionario "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5.2f")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("bool")]),a._v(" booleano "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" inteiro_vazio"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    std"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v("cout "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),a._v(" inteiro "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),a._v(" caractere "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),a._v(" fracionario "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),a._v(" std"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v("endl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Exibição: 5a5.2")]),a._v("\n    std"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v("cout "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),a._v(" inteiro "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('" "')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),a._v(" caractere "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('" "')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),a._v(" fracionario "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),a._v(" std"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v("endl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Exibição: 5 a 5.2")]),a._v("\n\n    std"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v("cout "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),a._v(" inteiro_vazio "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),a._v(" std"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v("endl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Exibição: 0")]),a._v("\n\n    std"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v("cout "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),a._v(" booleano "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),a._v(" std"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v("endl "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Exibição: true")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v('// É possivel quebrar linha também com a string "\\n"')]),a._v("\n    std"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v("cout "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),a._v(" inteiro "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"\\n"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),a._v(" caractere "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"\\n"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),a._v(" fracionario "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"\\n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h1",{attrs:{id:"curiosidades"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#curiosidades"}},[a._v("#")]),a._v(" Curiosidades")]),a._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/*|--------------------------------------|\n     *|                                      |\n     *|           He4rt Developers           |\n     *|                                      |\n     *|--------------------------------------|\n     */")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Correto")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Errado")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("double")]),a._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Errado")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("double")]),a._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Correto")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Recomendados utilizar este padrão:")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("double")]),a._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n")])])]),s("h1",{attrs:{id:"entrada-de-dados-com-std-cin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#entrada-de-dados-com-std-cin"}},[a._v("#")]),a._v(" Entrada de Dados com "),s("code",[a._v("std::cin")])]),a._v(" "),s("p",[a._v("Agora iremos falar do "),s("code",[a._v("std::cin")]),a._v(" da biblioteca "),s("code",[a._v("<iostream>")]),a._v(", ela permite a entrada de dados,sendo sua sintaxe parecida com a do "),s("code",[a._v("std::cout")])]),a._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[a._v("std"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v("cin "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("variavel"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("Note que como estamos entrando com dados, temos que indicar pelo operador "),s("code",[a._v(">>")]),a._v(", sendo o inverso do operador de saída "),s("code",[a._v("std::cout")]),a._v(" que utilizamos "),s("code",[a._v("<<")]),a._v(".")]),a._v(" "),s("h1",{attrs:{id:"exemplos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#exemplos"}},[a._v("#")]),a._v(" Exemplos")]),a._v(" "),s("ul",[s("li",[a._v("Entrada e saída de dados de um determinado aluno")])]),a._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[a._v("#"),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[a._v("include")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("<iostream>")])]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" idade"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Declarando a idade do aluno")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Saida de dados, perguntando para o utilizador do programa a idade do aluno")]),a._v("\n    std"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v("cout "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Digite a idade do aluno: "')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),a._v(" std"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v("endl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//Entrada de dados com o nome do aluno")]),a._v("\n    std"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v("cin "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" idade"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Entrada de dados para a variável idade,ou seja,o que o utilizador digitar irá ir para o inteiro `idade`")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Saida de dados de uma string e em sequência a idade do aluno")]),a._v("\n    std"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v("cout "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"A idade do aluno e: "')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),a._v(" idade "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),a._v(" std"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v("endl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n")])])]),s("ul",[s("li",[s("p",[a._v("Lembrando que "),s("code",[a._v('std::cout << "Digite a idade do aluno: " << std::endl;')]),a._v(" é apenas visual para a interação de programa-usuário.")])]),a._v(" "),s("li",[s("p",[a._v("Existem outras formas de inicialização:")])])]),a._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[a._v("#"),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[a._v("include")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("<iostream>")])]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/*|--------------------------------------|\n     *|                                      |\n     *|           He4rt Developers           |\n     *|                                      |\n     *|--------------------------------------|\n     */")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//Tipos de inicialização")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" A "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("6")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Inicialização por cópia")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("b")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("7")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("B")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("8")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Inicialização direta")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("9")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" C"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Inicialização uniforme")]),a._v("\n\n    std"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v("cout "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),a._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),a._v(" std"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v("endl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    std"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v("cout "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),a._v(" A "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),a._v(" std"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v("endl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    std"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v("cout "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),a._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),a._v(" std"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v("endl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    std"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v("cout "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),a._v(" B "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),a._v(" std"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v("endl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    std"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v("cout "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),a._v(" c "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),a._v(" std"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v("endl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    std"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v("cout "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),a._v(" C "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),a._v(" std"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v("endl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("b")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    std"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v("cout "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),a._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('" "')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),a._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),a._v(" std"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v("endl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Saída: 0 5")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);