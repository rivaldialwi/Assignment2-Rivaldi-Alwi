//Untuk menyembunyikan form saat web baru di buka
let forms = document.querySelectorAll('.form');
for (let i = 0; i < forms.length; i++) {
  forms[i].style.display = 'none';
}

// Membuat variabel global untuk memunculkan form saat button edit di klik
const editBiodataBtn = document.querySelector('#edit-biodata-btn');
const cancelBiodataBtn = document.querySelector('#cancel-biodata-btn');
const biodataForm = document.querySelector('.form');

// untuk memunculkan form saat button edit di klik
editBiodataBtn.addEventListener('click', function() {
biodataForm.style.display = 'block';
});

// Membuat variabel global untuk mengambil data heading untuk di tampilkan di form dari id html yang di buat
const form = document.querySelector('form');
const namaInput = document.querySelector('#nama-input');
const roleInput = document.querySelector('#role-input');
const availabilityInput = document.querySelector('#availability-input');
const hobiInput = document.querySelector('#hobi-input');
const alamatInput = document.querySelector('#alamat-input');
const emailInput = document.querySelector('#email-input');

// Membuat variabel global untuk mengambil data pada heading dari id html yang di buat
const namaTeks = document.querySelector('#nama');
const roleTeks = document.querySelector('#role');
const availabilityTeks = document.querySelector('#availability');
const hobiTeks = document.querySelector('#hobi');
const alamatTeks = document.querySelector('#alamat');
const emailTeks = document.querySelector('#email');

// Memunculkan data pada heading ke dalam form saat button edit di klik
function editBiodata() {
    namaInput.value = namaTeks.textContent;
    roleInput.value = roleTeks.textContent;
    availabilityInput.value = availabilityTeks.textContent;
    hobiInput.value = hobiTeks.textContent;
    alamatInput.value = alamatTeks.textContent;
    emailInput.value = emailTeks.textContent;
}

// Event listener untuk mengaktifkan button submit
form.addEventListener('submit', (event) => {
    event.preventDefault(); // mencegah halaman direfresh saat form disubmit

    // Merubah data heading sesuai inputan yg di masukan di form
    namaTeks.textContent = namaInput.value;
    roleTeks.textContent = roleInput.value;
    availabilityTeks.textContent = availabilityInput.value;
    hobiTeks.textContent = hobiInput.value;
    alamatTeks.textContent = alamatInput.value;
    emailTeks.textContent = emailInput.value;

    // Mengosongkan input form
    namaInput.value = '';
    roleInput.value = '';
    availabilityInput.value = '';
    hobiInput.value = '';
    alamatInput.value = '';
    emailInput.value = '';

    // Sembunyikan form setelah di-submit
    form.style.display = 'none';
    biodataHeading.style.display = 'block';
});

// Mengubah kondisi agar button edit dapat mengeditan berkali kali
editBiodataBtn.addEventListener('click', () => {
    form.style.display = 'block';
    biodataHeading.style.display = 'none';
});

// Untuk cancel edit data 
cancelBiodataBtn.addEventListener('click', () => {
    form.style.display = 'none';
    biodataHeading.style.display = 'block';
})