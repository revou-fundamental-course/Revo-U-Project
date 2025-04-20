const radio = document.getElementsByName("jk");
const berat = document.getElementById("berat-badan");
const umur = document.getElementById("umur");
const tinggi = document.getElementById("tinggi-badan");

function reset() {
	for (let i = 0; i < radio.length; i++) {
		radio[i].checked = false;
	}
	berat.value = "";
	umur.value = "";
	tinggi.value = "";
	document.getElementById("section").innerHTML = `
        <div class="features-card">
            <h2 class="section-title"><i class="fas fa-star"></i> Keunggulan Fitur</h2>
            <ul class="features-list">
                <li><i class="fas fa-check-circle"></i> Menghitung berat badan</li>
                <li><i class="fas fa-check-circle"></i> Menetukan kategori berat badan ideal atau tidak</li>
                <li><i class="fas fa-check-circle"></i> Mempersiapkan program penurunan berat badan</li>
            </ul>

            <div class="disclaimer">
                <p class="disclaimer-text">Kalkulator ini hanya boleh digunakan oleh orang dewasa (wanita hamil atau menyusui tidak boleh mengandalkan pembaca BMI ini) dan tidak ada tindakan yang harus diambil berdasarkan nilainya selain konsultasi dengan orang yang memenuhi syarat seperti dokter.</p>
                <p class="disclaimer-text">Kalkulator akan memberi Anda gambaran tentang perbandingan berat badan Anda dengan nilai umum. Indeks Massa Tubuh (atau BMI) dihitung sebagai berat badan Anda (dalam kilogram) dibagi dengan kuadrat tinggi badan Anda (dalam meter) atau BMI = Kg/M<sup>2</sup></p>
            </div>
        </div>
    `;
}

function validate() {
	let check_radio = false;
	for (let i = 0; i < radio.length; i++) {
		if (radio[i].checked === true) {
			check_radio = true;
			break;
		}
	}
	let check_berat = false;
	let a = 0;
	for (let i = 0; i < berat.value.length; i++) {
		if (berat.value[i] === "0" || berat.value[i] === "1" || berat.value[i] === "2" || berat.value[i] === "3" || berat.value[i] === "4" || berat.value[i] === "5" || berat.value[i] === "6" || berat.value[i] === "7" || berat.value[i] === "8" || berat.value[i] === "9" || berat.value[i] === ".") {
			a++;
		}
	}
	if (a === berat.value.length && a !== 0) {
		check_berat = true;
	}

	let check_umur = false;
	let b = 0;
	for (let i = 0; i < umur.value.length; i++) {
		if (umur.value[i] === "0" || umur.value[i] === "1" || umur.value[i] === "2" || umur.value[i] === "3" || umur.value[i] === "4" || umur.value[i] === "5" || umur.value[i] === "6" || umur.value[i] === "7" || umur.value[i] === "8" || umur.value[i] === "9" || umur.value[i] === ".") {
			b++;
		}
	}
	if (b === umur.value.length && b !== 0) {
		check_umur = true;
	}

	let check_tinggi = false;
	let c = 0;
	for (let i = 0; i < tinggi.value.length; i++) {
		if (tinggi.value[i] === "0" || tinggi.value[i] === "1" || tinggi.value[i] === "2" || tinggi.value[i] === "3" || tinggi.value[i] === "4" || tinggi.value[i] === "5" || tinggi.value[i] === "6" || tinggi.value[i] === "7" || tinggi.value[i] === "8" || tinggi.value[i] === "9" || tinggi.value[i] === ".") {
			c++;
		}
	}
	if (c === tinggi.value.length && c !== 0) {
		check_tinggi = true;
	}

	if (check_berat && check_radio && check_tinggi && check_umur) {
		document.getElementById("error-1").innerHTML = "";
		let beratbadan = parseFloat(berat.value);
		let tinggibadan = parseFloat(tinggi.value);
		tinggibadan /= 100;
		let bmi = beratbadan / (tinggibadan * tinggibadan);
		bmi = bmi.toFixed(1);
		let inti = "";
		let inti2 = "";
		let inti3 = "";
		let inti4 = "";
		let inti5 = "";
		let inti6 = "";
		let inti7 = "";
		if (bmi < 18.5) {
			inti = "Kekurangan Berat Badan";
			inti2 = "Anda memiliki berat badan yang kurang";
			inti3 = "Hasil BMI lebih kecil dari 18.5";
			inti4 = "Anda berada dalam kategori berat badan kurang";
			inti5 = "Cara terbaik untuk menambah berat badan adalah dengan meningkatkan asupan kalori melalui makanan sehat yang kaya akan nutrisi dan melakukan latihan kekuatan untuk membangun massa otot.";
			inti6 = "Menaikkan berat badan";
			inti7 = `
                <div class="health-risks">
                    <div class="risk-title"><i class="fas fa-exclamation-triangle"></i> Beberapa penyakit yang berasal dari kekurangan berat badan</div>
                    <div class="risk-item"><i class="fas fa-dot-circle"></i> Malnutrisi</div>
                    <div class="risk-item"><i class="fas fa-dot-circle"></i> Anemia</div>
                    <div class="risk-item"><i class="fas fa-dot-circle"></i> Osteoporosis</div>
                </div>
            `;
		} else if (bmi >= 18.5 && bmi < 25) {
			inti = "Normal (ideal)";
			inti2 = "Anda memiliki berat badan normal";
			inti3 = "Hasil BMI antara 18.5 dan 24.9";
			inti4 = "Anda berada dalam kategori berat badan normal";
			inti5 = "Lanjutkan pola makan seimbang dan aktivitas fisik yang rutin untuk menjaga berat badan dan kesehatan secara keseluruhan.";
			inti6 = "Mempertahankan berat badan";
			inti7 = "";
		} else if (bmi >= 25 && bmi < 30) {
			inti = "Kelebihan berat badan";
			inti2 = "Anda memiliki berat badan berlebih";
			inti3 = "Hasil BMI antara 25 dan 29.9";
			inti4 = "Anda berada dalam kategori berat badan berlebih";
			inti5 = "Cara terbaik untuk menurunkan berat badan adalah dengan mengatur asupan kalori dan rutin berolahraga. Dianjurkan untuk menurunkan berat badan hingga mencapai batas normal.";
			inti6 = "Menurunkan berat badan";
			inti7 = `
                <div class="health-risks">
                    <div class="risk-title"><i class="fas fa-exclamation-triangle"></i> Beberapa penyakit yang berasal dari kelebihan berat badan</div>
                    <div class="risk-item"><i class="fas fa-dot-circle"></i> Diabetes</div>
                    <div class="risk-item"><i class="fas fa-dot-circle"></i> Hipertensi</div>
                    <div class="risk-item"><i class="fas fa-dot-circle"></i> Penyakit Jantung</div>
                </div>
            `;
		} else {
			inti = "Kegemukan (obesitas)";
			inti2 = "Anda memiliki berat badan yang sangat berlebih";
			inti3 = "Hasil BMI lebih besar dari 30";
			inti4 = "Anda berada dalam kategori obesitas";
			inti5 = "Cara terbaik untuk menurunkan berat badan adalah mengelola berat badan dengan pola makan sehat dan olahraga teratur sangat penting. Anda mungkin perlu berkonsultasi dengan profesional kesehatan untuk bantuan tambahan dalam menurunkan berat badan.";
			inti6 = "Menurunkan berat badan";
			inti7 = `
                <div class="health-risks">
                    <div class="risk-title"><i class="fas fa-exclamation-triangle"></i> Beberapa penyakit yang berasal dari obesitas</div>
                    <div class="risk-item"><i class="fas fa-dot-circle"></i> Diabetes tipe 2</div>
                    <div class="risk-item"><i class="fas fa-dot-circle"></i> Sleep apnea</div>
                    <div class="risk-item"><i class="fas fa-dot-circle"></i> Beberapa jenis kanker</div>
                </div>
            `;
		}
		document.getElementById("section").innerHTML = `
                <div class="features-card results-card">
                    <h2 class="section-title"><i class="fas fa-clipboard-check"></i> Hasil</h2>
                    <div class="section-2">
                        <div class="section-3">${inti}</div>
                        <div class="section-4">${bmi}</div>
                        <div class="bmi-description">${inti2}</div>
                        <button class="btn btn-primary"><i class="fas fa-download"></i> Download Hasil BMI</button>
                    </div>

                    <div class="result-details">
                        <p class="detail-item">${inti3}</p>
                        <p class="detail-item">${inti4}</p>
                        <p class="detail-item">${inti5}</p>
                        <p class="detail-item">Jika BMI anda berada dalam kategori ini maka Anda dianjurkan untuk ${inti6}</p>
                    </div>

                    <div class="section-6">
                        <button class="btn btn-primary"><i class="fas fa-user-md"></i> Konsultasi Ahli Gizi Via Aplikasi</button>
                        <button class="btn btn-primary"><i class="fas fa-clipboard-list"></i> Registrasi Online Ahli Gizi</button>
                    </div>

                    <p class="disclaimer-text">BMI tidak sepenuhnya mewakili diagnosis menyeluruh dari kesehatan tubuh dan resiko penyakit seseorang. Anda perlu konsultasi lebih lanjut mengenai resiko dan kekhawatiran Anda terkait dengan berat badan Anda.
                    </p>

                    <div class="section-8">
                        ${inti7}
                    </div>

                    <div class="section-9">
                        <button class="btn btn-primary"><i class="fas fa-stethoscope"></i> Konsultasi Dokter Via Aplikasi</button>
                        <button class="btn btn-primary"><i class="fas fa-hospital-user"></i> Registrasi Online Sekarang</button>
                    </div>
                </div>
            `;
	} else {
		document.getElementById("error-1").innerHTML = "<i class='fas fa-exclamation-circle'></i> Mohon isi dengan format yang benar (hanya angka semua)";
	}
}
