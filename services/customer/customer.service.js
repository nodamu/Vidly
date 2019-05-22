const {Customer} = require('../../models/customer');

const registerCustomer = async (user) => {
    let customer = new Customer({
        name: user.name,
        isGold: user.isGold,
        phone: user.phone
    });

    customer = await customer.save();

    return customer;
}

const updateCustomer = async (id,user) => {
    const customer = await Customer.findByIdAndUpdate(id, {
        name: user.name,
        isGold: user.isGold,
        phone: user.phone
    }, {
        new: true
    });

    return customer;
}

const deleteCustomer = async (id) => {
    const customer = await Customer.findByIdAndRemove(req.params.id);
    return customer;
}


module.exports = {
    registerCustomer,
    updateCustomer,
    deleteCustomer
}