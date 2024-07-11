document.addEventListener('DOMContentLoaded', () => {
    // Animasi saat section masuk ke dalam viewport
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        threshold: 0.1
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Penanganan pengiriman form
    const form = document.querySelector('form');
    const confirmationMessage = document.getElementById('confirmation-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Menghentikan pengiriman form (dalam contoh ini, hanya simulasi)

        // Simulasi pengiriman berhasil
        setTimeout(() => {
            form.reset(); // Reset form jika ingin melakukan submit yang sebenarnya
            confirmationMessage.classList.remove('hidden');
            setTimeout(() => {
                confirmationMessage.classList.add('hidden');
            }, 3000); // Sembunyikan pesan konfirmasi setelah 3 detik
        }, 1000); // Simulasi pengiriman selama 1 detik (1000 milidetik)
    });
});
