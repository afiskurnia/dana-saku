const transactionForm = document.getElementById('transactionForm');
const toast = document.getElementById('toast');

// 2. Buat fungsi khusus untuk memunculkan Toast
function showToast() {
    // Tambahkan class 'show' ke elemen toast
    toast.classList.add('show');
    
    // Sembunyikan kembali class 'show' setelah 3000 ms (3 detik)
    setTimeout(function() {
        toast.classList.remove('show');
    }, 3000);
}
transactionForm.addEventListener('submit', function(event) {
    // Menahan reload halaman
    event.preventDefault(); 
    showToast();
    // alert("Transaksi berhasil ditambahkan!");
    
    // // Uji coba output
    // console.log("Form berhasil dikirim!");
});
const titleInput = document.getElementById('title');
const amountInput = document.getElementById('amount');
const transactionContainer = document.getElementById('transactionContainer');


transactionForm.addEventListener('submit', function(event) {
    // 1. Cegah halaman reload otomatis
    event.preventDefault();

    // 2. Tampilkan pesan uji coba di Console Browser
    console.log("Form berhasil dikirim!");
});