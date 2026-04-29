<style>
.contact-wrap {
  font-family: 'Inter', sans-serif;
  background: #fff;
  color: #1E293B;
}

* { box-sizing: border-box; }

/* ── shared ─────────────────────────────────────────── */
.label-tag {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #0066CC;
  display: flex;
  align-items: center;
  gap: 10px;
}

.label-tag::before {
  content: '';
  display: block;
  width: 28px;
  height: 2px;
  background: #0066CC;
  border-radius: 1px;
}

/* ── HERO ────────────────────────────────────────────── */
.contact-hero {
  padding: 10rem 2rem 5rem;
  max-width: 1400px;
  margin: 0 auto;
}

.contact-hero-inner {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 2px solid #E2E8F0;
  padding-bottom: 3.5rem;
  gap: 2rem;
}

.contact-hero-title {
  font-size: clamp(3.5rem, 10vw, 7rem);
  font-weight: 700;
  line-height: 1.05;
  color: #1E293B;
  margin: 0;
  letter-spacing: -0.035em;
}

.contact-hero-title em {
  font-style: italic;
  color: #0066CC;
}

.contact-hero-sub {
  font-size: 0.95rem;
  font-weight: 400;
  color: #64748B;
  line-height: 1.75;
  max-width: 280px;
  text-align: right;
}

/* ── CONTACT INFO GRID ───────────────────────────────── */
.contact-info-section {
  padding: 4rem 2rem 0;
}

.contact-info-inner {
  max-width: 1200px;
  margin: 0 auto;
}

.contact-board {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  margin-bottom: 1.25rem;
}

.board-img {
  overflow: hidden;
  position: relative;
  border-radius: 14px;
}

.board-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  min-height: 300px;
  transition: transform 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.board-img:hover img { transform: scale(1.04); }

.board-card {
  background: #F8FAFC;
  border: 1px solid #E2E8F0;
  border-radius: 14px;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1.25rem;
  min-height: 300px;
  transition: background 0.3s, border-color 0.3s, box-shadow 0.3s, transform 0.3s;
  cursor: default;
}

.board-card:hover {
  background: #0F172A;
  border-color: #0F172A;
  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.2);
  transform: translateY(-3px);
}

.board-card:hover .bc-label { color: #60A5FA; }
.board-card:hover .bc-label::before { background: #60A5FA; }
.board-card:hover .bc-value { color: #fff; }
.board-card:hover .bc-sub { color: rgba(255, 255, 255, 0.45); }
.board-card:hover .bc-icon-line { background: #60A5FA; }
.board-card:hover .bc-icon-svg { stroke: #60A5FA; }

.bc-icon-wrap {
  width: 44px;
  height: 44px;
  overflow: hidden;
  position: relative;
}

.bc-icon-front,
.bc-icon-back {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.bc-icon-back { transform: translateY(100%); }
.board-card:hover .bc-icon-front { transform: translateY(-100%); }
.board-card:hover .bc-icon-back { transform: translateY(0); }

.bc-icon-svg {
  width: 22px;
  height: 22px;
  stroke: #64748B;
  fill: none;
  stroke-width: 1.5;
  transition: stroke 0.3s;
}

.bc-icon-line {
  width: 28px;
  height: 2px;
  background: #0066CC;
  margin-top: 0.25rem;
  border-radius: 1px;
  transition: background 0.3s;
}

.bc-label {
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #0066CC;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: color 0.3s;
}

.bc-label::before {
  content: '';
  display: block;
  width: 14px;
  height: 2px;
  background: #0066CC;
  border-radius: 1px;
  transition: background 0.3s;
}

.bc-value {
  font-size: clamp(1.1rem, 1.75vw, 1.5rem);
  font-weight: 700;
  color: #1E293B;
  line-height: 1.25;
  letter-spacing: -0.01em;
  transition: color 0.3s;
}

.bc-sub {
  font-size: 0.85rem;
  font-weight: 400;
  color: #64748B;
  line-height: 1.65;
  transition: color 0.3s;
}

/* ── FORM SECTION ────────────────────────────────────── */
.contact-form-section {
  padding: 5rem 2rem;
  background: #0F172A;
  margin-top: 4rem;
}

.contact-form-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: start;
}

.form-dark-label {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #60A5FA;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 1.75rem;
}

.form-dark-label::before {
  content: '';
  display: block;
  width: 28px;
  height: 2px;
  background: #60A5FA;
  border-radius: 1px;
}

.form-headline {
  font-size: clamp(1.875rem, 4vw, 3rem);
  font-weight: 700;
  color: #fff;
  line-height: 1.15;
  margin-bottom: 1.75rem;
  letter-spacing: -0.025em;
}

.form-headline em {
  font-style: italic;
  color: #60A5FA;
}

.form-body {
  font-size: 0.95rem;
  font-weight: 400;
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.45);
  margin-bottom: 2.5rem;
}

.form-contact-block { display: flex; flex-direction: column; gap: 1.5rem; }

.fck {
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.35);
  display: block;
  margin-bottom: 0.3rem;
}

.fcv {
  font-size: 0.9rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
}

/* Form fields */
.form-fields { display: flex; flex-direction: column; gap: 0; }

.field-group {
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  padding: 1.25rem 0;
  position: relative;
}

.field-group:first-child { border-top: 1px solid rgba(255, 255, 255, 0.08); }

.field-label {
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.3);
  display: block;
  margin-bottom: 0.5rem;
  transition: color 0.25s;
}

.field-input {
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  font-weight: 400;
  color: #fff;
  padding: 0;
  transition: color 0.25s;
}

.field-input::placeholder { color: rgba(255, 255, 255, 0.18); }
.field-input:focus { color: #fff; }

.field-textarea {
  resize: none;
  min-height: 100px;
  line-height: 1.7;
}

.field-focus-line {
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 0;
  height: 2px;
  background: #0066CC;
  border-radius: 1px;
  transition: width 0.35s ease;
}

.field-group:focus-within .field-focus-line { width: 100%; }
.field-group:focus-within .field-label { color: #60A5FA; }

.submit-btn {
  margin-top: 2.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background: #0066CC;
  color: #fff;
  border: none;
  font-family: 'Inter', sans-serif;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 16px 32px;
  border-radius: 10px;
  cursor: pointer;
  width: 100%;
  transition: background 0.25s, transform 0.2s, box-shadow 0.25s;
  box-shadow: 0 4px 16px rgba(0, 102, 204, 0.35);
}

.submit-btn:hover {
  background: #0052A3;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 102, 204, 0.45);
}

.submit-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}

.btn-arr {
  width: 18px;
  height: 1.5px;
  background: currentColor;
  position: relative;
  flex-shrink: 0;
  transition: width 0.25s;
}

.submit-btn:hover .btn-arr { width: 26px; }

.btn-arr::after {
  content: '';
  position: absolute;
  right: 0;
  top: -3.5px;
  width: 7px;
  height: 7px;
  border-right: 1.5px solid currentColor;
  border-top: 1.5px solid currentColor;
  transform: rotate(45deg);
}

.form-success {
  margin-top: 1.25rem;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #34D399;
  text-align: center;
}

/* ── RESPONSIVE ─────────────────────────────────────── */
@media (max-width: 900px) {
  .contact-hero-inner { flex-direction: column; align-items: flex-start; gap: 2rem; }
  .contact-hero-sub { text-align: left; max-width: 100%; }
  .contact-board { grid-template-columns: 1fr; }
  .board-img img { min-height: 220px; }
  .board-card { min-height: 260px; }
  .contact-form-inner { grid-template-columns: 1fr; gap: 3rem; }
  .contact-hero { padding: 7rem 1.5rem 3rem; }
  .contact-info-section { padding: 3rem 1.5rem 0; }
  .contact-form-section { padding: 3.5rem 1.5rem; }
}

@media (max-width: 520px) {
  .contact-hero-title { font-size: 2.75rem; }
}
</style>

<template>
  <div class="contact-wrap">

    <!-- ── HERO ──────────────────────────────────────── -->
    <div class="contact-hero">
      <div class="contact-hero-inner">
        <div>
          <p class="label-tag" style="margin-bottom: 2rem">Get in Touch</p>
          <h1 class="contact-hero-title">
            {{ t.contact || 'Contact' }}<br /><em>Us</em>
          </h1>
        </div>
        <p class="contact-hero-sub">
          {{ t.contactForm?.heroSubtitle || 'Reach out and let us know how we can help you build your next venture.' }}
        </p>
      </div>
    </div>

    <!-- ── CHECKERBOARD INFO ──────────────────────────── -->
    <section class="contact-info-section">
      <div class="contact-info-inner">

        <!-- Row 1: img | phone | img -->
        <div class="contact-board">
          <div class="board-img">
            <img src="/eishi/stock_images/1.avif" alt="Eishi Office" loading="lazy" />
          </div>

          <div class="board-card">
            <div class="bc-icon-wrap">
              <div class="bc-icon-front">
                <svg class="bc-icon-svg" viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 013.09 5.18 2 2 0 015.07 3h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L9.09 10.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
              </div>
              <div class="bc-icon-back">
                <svg class="bc-icon-svg" viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 013.09 5.18 2 2 0 015.07 3h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L9.09 10.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
              </div>
            </div>
            <div class="bc-icon-line" />
            <p class="bc-label">{{ t.contactForm?.phoneLabel || 'Phone' }}</p>
            <p class="bc-value">+63 (917)-575-5044</p>
            <p class="bc-sub">Mon–Fri, 9AM–6PM PHT</p>
          </div>

          <div class="board-img">
            <img src="/eishi/stock_images/2.avif" alt="Eishi Property" loading="lazy" />
          </div>
        </div>

        <!-- Row 2: email | img | address -->
        <div class="contact-board">
          <div class="board-card">
            <div class="bc-icon-wrap">
              <div class="bc-icon-front">
                <svg class="bc-icon-svg" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div class="bc-icon-back">
                <svg class="bc-icon-svg" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
            </div>
            <div class="bc-icon-line" />
            <p class="bc-label">{{ t.contactForm?.emailLabel || 'Email' }}</p>
            <p class="bc-value">eishiproperties<br />@gmail.com</p>
            <p class="bc-sub">{{ t.contactForm?.responseTime || 'Response within 24 hours' }}</p>
          </div>

          <div class="board-img">
            <img src="/eishi/stock_images/3.avif" alt="Eishi Location" loading="lazy" />
          </div>

          <div class="board-card">
            <div class="bc-icon-wrap">
              <div class="bc-icon-front">
                <svg class="bc-icon-svg" viewBox="0 0 24 24">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <div class="bc-icon-back">
                <svg class="bc-icon-svg" viewBox="0 0 24 24">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
            </div>
            <div class="bc-icon-line" />
            <p class="bc-label">{{ t.contactForm?.addressLabel || 'Address' }}</p>
            <p class="bc-value">JC 81 KM5, Pico,<br />La Trinidad, Benguet</p>
            <p class="bc-sub">Mon–Sat: 9AM–6PM<br />Sunday: Closed</p>
          </div>
        </div>

      </div>
    </section>

    <!-- ── FORM SECTION ───────────────────────────────── -->
    <section class="contact-form-section">
      <div class="contact-form-inner">

        <!-- Left: intro copy -->
        <div class="form-left">
          <p class="form-dark-label">Send a Message</p>
          <h2 class="form-headline">
            {{ t.contactForm?.formTitle || "Let's Start a" }}<br />
            <em>{{ t.contactForm?.formTitleSub || 'Conversation' }}</em>
          </h2>
          <p class="form-body">
            {{ t.contactForm?.formDescription || 'Whether you are interested in our properties, want to become a partner, or simply want to learn more about Eishi Group — we would love to hear from you.' }}
          </p>
          <div class="form-contact-block">
            <div class="form-contact-row">
              <span class="fck">Phone</span>
              <span class="fcv">+63 (917)-575-5044</span>
            </div>
            <div class="form-contact-row">
              <span class="fck">Email</span>
              <span class="fcv">eishiproperties@gmail.com</span>
            </div>
            <div class="form-contact-row">
              <span class="fck">Address</span>
              <span class="fcv">JC 81 KM5, Pico, La Trinidad, Benguet</span>
            </div>
          </div>
        </div>

        <!-- Right: form -->
        <div class="form-right">
          <form class="form-fields" @submit.prevent="submitForm">

            <div class="field-group">
              <label class="field-label">{{ t.contactForm?.nameLabel || 'Full Name' }}</label>
              <input
                v-model="form.name"
                class="field-input"
                type="text"
                :placeholder="t.contactForm?.namePlaceholder || 'Your full name'"
                required
              />
              <div class="field-focus-line" />
            </div>

            <div class="field-group">
              <label class="field-label">{{ t.contactForm?.emailLabel || 'Email' }}</label>
              <input
                v-model="form.email"
                class="field-input"
                type="email"
                :placeholder="t.contactForm?.emailPlaceholder || 'your@email.com'"
                required
              />
              <div class="field-focus-line" />
            </div>

            <div class="field-group">
              <label class="field-label">{{ t.contactForm?.phoneLabel || 'Phone' }}</label>
              <input
                v-model="form.phone"
                class="field-input"
                type="tel"
                :placeholder="t.contactForm?.phonePlaceholder || '+63 (9XX) XXX-XXXX'"
              />
              <div class="field-focus-line" />
            </div>

            <div class="field-group">
              <label class="field-label">{{ t.contactForm?.subjectLabel || 'Subject' }}</label>
              <input
                v-model="form.subject"
                class="field-input"
                type="text"
                :placeholder="t.contactForm?.subjectPlaceholder || 'How can we help you?'"
              />
              <div class="field-focus-line" />
            </div>

            <div class="field-group">
              <label class="field-label">{{ t.contactForm?.messageLabel || 'Message' }}</label>
              <textarea
                v-model="form.message"
                class="field-input field-textarea"
                :placeholder="t.contactForm?.messagePlaceholder || 'Tell us more about your inquiry...'"
                required
              />
              <div class="field-focus-line" />
            </div>

            <button type="submit" class="submit-btn" :disabled="submitting">
              {{ submitting ? 'Sending…' : (t.contactForm?.submitLabel || 'Send Message') }}
              <span class="btn-arr" />
            </button>

            <p v-if="submitted" class="form-success">
              ✦ {{ t.contactForm?.successMessage || 'Message sent. We will be in touch soon.' }}
            </p>

          </form>
        </div>

      </div>
    </section>

  </div>
</template>

<script>
import { mapState } from 'pinia'
import { useLanguageStore } from '@/stores/languageStore'

export default {
  name: 'ContactView',

  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      },
      submitting: false,
      submitted: false,
    }
  },

  computed: {
    ...mapState(useLanguageStore, ['t']),
  },

  methods: {
    async submitForm() {
      this.submitting = true
      // Replace with your actual form submission logic (API call, emailjs, etc.)
      await new Promise(resolve => setTimeout(resolve, 1200))
      this.submitting = false
      this.submitted = true
      this.form = { name: '', email: '', phone: '', subject: '', message: '' }
      setTimeout(() => { this.submitted = false }, 5000)
    },
  },
}
</script>
