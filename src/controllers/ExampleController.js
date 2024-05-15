class ExampleController {
  async index(req, res) {
    return res.json({ hello: "world" });
  }
}
export default new ExampleController();
