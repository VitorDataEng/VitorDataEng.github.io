let transitionTime = 5000;  // Tempo em milissegundos para a animação completar (5 segundos)
let gradientStopTwo = '#987fb1'; //'#663399';  // Exemplo de cores do gradiente
let gradientStopOne = '#b9a7cb';  // Exemplo de cores do gradiente

let angle = 180;  // Ângulo do gradiente
let intervalFrame;
let currentPct = 0;
let elapsed = 0;

// Função de exemplo para calcular a cor com base na porcentagem
function getColor(percentage) {
    // Cores de início e fim para o gradiente
    let endColor = [152, 127, 177];//[102, 51, 153];  // #663399
    let startColor = [185, 167, 203];    // #b9a7cb

    // Calcular as cores intermediárias com base na porcentagem
    let r = Math.round(startColor[0] + (endColor[0] - startColor[0]) * (percentage / 100));
    let g = Math.round(startColor[1] + (endColor[1] - startColor[1]) * (percentage / 100));
    let b = Math.round(startColor[2] + (endColor[2] - startColor[2]) * (percentage / 100));

    // Converter para formato hexadecimal
    let colorHex = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;

    return colorHex;
}

const animateGradient = function () {
    if (intervalFrame === undefined) {
        intervalFrame = setInterval(() => {
            let time = transitionTime / 1000;  // Tempo em segundos
            let numberOfFrames = time * 60;  // 60 frames por segundo

            // Adiciona 1 a elapsed
            elapsed += 1;

            // Calcula a porcentagem atual
            currentPct = Math.min((elapsed / numberOfFrames) * 100, 100);

            // Calcula as cores atuais com base na porcentagem
            let colorOne = getColor(currentPct);
            let colorTwo = getColor(currentPct);

            // Gera a string de gradiente CSS
            let generateGradient = `linear-gradient(to bottom, ${colorOne}, ${colorTwo})`;

            // Aplica ao background do elemento com a classe "container"
            document.querySelector('.container').style.backgroundImage = generateGradient;

            // Termina o intervalo quando a animação estiver completa
            if (currentPct === 100) {
                clearInterval(intervalFrame);
                intervalFrame = undefined;
                elapsed = 0;  // Reseta elapsed para futuras animações
                // Chama a função novamente para iniciar uma nova animação
                animateGradient();
            }
        }, 16.667); // 60 frames por segundo
    }
};

// Inicia a animação quando a página é carregada
window.addEventListener('load', animateGradient);