const Elemento = require("../models/musica-libros")
const mongoose = require("mongoose")

exports.postAgregarElemento = async (req,res)=>{
    if(req.body.tipo_elemento == 'Libro'){
        if(req.body.editorial == undefined){
            console.log("Type editorial cannot be undefined")
            res.json({error: "InvalidBodyException: Field must be given"}) //422
            return
        }
    }

    if(req.body.tipo_elemento == 'Cancion'){
        if(req.body.casa_productora == undefined){
            console.log("Type casa_productora cannot be undefined")
            res.json({error: "InvalidBodyException: Field must be given"}) //422
            return
        }
    }

    const elemento = new Elemento(req.body)
    elemento._id = new mongoose.Types.ObjectId()
    try{
        //Agregar el documento a la colección
        await elemento.save()
        console.log(elemento)
        console.log("Elemento registrado")
        res.json({operacion:"correcta"})
    }catch(err){
        console.log(err)
        res.json({operacion: "incorrecta"})
    }
}

exports.getObtenerElemento=async (req,res)=>{
    const elem = await Elemento.find(req.body).exec()
    if(elem.length == 0){
        console.log("There are no elements")
        res.json({error: "InvalidBodyException: There are no Elemnts"}) //404
        return
    }
    console.log(elem)
    res.json(elem)
}

exports.postActualizarElemento = async(req,res)=>{
    //Filtro y cambio
    const elem = await Elemento.find(req.body.filtro).exec()
    if(elem.length == 0){
        console.log("The element does not exist")
        res.json({error: "InvalidBodyException: There are no Elemnts"}) //404
        return
    }
    try{
        await Elemento.findOneAndUpdate(req.body.filtro,req.body.cambio)
        console.log("Cambio realizado")
        res.json({operacion: "correcta"})
    }catch(err){
        console.log(err)
        res.json({operacion: "Error"})
    }
}

exports.postBorrarElemento = async (req,res)=>{
    const elem = await Elemento.findById(req.body).exec()
    if(elem.length == 0){
        console.log("The element does not exist")
        res.json({error: "InvalidBodyException: There are no Elemnts"}) //404
        return
    }
    await Elemento.findByIdAndRemove(req.body)
    console.log("Elemento eliminado")
    res.json({operacion: "correcta"})
}