const HomePage = (req, res) => {
    res.send("Welcome to the Employee Home Page");
};

const AboutPage = (req, res) => {
    res.send("Welcome to the Employee About Page");
};

const DesignationPage = (req, res) => {
    res.send("Welcome to the Employee Designation Page");
};

const DepartmentPage = (req, res) => {
    res.send("Welcome to the Employee Department Page");
};

const SalaryPage = (req, res) => {
    res.send("Welcome to the Employee Salary Page");
};


module.exports = { HomePage, AboutPage, DesignationPage, DepartmentPage, SalaryPage };