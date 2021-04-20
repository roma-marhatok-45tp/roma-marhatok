class Ligtbook extends Pc{
    constructor(name,kolader,cp,typecp,videocarta,ozu,weigh,battery,key){
        super(name,kolader,cp,typecp,videocarta,ozu,key)
        this._weigh = weigh;
        this._battery = battery;
    }
    set weigh(weigh){
        this._weigh = weigh;
    }
    set battery(battery){
        this._battery = battery;
    }
    get getweigh(){
        return this._weigh;
    }
    get getbattery(){
        return this._battery;
    }
}
