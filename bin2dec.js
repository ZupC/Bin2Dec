/* eslint-disable linebreak-style */
const bin2dec = {
  calculoDecimal(valorBinario) {
    const digitosBinario = Array.from(String(valorBinario), Number);
    let decimal = 0;
    for (let i = 0; i < valorBinario.length; i += 1) {
      decimal = decimal * 2 + digitosBinario[i];
    }
    document.getElementById('decimal').textContent = decimal;
  },
  init() {
    const binario = document.getElementById('binario');
    const mensagemErro = document.getElementById('numeroInvalido');
    binario.addEventListener('keypress', (event) => {
      if (event.key === '0' || event.key === '1' || event.key === 'Backspace') {
        mensagemErro.setAttribute('hidden', true);
      } else {
        event.preventDefault();
        mensagemErro.removeAttribute('hidden');
      }
    });
    binario.addEventListener('keyup', (event) => {
      if (event.key === '0' || event.key === '1' || event.key === 'Backspace') {
        bin2dec.calculoDecimal(event.target.value);
      }
    });
  },
};
bin2dec.init();
