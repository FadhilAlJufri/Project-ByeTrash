const aboutTemplate = () => `
  <div class="about-container">
    <section class="steps bg-green">
      <div class="container-custom">
        <div class="row ms-2 me-2">
          <div
            class="col-12 col-sm-6 d-md-flex justify-content-md-center order-sm-1"
          >
            <img
              src="https://github.com/Ardanu001/ByeTrash/blob/main/src/public/logo/logo-2.png?raw=true"
              alt="Logo ByeTrash"
              class="img-fluid pb-2 steps__section-thumbnail"
              width="300"
              height="300"
              loading="lazy"
            />
          </div>
          <div class="col-12 col-sm-6">
            <div class="steps__content-width">
              <h1 class="h2 mb-4 fw-bold">Tentang ByeTrash</h1>
              <p>
                Byetrash adalah website yang memfasilitasi masyarakat untuk
                mengelola sampah supaya bisa mengurangi polusi. Di website ini
                masyarakat bisa menukarkan sampah yang mereka miliki menjadi uang
                tunai berdasarkan jenis sampah yang ditukarkan. Dengan adanya
                website ini diharapkan masyarakat semakin sadar akan lingkungan dan
                tidak membuang sampah sembarangan karena mereka bisa menukarkannya
                menjadi uang tunai.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="about mt-4">
      <h2
        style="
          text-align: center;
          border-bottom: 2px solid green;
          width: 180px;
          margin: 0 auto;
        " class="fw-bold"
      >
        Our Team
      </h2>

      <div class="team-section" id="team">
        <div class="team-card">
          <img
          src="https://github.com/Ardanu001/ByeTrash/blob/main/src/public/pict/profile1.jpg?raw=true"
          class="img-fluid"
          alt="Team Member 1" 
          />
          <h3>Dea Ayuninda</h3>
          <p>STMIK Amika Soppeng</p>
        </div>

        <div class="team-card">
          <img
          src="https://github.com/Ardanu001/ByeTrash/blob/main/src/public/pict/profile3.jpeg?raw=true"
          class="img-fluid"
          alt="Team Member 2" 
          />
          <h3>Ardanu</h3>
          <p>Univ. Handayani Makassar</p>
        </div>

        <div class="team-card">
          <img
          src="https://github.com/Ardanu001/ByeTrash/blob/main/src/public/pict/profile-alip.jpg?raw=true"
          class="img-fluid"
          alt="Team Member 3" 
          />
          <h3>Mochamad Alif Prayogo</h3>
          <p>Univ. Amikom Purwokerto</p>
        </div>

        <div class="team-card">
          <img
          src="https://github.com/Ardanu001/ByeTrash/blob/main/src/public/pict/profile4.jpg?raw=true"
          class="img-fluid"
          alt="Team Member 4" 
          />
          <h3>Ahmad Fadhil Kurniahadi Al Jufri</h3>
          <p>STMIK IM Bandung</p>
        </div>
      </div>
    </div>
  </div>
  `;

export default aboutTemplate;
