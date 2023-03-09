   // Memunculkan form saat button edit di klik
const editBiodataBtn = document.getElementById('edit-biodata-btn');
const biodataForm = document.querySelector('.form');

editBiodataBtn.addEventListener('click', function() {
    // Ubah kondisi menjadi selalu memunculkan form
    biodataForm.style.display = 'block';
});

// Memunculkan data pada heading ke dalam form saat button edit di klik
function editBiodata() {
    namaInput.value = namaTeks.textContent;
    roleInput.value = roleTeks.textContent;
    availabilityInput.value = availabilityTeks.textContent;
    hobiInput.value = hobiTeks.textContent;
    alamatInput.value = alamatTeks.textContent;
    emailInput.value = emailTeks.textContent;

    // Change form submit button text
    submitButton.textContent = 'Update';

    // Show form and hide biodata heading
    form.style.display = 'block';
    biodataHeading.style.display = 'none';
}

// Mengambil elemen form dan input
const form = document.querySelector('form');
const namaInput = document.querySelector('#nama-input');
const roleInput = document.querySelector('#role-input');
const availabilityInput = document.querySelector('#availability-input');
const hobiInput = document.querySelector('#hobi-input');
const alamatInput = document.querySelector('#alamat-input');
const emailInput = document.querySelector('input[type="email"]');

// Mengambil elemen teks yang akan diganti
const namaTeks = document.querySelector('#nama');
const roleTeks = document.querySelector('#role');
const availabilityTeks = document.querySelector('#availability');
const hobiTeks = document.querySelector('#hobi');
const alamatTeks = document.querySelector('#alamat');
const emailTeks = document.querySelector('#email');

// Event listener untuk form submit
form.addEventListener('submit', (event) => {
    event.preventDefault(); // mencegah halaman direfresh saat form disubmit

    // Mengganti teks dengan nilai input dari form
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
    // Ubah kembali teks pada button submit
    submitButton.textContent = 'Simpan';
});