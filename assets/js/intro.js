(function () {
  const stage = document.getElementById("stage");
  const transition = document.getElementById("transition");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let leaving = false;
  let automaticEntry;

  function enterPortfolio() {
    if (leaving) return;
    leaving = true;
    window.clearTimeout(automaticEntry);
    stage.classList.add("is-leaving");
    transition.classList.add("is-visible");
    window.setTimeout(function () { window.location.href = "home.html"; }, reducedMotion ? 80 : 820);
  }

  document.getElementById("enter").addEventListener("click", enterPortfolio);
  document.getElementById("skip").addEventListener("click", enterPortfolio);
  automaticEntry = window.setTimeout(enterPortfolio, reducedMotion ? 1200 : 5200);
}());
