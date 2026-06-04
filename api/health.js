export default function handler(req, res) {
  res.status(200).json({ ok: true, app: "CheetahWheels", version: "1.0.0" });
}
