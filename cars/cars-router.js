const express = require('express');
const knex = require('knex');

const db = require('../data/dbconnection');

const router = express.Router();

router.post('/',(req,res)=>{
    const car = req.body;
    if(isValidCar(car)){
        db('cars').insert(car,'id').then(ids=>{
            res.status(201).json({
                data: ids
            })
        }).catch(err=>{
            console.log(err);
            res.status(500).json({
                message: err.message
            })
        })
    } else {
        res.status(400).json({
            message: 'please provide VIN, Make, Model, Mileage'
        })
    }
})

router.get('/',(req,res)=>{
    db('cars').then(cars=>{
        res.status(200).json({
            data: cars
        })
    }).catch(err=>{
        console.log(err);
        res.status(500).json({
            message: err.message
        });
    })
})

function isValidCar(car){
    return Boolean(car.vin && car.make && car.model && car.mileage)
}

module.exports = router;