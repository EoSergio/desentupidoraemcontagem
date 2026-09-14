// Script estático leve para interações da landing page
document.addEventListener('DOMContentLoaded', () => {
  // 1. Menu Mobile Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.contains('hidden');
      if (isHidden) {
        mobileMenu.classList.remove('hidden');
        mobileMenuBtn.textContent = '✕';
      } else {
        mobileMenu.classList.add('hidden');
        mobileMenuBtn.textContent = '☰';
      }
    });

    mobileNavLinks.forEach((link) => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenuBtn.textContent = '☰';
      });
    });
  }

  // 2. Modal de Política de Privacidade (LGPD)
  const privacyModal = document.getElementById('privacy-modal');
  const openPrivacyBtns = [
    document.getElementById('open-privacy-btn'),
    document.getElementById('open-privacy-btn-2'),
  ];
  const closePrivacyBtns = [
    document.getElementById('close-privacy-btn'),
    document.getElementById('close-privacy-btn-2'),
  ];

  function openModal() {
    if (privacyModal) {
      privacyModal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal() {
    if (privacyModal) {
      privacyModal.classList.add('hidden');
      document.body.style.overflow = '';
    }
  }

  openPrivacyBtns.forEach((btn) => {
    btn?.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  closePrivacyBtns.forEach((btn) => {
    btn?.addEventListener('click', () => {
      closeModal();
    });
  });

  // Fechar ao clicar fora do conteúdo
  privacyModal?.addEventListener('click', (e) => {
    if (e.target === privacyModal) {
      closeModal();
    }
  });

  // Fechar com tecla ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && privacyModal && !privacyModal.classList.contains('hidden')) {
      closeModal();
    }
  });

  // 3. Fechar Tooltip Flutuante
  const floatTooltip = document.getElementById('float-tooltip');
  const closeTooltipBtn = document.getElementById('close-tooltip-btn');

  closeTooltipBtn?.addEventListener('click', () => {
    if (floatTooltip) {
      floatTooltip.style.display = 'none';
    }
  });
});
