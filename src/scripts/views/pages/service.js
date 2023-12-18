/* eslint-disable no-constant-condition */
/* eslint-disable no-cond-assign */
/* eslint-disable consistent-return */
/* eslint-disable space-before-blocks */
/* eslint-disable valid-typeof */
/* eslint-disable no-alert */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable radix */
/* eslint-disable eqeqeq */
/* eslint-disable no-shadow */
import seviceTemplate from '../template/serviceTemplate';

const serviceWebsite = {
  async render() {
    return `
             <section id="/servicepage" class="servicepage"></section>
             <div class="tukarPage">
        <form method="post" action="addData()" id="FormTukarSampah">
        <div class="tukarPage__form_1" id="hiddenForm">
            <div class="tukarPage__title">
                <h1>Tukar Sampah</h1>
                <p>Isilah Data Anda Disini</p>
            </div>
                    <div class="tukarPage__form-input">
                        <label>Nama Anda</label>
                        <input type="text" id="nama" autocomplete="off" required/>
                    </div>
                    <div class="tukarPage__form-input">
                        <label>Alamat</label>
                        <input type="text" id="alamat" autocomplete="off" required/>
                    </div>
                    <div class="tukarPage__form-input">
                        <label>Nama Bank</label>
                        <input type="text" id="namabank" autocomplete="off" required/>
                    </div>
                    <div class="tukarPage__form-input">
                        <label>Nomor Rekening</label>
                        <input type="text" id="norekening" autocomplete="off" required/>
                    </div>
                    <div class="tukarPage__form-input">
                        <label>E-mail</label>
                        <input type="email" id="email" autocomplete="off" required/>
                    </div>
                    <div class="tukarPage__form-input">
                        <label>Nomor Telpon</label>
                        <input type="text" id="notelpon" required/>
                    </div>
                    <div class="tukarPage__check">
                        <input type="checkbox" id="checkbox"/>
                        <p id="labelData">Data Anda Sudah Benar ?</p>
                    </div>
                    <div class="tukarPage__button">
                        <button id="next" type="submit" disabled>Berikutnya</button>
                    </div>
            </div>
            <div class="tukarPage__form_2" id="hiddenForm">
                <div class="tukarPage__title">
                    <h1>Tukar Sampah</h1>
                    <p>Uangkan Sampahmu Disini</p>
                </div>
                    <div class="tukarPage__form-input">
                    <label>Jenis Sampah</label>
                        <select id="jenissampah">
                            <option value="Plastik">Plastik</option>
                            <option value="Kaca">Kaca</option>
                            <option value="Kertas">Kertas</option>
                            <option value="Kaleng">Kaleng</option>
                            <option value="Elektronik">Elektronik</option>
                            <option value="Organik (Kompos)">Organik (Kompos)</option>
                        </select>
                    </div>
                    <div class="tukarPage__form-input">
                        <label>Jumlah /Kg</label>
                        <input type="number" id="jumlah" autocomplete="off"/>
                    </div>
                    <div class="tukarPage__form-input">
                        <label>Harga /kg</label>
                        <input type="number" id="harga" autocomplete="off" disabled/>
                    </div>
                    <div class="tukarPage__form-input">
                        <label>Total Harga</label>
                        <input type="text" autocomplete="off" id="total" disabled/>
                    </div>
                    <div class="tukarPage__button">
                        <button id="completed" type="submit">Konfirmasi</button>
                    </div>
            </div>
        </form>
        <div class="confirm" id="hiddenForm">
        <div class="img-check">
            <img class="logo-success" src="https://github.com/Ardanu001/ByeTrash/blob/main/src/public/pict/checklist-icon.png?raw=true">
            <div class="caption">
                <p id="user"></p>
                <p id="trashCat"></p>
                <p id="prize"></p>
            </div>
            <button id="btnOk">Done</button>
        </div>
    </div>
    </div>
         `;
  },

  async afterRender() {
    const homeContainer = document.querySelector('.servicepage');
    homeContainer.innerHTML = seviceTemplate();
    const button = document.getElementById('btn-tukar');
    const formBiodataContainer = document.querySelector('.tukarPage__form_1');
    const form = document.getElementById('FormTukarSampah');
    button.addEventListener('click', (event) => {
      event.preventDefault();
      formBiodataContainer.removeAttribute('id');
      form.reset();
      button.disabled = true;

      const samapahFormContainer = document.querySelector('.tukarPage__form_2');
      const check = document.getElementById('checkbox');
      const next = document.getElementById('next');

      check.onclick = () => {
        if (check.checked = false){
          next.setAttribute('disabled');
        } else {
          if (check.checked = true) {
            next.removeAttribute('disabled');
            next.addEventListener('click', (event) => {
              event.preventDefault();
              formBiodataContainer.setAttribute('id', 'hiddenForm');
              samapahFormContainer.removeAttribute('id');
            });
          } 
        } 

        const nama = document.getElementById('nama').value;
        const alamat = document.getElementById('alamat').value;
        const namaBank = document.getElementById('namabank').value;
        const noRekening = document.getElementById('norekening').value;
        const email = document.getElementById('email').value;
        const notelpon = document.getElementById('notelpon').value;

        if (nama == '' || alamat == '' || namaBank == '' || noRekening == '' || notelpon == '' || email == ''){
          alert('Mohon Isi Data Dengan Benar');
          const check = document.getElementById('checkbox');
          check.checked = false;
          button.disabled = true;
        }
      };
      
      const jenis = document.getElementById('jenissampah');
      jenis.addEventListener('click', (event) => {
        event.preventDefault();
        if (jenis.value == 'Plastik') {
          document.querySelector('#harga').value = 2000;
        }

        if (jenis.value == 'Kaca') {
          document.querySelector('#harga').value = 5000;
        }

        if (jenis.value == 'Kertas') {
          document.querySelector('#harga').value = 1000;
        }

        if (jenis.value == 'Kaleng') {
          document.querySelector('#harga').value = 6000;
        }

        if (jenis.value == 'Elektronik') {
          document.querySelector('#harga').value = 15000;
        }

        if (jenis.value == 'Organik (Kompos)') {
          document.querySelector('#harga').value = 10000;
        }

        const jumlah = document.querySelector('#jumlah');
        jumlah.addEventListener('change', (e) => {
          e.preventDefault();
          const harga = parseInt(document.querySelector('#harga').value);
          const total = document.querySelector('#total');
          const op = harga * jumlah.value;
          total.value = op;
        });

        const trashData = [];
        const RENDER_EVENT = 'render';
        const STORAGE_KEY = 'BYETRASH_APP';
        const SAVED_EVENT = 'saved';

        function generateDataObject(id, nama, alamat, namaBank, nomorRekening, email, noTelpon, jenisSampah, jumlahSampah, hargaSampah, totalHarga) {
          return {
            id, nama, alamat, namaBank, nomorRekening, email, noTelpon, jenisSampah, jumlahSampah, hargaSampah, totalHarga
          };
        }

        function genID() {
          return +new Date();
        }

        function isStorageExist() {
          if (typeof (Storage) === undefined) {
            alert('Browser kamu tidak mendukung local storage');
            return false;
          }
          return true;
        }

        document.addEventListener(SAVED_EVENT, () => {
          console.log(localStorage.getItem(STORAGE_KEY));
        });

        function saveData() {
          if (isStorageExist()) {
            const parsed = JSON.stringify(trashData);
            localStorage.setItem(STORAGE_KEY, parsed);
            document.dispatchEvent(new Event(SAVED_EVENT));
          }
        }

        function addData() {
          const id = genID();
          const nama = document.getElementById('nama').value;
          const alamat = document.getElementById('alamat').value;
          const namaBank = document.getElementById('namabank').value;
          const noRekening = document.getElementById('norekening').value;
          const email = document.getElementById('email').value;
          const notelpon = document.getElementById('notelpon').value;
          const jenis = document.getElementById('jenissampah').value;
          const jumlah = document.getElementById('jumlah').value;
          const harga = document.getElementById('harga').value;
          const total = parseInt(document.getElementById('total').value);

          const dataTarget = generateDataObject(id, nama, alamat, namaBank, noRekening, email, notelpon, jenis, jumlah, harga, total);
          trashData.push(dataTarget);

          document.dispatchEvent(new Event(RENDER_EVENT));
          saveData();
        }

        document.addEventListener('DOMContentLoaded', () => {
          const form = document.getElementById('FormTukarSampah');
          form.addEventListener('submit', (e) => {
            const button = document.getElementById('btn-tukar');
            button.setAttribute('disabled');
            e.preventDefault();
            addData();
            form.reset();
          });
        });

        const sampahFormContainer = document.querySelector('.tukarPage__form_2');
        const successContainer = document.querySelector('.confirm');
        const buttonConfirm = document.getElementById('completed');
        buttonConfirm.addEventListener('click', (e) => {
          e.preventDefault();
          sampahFormContainer.setAttribute('id', 'hiddenForm');
          successContainer.removeAttribute('id');

          const user = document.getElementById('nama').value;
          const trash = document.getElementById('jenissampah').value;
          const prize = document.getElementById('total').value;
          const jumlah = document.getElementById('jumlah').value;
          const harga = document.getElementById('harga').value;
          const userContainer = document.getElementById('user');
          const trashContainer = document.getElementById('trashCat');
          const prizeContainer = document.getElementById('prize');

          userContainer.textContent = `Selamat ${user}`;
          trashContainer.textContent = `Sampah ${trash} Anda Berhasil Terjual`;
          prizeContainer.textContent = `Dengan Harga Rp.${prize}`;

          const form = document.getElementById('FormTukarSampah');
          const buttonOK = document.getElementById('btnOk');

          if (trash == '' || prize == '' || jumlah == '' || harga == '' || prize == 0){
            const buttonConfirm = document.getElementById('completed');
            buttonConfirm.disabled = true;
          }

          const buttonTukar = document.getElementById('btn-tukar');
          buttonOK.addEventListener('click', (e) => {
            e.preventDefault();
            successContainer.setAttribute('id', 'hiddenForm');
            buttonTukar.disabled = false;
            form.reset();
          });
        });
      });
    });
  },
};

export default serviceWebsite;
