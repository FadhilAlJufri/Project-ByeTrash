/* eslint-disable no-undef */
Feature('Input Form Tukar Sampah');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Input Form Tukar Sampah', ({ I }) => {
  I.amOnPage('/');
  I.wait(5);

  I.seeElement('#exchange');
  I.click('#exchange');
  I.wait(5);

  I.seeElement('#btn-tukar');
  I.click('#btn-tukar');

  I.fillField('#nama', 'Dicoding');
  I.fillField('#alamat', 'Bandung');
  I.fillField('#namabank', 'BRI');
  I.fillField('#norekening', '0403907286******');
  I.fillField('#email', 'dicoding@academy.org');
  I.fillField('#notelpon', '0898266*****');

  I.seeElement('#checkbox');
  I.click('#checkbox');

  I.seeElement('#next');
  I.click('#next');

  I.selectOption('#jenissampah', 'Kaleng');
  I.click('#jenissampah');
  I.fillField('#jumlah', '10');
  I.click('#jumlah');

  I.seeElement('#completed');
  I.click('#completed');

  I.seeElement('#btnOk');
  I.click('#btnOk');
});
