import { reactive } from 'vue';

export const store = reactive(
    {
        cardsList: [],
        loading: true,
        search: '',
        archetypeCard: ''
    }
);