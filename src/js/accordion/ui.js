export function openAccordion(details) {
  const content = details.querySelector(".faq-answer");

  details.open = true;

  const contentHeight = content.scrollHeight;

  content.style.blockSize = `${contentHeight}px`;
  content.style.opacity = "1";

  content.addEventListener(
    "transitionend",
    () => {
      if (details.open) {
        content.style.blockSize = "auto";
      }
    },
    { once: true },
  );
}

export function closeAccordion(details) {
  const content = details.querySelector(".faq-answer");

  const contentHeight = content.scrollHeight;

  content.style.blockSize = `${contentHeight}px`;

  requestAnimationFrame(() => {
    content.style.blockSize = "0px";
    content.style.opacity = "0";
  });

  content.addEventListener(
    "transitionend",
    () => {
      details.open = false;
    },
    { once: true },
  );
}
