import { Parent, genericElement } from "innerscope";
import "./innerscope-base-ui.css";

export function Button(text: string, parent: Parent) {
  const instance = genericElement("button");
  const button = instance(parent);

  button.textContent = text;
  button.style.backgroundColor = "#007acc";
  button.style.color = "#ffffff";
  button.style.padding = "12px 24px";
  button.style.borderRadius = "4px";
  button.style.border = "none";
  button.style.fontSize = "1rem";
  button.style.cursor = "pointer";
  button.style.marginBottom = "32px";
  button.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.2)";
  return button;
}

export function Input(hint: string, parent: Parent) {
  const instance = genericElement("input");
  const input = instance(parent);

  input.style.padding = "12px 24px";
  input.style.borderRadius = "4px";
  input.style.border = "1px solid #ccc";
  input.style.fontSize = "1rem";
  input.style.marginBottom = "32px";
  input.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.2)";
  input.placeholder = hint;
  return input;
}

export function Label(text: string, parent: Parent) {
  const instance = genericElement("label");
  const label = instance(parent);

  label.textContent = text;
  label.style.fontSize = "1rem";
  label.style.marginBottom = "8px";
  return label;
}

export function Checkbox(parent: Parent) {
  const instance = genericElement("input");
  const checkbox = instance(parent);

  checkbox.type = "checkbox";
  checkbox.style.marginRight = "8px";
  checkbox.style.verticalAlign = "middle";
  return checkbox;
}

export function Radio(parent: Parent) {
  const instance = genericElement("input");
  const radio = instance(parent);

  radio.type = "radio";
  radio.style.marginRight = "8px";
  radio.style.verticalAlign = "middle";
  return radio;
}

export function Select(parent: Parent) {
  const instance = genericElement("select");
  const select = instance(parent);
  select.style.padding = "12px 24px";
  select.style.borderRadius = "4px";
  select.style.border = "1px solid #ccc";
  select.style.fontSize = "1rem";
  select.style.marginBottom = "32px";
  select.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.2)";
  return select;
}

export function Textarea(parent: Parent) {
  const instance = genericElement("textarea");
  const textarea = instance(parent);

  textarea.style.padding = "12px 24px";
  textarea.style.borderRadius = "4px";
  textarea.style.border = "1px solid #ccc";
  textarea.style.fontSize = "1rem";
  textarea.style.marginBottom = "32px";
  textarea.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.2)";
  return textarea;
}

export function Navigation(parent: Parent) {
  const instance = genericElement("nav");
  const navigation = instance(parent);

  navigation.style.display = "flex";
  navigation.style.justifyContent = "space-between";
  navigation.style.alignItems = "center";
  navigation.style.padding = "16px";
  navigation.style.backgroundColor = "#f8f8f8";
  navigation.style.borderBottom = "1px solid #ccc";
  return navigation;
}

export function Footer(parent: Parent) {
  const instance = genericElement("footer");
  const footer = instance(parent);

  footer.style.display = "flex";
  footer.style.justifyContent = "center";
  footer.style.alignItems = "center";
  footer.style.padding = "16px";
  footer.style.backgroundColor = "#f8f8f8";
  footer.style.borderTop = "1px solid #ccc";
  return footer;
}

export function Header(parent: Parent) {
  const instance = genericElement("header");
  const header = instance(parent);

  header.style.display = "flex";
  header.style.justifyContent = "space-between";
  header.style.alignItems = "center";
  header.style.padding = "16px";
  header.style.backgroundColor = "#f8f8f8";
  header.style.borderBottom = "1px solid #ccc";
  return header;
}

export function Main(parent: Parent) {
  const instance = genericElement("main");
  const main = instance(parent);

  main.style.display = "flex";
  main.style.flexDirection = "column";
  main.style.alignItems = "center";
  main.style.padding = "16px";
  main.style.backgroundColor = "#f8f8f8";
  main.style.borderTop = "1px solid #ccc";
  return main;
}

export function Sidebar(parent: Parent) {
  const instance = genericElement("aside");
  const sidebar = instance(parent);

  sidebar.style.display = "flex";
  sidebar.style.flexDirection = "column";
  sidebar.style.alignItems = "center";
  sidebar.style.padding = "16px";
  sidebar.style.backgroundColor = "#f8f8f8";
  sidebar.style.borderRight = "1px solid #ccc";
  return sidebar;
}

export function Content(parent: Parent) {
  const instance = genericElement("section");
  const content = instance(parent);

  content.style.display = "flex";
  content.style.flexDirection = "column";
  content.style.alignItems = "center";
  content.style.padding = "16px";
  content.style.backgroundColor = "#f8f8f8";
  content.style.borderTop = "1px solid #ccc";
  return content;
}
