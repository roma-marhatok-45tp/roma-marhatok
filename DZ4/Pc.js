class Pc{
    constructor(name,kolader,cp,typecp,videocarta,ozu){
        this._name = name;
        this._kolader = kolader;
        this._cp = cp;
        this._typecp = typecp;
        this._videocarta = videocarta;
        this._ozu = ozu;
    }
    set key(key){
        this._key = key;
    }
    set name(name){
        this._name = name;
    }
    set kolader(kolader)
    {
        this._kolader = kolader;
    }
    set cp(cp)
    {
        this._cp =cp;
    }
    set typecp(typecp){
        this._typecp = typecp;
    }
    set videocarta(videocarta){
        this._videocarta = videocarta;
    }
    set ozu(ozu){
        this._ozu = ozu;
    }
    get getkey(){
        return this._key;
    }
    get getname(){
        return this._name;
    }
    get getkolader(){
        return this._kolader;
    }
    get getcp(){
        return this._cp;
    }
    get gettypecp(){
        return this._typecp;
    }
    get getvideocarta(){
        return this._videocarta;
    }
    get getozu(){
        return this._ozu;
    }
    
}
