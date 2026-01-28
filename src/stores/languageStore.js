import { defineStore } from 'pinia';
import translations from '@/lang/translation';

export const useLanguageStore = defineStore('language', {
    state: () => ({
        selectedLanguage: localStorage.getItem('lang') || 'English',
        translations,
    }),
    getters: {
        t(state) {
            return state.translations[state.selectedLanguage];
        }
    },
    actions: {
        changeLanguage(lang) {
            this.selectedLanguage = lang
            localStorage.setItem('lang', lang)
        },
    }
});
