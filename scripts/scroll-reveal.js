// Revela os blocos de descrição com uma transição suave conforme o usuário rola a página.
document.addEventListener("DOMContentLoaded", () => {
    const blocos = document.querySelectorAll(".main__descricao__text");

    const observer = new IntersectionObserver(
        (entradas, obs) => {
            entradas.forEach((entrada) => {
                if (entrada.isIntersecting) {
                    entrada.target.classList.add("main__descricao__text--visible");
                    obs.unobserve(entrada.target); // anima apenas uma vez
                }
            });
        },
        {
            threshold: 0.15, // ativa quando ~15% do bloco estiver visível
            rootMargin: "0px 0px -60px 0px", // pequeno atraso antes de aparecer
        }
    );

    blocos.forEach((bloco) => observer.observe(bloco));
});
