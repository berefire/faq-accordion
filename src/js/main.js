import "@styles/main.css";
import { initDOMElements } from "./utils/dom.js";
import { initAccordion } from "./accordion/accordion.js";

const DOMElements = initDOMElements();

initAccordion(DOMElements);
