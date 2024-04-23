document.querySelectorAll('.read-more').forEach(item => {
    item.addEventListener('click', event => {
        const kotak = event.target.closest('.kotak');
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
                    <ul>
                        <li><strong>Desain Responsif:</strong> Meningkatnya penggunaan perangkat seluler mendorong pentingnya desain responsif untuk memastikan pengalaman pengguna yang optimal di berbagai perangkat.</li>
                        <li><strong>Tipografi Kreatif:</strong> Penggunaan tipografi yang unik dan kreatif menjadi tren, membantu menciptakan identitas merek yang kuat melalui pilihan tipografi yang unik.</li>
                        <li><strong>Desain Minimalis:</strong> Konsep kesederhanaan dan penggunaan ruang negatif semakin diminati untuk menciptakan visual yang kuat dan efektif.</li>
                        <li><strong>Animasi Grafis:</strong> Penggunaan animasi grafis semakin populer dalam desain web dan media sosial, membawa konten menjadi hidup dan menarik perhatian pengguna.</li>
                    </ul>
                `;
            } else if (kotak.classList.contains('mengenal-design-thinking')) {
                newMoreContent.innerHTML = `
                    <h2>Mengenal Design Thinking</h2>
                    <p>
                        Design thinking adalah pendekatan kreatif untuk memecahkan masalah dan mengembangkan solusi inovatif. Konsep dasar design thinking meliputi:
                    </p>
                    <ul>
                        <li><strong>Empati:</strong> Memahami kebutuhan dan perspektif pengguna adalah langkah penting, memungkinkan identifikasi masalah yang sebenarnya.</li>
                        <li><strong>Definisi Masalah:</strong> Merumuskan masalah dengan jelas untuk mengidentifikasi tantangan dan tujuan yang ingin dicapai.</li>
                        <li><strong>Ideasi:</strong> Generasi ide-ide kreatif dan solusi alternatif tanpa batasan untuk memecahkan masalah yang diidentifikasi.</li>
                        <li><strong>Prototyping:</strong> Membangun prototipe sederhana untuk menguji ide secara cepat dan mendapatkan umpan balik dari pengguna.</li>
                        <li><strong>Pengujian:</strong> Mengujicobakan prototipe dengan pengguna akhir untuk mengevaluasi keefektifan solusi dan memastikan bahwa solusi tersebut memenuhi kebutuhan dan harapan pengguna.</li>
                    </ul>
                `;
            }
            kotak.appendChild(newMoreContent);
        } else {
            moreContent.remove();
        }

        event.preventDefault(); 
    });
});
