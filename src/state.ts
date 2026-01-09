type Jugada = "piedra" | "papel" | "tijera";

type Game = {
  computerPlay: Jugada;
  myPlay: Jugada;
};

type Score = {
  me: number;
  computer: number;
};

type StateData = {
  currentGame: Game | null;
  history: Game[];
  score: Score;
};

const initialState: StateData = {
  currentGame: null,
  history: [],
  score: {
    me: 0,
    computer: 0,
  },
};

type Listener = (state: StateData) => void;

export const state = {
  data: initialState as StateData,
  listeners: [] as Listener[],

  init() {
    const saved = localStorage.getItem("ppt-state");
    if (saved) {
      this.data = JSON.parse(saved);
    }
  },

  getState() {
    return this.data;
  },

  setState(newState: StateData) {
    this.data = newState;
    localStorage.setItem("ppt-state", JSON.stringify(newState));
    this.listeners.forEach((cb) => cb(this.data));
  },

  subscribe(cb: Listener) {
    this.listeners.push(cb);
  },

  setMove(myPlay: Jugada, computerPlay: Jugada) {
  const newGame: Game = {
    myPlay,
    computerPlay,
  };

  const result = this.winner(
    newGame.myPlay,
    newGame.computerPlay
  );

  const newState = { ...this.data };

  newState.currentGame = newGame;
  newState.history = [...newState.history, newGame];

  if (result === "ganaste") newState.score.me += 1;
  if (result === "perdiste") newState.score.computer += 1;

  this.setState(newState);
},

  randomPlay(): Jugada {
    const plays: Jugada[] = ["piedra", "papel", "tijera"];
    const index = Math.floor(Math.random() * plays.length);
    return plays[index];
  },

  winner(myPlay: Jugada, computerPlay: Jugada) {
    if (myPlay === computerPlay) return "empataron";

    if (
      (myPlay === "tijera" && computerPlay === "papel") ||
      (myPlay === "papel" && computerPlay === "piedra") ||
      (myPlay === "piedra" && computerPlay === "tijera")
    ) {
      return "ganaste";
    }

    return "perdiste";
  },

  resetScore() {
    const newState = { ...this.data };
    newState.score = { me: 0, computer: 0 };
    this.setState(newState);
  },
};
