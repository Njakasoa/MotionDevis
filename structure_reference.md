<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Calculateur de coût - Site vitrine</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/webp" href="assets/favicon.webp">
  <style>
    :root {
      --bg: #0f172a;
      --bg-alt: #020617;
      --card: #020617;
      --card-soft: #0b1220;
      --accent: #38bdf8;
      --accent-soft: rgba(56, 189, 248, 0.1);
      --accent-2: #4ade80;
      --text: #e5e7eb;
      --muted: #9ca3af;
      --border: #1f2937;
      --danger: #f97373;
      --radius-lg: 16px;
      --radius-md: 10px;
      --shadow-soft: 0 18px 40px rgba(15, 23, 42, 0.8);
      --shadow-chip: 0 10px 24px rgba(15, 23, 42, 0.7);
    }

    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", sans-serif;
      background: radial-gradient(circle at top, #1d283a 0, #020617 45%, #000 100%);
      color: var(--text);
      line-height: 1.5;
      min-height: 100vh;
    }

    h1, h2, h3 {
      margin: 0;
      font-weight: 600;
      letter-spacing: 0.03em;
    }

    h1 {
      font-size: clamp(1.7rem, 3vw, 2.2rem);
    }

    h2 {
      font-size: 1.1rem;
      text-transform: uppercase;
    }

    .page {
      max-width: 1200px;
      margin: 0 auto;
      padding: 24px 16px 48px;
    }

    header {
      margin-bottom: 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
    }

    .brand {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
    }

    .brand-logo-img {
      width: 180px;
      height: auto;
      display: block;
      filter: drop-shadow(0 10px 30px rgba(56, 189, 248, 0.35));
    }

    .brand-subtitle {
      font-size: 0.82rem;
      text-transform: uppercase;
      letter-spacing: 0.18em;
      color: var(--muted);
    }

    .pill {
      padding: 8px 14px;
      border-radius: 999px;
      background: rgba(15, 23, 42, 0.9);
      border: 1px solid rgba(56, 189, 248, 0.4);
      color: var(--accent);
      font-size: 0.78rem;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      box-shadow: var(--shadow-chip);
      white-space: nowrap;
    }

    .pill-dot {
      width: 7px;
      height: 7px;
      border-radius: 999px;
      background: #4ade80;
      box-shadow: 0 0 12px rgba(74, 222, 128, 0.9);
    }

    main {
      display: grid;
      grid-template-columns: minmax(0, 2fr) minmax(0, 1fr);
      gap: 20px;
      align-items: flex-start;
    }

    @media (max-width: 900px) {
      main {
        grid-template-columns: minmax(0, 1fr);
      }

      .sticky-summary {
        position: static;
      }
    }

    @media (max-width: 640px) {
      .page {
        max-width: 100%;
        margin: 0;
        padding: 0;
      }

      header {
        flex-direction: column;
        align-items: start;
        padding: 24px 12px 0 12px;
      }

      main {
        padding: 0 12px;
      }

      .card {
        border-radius: 0;
      }

      .group-header,
      .section-header,
      .card-header {
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
      }
    }

    .column-stack {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .sticky-summary {
      position: sticky;
      top: 16px;
    }

    .card {
      background: radial-gradient(circle at top left, rgba(56,189,248,0.08) 0, rgba(15,23,42,0.95) 45%, #020617 100%);
      border-radius: var(--radius-lg);
      padding: 18px 18px 16px;
      border: 1px solid rgba(148, 163, 184, 0.25);
      box-shadow: var(--shadow-soft);
      backdrop-filter: blur(16px);
    }

    .card-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      margin-bottom: 16px;
    }

    .card-header-financial {
      flex-direction: column;
      align-items: flex-start;
    }

    .card-header-financial .toggle {
      width: 100%;
      justify-content: flex-start;
      margin-top: 8px;
    }

    .card-header-financial .toggle-label {
      white-space: normal;
    }

    .card-header h2 {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 0.9rem;
      color: var(--muted);
    }

    .card-header h2 span.icon {
      width: 22px;
      height: 22px;
      border-radius: 999px;
      background: rgba(15, 23, 42, 0.9);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 0.8rem;
      color: var(--accent);
    }

    .card-header p.sub {
      font-size: 0.78rem;
      color: var(--muted);
      margin: 0;
    }

    .card-header .small-action {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 8px 12px;
      border-radius: 999px;
      border: 1px solid rgba(148, 163, 184, 0.35);
      background: rgba(15, 23, 42, 0.6);
      color: var(--text);
      font-size: 0.8rem;
      cursor: pointer;
      transition: all 150ms ease;
    }

    .card-header .small-action:hover {
      background: rgba(56, 189, 248, 0.12);
      border-color: rgba(56, 189, 248, 0.4);
      color: var(--accent);
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 12px 14px;
    }

    .grid.grid-single {
      grid-template-columns: minmax(0, 1fr);
    }

    .field-groups {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .field-group {
      background: linear-gradient(120deg, rgba(56, 189, 248, 0.06), rgba(74, 222, 128, 0.04));
      border: 1px solid rgba(148, 163, 184, 0.2);
      border-radius: var(--radius-md);
      padding: 12px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      position: relative;
      overflow: hidden;
    }

    .group-header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 10px;
      cursor: pointer;
      position: relative;
      user-select: none;
      padding-right: 32px;
    }

    .group-header::after {
      content: "";
      position: absolute;
      top: 50%;
      right: 4px;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      border: 1px solid rgba(148, 163, 184, 0.4);
      background: radial-gradient(circle at 30% 30%, rgba(56, 189, 248, 0.35), rgba(15, 23, 42, 0.8));
      box-shadow: var(--shadow-chip);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: var(--accent);
      font-size: 0.72rem;
      transform: translateY(-50%) rotate(0deg);
      transition: transform 220ms ease, border-color 200ms ease, box-shadow 200ms ease;
    }

    .group-header::before {
      content: "";
      position: absolute;
      inset: -6px -12px;
      border-radius: var(--radius-md);
      opacity: 0;
      transition: opacity 180ms ease;
    }

    .group-header:hover::after {
      border-color: rgba(56, 189, 248, 0.8);
      box-shadow: 0 10px 26px rgba(56, 189, 248, 0.35);
    }

    .group-header:focus-visible {
      outline: 2px solid rgba(56, 189, 248, 0.5);
      outline-offset: 4px;
      border-radius: var(--radius-md);
    }

    .group-header:focus-visible::before,
    .group-header:hover::before {
      opacity: 1;
    }

    .field-group.is-collapsed .group-header::after {
      transform: translateY(-50%) rotate(-90deg);
    }

    .group-content {
      display: flex;
      flex-direction: column;
      gap: 10px;
      border-top: 1px solid rgba(148, 163, 184, 0.16);
      margin-top: 6px;
      padding-top: 10px;
      overflow: hidden;
      max-height: 0;
      opacity: 0;
      transform: translateY(-6px);
      transition: max-height 320ms cubic-bezier(0.33, 1, 0.68, 1), opacity 240ms ease, transform 260ms ease;
      will-change: max-height;
    }

    .field-group:not(.is-collapsed) .group-content {
      opacity: 1;
      max-height: 2000px;
      transform: translateY(0);
    }

    .group-title {
      font-size: 0.82rem;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: var(--text);
      display: inline-flex;
      align-items: center;
      gap: 8px;
      margin: 0;
    }

    .group-title .icon {
      font-size: 0.8rem;
      color: var(--accent);
    }

    .group-sub {
      margin: 0;
      font-size: 0.78rem;
      color: var(--muted);
    }

    .task-editor {
      display: flex;
      flex-direction: column;
      gap: 14px;
      background: rgba(15, 23, 42, 0.55);
      border: 1px solid rgba(148, 163, 184, 0.25);
      border-radius: var(--radius-md);
      padding: 14px 16px;
      box-shadow: var(--shadow-soft);
      height: 100%;
    }

    .task-editor .grid {
      align-items: flex-start;
    }

    .task-editor-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 12px 16px;
      align-items: flex-start;
    }

    .task-editor-grid .full-span {
      grid-column: 1 / -1;
    }

    .task-editor .actions {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      align-items: center;
      padding-top: 14px;
      border-top: 1px solid rgba(148, 163, 184, 0.2);
    }

    .task-editor small {
      color: var(--muted);
    }

    .task-editor .form-hint {
      margin: -2px 0 2px;
      color: var(--muted);
      font-size: 0.82rem;
      flex: 1;
    }

    .tasks-modal-body {
      display: grid;
      grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
      gap: 16px;
      align-items: start;
      max-height: 78vh;
      overflow-y: auto;
      padding-right: 6px;
    }

    .task-list-panel {
      background: rgba(15, 23, 42, 0.55);
      border: 1px solid rgba(148, 163, 184, 0.25);
      border-radius: var(--radius-md);
      padding: 12px;
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 10px;
      box-shadow: var(--shadow-soft);
    }

    .task-list-panel .list-header {
      display: flex;
      flex-direction: column;
      gap: 4px;
      margin-bottom: 4px;
    }

    .task-list-panel .list-header .sub {
      margin: 0;
      color: var(--muted);
      font-size: 0.86rem;
    }

    .task-list-panel h3 {
      margin: 0;
      font-size: 1rem;
      display: flex;
      align-items: center;
      gap: 8px;
      color: var(--text);
    }

    .task-list-panel .list-scroller {
      overflow-y: auto;
      max-height: 58vh;
      padding-right: 4px;
      transition: background 120ms ease, border-color 120ms ease;
      border-radius: var(--radius-md);
    }

    .task-list-panel .list-scroller.dragging-active {
      background: linear-gradient(180deg, rgba(56, 189, 248, 0.08), rgba(56, 189, 248, 0.02));
      border: 1px dashed rgba(56, 189, 248, 0.45);
    }

    .task-list-panel .list-scroller::-webkit-scrollbar {
      width: 10px;
    }

    .task-list-panel .list-scroller::-webkit-scrollbar-track {
      background: rgba(148, 163, 184, 0.08);
      border-radius: 999px;
    }

    .task-list-panel .list-scroller::-webkit-scrollbar-thumb {
      background: linear-gradient(180deg, rgba(56, 189, 248, 0.4), rgba(56, 189, 248, 0.2));
      border-radius: 999px;
      border: 2px solid rgba(15, 23, 42, 0.55);
    }

    .task-list-panel .list-scroller::-webkit-scrollbar-thumb:hover {
      background: linear-gradient(180deg, rgba(56, 189, 248, 0.55), rgba(56, 189, 248, 0.35));
    }

    .task-pills {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-top: 4px;
    }

    .task-pill {
      border: 1px solid rgba(148, 163, 184, 0.25);
      border-radius: var(--radius-md);
      padding: 10px;
      background: rgba(15, 23, 42, 0.65);
      display: flex;
      flex-direction: column;
      gap: 8px;
      position: relative;
      cursor: pointer;
      transition: transform 140ms ease, border-color 140ms ease, box-shadow 140ms ease, background 140ms ease;
    }

    .task-pill.active {
      border-image: linear-gradient(135deg, rgba(168, 85, 247, 0.9), rgba(56, 189, 248, 0.85)) 1;
      box-shadow: 0 10px 30px rgba(99, 102, 241, 0.15);
    }

    .task-pill.dragging {
      opacity: 0.75;
      transform: scale(0.995);
      border-color: rgba(56, 189, 248, 0.4);
      box-shadow: 0 16px 40px rgba(15, 23, 42, 0.8);
    }

    .task-pill.drag-over-top::before,
    .task-pill.drag-over-bottom::after {
      content: "";
      position: absolute;
      left: 8px;
      right: 8px;
      height: 3px;
      border-radius: 999px;
      background: linear-gradient(90deg, rgba(56, 189, 248, 0.2), rgba(56, 189, 248, 0.85), rgba(56, 189, 248, 0.2));
      box-shadow: 0 4px 18px rgba(56, 189, 248, 0.4);
    }

    .task-pill.drag-over-top::before {
      top: -6px;
    }

    .task-pill.drag-over-bottom::after {
      bottom: -6px;
    }

    .task-pill .pill-row {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .task-pill .drag-handle {
      min-width: 34px;
      height: 34px;
      border-radius: 10px;
      border: 1px solid rgba(148, 163, 184, 0.25);
      background: rgba(56, 189, 248, 0.08);
      color: var(--accent);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: grab;
      transition: all 140ms ease;
      box-shadow: var(--shadow-chip);
    }

    .task-pill .drag-handle:active {
      cursor: grabbing;
      transform: scale(0.96);
    }

    .task-pill .drag-handle:hover {
      border-color: rgba(56, 189, 248, 0.5);
      background: rgba(56, 189, 248, 0.15);
    }

    .task-pill strong {
      font-size: 0.92rem;
      letter-spacing: 0.02em;
    }

    .task-pill .meta {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
      align-items: center;
      color: var(--muted);
      font-size: 0.82rem;
    }

    .task-pill .pill-actions {
      position: absolute;
      top: 10px;
      right: 10px;
      display: flex;
      gap: 8px;
    }

    .task-pill .pill-action {
      border: 1px solid rgba(56, 189, 248, 0.4);
      background: rgba(56, 189, 248, 0.12);
      color: var(--accent);
      border-radius: 8px;
      padding: 6px 10px;
      font-size: 0.78rem;
      cursor: pointer;
      transition: all 120ms ease;
    }

    .task-pill .pill-action:hover {
      background: rgba(56, 189, 248, 0.2);
    }

    .task-pill .pill-action--danger {
      border-color: rgba(249, 115, 115, 0.4);
      background: rgba(249, 115, 115, 0.12);
      color: var(--danger);
    }

    .task-pill .pill-action--danger:hover {
      background: rgba(249, 115, 115, 0.2);
    }

    /* Modale */
    .modal {
      position: fixed;
      inset: 0;
      display: none;
      align-items: center;
      justify-content: center;
      padding: 18px;
      z-index: 1000;
    }

    .modal.is-open {
      display: flex;
    }

    .modal-overlay {
      position: absolute;
      inset: 0;
      background: rgba(4, 6, 12, 0.65);
      backdrop-filter: blur(4px);
    }

    .modal-content {
      position: relative;
      width: min(1040px, 100%);
      max-height: 90vh;
      z-index: 1;
    }

    .modal-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
    }

    .modal-title-block {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .modal-logo {
      width: 150px;
      height: auto;
      display: block;
      filter: drop-shadow(0 10px 30px rgba(56, 189, 248, 0.25));
    }

    .modal-actions {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .close-modal {
      background: rgba(15, 23, 42, 0.7);
      border: 1px solid rgba(148, 163, 184, 0.4);
      border-radius: 12px;
      color: var(--text);
      width: 36px;
      height: 36px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 120ms ease;
    }

    .close-modal:hover,
    .close-modal:focus-visible {
      color: var(--accent);
      border-color: rgba(56, 189, 248, 0.5);
      outline: none;
      box-shadow: var(--shadow-soft);
    }

    body.modal-open {
      overflow: hidden;
    }

    @media (max-width: 600px) {
      .grid {
        grid-template-columns: minmax(0, 1fr);
      }
    }

    @media (max-width: 780px) {
      .tasks-modal-body {
        grid-template-columns: minmax(0, 1fr);
      }
    }

    .field {
      display: flex;
      flex-direction: column;
      gap: 4px;
      font-size: 0.8rem;
    }

    .field label {
      color: var(--muted);
      display: flex;
      justify-content: space-between;
      gap: 8px;
      font-size: 0.8rem;
    }

    .translation-params {
      margin-top: 12px;
    }

    .translation-hint {
      margin-top: 10px;
      padding: 10px 12px;
      border-radius: var(--radius-md);
      background: var(--accent-soft);
      color: var(--muted);
      font-size: 0.8rem;
      border: 1px dashed rgba(56, 189, 248, 0.35);
    }

    .hint-icon {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 18px;
      height: 18px;
      margin-left: 6px;
      border-radius: 999px;
      background: rgba(56, 189, 248, 0.08);
      border: 1px solid rgba(56, 189, 248, 0.35);
      color: var(--accent);
      font-size: 0.68rem;
      font-weight: 700;
      line-height: 1;
      cursor: help;
      transition: border-color 0.15s ease, background 0.15s ease, color 0.15s ease, box-shadow 0.2s ease;
    }

    .hint-icon:hover,
    .hint-icon:focus-visible {
      background: rgba(56, 189, 248, 0.16);
      border-color: rgba(56, 189, 248, 0.6);
      color: #67e8f9;
      box-shadow: 0 10px 24px rgba(56, 189, 248, 0.15);
      outline: none;
    }

    .hint-icon::after {
      content: attr(data-tooltip);
      position: absolute;
      inset: auto auto calc(100% + 10px) auto;
      right: 0;
      min-width: 160px;
      max-width: 260px;
      padding: 8px 10px;
      border-radius: var(--radius-md);
      background: rgba(15, 23, 42, 0.96);
      border: 1px solid rgba(56, 189, 248, 0.25);
      color: var(--text);
      font-size: 0.75rem;
      line-height: 1.3;
      box-shadow: 0 16px 30px rgba(15, 23, 42, 0.55);
      opacity: 0;
      transform: translateY(6px);
      pointer-events: none;
      transition: opacity 0.15s ease, transform 0.15s ease;
      white-space: normal;
      z-index: 2;
    }

      .hint-icon:hover::after,
      .hint-icon:focus-visible::after {
        opacity: 1;
        transform: translateY(0);
      }

      .checkbox input:focus-visible {
        outline: 2px solid rgba(56, 189, 248, 0.45);
        outline-offset: 2px;
      }

      .checkbox input:checked {
        border-color: transparent;
        background: linear-gradient(135deg, rgba(56, 189, 248, 0.95), rgba(14, 165, 233, 0.9));
        box-shadow: 0 8px 18px rgba(14, 165, 233, 0.25);
      }

      .checkbox input:checked::after {
        content: "";
        width: 5px;
        height: 8px;
        border-right: 2px solid #0b1224;
        border-bottom: 2px solid #0b1224;
        transform: rotate(45deg);
      }

      .checkbox span {
        color: var(--text);
        font-weight: 500;
        font-size: 0.78rem;
      }

    .field-subsection {
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 8px;
      border: 1px dashed rgba(148, 163, 184, 0.25);
      border-radius: var(--radius-md);
      background: rgba(15, 23, 42, 0.35);
    }

    .field-subtitle {
      margin: 0;
      font-size: 0.78rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--muted);
    }

    .field input[type="number"],
    .field input[type="text"],
    .field select {
      background: rgba(15, 23, 42, 0.95);
      border-radius: var(--radius-md);
      border: 1px solid rgba(31, 41, 55, 0.9);
      padding: 8px 10px;
      color: var(--text);
      outline: none;
      font-size: 0.82rem;
      transition: border-color 0.15s ease, box-shadow 0.15s ease, background 0.15s ease;
      width: 100%;
    }

    .field input[type="number"]:focus,
    .field input[type="text"]:focus,
    .field select:focus {
      border-color: var(--accent);
      box-shadow: 0 0 0 1px rgba(56, 189, 248, 0.5);
      background: rgba(15, 23, 42, 1);
    }

    .field .control-row {
      display: flex;
      gap: 10px;
      align-items: center;
    }

    .field .control-row select {
      flex: 1 1 auto;
    }

    .tariff-field {
      margin-bottom: 10px;
    }

    .ghost-button {
      background: rgba(56, 189, 248, 0.08);
      border: 1px solid rgba(56, 189, 248, 0.3);
      color: var(--accent);
      border-radius: var(--radius-md);
      padding: 8px 12px;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease;
      white-space: nowrap;
    }

    .ghost-button:hover {
      background: rgba(56, 189, 248, 0.16);
      border-color: rgba(56, 189, 248, 0.5);
      color: #67e8f9;
    }

    .field input::placeholder {
      color: #4b5563;
    }

    .field-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      margin-bottom: 10px;
    }

    .field-row .title {
      font-size: 0.8rem;
      color: var(--muted);
    }

    .field-row .value {
      font-size: 0.9rem;
      font-weight: 500;
    }

    .tag {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 4px 10px;
      border-radius: 999px;
      background: rgba(15, 23, 42, 0.95);
      border: 1px solid rgba(56, 189, 248, 0.2);
      font-size: 0.7rem;
      color: var(--muted);
    }

    .tag-dot {
      width: 7px;
      height: 7px;
      border-radius: 999px;
      background: var(--accent-2);
      box-shadow: 0 0 10px rgba(74, 222, 128, 0.8);
    }

    .roles-table-wrapper {
      border-radius: var(--radius-md);
      border: 1px solid rgba(31, 41, 55, 0.9);
      background: radial-gradient(circle at top, rgba(56,189,248,0.1) 0, #020617 45%, #020617 100%);
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: thin;
      scrollbar-color: rgba(56, 189, 248, 0.4) rgba(148, 163, 184, 0.08);
    }

    .roles-table-wrapper::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }

    .roles-table-wrapper::-webkit-scrollbar-track {
      background: rgba(148, 163, 184, 0.08);
      border-radius: 999px;
    }

    .roles-table-wrapper::-webkit-scrollbar-thumb {
      background: linear-gradient(180deg, rgba(56, 189, 248, 0.4), rgba(56, 189, 248, 0.2));
      border-radius: 999px;
      border: 2px solid rgba(15, 23, 42, 0.55);
    }

    .roles-table-wrapper::-webkit-scrollbar-thumb:hover {
      background: linear-gradient(180deg, rgba(56, 189, 248, 0.55), rgba(56, 189, 248, 0.35));
    }

    table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.78rem;
      min-width: 100%;
    }

    thead {
      position: sticky;
      top: 0;
      background: rgba(15, 23, 42, 0.98);
      backdrop-filter: blur(10px);
      z-index: 1;
    }

    th, td {
      padding: 7px 10px;
      text-align: left;
      white-space: nowrap;
    }

    th {
      font-weight: 500;
      color: #9ca3af;
      border-bottom: 1px solid rgba(31, 41, 55, 0.9);
      text-transform: uppercase;
      font-size: 0.7rem;
      letter-spacing: 0.08em;
    }

    tbody tr:nth-child(odd) td {
      background: rgba(15, 23, 42, 0.7);
    }

    tbody tr:nth-child(even) td {
      background: rgba(15, 23, 42, 0.95);
    }

    tbody tr:hover td {
      background: rgba(30, 64, 175, 0.45);
    }

    .roles-table input {
      background: rgba(15, 23, 42, 0.95);
      border-radius: 999px;
      border: 1px solid rgba(31, 41, 55, 0.9);
      padding: 4px 8px;
      color: var(--text);
      font-size: 0.75rem;
      width: 70px;
      outline: none;
    }

    .roles-table input:focus {
      border-color: var(--accent);
      box-shadow: 0 0 0 1px rgba(56, 189, 248, 0.6);
    }

    .summary-row {
      display: grid;
      grid-template-columns: minmax(0, 1fr);
      gap: 10px;
      margin-top: 14px;
    }

    @media (max-width: 900px) {
      .summary-row {
        grid-template-columns: minmax(0, 1fr);
      }
    }

    .summary-card {
      padding: 12px 12px 10px;
      border-radius: var(--radius-md);
      border: 1px solid rgba(56, 189, 248, 0.25);
      background: linear-gradient(140deg, rgba(15,23,42,0.96), rgba(12,23,45,0.96));
      box-shadow: 0 16px 30px rgba(15,23,42,0.85);
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .summary-card-highlight {
      background: linear-gradient(135deg, #ff4ecd 0%, #7c3aed 45%, #0ea5e9 100%);
      border-color: rgba(255, 78, 205, 0.7);
      box-shadow: 0 18px 38px rgba(124, 58, 237, 0.45);
      position: relative;
      overflow: hidden;
      color: #f8fbff;
    }

    .summary-card-highlight::after {
      content: "";
      position: absolute;
      inset: -20% auto auto 50%;
      width: 120%;
      height: 120%;
      background: radial-gradient(circle at top, rgba(255, 255, 255, 0.18), transparent 60%);
      pointer-events: none;
      transform: translateX(-50%);
    }

    .summary-card-highlight .summary-label,
    .summary-card-highlight .summary-chip {
      color: rgba(248, 251, 255, 0.9);
    }

    .summary-card-highlight .summary-value,
    .summary-card-highlight .summary-chip-strong {
      color: #fefefe;
    }

    .summary-label {
      font-size: 0.72rem;
      color: var(--muted);
      text-transform: uppercase;
      letter-spacing: 0.12em;
    }

    .summary-value {
      font-size: 1rem;
      font-weight: 600;
    }

    .summary-value.options-badges {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      font-weight: 600;
      font-size: 0.9rem;
    }

    .option-pill {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 10px;
      border-radius: 999px;
      background: linear-gradient(120deg, rgba(56, 189, 248, 0.12), rgba(74, 222, 128, 0.1));
      border: 1px solid rgba(148, 163, 184, 0.2);
      color: var(--text);
      line-height: 1.1;
    }

    .option-pill .pill-icon {
      font-size: 0.9rem;
      opacity: 0.9;
    }

    .option-pill .pill-label {
      font-size: 0.86rem;
    }

    .option-pill.accent {
      background: linear-gradient(120deg, rgba(56, 189, 248, 0.18), rgba(56, 189, 248, 0.1));
      border-color: rgba(56, 189, 248, 0.35);
    }

    .option-pill.success {
      background: linear-gradient(120deg, rgba(74, 222, 128, 0.18), rgba(22, 163, 74, 0.12));
      border-color: rgba(74, 222, 128, 0.35);
    }

    .option-pill.muted {
      background: rgba(148, 163, 184, 0.12);
      border-color: rgba(148, 163, 184, 0.3);
      color: var(--muted);
    }

    .summary-chip {
      margin-top: 2px;
      font-size: 0.72rem;
      color: var(--muted);
    }

    .summary-chip-strong {
      font-weight: 600;
      letter-spacing: 0.01em;
    }

    .summary-value.accent {
      color: var(--accent);
    }

    .summary-value.success {
      color: var(--accent-2);
    }

    .section {
      margin-top: 22px;
    }

    .section-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      margin-bottom: 10px;
    }

    .section-header h3 {
      font-size: 0.9rem;
      text-transform: uppercase;
      color: var(--muted);
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .tasks-toolbar {
      display: grid;
      grid-template-columns: 1fr;
      align-items: stretch;
      gap: 12px;
      margin-bottom: 12px;
      padding: 12px 14px;
      border: 1px solid rgba(148, 163, 184, 0.25);
      border-radius: var(--radius-md);
      background: linear-gradient(120deg, rgba(56, 189, 248, 0.08), rgba(74, 222, 128, 0.05));
      box-shadow: var(--shadow-soft);
    }

    .toolbar-block {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 12px;
      flex-wrap: wrap;
    }

    .toolbar-text {
      display: flex;
      flex-direction: column;
      gap: 4px;
      min-width: 200px;
    }

    .toolbar-controls {
      display: flex;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap;
      justify-content: flex-end;
    }

    .toolbar-heading,
    .tasks-toolbar .toolbar-text label {
      font-size: 0.82rem;
      color: var(--text);
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }

    .tasks-toolbar .label-sub {
      color: var(--muted);
      font-size: 0.78rem;
    }

    .toolbar-divider {
      display: none;
      border-left: 1px dashed rgba(148, 163, 184, 0.4);
      height: 100%;
      margin: 0 4px;
    }

    @media (min-width: 960px) {
      .tasks-toolbar {
        grid-template-columns: 1fr auto 1fr;
      }

      .toolbar-divider {
        display: block;
      }
    }

    .filter-select {
      position: relative;
      min-width: 230px;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 8px 10px;
      border-radius: var(--radius-md);
      background: rgba(15, 23, 42, 0.75);
      border: 1px solid rgba(148, 163, 184, 0.25);
    }

    .filter-select .filter-icon {
      width: 30px;
      height: 30px;
      border-radius: 10px;
      background: rgba(56, 189, 248, 0.08);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 0.9rem;
      color: var(--accent);
      border: 1px solid rgba(56, 189, 248, 0.22);
      flex-shrink: 0;
    }

    .filter-select select {
      appearance: none;
      background: transparent;
      border: 1px solid rgba(148, 163, 184, 0.3);
      border-radius: 8px;
      color: var(--text);
      font-size: 0.92rem;
      padding: 8px 32px 8px 10px;
      min-width: 190px;
      cursor: pointer;
      transition: border-color 0.12s ease;
    }

    .filter-select select:focus {
      outline: none;
      border-color: rgba(56, 189, 248, 0.6);
    }

    .filter-select select option {
      background: #0b1220;
      color: var(--text);
    }

    .filter-select select option:checked {
      background: rgba(56, 189, 248, 0.14);
      color: var(--accent);
      font-weight: 600;
    }

    .filter-select .select-caret {
      position: absolute;
      right: 12px;
      color: var(--muted);
      font-size: 0.82rem;
      pointer-events: none;
    }

    .toggle {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 14px 10px;
      width: 220px;
      border-radius: var(--radius-md);
      border: 1px solid rgba(148, 163, 184, 0.22);
      background: rgba(15, 23, 42, 0.8);
      cursor: pointer;
      transition: border-color 0.15s ease, background 0.15s ease;
    }

    .toggle:hover {
      border-color: rgba(56, 189, 248, 0.4);
      background: rgba(56, 189, 248, 0.06);
    }

    .toggle input {
      display: none;
    }

    .toggle-switch {
      position: relative;
      width: 42px;
      height: 22px;
      border-radius: 999px;
      background: rgba(148, 163, 184, 0.4);
      border: 1px solid rgba(148, 163, 184, 0.3);
      transition: background 0.2s ease, border-color 0.2s ease;
    }

    .toggle-switch::after {
      content: "";
      position: absolute;
      top: 2px;
      left: 2px;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: #0b1220;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35);
      transition: transform 0.2s ease, background 0.2s ease;
    }

    .toggle input:checked + .toggle-switch {
      background: linear-gradient(135deg, rgba(56, 189, 248, 0.8), rgba(124, 58, 237, 0.9));
      border-color: rgba(124, 58, 237, 0.9);
    }

    .toggle input:checked + .toggle-switch::after {
      transform: translateX(20px);
      background: #c084fc;
      box-shadow: 0 4px 14px rgba(124, 58, 237, 0.55);
    }

    .toggle-label {
      font-size: 0.82rem;
      color: var(--text);
      white-space: nowrap;
    }

    .chip-group {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
    }

    .chip {
      padding: 3px 9px;
      border-radius: 999px;
      border: 1px solid rgba(148, 163, 184, 0.35);
      font-size: 0.7rem;
      color: var(--muted);
      background: rgba(15, 23, 42, 0.9);
    }

    .chip strong {
      color: var(--accent);
      font-weight: 500;
    }

    .tasks-table-wrapper {
      border-radius: var(--radius-md);
      border: 1px solid rgba(31, 41, 55, 0.9);
      background: radial-gradient(circle at top, rgba(56,189,248,0.12) 0, #020617 50%, #020617 100%);
      overflow-x: auto;
      scrollbar-width: thin;
      scrollbar-color: rgba(56, 189, 248, 0.4) rgba(148, 163, 184, 0.08);
    }

    .tasks-modal-body::-webkit-scrollbar,
    .tasks-table-wrapper::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }

    .tasks-modal-body::-webkit-scrollbar-track,
    .tasks-table-wrapper::-webkit-scrollbar-track {
      background: rgba(148, 163, 184, 0.08);
      border-radius: 999px;
    }

    .tasks-modal-body::-webkit-scrollbar-thumb,
    .tasks-table-wrapper::-webkit-scrollbar-thumb {
      background: linear-gradient(180deg, rgba(56, 189, 248, 0.4), rgba(56, 189, 248, 0.2));
      border-radius: 999px;
      border: 2px solid rgba(15, 23, 42, 0.55);
    }

    .tasks-modal-body::-webkit-scrollbar-thumb:hover,
    .tasks-table-wrapper::-webkit-scrollbar-thumb:hover {
      background: linear-gradient(180deg, rgba(56, 189, 248, 0.55), rgba(56, 189, 248, 0.35));
    }

    .tasks-phase {
      font-weight: 600;
      color: var(--accent-2);
      font-size: 0.78rem;
      text-transform: uppercase;
      letter-spacing: 0.09em;
    }

    .is-hidden {
      display: none !important;
    }

    tfoot td {
      border-top: 1px solid rgba(31, 41, 55, 0.9);
      font-weight: 500;
      background: radial-gradient(circle at top, rgba(56,189,248,0.18) 0, rgba(15,23,42,0.95) 55%, #020617 100%);
    }

    .align-right {
      text-align: right;
    }

    .muted {
      color: var(--muted);
      font-size: 0.78rem;
    }

    .danger {
      color: var(--danger);
    }

    .footer-note {
      margin-top: 16px;
      font-size: 0.76rem;
      color: var(--muted);
      text-align: right;
    }

    .footer-note span {
      color: var(--accent);
    }

    .footer-note b {
      color: var(--text);
    }

    .card-actions {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-bottom: 12px;
    }

    .card-actions-buttons {
      display: flex;
      align-items: stretch;
      gap: 10px;
      flex-wrap: wrap;
      justify-content: flex-end;
    }

    .file-input-label {
      position: relative;
      overflow: hidden;
    }

    .file-input-label input[type="file"] {
      position: absolute;
      inset: 0;
      opacity: 0;
      cursor: pointer;
    }

    .import-status {
      font-size: 0.75rem;
      color: var(--muted);
      text-align: right;
    }
    .import-status.error { color: var(--danger); }

    .card-actions .ghost-button,
    .card-actions .file-input-label {
      flex: 1 1 180px;
      min-height: 42px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      background: rgba(56, 189, 248, 0.05);
      border-color: rgba(56, 189, 248, 0.18);
      color: var(--text);
      font-weight: 500;
    }

    .card-actions .ghost-button:hover,
    .card-actions .file-input-label:hover {
      background: rgba(56, 189, 248, 0.12);
      border-color: rgba(56, 189, 248, 0.32);
      color: var(--accent);
    }

    .ghost-button--compact {
      padding: 8px 10px;
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }
  </style>
</head>
<body>
  <div class="page">
    <header>
      <div class="brand">
        <img src="assets/logo.webp" alt="Logo Takamoa" class="brand-logo-img">
        <span class="brand-subtitle">SITE VITRINE SUR-MESURE</span>
      </div>
      <div class="pill">
        <span class="pill-dot"></span>
        Temps réel · Devis modulaire
      </div>
    </header>

    <main>
      <div class="column-stack">
        <!-- COLONNE 1 : Paramètres projet -->
        <section class="card">
          <div class="card-header">
            <div>
              <h2><span class="icon">⚙</span> Paramètres du projet</h2>
              <p class="sub">Renseigne le volume de travail, la complexité et ta marge.</p>
            </div>
            <div class="tag">
              <span class="tag-dot"></span>
              Mode freelance · multi-rôles
            </div>
          </div>

          <div class="card-actions" aria-label="Import et export des paramètres du calculateur">
            <div class="card-actions-buttons">
              <button type="button" id="export_params" class="ghost-button">Exporter les paramètres</button>
              <label class="ghost-button file-input-label">
                Importer un fichier
                <input type="file" id="import_params" accept="application/json" aria-label="Importer des paramètres JSON">
              </label>
            </div>
            <span id="import_status" class="import-status" aria-live="polite"></span>
          </div>

          <div class="field-groups">
            <div class="field-group">
              <div class="group-header">
                <h3 class="group-title"><span class="icon">🎯</span> Cadre du projet</h3>
                <p class="group-sub">Précise le contexte général et la complexité.</p>
              </div>
              <div class="grid" aria-label="Cadre général du projet">
                <div class="field">
                  <label for="param_type_site">
                    Type de site
                    <span class="hint-icon" data-tooltip="applique un preset" role="note" tabindex="0" aria-label="applique un preset">?</span>
                  </label>
                  <div class="control-row">
                    <select id="param_type_site">
                      <option value="landing">Landing Page</option>
                      <option value="vitrine" selected>Site vitrine</option>
                      <option value="vitrine_avancee">Vitrine avancée</option>
                    </select>
                    <button type="button" id="preset_reset" class="ghost-button">Reset</button>
                  </div>
                </div>

                <div class="field">
                  <label for="param_comment">
                    Intitulé du projet
                    <span class="hint-icon" data-tooltip="pour tes exports" role="note" tabindex="0" aria-label="pour tes exports">?</span>
                  </label>
                  <input type="text" id="param_comment" placeholder="Site vitrine pour EVADIA…">
                </div>

                <div class="field">
                  <label for="param_complexity">
                    Complexité globale
                    <span class="hint-icon" data-tooltip="multiplie toutes les tâches" role="note" tabindex="0" aria-label="multiplie toutes les tâches">?</span>
                  </label>
                  <select id="param_complexity">
                    <option value="1">Simple (x1.0)</option>
                    <option value="1.2" selected>Standard (x1.2)</option>
                    <option value="1.5">Complexe (x1.5)</option>
                  </select>
                </div>

                <div class="field">
                  <label for="param_buffer">
                    Buffer imprévus
                    <span class="hint-icon" data-tooltip="en % sur le coût interne" role="note" tabindex="0" aria-label="en % sur le coût interne">?</span>
                  </label>
                  <input type="number" id="param_buffer" min="0" step="5" value="10">
                </div>
              </div>
            </div>

            <div class="field-group">
              <div class="group-header">
                <h3 class="group-title"><span class="icon">📄</span> Structure du site</h3>
                <p class="group-sub">Organise les pages prévues pour le projet.</p>
              </div>
              <div class="grid" aria-label="Structure du site">
                <div class="field">
                  <label for="param_nb_home">
                    Nb. pages d'accueil (variantes)
                  </label>
                  <input type="number" id="param_nb_home" min="1" step="1" value="1">
                </div>

                <div class="field">
                  <label for="param_nb_pages">
                    Nb. pages internes
                    <span class="hint-icon" data-tooltip="hors home, services, blog et pages légales" role="note" tabindex="0" aria-label="hors home, services, blog et pages légales">?</span>
                  </label>
                  <input type="number" id="param_nb_pages" min="0" step="1" value="4">
                </div>

                <div class="field">
                  <label for="param_nb_legal">
                    Pages légales (incluses)
                    <span class="hint-icon" data-tooltip="mentions légales, CGV, politique…" role="note" tabindex="0" aria-label="mentions légales, CGV, politique…">?</span>
                  </label>
                  <input type="number" id="param_nb_legal" min="0" step="1" value="3">
                </div>

                <div class="field">
                  <label for="param_seo_mode">
                    Intensité SEO automatique
                    <span class="hint-icon" data-tooltip="calcule les pages à optimiser selon le volume" role="note" tabindex="0" aria-label="calcule les pages à optimiser selon le volume">?</span>
                  </label>
                  <select id="param_seo_mode">
                    <option value="0.6">Essentiel (60% du volume)</option>
                    <option value="1" selected>Standard (100% du volume)</option>
                    <option value="1.3">Renforcé (130% du volume)</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field-group">
              <div class="group-header">
                <h3 class="group-title"><span class="icon">🛠️</span> Pages services</h3>
                <p class="group-sub">Détaille les gabarits de ta page services et des fiches.</p>
              </div>
              <div class="field-subsection">
                <p class="field-subtitle">Activation & structure</p>
                <div class="grid" aria-label="Pages services et gabarits">
                  <div class="field">
                    <label for="param_service_listing">
                      Page Services (listing)
                      <span class="hint-icon" data-tooltip="0 = non prévue, 1 = incluse" role="note" tabindex="0" aria-label="0 = non prévue, 1 = incluse">?</span>
                    </label>
                    <input type="number" id="param_service_listing" min="0" max="1" step="1" value="1">
                  </div>

                  <div class="field">
                    <label for="param_service_details">
                      Nb. pages détail service
                      <span class="hint-icon" data-tooltip="hors page listing" role="note" tabindex="0" aria-label="hors page listing">?</span>
                    </label>
                    <input type="number" id="param_service_details" min="0" step="1" value="3">
                  </div>

                  <div class="field">
                    <label for="param_service_design_mode">
                      Design des pages service
                      <span class="hint-icon" data-tooltip="impacte les heures de design/dev" role="note" tabindex="0" aria-label="impacte les heures de design/dev">?</span>
                    </label>
                    <select id="param_service_design_mode">
                      <option value="1">Gabarit unique pour tous les services</option>
                      <option value="1.4">Design spécifique par service (+40%)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="field-subsection">
                <p class="field-subtitle">Contenus & SEO</p>
                <div class="grid" aria-label="Contenus et SEO pour les services">
                  <div class="field">
                    <label for="param_service_content">
                      Rédaction + SEO des fiches
                      <span class="hint-icon" data-tooltip="applique la SEO auto sur listing + fiches" role="note" tabindex="0" aria-label="applique la SEO auto sur listing + fiches">?</span>
                    </label>
                    <select id="param_service_content">
                      <option value="1" selected>Oui, couvrir toutes les pages services</option>
                      <option value="0">Non, SEO/rédaction gérés ailleurs</option>
                    </select>
                  </div>

                  <div class="field">
                    <label for="param_service_visuals">
                      Illustrations pour les services ?
                      <span class="hint-icon" data-tooltip="impacts le volume rédaction/graphisme" role="note" tabindex="0" aria-label="impacts le volume rédaction/graphisme">?</span>
                    </label>
                    <select id="param_service_visuals">
                      <option value="1">Oui, un visuel par fiche</option>
                      <option value="0" selected>Non, visuels non prévus</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div class="field-group">
              <div class="group-header">
                <h3 class="group-title"><span class="icon">🏆</span> Pages réalisations</h3>
                <p class="group-sub">Ajuste le volume d'études de cas et le niveau de personnalisation.</p>
              </div>
              <div class="field-subsection">
                <p class="field-subtitle">Activation & structure</p>
                <div class="grid" aria-label="Pages réalisations et études de cas">
                  <div class="field">
                    <label for="param_rea_listing">
                      Page Réalisations (listing)
                      <span class="hint-icon" data-tooltip="0 = non prévue, 1 = incluse" role="note" tabindex="0" aria-label="0 = non prévue, 1 = incluse">?</span>
                    </label>
                    <input type="number" id="param_rea_listing" min="0" max="1" step="1" value="1">
                  </div>

                  <div class="field">
                    <label for="param_rea_details">
                      Nb. études de cas détaillées
                      <span class="hint-icon" data-tooltip="hors page listing" role="note" tabindex="0" aria-label="hors page listing">?</span>
                    </label>
                    <input type="number" id="param_rea_details" min="0" step="1" value="3">
                  </div>

                  <div class="field">
                    <label for="param_rea_design_mode">
                      Design des pages réalisations
                      <span class="hint-icon" data-tooltip="impacte les heures de design/dev" role="note" tabindex="0" aria-label="impacte les heures de design/dev">?</span>
                    </label>
                    <select id="param_rea_design_mode">
                      <option value="1">Gabarit unique pour toutes les études</option>
                      <option value="1.4">Design spécifique par étude (+40%)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="field-subsection">
                <p class="field-subtitle">Contenus & SEO</p>
                <div class="grid" aria-label="Contenus et SEO pour les réalisations">
                  <div class="field">
                    <label for="param_rea_content">
                      Rédaction + SEO des études de cas
                      <span class="hint-icon" data-tooltip="applique la SEO auto sur listing + cas" role="note" tabindex="0" aria-label="applique la SEO auto sur listing + cas">?</span>
                    </label>
                    <select id="param_rea_content">
                      <option value="1" selected>Oui, couvrir toutes les réalisations</option>
                      <option value="0">Non, SEO/rédaction gérés ailleurs</option>
                    </select>
                  </div>

                  <div class="field">
                    <label for="param_rea_visuals">
                      Illustrations pour les réalisations ?
                      <span class="hint-icon" data-tooltip="photos, schémas ou mockups" role="note" tabindex="0" aria-label="photos, schémas ou mockups">?</span>
                    </label>
                    <select id="param_rea_visuals">
                      <option value="1">Oui, un visuel par cas</option>
                      <option value="0" selected>Non, pas de visuels dédiés</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div class="field-group">
              <div class="group-header">
                <h3 class="group-title"><span class="icon">📰</span> Blog & contenu</h3>
                <p class="group-sub">Active le blog, prépare les nouveaux articles et ajuste l'import d'anciens contenus.</p>
              </div>
              <div class="field-subsection">
                <p class="field-subtitle">Activation & création d'articles</p>
                <div class="grid" aria-label="Activation du blog et production d'articles">
                  <div class="field">
                    <label for="param_has_blog">
                      Activer le blog ?
                      <span class="hint-icon" data-tooltip="0 = non, 1 = oui" role="note" tabindex="0" aria-label="0 = non, 1 = oui">?</span>
                    </label>
                    <input type="number" id="param_has_blog" min="0" max="1" step="1" value="1">
                  </div>

                  <div class="field">
                    <label for="param_blog_articles">
                      Articles à créer
                      <span class="hint-icon" data-tooltip="hors import si refonte" role="note" tabindex="0" aria-label="hors import si refonte">?</span>
                    </label>
                    <input type="number" id="param_blog_articles" min="0" step="1" value="2">
                  </div>

                  <div class="field">
                    <label for="param_blog_visuals">
                      Visuel dédié pour chaque article ?
                      <span class="hint-icon" data-tooltip="impacte graphisme / contenus" role="note" tabindex="0" aria-label="impacte graphisme / contenus">?</span>
                    </label>
                    <select id="param_blog_visuals">
                      <option value="1">Oui, un visuel par article</option>
                      <option value="0">Non, visuels non prévus</option>
                    </select>
                  </div>

                  <div class="field">
                    <label for="param_blog_seo">
                      Optimisation SEO pour chaque article ?
                      <span class="hint-icon" data-tooltip="métas, maillage, balisage" role="note" tabindex="0" aria-label="métas, maillage, balisage">?</span>
                    </label>
                    <select id="param_blog_seo">
                      <option value="1">Oui, optimiser chaque article</option>
                      <option value="0">Non, sans optimisation dédiée</option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="field-subsection">
                <p class="field-subtitle">Import d'articles existants</p>
                <div class="grid" aria-label="Blog et import d'articles">
                  <div class="field">
                    <label for="param_import_articles">
                      Articles à importer (refonte)
                      <span class="hint-icon" data-tooltip="uniquement si blog activé" role="note" tabindex="0" aria-label="uniquement si blog activé">?</span>
                    </label>
                    <input type="number" id="param_import_articles" min="0" step="1" value="0">
                  </div>

                  <div class="field">
                    <label for="param_import_batch_size">
                      Articles par batch d'import
                      <span class="hint-icon" data-tooltip="pour le calcul dégressif" role="note" tabindex="0" aria-label="pour le calcul dégressif">?</span>
                    </label>
                    <input type="number" id="param_import_batch_size" min="1" step="1" value="10">
                  </div>

                  <div class="field">
                    <label for="param_import_base_cost">
                      Coût initial par batch (€)
                      <span class="hint-icon" data-tooltip="avant dégressivité" role="note" tabindex="0" aria-label="avant dégressivité">?</span>
                    </label>
                    <input type="number" id="param_import_base_cost" min="0" step="10" value="120">
                  </div>

                  <div class="field">
                    <label for="param_import_degressif">
                      Facteur dégressif par batch
                      <span class="hint-icon" data-tooltip="0.9 = -10% par batch supplémentaire" role="note" tabindex="0" aria-label="0.9 = -10% par batch supplémentaire">?</span>
                    </label>
                    <input type="number" id="param_import_degressif" min="0" max="1.5" step="0.05" value="0.9">
                  </div>
                </div>
              </div>
            </div>

            <div class="field-group">
              <div class="group-header">
                <h3 class="group-title"><span class="icon">🌐</span> Traduction & langues</h3>
                <p class="group-sub">Activation du multilingue et estimation des volumes à traduire.</p>
              </div>
              <div class="field-subsection">
                <p class="field-subtitle">Configuration multilingue</p>
                <div class="grid" aria-label="Options de traduction du site">
                  <div class="field">
                    <label for="param_translation_mode">
                      Activer la traduction du site ?
                      <span class="hint-icon" data-tooltip="GTranslate (automatique) ou WPML (multilingue complet)" role="note" tabindex="0" aria-label="GTranslate (automatique) ou WPML (multilingue complet)">?</span>
                    </label>
                    <select id="param_translation_mode">
                      <option value="none" selected>Pas de traduction</option>
                      <option value="gtranslate">Oui, via GTranslate</option>
                      <option value="wpml">Oui, via WPML</option>
                    </select>
                  </div>

                  <div class="field">
                    <label for="param_translation_languages">
                      Nombre total de langues
                      <span class="hint-icon" data-tooltip="Inclut la langue par défaut du site" role="note" tabindex="0" aria-label="Inclut la langue par défaut du site">?</span>
                    </label>
                    <input type="number" id="param_translation_languages" min="1" step="1" value="2">
                  </div>
                </div>

                <div class="field-subsection translation-params is-hidden" id="translation-params-block">
                  <p class="field-subtitle">Volumes pour la traduction du site</p>
                  <div class="grid" aria-label="Volumes pour la traduction">
                    <div class="field">
                      <label for="param_translation_pages">
                        Pages de contenu à traduire (P)
                        <span class="hint-icon" data-tooltip="Pages principales à traduire" role="note" tabindex="0" aria-label="Pages principales à traduire">?</span>
                      </label>
                      <input type="number" id="param_translation_pages" min="0" step="1" value="0">
                    </div>

                    <div class="field">
                      <label for="param_translation_products">
                        Autres contenus spécialisés (N)
                        <span class="hint-icon" data-tooltip="Sections spécifiques, fiches ou modules à traduire" role="note" tabindex="0" aria-label="Sections spécifiques, fiches ou modules à traduire">?</span>
                      </label>
                      <input type="number" id="param_translation_products" min="0" step="1" value="0">
                    </div>
                  </div>

                  <div class="translation-hint">
                    Laisse les champs à 0 pour que le calcul s'appuie sur le volume total de pages saisies plus haut.
                  </div>
                </div>
              </div>
            </div>

            <div class="field-group">
              <div class="group-header">
                <h3 class="group-title"><span class="icon">🎨</span> Identité visuelle</h3>
                <p class="group-sub">Module logo, déclinaisons, charte et templates.</p>
              </div>
              <div class="field-subsection">
                <p class="field-subtitle">Logo & pistes créatives</p>
                <div class="grid" aria-label="Paramètres identité visuelle">
                  <div class="field">
                    <label for="param_opt_logo">
                      Inclure la création / refonte de logo ?
                      <span class="hint-icon" data-tooltip="0 = non, 1 = oui" role="note" tabindex="0" aria-label="0 = non, 1 = oui">?</span>
                    </label>
                    <input type="number" id="param_opt_logo" min="0" max="1" step="1" value="1">
                  </div>

                  <div class="field">
                    <label for="param_logo_concepts">
                      Nb. de pistes logo à présenter
                      <span class="hint-icon" data-tooltip="impacte le volume de design" role="note" tabindex="0" aria-label="impacte le volume de design">?</span>
                    </label>
                    <input type="number" id="param_logo_concepts" min="0" step="1" value="2">
                  </div>

                  <div class="field">
                    <label for="param_logo_exports">
                      Déclinaisons & exports (formats)
                      <span class="hint-icon" data-tooltip="logos secondaires, déclinaisons" role="note" tabindex="0" aria-label="logos secondaires, déclinaisons">?</span>
                    </label>
                    <input type="number" id="param_logo_exports" min="0" step="1" value="3">
                  </div>
                </div>
              </div>

              <div class="field-subsection">
                <p class="field-subtitle">Charte & templates</p>
                <div class="grid" aria-label="Charte graphique et kits">
                  <div class="field">
                    <label for="param_brand_guidelines">
                      Niveau de charte graphique
                      <span class="hint-icon" data-tooltip="impacte le temps de formalisation" role="note" tabindex="0" aria-label="impacte le temps de formalisation">?</span>
                    </label>
                    <select id="param_brand_guidelines">
                      <option value="0">Pas de charte dédiée</option>
                      <option value="1" selected>Guide express (x1)</option>
                      <option value="1.6">Charte complète (x1.6)</option>
                    </select>
                  </div>

                  <div class="field">
                    <label for="param_brand_templates">
                      Templates réseaux / papeterie
                      <span class="hint-icon" data-tooltip="0 = non prévu" role="note" tabindex="0" aria-label="0 = non prévu">?</span>
                    </label>
                    <input type="number" id="param_brand_templates" min="0" step="1" value="2">
                  </div>
                </div>
              </div>
            </div>

            <div class="field-group">
              <div class="group-header">
                <h3 class="group-title"><span class="icon">🧰</span> Options & accompagnement</h3>
                <p class="group-sub">Services complémentaires à activer.</p>
              </div>
              <div class="field-subsection">
                <p class="field-subtitle">Formation & transfert</p>
                <div class="grid grid-single" aria-label="Formation et prise en main">
                  <div class="field">
                    <label for="param_opt_formation">
                      Formation client ?
                      <span class="hint-icon" data-tooltip="0 = non, 1 = oui" role="note" tabindex="0" aria-label="0 = non, 1 = oui">?</span>
                    </label>
                    <input type="number" id="param_opt_formation" min="0" max="1" step="1" value="1">
                  </div>
                </div>
              </div>

              <div class="field-subsection">
                <p class="field-subtitle">Hébergement & domaine</p>
                <div class="grid" aria-label="Hébergement géré et nom de domaine">
                  <div class="field">
                    <label for="param_opt_hosting">
                      Hébergement géré ?
                      <span class="hint-icon" data-tooltip="0 = non, 1 = oui" role="note" tabindex="0" aria-label="0 = non, 1 = oui">?</span>
                    </label>
                    <input type="number" id="param_opt_hosting" min="0" max="1" step="1" value="0">
                  </div>

                  <div class="field">
                    <label for="param_hosting_cost">
                      Budget hébergement (€/an)
                      <span class="hint-icon" data-tooltip="Coût récurrent si activé" role="note" tabindex="0" aria-label="Coût récurrent si activé">?</span>
                    </label>
                    <input type="number" id="param_hosting_cost" min="0" step="10" value="132">
                  </div>

                  <div class="field">
                    <label for="param_opt_domain">
                      Nom de domaine ?
                      <span class="hint-icon" data-tooltip="0 = non, 1 = oui" role="note" tabindex="0" aria-label="0 = non, 1 = oui">?</span>
                    </label>
                    <input type="number" id="param_opt_domain" min="0" max="1" step="1" value="1">
                  </div>

                  <div class="field">
                    <label for="param_domain_cost">
                      Budget nom de domaine (€/an)
                      <span class="hint-icon" data-tooltip="Coût récurrent si activé" role="note" tabindex="0" aria-label="Coût récurrent si activé">?</span>
                    </label>
                    <input type="number" id="param_domain_cost" min="0" step="5" value="20">
                  </div>
                </div>
              </div>

              <div class="field-subsection">
                <p class="field-subtitle">Chatbot IA & automatisation</p>
                <div class="grid grid-single" aria-label="Pack chatbot IA">
                  <div class="field">
                    <label for="param_chatbot_offer">
                      Offre chatbot IA
                      <span class="hint-icon" data-tooltip="Choisis le niveau d'intégration : plugin, solution externe ou API sur mesure" role="note" tabindex="0" aria-label="Choisis le niveau d'intégration : plugin, solution externe ou API sur mesure">?</span>
                    </label>
                    <select id="param_chatbot_offer">
                      <option value="none">Pas de chatbot</option>
                      <option value="plugin">Plugin "clé en main" (No-code / Low-code)</option>
                      <option value="external">Intégrer un chatbot externe (Intercom, Crisp, Tidio...)</option>
                      <option value="custom">Intégration sur mesure via API OpenAI / LLM</option>
                    </select>
                  </div>
                </div>

                <div class="field-subsection chatbot-offer-block" data-chatbot-offer="plugin" aria-label="Paramètres plugin clé en main">
                  <p class="field-subtitle">Plugin "clé en main" (No-code / Low-code)</p>
                  <div class="grid" aria-label="Paramétrage plugin no-code">
                    <div class="field">
                      <label for="param_chatbot_plugin_setup_hours">
                        Ateliers & configuration (h)
                        <span class="hint-icon" data-tooltip="Cadrage des parcours, prompts et tonalité" role="note" tabindex="0" aria-label="Cadrage des parcours, prompts et tonalité">?</span>
                      </label>
                      <input type="number" id="param_chatbot_plugin_setup_hours" min="0" step="1" value="4">
                    </div>
                    <div class="field">
                      <label for="param_chatbot_plugin_integration_hours">
                        Connexions & automatisations (h)
                        <span class="hint-icon" data-tooltip="Scénarios no-code, handover vers email/CRM" role="note" tabindex="0" aria-label="Scénarios no-code, handover vers email/CRM">?</span>
                      </label>
                      <input type="number" id="param_chatbot_plugin_integration_hours" min="0" step="1" value="4">
                    </div>
                    <div class="field">
                      <label for="param_chatbot_plugin_training_hours">
                        FAQ / base de connaissances (h)
                        <span class="hint-icon" data-tooltip="Structuration d'une FAQ importée ou manuelle" role="note" tabindex="0" aria-label="Structuration d'une FAQ importée ou manuelle">?</span>
                      </label>
                      <input type="number" id="param_chatbot_plugin_training_hours" min="0" step="1" value="2">
                    </div>
                    <div class="field">
                      <label for="param_chatbot_plugin_subscription">
                        Abonnement plugin (€/mois)
                        <span class="hint-icon" data-tooltip="Licences du plugin no-code" role="note" tabindex="0" aria-label="Licences du plugin no-code">?</span>
                      </label>
                      <input type="number" id="param_chatbot_plugin_subscription" min="0" step="10" value="40">
                    </div>
                  </div>
                </div>

                <div class="field-subsection chatbot-offer-block" data-chatbot-offer="external" aria-label="Paramètres chatbot externe">
                  <p class="field-subtitle">Chatbot externe (Intercom-like, Crisp, Tidio…)</p>
                  <div class="grid" aria-label="Paramétrage chatbot externe">
                    <div class="field">
                      <label for="param_chatbot_external_setup_hours">
                        Cadrage & parcours (h)
                        <span class="hint-icon" data-tooltip="Scripts de conversations, persona, escalades" role="note" tabindex="0" aria-label="Scripts de conversations, persona, escalades">?</span>
                      </label>
                      <input type="number" id="param_chatbot_external_setup_hours" min="0" step="1" value="6">
                    </div>
                    <div class="field">
                      <label for="param_chatbot_external_integration_hours">
                        Intégration widget & CRM (h)
                        <span class="hint-icon" data-tooltip="SDK, connecteurs, routage vers support" role="note" tabindex="0" aria-label="SDK, connecteurs, routage vers support">?</span>
                      </label>
                      <input type="number" id="param_chatbot_external_integration_hours" min="0" step="1" value="8">
                    </div>
                    <div class="field">
                      <label for="param_chatbot_external_training_hours">
                        FAQ / knowledge base (h)
                        <span class="hint-icon" data-tooltip="Import / structuration de la base documentaire" role="note" tabindex="0" aria-label="Import / structuration de la base documentaire">?</span>
                      </label>
                      <input type="number" id="param_chatbot_external_training_hours" min="0" step="1" value="4">
                    </div>
                    <div class="field">
                      <label for="param_chatbot_external_subscription">
                        Abonnement solution (€/mois)
                        <span class="hint-icon" data-tooltip="Plan mensuel Intercom/Crisp/Tidio" role="note" tabindex="0" aria-label="Plan mensuel Intercom/Crisp/Tidio">?</span>
                      </label>
                      <input type="number" id="param_chatbot_external_subscription" min="0" step="10" value="70">
                    </div>
                  </div>
                </div>

                <div class="field-subsection chatbot-offer-block" data-chatbot-offer="custom" aria-label="Paramètres intégration sur mesure">
                  <p class="field-subtitle">Intégration sur mesure API OpenAI / LLM</p>
                  <div class="grid" aria-label="Paramétrage sur mesure API">
                    <div class="field">
                      <label for="param_chatbot_custom_workshop_hours">
                        Discovery & prompt engineering (h)
                        <span class="hint-icon" data-tooltip="Ateliers métiers, scénarios complexes" role="note" tabindex="0" aria-label="Ateliers métiers, scénarios complexes">?</span>
                      </label>
                      <input type="number" id="param_chatbot_custom_workshop_hours" min="0" step="1" value="8">
                    </div>
                    <div class="field">
                      <label for="param_chatbot_custom_dev_hours">
                        Dev front + backend (h)
                        <span class="hint-icon" data-tooltip="UI du widget, appels API, logs, sécurité" role="note" tabindex="0" aria-label="UI du widget, appels API, logs, sécurité">?</span>
                      </label>
                      <input type="number" id="param_chatbot_custom_dev_hours" min="0" step="1" value="12">
                    </div>
                    <div class="field">
                      <label for="param_chatbot_custom_training_hours">
                        Données / RAG / QA (h)
                        <span class="hint-icon" data-tooltip="Préparation du corpus, tests et alignement" role="note" tabindex="0" aria-label="Préparation du corpus, tests et alignement">?</span>
                      </label>
                      <input type="number" id="param_chatbot_custom_training_hours" min="0" step="1" value="6">
                    </div>
                    <div class="field">
                      <label for="param_chatbot_custom_subscription">
                        Coûts API & infra (€/mois)
                        <span class="hint-icon" data-tooltip="Crédits OpenAI / hébergement du service" role="note" tabindex="0" aria-label="Crédits OpenAI / hébergement du service">?</span>
                      </label>
                      <input type="number" id="param_chatbot_custom_subscription" min="0" step="10" value="120">
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="field-group">
              <div class="group-header">
                <h3 class="group-title"><span class="icon">💰</span> Marges & taux</h3>
                <p class="group-sub">Adapter le prix final au contexte financier.</p>
              </div>
              <div class="grid" aria-label="Marge et taux de change">
                <div class="field">
                  <label for="param_margin">
                    Coefficient de marge agence
                    <span class="hint-icon" data-tooltip="ex : 1.3 = +30%" role="note" tabindex="0" aria-label="ex : 1.3 = +30%">?</span>
                  </label>
                  <input type="number" id="param_margin" min="1" step="0.05" value="1.3">
                </div>

                <div class="field">
                  <label for="param_fx">
                    Taux de change € → MGA
                    <span class="hint-icon" data-tooltip="approximatif" role="note" tabindex="0" aria-label="approximatif">?</span>
                  </label>
                  <input type="number" id="param_fx" min="1" step="50" value="5000">
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- COLONNE 1 : Rôles & tarifs -->
        <section class="card">
          <div class="card-header">
            <div>
              <h2><span class="icon">👥</span> Rôles & tarifs</h2>
              <p class="sub">Ajuste les taux horaires freelance. Tous les coûts se recalculent.</p>
            </div>
            <div class="tag">
              <span class="tag-dot"></span>
              Taux horaires en €/h
            </div>
          </div>

          <div class="field tariff-field" aria-label="Sélecteur de barème tarifaire">
            <label for="param_tariff_preset">
              Tarifs
              <span class="hint-icon" data-tooltip="Applique automatiquement un barème. Les modifications basculent en personnalisé." role="note" tabindex="0" aria-label="Applique un barème de tarifs">?</span>
            </label>
            <div class="control-row">
              <select id="param_tariff_preset">
                <option value="freelance_mada">Freelance Mada (€ / h)</option>
                <option value="offshore" selected>Agence Mada / Offshore (€ / h)</option>
                <option value="europe">Agence Europe (€ / h)</option>
                <option value="custom">Tarifs personnalisés</option>
              </select>
            </div>
          </div>

          <div class="roles-table-wrapper roles-table" aria-label="Table des rôles et taux horaires">
            <table>
              <thead>
                <tr>
                  <th>Rôle</th>
                  <th>Taux horaire (€)</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody id="roles-body">
                <!-- lignes générées en JS -->
              </tbody>
            </table>
          </div>
        </section>

      </div>

      <div class="column-stack sticky-summary">
        <!-- COLONNE 2 : Résumés rapides -->
        <section class="card">
          <div class="card-header">
            <div>
              <h2><span class="icon">🧭</span> Résumé rapide</h2>
              <p class="sub">Vue d'ensemble des volumes et options activées.</p>
            </div>
          </div>
          <div class="section">
            <div class="section-header">
              <div class="chip-group">
                <span class="chip"><strong>Pages</strong> : home + internes</span>
                <span class="chip"><strong>Options</strong> : logo, formation, SEO</span>
              </div>
            </div>
            <div class="summary-row">
              <div class="summary-card">
                <div class="summary-label">Volume de pages</div>
                <div class="summary-value" id="summary-pages">—</div>
                <div class="summary-chip muted">Home + internes (services / blog inclus si activés)</div>
              </div>
              <div class="summary-card">
                <div class="summary-label">Complexité appliquée</div>
                <div class="summary-value accent" id="summary-complexity">x1.2</div>
                <div class="summary-chip">Simple / Standard / Complexe</div>
              </div>
              <div class="summary-card">
                <div class="summary-label">Options activées</div>
                <div class="summary-value options-badges" id="summary-options">—</div>
                <div class="summary-chip muted">Identité, contenus, SEO, blog, formation, chatbot, hébergement…</div>
              </div>
            </div>
            <div class="summary-row">
              <div class="summary-card">
                <div class="summary-label">Pages légales</div>
                <div class="summary-value" id="summary-legal-pages">—</div>
                <div class="summary-chip muted">Toujours comptées dans les internes</div>
              </div>
              <div class="summary-card">
                <div class="summary-label">Blog & import</div>
                <div class="summary-value" id="summary-import">—</div>
                <div class="summary-chip muted">Activation du blog + coût dégressif</div>
              </div>
            </div>
          </div>
        </section>

        <!-- COLONNE 2 : Résumé financier -->
        <section class="card">
          <div class="card-header card-header-financial">
            <div>
              <h2><span class="icon">💰</span> Résumé financier</h2>
              <p class="sub">Synthèse immédiate des montants générés par tes paramètres.</p>
            </div>
            <label class="toggle" for="currency-toggle">
              <input type="checkbox" id="currency-toggle">
              <span class="toggle-switch" aria-hidden="true"></span>
              <span class="toggle-label" id="currency-toggle-label">Devis en €</span>
            </label>
          </div>
          <div class="section">
            <div class="summary-row">
              <div class="summary-card summary-card-highlight" id="summary-chatbot-card">
                <div class="summary-label">Option ChatBot IA</div>
                <div class="summary-value" id="summary-cost-chatbot">—</div>
                <div class="summary-chip" id="summary-chatbot-details">Pas de chatbot activé</div>
              </div>
              <div class="summary-card" id="summary-hosting-card">
                <div class="summary-label">Hébergement &amp; Domaine</div>
                <div class="summary-value" id="summary-cost-hosting">—</div>
                <div class="summary-chip muted">Options fixes activées</div>
              </div>
              <div class="summary-card" id="summary-translation-card">
                <div class="summary-label">Traduction du site</div>
                <div class="summary-value" id="summary-cost-translation">—</div>
                <div class="summary-chip muted" id="summary-translation-details">Pas de traduction activée</div>
              </div>
              <div class="summary-card">
                <div class="summary-label">Freelances - Coûts HT avant buffer</div>
                <div class="summary-value" id="summary-cost-freelance">—</div>
                <div class="summary-chip muted">Production (hors hébergement, domaine, chatbot)</div>
              </div>
              <div class="summary-card">
                <div class="summary-label">Coût interne estimé</div>
                <div class="summary-value" id="summary-cost-internal">—</div>
                <div class="summary-chip muted">Base précédente + buffer imprévus</div>
              </div>
              <div class="summary-card">
                <div class="summary-label" id="summary-price-sell-label">Prix conseillé HT (€)</div>
                <div class="summary-value success" id="summary-price-sell">—</div>
                <div class="summary-chip">Coût interne × marge agence</div>
              </div>
              <div class="summary-card">
                <div class="summary-label" id="summary-price-sell-mga-label">Prix conseillé HT (MGA)</div>
                <div class="summary-value accent" id="summary-price-sell-mga">—</div>
                <div class="summary-chip muted" id="summary-price-sell-mga-chip">Conversion indicative en Ariary</div>
              </div>
            </div>
          </div>

          <p class="footer-note" id="filter-feedback" aria-live="polite">
            Le filtre par rôle mettra à jour automatiquement les heures, les coûts et les prix conseillés selon la sélection.
          </p>
        </section>
      </div>
    </main>

    <!-- SECTION DÉTAIL DES TÂCHES -->
    <section class="section" style="margin-top: 26px;">
      <div class="card">
        <div class="section-header">
          <h3>Détail des tâches & temps estimés</h3>
          <span class="muted">Les heures tiennent compte du volume, de la complexité et des options activées.</span>
        </div>

        <div class="tasks-toolbar" aria-label="Affiner l'affichage et gérer les tâches">
          <div class="toolbar-block">
            <div class="toolbar-text">
              <label for="tasks-role-filter">Filtres d'affichage</label>
              <span class="label-sub">Choisis un rôle et ajuste les tâches à 0 €.</span>
            </div>
            <div class="toolbar-controls" role="group" aria-label="Filtres d'affichage des tâches">
              <div class="filter-select">
                <span class="filter-icon" aria-hidden="true">🔍</span>
                <select id="tasks-role-filter"></select>
                <span class="select-caret" aria-hidden="true">▾</span>
              </div>
              <label class="toggle" for="toggle-zero-cost">
                <input type="checkbox" id="toggle-zero-cost" checked>
                <span class="toggle-switch" aria-hidden="true"></span>
                <span class="toggle-label" id="toggle-zero-cost-label">Tâches à 0€ affichées</span>
              </label>
            </div>
          </div>

          <span class="toolbar-divider" role="presentation"></span>

          <div class="toolbar-block">
            <div class="toolbar-text">
              <span class="toolbar-heading">Actions sur le tableau</span>
              <span class="label-sub">Personnalise les tâches visibles ou exporte-les en CSV.</span>
            </div>
            <div class="toolbar-controls">
              <button type="button" id="open_tasks_modal" class="ghost-button ghost-button--compact" aria-haspopup="dialog">
                🛠️ Personnaliser
              </button>
              <button type="button" id="export_tasks" class="ghost-button ghost-button--compact" aria-label="Exporter les tâches visibles en CSV">📤 Export CSV</button>
            </div>
          </div>
        </div>

        <div class="tasks-table-wrapper" aria-label="Détail des tâches et calculs">
          <table>
            <thead>
              <tr>
                <th>Phase</th>
                <th>Tâche</th>
                <th>Rôle</th>
                <th class="align-right">Base h</th>
                <th class="align-right">Volume</th>
                <th class="align-right">Heures totales</th>
                <th class="align-right" id="tasks-header-rate">Taux €/h</th>
                <th class="align-right" id="tasks-header-cost">Coût tâche (€)</th>
              </tr>
            </thead>
            <tbody id="tasks-body">
              <!-- lignes générées en JS -->
            </tbody>
            <tfoot>
              <tr>
                <td colspan="5" class="align-right">Total heures</td>
                <td class="align-right" id="tfoot-hours">—</td>
                <td></td>
                <td class="align-right" id="tfoot-cost">—</td>
              </tr>
              <tr>
                <td colspan="7" class="align-right">Total coûts avant buffer</td>
                <td class="align-right" id="tfoot-prebuffer">—</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </section>
  </div>

  <div id="tasks-modal" class="modal" aria-hidden="true" role="dialog" aria-labelledby="tasks-custom-title">
    <div class="modal-overlay" data-close="tasks-modal" aria-hidden="true"></div>
    <div class="modal-content card" role="document">
      <div class="card-header modal-header">
        <div class="modal-title-block">
          <img src="assets/logo.webp" alt="Logo du site" class="modal-logo" loading="lazy">
          <h2 id="tasks-custom-title"><span class="icon">🛠️</span> Personnalisation avancée des tâches</h2>
          <p class="sub">Ajoute ou modifie les tâches et choisis le rôle associé. Les changements sont exportés dans le JSON.</p>
        </div>
        <div class="modal-actions">
          <button type="button" id="reset_tasks" class="small-action">↺ Réinitialiser</button>
          <button type="button" class="close-modal" data-close="tasks-modal" aria-label="Fermer la personnalisation">✕</button>
        </div>
      </div>

      <div class="tasks-modal-body">
        <form class="task-editor" id="task-editor" aria-label="Éditeur de tâches personnalisées">
          <div class="task-editor-grid">
            <div class="field full-span">
              <label for="task_label">Intitulé de la tâche</label>
              <input type="text" id="task_label" required placeholder="Ex. Ajustements responsive">
            </div>
            <div class="field">
              <label for="task_role">Rôle associé</label>
              <select id="task_role" required></select>
            </div>
            <div class="field">
              <label for="task_phase">Phase</label>
              <input type="text" id="task_phase" required placeholder="Design, Développement, QA…">
            </div>
            <div class="field">
              <label for="task_type">Type de tâche</label>
              <select id="task_type" required>
                <option value="standard">Standard</option>
                <option value="seo">SEO</option>
                <option value="import">Import</option>
                <option value="design">Design</option>
                <option value="content">Contenus</option>
              </select>
            </div>
            <div class="field">
              <label for="task_hours">Heures de base</label>
              <input type="number" id="task_hours" min="0" step="0.5" required placeholder="ex. 3">
            </div>
            <div class="field">
              <label for="task_volume">Clé de volume</label>
              <select id="task_volume" required>
                <option value="const">Constant (×1)</option>
                <option value="nbInternalPages">Pages internes</option>
                <option value="nbServicePages">Pages services</option>
                <option value="nbReaPages">Pages réalisations</option>
                <option value="blogArticles">Articles de blog</option>
                <option value="serviceListing">Page services (listing)</option>
                <option value="serviceDetails">Détail services</option>
                <option value="serviceDetailsWeighted">Détail services (pondéré)</option>
                <option value="reaListing">Page réalisations (listing)</option>
                <option value="reaDetails">Détails réalisations</option>
                <option value="reaDetailsWeighted">Détails réalisations (pondéré)</option>
                <option value="hasBlog">Activer blog (0/1)</option>
                <option value="articleSeo">SEO des articles</option>
                <option value="hasSeo">Option SEO (0/1)</option>
                <option value="hasTraining">Formation (0/1)</option>
                <option value="hasHosting">Hébergement (0/1)</option>
                <option value="hasChatbot">Chatbot (0/1)</option>
                <option value="chatbotVolume">Volume chatbot</option>
                <option value="chatbotComplexity">Complexité chatbot</option>
                <option value="chatbotMessages">Messages chatbot</option>
                <option value="serviceContentPages">Contenus services</option>
                <option value="reaContentPages">Contenus réalisations</option>
                <option value="articleVisuals">Visuels articles</option>
                <option value="serviceVisualsVolume">Visuels services</option>
                <option value="reaVisualsVolume">Visuels études de cas</option>
                <option value="const_high">Constant (×1,5)</option>
                <option value="const_low">Constant (×0,6)</option>
              </select>
            </div>
            <div class="field full-span">
              <label for="task_notes">Notes internes</label>
              <input type="text" id="task_notes" placeholder="Commentaire sur la tâche">
            </div>
          </div>
          <p class="form-hint">Enregistre chaque tâche pour actualiser immédiatement le tableau et les calculs.</p>
          <div class="actions">
            <button type="submit" class="ghost-button" id="save_task">Enregistrer la tâche</button>
            <button type="button" class="ghost-button ghost-button--compact" id="cancel_task">Annuler</button>
            <small id="task_form_status">Mode ajout</small>
          </div>
        </form>

        <div class="task-list-panel" aria-live="polite" aria-label="Liste des tâches personnalisables">
          <div class="list-header">
            <h3><span class="icon">🗂️</span> Tâches configurées</h3>
            <p class="sub">Glisse-dépose les cartes pour réorganiser l'ordre d'affichage du tableau.</p>
          </div>
          <div class="list-scroller">
            <div class="task-pills" id="task-list" aria-live="polite" aria-label="Liste des tâches personnalisables"></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <script>
    // ----- Données de base -----

    const TRANSLATION_MODES = {
      none: {
        label: "Pas de traduction",
        coefficients: null
      },
      gtranslate: {
        label: "GTranslate",
        coefficients: { baseSetup: 3, perLanguageSetup: 0.25, pagePerLanguage: 0.08, productPerLanguage: 0.03 }
      },
      wpml: {
        label: "WPML",
        coefficients: { baseSetup: 6, perLanguageSetup: 0.5, pagePerLanguage: 0.2, productPerLanguage: 0.06 }
      }
    };

    const roles = [
      {
        id: "cp",
        name: "Chef de projet / Relation client",
        rate: 28,
        note: "Réunions, cadrage, suivi client",
        icon: "🤝"
      },
      {
        id: "ux",
        name: "Webdesigner / UX-UI",
        rate: 20,
        note: "Maquettes, UI, parcours utilisateur",
        icon: "🎨"
      },
      {
        id: "dev",
        name: "Développeur WordPress",
        rate: 25,
        note: "Intégration, thème, plugins",
        icon: "💻"
      },
      {
        id: "graph",
        name: "Graphiste",
        rate: 18,
        note: "Logo, charte, visuels",
        icon: "🖼️"
      },
      {
        id: "seo",
        name: "Rédacteur / SEO",
        rate: 16,
        note: "Contenu & on-page SEO",
        icon: "🔎"
      },
      {
        id: "qa",
        name: "QA / Tests",
        rate: 18,
        note: "Recette, tests responsive",
        icon: "✅"
      }
    ];

    let activeRoleFilter = "all";
    let hideZeroCost = true;
    let activeCurrency = "eur";
    let lastTotals = {
      hours: 0,
      cost: 0,
      internal: 0,
      sell: 0
    };

    const roleIconStyles = {
      all: {
        icon: "👥",
        color: "var(--accent)",
        bg: "var(--accent-soft)",
        border: "rgba(56, 189, 248, 0.35)"
      },
      cp: {
        icon: "🤝",
        color: "#fbbf24",
        bg: "rgba(251, 191, 36, 0.14)",
        border: "rgba(251, 191, 36, 0.3)"
      },
      ux: {
        icon: "🎨",
        color: "#a855f7",
        bg: "rgba(168, 85, 247, 0.18)",
        border: "rgba(168, 85, 247, 0.32)"
      },
      dev: {
        icon: "💻",
        color: "#38bdf8",
        bg: "rgba(56, 189, 248, 0.14)",
        border: "rgba(56, 189, 248, 0.35)"
      },
      graph: {
        icon: "🖼️",
        color: "#22d3ee",
        bg: "rgba(34, 211, 238, 0.16)",
        border: "rgba(34, 211, 238, 0.3)"
      },
      seo: {
        icon: "🔎",
        color: "#4ade80",
        bg: "rgba(74, 222, 128, 0.18)",
        border: "rgba(74, 222, 128, 0.35)"
      },
      qa: {
        icon: "✅",
        color: "#facc15",
        bg: "rgba(250, 204, 21, 0.12)",
        border: "rgba(250, 204, 21, 0.32)"
      }
    };

    const defaultTasks = [
      // Cadrage
      {
        id: "atelier",
        phase: "Cadrage",
        label: "Atelier de découverte & cadrage",
        roleId: "cp",
        baseHours: 3,
        volumeKey: "const"
      },
      {
        id: "cdc",
        phase: "Cadrage",
        label: "Rédaction cahier des charges",
        roleId: "cp",
        baseHours: 4,
        volumeKey: "const"
      },
      // Design
      {
        id: "design_home",
        phase: "Design",
        label: "Maquette page d'accueil",
        roleId: "ux",
        baseHours: 6,
        volumeKey: "nbHome"
      },
      {
        id: "design_internes",
        phase: "Design",
        label: "Maquettes pages internes",
        roleId: "ux",
        baseHours: 3,
        volumeKey: "nbInternalPages"
      },
      {
        id: "design_services_listing",
        phase: "Design",
        label: "Maquette page Services",
        roleId: "ux",
        baseHours: 3,
        volumeKey: "serviceListing"
      },
      {
        id: "design_services_details",
        phase: "Design",
        label: "Maquettes fiches service",
        roleId: "ux",
        baseHours: 2.5,
        volumeKey: "serviceDetailsWeighted"
      },
      {
        id: "design_realisations_listing",
        phase: "Design",
        label: "Maquette page Réalisations",
        roleId: "ux",
        baseHours: 3,
        volumeKey: "reaListing"
      },
      {
        id: "design_realisations_details",
        phase: "Design",
        label: "Maquettes études de cas",
        roleId: "ux",
        baseHours: 2.5,
        volumeKey: "reaDetailsWeighted"
      },
      {
        id: "design_blog",
        phase: "Design",
        label: "Maquettes blog (listing + article)",
        roleId: "ux",
        baseHours: 4,
        volumeKey: "hasBlog"
      },
      // Graphisme
      {
        id: "logo_discovery",
        phase: "Graphisme",
        label: "Moodboard & orientation créative",
        roleId: "graph",
        baseHours: 2,
        volumeKey: "identityPack"
      },
      {
        id: "logo_concepts",
        phase: "Graphisme",
        label: "Pistes logo à développer",
        roleId: "graph",
        baseHours: 2.8,
        volumeKey: "logoConcepts"
      },
      {
        id: "logo_exports",
        phase: "Graphisme",
        label: "Déclinaisons & exports du logo",
        roleId: "graph",
        baseHours: 1,
        volumeKey: "logoExports"
      },
      {
        id: "brand_guidelines",
        phase: "Graphisme",
        label: "Mini charte graphique / brandbook",
        roleId: "graph",
        baseHours: 3.5,
        volumeKey: "brandGuidelines"
      },
      {
        id: "brand_templates",
        phase: "Graphisme",
        label: "Templates réseaux sociaux / papeterie",
        roleId: "graph",
        baseHours: 1.2,
        volumeKey: "brandTemplates"
      },
      // Développement
      {
        id: "dev_home",
        phase: "Développement",
        label: "Intégration page d'accueil",
        roleId: "dev",
        baseHours: 6,
        volumeKey: "nbHome"
      },
      {
        id: "dev_pages",
        phase: "Développement",
        label: "Intégration pages internes",
        roleId: "dev",
        baseHours: 3,
        volumeKey: "nbInternalPages"
      },
      {
        id: "dev_services_listing",
        phase: "Développement",
        label: "Intégration page Services",
        roleId: "dev",
        baseHours: 4,
        volumeKey: "serviceListing"
      },
      {
        id: "dev_services_details",
        phase: "Développement",
        label: "Intégration fiches service",
        roleId: "dev",
        baseHours: 3.5,
        volumeKey: "serviceDetailsWeighted"
      },
      {
        id: "dev_realisations_listing",
        phase: "Développement",
        label: "Intégration page Réalisations",
        roleId: "dev",
        baseHours: 4,
        volumeKey: "reaListing"
      },
      {
        id: "dev_realisations_details",
        phase: "Développement",
        label: "Intégration études de cas",
        roleId: "dev",
        baseHours: 3.5,
        volumeKey: "reaDetailsWeighted"
      },
      {
        id: "dev_blog",
        phase: "Développement",
        label: "Intégration blog (listing + article)",
        roleId: "dev",
        baseHours: 5,
        volumeKey: "hasBlog"
      },
      {
        id: "dev_import_articles",
        phase: "Développement",
        label: "Blog : importation d'articles (refonte)",
        roleId: "dev",
        baseHours: 0,
        volumeKey: "const",
        type: "import"
      },
      {
        id: "content_articles",
        phase: "Contenus",
        label: "Création + mise en ligne des articles",
        roleId: "seo",
        baseHours: 2.5,
        volumeKey: "blogArticles"
      },
      {
        id: "content_services",
        phase: "Contenus",
        label: "Rédaction + optimisation fiches service",
        roleId: "seo",
        baseHours: 2.3,
        volumeKey: "serviceContentPages"
      },
      {
        id: "content_realisations",
        phase: "Contenus",
        label: "Rédaction + optimisation études de cas",
        roleId: "seo",
        baseHours: 2.6,
        volumeKey: "reaContentPages"
      },
      {
        id: "content_article_visuals",
        phase: "Contenus",
        label: "Visuel d'illustration par article",
        roleId: "graph",
        baseHours: 1,
        volumeKey: "articleVisuals"
      },
      {
        id: "content_service_visuals",
        phase: "Contenus",
        label: "Visuels pour fiches service",
        roleId: "graph",
        baseHours: 0.8,
        volumeKey: "serviceVisualsVolume"
      },
      {
        id: "content_rea_visuals",
        phase: "Contenus",
        label: "Visuels pour études de cas",
        roleId: "graph",
        baseHours: 1.2,
        volumeKey: "reaVisualsVolume"
      },
      {
        id: "dev_config",
        phase: "Développement",
        label: "Configuration WordPress & plugins",
        roleId: "dev",
        baseHours: 3,
        volumeKey: "const"
      },
      // SEO
      {
        id: "seo_articles",
        phase: "SEO",
        label: "Optimisation SEO des articles",
        roleId: "seo",
        baseHours: 1,
        volumeKey: "articleSeo"
      },
      {
        id: "seo_pages",
        phase: "SEO",
        label: "Optimisation SEO on-page",
        roleId: "seo",
        baseHours: 1.5,
        volumeKey: "nbSeoPages"
      },
      // Traduction
      {
        id: "translation_site",
        phase: "Traduction",
        label: "Traduction du site",
        roleId: "dev",
        baseHours: 1,
        volumeKey: "translationSiteHours"
      },
      // Recette
      {
        id: "tests",
        phase: "Recette",
        label: "Tests responsive & bugfix",
        roleId: "qa",
        baseHours: 4,
        volumeKey: "qaWorkload"
      },
      // IA / Chatbot
      {
        id: "chatbot_workshop",
        phase: "IA & automatisation",
        label: "Ateliers, parcours & prompts IA",
        roleId: "cp",
        baseHours: 1,
        volumeKey: "chatbotSetupHours"
      },
      {
        id: "chatbot_integration",
        phase: "IA & automatisation",
        label: "Intégration chatbot (widget & connecteurs)",
        roleId: "dev",
        baseHours: 1,
        volumeKey: "chatbotIntegrationHours"
      },
      {
        id: "chatbot_training",
        phase: "IA & automatisation",
        label: "Entraînement / FAQ alimentée",
        roleId: "seo",
        baseHours: 1,
        volumeKey: "chatbotTrainingHours"
      },
      // Formation
      {
        id: "formation",
        phase: "Formation",
        label: "Session de formation client",
        roleId: "cp",
        baseHours: 2,
        volumeKey: "optFormation"
      }
    ];

    let tasks = defaultTasks.map(task => ({ ...task }));

    const volumeOptions = [
      { value: "const", label: "Valeur fixe (1x)", hint: "Toujours comptée, sans multiplicateur." },
      { value: "nbHome", label: "Page d'accueil", hint: "Multiplié par le nombre de home." },
      { value: "nbInternalPages", label: "Pages internes", hint: "Prend en compte le volume total des pages internes." },
      { value: "nbSeoPages", label: "Pages SEO", hint: "Calqué sur le volume SEO défini." },
      { value: "qaWorkload", label: "Charge QA (pages + features)", hint: "Home + pages totales + fonctionnalités actives." },
      { value: "identityPack", label: "Pack identité", hint: "Activé si l'option identité est cochée." },
      { value: "logoConcepts", label: "Concepts logo", hint: "Multiplié par le nombre de concepts de logo." },
      { value: "logoExports", label: "Déclinaisons logo", hint: "Basé sur le nombre d'exports/formats." },
      { value: "brandGuidelines", label: "Charte graphique", hint: "Active si la charte est demandée." },
      { value: "brandTemplates", label: "Templates réseaux", hint: "Multiplié par le nombre de templates." },
      { value: "optFormation", label: "Option formation", hint: "Activé uniquement si la formation est cochée." },
      { value: "serviceListing", label: "Page services", hint: "S'active sur la page listing services." },
      { value: "serviceDetailsWeighted", label: "Fiches services pondérées", hint: "Nombre de fiches × facteur design." },
      { value: "serviceContentPages", label: "Rédaction services", hint: "Nombre de fiches service à rédiger." },
      { value: "serviceVisualsVolume", label: "Visuels services", hint: "Volume de visuels pour les services." },
      { value: "reaListing", label: "Page réalisations", hint: "S'active sur la page listing réalisations." },
      { value: "reaDetailsWeighted", label: "Études de cas pondérées", hint: "Nombre de cas × facteur design." },
      { value: "reaContentPages", label: "Rédaction études de cas", hint: "Volume de contenus pour les études." },
      { value: "reaVisualsVolume", label: "Visuels études de cas", hint: "Volume de visuels pour les études." },
      { value: "blogArticles", label: "Articles de blog", hint: "Multiplié par le nombre d'articles." },
      { value: "articleVisuals", label: "Visuels par article", hint: "Volume de visuels liés aux articles." },
      { value: "articleSeo", label: "Optimisation SEO", hint: "Nombre d'articles avec optimisation SEO." },
      { value: "hasBlog", label: "Activation du blog", hint: "1 si le blog est activé, sinon 0." },
      { value: "translationSiteHours", label: "Traduction du site", hint: "Calcule un volume d'heures selon les langues et pages." },
      { value: "chatbotSetupHours", label: "Setup chatbot", hint: "Utilise les heures de setup chatbot." },
      { value: "chatbotIntegrationHours", label: "Intégration chatbot", hint: "Utilise les heures d'intégration." },
      { value: "chatbotTrainingHours", label: "Training chatbot", hint: "Utilise les heures de training." },
      { value: "importArticles", label: "Import articles", hint: "Se base sur le volume d'import d'articles." }
    ];

    let editingTaskId = null;
    let draggedTaskId = null;
    let hasTaskDnDListeners = false;

    const RATE_PRESETS = {
      freelance_mada: {
        label: "Option 1 Freelance Mada (€ / h)",
        rates: { cp: 12, ux: 8, dev: 10, graph: 8, seo: 7, qa: 7 }
      },
      offshore: {
        label: "Option 2 Agence Mada / Offshore (€ / h)",
        rates: { cp: 28, ux: 20, dev: 25, graph: 18, seo: 16, qa: 18 }
      },
      europe: {
        label: "Option 3 Agence Europe (€ / h)",
        rates: { cp: 70, ux: 55, dev: 55, graph: 50, seo: 45, qa: 55 }
      }
    };

    let isApplyingRatePreset = false;

    const rolesById = {};
    roles.forEach(r => rolesById[r.id] = r);

    const SITE_PRESETS = {
      landing: {
        label: "Landing Page",
        values: {
          param_nb_home: 1,
          param_nb_pages: 1,
          param_nb_legal: 2,
          param_seo_mode: 1,
          param_service_listing: 0,
          param_service_details: 0,
          param_service_design_mode: 1,
          param_service_content: 1,
          param_service_visuals: 0,
          param_rea_listing: 0,
          param_rea_details: 0,
          param_rea_design_mode: 1,
          param_rea_content: 1,
          param_rea_visuals: 0,
          param_has_blog: 0,
          param_blog_articles: 0,
          param_blog_visuals: 1,
          param_blog_seo: 1,
          param_opt_logo: 0,
          param_logo_concepts: 0,
          param_logo_exports: 0,
          param_brand_guidelines: 0,
          param_brand_templates: 0,
          param_opt_formation: 0,
          param_opt_hosting: 0,
          param_hosting_cost: 132,
          param_opt_domain: 1,
          param_domain_cost: 20,
          param_translation_mode: "none",
          param_translation_languages: 2,
          param_translation_pages: 0,
          param_translation_products: 0,
          param_chatbot_offer: "none",
          param_chatbot_plugin_setup_hours: 4,
          param_chatbot_plugin_integration_hours: 4,
          param_chatbot_plugin_training_hours: 2,
          param_chatbot_plugin_subscription: 40,
          param_chatbot_external_setup_hours: 6,
          param_chatbot_external_integration_hours: 8,
          param_chatbot_external_training_hours: 4,
          param_chatbot_external_subscription: 70,
          param_chatbot_custom_workshop_hours: 8,
          param_chatbot_custom_dev_hours: 12,
          param_chatbot_custom_training_hours: 6,
          param_chatbot_custom_subscription: 120,
          param_complexity: 1,
          param_margin: 1.3,
          param_fx: 5000,
          param_buffer: 10,
          param_import_articles: 0,
          param_import_batch_size: 10,
          param_import_base_cost: 120,
          param_import_degressif: 0.9
        }
      },
      vitrine: {
        label: "Site vitrine",
        values: {
          param_nb_home: 1,
          param_nb_pages: 4,
          param_nb_legal: 3,
          param_seo_mode: 1,
          param_service_listing: 1,
          param_service_details: 3,
          param_service_design_mode: 1,
          param_service_content: 1,
          param_service_visuals: 0,
          param_rea_listing: 1,
          param_rea_details: 3,
          param_rea_design_mode: 1,
          param_rea_content: 1,
          param_rea_visuals: 0,
          param_has_blog: 1,
          param_blog_articles: 2,
          param_blog_visuals: 1,
          param_blog_seo: 1,
          param_opt_logo: 0,
          param_logo_concepts: 2,
          param_logo_exports: 3,
          param_brand_guidelines: 1,
          param_brand_templates: 2,
          param_opt_formation: 0,
          param_opt_hosting: 0,
          param_hosting_cost: 132,
          param_opt_domain: 1,
          param_domain_cost: 20,
          param_translation_mode: "none",
          param_translation_languages: 2,
          param_translation_pages: 0,
          param_translation_products: 0,
          param_chatbot_offer: "none",
          param_chatbot_plugin_setup_hours: 4,
          param_chatbot_plugin_integration_hours: 4,
          param_chatbot_plugin_training_hours: 2,
          param_chatbot_plugin_subscription: 40,
          param_chatbot_external_setup_hours: 6,
          param_chatbot_external_integration_hours: 8,
          param_chatbot_external_training_hours: 4,
          param_chatbot_external_subscription: 70,
          param_chatbot_custom_workshop_hours: 8,
          param_chatbot_custom_dev_hours: 12,
          param_chatbot_custom_training_hours: 6,
          param_chatbot_custom_subscription: 120,
          param_complexity: 1.2,
          param_margin: 1.3,
          param_fx: 5000,
          param_buffer: 10,
          param_import_articles: 0,
          param_import_batch_size: 10,
          param_import_base_cost: 120,
          param_import_degressif: 0.9
        }
      },
      vitrine_avancee: {
        label: "Vitrine avancée",
        values: {
          param_nb_home: 1,
          param_nb_pages: 8,
          param_nb_legal: 3,
          param_seo_mode: 1.3,
          param_service_listing: 1,
          param_service_details: 6,
          param_service_design_mode: 1.4,
          param_service_content: 1,
          param_service_visuals: 1,
          param_rea_listing: 1,
          param_rea_details: 6,
          param_rea_design_mode: 1.4,
          param_rea_content: 1,
          param_rea_visuals: 1,
          param_has_blog: 1,
          param_blog_articles: 6,
          param_blog_visuals: 1,
          param_blog_seo: 1,
          param_opt_logo: 1,
          param_logo_concepts: 3,
          param_logo_exports: 4,
          param_brand_guidelines: 1.6,
          param_brand_templates: 3,
          param_opt_formation: 1,
          param_opt_hosting: 1,
          param_hosting_cost: 420,
          param_opt_domain: 1,
          param_domain_cost: 30,
          param_translation_mode: "none",
          param_translation_languages: 2,
          param_translation_pages: 0,
          param_translation_products: 0,
          param_chatbot_offer: "custom",
          param_chatbot_plugin_setup_hours: 4,
          param_chatbot_plugin_integration_hours: 4,
          param_chatbot_plugin_training_hours: 2,
          param_chatbot_plugin_subscription: 40,
          param_chatbot_external_setup_hours: 6,
          param_chatbot_external_integration_hours: 8,
          param_chatbot_external_training_hours: 4,
          param_chatbot_external_subscription: 70,
          param_chatbot_custom_workshop_hours: 8,
          param_chatbot_custom_dev_hours: 12,
          param_chatbot_custom_training_hours: 6,
          param_chatbot_custom_subscription: 120,
          param_complexity: 1.5,
          param_margin: 1.35,
          param_fx: 5000,
          param_buffer: 12,
          param_import_articles: 15,
          param_import_batch_size: 10,
          param_import_base_cost: 120,
          param_import_degressif: 0.9
        }
      }
    };

    // ----- Helpers -----

    function safeNumber(value, fallback = 0) {
      const n = Number(value);
      if (Number.isNaN(n)) return fallback;
      return n;
    }

    function computeTranslationHours(coefficients, additionalLanguages, pages, products) {
      if (!coefficients || additionalLanguages <= 0) return 0;

      const setupHours = coefficients.baseSetup + coefficients.perLanguageSetup * additionalLanguages;
      const contentHours = (coefficients.pagePerLanguage * pages + coefficients.productPerLanguage * products) * additionalLanguages;

      return setupHours + contentHours;
    }

    function fmtEuro(num, digits = 0) {
      if (!Number.isFinite(num)) return "—";
      return num.toLocaleString("fr-FR", {
        minimumFractionDigits: digits,
        maximumFractionDigits: digits
      }) + " €";
    }

    function fmtMGA(num) {
      if (!Number.isFinite(num)) return "—";
      return num.toLocaleString("fr-FR", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }) + " MGA";
    }

    function fmtHours(num) {
      if (!Number.isFinite(num)) return "—";
      return num.toLocaleString("fr-FR", {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1
      });
    }

    function getCurrencyMeta() {
      const isMGA = activeCurrency === "mga";
      return {
        isMGA,
        mainSymbol: isMGA ? "MGA" : "€",
        altSymbol: isMGA ? "€" : "MGA",
        mainName: isMGA ? "Ariary" : "euros",
        altName: isMGA ? "euros" : "Ariary"
      };
    }

    function formatCurrency(value, fxRate) {
      const { isMGA } = getCurrencyMeta();
      return isMGA ? fmtMGA(value * fxRate) : fmtEuro(value, 0);
    }

    function formatAltCurrency(value, fxRate) {
      const { isMGA } = getCurrencyMeta();
      return isMGA ? fmtEuro(value, 0) : fmtMGA(value * fxRate);
    }

    function applyRatePreset(key, { recalc = true } = {}) {
      const preset = RATE_PRESETS[key];
      const select = document.getElementById("param_tariff_preset");

      if (!preset) return;

      isApplyingRatePreset = true;
      roles.forEach(role => {
        const nextRate = preset.rates[role.id];
        if (typeof nextRate === "number") {
          role.rate = nextRate;
        }
      });
      refreshRoleInputs();
      isApplyingRatePreset = false;

      if (select) {
        select.value = key;
      }

      if (recalc) {
        recalcAll();
      }
    }

    function applyPreset(key) {
      const preset = SITE_PRESETS[key];
      if (!preset) return;

      Object.entries(preset.values).forEach(([id, value]) => {
        const el = document.getElementById(id);
        if (!el) return;
        el.value = value;
      });

      recalcAll();
    }

    const PARAM_INPUT_IDS = [
      "param_complexity",
      "param_nb_home",
      "param_nb_pages",
      "param_nb_legal",
      "param_seo_mode",
      "param_service_listing",
      "param_service_details",
      "param_service_design_mode",
      "param_service_content",
      "param_service_visuals",
      "param_rea_listing",
      "param_rea_details",
      "param_rea_design_mode",
      "param_rea_content",
      "param_rea_visuals",
      "param_has_blog",
      "param_blog_articles",
      "param_blog_visuals",
      "param_blog_seo",
      "param_opt_logo",
      "param_logo_concepts",
      "param_logo_exports",
      "param_brand_guidelines",
      "param_brand_templates",
      "param_opt_formation",
      "param_opt_hosting",
      "param_hosting_cost",
      "param_opt_domain",
      "param_domain_cost",
      "param_chatbot_offer",
      "param_chatbot_plugin_setup_hours",
      "param_chatbot_plugin_integration_hours",
      "param_chatbot_plugin_training_hours",
      "param_chatbot_plugin_subscription",
      "param_chatbot_external_setup_hours",
      "param_chatbot_external_integration_hours",
      "param_chatbot_external_training_hours",
      "param_chatbot_external_subscription",
      "param_chatbot_custom_workshop_hours",
      "param_chatbot_custom_dev_hours",
      "param_chatbot_custom_training_hours",
      "param_chatbot_custom_subscription",
      "param_translation_mode",
      "param_translation_languages",
      "param_translation_pages",
      "param_translation_products",
      "param_margin",
      "param_fx",
      "param_buffer",
      "param_import_articles",
      "param_import_batch_size",
      "param_import_base_cost",
      "param_import_degressif"
    ];

    const ALL_INPUT_IDS = [...PARAM_INPUT_IDS, "param_type_site", "param_comment", "param_tariff_preset"];

    function readParams() {
      const nbHome = Math.max(1, safeNumber(document.getElementById("param_nb_home").value, 1));
      const nbPages = Math.max(0, safeNumber(document.getElementById("param_nb_pages").value, 0));
      const nbLegal = Math.max(0, safeNumber(document.getElementById("param_nb_legal").value, 0));
      const seoIntensity = Math.max(0, safeNumber(document.getElementById("param_seo_mode").value, 1));
      const nbServiceListing = Math.max(0, Math.min(1, safeNumber(document.getElementById("param_service_listing").value, 1)));
      const nbServiceDetails = Math.max(0, safeNumber(document.getElementById("param_service_details").value, 0));
      const serviceDesignFactor = safeNumber(document.getElementById("param_service_design_mode").value, 1);
      const serviceContentMode = Math.max(0, Math.min(1, safeNumber(document.getElementById("param_service_content").value, 1)));
      const serviceVisualsPref = Math.max(0, Math.min(1, safeNumber(document.getElementById("param_service_visuals").value, 0)));
      const nbReaListing = Math.max(0, Math.min(1, safeNumber(document.getElementById("param_rea_listing").value, 1)));
      const nbReaDetails = Math.max(0, safeNumber(document.getElementById("param_rea_details").value, 0));
      const reaDesignFactor = safeNumber(document.getElementById("param_rea_design_mode").value, 1);
      const reaContentMode = Math.max(0, Math.min(1, safeNumber(document.getElementById("param_rea_content").value, 1)));
      const reaVisualsPref = Math.max(0, Math.min(1, safeNumber(document.getElementById("param_rea_visuals").value, 0)));
      const hasBlog = Math.max(0, Math.min(1, safeNumber(document.getElementById("param_has_blog").value, 1)));
      const blogArticlesRaw = Math.max(0, safeNumber(document.getElementById("param_blog_articles").value, 0));
      const blogArticles = hasBlog ? blogArticlesRaw : 0;
      const wantsBlogVisuals = Math.max(0, Math.min(1, safeNumber(document.getElementById("param_blog_visuals").value, 1)));
      const wantsBlogSeo = Math.max(0, Math.min(1, safeNumber(document.getElementById("param_blog_seo").value, 1)));
      const articleVisualsVolume = blogArticles * wantsBlogVisuals;
      const articleSeoVolume = blogArticles * wantsBlogSeo;
      const optLogo = Math.max(0, Math.min(1, safeNumber(document.getElementById("param_opt_logo").value, 0)));
      const logoConceptsRaw = Math.max(0, safeNumber(document.getElementById("param_logo_concepts").value, 2));
      const logoConcepts = optLogo ? logoConceptsRaw : 0;
      const logoExportsRaw = Math.max(0, safeNumber(document.getElementById("param_logo_exports").value, 3));
      const logoExports = optLogo ? logoExportsRaw : 0;
      const brandGuidelinesMode = optLogo ? Math.max(0, safeNumber(document.getElementById("param_brand_guidelines").value, 1)) : 0;
      const brandTemplatesRaw = Math.max(0, safeNumber(document.getElementById("param_brand_templates").value, 2));
      const brandTemplates = optLogo ? brandTemplatesRaw : 0;
      const optFormation = Math.max(0, Math.min(1, safeNumber(document.getElementById("param_opt_formation").value, 0)));
      const optHosting = Math.max(0, Math.min(1, safeNumber(document.getElementById("param_opt_hosting").value, 0)));
      const hostingCostRaw = Math.max(0, safeNumber(document.getElementById("param_hosting_cost").value, 0));
      const hostingCost = optHosting ? hostingCostRaw : 0;
      const optDomain = Math.max(0, Math.min(1, safeNumber(document.getElementById("param_opt_domain").value, 0)));
      const domainCostRaw = Math.max(0, safeNumber(document.getElementById("param_domain_cost").value, 0));
      const domainCost = optDomain ? domainCostRaw : 0;
      const chatbotOffer = document.getElementById("param_chatbot_offer")?.value || "none";

      const chatbotPlugin = {
        setupHours: Math.max(0, safeNumber(document.getElementById("param_chatbot_plugin_setup_hours").value, 0)),
        integrationHours: Math.max(0, safeNumber(document.getElementById("param_chatbot_plugin_integration_hours").value, 0)),
        trainingHours: Math.max(0, safeNumber(document.getElementById("param_chatbot_plugin_training_hours").value, 0)),
        subscription: Math.max(0, safeNumber(document.getElementById("param_chatbot_plugin_subscription").value, 0)),
        label: "Plugin \"clé en main\""
      };

      const chatbotExternal = {
        setupHours: Math.max(0, safeNumber(document.getElementById("param_chatbot_external_setup_hours").value, 0)),
        integrationHours: Math.max(0, safeNumber(document.getElementById("param_chatbot_external_integration_hours").value, 0)),
        trainingHours: Math.max(0, safeNumber(document.getElementById("param_chatbot_external_training_hours").value, 0)),
        subscription: Math.max(0, safeNumber(document.getElementById("param_chatbot_external_subscription").value, 0)),
        label: "Chatbot externe"
      };

      const chatbotCustom = {
        setupHours: Math.max(0, safeNumber(document.getElementById("param_chatbot_custom_workshop_hours").value, 0)),
        integrationHours: Math.max(0, safeNumber(document.getElementById("param_chatbot_custom_dev_hours").value, 0)),
        trainingHours: Math.max(0, safeNumber(document.getElementById("param_chatbot_custom_training_hours").value, 0)),
        subscription: Math.max(0, safeNumber(document.getElementById("param_chatbot_custom_subscription").value, 0)),
        label: "Intégration sur mesure"
      };

      const chatbotOffers = {
        plugin: chatbotPlugin,
        external: chatbotExternal,
        custom: chatbotCustom
      };

      const selectedChatbotOffer = chatbotOffers[chatbotOffer];
      const optChatbot = selectedChatbotOffer ? 1 : 0;

      const chatbotSetupHours = selectedChatbotOffer?.setupHours ?? 0;
      const chatbotIntegrationHours = selectedChatbotOffer?.integrationHours ?? 0;
      const chatbotTrainingHours = selectedChatbotOffer?.trainingHours ?? 0;
      const chatbotSubscription = selectedChatbotOffer?.subscription ?? 0;
      const complexity = safeNumber(document.getElementById("param_complexity").value, 1);
      const margin = Math.max(1, safeNumber(document.getElementById("param_margin").value, 1.3));
      const fx = Math.max(1, safeNumber(document.getElementById("param_fx").value, 5000));
      const bufferPercent = Math.max(0, safeNumber(document.getElementById("param_buffer").value, 0));
      const importArticlesRaw = Math.max(0, safeNumber(document.getElementById("param_import_articles").value, 0));
      const importArticles = hasBlog ? importArticlesRaw : 0;
      const importBatchSize = Math.max(1, safeNumber(document.getElementById("param_import_batch_size").value, 1));
      const importBaseCost = Math.max(0, safeNumber(document.getElementById("param_import_base_cost").value, 0));
      const importDegressive = Math.max(0, safeNumber(document.getElementById("param_import_degressif").value, 1));

      const totalInternalPages = nbPages + nbLegal;
      const totalPagesWithExtras = totalInternalPages + nbServiceListing + nbServiceDetails + nbReaListing + nbReaDetails + (hasBlog ? 2 : 0);
      const seoAutoPages = Math.round((nbHome + totalInternalPages) * seoIntensity);
      const serviceContentPages = serviceContentMode ? nbServiceListing + nbServiceDetails : 0;
      const reaContentPages = reaContentMode ? nbReaListing + nbReaDetails : 0;
      const serviceVisualsVolume = serviceContentMode ? serviceVisualsPref * nbServiceDetails : 0;
      const reaVisualsVolume = reaContentMode ? reaVisualsPref * nbReaDetails : 0;
      const nbSeoPages = seoAutoPages + serviceContentPages + reaContentPages;
      const translationMode = document.getElementById("param_translation_mode")?.value || "none";
      const translationLanguagesRaw = Math.max(1, safeNumber(document.getElementById("param_translation_languages").value, 1));
      const translationLanguages = translationMode === "none" ? 1 : translationLanguagesRaw;
      const translationAdditionalLanguages = Math.max(0, translationLanguages - 1);
      const translationPagesRaw = Math.max(0, safeNumber(document.getElementById("param_translation_pages").value, totalPagesWithExtras));
      const translationProductsRaw = Math.max(0, safeNumber(document.getElementById("param_translation_products").value, 0));
      const translationPagesInput = translationPagesRaw > 0 ? translationPagesRaw : totalPagesWithExtras;
      const translationProductsInput = translationProductsRaw > 0 ? translationProductsRaw : 0;
      const translationCoefficients = TRANSLATION_MODES[translationMode]?.coefficients || null;
      const translationSiteHours = computeTranslationHours(translationCoefficients, translationAdditionalLanguages, translationPagesInput, translationProductsInput);
      const translationLabel = TRANSLATION_MODES[translationMode]?.label || "Pas de traduction";
      const translationActive = translationMode !== "none" && translationAdditionalLanguages > 0;
      const translationSubscription = 0;
      const translationCost = translationSiteHours * (rolesById["dev"]?.rate || 0);
      const qaFeatureFlags = [
        nbServiceListing + nbServiceDetails > 0,
        nbReaListing + nbReaDetails > 0,
        hasBlog > 0,
        optLogo > 0,
        optFormation > 0,
        optChatbot > 0,
        importArticles > 0,
        optHosting > 0,
        optDomain > 0,
        translationActive
      ];
      const qaFunctionalLoad = qaFeatureFlags.filter(Boolean).length;
      const qaWorkload = nbHome + totalPagesWithExtras + qaFunctionalLoad;

      return {
        nbHome,
        nbPages,
        nbLegal,
        totalInternalPages,
        totalPagesWithExtras,
        nbSeoPages,
        qaWorkload,
        seoAutoPages,
        nbServiceListing,
        nbServiceDetails,
        serviceDesignFactor,
        serviceContentMode,
        serviceContentPages,
        serviceVisualsVolume,
        nbReaListing,
        nbReaDetails,
        reaDesignFactor,
        reaContentMode,
        reaContentPages,
        reaVisualsVolume,
        hasBlog,
        blogArticles,
        articleVisualsVolume,
        articleSeoVolume,
        optLogo,
        logoConcepts,
        logoExports,
        brandGuidelinesMode,
        brandTemplates,
        optFormation,
        optHosting,
        hostingCost,
        optDomain,
        domainCost,
        translationMode,
        translationLabel,
        translationLanguages,
        translationAdditionalLanguages,
        translationPagesInput,
        translationProductsInput,
        translationSiteHours,
        translationActive,
        translationCost,
        translationSubscription,
        chatbotOffer,
        chatbotOfferLabel: selectedChatbotOffer?.label ?? "Pas de chatbot",
        optChatbot,
        chatbotSetupHours,
        chatbotIntegrationHours,
        chatbotTrainingHours,
        chatbotSubscription,
        complexity,
        margin,
        fx,
        bufferPercent,
        importArticles,
        importBatchSize,
        importBaseCost,
        importDegressive
      };
    }

    function computeImportCost(importArticles, batchSize, baseCost, degressive) {
      if (importArticles <= 0 || batchSize <= 0 || baseCost <= 0) {
        return { cost: 0, batches: 0 };
      }

      const batches = Math.ceil(importArticles / batchSize);
      let cost = 0;

      for (let i = 0; i < batches; i++) {
        cost += baseCost * Math.pow(degressive, i);
      }

      return { cost, batches };
    }

    function getTaskVolume(task, params) {
      switch (task.volumeKey) {
        case "nbHome": return params.nbHome;
        case "nbInternalPages": return params.totalInternalPages;
        case "nbSeoPages": return params.nbSeoPages;
        case "qaWorkload": return params.qaWorkload;
        case "identityPack": return params.optLogo;
        case "logoConcepts": return params.logoConcepts;
        case "logoExports": return params.logoExports;
        case "brandGuidelines": return params.brandGuidelinesMode;
        case "brandTemplates": return params.brandTemplates;
        case "optFormation": return params.optFormation;
        case "serviceListing": return params.nbServiceListing;
        case "serviceDetailsWeighted": return params.nbServiceDetails * params.serviceDesignFactor;
        case "serviceContentPages": return params.serviceContentPages;
        case "serviceVisualsVolume": return params.serviceVisualsVolume;
        case "reaListing": return params.nbReaListing;
        case "reaDetailsWeighted": return params.nbReaDetails * params.reaDesignFactor;
        case "reaContentPages": return params.reaContentPages;
        case "reaVisualsVolume": return params.reaVisualsVolume;
        case "blogArticles": return params.blogArticles;
        case "articleVisuals": return params.articleVisualsVolume;
        case "articleSeo": return params.articleSeoVolume;
        case "hasBlog": return params.hasBlog;
        case "translationSiteHours": return params.translationSiteHours;
        case "chatbotSetupHours": return params.chatbotSetupHours;
        case "chatbotIntegrationHours": return params.chatbotIntegrationHours;
        case "chatbotTrainingHours": return params.chatbotTrainingHours;
        case "importArticles": return params.importArticles;
        case "const":
        default:
          return 1;
      }
    }

    function cloneTask(task) {
      return { ...task };
    }

    function getVolumeOption(value) {
      return volumeOptions.find(opt => opt.value === value) || { value: "const", label: "Valeur fixe (1x)", hint: "" };
    }

    function populateTaskRoleSelect() {
      const select = document.getElementById("task_role");
      if (!select) return;
      select.innerHTML = "";
      roles.forEach(role => {
        const option = document.createElement("option");
        option.value = role.id;
        option.textContent = role.name;
        select.appendChild(option);
      });
    }

    function populateTaskVolumeSelect() {
      const select = document.getElementById("task_volume");
      if (!select) return;
      select.innerHTML = "";
      volumeOptions.forEach(opt => {
        const option = document.createElement("option");
        option.value = opt.value;
        option.textContent = opt.label;
        select.appendChild(option);
      });
      updateTaskVolumeHint(select.value);
    }

    function updateTaskVolumeHint(value) {
      const hint = document.getElementById("task_volume_hint");
      if (!hint) return;
      const option = getVolumeOption(value);
      hint.textContent = option.hint || "";
    }

    function resetTaskForm() {
      const form = document.getElementById("task-editor");
      const status = document.getElementById("task_form_status");
      const saveBtn = document.getElementById("save_task");
      if (!form) return;
      form.reset();
      const roleSelect = document.getElementById("task_role");
      const volumeSelect = document.getElementById("task_volume");
      if (roleSelect && roles[0]) roleSelect.value = roles[0].id;
      if (volumeSelect) {
        volumeSelect.value = "const";
        updateTaskVolumeHint(volumeSelect.value);
      }
      editingTaskId = null;
      if (status) status.textContent = "Mode ajout";
      if (saveBtn) saveBtn.textContent = "Enregistrer la tâche";
      renderTaskPills();
    }

    function clearTaskDragDecorations() {
      document.querySelectorAll(".task-pill").forEach(pill => {
        pill.classList.remove("drag-over-top", "drag-over-bottom", "dragging");
      });

      const scroller = document.querySelector(".task-list-panel .list-scroller");
      if (scroller) scroller.classList.remove("dragging-active");
      draggedTaskId = null;
    }

    function startTaskDrag(event, taskId, pill) {
      draggedTaskId = taskId;
      pill.classList.add("dragging");
      const scroller = document.querySelector(".task-list-panel .list-scroller");
      if (scroller) scroller.classList.add("dragging-active");
      if (event.dataTransfer) {
        event.dataTransfer.effectAllowed = "move";
        event.dataTransfer.setData("text/plain", taskId);
      }
    }

    function handleTaskDragOver(event, targetTaskId, pill) {
      if (!draggedTaskId || draggedTaskId === targetTaskId) return;
      event.preventDefault();
      if (event.dataTransfer) event.dataTransfer.dropEffect = "move";

      const rect = pill.getBoundingClientRect();
      const isBefore = event.clientY < rect.top + rect.height / 2;
      pill.classList.toggle("drag-over-top", isBefore);
      pill.classList.toggle("drag-over-bottom", !isBefore);
    }

    function handleTaskDrop(event, targetTaskId) {
      if (!draggedTaskId || draggedTaskId === targetTaskId) {
        clearTaskDragDecorations();
        return;
      }

      event.preventDefault();
      event.stopPropagation();
      const pill = event.currentTarget;
      const rect = pill.getBoundingClientRect();
      const insertBefore = event.clientY < rect.top + rect.height / 2;
      const changed = reorderTasks(draggedTaskId, targetTaskId, insertBefore ? "before" : "after");

      clearTaskDragDecorations();

      if (changed) {
        syncTasksUI();
      } else {
        renderTaskPills();
      }
    }

    function handleContainerDragOver(event) {
      if (!draggedTaskId) return;
      event.preventDefault();
      const scroller = event.currentTarget;
      scroller.classList.add("dragging-active");
      if (event.dataTransfer) event.dataTransfer.dropEffect = "move";
    }

    function handleContainerDrop(event) {
      if (!draggedTaskId) return;
      event.preventDefault();
      const lastTaskId = tasks[tasks.length - 1]?.id;
      const changed = lastTaskId ? reorderTasks(draggedTaskId, lastTaskId, "after") : false;
      clearTaskDragDecorations();
      if (changed) {
        syncTasksUI();
      } else {
        renderTaskPills();
      }
    }

    function reorderTasks(draggedId, targetId, position = "before") {
      if (draggedId === targetId) return false;

      const currentIndex = tasks.findIndex(task => task.id === draggedId);
      const targetIndex = tasks.findIndex(task => task.id === targetId);
      if (currentIndex === -1 || targetIndex === -1) return false;

      const [movedTask] = tasks.splice(currentIndex, 1);
      let adjustedTargetIndex = targetIndex;
      if (currentIndex < targetIndex) {
        adjustedTargetIndex -= 1;
      }

      let insertionIndex = adjustedTargetIndex + (position === "after" ? 1 : 0);
      insertionIndex = Math.max(0, Math.min(tasks.length, insertionIndex));
      tasks.splice(insertionIndex, 0, movedTask);
      return insertionIndex !== currentIndex;
    }

    function deleteTask(taskId) {
      const task = tasks.find(t => t.id === taskId);
      if (!task) return;

      const confirmDeletion = confirm(`Supprimer la tâche « ${task.label} » ?`);
      if (!confirmDeletion) return;

      tasks = tasks.filter(t => t.id !== taskId);

      if (editingTaskId === taskId) {
        resetTaskForm();
      }

      syncTasksUI();
    }

    function renderTaskPills() {
      const container = document.getElementById("task-list");
      if (!container) return;
      container.innerHTML = "";

      if (!hasTaskDnDListeners) {
        container.addEventListener("dragover", handleContainerDragOver);
        container.addEventListener("drop", handleContainerDrop);
        hasTaskDnDListeners = true;
      }

      tasks.forEach(task => {
        const pill = document.createElement("div");
        const isActive = editingTaskId === task.id;
        pill.className = `task-pill${isActive ? " active" : ""}`;

        const row = document.createElement("div");
        row.className = "pill-row";

        const dragHandle = document.createElement("button");
        dragHandle.type = "button";
        dragHandle.className = "drag-handle";
        dragHandle.setAttribute("aria-label", `Réordonner ${task.label}`);
        dragHandle.setAttribute("draggable", "true");
        dragHandle.innerHTML = "⠿";
        dragHandle.addEventListener("dragstart", event => startTaskDrag(event, task.id, pill));
        dragHandle.addEventListener("dragend", clearTaskDragDecorations);
        ["click", "mousedown"].forEach(evt => dragHandle.addEventListener(evt, e => e.stopPropagation()));

        const title = document.createElement("strong");
        title.textContent = task.label;

        row.appendChild(dragHandle);
        row.appendChild(title);

        const meta = document.createElement("div");
        meta.className = "meta";
        const phase = document.createElement("span");
        phase.textContent = `Phase : ${task.phase}`;
        const role = document.createElement("span");
        role.textContent = `Rôle : ${rolesById[task.roleId]?.name || "—"}`;
        const volumeLabel = document.createElement("span");
        volumeLabel.textContent = `Volume : ${getVolumeOption(task.volumeKey).label}`;
        const hours = document.createElement("span");
        hours.textContent = `Base : ${fmtHours(task.baseHours)}`;

        meta.appendChild(phase);
        meta.appendChild(role);
        meta.appendChild(volumeLabel);
        meta.appendChild(hours);

        const actions = document.createElement("div");
        actions.className = "pill-actions";

        if (!isActive) {
          const editBtn = document.createElement("button");
          editBtn.type = "button";
          editBtn.className = "pill-action";
          editBtn.textContent = "Modifier";
          editBtn.addEventListener("click", event => {
            event.stopPropagation();
            loadTaskIntoForm(task.id);
          });
          actions.appendChild(editBtn);
        }

        const deleteBtn = document.createElement("button");
        deleteBtn.type = "button";
        deleteBtn.className = "pill-action pill-action--danger";
        deleteBtn.textContent = "Supprimer";
        deleteBtn.addEventListener("click", event => {
          event.stopPropagation();
          deleteTask(task.id);
        });

        actions.appendChild(deleteBtn);

        pill.addEventListener("click", () => loadTaskIntoForm(task.id));
        pill.addEventListener("dragover", event => handleTaskDragOver(event, task.id, pill));
        pill.addEventListener("dragenter", event => handleTaskDragOver(event, task.id, pill));
        pill.addEventListener("dragleave", () => pill.classList.remove("drag-over-top", "drag-over-bottom"));
        pill.addEventListener("drop", event => handleTaskDrop(event, task.id));

        pill.appendChild(row);
        pill.appendChild(meta);
        pill.appendChild(actions);
        container.appendChild(pill);
      });
    }

    function toggleTasksModal(isOpen) {
      const modal = document.getElementById("tasks-modal");
      if (!modal) return;
      modal.classList.toggle("is-open", isOpen);
      modal.setAttribute("aria-hidden", isOpen ? "false" : "true");
      document.body.classList.toggle("modal-open", isOpen);

      if (isOpen) {
        const taskLabelInput = document.getElementById("task_label");
        if (taskLabelInput) {
          taskLabelInput.focus();
        }
      }
    }

    function bindTasksModalEvents() {
      const modal = document.getElementById("tasks-modal");
      const openBtn = document.getElementById("open_tasks_modal");
      if (!modal || !openBtn) return;

      openBtn.addEventListener("click", () => toggleTasksModal(true));

      modal.querySelectorAll('[data-close="tasks-modal"]').forEach(trigger => {
        trigger.addEventListener("click", () => toggleTasksModal(false));
      });

      modal.addEventListener("keydown", event => {
        if (event.key === "Escape" && modal.classList.contains("is-open")) {
          toggleTasksModal(false);
        }
      });
    }

    function loadTaskIntoForm(taskId) {
      const task = tasks.find(t => t.id === taskId);
      if (!task) return;
      const form = document.getElementById("task-editor");
      if (!form) return;
      document.getElementById("task_label").value = task.label;
      document.getElementById("task_phase").value = task.phase;
      const roleSelect = document.getElementById("task_role");
      const volumeSelect = document.getElementById("task_volume");
      if (roleSelect) roleSelect.value = task.roleId;
      if (volumeSelect) {
        volumeSelect.value = task.volumeKey;
        updateTaskVolumeHint(volumeSelect.value);
      }
      document.getElementById("task_hours").value = task.baseHours;
      editingTaskId = task.id;
      const status = document.getElementById("task_form_status");
      const saveBtn = document.getElementById("save_task");
      if (status) status.textContent = `Modification : ${task.label}`;
      if (saveBtn) saveBtn.textContent = "Mettre à jour";
      renderTaskPills();
    }

    function renderTasksTable() {
      const tbody = document.getElementById("tasks-body");
      if (!tbody) return;
      tbody.innerHTML = "";
      tasks.forEach(task => {
        const tr = document.createElement("tr");
        tr.dataset.taskId = task.id;
        tr.dataset.roleId = task.roleId;

        const tdPhase = document.createElement("td");
        tdPhase.innerHTML = `<span class="tasks-phase">${task.phase}</span>`;

        const tdLabel = document.createElement("td");
        tdLabel.textContent = task.label;

        const tdRole = document.createElement("td");
        tdRole.textContent = rolesById[task.roleId]?.name || "—";

        const tdBase = document.createElement("td");
        tdBase.className = "align-right";
        tdBase.dataset.type = "base";
        tdBase.textContent = fmtHours(task.baseHours);

        const tdVolume = document.createElement("td");
        tdVolume.className = "align-right";
        tdVolume.textContent = "—";
        tdVolume.dataset.type = "volume";

        const tdHours = document.createElement("td");
        tdHours.className = "align-right";
        tdHours.textContent = "—";
        tdHours.dataset.type = "hours";

        const tdRate = document.createElement("td");
        tdRate.className = "align-right";
        tdRate.textContent = "—";
        tdRate.dataset.type = "rate";

        const tdCost = document.createElement("td");
        tdCost.className = "align-right";
        tdCost.textContent = "—";
        tdCost.dataset.type = "cost";

        tr.appendChild(tdPhase);
        tr.appendChild(tdLabel);
        tr.appendChild(tdRole);
        tr.appendChild(tdBase);
        tr.appendChild(tdVolume);
        tr.appendChild(tdHours);
        tr.appendChild(tdRate);
        tr.appendChild(tdCost);

        tbody.appendChild(tr);
      });
    }

    function syncTasksUI({ recalc = true } = {}) {
      renderTasksTable();
      renderTaskPills();
      if (recalc) recalcAll();
    }

    function initTaskCustomization() {
      bindTasksModalEvents();
      toggleTasksModal(false);
      populateTaskRoleSelect();
      populateTaskVolumeSelect();
      resetTaskForm();
      syncTasksUI({ recalc: false });

      const volumeSelect = document.getElementById("task_volume");
      if (volumeSelect) {
        volumeSelect.addEventListener("change", () => updateTaskVolumeHint(volumeSelect.value));
      }

      const form = document.getElementById("task-editor");
      if (form) {
        form.addEventListener("submit", event => {
          event.preventDefault();
          const label = document.getElementById("task_label").value.trim();
          const phase = document.getElementById("task_phase").value.trim();
          const roleId = document.getElementById("task_role").value;
          const volumeKey = document.getElementById("task_volume").value;
          const baseHours = safeNumber(document.getElementById("task_hours").value, 0);
          if (!label || !phase) return;

          if (editingTaskId) {
            tasks = tasks.map(task => task.id === editingTaskId
              ? { ...task, label, phase, roleId, baseHours, volumeKey }
              : task);
          } else {
            const newId = `${slugifyComment(label)}-${Date.now()}`;
            tasks.push({ id: newId, phase, label, roleId, baseHours, volumeKey, type: "custom" });
          }

          resetTaskForm();
          syncTasksUI();
        });
      }

      const cancelBtn = document.getElementById("cancel_task");
      if (cancelBtn) {
        cancelBtn.addEventListener("click", () => resetTaskForm());
      }

      const resetBtn = document.getElementById("reset_tasks");
      if (resetBtn) {
        resetBtn.addEventListener("click", () => {
          tasks = defaultTasks.map(cloneTask);
          resetTaskForm();
          syncTasksUI();
        });
      }
    }

    // ----- Initialisation UI -----
    function initRolesTable() {
      const tbody = document.getElementById("roles-body");
      tbody.innerHTML = "";
      roles.forEach(role => {
        const tr = document.createElement("tr");

        const tdName = document.createElement("td");
        tdName.textContent = role.name;

        const tdRate = document.createElement("td");
        tdRate.className = "align-right";
        const input = document.createElement("input");
        input.type = "number";
        input.min = "0";
        input.step = "1";
        input.value = role.rate;
        input.dataset.roleId = role.id;
        input.addEventListener("input", () => {
          role.rate = safeNumber(input.value, role.rate);

          if (!isApplyingRatePreset) {
            const select = document.getElementById("param_tariff_preset");
            if (select && select.value !== "custom") {
              select.value = "custom";
            }
          }

          recalcAll();
        });
        tdRate.appendChild(input);

        const tdNote = document.createElement("td");
        tdNote.textContent = role.note;

        tr.appendChild(tdName);
        tr.appendChild(tdRate);
        tr.appendChild(tdNote);

        tbody.appendChild(tr);
      });
    }

    function applyFilterIcon(roleId) {
      const iconEl = document.querySelector(".filter-select .filter-icon");
      if (!iconEl) return;

      const style = roleIconStyles[roleId] || roleIconStyles.all;
      iconEl.textContent = style.icon;
      iconEl.style.color = style.color;
      iconEl.style.background = style.bg;
      iconEl.style.borderColor = style.border;
    }

    function totalsChanged(prev, next) {
      if (!prev || !next) return false;
      return ["hours", "cost", "internal", "sell"].some(key => {
        return Math.round((prev[key] ?? 0) * 100) !== Math.round((next[key] ?? 0) * 100);
      });
    }

    function updateFilterFeedback(roleId, hasChanged) {
      const feedback = document.getElementById("filter-feedback");
      if (!feedback) return;

      const defaultMessage = "Utilises le filtre par rôle pour voir le résumé financier du profil sélectionné.";
      const roleLabel = rolesById[roleId]?.name ?? roleId;

      if (roleId === "all") {
        feedback.textContent = defaultMessage;
        return;
      }

      feedback.innerHTML = `Filtre par rôle <b>${roleLabel}</b> appliqué`;
    }

    function renderOptionBadges(options) {
      const container = document.getElementById("summary-options");
      if (!container) return;

      container.innerHTML = "";

      const items = options.length ? options : [{ label: "Aucune option", icon: "⌀", tone: "muted" }];

      items.forEach(opt => {
        const pill = document.createElement("span");
        pill.className = `option-pill ${opt.tone || ""}`.trim();

        const icon = document.createElement("span");
        icon.className = "pill-icon";
        icon.textContent = opt.icon || "•";
        pill.appendChild(icon);

        const label = document.createElement("span");
        label.className = "pill-label";
        label.textContent = opt.label;
        pill.appendChild(label);

        container.appendChild(pill);
      });
    }

    function initFieldGroupToggles() {
      const groups = Array.from(document.querySelectorAll(".field-group"));

      groups.forEach((group, index) => {
        const header = group.querySelector(".group-header");
        if (!header) return;

        const content = document.createElement("div");
        const contentId = `field-group-content-${index}`;
        content.className = "group-content";
        content.id = contentId;

        while (header.nextElementSibling) {
          content.appendChild(header.nextElementSibling);
        }
        group.appendChild(content);

        header.setAttribute("role", "button");
        header.setAttribute("tabindex", "0");
        header.setAttribute("aria-expanded", "true");
        header.setAttribute("aria-controls", contentId);

        const setExpanded = expanded => {
          header.setAttribute("aria-expanded", expanded ? "true" : "false");
          group.classList.toggle("is-collapsed", !expanded);
          content.style.maxHeight = expanded ? `${content.scrollHeight}px` : "0px";
        };

        const toggle = () => setExpanded(header.getAttribute("aria-expanded") !== "true");

        header.addEventListener("click", toggle);
        header.addEventListener("keydown", event => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            toggle();
          }
        });

        const resizeObserver = new ResizeObserver(() => {
          if (header.getAttribute("aria-expanded") === "true") {
            content.style.maxHeight = `${content.scrollHeight}px`;
          }
        });

        resizeObserver.observe(content);

        requestAnimationFrame(() => setExpanded(true));
      });
    }

    function updateChatbotOfferVisibility(activeOffer) {
      document.querySelectorAll(".chatbot-offer-block").forEach(block => {
        const offer = block.getAttribute("data-chatbot-offer");
        block.classList.toggle("is-hidden", offer !== activeOffer);
      });
    }

    function updateTranslationFieldsUI(params) {
      const block = document.getElementById("translation-params-block");
      const pagesInput = document.getElementById("param_translation_pages");
      const productsInput = document.getElementById("param_translation_products");
      const active = params.translationMode && params.translationMode !== "none";

      if (block) block.classList.toggle("is-hidden", !active);

      if (pagesInput) pagesInput.placeholder = params.totalPagesWithExtras;
      if (pagesInput && safeNumber(pagesInput.value, 0) <= 0) pagesInput.value = params.totalPagesWithExtras;
      if (productsInput) productsInput.placeholder = 0;
      if (productsInput && safeNumber(productsInput.value, 0) <= 0) productsInput.value = 0;
    }

    function updateZeroToggleLabel(checked) {
      const label = document.getElementById("toggle-zero-cost-label");
      if (!label) return;
      label.textContent = checked ? "Tâches à 0€ masquées" : "Tâches à 0€ affichées";
    }

    function updateCurrencyToggleLabel(checked) {
      const label = document.getElementById("currency-toggle-label");
      if (!label) return;
      label.textContent = checked ? "Devis en Ariary" : "Devis en €";
    }

    function initZeroCostToggle() {
      const toggle = document.getElementById("toggle-zero-cost");
      if (!toggle) return;

      hideZeroCost = toggle.checked;
      updateZeroToggleLabel(toggle.checked);

      toggle.addEventListener("change", () => {
        hideZeroCost = toggle.checked;
        updateZeroToggleLabel(toggle.checked);
        recalcAll();
      });
    }

    function initCurrencyToggle() {
      const toggle = document.getElementById("currency-toggle");
      if (!toggle) return;

      activeCurrency = toggle.checked ? "mga" : "eur";
      updateCurrencyToggleLabel(toggle.checked);

      toggle.addEventListener("change", () => {
        activeCurrency = toggle.checked ? "mga" : "eur";
        updateCurrencyToggleLabel(toggle.checked);
        recalcAll();
      });
    }

    function initRoleFilter() {
      const select = document.getElementById("tasks-role-filter");
      if (!select) return;

      select.innerHTML = "";

      const optionAll = document.createElement("option");
      optionAll.value = "all";
      optionAll.textContent = "Tous les rôles";
      optionAll.dataset.icon = roleIconStyles.all.icon;
      select.appendChild(optionAll);

      roles.forEach(role => {
        const option = document.createElement("option");
        option.value = role.id;
        option.textContent = role.name;
        option.dataset.icon = role.icon || roleIconStyles.all.icon;
        select.appendChild(option);
      });

      select.value = activeRoleFilter;
      applyFilterIcon(select.value);

      select.addEventListener("change", () => {
        const previousTotals = { ...lastTotals };
        activeRoleFilter = select.value;
        applyFilterIcon(activeRoleFilter);
        const newTotals = recalcAll();
        updateFilterFeedback(activeRoleFilter, totalsChanged(previousTotals, newTotals));
      });
    }

    // ----- Recalcul global -----

    function recalcAll() {
      const params = readParams();
      const importResult = computeImportCost(
        params.importArticles,
        params.importBatchSize,
        params.importBaseCost,
        params.importDegressive
      );

      updateChatbotOfferVisibility(params.chatbotOffer);
      updateTranslationFieldsUI(params);

      const currencyMeta = getCurrencyMeta();
      const formatMainCurrency = value => formatCurrency(value, params.fx);
      const formatSecondaryCurrency = value => formatAltCurrency(value, params.fx);

      // Résumé simple
      document.getElementById("summary-pages").textContent =
        `${params.nbHome} home · ${params.totalPagesWithExtras} internes`;
      document.getElementById("summary-complexity").textContent =
        `x${params.complexity.toLocaleString("fr-FR", { minimumFractionDigits: 1, maximumFractionDigits: 1 })}`;
      document.getElementById("summary-legal-pages").textContent =
        params.nbLegal > 0
          ? `${params.nbLegal} pages légales incluses`
          : "Aucune page légale";
      const opts = [];
      if (params.optLogo === 1) {
        const label = params.brandGuidelinesMode > 0 ? "Identité visuelle + charte" : "Identité visuelle";
        opts.push({ label, icon: "🎨", tone: "accent" });
      }
      if (params.optFormation === 1) opts.push({ label: "Formation client", icon: "🎓", tone: "success" });
      if (params.translationActive) {
        const langLabel = params.translationLanguages > 1
          ? `${params.translationLanguages} langues`
          : "Langue unique";
        opts.push({ label: `${params.translationLabel} · ${langLabel}`, icon: "🌐" });
      }
      if (params.hasBlog === 1) {
        const blogLabel = params.blogArticles > 0 ? `Blog (${params.blogArticles} art.)` : "Blog activé";
        opts.push({ label: blogLabel, icon: "✍️" });
      }
      if (params.nbServiceListing === 1 || params.nbServiceDetails > 0) {
        const detailLabel = params.nbServiceDetails > 0 ? `${params.nbServiceDetails} fiches` : "listing seul";
        const designLabel = params.serviceDesignFactor > 1 ? "design dédié" : "gabarit unique";
        opts.push({ label: `Services ${detailLabel} (${designLabel})`, icon: "🛠️" });
      }
      if (params.serviceContentMode === 1 && params.serviceContentPages > 0) {
        opts.push({ label: `Rédac/SEO services x${params.serviceContentPages}` , icon: "🖋️" });
      }
      if (params.serviceVisualsVolume > 0) {
        opts.push({ label: `Visuels services x${params.serviceVisualsVolume}`, icon: "🖼️" });
      }
      if (params.nbReaListing === 1 || params.nbReaDetails > 0) {
        const detailLabel = params.nbReaDetails > 0 ? `${params.nbReaDetails} cas` : "listing seul";
        const designLabel = params.reaDesignFactor > 1 ? "design dédié" : "gabarit unique";
        opts.push({ label: `Réalisations ${detailLabel} (${designLabel})`, icon: "🏆" });
      }
      if (params.reaContentMode === 1 && params.reaContentPages > 0) {
        opts.push({ label: `Rédac/SEO réas x${params.reaContentPages}`, icon: "🖋️" });
      }
      if (params.reaVisualsVolume > 0) {
        opts.push({ label: `Visuels réas x${params.reaVisualsVolume}`, icon: "🖼️" });
      }
      if (params.nbSeoPages > 0) {
        const seoParts = [];
        if (params.seoAutoPages > 0) seoParts.push(`auto ${params.seoAutoPages}`);
        if (params.serviceContentPages > 0) seoParts.push(`services ${params.serviceContentPages}`);
        if (params.reaContentPages > 0) seoParts.push(`réas ${params.reaContentPages}`);
        const seoBreakdown = seoParts.length ? ` (${seoParts.join(" / ")})` : "";
        opts.push({ label: `SEO x${params.nbSeoPages}${seoBreakdown}`, icon: "🔍", tone: "accent" });
      }
      if (importResult.batches > 0) {
        opts.push({ label: `Import ${params.importArticles} art.`, icon: "⬇️" });
      }
      if (params.optHosting === 1) {
        opts.push({ label: `Hébergement ${fmtEuro(params.hostingCost, 0)}`, icon: "☁️", tone: "success" });
      }
      if (params.optDomain === 1) {
        opts.push({ label: `Nom de domaine ${fmtEuro(params.domainCost, 0)}`, icon: "🌐" });
      }
      if (params.optChatbot === 1) {
        const totalChatbotHours = params.chatbotSetupHours + params.chatbotIntegrationHours + params.chatbotTrainingHours;
        const chatbotSubscriptionLabel = params.chatbotSubscription > 0 ? ` + ${fmtEuro(params.chatbotSubscription, 0)}/mois` : "";
        const chatbotOfferLabel = params.chatbotOfferLabel ? `${params.chatbotOfferLabel} · ` : "";
        opts.push({
          label: `Chatbot IA · ${chatbotOfferLabel}${totalChatbotHours}h${chatbotSubscriptionLabel}`,
          icon: "🤖",
          tone: "accent"
        });
      }
      renderOptionBadges(opts);
      document.getElementById("summary-import").textContent =
        params.hasBlog === 0
          ? "Blog non prévu"
          : importResult.batches > 0
            ? `Blog activé · ${params.importArticles} art. / ${importResult.batches} batchs → ${fmtEuro(importResult.cost, 0)}`
            : "Blog activé · pas d'import";

      // Détail des tâches
      const tbody = document.getElementById("tasks-body");
      let totalHours = 0;
      let totalCost = 0;

      tasks.forEach(task => {
        const row = tbody.querySelector(`tr[data-task-id="${task.id}"]`);
        if (!row) return;

        const rate = rolesById[task.roleId]?.rate ?? 0;
        const isImportTask = task.type === "import";
        const matchesFilter = activeRoleFilter === "all" || task.roleId === activeRoleFilter;

        let baseHours = task.baseHours;
        let volume = getTaskVolume(task, params);
        let hours = task.baseHours * volume * params.complexity;
        let cost = hours * rate;

        if (isImportTask) {
          volume = params.importArticles;
          baseHours = rate > 0 ? params.importBaseCost / rate : 0;
          hours = rate > 0 ? importResult.cost / rate : 0;
          cost = importResult.cost;
        }

        if (matchesFilter) {
          totalHours += hours;
          totalCost += cost;
        }

        const isZeroCost = Math.abs(cost) < 0.0001;
        const isVisible = matchesFilter && !(hideZeroCost && isZeroCost);

        row.classList.toggle("is-hidden", !isVisible);
        row.querySelector('td[data-type="base"]').textContent = fmtHours(baseHours);
        row.querySelector('td[data-type="volume"]').textContent =
          volume.toLocaleString("fr-FR", { maximumFractionDigits: 1 });
        row.querySelector('td[data-type="hours"]').textContent = fmtHours(hours);
        row.querySelector('td[data-type="rate"]').textContent = formatMainCurrency(rate);
        row.querySelector('td[data-type="cost"]').textContent = formatMainCurrency(cost);
      });

      const hostingDomainCost =
        (params.optHosting ? params.hostingCost : 0) +
        (params.optDomain ? params.domainCost : 0);

      const hostingActive = params.optHosting === 1 || params.optDomain === 1;

      const chatbotCost = params.optChatbot ? params.chatbotSubscription : 0;
      const translationOptionCost = params.translationActive ? params.translationSubscription : 0;
      const translationCost = params.translationActive ? params.translationCost : 0;

      const includeOptionCosts = !activeRoleFilter || activeRoleFilter === "all";
      const optionCosts = includeOptionCosts ? hostingDomainCost + chatbotCost + translationOptionCost : 0;
      const totalBeforeBuffer = totalCost;

      document.getElementById("tfoot-hours").textContent = fmtHours(totalHours);
      document.getElementById("tfoot-cost").textContent = formatMainCurrency(totalBeforeBuffer);
      document.getElementById("tfoot-prebuffer").textContent = formatMainCurrency(totalBeforeBuffer);

      // Buffer imprévus appliqué uniquement sur la production freelance
      const bufferAmount = totalBeforeBuffer * (params.bufferPercent / 100);
      const internalWithBuffer = totalBeforeBuffer + bufferAmount + optionCosts;

      // Prix de vente
      const priceSell = internalWithBuffer * params.margin;

      document.getElementById("summary-cost-freelance").textContent = formatMainCurrency(totalBeforeBuffer);
      document.getElementById("summary-cost-hosting").textContent = formatMainCurrency(hostingDomainCost);
      const chatbotHoursTotal = params.chatbotSetupHours + params.chatbotIntegrationHours + params.chatbotTrainingHours;
      const chatbotSetupCost =
        (params.chatbotSetupHours * (rolesById["cp"]?.rate || 0)) +
        (params.chatbotIntegrationHours * (rolesById["dev"]?.rate || 0)) +
        (params.chatbotTrainingHours * (rolesById["seo"]?.rate || 0));
      const chatbotDetailsLabel = params.optChatbot
        ? `${params.chatbotOfferLabel} · ${formatMainCurrency(chatbotCost)}/mois · ${fmtHours(chatbotHoursTotal)}h`
        : "Pas de chatbot activé";

      document.getElementById("summary-cost-chatbot").textContent =
        params.optChatbot ? formatMainCurrency(chatbotSetupCost) : formatMainCurrency(0);
      document.getElementById("summary-chatbot-details").textContent = chatbotDetailsLabel;

      const hostingCard = document.getElementById("summary-hosting-card");
      const chatbotCard = document.getElementById("summary-chatbot-card");
      const translationCard = document.getElementById("summary-translation-card");

      if (hostingCard) hostingCard.classList.toggle("is-hidden", !hostingActive);
      if (chatbotCard) chatbotCard.classList.toggle("is-hidden", params.optChatbot !== 1);
      if (translationCard) translationCard.classList.toggle("is-hidden", !params.translationActive);
      document.getElementById("summary-cost-internal").textContent = formatMainCurrency(internalWithBuffer);
      document.getElementById("summary-price-sell").textContent = formatMainCurrency(priceSell);
      document.getElementById("summary-price-sell-mga").textContent = formatSecondaryCurrency(priceSell);

      const priceSellLabel = document.getElementById("summary-price-sell-label");
      const priceSellMgaLabel = document.getElementById("summary-price-sell-mga-label");
      const priceSellMgaChip = document.getElementById("summary-price-sell-mga-chip");
      const rateHeader = document.getElementById("tasks-header-rate");
      const costHeader = document.getElementById("tasks-header-cost");

      if (priceSellLabel) {
        priceSellLabel.textContent = `Prix conseillé HT (${currencyMeta.mainSymbol})`;
      }
      if (priceSellMgaLabel) {
        priceSellMgaLabel.textContent = `Équivalence (${currencyMeta.altSymbol})`;
      }
      if (priceSellMgaChip) {
        priceSellMgaChip.textContent = `Conversion indicative en ${currencyMeta.altName}`;
      }
      if (rateHeader) {
        rateHeader.textContent = `Taux ${currencyMeta.mainSymbol}/h`;
      }
      if (costHeader) {
        costHeader.textContent = `Coût tâche (${currencyMeta.mainSymbol})`;
      }

      const translationDetails = params.translationActive
        ? `${params.translationLabel} · ${params.translationLanguages} langues · ${fmtHours(params.translationSiteHours)}h`
        : "Pas de traduction activée";
      document.getElementById("summary-cost-translation").textContent = formatMainCurrency(translationCost);
      document.getElementById("summary-translation-details").textContent = translationDetails;

      lastTotals = {
        hours: totalHours,
        cost: totalBeforeBuffer,
        internal: internalWithBuffer,
        sell: priceSell
      };

      return lastTotals;
    }

    function bindParamEvents() {
      PARAM_INPUT_IDS.forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        const evt = el.tagName === "SELECT" ? "change" : "input";
        el.addEventListener(evt, recalcAll);
      });
    }

    function bindPresetControls() {
      const select = document.getElementById("param_type_site");
      const resetBtn = document.getElementById("preset_reset");

      if (select) {
        select.addEventListener("change", () => applyPreset(select.value));
      }

      if (resetBtn) {
        resetBtn.addEventListener("click", () => {
          if (select) {
            applyPreset(select.value);
          }
        });
      }
    }

    function bindTariffPresetControls() {
      const select = document.getElementById("param_tariff_preset");
      if (!select) return;

      select.addEventListener("change", () => {
        const value = select.value;
        if (value === "custom") {
          recalcAll();
          return;
        }

        applyRatePreset(value);
      });
    }

    function setImportStatus(message, isError = false) {
      const status = document.getElementById("import_status");
      if (!status) return;
      status.textContent = message;
      status.classList.toggle("error", Boolean(isError));
    }

    function serializeInputs() {
      const inputs = {};
      ALL_INPUT_IDS.forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        inputs[id] = el.value;
      });
      return inputs;
    }

    function refreshRoleInputs() {
      document.querySelectorAll('#roles-body input[data-role-id]').forEach(input => {
        const role = rolesById[input.dataset.roleId];
        if (role) {
          input.value = role.rate;
        }
      });
    }

    function escapeCsvValue(value) {
      const normalized = String(value ?? "").replace(/\u00A0/g, " ").trim();
      return `"${normalized.replace(/"/g, '""')}"`;
    }

    function getVisibleTaskRows() {
      return Array.from(document.querySelectorAll("#tasks-body tr")).filter(row => !row.classList.contains("is-hidden"));
    }

    function exportTasksCsv() {
      const table = document.querySelector(".tasks-table-wrapper table");
      if (!table) return;

      const headerCells = Array.from(table.querySelectorAll("thead th")).map(cell => cell.textContent.trim());
      const visibleRows = getVisibleTaskRows();
      const rows = [];

      const filterLabel = activeRoleFilter === "all"
        ? "Tous les rôles"
        : (rolesById[activeRoleFilter]?.name ?? activeRoleFilter);

      rows.push(["Filtre par rôle", filterLabel]);
      rows.push(["Tâches visibles", String(visibleRows.length)]);
      rows.push([]);

      rows.push(headerCells);
      visibleRows.forEach(row => {
        const cells = Array.from(row.querySelectorAll("td")).map(cell => cell.textContent.trim());
        rows.push(cells);
      });

      rows.push([]);
      const footerRows = Array.from(table.querySelectorAll("tfoot tr"));
      footerRows.forEach(tr => {
        const cells = Array.from(tr.querySelectorAll("td")).map(cell => cell.textContent.trim());
        rows.push(cells);
      });

      const csvContent = rows
        .map(columns => columns.map(escapeCsvValue).join(";"))
        .join("\n");

      const date = new Date();
      const stamp = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
      const projectSlug = slugifyComment(document.getElementById("param_comment")?.value || "devis");
      const filterSlug = slugifyComment(filterLabel);
      const filename = `${projectSlug}-taches-${filterSlug}-${stamp}.csv`;

      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = filename;
      link.click();
      URL.revokeObjectURL(url);
    }

    function buildExportState() {
      return {
        meta: {
          exportedAt: new Date().toISOString()
        },
        inputs: serializeInputs(),
        roles: roles.map(role => ({ id: role.id, rate: role.rate })),
        tasks: tasks.map(task => ({
          id: task.id,
          phase: task.phase,
          label: task.label,
          roleId: task.roleId,
          baseHours: task.baseHours,
          volumeKey: task.volumeKey,
          type: task.type
        }))
      };
    }

    function slugifyComment(comment) {
      const base = comment.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
      return base || "calculateur-devis";
    }

    function exportParams() {
      const state = buildExportState();
      const comment = document.getElementById("param_comment")?.value || "";
      const date = new Date();
      const stamp = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
      const filename = `${slugifyComment(comment)}-${stamp}.json`;
      const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = filename;
      link.click();
      URL.revokeObjectURL(url);
      setImportStatus(`Export prêt (${filename})`);
    }

    function applyImportedState(data) {
      if (!data || typeof data !== "object") {
        throw new Error("Fichier invalide");
      }

      const inputs = data.inputs || {};
      ALL_INPUT_IDS.forEach(id => {
        if (!Object.prototype.hasOwnProperty.call(inputs, id)) return;
        const el = document.getElementById(id);
        if (el) {
          el.value = inputs[id];
        }
      });

      const importedTariffPreset = inputs.param_tariff_preset;
      if (importedTariffPreset && importedTariffPreset !== "custom" && (!Array.isArray(data.roles) || data.roles.length === 0)) {
        applyRatePreset(importedTariffPreset, { recalc: false });
      }

      if (Array.isArray(data.roles)) {
        data.roles.forEach(r => {
          if (!r || typeof r !== "object") return;
          const role = rolesById[r.id];
          const rate = safeNumber(r.rate, role?.rate ?? 0);
          if (role) {
            role.rate = rate;
          }
        });
        refreshRoleInputs();

        const select = document.getElementById("param_tariff_preset");
        if (select) {
          select.value = importedTariffPreset || "custom";
        }
      }

      if (Array.isArray(data.tasks)) {
        tasks = data.tasks.map(task => {
          const base = cloneTask(task);
          return {
            id: base.id || `${slugifyComment(base.label || "tache")}-${Date.now()}`,
            phase: base.phase || "Divers",
            label: base.label || "Tâche personnalisée",
            roleId: base.roleId || roles[0]?.id || "cp",
            baseHours: safeNumber(base.baseHours, 0),
            volumeKey: base.volumeKey || "const",
            type: base.type
          };
        });
      } else {
        tasks = defaultTasks.map(cloneTask);
      }

      syncTasksUI({ recalc: false });

      recalcAll();
      setImportStatus("Paramètres importés avec succès");
    }

    function handleImportFile(event) {
      const file = event.target.files?.[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = () => {
        try {
          const data = JSON.parse(reader.result);
          applyImportedState(data);
        } catch (err) {
          setImportStatus("Import impossible : fichier invalide", true);
        }
      };
      reader.onerror = () => setImportStatus("Import impossible : lecture échouée", true);
      reader.readAsText(file);

      // reset input value to allow re-importing the same file
      event.target.value = "";
    }

    document.addEventListener("DOMContentLoaded", () => {
      initFieldGroupToggles();
      initRolesTable();
      initRoleFilter();
      initZeroCostToggle();
      initCurrencyToggle();
      initTaskCustomization();
      bindPresetControls();
      bindTariffPresetControls();
      bindParamEvents();
      document.getElementById("export_tasks")?.addEventListener("click", exportTasksCsv);
      document.getElementById("export_params")?.addEventListener("click", exportParams);
      document.getElementById("import_params")?.addEventListener("change", handleImportFile);
      const presetSelect = document.getElementById("param_type_site");
      const initialPreset = presetSelect?.value ?? "vitrine";
      const tariffSelect = document.getElementById("param_tariff_preset");
      const initialTariffPreset = tariffSelect?.value ?? "custom";
      if (initialTariffPreset !== "custom") {
        applyRatePreset(initialTariffPreset, { recalc: false });
      }
      applyPreset(initialPreset);
      updateFilterFeedback(activeRoleFilter, false);
    });
  </script>
</body>
</html>
