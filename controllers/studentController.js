const HomePage = (req, res) => {
    res.render("home");
};
const AboutPage = (req, res) => {
    res.render("about");
};
const ServicesPage = (req, res) => {
    res.render("service");
};
const CoursePage = (req, res) => {
    res.render("course");
};
const FeesPage = (req, res) => {
    res.render("fees");
};
const ContactPage = (req, res) => {
    res.render("contact");  
};


module.exports = { HomePage, AboutPage, ServicesPage, CoursePage, FeesPage, ContactPage };