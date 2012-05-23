ig.module( 'game.levels.main' )
.requires( 'impact.image','game.entities.hay-bale' )
.defines(function(){
LevelMain=/*JSON[*/{"entities":[{"type":"EntityHayBale","x":583,"y":315},{"type":"EntityHayBale","x":855,"y":315},{"type":"EntityHayBale","x":-1,"y":243},{"type":"EntityHayBale","x":-1,"y":315},{"type":"EntityHayBale","x":-1,"y":279},{"type":"EntityHayBale","x":1415,"y":239},{"type":"EntityHayBale","x":1415,"y":311},{"type":"EntityHayBale","x":1415,"y":275}],"layer":[{"name":"bg","width":1,"height":1,"linkWithCollision":false,"visible":1,"tilesetName":"media/simple-tiles/ground-tiles.png","repeat":true,"preRender":false,"distance":"1","tilesize":50,"foreground":false,"data":[[3]]},{"name":"ground","width":30,"height":9,"linkWithCollision":false,"visible":1,"tilesetName":"media/simple-tiles/ground-tiles.png","repeat":false,"preRender":false,"distance":"1","tilesize":50,"foreground":false,"data":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,2,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[5,5,5,6,5,5,6,5,5,5,5,5,5,5,5,5,5,5,7,7,7,8,7,7,7,7,8,7,7,7],[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,11,11,11,11,11,11,11,11,11,11,11,11]]},{"name":"collision","width":30,"height":9,"linkWithCollision":false,"visible":1,"tilesetName":"","repeat":false,"preRender":false,"distance":1,"tilesize":50,"foreground":false,"data":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]}]}/*]JSON*/;
LevelMainResources=[new ig.Image('media/simple-tiles/ground-tiles.png'), new ig.Image('media/simple-tiles/ground-tiles.png')];
});