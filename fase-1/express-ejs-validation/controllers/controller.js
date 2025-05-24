const Model = require("../models/model")

class Controller{
    static async home(req, res) {
        try {
            res.render('home')
        } catch (error) {
            res.send(error)
        }
    }

    static async companies(req, res){
        try {
            let data = await Model.companies()
            res.render('companies', { data })
        } catch (error) {
            res.send(error)
        }
    }

    static async girlgroups(req, res){
        try {
            // mengambil data req.query
            const {search} = req.query

            let data = await Model.girlgroups(search)                        
            res.render('gg', {data})
        } catch (error) {
            res.send(error)
        }
    }

    static async girlgroupById(req, res){
        try {
            // request bentuknya obj
            // ! request params
            // diterima menggunakan req.params
            // key-nya adalah namaParams yg didaftarkan di path, valuenya adalah apa yg ditulis di browser ditempat param didaftarkan

            const {id} = req.params
            let data = await Model.girlgroupById(id)
            res.send(data)
        } catch (error) {
            res.send(error)
        }
    }

    static async getAdd(req, res){
        try {
            const {errors} = req.query
            let companies = await Model.companies()
            res.render("add", {companies, errors})
        } catch (error) {
            res.send(error)
        }
    }

    static async postAdd(req, res){
        try {
            // menerima data dari form dalam bentuk req.body
            // key = name inputannya, value = yg diinput di form
            const {
                name, member, debutSong, company
            } = req.body
            await Model.postAdd(name, member, debutSong, company)
            res.redirect('/girlgroups')
        } catch (error) {
            if(error.name === "ValidationError"){
                res.redirect(`/girlgroups/add?errors=${error.errors}`)
            }else{
                res.send(error)
            }
        }
    }

    static async getEdit(req, res){
        try {
            const {errors} = req.query
            const {id} = req.params
            // data untuk select option
            let companies = await Model.companies()
            // cari data yg mau diedit pastikan bentuknya obj
            let gg = await Model.girlgroupById(id)
            
            res.render('edit', {companies, gg, errors})
        } catch (error) {
            res.send(error)
        }
    }

    static async postEdit(req, res){
        try {
            const {
                name, member, debutSong, company
            } = req.body
            const {id} = req.params
            await Model.postEdit(name, member, debutSong, company, id)
            res.redirect('/girlgroups')
        } catch (error) {
            const {id} = req.params
            if(error.name === "ValidationError"){
                res.redirect(`/girlgroups/${id}/edit?errors=${error.errors}`)
            }else{
                res.send(error)
            }
        }
    }

    static async getDelete(req, res){
        try {
            const {id} = req.params
            await Model.getDelete(id)
            res.redirect('/girlgroups')
        } catch (error) {
            res.send(error)
        }
    }
}

module.exports = Controller