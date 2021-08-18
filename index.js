const bin2dec = {
    calculoDecimal: function(valorBinario) {},
    init: function() {

        const binario = document.getElementById('binario');
        const mensagemErro = document.getElementById('numeroInvalido');
        binario.addEventListener('keypress', function(event) {
            if (event.key === "0" || event.key === "1" || event.key === "Backspace") {
                mensagemErro.setAttribute("hidden", true);
            } else {
                event.preventDefault();
                mensagemErro.removeAttribute("hidden");
            }
        })
        binario.addEventListener('keyup', function(event) {
            if (event.key === "0" || event.key === "1" || event.key === "Backspace") {
                bin2dec.calculoDecimal(event.target.value);
            }
        })
    }
}
bin2dec.init();