type Jugada = "piedra" | "papel" | "tijera";
type Game = {
    computerPlay: Jugada;
    myPlay: Jugada;
};

const state = {
    data: {
        currentGame: {
            computerPlay: "",
            myPlay: "",
        },
        history: [{}],
    }, 

    setMove(move: Jugada) {
        const currentState = this.getState();
        currentState.currentGame.myPlay         
    },

    pushToHistory(play: Game) {
        const currentState = this.getState();
        currentState.history.push(play);
    },

    whoWins(myPlay: Jugada, computerPlay: Jugada) {
        if (myPlay == "tijera" && computerPlay == "papel") {
            return "ganaste";
        } else if (myPlay == "papel" && computerPlay == "piedra") {
            return "ganaste";
        } else if (myPlay == "piedra" && computerPlay == "tijera") {
            return "ganaste";
        } else if (myPlay == computerPlay) {
            return "empataron";
        } else {
            return "pierde";
        }
    }
};

state.setMove("piedra");