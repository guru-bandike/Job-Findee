// Define Home controller and Export as default
export default class HomeController {
  // Method to handle GET request for the home view
  static getHomeView(req, res) {
    res.status(200).render('home');
  }
}
