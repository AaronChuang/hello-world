import { ref } from 'vue';
import { defineStore } from 'pinia';
export const usePageStore = defineStore('page', () => {
    const activePage = ref('home');
    const isMobile = ref(false);
    function setActive(page) {
        activePage.value = page;
    }
    function setIsMobile(mobile) {
        isMobile.value = mobile;
    }
    return { activePage, setActive, isMobile, setIsMobile };
});
