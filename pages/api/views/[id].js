import db, { increment } from '@/lib/firestore';

export default async (req, res) => {
  if (req.method === 'POST') {
    try {
      const ref = db.collection('views').doc(req.query.id);
      await ref.set({ views: increment }, { merge: true });
      return res.status(200).end('Updated view count');
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error.message);
      return res.status(500).end('Internal Server Error');
    }
  }

  if (req.method === 'GET') {
    try {
      const ref = db.collection('views').doc(req.query.id);
      const doc = await ref.get();
      if (!doc.exists) {
        return res.status(404).end(`Document ${req.query.id} not found`);
      }
      return res.status(200).json({ total: doc.data().views });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error.message);
      return res.status(500).end('Internal Server Error');
    }
  }

  res.setHeader('Allow', ['GET', 'POST']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
};
