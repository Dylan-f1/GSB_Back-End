require('dotenv').config();  // charge les variables d'env si tu utilises dotenv
const sendEmail = require('./utils/sendEmail');

async function test() {
  await sendEmail({
    to: 'tonadressepersonnelle@example.com',  // mets ici TON email pour recevoir le test
    subject: 'Test d’envoi de mail',
    text: 'Ceci est un test pour vérifier que l’envoi de mail fonctionne.'
  });
  console.log('Test d’envoi mail terminé.');
}

test();
