import "./components/text";
import "./components/button";
import "./components/player-options";
import "./components/computer-options";
import "./components/counter";
import "./components/score";


import "./pages/welcome";
import "./pages/instructions";
import "./pages/move";
import "./pages/result";

import { initRouter } from "./router";
import { state } from "./state";

state.init();

initRouter();