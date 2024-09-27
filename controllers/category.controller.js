const category_data = require("../models/category.model")

/**
 * Controller for creating the category
 * 
 * POST localhost:8080/ecomm/api/v1/categories
 * 
 *  {
 *    "name" : "Household",
 *    "description" : "This will have all the household items"
 *  }
 */

exports.createNewCategory = async (req, res)=>{

    // Read the req body 

    // Create the category object 
    const cat_data = {
        name : req.body.name,
        description : req.body.description
    }
    // Insert into mongodb
    try{
        const category = await category_data.create(cat_data)
        return res.status(201).send(category)
    }catch(err){
        console.log("Error while creating the category", err)
        return res.status(400).send({
            message : "Error while creating the category"
        })
    }

    
    // return the response of the created category 
}






