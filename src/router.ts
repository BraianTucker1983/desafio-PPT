type Route = {
  pathRegex: RegExp;
  tag: string;
};

const routes: Route[] = [
  { pathRegex: /^\/$/, tag: "welcome-page" },
  { pathRegex: /^\/instructions\/?$/, tag: "instructions-page" },
  { pathRegex: /^\/move\/?$/, tag: "move-page" },
  { pathRegex: /^\/result\/?$/, tag: "result-page" },
];

function getCleanPath(): string {
  const basePath = "/desafio-PPT";
  const fullPath = window.location.pathname;

  if (fullPath.startsWith(basePath)) {
    return fullPath.slice(basePath.length) || "/";
  }

  return fullPath || "/";
}

function renderPath(): void {
  const path = getCleanPath();

  const route = routes.find((r) => r.pathRegex.test(path));

  if (!route) {
    console.warn("Ruta no encontrada:", path);
    return;
  }

  const root = document.querySelector(".root");
  if (!root) return;

  root.innerHTML = "";
  root.appendChild(document.createElement(route.tag));
}

export function goTo(path: string): void {
  const basePath = "/desafio-PPT";
  history.pushState({}, "", basePath + path);
  renderPath();
}

export function initRouter(): void {
  renderPath();

  window.addEventListener("popstate", () => {
    renderPath();
  });
}
