var index = 0;
var textArray = ["web programer | desaigner | mahasiswa"];

function ketik(i) {
  var currentText = textArray[index];

  if (i < currentText.length) {
    document.getElementById("text").innerHTML += currentText.charAt(i);
    i++;
    setTimeout(function () {
      ketik(i);
    }, 80);
  } else {
    setTimeout(function () {
      document.getElementById("text").innerHTML = "";
      ketik(0);
    }, 1000);
  }
}

ketik(0);
document.getElementById("navbarToggler").addEventListener("click", function () {
  var icon = document.getElementById("icon");
  icon.classList.toggle("bi-justify");
  icon.classList.toggle("bi-x-lg");
});
document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Mencegah pengiriman form default

  var email = document.getElementById("exampleInputEmail1").value;
  var message = document.getElementById("exampleFormControlTextarea1").value;

  if (email && message) {
    alert("Pesan Berhasil");
    // Anda bisa menambahkan logika lain di sini, seperti mengirim data form ke server
  } else {
    alert("Harap isi semua field");
  }
});
