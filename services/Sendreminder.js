const Bill = require('../models/Bill_model');
const User = require('../models/user_model');
const sendEmail = require('../utils/sendEmail');

async function sendReminderEmails() {
  try {
    const today = new Date();
    const in7Days = new Date();
    in7Days.setDate(today.getDate() + 7);

    const startOfToday = new Date();
    startOfToday.setHours(0, 8, 0, 0); // 8h

    // Trouver toutes les factures "pending", dues dans <= 7 jours, sans rappel aujourd'hui
    const bills = await Bill.find({
      status: 'pending',
      dueDate: { $lte: in7Days },
      $or: [
        { lastReminderSent: { $lt: startOfToday } },
        { lastReminderSent: { $exists: false } }
      ]
    }).populate('userId'); // Pour récupérer l'email de l’utilisateur

    if (bills.length === 0) {
      console.log("📭 Aucun rappel à envoyer aujourd’hui.");
      return;
    }

    for (const bill of bills) {
      const user = bill.userId;
      const formattedDate = bill.dueDate.toLocaleDateString();

      const message = `
        Bonjour,

        Ceci est un rappel concernant votre facture de ${bill.amount}€,
        qui est due le ${formattedDate}.

        Merci de régler votre facture dans les temps.
      `;

      await sendEmail({
        to: user.email,
        subject: "🔔 Rappel : Facture en attente",
        text: message
      });

      bill.lastReminderSent = new Date();
      await bill.save();

      console.log(`📧 Rappel envoyé à ${user.email} pour la facture ID: ${bill._id}`);
    }
  } catch (error) {
    console.error("❌ Erreur lors de l'envoi des rappels :", error.message);
  }
}

module.exports = sendReminderEmails;
