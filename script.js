// Menunggu hingga seluruh konten DOM dimuat sebelum menjalankan skrip
document.addEventListener("DOMContentLoaded", () => {
  // Toggle ikon menu dan navbar untuk tampilan mobile
  const menuIcon = document.querySelector("#menu-icon");
  const navbar = document.querySelector(".navbar");

  menuIcon.onclick = () => {
    menuIcon.classList.toggle("fa-xmark"); // Mengubah ikon hamburger menjadi X
    navbar.classList.toggle("active");
  };

  // Mengatur link navigasi yang aktif berdasarkan posisi scroll
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("header nav a");

  window.onscroll = () => {
    sections.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");

      if (top >= offset && top < offset + height) {
        navLinks.forEach((links) => {
          links.classList.remove("active");
          document
            .querySelector("header nav a[href*=" + id + "]")
            .classList.add("active");
        });
      }
    });

    // Menambahkan kelas 'sticky' pada header saat scroll
    const header = document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY > 100);

    // Menutup menu mobile saat link di-klik atau saat scroll
    menuIcon.classList.remove("fa-xmark");
    navbar.classList.remove("active");
  };

  // Efek Typewriter
  const typewriterElement = document.querySelector(".typewriter");
  if (typewriterElement) {
    const textArray = ["Data Analyst", "Data Science", "Pecinta Teknologi"];
    let textArrayIndex = 0;
    let charIndex = 0;
    const typingDelay = 150;
    const erasingDelay = 100;
    const newTextDelay = 2000; // Jeda sebelum mengetik teks baru

    const type = () => {
      if (charIndex < textArray[textArrayIndex].length) {
        typewriterElement.textContent +=
          textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
      } else {
        setTimeout(erase, newTextDelay);
      }
    };

    const erase = () => {
      if (charIndex > 0) {
        typewriterElement.textContent = textArray[textArrayIndex].substring(
          0,
          charIndex - 1
        );
        charIndex--;
        setTimeout(erase, erasingDelay);
      } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
      }
    };

    // Mulai efek typewriter setelah halaman dimuat
    setTimeout(type, newTextDelay);
  }

  // Animasi Scroll Reveal
  const revealElements = document.querySelectorAll(".reveal");

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    revealElements.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;
      const elementVisible = 150; // Jarak dari bawah layar untuk memicu animasi

      if (elementTop < windowHeight - elementVisible) {
        el.classList.add("active");
      } else {
        // Opsional: hapus kelas 'active' agar animasi berulang saat scroll ke atas
        // el.classList.remove('active');
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  // Panggil sekali saat load untuk elemen yang sudah terlihat
  revealOnScroll();
  // --- Logika Modal Sertifikat (BARU) ---
  const modal = document.getElementById("certificateModal");
  const modalImg = document.getElementById("modalImage");
  const certificateBoxes = document.querySelectorAll(".certificate-box");
  const closeModalBtn = document.querySelector(".close-modal");

  // Tambahkan event listener untuk setiap kotak sertifikat
  certificateBoxes.forEach((box) => {
    box.onclick = function () {
      const img = this.querySelector("img");
      modal.style.display = "block"; // Tampilkan modal
      modalImg.src = img.src; // Atur sumber gambar modal
      modalImg.alt = img.alt; // Atur teks alt gambar modal
    };
  });

  // Fungsi untuk menutup modal
  const closeCertificateModal = () => {
    if (modal) {
      modal.style.display = "none"; // Sembunyikan modal
    }
  };

  // Ketika pengguna mengklik tombol close (x)
  if (closeModalBtn) {
    closeModalBtn.onclick = closeCertificateModal;
  }

  // Ketika pengguna mengklik di luar area gambar pada modal
  window.onclick = function (event) {
    if (event.target == modal) {
      closeCertificateModal();
    }
  };

  // Ketika pengguna menekan tombol "Escape" pada keyboard
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeCertificateModal();
    }
  });
});
