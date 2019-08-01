BigWorld.FolderModel=OBJECT({preset:()=>{return BigWorld.MODEL},params:()=>{let t={folderId:{id:!0},name:{notEmpty:!0,size:{max:255}},elementCount:{notEmpty:!0,integer:0}};return{name:"Folder",initData:{elementCount:0},methodConfig:{create:{valid:VALID(t)},update:{valid:VALID(t)}}}}}),BigWorld.ItemModel=OBJECT({preset:()=>{return BigWorld.MODEL},params:()=>{let t={zIndex:{notEmpty:!0,integer:!0},frameCount:{notEmpty:!0,integer:!0},fps:{integer:!0},x:{notEmpty:!0,integer:!0},y:{notEmpty:!0,integer:!0},frames:{notEmpty:!0,array:!0,element:{id:!0}}},e={folderId:{id:!0},objectId:{notEmpty:!0,id:!0},objectPart:{notEmpty:!0,size:{max:255}},name:{notEmpty:!0,data:!0,detail:{en:{size:{max:255}},ko:{size:{max:255}},ja:{size:{max:255}},"zh-TW":{size:{max:255}}}},kinds:{notEmpty:!0,array:!0,element:{data:!0,detail:{name:{notEmpty:!0,data:!0,detail:{en:{size:{max:255}},ko:{size:{max:255}},ja:{size:{max:255}},"zh-TW":{size:{max:255}}}}}}},states:{notEmpty:!0,data:!0,property:{data:!0,detail:{parts:{notEmpty:!0,array:!0,element:{data:!0,detail:{name:{notEmpty:!0,data:!0,detail:{en:{size:{max:255}},ko:{size:{max:255}},ja:{size:{max:255}},"zh-TW":{size:{max:255}}}},down:{data:!0,detail:t},left:{data:!0,detail:t},up:{data:!0,detail:t},right:{data:!0,detail:t}}}}}}}};return{name:"Item",initData:{kinds:[{name:{en:"Kind 1"}}],states:{}},methodConfig:{create:{valid:VALID(e)},update:{valid:VALID(e)}}}}}),BigWorld.MapModel=OBJECT({preset:()=>{return BigWorld.MODEL},params:()=>{let t={folderId:{id:!0},name:{notEmpty:!0,data:!0,detail:{en:{size:{max:255}},ko:{size:{max:255}},ja:{size:{max:255}},"zh-TW":{size:{max:255}}}}};return{name:"Map",methodConfig:{create:{valid:VALID(t)},update:{valid:VALID(t)}}}}}),BigWorld.ObjectModel=OBJECT({preset:()=>{return BigWorld.MODEL},params:()=>{let t={notEmpty:!0,integer:!0,min:0},e={zIndex:{notEmpty:!0,integer:!0},frameCount:{notEmpty:!0,integer:!0},fps:{integer:!0},x:{notEmpty:!0,integer:!0},y:{notEmpty:!0,integer:!0},frames:{notEmpty:!0,array:!0,element:{id:!0}}},a={folderId:{id:!0},name:{notEmpty:!0,data:!0,detail:{en:{size:{max:255}},ko:{size:{max:255}},ja:{size:{max:255}},"zh-TW":{size:{max:255}}}},sectionLevels:{notEmpty:!0,data:!0,detail:{left:t,up:t,right:t,down:t}},sectionMap:{notEmpty:!0,array:!0,element:{array:!0,element:{data:!0,detail:{z:{notEmpty:!0,integer:!0},isBlock:{bool:!0},isTrigger:{bool:!0}}}}},touchArea:{notEmpty:!0,data:!0,detail:{x:{notEmpty:!0,integer:!0},y:{notEmpty:!0,integer:!0},width:{notEmpty:!0,integer:!0},height:{notEmpty:!0,integer:!0}}},kinds:{notEmpty:!0,array:!0,element:{data:!0,detail:{name:{notEmpty:!0,data:!0,detail:{en:{size:{max:255}},ko:{size:{max:255}},ja:{size:{max:255}},"zh-TW":{size:{max:255}}}}}}},states:{notEmpty:!0,data:!0,property:{data:!0,detail:{name:{notEmpty:!0,data:!0,detail:{en:{size:{max:255}},ko:{size:{max:255}},ja:{size:{max:255}},"zh-TW":{size:{max:255}}}},parts:{notEmpty:!0,array:!0,element:{data:!0,detail:{name:{notEmpty:!0,data:!0,detail:{en:{size:{max:255}},ko:{size:{max:255}},ja:{size:{max:255}},"zh-TW":{size:{max:255}}}},down:{data:!0,detail:e},left:{data:!0,detail:e},up:{data:!0,detail:e},right:{data:!0,detail:e}}}}}}}};return{name:"Object",initData:{sectionLevels:{left:0,up:0,right:0,down:0},sectionMap:[[{z:0}]],touchArea:{x:0,y:0,width:CONFIG.BigWorld.sectionWidth,height:CONFIG.BigWorld.sectionHeight},kinds:[{name:{en:"Kind 1"}}],states:{idle:{name:{en:"Idle"},parts:[]}}},methodConfig:{create:{valid:VALID(a)},update:{valid:VALID(a)}}}}}),BigWorld.TileModel=OBJECT({preset:()=>{return BigWorld.MODEL},params:()=>{let t={folderId:{id:!0},name:{notEmpty:!0,size:{max:255}},kinds:{notEmpty:!0,array:!0,element:{data:!0,detail:{name:{notEmpty:!0,data:!0,detail:{en:{size:{max:255}},ko:{size:{max:255}},ja:{size:{max:255}},"zh-TW":{size:{max:255}}}}}}},states:{notEmpty:!0,data:!0,property:{data:!0,detail:{sectionMap:{notEmpty:!0,array:!0,element:{array:!0,element:{data:!0,detail:{z:{notEmpty:!0,integer:!0},isBlock:{bool:!0},isTrigger:{bool:!0}}}}},parts:{notEmpty:!0,array:!0,element:{data:!0,detail:{name:{notEmpty:!0,data:!0,detail:{en:{size:{max:255}},ko:{size:{max:255}},ja:{size:{max:255}},"zh-TW":{size:{max:255}}}},zIndex:{notEmpty:!0,integer:!0},frameCount:{notEmpty:!0,integer:!0},fps:{integer:!0},x:{notEmpty:!0,integer:!0},y:{notEmpty:!0,integer:!0},frames:{notEmpty:!0,array:!0,element:{id:!0}}}}}}}}},e=[];return REPEAT(CONFIG.BigWorld.tileSectionLevel,()=>{let t=[];REPEAT(CONFIG.BigWorld.tileSectionLevel,()=>{t.push({z:0})}),e.push(t)}),{name:"Tile",initData:{kinds:[{name:{en:"Kind 1"}}],states:{center:{sectionMap:e,parts:[]}}},methodConfig:{create:{valid:VALID(t)},update:{valid:VALID(t)}}}}}),BigWorld.TILE_STATES=["center","left","leftTop","top","rightTop","right","rightBottom","bottom","leftBottom","fillLeftBottom","fillLeftTop","fillRightTop","fillRightBottom"],BigWorld.MapObjectModel=OBJECT({preset:()=>{return BigWorld.MODEL},params:()=>{let t={mapId:{notEmpty:!0,id:!0},objectId:{notEmpty:!0,id:!0},kind:{notEmpty:!0,integer:!0},state:{notEmpty:!0,size:{max:255}},items:{notEmpty:!0,array:!0,element:{data:!0,detail:{id:{notEmpty:!0,id:!0},kind:{notEmpty:!0,integer:!0}}}},direction:{notEmpty:!0,one:["down","right","up","left"]},x:{notEmpty:!0,integer:!0},y:{notEmpty:!0,integer:!0},isReverse:{bool:!0}};return{name:"MapObject",methodConfig:{create:{valid:VALID(t)},update:{valid:VALID(t)}}}}}),BigWorld.MapTileModel=OBJECT({preset:()=>{return BigWorld.MODEL},params:()=>{let t={};EACH(BigWorld.TILE_STATES,e=>{t[e]={notEmpty:!0,integer:!0}});let e={mapId:{notEmpty:!0,id:!0},tileId:{notEmpty:!0,id:!0},kindMap:{notEmpty:!0,data:!0,details:t},col:{notEmpty:!0,integer:!0},row:{notEmpty:!0,integer:!0}};return{name:"MapTile",methodConfig:{create:{valid:VALID(e),role:"System"},update:{valid:VALID(e)}}}}});