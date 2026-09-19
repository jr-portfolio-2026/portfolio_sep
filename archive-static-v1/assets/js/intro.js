(function () {
  const loader = document.getElementById("loader");
  const enter = document.getElementById("enter");
  const instruction = document.getElementById("loader-instruction");
  const progressValue = document.getElementById("progress-value");
  const transition = document.getElementById("page-transition");
  const status = document.getElementById("status");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let loading = false;

  function startLoading() {
    if (loading) return;
    loading = true;
    enter.disabled = true;
    loader.classList.add("is-loading");
    instruction.textContent = "Loading portfolio";
    status.textContent = "Loading portfolio.";

    if (reducedMotion) {
      progressValue.textContent = "100";
      finishLoading();
      return;
    }

    const startedAt = performance.now();
    const duration = 2650;

    function updateProgress(now) {
      const progress = Math.min(100, Math.round(((now - startedAt) / duration) * 100));
      progressValue.textContent = String(progress).padStart(2, "0");
      if (progress < 100) {
        window.requestAnimationFrame(updateProgress);
      } else {
        finishLoading();
      }
    }

    window.requestAnimationFrame(updateProgress);
  }

  function finishLoading() {
    instruction.textContent = "Portfolio ready";
    status.textContent = "Portfolio ready.";
    transition.classList.add("is-visible");
    window.setTimeout(function () {
      window.location.href = "home.html";
    }, reducedMotion ? 30 : 680);
  }

  enter.addEventListener("click", startLoading);
}());
