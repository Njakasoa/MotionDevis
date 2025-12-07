const storageKey = 'motiondevis-data';

const defaultSettings = {
  rateHour: 75,
  rateDay: 450,
  hoursPerDay: 7,
  vat: 20,
  currency: '€',
  defaultNotes: ''
};

const serviceCatalog = [
  {
    title: 'Storyboard',
    description: 'Découpage, narration, enchaînements',
    category: 'Pré-prod',
    mode: 'forfait',
    quantity: 1,
    unitPrice: 450
  },
  {
    title: 'Direction artistique / moodboard',
    description: 'Palette, références visuelles, intentions',
    category: 'Pré-prod',
    mode: 'forfait',
    quantity: 1,
    unitPrice: 380
  },
  {
    title: 'Illustration / character design',
    description: 'Assets graphiques, personnages, décors',
    category: 'Prod',
    mode: 'forfait',
    quantity: 1,
    unitPrice: 700
  },
  {
    title: 'Animation 2D',
    description: 'Animation principale en 2D',
    category: 'Prod',
    mode: 'temps',
    quantity: 2,
    unitPrice: 520
  },
  {
    title: 'Animation 3D',
    description: 'Mise en mouvement 3D, rendu',
    category: 'Prod',
    mode: 'temps',
    quantity: 1,
    unitPrice: 900
  },
  {
    title: 'Voix off',
    description: 'Casting, enregistrement et traitement',
    category: 'Post-prod',
    mode: 'unitaire',
    quantity: 1,
    unitPrice: 350
  },
  {
    title: 'Sound design / musique',
    description: 'Mixage, ambiance sonore, droits musicaux',
    category: 'Post-prod',
    mode: 'forfait',
    quantity: 1,
    unitPrice: 280
  },
  {
    title: 'Sous-titres',
    description: 'Traduction, intégration multi-langue',
    category: 'Suppléments',
    mode: 'unitaire',
    quantity: 1,
    unitPrice: 90
  },
  {
    title: 'Adaptations formats',
    description: 'Déclinaisons 9:16, 1:1, 4:5...',
    category: 'Suppléments',
    mode: 'unitaire',
    quantity: 2,
    unitPrice: 110
  },
  {
    title: 'Livrables supplémentaires',
    description: 'Exports spécifiques, fichiers sources',
    category: 'Suppléments',
    mode: 'unitaire',
    quantity: 1,
    unitPrice: 150
  }
];

const templates = {
  catalogueItem: document.getElementById('catalogue-item-template'),
  lineRow: document.getElementById('line-row-template')
};

const state = {
  settings: { ...defaultSettings },
  quotes: [],
  currentQuote: createEmptyQuote()
};

function createEmptyQuote() {
  return {
    client: {
      name: '',
      company: '',
      email: ''
    },
    project: {
      title: '',
      description: '',
      videoType: 'Explicative',
      deadline: ''
    },
    video: {
      duration: 60,
      complexity: 'standard',
      style: 'flat'
    },
    lines: [],
    discountRate: 0,
    discountAmount: 0,
    urgency: 0,
    vat: defaultSettings.vat,
    totals: {
      perCategory: {},
      ht: 0,
      vatAmount: 0,
      ttc: 0
    },
    status: 'En attente',
    createdAt: new Date().toISOString()
  };
}

function loadState() {
  const raw = localStorage.getItem(storageKey);
  if (!raw) {
    state.settings = { ...defaultSettings };
    state.quotes = [];
    return;
  }
  try {
    const parsed = JSON.parse(raw);
    state.settings = { ...defaultSettings, ...(parsed.settings || {}) };
    state.quotes = parsed.quotes || [];
  } catch (e) {
    console.warn('Impossible de charger le stockage, réinitialisation.', e);
    state.settings = { ...defaultSettings };
    state.quotes = [];
  }
}

function persistState() {
  localStorage.setItem(storageKey, JSON.stringify({
    settings: state.settings,
    quotes: state.quotes
  }));
}

function init() {
  loadState();
  state.currentQuote = createEmptyQuote();
  state.currentQuote.vat = state.settings.vat;
  bindNavigation();
  bindForms();
  renderCatalogue();
  renderSettings();
  renderQuotesTables();
  updateDashboard();
  updateTotals();
}

document.addEventListener('DOMContentLoaded', init);

function bindNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach((btn) => {
    btn.addEventListener('click', () => switchView(btn.dataset.target, navLinks));
  });

  document.getElementById('quick-new-quote').addEventListener('click', () => {
    switchView('new-quote', navLinks);
  });
}

function switchView(targetId, navLinks) {
  document.querySelectorAll('.view').forEach((view) => view.classList.remove('active'));
  document.getElementById(targetId).classList.add('active');
  navLinks.forEach((link) => link.classList.toggle('active', link.dataset.target === targetId));
}

function bindForms() {
  document.getElementById('save-quote').addEventListener('click', saveQuote);
  document.getElementById('clear-quote').addEventListener('click', resetCurrentQuote);
  document.getElementById('save-settings').addEventListener('click', saveSettings);
  document.getElementById('export-quotes').addEventListener('click', exportQuotes);

  ['discount-rate', 'discount-amount', 'urgency', 'vat-rate'].forEach((id) => {
    document.getElementById(id).addEventListener('input', () => {
      syncAdjustments();
      updateTotals();
    });
  });
}

function renderCatalogue() {
  const container = document.getElementById('catalogue-list');
  container.innerHTML = '';
  serviceCatalog.forEach((service) => {
    const node = templates.catalogueItem.content.cloneNode(true);
    node.querySelector('.title').textContent = service.title;
    node.querySelector('.description').textContent = service.description;
    node.querySelector('.add-service').addEventListener('click', () => addServiceLine(service));
    container.appendChild(node);
  });
}

function addServiceLine(service) {
  const line = {
    id: crypto.randomUUID(),
    title: service.title,
    category: service.category,
    mode: service.mode,
    quantity: service.quantity,
    unitPrice: service.unitPrice
  };
  state.currentQuote.lines.push(line);
  renderLines();
  updateTotals();
}

function renderLines() {
  const tbody = document.querySelector('#lines-table tbody');
  tbody.innerHTML = '';
  state.currentQuote.lines.forEach((line) => {
    const row = templates.lineRow.content.cloneNode(true);
    row.querySelector('.line-title').textContent = line.title;
    row.querySelector('.line-category').textContent = line.category;
    row.querySelector('.line-mode').textContent = line.mode;
    const qtyInput = row.querySelector('.line-qty');
    const unitInput = row.querySelector('.line-unit');
    const totalCell = row.querySelector('.line-total');

    qtyInput.value = line.quantity;
    unitInput.value = line.unitPrice;
    totalCell.textContent = formatCurrency(line.quantity * line.unitPrice);

    qtyInput.addEventListener('input', () => {
      line.quantity = Number(qtyInput.value || 0);
      totalCell.textContent = formatCurrency(line.quantity * line.unitPrice);
      updateTotals();
    });

    unitInput.addEventListener('input', () => {
      line.unitPrice = Number(unitInput.value || 0);
      totalCell.textContent = formatCurrency(line.quantity * line.unitPrice);
      updateTotals();
    });

    row.querySelector('.remove-line').addEventListener('click', () => {
      state.currentQuote.lines = state.currentQuote.lines.filter((l) => l.id !== line.id);
      renderLines();
      updateTotals();
    });

    tbody.appendChild(row);
  });
}

function syncAdjustments() {
  state.currentQuote.discountRate = Number(document.getElementById('discount-rate').value || 0);
  state.currentQuote.discountAmount = Number(document.getElementById('discount-amount').value || 0);
  state.currentQuote.urgency = Number(document.getElementById('urgency').value || 0);
  state.currentQuote.vat = Number(document.getElementById('vat-rate').value || state.settings.vat);
}

function updateTotals() {
  syncAdjustments();
  const categories = {};
  let subtotal = 0;

  state.currentQuote.lines.forEach((line) => {
    const lineTotal = line.quantity * line.unitPrice;
    subtotal += lineTotal;
    categories[line.category] = (categories[line.category] || 0) + lineTotal;
  });

  const urgencyAdded = subtotal * state.currentQuote.urgency;
  const discountPercent = subtotal * (state.currentQuote.discountRate / 100);
  const discountAmount = state.currentQuote.discountAmount;
  const totalAfterAdjustments = subtotal + urgencyAdded - discountPercent - discountAmount;
  const vatAmount = totalAfterAdjustments * (state.currentQuote.vat / 100);
  const totalTTC = totalAfterAdjustments + vatAmount;

  state.currentQuote.totals = {
    perCategory: categories,
    ht: Math.max(totalAfterAdjustments, 0),
    vatAmount,
    ttc: Math.max(totalTTC, 0)
  };

  renderTotals(categories, subtotal, urgencyAdded, discountPercent + discountAmount, vatAmount, totalTTC);
}

function renderTotals(categories, subtotal, urgencyAdded, discounts, vatAmount, totalTTC) {
  const list = document.getElementById('totals-list');
  list.innerHTML = '';
  Object.entries(categories).forEach(([cat, amount]) => {
    const li = document.createElement('li');
    li.innerHTML = `<span>${cat}</span><strong>${formatCurrency(amount)}</strong>`;
    list.appendChild(li);
  });

  const summary = [
    { label: 'Sous-total', value: subtotal },
    { label: 'Majoration urgence', value: urgencyAdded },
    { label: 'Remises', value: -discounts },
    { label: `TVA (${state.currentQuote.vat}%)`, value: vatAmount }
  ];

  summary.forEach((item) => {
    const li = document.createElement('li');
    li.innerHTML = `<span>${item.label}</span><strong>${formatCurrency(item.value)}</strong>`;
    list.appendChild(li);
  });

  document.getElementById('total-ht').textContent = formatCurrency(state.currentQuote.totals.ht);
  document.getElementById('total-vat').textContent = formatCurrency(vatAmount);
  document.getElementById('total-ttc').textContent = formatCurrency(totalTTC);
}

function formatCurrency(amount) {
  return `${amount.toFixed(0)} ${state.settings.currency}`;
}

function saveQuote() {
  const form = document.getElementById('client-form');
  if (!form.reportValidity()) return;

  const quote = {
    ...state.currentQuote,
    client: {
      name: document.getElementById('client-name').value,
      company: document.getElementById('client-company').value,
      email: document.getElementById('client-email').value
    },
    project: {
      title: document.getElementById('project-title').value,
      description: document.getElementById('project-description').value,
      videoType: document.getElementById('video-type').value,
      deadline: document.getElementById('project-deadline').value
    },
    video: {
      duration: Number(document.getElementById('video-duration').value || 0),
      complexity: document.getElementById('video-complexity').value,
      style: document.getElementById('video-style').value
    },
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString()
  };

  if (!quote.lines.length) {
    alert('Ajoute au moins une prestation.');
    return;
  }

  state.quotes.unshift(quote);
  persistState();
  renderQuotesTables();
  updateDashboard();
  alert('Devis enregistré !');
  resetCurrentQuote();
  switchView('quotes', document.querySelectorAll('.nav-link'));
}

function resetCurrentQuote() {
  state.currentQuote = createEmptyQuote();
  state.currentQuote.vat = state.settings.vat;
  document.getElementById('client-form').reset();
  document.getElementById('video-duration').value = 60;
  document.getElementById('video-complexity').value = 'standard';
  document.getElementById('video-style').value = 'flat';
  document.getElementById('discount-rate').value = 0;
  document.getElementById('discount-amount').value = 0;
  document.getElementById('urgency').value = 0;
  document.getElementById('vat-rate').value = state.settings.vat;
  state.currentQuote.lines = [];
  renderLines();
  updateTotals();
}

function renderSettings() {
  document.getElementById('rate-hour').value = state.settings.rateHour;
  document.getElementById('rate-day').value = state.settings.rateDay;
  document.getElementById('hours-per-day').value = state.settings.hoursPerDay;
  document.getElementById('settings-vat').value = state.settings.vat;
  document.getElementById('currency').value = state.settings.currency;
  document.getElementById('default-notes').value = state.settings.defaultNotes;
  document.getElementById('vat-rate').value = state.settings.vat;
}

function saveSettings(e) {
  e.preventDefault();
  state.settings = {
    rateHour: Number(document.getElementById('rate-hour').value || 0),
    rateDay: Number(document.getElementById('rate-day').value || 0),
    hoursPerDay: Number(document.getElementById('hours-per-day').value || 0),
    vat: Number(document.getElementById('settings-vat').value || 0),
    currency: document.getElementById('currency').value || '€',
    defaultNotes: document.getElementById('default-notes').value
  };
  state.currentQuote.vat = state.settings.vat;
  document.getElementById('vat-rate').value = state.settings.vat;
  persistState();
  updateTotals();
  alert('Paramètres enregistrés');
}

function renderQuotesTables() {
  const tbody = document.querySelector('#quotes-table tbody');
  tbody.innerHTML = '';
  state.quotes.forEach((quote) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${quote.project.title}</td>
      <td>${quote.client.name}</td>
      <td>${new Date(quote.createdAt).toLocaleDateString()}</td>
      <td>${formatCurrency(quote.totals.ttc)}</td>
      <td>${quote.status}</td>
      <td class="actions">
        <button class="ghost" data-action="duplicate">Dupliquer</button>
        <button class="ghost" data-action="delete">Supprimer</button>
      </td>`;

    tr.querySelector('[data-action="duplicate"]').addEventListener('click', () => duplicateQuote(quote));
    tr.querySelector('[data-action="delete"]').addEventListener('click', () => deleteQuote(quote.id));
    tbody.appendChild(tr);
  });

  const recentBody = document.querySelector('#recent-quotes tbody');
  recentBody.innerHTML = '';
  state.quotes.slice(0, 5).forEach((quote) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${quote.project.title}</td>
      <td>${quote.client.name}</td>
      <td>${new Date(quote.createdAt).toLocaleDateString()}</td>
      <td>${formatCurrency(quote.totals.ttc)}</td>
      <td>${quote.status}</td>`;
    recentBody.appendChild(row);
  });
}

function duplicateQuote(quote) {
  const clone = {
    ...quote,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    status: 'Brouillon copié'
  };
  state.quotes.unshift(clone);
  persistState();
  renderQuotesTables();
  updateDashboard();
}

function deleteQuote(id) {
  if (!confirm('Supprimer ce devis ?')) return;
  state.quotes = state.quotes.filter((q) => q.id !== id);
  persistState();
  renderQuotesTables();
  updateDashboard();
}

function exportQuotes() {
  const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(state.quotes, null, 2));
  const link = document.createElement('a');
  link.setAttribute('href', dataStr);
  link.setAttribute('download', 'motiondevis-devis.json');
  link.click();
}

function updateDashboard() {
  document.getElementById('stat-total').textContent = state.quotes.length;
  document.getElementById('stat-pending').textContent = state.quotes.filter((q) => q.status === 'En attente').length;
  const clients = new Set(state.quotes.map((q) => q.client.name)).size;
  document.getElementById('stat-clients').textContent = clients;
}
