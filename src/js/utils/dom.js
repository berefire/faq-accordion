const selectors = {
  faqItem: ".faq-item",
};

/* ============== Helpers ============== */

function assertElement(element, context) {
  const isEmptyNodeList = element instanceof NodeList && element.length === 0;

  if (!element || isEmptyNodeList) {
    throw new Error(`Expected element for ${context}, but got ${element}`);
  }
}

export function addSafeListener(element, event, handler) {
  assertElement(element, `addSafeListener for event ${event}`);

  element.addEventListener(event, handler);
}

/* ============== DOM Initialization ============== */

export function initDOMElements() {
  const DOM = {
    accordionItems: document.querySelectorAll(selectors.faqItem),
  };

  Object.entries(DOM).forEach(([key, element]) => {
    assertElement(element, `DOM.${key}`);
  });

  return DOM;
}
