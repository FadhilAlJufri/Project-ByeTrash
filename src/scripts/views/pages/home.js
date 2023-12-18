import homeTemplate from '../template/homeTemplate';

const homeWebsite = {
  async render() {
    return `
            <section id="homepage"></section>
        `;
  },

  async afterRender() {
    const homeContainer = document.querySelector('#homepage');
    homeContainer.innerHTML = homeTemplate();
  },
};

export default homeWebsite;
