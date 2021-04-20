class Server extends Pc{
    constructor(name,kolader,cp,typecp,videocarta,ozu,razmer,productivity,key){
        super(name,kolader,cp,typecp,videocarta,ozu,key)
        this._razmer = razmer;
        this._productivity = productivity;
    }
    set razmer(razmer){
        this._razmer = razmer;
    }
    set productivity(productivity){
        this._productivity = productivity;
    }
    get getrazmer(){
        return this._razmer;
    }
    get getproductivity(){
        return this._productivity;
    }
}