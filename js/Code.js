const accessCode1 = "VARIÁVEL";
const accessCode2 = "FUNÇÃO";
const accessCode3 = "BANCO DE DADOS";

function clues() {
  fill("white");
  textSize(15);
  fill("lightblue");
  text("Dica: Sempre mudando, não constante!", 100, 70);

  // Adicione código para exibir as outras duas perguntas.
  fill("white");
  textSize(15);
  fill("lightblue");
  text("Dica: Executa varias instruções!", width-300, 80*2);

  fill("white");
  textSize(15);
  fill("lightblue");
  text("Dica: Guarda valores mesmo enquanto \no programa não está executando!", 100, 80*3);
}
