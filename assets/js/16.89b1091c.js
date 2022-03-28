(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{398:function(a,e,s){"use strict";s.r(e);var t=s(42),o=Object(t.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"_13-templates"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_13-templates"}},[a._v("#")]),a._v(" 13 - Templates")]),a._v(" "),s("p",[a._v("Nos capítulos anteriores, você aprendeu a escrever funções que ajudam a tornar os programas mais fáceis de escrever, mais seguros e mais fáceis de manter. Embora funções sejam ferramentas poderosas e flexíveis para uma programação eficaz, em certos casos, elas também podem ser um pouco limitantes devido ao requisito do C++ de que você especifique o tipo de todos os parâmetros.")]),a._v(" "),s("p",[a._v("Por exemplo, digamos que você queira escrever uma função para calcular a multiplicação de dois números. Você pode fazer assim:")]),a._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[a._v("#"),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[a._v("include")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("<iostream>")]),a._v(" ")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("multiplicacao")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("char")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" \n    std"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v("cout "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("multiplicacao")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),a._v(" std"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v("endl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" \n")])])]),s("p",[a._v("Essa função funcionaria muito bem - para números inteiros. O que acontece depois quando você percebe que sua função max () precisa trabalhar com duplas? Tradicionalmente, a resposta seria sobrecarregar a função multiplicacao() e criar uma nova versão que funcione com duplos:")]),a._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("double")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("multiplicacao")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("double")]),a._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("double")]),a._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("Observe que o código para a implementação da versão double de multiplicação() é exatamente o mesmo da versão int de multiplicação().De fato, essa implementação funcionaria para todos os tipos de tipos diferentes: caracteres, entradas, double's, etc.No entanto, como o C++ exige que você faça tipos específicos de suas variáveis, você fica impedido de escrever uma função para cada tipo que deseja usar.")]),a._v(" "),s("p",[a._v("Ter que especificar diferentes tipos da mesma função em que a única coisa que muda é o tipo dos parâmetros pode se tornar uma dor de cabeça de manutenção e perda de tempo, além de violar as diretrizes gerais de programação de que o código duplicado deve ser minimizado tanto quanto possível. Não seria legal se pudéssemos escrever uma versão do multiplicação () capaz de trabalhar com parâmetros de QUALQUER tipo?")]),a._v(" "),s("p",[a._v("Bem-vindo ao mundo dos "),s("code",[a._v("templates")]),a._v(".")]),a._v(" "),s("p",[a._v("O que é um template de função?")]),a._v(" "),s("p",[a._v('Se você procurar a palavra modelo(template) no dicionário, encontrará uma definição semelhante à seguinte: "um modelo é um modelo que serve como padrão para criar objetos semelhantes". Um tipo de modelo muito fácil de entender é o de um estêncil. Um estêncil é um objeto (por exemplo, um pedaço de papelão) com uma forma recortada (por exemplo, a letra J). Ao colocar o estêncil em cima de outro objeto e depois pintar com tinta pelo buraco, você pode produzir rapidamente padrões estampados em muitas cores diferentes! Observe que você só precisa criar um determinado estêncil uma vez - você pode usá-lo quantas vezes quiser, para criar padrões estampados nas cores que desejar. Melhor ainda, você não precisa decidir a cor do padrão estampado que deseja criar até decidir usar o estêncil.')]),a._v(" "),s("p",[a._v("No C++, modelos de função são funções que servem como padrão para criar outras funções semelhantes. A idéia básica por trás dos modelos de função é criar uma função sem precisar especificar o (s) tipo (s) exato (s) de algumas ou de todas as variáveis. Em vez disso, definimos a função usando tipos de espaço reservado, chamados parâmetros de tipo de modelo. Depois que criamos uma função usando esses tipos de espaços reservados, criamos efetivamente um “estêncil de função”.")]),a._v(" "),s("p",[a._v('Quando você chama uma função de modelo, o compilador “imprime” uma cópia do modelo, substituindo os tipos de espaços reservados pelos tipos de variáveis ​​reais dos parâmetros em sua chamada de função! Usando essa metodologia, o compilador pode criar vários "sabores" de uma função a partir de um modelo! Vamos dar uma olhada neste processo em mais detalhes na próxima lição.')]),a._v(" "),s("p",[a._v("Criando modelos de função em C++")]),a._v(" "),s("p",[a._v("Neste ponto, você provavelmente está se perguntando como criar templates de função em C++. Acontece que não é tão difícil.")]),a._v(" "),s("p",[a._v("Vamos dar uma olhada na versão int de multiplicacao() novamente:")]),a._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("multiplicacao")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("Observe que existem três locais onde tipos específicos são usados: os parâmetros x, y e o valor de retorno especificam que eles devem ser números inteiros. Para criar um modelo de função, substituiremos esses tipos específicos por tipos de espaço reservado. Nesse caso, como temos apenas um tipo que precisa ser substituído (int), precisamos apenas de um parâmetro de tipo de modelo.")]),a._v(" "),s("p",[a._v('Você pode nomear seus tipos de marcadores como quase qualquer coisa que desejar, desde que não seja uma palavra reservada. No entanto, em C++, é habitual nomear seus tipos de modelo com a letra T (abreviação de "Type").')]),a._v(" "),s("p",[a._v("Aqui está nossa nova função com um tipo de espaço reservado:")]),a._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[a._v("T "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("multiplicacao")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("T a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" T b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v('Este é um bom começo - no entanto, não será compilado porque o compilador não sabe o que é "T"!')]),a._v(" "),s("p",[a._v("Para fazer isso funcionar, precisamos dizer ao compilador duas coisas: primeiro, que essa é uma definição de modelo e, segundo, que T é um tipo de espaço reservado. Podemos fazer as duas coisas em uma linha, usando o que é chamado de declaração de parâmetro de modelo:")]),a._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("template")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("typename")]),a._v(" T"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\nT "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("multiplicacao")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("T a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" T b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("Acredite ou não, é tudo o que precisamos. Isso irá compilar!")]),a._v(" "),s("p",[a._v('Agora, vamos dar uma olhada um pouco mais de perto na declaração de parâmetro do modelo. Começamos com o modelo de palavra-chave - isso informa ao compilador que o que se segue será uma lista de parâmetros do modelo. Colocamos todos os nossos parâmetros dentro de colchetes angulares (<>). Para criar um parâmetro de tipo de modelo, use a palavra-chave typename ou classe. Não há diferença entre as duas palavras-chave nesse contexto; portanto, você deve usar as suas. Observe que, se você usar a palavra-chave class, o tipo passado não precisará ser uma classe (pode ser uma variável fundamental, ponteiro ou qualquer outra coisa que corresponda). Então você nomeia seu tipo (geralmente "T").')]),a._v(" "),s("p",[a._v("Se a função de modelo usar vários parâmetros de tipo de modelo, eles poderão ser separados por vírgulas:")]),a._v(" "),s("p",[s("code",[a._v("template <typename T1, typename T2>")])]),a._v(" "),s("p",[a._v("Usando modelos de função")]),a._v(" "),s("p",[a._v("O uso de um modelo de função é extremamente simples - você pode usá-lo como qualquer outra função. Aqui está um programa completo usando nossa função de modelo:")]),a._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[a._v("#"),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[a._v("include")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("<iostream>")])]),a._v("\n \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("template")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("typename")]),a._v(" T"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\nT "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("maior")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("T a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("T b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Retornar o maior valor")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("?")]),a._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("char")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("maior")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("7")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Retorna 7")]),a._v("\n    std"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v("cout "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),a._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),a._v(" std"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v("endl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("double")]),a._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("maior")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("6.34")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("25.001")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// returns 25.001")]),a._v("\n    std"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v("cout "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),a._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),a._v(" std"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v("endl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("char")]),a._v(" c "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("maior")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'a'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'6'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// retorna 'a'")]),a._v("\n    std"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v("cout "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),a._v(" c "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),a._v(" std"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v("endl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("Como você pode ver, as funções de modelo podem economizar muito tempo, porque você só precisa escrever uma função e funcionará com muitos tipos diferentes. Depois de se acostumar a escrever modelos de funções, você descobrirá que eles não demoram mais para escrever do que funções com tipos reais. As funções de modelo reduzem a manutenção do código, porque o código duplicado é reduzido significativamente. E, finalmente, as funções de modelo podem ser mais seguras, porque não há necessidade de copiar funções e alterar tipos manualmente sempre que você precisar que a função funcione com um novo tipo!")]),a._v(" "),s("p",[a._v("As funções de modelo têm algumas desvantagens, e seríamos negligentes em não mencioná-las. Primeiro, alguns compiladores mais antigos não têm muito bom suporte a modelos. No entanto, essa desvantagem não é mais o problema que costumava ser. Segundo, as funções de modelo geralmente produzem mensagens de erro de aparência maluca que são muito mais difíceis de decifrar do que as das funções regulares (veremos um exemplo disso na próxima lição). Terceiro, as funções de modelo podem aumentar o tempo de compilação e o tamanho do código, pois um único modelo pode ser “realizado” e recompilado em muitos arquivos (existem maneiras de solucionar esse problema).")]),a._v(" "),s("p",[a._v("No entanto, essas desvantagens são relativamente pequenas em comparação com os modelos de poder e flexibilidade que você traz ao seu kit de ferramentas de programação!")])])}),[],!1,null,null,null);e.default=o.exports}}]);