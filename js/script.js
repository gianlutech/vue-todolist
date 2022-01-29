console.log('JS OK');
console.log('Vue OK', Vue);

const root = new Vue({
    el: '#root',
    data: {
        players: [
            { text: 'Dusan Vlahovic', done: '', },
            { text: 'Ibra', done: '', },
            { text: 'messi', done: '', },
            { text: 'Ronaldo', done: '', },
            { text: 'Dusan Vlahovic', done: '', },
        ]
    },
    methods: {
        deletTask(index) {
            this.players.splice(index, 1);
            console.log(index)
        }
    }
});