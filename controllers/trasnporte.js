const ctrl = {}
const {Transporte}= require('./models/transporte')
ctrl.get = async (req, res, next) => {
    try {
        const transporte = await Transporte.find()
        const data = {
            title:'Trasnporte',
            transporte
        }
        res.status(200).send(transporte)

    } catch (error) {
        next(error)
    }
}
ctrl.post = async (req, res, next) => {
    try {
        const data = req.body
        const newTransporte = new Transporte({
            name: data.name,
            tipo: data.tipo
        })
        await newTransporte.save()
        res.status(200).send(transporte)

    } catch (error) {
        next(error)
    }
}
ctrl.put = async (req, res, next) => {
    try {
        const transporte = await Transporte.findByIdAndUpdate(req.params.id)
        // const userUpdate = await User.findByIdAndUpdate(req.params.id,{
        //     isAdmin: await rest(user)
        // })
        await transporte.save()
        // await transporteUpdate.save()
        res.status(200).send(transporte)

    } catch (error) {
        next(error)
    }
}

ctrl.detele = async (req, res, next) => {
    try {
        const transporte = await Transporte.findByIdAndDelete(req.params.id)
        await transporte.save()
        res.status(200).send(transporte)

    } catch (error) {
        next(error)
    }
}
module.exports = ctrl