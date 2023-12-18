import aboutTemplate from '../template/aboutTemplate';

const aboutWebsite = {
  async render() {
    return `
             <section id="aboutpage"></section>
         `;
  },

  async afterRender() {
    const homeContainer = document.querySelector('#aboutpage');
    homeContainer.innerHTML = aboutTemplate();
  },
};

export default aboutWebsite;
