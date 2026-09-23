export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, company, message, website } = req.body || {};

    if (website) {
      return res.status(200).json({ success: true });
    }

    if (!name || name.trim().length < 2) {
      return res.status(400).json({ error: 'Nom invalide' });
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: 'Email invalide' });
    }
    if (!message || message.trim().length < 10) {
      return res.status(400).json({ error: 'Message trop court' });
    }

    console.log('Nouveau contact:', { name, email, company, message: message.slice(0, 100) });

    return res.status(200).json({ success: true, message: 'Message envoyé avec succès' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erreur serveur' });
  }
}
