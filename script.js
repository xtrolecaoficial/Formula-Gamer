// ==========================================
// 1. DICCIONARIO DE TRADUCCIONES
// ==========================================
const traducciones = {
  es: {
    navInicio: "Inicio",
    navGuias: "Guías",
    navAyuda: "Ayuda",
    navAportar: "Aportar Guía",
    navInfo: "Información",
    searchPlaceholder: "🔍 Buscar juego o categoría...",
    heroTitle: "¡Bienvenido a Formula Gamer!",
    heroDesc: "Tu fuente definitiva de conocimiento gamer. Nuestra misión es desglosar cada mecánica, secreto y desafío de tus videojuegos favoritos.",
    sectionTitle: "Selecciona un juego para ver sus Guías",
    mcDesc: "Granjas automáticas, mecanismos de Redstone, consejos para supervivencia y estrategias PvP.",
    fnDesc: "Técnicas de construcción rápida, rotación en mapa, mejores armas y consejos de tradeo.",
    bsDesc: "Combos de Brawlers, mejores selecciones por mapa, economía de gemas y eventos.",
    btnVerGuias: "Ver Guías y Tips",
    infoTitle: "Información de la página",
    infoDesc: "Página web creada para guiar a los nuevos usuarios en el mundo de los videojuegos.",
    btnVolver: "⬅️ Volver al Inicio",
    modalTitle: "¡Aporta tu propia Guía!",
    modalDesc: "Envíanos tus trucos o consejos para publicarlos en Formula Gamer.",
    inputUser: "Tu apodo/gamertag",
    inputText: "Escribe aquí tu tip o truco...",
    btnEnviarModal: "Enviar Aporte",
    footerText: "© Formula Gamer - Guías y Tips de Videojuegos",
    btnThemeDark: "🌙 Modo Noche",
    btnThemeLight: "☀️ Modo Claro"
  },
  en: {
    navInicio: "Home",
    navGuias: "Guides",
    navAyuda: "Help",
    navAportar: "Submit Guide",
    navInfo: "About",
    searchPlaceholder: "🔍 Search game or category...",
    heroTitle: "Welcome to Formula Gamer!",
    heroDesc: "Your ultimate source of gaming knowledge. Our mission is to break down every mechanic, secret, and challenge of your favorite video games.",
    sectionTitle: "Select a game to view its Guides",
    mcDesc: "Automatic farms, Redstone mechanisms, survival tips, and PvP strategies.",
    fnDesc: "Fast building techniques, map rotation, best weapons, and trading tips.",
    bsDesc: "Brawler combos, best picks per map, gem economy, and events.",
    btnVerGuias: "View Guides & Tips",
    infoTitle: "About this page",
    infoDesc: "Website created to guide new users in the gaming world.",
    btnVolver: "⬅️ Back to Home",
    modalTitle: "Submit your own Guide!",
    modalDesc: "Send us your tricks or tips to publish them on Formula Gamer.",
    inputUser: "Your nickname/gamertag",
    inputText: "Write your tip or trick here...",
    btnEnviarModal: "Send Submission",
    footerText: "© Formula Gamer - Video Game Guides and Tips",
    btnThemeDark: "🌙 Dark Mode",
    btnThemeLight: "☀️ Light Mode"
  }
};

// ==========================================
// 2. BASE DE DATOS DE GUÍAS CON IMÁGENES
// ==========================================
const guiasData = {
  es: {
    minecraft: {
      titulo: "🟩 Minecraft: Guía Técnica y PvP",
      categoria: "Sandbox / Supervivencia",
      banner: "images (1).jpeg",
      descripcion: "Domina las mecánicas del juego, optimiza tu supervivencia y gana tus enfrentamientos en PvP.",
      secciones: [
        {
          subtitulo: "⚙️ Tips de Minecraft Técnico & Redstone",
          imagen: "images (2).jpeg",
          tips: [
            "**Granja de Hierro:** Construye una granja en los primeros días con 3 aldeanos y 1 zombi para tener hierro infinito.",
            "**Aldeanos Lectores:** Rompe y coloca el atril hasta que el bibliotecario te ofrezca el libro 'Reparación' (Mending).",
            "**Cero Pérdida de XP:** Utiliza hornos conectados a tolvas para almacenar experiencia retenida."
          ]
        },
        {
          subtitulo: "⚔️ Tips para Combate PvP & Personaje",
          imagen: "unnamed.png",
          tips: [
            "**Uso de la Resortera / Arco:** Mantén la distancia y dispara cuando el enemigo salte para romper su trayectoria.",
            "**Reset de Knockback:** Usa el escudo justo cuando recibas el golpe para amortiguar el empuje y contraatacar rápido."
          ]
        }
      ]
    },
    fortnite: {
      titulo: "🟪 Fortnite: Guía Battle Royale y Mapas",
      categoria: "Battle Royale / Shooter",
      banner: "images (5).jpeg",
      descripcion: "Aprende a dominar la construcción, rotaciones en la tormenta y posicionamiento en el mapa.",
      secciones: [
        {
          subtitulo: "🏗️ Estrategias de Mapa y Posicionamiento",
          imagen: "images (6).jpeg",
          tips: [
            "**Tomar la Altura (High Ground):** Utiliza la técnica del 90s para ganar altura sobre tu rival gastando pocos materiales.",
            "**Rotación en Tormenta:** Busca siempre las zonas elevadas del mapa antes de que se cierre el círculo.",
            "**Edición de Paredes:** Edita ventanas en la esquina superior derecha para tener ventaja con la mano derecha."
          ]
        }
      ]
    },
    brawl: {
      titulo: "🟨 Brawl Stars: Guía de Modos y Brawlers",
      categoria: "MOBA / Acción",
      banner: "images (8).jpeg",
      descripcion: "Estrategias para subir copas, composiciones recomendadas y cómo ganar en cada evento.",
      secciones: [
        {
          subtitulo: "🏆 Estrategia de Brawlers & Personajes",
          imagen: "images (9).jpeg",
          tips: [
            "**Atrapagemas:** Designa a un Brawler de distancia (como Piper o Jessie) como el 'Portador de Gemas'.",
            "**Balón Brawl:** No gastes tu súper ataque disparando al balón a menos que estés seguro de meter gol.",
            "**Control de Arbustos:** Utiliza ataques de chequeo antes de entrar a zonas sin visibilidad."
          ]
        }
      ]
    }
  },
  en: {
    minecraft: {
      titulo: "🟩 Minecraft: Technical & PvP Guide",
      categoria: "Sandbox / Survival",
      banner: "images (1).jpeg",
      descripcion: "Master game mechanics, optimize survival, and win your PvP encounters.",
      secciones: [
        {
          subtitulo: "⚙️ Technical Minecraft & Redstone Tips",
          imagen: "images (2).jpeg",
          tips: [
            "**Iron Farm:** Build a farm early on using 3 villagers and 1 zombie for infinite iron.",
            "**Librarian Villagers:** Break and place the lectern until you get Mending for cheap emeralds."
          ]
        },
        {
          subtitulo: "⚔️ PvP Combat Tips & Skin Setup",
          imagen: "unnamed.png",
          tips: [
            "**Slingshot / Bow Usage:** Keep distance and shoot when the enemy jumps to mess up their trajectory.",
            "**Knockback Reset:** Use the shield right when taking damage to dampen pushback."
          ]
        }
      ]
    },
    fortnite: {
      titulo: "🟪 Fortnite: Battle Royale & Map Guide",
      categoria: "Battle Royale / Shooter",
      banner: "images (5).jpeg",
      descripcion: "Learn to master building, storm rotations, and map positioning.",
      secciones: [
        {
          subtitulo: "🏗️ Building & Strategy Tips",
          imagen: "images (6).jpeg",
          tips: [
            "**High Ground:** Master 90s to gain height over your rival.",
            "**Wall Edits:** Edit windows on the upper right corner for right-hand peak advantage."
          ]
        }
      ]
    },
    brawl: {
      titulo: "🟨 Brawl Stars: Modes & Brawler Guide",
      categoria: "MOBA / Action",
      banner: "images (8).jpeg",
      descripcion: "Strategies to gain trophies, recommended compositions, and mode guides.",
      secciones: [
        {
          subtitulo: "🏆 Game Mode & Brawler Tips",
          imagen: "images (9).jpeg",
          tips: [
            "**Gem Grab:** Assign a long-range Brawler as the Gem Carrier.",
            "**Brawl Ball:** Don't waste your super shooting the ball unless you are sure to score."
          ]
        }
      ]
    }
  }
};

// ==========================================
// 3. FUNCIONES DE NAVEGACIÓN Y CARGA
// ==========================================
let idiomaActual = 'es';
let juegoActualCargado = null;

function cargarGuia(juegoKey) {
  juegoActualCargado = juegoKey;
  const data = guiasData[idiomaActual] ? guiasData[idiomaActual][juegoKey] : null;
  if (!data) return;

  const vistaInicio = document.getElementById('vista-inicio');
  const vistaGuia = document.getElementById('vista-guia');
  const contenidoGuia = document.getElementById('contenido-guia');

  if (!vistaInicio || !vistaGuia || !contenidoGuia) return;

  let htmlContent = `
    <div class="guia-header">
      <img src="${data.banner}" class="guia-banner-img" alt="Banner Guía">
      <span class="badge">${data.categoria}</span>
      <h2>${data.titulo}</h2>
      <p class="guia-desc">${data.descripcion}</p>
    </div>
  `;

  data.secciones.forEach(sec => {
    htmlContent += `
      <div class="guia-seccion">
        <h3>${sec.subtitulo}</h3>
        ${sec.imagen ? `<div class="guia-img-container"><img src="${sec.imagen}" class="guia-sec-img" alt="Imagen Sección"></div>` : ''}
        <ul>
    `;
    sec.tips.forEach(tip => {
      let tipFormateado = tip.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      htmlContent += `<li>${tipFormateado}</li>`;
    });
    htmlContent += `
        </ul>
      </div>
    `;
  });

  contenidoGuia.innerHTML = htmlContent;
  vistaInicio.style.display = 'none';
  vistaGuia.style.display = 'block';

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function mostrarInicio() {
  juegoActualCargado = null;
  const vistaInicio = document.getElementById('vista-inicio');
  const vistaGuia = document.getElementById('vista-guia');
  if (vistaInicio) vistaInicio.style.display = 'block';
  if (vistaGuia) vistaGuia.style.display = 'none';
}

function buscarGuia() {
  const searchInput = document.getElementById('search-input');
  if (!searchInput) return;
  const input = searchInput.value.toLowerCase();
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    const texto = card.innerText.toLowerCase();
    card.style.display = texto.includes(input) ? 'block' : 'none';
  });
}

function cambiarIdioma(lang) {
  idiomaActual = lang;
  const t = traducciones[lang];
  if (!t) return;

  const elements = {
    'nav-inicio': t.navInicio,
    'open-modal-btn': t.navAportar,
    'nav-info': t.navInfo,
    'hero-title': t.heroTitle,
    'hero-desc': t.heroDesc,
    'section-title': t.sectionTitle,
    'mc-desc': t.mcDesc,
    'fn-desc': t.fnDesc,
    'bs-desc': t.bsDesc,
    'info-title': t.infoTitle,
    'info-desc': t.infoDesc,
    'btn-volver': t.btnVolver,
    'modal-title': t.modalTitle,
    'modal-desc': t.modalDesc,
    'btn-enviar-modal': t.btnEnviarModal
  };

  for (let id in elements) {
    let el = document.getElementById(id);
    if (el) el.innerText = elements[id];
  }

  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.placeholder = t.searchPlaceholder;

  document.querySelectorAll('.card-btn').forEach(btn => {
    if (btn.id !== 'btn-enviar-modal' && !btn.closest('#modal-auth')) {
      btn.innerText = t.btnVerGuias;
    }
  });

  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) {
    themeBtn.innerText = document.body.classList.contains('dark-mode') ? t.btnThemeLight : t.btnThemeDark;
  }

  if (juegoActualCargado) {
    cargarGuia(juegoActualCargado);
  }
}

// ==========================================
// 4. FUNCIONES DE AUTENTICACIÓN (LOGIN & REGISTRO)
// ==========================================
function cambiarTabAuth(tab) {
  const formLogin = document.getElementById('form-login');
  const formReg = document.getElementById('form-register');
  const tabLogin = document.getElementById('tab-login');
  const tabReg = document.getElementById('tab-register');

  if (tab === 'login') {
    formLogin.style.display = 'flex';
    formReg.style.display = 'none';
    tabLogin.classList.add('active');
    tabReg.classList.remove('active');
  } else {
    formLogin.style.display = 'none';
    formReg.style.display = 'flex';
    tabReg.classList.add('active');
    tabLogin.classList.remove('active');
  }
}

function iniciarSesion(event) {
  event.preventDefault();
  const user = document.getElementById('login-user').value;
  alert(`¡Bienvenido de nuevo, ${user}!`);
  cerrarModalAuth();
  document.getElementById('open-auth-btn').innerText = `👤 ${user}`;
}

function crearCuenta(event) {
  event.preventDefault();
  const user = document.getElementById('reg-user').value;
  const pass = document.getElementById('reg-pass').value;
  const passConfirm = document.getElementById('reg-pass-confirm').value;

  if (pass !== passConfirm) {
    alert('Las contraseñas no coinciden.');
    return;
  }

  alert(`¡Cuenta creada con éxito para ${user}! Ya puedes usar tu cuenta.`);
  cambiarTabAuth('login');
}

function cerrarModalAuth() {
  const modalAuth = document.getElementById('modal-auth');
  if (modalAuth) modalAuth.style.display = 'none';
}

// ==========================================
// 5. EVENTOS DOM (CARGA DE PÁGINA)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  const langSelect = document.getElementById('language-select');
  if (langSelect) {
    langSelect.addEventListener('change', (e) => cambiarIdioma(e.target.value));
  }

  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      const isDark = document.body.classList.contains('dark-mode');
      const t = traducciones[idiomaActual];
      themeBtn.innerText = isDark ? t.btnThemeLight : t.btnThemeDark;
    });
  }

  // Eventos de Modales
  const modalAporte = document.getElementById('modal-aporte');
  const openAporteBtn = document.getElementById('open-modal-btn');
  const closeAporteBtn = document.getElementById('close-modal-btn');

  if (openAporteBtn && modalAporte) openAporteBtn.addEventListener('click', () => modalAporte.style.display = 'flex');
  if (closeAporteBtn && modalAporte) closeAporteBtn.addEventListener('click', () => modalAporte.style.display = 'none');

  const modalAuth = document.getElementById('modal-auth');
  const openAuthBtn = document.getElementById('open-auth-btn');
  const closeAuthBtn = document.getElementById('close-auth-btn');

  if (openAuthBtn && modalAuth) openAuthBtn.addEventListener('click', () => modalAuth.style.display = 'flex');
  if (closeAuthBtn && modalAuth) closeAuthBtn.addEventListener('click', cerrarModalAuth);

  window.addEventListener('click', (e) => {
    if (modalAporte && e.target === modalAporte) modalAporte.style.display = 'none';
    if (modalAuth && e.target === modalAuth) modalAuth.style.display = 'none';
  });
});

function enviarAporte() {
  const nombreEl = document.getElementById('nombre-usuario');
  const textoEl = document.getElementById('texto-aporte');
  const modal = document.getElementById('modal-aporte');

  if (!nombreEl || !textoEl) return;
  const nombre = nombreEl.value;
  const texto = textoEl.value;

  if (!nombre.trim() || !texto.trim()) {
    alert(idiomaActual === 'es' ? 'Por favor completa todos los campos.' : 'Please fill in all fields.');
  } else {
    alert(idiomaActual === 'es' ? `¡Gracias ${nombre}! Tu aporte ha sido recibido.` : `Thank you ${nombre}! Your submission has been received.`);
    nombreEl.value = '';
    textoEl.value = '';
    if (modal) modal.style.display = 'none';
  }
}