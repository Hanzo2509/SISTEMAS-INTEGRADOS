// Obtén todos los conjuntos de menús y contenidos
const tabSets = document.querySelectorAll('.tab-pane');

tabSets.forEach(tabSet => {
    const targets = tabSet.querySelectorAll('[data-target]');
    const content = tabSet.querySelectorAll('[data-content]');

    targets.forEach(target => {
        target.addEventListener('click', () => {
            // Desactiva todas las pestañas del conjunto actual
            content.forEach(c => {
                c.classList.remove('active');
            });

            // Activa la pestaña específica del conjunto actual
            const t = tabSet.querySelector(target.dataset.target);
            t.classList.add('active');
        });
    });
});
