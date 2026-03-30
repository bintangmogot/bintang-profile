import { ref } from 'vue';

export const language = ref('EN');

export const toggleLanguage = () => {
    language.value = language.value === 'ID' ? 'EN' : 'ID';
};
