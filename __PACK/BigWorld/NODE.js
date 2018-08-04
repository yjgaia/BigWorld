BigWorld.FolderModel=OBJECT({preset:()=>{return BigWorld.MODEL},params:()=>{let e={folderId:{id:!0},name:{notEmpty:!0,size:{max:255}},factorCount:{notEmpty:!0,integer:0}};return{name:"Folder",initData:{factorCount:0},methodConfig:{create:{valid:VALID(e)},update:{valid:VALID(e)}}}}}),BigWorld.ItemModel=OBJECT({preset:()=>{return BigWorld.MODEL},params:()=>{let e={objectId:{notEmpty:!0,id:!0},folderId:{id:!0},category:{size:{max:255}},name:{notEmpty:!0,data:!0,detail:{en:{size:{max:255}},ko:{size:{max:255}},ja:{size:{max:255}},"zh-TW":{size:{max:255}}}},kinds:{array:!0,element:{data:!0,detail:{name:{notEmpty:!0,data:!0,detail:{en:{size:{max:255}},ko:{size:{max:255}},ja:{size:{max:255}},"zh-TW":{size:{max:255}}}}}}},states:{data:!0,property:{data:!0,detail:{parts:{array:!0,element:{data:!0,detail:{name:{data:!0,detail:{en:{size:{max:255}},ko:{size:{max:255}},ja:{size:{max:255}},"zh-TW":{size:{max:255}}}},zIndex:{integer:!0},frameCount:{integer:!0},fps:{integer:!0},x:{real:!0},y:{real:!0},frames:{array:!0,element:{data:!0,detail:{left:{id:!0},up:{id:!0},right:{id:!0},down:{id:!0}}}}}}}}}}};return{name:"Item",methodConfig:{create:{valid:VALID(e)},update:{valid:VALID(e)}}}}}),BigWorld.ObjectModel=OBJECT({preset:()=>{return BigWorld.MODEL},params:()=>{let e={folderId:{id:!0},category:{size:{max:255}},name:{notEmpty:!0,data:!0,detail:{en:{size:{max:255}},ko:{size:{max:255}},ja:{size:{max:255}},"zh-TW":{size:{max:255}}}},sectionLeftLevel:{notEmpty:!0,integer:!0,min:0},sectionUpLevel:{notEmpty:!0,integer:!0,min:0},sectionRightLevel:{notEmpty:!0,integer:!0,min:0},sectionDownLevel:{notEmpty:!0,integer:!0,min:0},sectionMap:{notEmpty:!0,array:!0,element:{array:!0,element:{data:!0,detail:{z:{notEmpty:!0,integer:!0},isBlock:{bool:!0},isTrigger:{bool:!0}}}}},kinds:{array:!0,element:{data:!0,detail:{name:{notEmpty:!0,data:!0,detail:{en:{size:{max:255}},ko:{size:{max:255}},ja:{size:{max:255}},"zh-TW":{size:{max:255}}}}}}},states:{data:!0,property:{data:!0,detail:{name:{data:!0,detail:{en:{size:{max:255}},ko:{size:{max:255}},ja:{size:{max:255}},"zh-TW":{size:{max:255}}}},parts:{array:!0,element:{data:!0,detail:{name:{data:!0,detail:{en:{size:{max:255}},ko:{size:{max:255}},ja:{size:{max:255}},"zh-TW":{size:{max:255}}}},zIndex:{integer:!0},frameCount:{integer:!0},fps:{integer:!0},x:{real:!0},y:{real:!0},frames:{array:!0,element:{data:!0,detail:{left:{id:!0},up:{id:!0},right:{id:!0},down:{id:!0}}}}}}}}}}};return{name:"Object",initData:{sectionUpLevel:0,sectionRightLevel:0,sectionDownLevel:0,sectionLeftLevel:0,sectionMap:[[{z:0}]]},methodConfig:{create:{valid:VALID(e)},update:{valid:VALID(e)}}}}}),BigWorld.StageModel=OBJECT({preset:()=>{return BigWorld.MODEL},params:()=>{let e={folderId:{id:!0},name:{notEmpty:!0,size:{max:255}}};return{name:"Stage",methodConfig:{create:{valid:VALID(e)},update:{valid:VALID(e)}}}}}),BigWorld.StageObjectModel=OBJECT({preset:()=>{return BigWorld.MODEL},params:()=>{let e={stageId:{notEmpty:!0,id:!0},objectId:{notEmpty:!0,id:!0},kind:{notEmpty:!0,integer:!0},state:{notEmpty:!0,size:{max:255}},itemInfos:{array:!0,element:{data:!0,detail:{id:{notEmpty:!0,id:!0},kind:{notEmpty:!0,integer:!0}}}},direction:{notEmpty:!0,one:["down","right","up","left"]},tileRow:{notEmpty:!0,integer:!0},tileCol:{notEmpty:!0,integer:!0},sectionRow:{notEmpty:!0,integer:!0},sectionCol:{notEmpty:!0,integer:!0}};return{name:"StageObject",methodConfig:{create:{valid:VALID(e)},update:{valid:VALID(e)}}}}});OVERRIDE(BigWorld.FolderModel,d=>{BigWorld.FolderModel=OBJECT({preset:()=>{return d},init:(d,e)=>{d.on("update",{before:(d,o,i)=>{if(void 0!==d.folderId&&d.folderId!==TO_DELETE){if(d.id===d.folderId)i({validErrors:{folderId:{type:"notAllowed"}}});else{let r=l=>{e.get(l,e=>{void 0===e.folderId?o():e.folderId===d.id?i({validErrors:{folderId:{type:"notAllowed"}}}):r(e.folderId)})};r(d.folderId)}return!1}}}),d.on("remove",{after:d=>{e.find({filter:{folderId:d.id}},EACH(d=>{e.remove(d.id)})),BigWorld.ObjectModel.find({filter:{folderId:d.id}},EACH(d=>{BigWorld.ObjectModel.remove(d.id)})),BigWorld.ItemModel.find({filter:{folderId:d.id}},EACH(d=>{BigWorld.ItemModel.remove(d.id)}))}})}})}),OVERRIDE(BigWorld.ObjectModel,d=>{BigWorld.ObjectModel=OBJECT({preset:()=>{return d},init:(d,e)=>{d.on("remove",{after:d=>{BigWorld.ItemModel.find({filter:{objectId:d.id}},EACH(d=>{BigWorld.ItemModel.remove(d.id)}))}})}})});