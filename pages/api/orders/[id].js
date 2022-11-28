import dbConnect  from "../../../utli/mongo";
import Product from "../../../models/Order";
import Order from "../../../models/Order";

const handler = async (req, res)  => {
    const {method, query:{id}} = req

    await dbConnect()

    if(method === "GET" && id) {
        try {
            const order = await Order.findById(id)
            res.status(200).json(order)
        } catch (error) {
           res.status(500).json(error)
        }
    }

    if(method === "PUT") {
        try {
            const order = await Order.findByIdAndUpdate(id, req.body, {
             new: true, //returns the newset version
            })
            res.status(201).json(order)
         } catch (err) {
            res.status(500).json(err.response.data);
         }   
    }

    if(method === "DELETE") {
        
    }
}

export default handler;