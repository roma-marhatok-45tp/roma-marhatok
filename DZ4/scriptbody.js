var create = document.getElementById("create")
var table = document.querySelector("table")
var select = document.getElementById("select")
var closemodal = document.querySelector("#closemodal")
var modal = document.querySelector('#modal')
var inppc = document.querySelectorAll("#pc")
var inplighbook = document.querySelectorAll("#lightbook")
var inpserver = document.querySelectorAll('#server')
create.addEventListener("click",function(){
	modal.classList.toggle("open")
	modal.classList.remove("close")
	
})

closemodal.addEventListener("click",function(){
	modal.classList.toggle("close")
	modal.classList.remove("open")
	valid()
})
function valid(){
	var kol =0 ;
	switch(select.value){
		case "pc":
		for(let i = 0;i<inppc.length;i++){		
			if(inppc[i].validity.valueMissing == true){
				console.log("PC")
			}
			else if(inppc[i].validity.valueMissing == false){
				kol++;
			}
		}
		if(kol == inppc.length){
			kol = 0;
			saveandvvod()
		}
		break;
        case "lighbook":
		for(let i = 0;i<inplighbook.length;i++){		
			if(inplighbook[i].validity.valueMissing == true){
				console.log("lighbook")
			}
			else if(inplighbook[i].validity.valueMissing == false){
				kol++;
			}
		}
		if(kol == inplighbook.length){
			kol = 0;
			saveandvvod()
		}
		break;
		case "Server":
		for(let i = 0;i<inpserver.length;i++){		
			if(inpserver[i].validity.valueMissing == true){
				console.log("server")
			}
			else if(inpserver[i].validity.valueMissing == false){
				kol++;
			}
		}
		if(kol == inpserver.length){
			kol = 0;
			saveandvvod()
		}
		break;
	}
	
}

select.addEventListener("change",function(){
    switch(select.value){
      	case "":
            document.querySelector('.formServer').style.display = 'none';
            document.querySelector('.formPC').style.display = 'none';
            document.querySelector('.formLightBook').style.display = 'none';    
            break;   
        
        case "pc":
            document.querySelector('.formPC').style.display = 'block';
            document.querySelector('.formServer').style.display = 'none';
            document.querySelector('.formLightBook').style.display = 'none';
        break;
        case "lighbook":
            document.querySelector('.formLightBook').style.display = 'block';   
            document.querySelector('.formPC').style.display = 'none';
            document.querySelector('.formServer').style.display = 'none';
        break;
        case "Server":
            document.querySelector('.formServer').style.display = 'block';
            document.querySelector('.formPC').style.display = 'none';
            document.querySelector('.formLightBook').style.display = 'none';    
            break;   
        }
    }
)

function saveandvvod(){
	switch(select.value){
        case "pc":
        var pc =new Pc;
		pc.key = select.value
        pc.name = inppc[0].value;
		inppc[0].value = "";
		pc.kolader = inppc[1].value;
		inppc[1].value = "";
		pc.cp = inppc[2].value;
		inppc[2].value = "";
		pc.typecp = inppc[3].value;
		inppc[3].value = "";
		pc.videocarta = inppc[4].value;
		inppc[4].value = "";
		pc.ozu = inppc[5].value;
		inppc[5].value = "";
		crtablesave(pc,select.value)
        break;
        case "lighbook":
        var lightbk = new Ligtbook;
		lightbk.key =select.value
        lightbk.name = inplighbook[0].value;
		inplighbook[0].value=""
        lightbk.kolader = inplighbook[1].value;
		inplighbook[1].value = ""
        lightbk.cp = inplighbook[2].value;
		inplighbook[2].value = ""
        lightbk.typecp = inplighbook[3].value;
		inplighbook[3].value = ""
        lightbk.videocarta = inplighbook[4].value;
		inplighbook[4].value = ""
        lightbk.ozu = inplighbook[5].value;
		inplighbook[5].value = ""
        lightbk.weigh = inplighbook[6].value;
		inplighbook[6].value = ""
        lightbk.battery = inplighbook[7].value;
		inplighbook[7].value = ""
		crtablesave(lightbk,select.value)
        break;
        case "Server":
        var server = new Server;
		server.key = select.value
        server.name = inpserver[0].value;
		inpserver[0].value = ""
        server.kolader = inpserver[1].value;
		inpserver[1].value = ""
        server.cp = inpserver[2].value;
		inpserver[2].value = ""
        server.typecp = inpserver[3].value;
		inpserver[3].value ="" 
        server.videocarta = inpserver[4].value;
		inpserver[4].value =""
        server.ozu = inpserver[5].value;
		inpserver[5].value =""
        server.razmer = inpserver[6].value;
		inpserver[6].value =""
        server.productivity = inpserver[7].value;
		inpserver[7].value =""
		crtablesave(server,select.value)
        break;
    }
}
function crtablesave(ob,selval){
	createtable(ob,selval)
	save(ob)
}
function createtable(ob){
    let tr = document.createElement('tr');
	let td = document.createElement('td');
	table.appendChild(tr);
	switch(select.value || ob.getkey ){
		case "pc":
			tr.innerHTML='<td>'+ob.getname+'</td>'+'<td>'+ob.getkolader+'</td>'+
			'<td>'+ob.getcp+'</td>'+'<td>'+ob.gettypecp+'</td>'+'<td>'+ob.getvideocarta+'</td>'+
			'<td>'+ob.getozu+'</td>'+'<td>'+"------"+'</td>'+'<td>'+"------"+'</td>'
			tr.appendChild(td).append(createbuttondel(),createbuttonchange())	
		break;
		case "lighbook":
			tr.innerHTML='<td>'+ob.getname+'</td>'+'<td>'+ob.getkolader+'</td>'+
			'<td>'+ob.getcp+'</td>'+'<td>'+ob.gettypecp+'</td>'+'<td>'+ob.getvideocarta+'</td>'+
			'<td>'+ob.getozu+'</td>'+'<td>'+ob.getweigh+'</td>'+'<td>'+ob.getbattery+'</td>'
			tr.appendChild(td).append(createbuttondel(),createbuttonchange())	
		break;
		case "Server":
			tr.innerHTML='<td>'+ob.getname+'</td>'+'<td>'+ob.getkolader+'</td>'+
			'<td>'+ob.getcp+'</td>'+'<td>'+ob.gettypecp+'</td>'+'<td>'+ob.getvideocarta+'</td>'+
			'<td>'+ob.getozu+'</td>'+'<td>'+ob.getrazmer+'</td>'+'<td>'+ob.getproductivity+'</td>'
			tr.appendChild(td).append(createbuttondel(),createbuttonchange())	
		break;
	}
	
}
function createbuttondel(){
	let del = document.createElement("button")
	del.innerHTML = "удалить"
	let trmass = document.querySelectorAll("tr")
	del.addEventListener("click",function(){
		var tr = this.closest("tr")
		tr.parentElement.removeChild(tr)
		for(let i=0;i<trmass.length;i++){
			var index = i-1
		}
		var list = JSON.parse(localStorage.getItem("obj"))
		for(i in list){
			if(index == i){
				delete list[i]
			}		
		}
		var mass = []
		for(i in list){
			if(list[i]==null){
				i+=1
			}
			mass.push(list[i])
		}
		console.log(mass)
		localStorage.clear()
		localStorage.setItem("obj",JSON.stringify(mass))
	})
	return del
}
function izmenmodal(ob,key,index){
	var modal_content = document.querySelector("#modal-content")
	var chbtn = document.createElement("button")
	chbtn.innerHTML = "изменить"
	switch(key){
		case "pc":
			inppc[0].value=ob.getname;
			inppc[1].value=ob.getkolader;		
			inppc[2].value=ob.getcp;
			inppc[3].value=ob.gettypecp;
			inppc[4].value=ob.getvideocarta;
			inppc[5].value=ob.getozu;
			closemodal.remove()
			modal_content.append(chbtn)
			break;
		case "lighbook":
			inplighbook[0].value=ob.getname;
			inplighbook[1].value=ob.getkolader;
			inplighbook[2].value=ob.getcp
			inplighbook[3].value=ob.gettypecp;
			inplighbook[4].value=ob.getvideocarta;
			inplighbook[5].value=ob.getozu ;
			inplighbook[6].value=ob.getweigh;
			inplighbook[7].value=ob.getbattery ;
			closemodal.remove()
			modal_content.append(chbtn)
		break;
		case "Server":
			inpserver[0].value=ob.getname;
			inpserver[1].value=ob.getkolader;
			inpserver[2].value=ob.getcp
			inpserver[3].value=ob.gettypecp;
			inpserver[4].value=ob.getvideocarta;
			inpserver[5].value=ob.getozu ;
			inpserver[6].value=ob.getrazmer;
			inpserver[7].value=ob.getproductivity ;
			closemodal.remove()
			modal_content.append(chbtn)
		break;
	
	}
chbtn.addEventListener("click",function(){
		switch(key){
			case "pc":
			var pcnew =new Pc;
			pcnew.key = key
			pcnew.name = inppc[0].value;
			inppc[0].value = "";
			pcnew.kolader = inppc[1].value;
			inppc[1].value = "";
			pcnew.cp = inppc[2].value;
			inppc[2].value = "";
			pcnew.typecp = inppc[3].value;
			inppc[3].value = "";
			pcnew.videocarta = inppc[4].value;
			inppc[4].value = "";
			pcnew.ozu = inppc[5].value;
			inppc[5].value = "";
			var list = JSON.parse(localStorage.getItem("obj"))
			for(i in list){
				if(index == i){
					console.log(1)
					list[i] = pcnew
				}
			}
			localStorage.clear()
			localStorage.setItem("obj",JSON.stringify(list))
			location.reload()
			break;
			case "lighbook":
			var lightbknew = new Ligtbook;
			lightbknew.key =key
			lightbknew.name = inplighbook[0].value;
			inplighbook[0].value=""
			lightbknew.kolader = inplighbook[1].value;
			inplighbook[1].value = ""
			lightbknew.cp = inplighbook[2].value;
			inplighbook[2].value = ""
			lightbknew.typecp = inplighbook[3].value;
			inplighbook[3].value = ""
			lightbknew.videocarta = inplighbook[4].value;
			inplighbook[4].value = ""
			lightbknew.ozu = inplighbook[5].value;
			inplighbook[5].value = ""
			lightbknew.weigh = inplighbook[6].value;
			inplighbook[6].value = ""
			lightbknew.battery = inplighbook[7].value;
			inplighbook[7].value = ""
			var list = JSON.parse(localStorage.getItem("obj"))
			for(i in list){
				if(index == i){
					console.log(1)
					list[i] =  lightbknew
				}
			}
			localStorage.clear()
			localStorage.setItem("obj",JSON.stringify(list))
			location.reload()
			break;
			case "Server":
			var servernew = new Server;
			servernew.key = key
			servernew.name = inpserver[0].value;
			inpserver[0].value = ""
			servernew.kolader = inpserver[1].value;
			inpserver[1].value = ""
			servernew.cp = inpserver[2].value;
			inpserver[2].value = ""
			servernew.typecp = inpserver[3].value;
			inpserver[3].value ="" 
			servernew.videocarta = inpserver[4].value;
			inpserver[4].value =""
			servernew.ozu = inpserver[5].value;
			inpserver[5].value =""
			servernew.razmer = inpserver[6].value;
			inpserver[6].value =""
			servernew.productivity = inpserver[7].value;
			inpserver[7].value =""
			var list = JSON.parse(localStorage.getItem("obj"))
			for(i in list){
				if(index == i){
					console.log(1)
					list[i] = servernew
				}
			}
			localStorage.clear()
			localStorage.setItem("obj",JSON.stringify(list))
			location.reload()
			break;
		}
		modal.classList.toggle("close")
		modal.classList.remove("open")
		chbtn.remove()
		modal_content.append(closemodal)
	})
	
}
izmenmodal()
function createbuttonchange(){
	let trmass = document.querySelectorAll("tr")
	let izmen = document.createElement("button")
	
	izmen.innerHTML= "изменить"
	izmen.addEventListener("click",function(){
		modal.classList.toggle("open")
		modal.classList.remove("close")
		var list = JSON.parse(localStorage.getItem("obj"))
		for(let i=0;i<trmass.length;i++){
			var index = i-1
		}
		for(i in list){
			if(index == i){
				switch(list[i]._key){
					case "pc":
					var label =select.closest("label")
					label.remove()
					var span= document.createElement("span")
					span.innerHTML = list[i]._key.toUpperCase()
					document.querySelector(".formPC").insertBefore(span,document.querySelector(".formPC").firstChild)
					document.querySelector('.formPC').style.display = 'block';
					document.querySelector('.formServer').style.display = 'none';
					document.querySelector('.formLightBook').style.display = 'none';
					objpc = new Pc
					objpc= Object.assign(objpc,list[i])
					izmenmodal(objpc,list[i]._key,index)
					//list[i] = null
					break;
					case "lighbook":
					var label =select.closest("label")
					label.remove()
					var span= document.createElement("span")
					span.innerHTML = list[i]._key.toUpperCase()
					document.querySelector(".formLightBook").insertBefore(span,document.querySelector(".formLightBook").firstChild)
					document.querySelector('.formLightBook').style.display = 'block';   
					document.querySelector('.formPC').style.display = 'none';
					document.querySelector('.formServer').style.display = 'none';
					objlb = new Ligtbook
					objlb = Object.assign(objlb,list[i])
					izmenmodal(objlb,list[i]._key,index)
					break;
					case "Server":
					var label =select.closest("label")
					label.remove()
					var span= document.createElement("span")
					span.innerHTML = list[i]._key.toUpperCase()
					document.querySelector(".formServer").insertBefore(span,document.querySelector(".formServer").firstChild)
					document.querySelector('.formServer').style.display = 'block';
					document.querySelector('.formPC').style.display = 'none';
					document.querySelector('.formLightBook').style.display = 'none';    
					objsr = new Server
					objsr = Object.assign(objsr,list[i])
					izmenmodal(objsr,list[i]._key,index)
					break;
				}
			}
		}
	})
	return izmen
}
function save(ob){
	var array = JSON.parse(localStorage.getItem("obj")) || []
	array.push(ob);
	localStorage.setItem("obj",JSON.stringify(array))
}
function load(){
	var list = JSON.parse(localStorage.getItem("obj"))
	for(let i in list){
		if(list[i]==null){
			i++;
		}
		else{
			switch(list[i]._key){
				case "pc":
				objpc = new Pc
				list[i] = Object.assign(objpc,list[i])
				createtable(list[i])
				break;
				case "lighbook":
				objlb = new Ligtbook
				list[i] = Object.assign(objlb,list[i])
				createtable(list[i])
				break;
				case "Server":
				objsr = new Server
				list[i] = Object.assign(objsr,list[i])
				createtable(list[i])
				break;
			}
		}
		
	}
}
load()
