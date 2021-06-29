const createElement = (type, attributes) => {
  const element = document.createElement(type);

  for (const key in attributes) {
    const value = attributes[key];

    if (key === 'innerText') element.innerText = value;
    else element.setAttribute(key, value);
  }

  return element;
};
