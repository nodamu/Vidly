const {
    Customer,
    validate
} = require('../models/customer');
const {
    registerCustomer,
    updateCustomer,
    deleteCustomer
} = require('../services/customer/customer.service');


exports.getCustomerList = async (req, res) => {
    const customers = await Customer.find().sort('name');
    res.send(customers);
}

exports.createCustomer = async (req, res) => {
    const {
        error
    } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    customer = await registerCustomer(req.body);
    res.send(customer);
}

exports.updateCustomer = async (req, res) => {
    const {
        error
    } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const customer = await updateCustomer(req.params.id, req.body);

    if (!customer) return res.status(404).send('The customer with the given ID was not found.');

    res.send(customer);
}


exports.deleteCustomer = async (req, res) => {
    if (!customer) return res.status(404).send('The customer with the given ID was not found.');
    customer = await deleteCustomer(req.params.id);
    res.send(customer);
}

exports.getCustomerById = async (req, res) => {
    const customer = await Customer.findById(req.params.id);

    if (!customer) return res.status(404).send('The customer with the given ID was not found.');

    res.send(customer);
}