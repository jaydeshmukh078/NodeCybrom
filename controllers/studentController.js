const HomePage = (req, res) => {
    res.send("Welcome to the Home Page");
};
const AboutPage = (req, res) => {
    res.send("Welcome to the About Page");
};
const ServicesPage = (req, res) => {
    res.send("Welcome to the Services Page");
};
const CoursePage = (req, res) => {
    res.send("Welcome to the Course Page");
};
const FeesPage = (req, res) => {
    res.send("Welcome to the Fees Page");
};
const ContactPage = (req, res) => {
    res.send("Welcome to the Contact Page");
};


module.exports = { HomePage, AboutPage, ServicesPage, CoursePage, FeesPage, ContactPage };