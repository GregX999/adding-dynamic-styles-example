export const createStyleTag = id => {
  const styleElement = document.createElement('style');
  styleElement.setAttribute('id', id);
  document.head.appendChild(styleElement);
};

export const insertStyle = (id, style) => {
  const styleElement = document.getElementById(id);
  const sheet = styleElement.sheet;
  sheet.insertRule(style, sheet.rules.length);
};

export const removeStyleTag = id => {
  const styleElement = document.getElementById(id);
  if (styleElement) {
    document.head.removeChild(styleElement);
  }
};
