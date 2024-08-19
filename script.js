document.addEventListener('DOMContentLoaded', function() {
    const valorBasicoMovilInput = document.getElementById('valorBasicoMovil');
    const cuotaPuraInput = document.getElementById('cuotaPura');
    const mensualJuridicaInput = document.getElementById('mensualJuridica');
    const seguroVidaInput = document.getElementById('seguroVida');
    const mensualFisicaInput = document.getElementById('mensualFisica');

    valorBasicoMovilInput.addEventListener('blur', function() {
        const valorBasicoMovil = parseFloat(valorBasicoMovilInput.value);

        if (valorBasicoMovil < 34000000 || valorBasicoMovil > 66000000 || isNaN(valorBasicoMovil)) {
            alert('Por favor, ingrese un valor entre 34.000.000 y 66.000.000 de pesos argentinos.');
            valorBasicoMovilInput.value = '';
            cuotaPuraInput.value = '';
            mensualJuridicaInput.value = '';
            seguroVidaInput.value = '';
            mensualFisicaInput.value = '';
            return;
        }

        // Calcular Cuota Pura
        const cuotaPura = valorBasicoMovil / 60;
        
        // Calcular Mensual Jurídica
        const porcentaje8 = valorBasicoMovil * 0.08;
        const porcentaje21 = porcentaje8 * 0.21;
        const mensualJuridica = (valorBasicoMovil + porcentaje8 + porcentaje21) / 60;

        // Calcular Seguro de Vida
        const seguroVida = valorBasicoMovil * 0.000833;
        
        // Calcular Mensual Física
        const mensualFisica = mensualJuridica + seguroVida;

        // Mostrar resultados
        cuotaPuraInput.value = cuotaPura.toFixed(2);
        mensualJuridicaInput.value = mensualJuridica.toFixed(2);
        seguroVidaInput.value = seguroVida.toFixed(2);
        mensualFisicaInput.value = mensualFisica.toFixed(2);
    });
});
