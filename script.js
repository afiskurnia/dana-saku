const transactionForm = document.getElementById('transactionForm');
const toast = document.getElementById('toast');

function showToast() {
    toast.classList.add('show');
    setTimeout(function() {
        toast.classList.remove('show');
    }, 3000);
}
transactionForm.addEventListener('submit', function(event) {
    // Menahan reload halaman
    event.preventDefault(); 
    showToast();
});
const titleInput = document.getElementById('title');
const amountInput = document.getElementById('amount');
const transactionContainer = document.getElementById('transactionContainer');


transactionForm.addEventListener('submit', function(event) {
    // mencegah halaman reload otomatis
    event.preventDefault();

    // tampilkan pesan uji coba di Console Browser
    console.log("Form berhasil dikirim!");
});