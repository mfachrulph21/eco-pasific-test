const { ObjectId } = require('mongodb');
const { getDB } = require('../config/config-mongo');

class Customer {

    static async findAllCustomer(name, gender, addr) {
        try {
            const db = getDB();
            const customer = db.collection('customers');

            let sortOption = {}

            if(name) {
                sortOption.firstName = 1
                sortOption.lastName = 1
            } 

            if(gender) {
                sortOption.gender = 1
            }

            if(addr) {
                sortOption.addr = -1
            }

            const data = await customer.find().sort(sortOption).toArray()

            return data

        } catch (error) {
            throw error
        }
    }

    static async findOneCustomer(id) {
        try {
            const db = getDB()
            
            const customer = db.collection('customers')

            const data = await customer.findOne({
                _id: ObjectId(id) 
            })

            return data


        } catch (error) {
            throw error
        }
    }

    static async updateCustomerData(id, email, addr) {
        try {
            const db = getDB();
            const customer = db.collection('customers');

            const data = await customer.updateOne({
                _id: id
            },{
                $set: {
                    addr,
                    email
                }
            })

            return data
            
        } catch (error) {
            throw error
        }
    }

}

module.exports = Customer;