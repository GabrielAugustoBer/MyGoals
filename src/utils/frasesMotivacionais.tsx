const frasesMotivacionais = [
  "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
  "Acredite em você mesmo e tudo será possível.",
  "O que você faz hoje pode melhorar todos os amanhãs.",
  "A persistência é o caminho do êxito.",
  "Não desista. Geralmente é a última chave do chaveiro que abre a porta.",
  "Quanto maior o obstáculo, maior a glória em superá-lo.",
  "A felicidade está nas pequenas coisas.",
  "O único lugar onde o sucesso vem antes do trabalho é no dicionário.",
  "A vida é 10% do que acontece comigo e 90% de como eu reajo a isso.",
  "O segredo para conseguir é começar.",
];

const FrasesMotivacionais = {
  getFraseMotivacional: function() {
    return frasesMotivacionais[Math.floor(Math.random() * frasesMotivacionais.length)];
  }
};

export default FrasesMotivacionais;
