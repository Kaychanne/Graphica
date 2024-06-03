document.querySelectorAll('.read-more').forEach(item => {
    item.addEventListener('click', event => {
        const kotak = event.currentTarget.closest('.kotak'); // Menggunakan event.currentTarget
        const moreContent = kotak.querySelector('.more-content');
        if (!moreContent) {
            const newMoreContent = document.createElement('div');
            newMoreContent.classList.add('more-content');
            if (kotak.classList.contains('apa-itu-desain-grafis')) {
                newMoreContent.innerHTML = `
                    <h2>Apa itu Desain Grafis?</h2>
                    <p>
                        Desain grafis adalah seni atau keterampilan dalam menyampaikan pesan visual menggunakan elemen-elemen seperti gambar, teks, dan grafik. Tujuan utama dari desain grafis adalah untuk menciptakan komunikasi visual yang efektif dan menarik untuk memengaruhi perilaku atau pendapat orang.
                    </p>
                `;
            } else if (kotak.classList.contains('tren-desain')) {
                newMoreContent.innerHTML = `
                    <h2>Tren Desain Grafis Terbaru</h2>
                    <p>
                        Tren dalam desain grafis terus berkembang seiring dengan perubahan teknologi dan selera pasar. Beberapa tren terbaru meliputi:
                    </p>
                    <!-- Konten tren desain -->
                `;
            } else if (kotak.classList.contains('mengenal-design-thinking')) {
                newMoreContent.innerHTML = `
                    <h2>Mengenal Design Thinking</h2>
                    <p>
                        Design thinking adalah pendekatan kreatif untuk memecahkan masalah dan mengembangkan solusi inovatif. Konsep dasar design thinking meliputi:
                    </p>
                    <!-- Konten mengenal design thinking -->
                `;
            }
            kotak.appendChild(newMoreContent);
        } else {
            moreContent.remove();
        }

        event.preventDefault(); 
    });
});
