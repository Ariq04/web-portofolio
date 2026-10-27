// Menunggu hingga seluruh konten DOM dimuat sebelum menjalankan skrip
document.addEventListener("DOMContentLoaded", () => {
  // Toggle ikon menu dan navbar untuk tampilan mobile
  const menuIcon = document.querySelector("#menu-icon");
  const navbar = document.querySelector(".navbar");

  menuIcon.onclick = () => {
    const isExpanded = menuIcon.classList.toggle("fa-xmark"); // Mengubah ikon hamburger menjadi X
    navbar.classList.toggle("active");
    menuIcon.setAttribute("aria-expanded", isExpanded ? "true" : "false");
  };

  // Mengatur link navigasi yang aktif berdasarkan posisi scroll
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("header nav a");

  // Menutup menu mobile saat link navigasi di-klik
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuIcon.classList.remove("fa-xmark");
      navbar.classList.remove("active");
      menuIcon.setAttribute("aria-expanded", "false");
    });
  });

  window.onscroll = () => {
    sections.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");

      if (top >= offset && top < offset + height) {
        navLinks.forEach((links) => {
          links.classList.remove("active");
        });
        const activeLink = document.querySelector("header nav a[href*=" + id + "]");
        if (activeLink) {
          activeLink.classList.add("active");
        }
      }
    });

    // Menambahkan kelas 'sticky' pada header saat scroll
    const header = document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY > 100);

    // Menutup menu mobile saat scroll
    menuIcon.classList.remove("fa-xmark");
    navbar.classList.remove("active");
    menuIcon.setAttribute("aria-expanded", "false");
  };

  // Efek Typewriter
  const typewriterElement = document.querySelector(".typewriter");
  if (typewriterElement) {
    const textArray = ["Data Analyst", "Business Intelligence", "AI Solution Developer"];
    let textArrayIndex = 0;
    let charIndex = 0;
    const typingDelay = 120;
    const erasingDelay = 80;
    const newTextDelay = 1800; // Jeda sebelum mengetik teks baru

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
      const elementVisible = 50; // Jarak dari bawah layar untuk memicu animasi lebih halus

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
  // Aksesibilitas keyboard untuk menu hamburger
  if (menuIcon) {
    menuIcon.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        menuIcon.click();
      }
    });
  }

  // --- Logika Modal Sertifikat ---
  const modal = document.getElementById("certificateModal");
  const modalImg = document.getElementById("modalImage");
  const certificateBoxes = document.querySelectorAll(".certificate-box");
  const closeModalBtn = document.querySelector(".close-modal");
  let lastFocusedBox = null;

  // Tambahkan event listener untuk setiap kotak sertifikat
  certificateBoxes.forEach((box) => {
    box.onclick = function () {
      const img = this.querySelector("img");
      if (img && modal && modalImg) {
        lastFocusedBox = this; // Simpan elemen sebelum modal dibuka
        modal.style.display = "block"; // Tampilkan modal
        modalImg.src = img.src; // Atur sumber gambar modal
        modalImg.alt = img.alt || "Sertifikat Ariq Alfalah"; // Atur teks alt gambar modal
        document.body.style.overflow = "hidden"; // Kunci scroll latar belakang
        if (closeModalBtn) {
          closeModalBtn.focus(); // Fokus ke tombol close
        }
      }
    };

    // Dukungan navigasi keyboard (Enter / Spasi)
    box.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        this.click();
      }
    });
  });

  // Fungsi untuk menutup modal
  const closeCertificateModal = () => {
    if (modal) {
      modal.style.display = "none"; // Sembunyikan modal
      document.body.style.overflow = "auto"; // Kembalikan scroll latar belakang
      if (lastFocusedBox) {
        lastFocusedBox.focus(); // Kembalikan fokus ke kotak pemicu
        lastFocusedBox = null;
      }
    }
  };

  // Ketika pengguna mengklik tombol close (x)
  if (closeModalBtn) {
    closeModalBtn.onclick = closeCertificateModal;
    closeModalBtn.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        closeCertificateModal();
      }
    });
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
