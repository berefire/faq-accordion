import { addSafeListener } from "../utils/dom.js";
import { openAccordion, closeAccordion } from "./ui.js";

/* ============== Helpers ============== */

function closeOtherAccordions(currentAccordion, accordionItems) {
  accordionItems.forEach((item) => {
    if (item !== currentAccordion && item.open) {
      closeAccordion(item);
    }
  });
}

function handleInitialOpenState(accordionItems) {
  accordionItems.forEach((item) => {
    const content = item.querySelector(".faq-answer");

    if (item.open) {
      content.style.blockSize = `${content.scrollHeight}px`;
      content.style.opacity = "1";
    }
  });
}

/* ============== Event Handlers ============== */

function handleAccordionToggle(details, accordionItems) {
  const isOpen = details.open;

  closeOtherAccordions(details, accordionItems);

  if (isOpen) {
    closeAccordion(details);
  } else {
    openAccordion(details);
  }
}

/* ============== Initialization ============== */

export function initEventListeners(DOMElements) {
  handleInitialOpenState(DOMElements.accordionItems);
  DOMElements.accordionItems.forEach((details) => {
    const summary = details.querySelector(".faq-question");
    addSafeListener(summary, "click", (event) => {
      event.preventDefault();

      handleAccordionToggle(details, DOMElements.accordionItems);
    });
  });
}
