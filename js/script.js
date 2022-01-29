console.log('JS OK');
console.log('Vue OK', Vue);

const root = new Vue({
    el: '#root',
    data: {
        newPlayer: '',
        players: [
            { text: 'Dusan Vlahovic', done: true, },
            { text: 'Ibra', done: false, },
            { text: 'Leo Messi', done: false, },
            { text: 'Cristiano Ronaldo', done: true, },
            { text: 'Manuel Locatelli', done: true, },
        ]
    },
    methods: {
        deletTask(index) {
            this.players.splice(index, 1);

        },

        addPlayer() {
            const newPlayer = this.newPlayer.trim();
            if (newPlayer) {
                const newPlayerObject = {
                    text: newPlayer,
                    done: false,
                }
                this.players.push(newPlayerObject);
            }
            this.newPlayer = '';
        },

        toggleTaskDone() {

        }
    }
});