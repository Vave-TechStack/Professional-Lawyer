export default function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ ok: false, message: "Method not allowed" });
  }

  return res.status(200).json({
    ok: true,
    message: "Contact form endpoint placeholder. Connect SMTP or Formspree here.",
    received: req.body ?? {}
  });
}
