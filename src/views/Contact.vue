<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,300;0,400;0,700;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

:root {
  --ivory:    #f8f5f0;
  --cream:    #f0ebe2;
  --linen:    #e4ddd3;
  --bronze:   #a07840;
  --bronze-l: #c9a96e;
  --bronze-xl:#ecdfc8;
  --charcoal: #1c1a17;
  --ink:      #2e2b26;
  --mid:      #7a7368;
  --pale:     #b0a898;
  --fd: 'Playfair Display', Georgia, serif;
  --dm: 'DM Sans', sans-serif;
}

.contact-wrap { font-family: var(--dm); background: var(--ivory); color: var(--ink); }
* { box-sizing: border-box; }

/* ── shared ─────────────────────────────────────────── */
.label-tag {
  font-size: 0.68rem; letter-spacing: 0.3em;
  text-transform: uppercase; color: var(--bronze);
  display: flex; align-items: center; gap: 12px;
}
.label-tag::before {
  content: ''; display: block;
  width: 26px; height: 1px; background: var(--bronze);
}

/* ── HERO ────────────────────────────────────────────── */
.contact-hero {
  padding: 14rem 8vw 8vw;
  max-width: 1400px; margin: 0 auto;
}
.contact-hero-inner {
  display: flex; justify-content: space-between; align-items: flex-end;
  border-bottom: 1px solid var(--linen); padding-bottom: 5vw;
}
.contact-hero-title {
  font-family: var(--fd);
  font-size: clamp(4rem, 11vw, 10rem);
  font-weight: 300; line-height: 0.93; color: var(--charcoal); margin: 0;
}
.contact-hero-title em { font-style: italic; color: var(--mid); }
.contact-hero-sub {
  font-size: 0.9rem; font-weight: 300;
  color: var(--mid); line-height: 1.75;
  max-width: 280px; text-align: right;
}

/* ── CONTACT INFO GRID ───────────────────────────────── */
.contact-info-section {
  padding: 8vw 8vw 0;
}
.contact-info-inner {
  max-width: 1200px; margin: 0 auto;
}

/* checkerboard: image | card | image then card | image | card */
.contact-board {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px; background: var(--linen);
  border: 1px solid var(--linen);
  margin-bottom: 2px;
}

.board-img {
  overflow: hidden; position: relative;
}
.board-img img {
  width: 100%; height: 100%;
  object-fit: cover; display: block;
  min-height: 340px;
  transition: transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94);
}
.board-img:hover img { transform: scale(1.04); }

.board-card {
  background: var(--ivory);
  padding: 3.5rem 2.5rem;
  display: flex; flex-direction: column;
  align-items: flex-start; justify-content: center; gap: 1.4rem;
  min-height: 340px;
  transition: background 0.35s;
  cursor: default;
}
.board-card:hover { background: var(--charcoal); }
.board-card:hover .bc-label,
.board-card:hover .bc-label::before  { color: var(--bronze-l); background: var(--bronze-l); }
.board-card:hover .bc-value          { color: var(--ivory); }
.board-card:hover .bc-sub            { color: rgba(248,245,240,0.45); }
.board-card:hover .bc-icon-line      { background: var(--bronze-l); }

.bc-icon-wrap {
  width: 44px; height: 44px; overflow: hidden; position: relative;
}
.bc-icon-front,
.bc-icon-back {
  position: absolute; inset: 0;
  display: flex; align-items: center; justify-content: center;
  transition: transform 0.35s ease;
}
.bc-icon-back { transform: translateY(100%); }
.board-card:hover .bc-icon-front { transform: translateY(-100%); }
.board-card:hover .bc-icon-back  { transform: translateY(0); }

.bc-icon-svg {
  width: 22px; height: 22px;
  stroke: var(--mid); fill: none; stroke-width: 1.5;
  transition: stroke 0.35s;
}
.board-card:hover .bc-icon-svg { stroke: var(--bronze-l); }

.bc-icon-line {
  width: 28px; height: 1px;
  background: var(--bronze); margin-top: 0.5rem;
  transition: background 0.35s;
}

.bc-label {
  font-size: 0.62rem; letter-spacing: 0.3em;
  text-transform: uppercase; color: var(--bronze);
  display: flex; align-items: center; gap: 10px;
  transition: color 0.35s;
}
.bc-label::before {
  content: ''; display: block;
  width: 16px; height: 1px; background: var(--bronze);
  transition: background 0.35s;
}
.bc-value {
  font-family: var(--fd); font-size: clamp(1.2rem, 2vw, 1.7rem);
  font-weight: 300; color: var(--charcoal); line-height: 1.2;
  transition: color 0.35s;
}
.bc-sub {
  font-size: 0.82rem; font-weight: 300;
  color: var(--mid); line-height: 1.6;
  transition: color 0.35s;
}

/* ── FORM SECTION ────────────────────────────────────── */
.contact-form-section {
  padding: 10vw 8vw;
  background: var(--charcoal);
}
.contact-form-inner {
  max-width: 1200px; margin: 0 auto;
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 8vw; align-items: start;
}
.form-left {}
.form-dark-label {
  font-size: 0.68rem; letter-spacing: 0.3em;
  text-transform: uppercase; color: var(--bronze-l);
  display: flex; align-items: center; gap: 12px; margin-bottom: 2rem;
}
.form-dark-label::before {
  content: ''; display: block;
  width: 26px; height: 1px; background: var(--bronze-l);
}
.form-headline {
  font-family: var(--fd);
  font-size: clamp(2.2rem, 4.5vw, 4rem);
  font-weight: 300; color: var(--ivory); line-height: 1.1; margin-bottom: 2rem;
}
.form-headline em { font-style: italic; color: var(--bronze-l); }
.form-body {
  font-size: 0.96rem; font-weight: 300;
  line-height: 1.9; color: rgba(248,245,240,0.45); margin-bottom: 3rem;
}
.form-contact-block { display: flex; flex-direction: column; gap: 1.8rem; }
.form-contact-row {}
.fck {
  font-size: 0.6rem; letter-spacing: 0.22em;
  text-transform: uppercase; color: var(--pale);
  display: block; margin-bottom: 0.3rem;
}
.fcv {
  font-size: 0.9rem; font-weight: 300;
  color: rgba(248,245,240,0.55);
}

/* Form fields */
.form-right {}
.form-fields { display: flex; flex-direction: column; gap: 0; }
.field-group {
  border-bottom: 1px solid rgba(255,255,255,0.1);
  padding: 1.4rem 0;
  position: relative;
}
.field-group:first-child { border-top: 1px solid rgba(255,255,255,0.1); }
.field-label {
  font-size: 0.6rem; letter-spacing: 0.25em;
  text-transform: uppercase; color: rgba(248,245,240,0.35);
  display: block; margin-bottom: 0.5rem;
}
.field-input {
  width: 100%; background: transparent; border: none; outline: none;
  font-family: var(--dm); font-size: 0.96rem; font-weight: 300;
  color: var(--ivory); padding: 0;
  transition: color 0.3s;
}
.field-input::placeholder { color: rgba(248,245,240,0.2); }
.field-input:focus { color: var(--ivory); }
.field-textarea {
  resize: none; min-height: 100px; line-height: 1.7;
}
.field-focus-line {
  position: absolute; bottom: -1px; left: 0;
  width: 0; height: 1px; background: var(--bronze-l);
  transition: width 0.4s ease;
}
.field-group:focus-within .field-focus-line { width: 100%; }
.field-group:focus-within .field-label { color: var(--bronze-l); }

.submit-btn {
  margin-top: 3rem;
  display: inline-flex; align-items: center; gap: 14px;
  border: 1px solid rgba(248,245,240,0.3);
  color: var(--ivory); background: transparent;
  font-family: var(--dm); font-size: 0.7rem;
  letter-spacing: 0.22em; text-transform: uppercase;
  padding: 16px 36px; cursor: pointer;
  transition: background 0.35s, border-color 0.35s;
  width: 100%; justify-content: center;
}
.submit-btn:hover {
  background: rgba(248,245,240,0.08);
  border-color: var(--bronze-l);
}
.submit-btn:disabled { opacity: 0.5; cursor: not-allowed; }
.btn-arr {
  width: 20px; height: 1px; background: currentColor;
  position: relative; flex-shrink: 0; transition: width 0.3s;
}
.submit-btn:hover .btn-arr { width: 30px; }
.btn-arr::after {
  content: ''; position: absolute; right: 0; top: -3.5px;
  width: 7px; height: 7px;
  border-right: 1px solid currentColor; border-top: 1px solid currentColor;
  transform: rotate(45deg);
}
.form-success {
  margin-top: 1.5rem; font-size: 0.8rem; letter-spacing: 0.12em;
  text-transform: uppercase; color: var(--bronze-l); text-align: center;
}

/* ── RESPONSIVE ─────────────────────────────────────── */
@media (max-width: 900px) {
  .contact-hero-inner { flex-direction: column; align-items: flex-start; gap: 2rem; }
  .contact-hero-sub { text-align: left; max-width: 100%; }
  .contact-board { grid-template-columns: 1fr; }
  .board-img img { min-height: 240px; }
  .board-card { min-height: 280px; }
  .contact-form-inner { grid-template-columns: 1fr; }
}
@media (max-width: 520px) {
  .contact-hero-title { font-size: 3.5rem; }
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