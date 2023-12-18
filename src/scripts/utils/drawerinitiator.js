const DrawerInitiator = {
  init({ content, button }) {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      button.setAttribute('data-bs-toggle', 'collapse');
      button.setAttribute('data-bs-target', '#navbarNav');
    });

    content.addEventListener('click', (event) => {
      event.stopPropagation();
      button.setAttribute('data-bs-toggle', '');
      button.setAttribute('data-bs-target', '');
    });
  },
};

export default DrawerInitiator;
