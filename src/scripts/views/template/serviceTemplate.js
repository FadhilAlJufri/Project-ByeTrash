const seviceTemplate = () => `
<div class="service-container">

  <section class="steps bg-green">
    <div class="container-custom">
      <div class="row ms-2 me-2">
        <div
          class="col-12 col-sm-6 d-md-flex justify-content-md-center order-sm-1"
        >
          <img
            src="https://github.com/Ardanu001/ByeTrash/blob/main/src/public/pict/tukarkan-sampah.png?raw=true"
            alt="Logo ByeTrash"
            class="img-fluid pb-2 steps__section-thumbnail"
            width="300"
            height="300"
            loading="lazy"
          />
        </div>
        <div class="col-12 col-sm-6">
          <div class="steps__content-width">
            <h1 class="h2 mb-4 fw-bold">Tukarkan Sampah di Byetrash</h1>
            <p>
              Dengan menukarkan sampah , kamu ikut serta dalam upaya membangun
              masa depan yang lebih bersih, berkelanjutan, dan lebih baik bagi
              generasi mendatang. Dengan setiap sampah yang kamu tukarkan, kamu
              memberikan kontribusi nyata dalam menjaga lingkungan hidup kita dari
              polusi dan dampak negatifnya.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>


  <div class="cara-tukar">
    <h2 class="fw-bold">Panduan Tukar Sampah</h2>
    <div class="langkah-langkah">
      <div class="langkah">
        <h3>1. Kumpulkan Sampah</h3>
        <p>
          Silahkan kumpulkan sampah yang mengotori lingkungan kalian
        </p>
      </div>
      <div class="langkah">
        <h3>2. Pilah Sampah</h3>
        <p>
          Pilah sampah berdasarkan kategori sampah seperti plastik, kertas,
          gelas, dan sebagainya.
        </p>
      </div>
      <div class="langkah">
        <h3>3. Timbang Sampah</h3>
        <p>
          Setelah memilah sampah berdasarkan kategori, timbang sampah
          tersebut
        </p>
      </div>
      <div class="langkah">
        <h3>4. Isi Form Tukar Sampah</h3>
        <p>
          Klik tombol Tukar Sampah di bawah langkah-langkah ini dan Isi Form
          yang tersedia.
        </p>
      </div>
      <div class="langkah">
        <h3>5. Tunggu Penjemputan</h3>
        <p>
          Tunggu tim kami mengambil sampah yang sudah kamu kumpulkan dan
          timbang.
        </p>
      </div>
      <div class="langkah">
        <h3>6. Terima Pembayaran</h3>
        <p>
          Setelah sampah diterima dan sesuai, terima pembayaran lewat TF
          Bank.
        </p>
      </div>
    </div>
  </div>

  <div class="tombol-tukar">
    <button id="btn-tukar">Tukarkan Sampah</button>
  </div>
</div>
`;

export default seviceTemplate;
