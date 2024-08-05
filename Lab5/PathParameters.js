export default function PathParameters(app) {
  app.get("/lab5/add/:a/:b", (req, res) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    const sum = a + b;
    res.send(sum.toString());
  });
  app.get("/lab5/subtract/:a/:b", (req, res) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    const sum = a - b;
    res.send(sum.toString());
  });
  app.get("/lab5/multiply/:a/:b", (req, res) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    const sum = a * b;
    res.send(sum.toString());
  });
  app.get("/lab5/divide/:a/:b", (req, res) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    const sum = a / b;
    res.send(sum.toString());
  });
}
