// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const {
    query: { id },
  } = req;
  console.log(req)
  res.status(200).json({ userId: id });
}
