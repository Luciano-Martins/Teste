


// dados de faturamento mensal por estado
const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
  };
  
  // calcular o valor total mensal
  let total = 0;
  for (const estado in faturamento) {
    total += faturamento[estado];
  }
  
  // calcular o percentual de representação de cada estado
  for (const estado in faturamento) {
    const percentual = (faturamento[estado] / total) * 100;
    console.log(`O estado ${estado} representa ${percentual.toFixed(2)}% do faturamento mensal total.`);
  }