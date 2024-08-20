import Database from "../Database/index.js";
export default function CourseRoutes(app) {
  app.put("/api/courses/:id", (req, res) => {
    const { id } = req.params;
    const course = req.body;
    Database.courses = Database.courses.map((c) =>
      c._id === id ? { ...c, ...course } : c
    );
    res.sendStatus(204);
  });
  app.delete("/api/courses/:id", (req, res) => {
    const { id } = req.params;
    Database.courses = Database.courses.filter((c) => c._id !== id);
    res.sendStatus(204);
  });
  app.post("/api/courses", (req, res) => {
    const course = { ...req.body, _id: new Date().getTime().toString() };
    Database.courses.push(course);
    res.send(course);
  });
  app.get("/api/courses", (req, res) => {
    const courses = Database.courses;
    res.send(courses);
  });
  app.get("/api/enrollments", (req, res) => {
    const enrollments = Database.enrollments;
    res.send(enrollments);
  });
  app.get("/api/grades", (req, res) => {
    const grades = Database.grades;
    res.send(grades);
  });
  app.get("/api/modules", (req, res) => {
    const modules = Database.modules;
    res.send(modules);
  });
  app.get("/api/users", (req, res) => {
    const users = Database.users;
    res.send(users);
  });
}
