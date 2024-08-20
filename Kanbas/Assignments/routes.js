import db from "../Database/index.js";

export default function AssignmentRoutes(app) {
  app.put("/api/assignments/:aid", (req, res) => {
    const { aid } = req.params;
    const updatedAssignment = req.body;
    db.assignments = db.assignments.map((a) =>
      a._id === aid ? { ...a, ...updatedAssignment } : a
    );
    res.sendStatus(204);
  });

  app.delete("/api/assignments/:aid", (req, res) => {
    const { aid } = req.params;
    db.assignments = db.assignments.filter((a) => a._id !== aid);
    res.sendStatus(200);
  });

  app.post("/api/courses/:cid/assignments", (req, res) => {
    const { cid } = req.params;
    const assignment = {
      ...req.body,
      _id: new Date().getTime().toString(),
      course: cid,
    };
    db.assignments.push(assignment);
    res.send(assignment);
  });

  app.get("/api/courses/:cid/assignments", (req, res) => {
    const { cid } = req.params;
    const assignments = db.assignments.filter((a) => a.course === cid);
    res.send(assignments);
  });
}
