class Company{
    constructor(id, name){
        this.id = id
        this.name = name
    }
}

class Girlgroup{
    constructor(id, name, member, debutSong, CompanyId, CompanyName){
        this.id = id
        this.name = name
        this.member = member
        this.debutSong = debutSong
        this.CompanyId = CompanyId
        this.CompanyName = CompanyName
    }
}

module.exports= { Company, Girlgroup }