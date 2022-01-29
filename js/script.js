console.log('JS OK');
console.log('Vue OK', Vue);

const root = new Vue({
    el: '#root',
    data: {
        players: [
            { text: 'Dusan Vlahovic', done: '', },
            { text: 'Dusan Vlahovic', done: '', },
            { text: 'Dusan Vlahovic', done: '', },
            { text: 'Dusan Vlahovic', done: '', },
            { text: 'Dusan Vlahovic', done: '', },
        ]
    },
    methods: {
        deletTask(index) {
            console.log(index);
        }
    }
});