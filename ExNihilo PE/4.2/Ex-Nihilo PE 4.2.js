/*Ex Nihilo PE v4.1d for Mcpe v0.10.4 optimized for BlockLauncher 1.8

Ex Nihilo PE is Ported to Minecraft Pocket Edition by Darkserver
Ex Nihilo is a mod for Minecraft on Pc made by Erasmus_Crowley

Future Changes:
Change sieving thinkg reward as stated here: http://ex-nihilo-minecraft.wikia.com/wiki/Sieved_Items
Add cooked silk worm
Make silk worms Edible

bugs in 4.1d:
Darkserver:
-Crucible desc (in texture lang file)
-add craft recipe for stonecutter
-crucible dont function
-cant compost
-grass seeds aren't consumed

Changes in 4.1d:
Unbelievable amount of bugs were fixed  */

var defaultDestroyTime = [null, 1.5, 0.6, 0.5, 2, 2, 0, -1, null, null, null /*10*/, null, 0.5, 0.6, 3, 3, 3, 2, 0.2, 0.6, 0.3/*20*/, 3, 3, 10, 0.8, null, 0.2, 0.7, null, null, 4/*30*/, 0, 0, 1, 1.5, 0.8, null, 0, 0, 0, 0 /*40*/, 3, 5, 2, 2, 2, 0, 1.5, 2, 50, 0 /*50*/, 0, 5, 2, 2.5, null, 3, 5, 2.5, 0, 0.6/*60*/, 3.5, 3.5, 1, 3, 0.4, 0.7, 2, 1, null, null/*70*/, 5, null, 3, 3, null, null, null, 0.1, 0.5, 0.2 /*80*/, 0.4, 0.6, 0, null, 2, 1, 0.5, 0.3, null, 1 /*90*/, 0.5, null, null, -1, 3, null, 0.75, 1.5, 0.2, 0.2 /*100*/, 0.3, 1, 1, 0, null, 0.2, 2, 1.5, null, 0.6 /*110*/, 0, null, 2, null, null, null, null, null, null, -1 /*120*/, 3, null, null, null, null, null, 0.2, null, 3, null /*130*/, null, null, 5, 2, 2, 2, null, 2,2 , 0 /*140*/, 0, null, null, null, null, null, null, null, null, null /*150*/, null, 0.4, 3, 0.8, 0.8, 2, 2, 2, 1.25, null /*160*/, 0.2, 2, 2, 2, null, null, null, null, 0.5, 0.1 /*170*/, 0.1, 1.25, 5, 0.5, 0, 1.5, 1.5, 1.5, 1.5, 2 /*199*/, 2, null, 1.5, 2, 0.5, 2, 0.6, 0.6, 0.5, 0.5 /*190*/, 0.5, 0.5, 0.2, 2, 2, 2, 2, 2, 2, null /*200*/, null, null, 1.5, 1.5, 1.5, 1.5, null, 2, 2, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, 3.5, 50, 5, 0.6, 0.6, null, null, null, null, null, 0];
var hammer = [481,482,483,484,485,495];
var durability = [60,132,251,33,1562];
var stoneBlocks = [22,41,42,44,45,49,57,61,67,101,108,109,112,114,121,128,133,139,156,172,173,245,247];
var p = "planks";
var d = "stone_slab";
var b = [
[p,0],["lever",0],[p,0],[p,0],[p,0],[p,0],
[p,1],["rail_detector",0],[p,1],[p,1],[p,1],[p,1],
[p,2],["rail_detector_powered",0],[p,2],[p,2],[p,2],[p,2],
[p,3],["rail_activator",0],[p,3],[p,3],[p,3],[p,3],
[p,4],["dragon_egg",0],[p,4],[p,4],[p,4],[p,4],
[p,5],["anvil_top_damaged_x",0],[p,5],[p,5],[p,5],[p,5],
]
var wb = [
[p,0],["redstone_dust_line_overlay",0],[p,0],[p,0],[p,0],[p,0],
[p,1],["redstone_lamp_off",0],[p,1],[p,1],[p,1],[p,1],
[p,2],["redstone_lamp_on",0],[p,2],[p,2],[p,2],[p,2],
[p,3],["enchanting_table_bottom",0],[p,3],[p,3],[p,3],[p,3],
[p,4],["redstone_dust_cross_overlay",0],[p,4],[p,4],[p,4],[p,4],
[p,5],["anvil_top_damaged_x",2],[p,5],[p,5],[p,5],[p,5],
]
var wwb = [
[p,0],["cauldron_top",0],[p,0],[p,0],[p,0],[p,0],
[p,1],["cauldron_inner",0],[p,1],[p,1],[p,1],[p,1],
[p,2],["cauldron_side",0],[p,2],[p,2],[p,2],[p,2],
[p,3],["cauldron_bottom",0],[p,3],[p,3],[p,3],[p,3],
[p,4],["redstone_dust_cross",0],[p,4],[p,4],[p,4],[p,4],
[p,5],["anvil_top_damaged_x",1],[p,5],[p,5],[p,5],[p,5],
]
var sb = [
[d,0],["rail_activator_powered",0],[d,0],[d,0],[d,0],[d,0],
[d,0],["enchanting_table_side",0],[d,0],[d,0],[d,0],[d,0],
[d,0],["redstone_dust_line",0],[d,0],[d,0],[d,0],[d,0],
[d,0],["brewing_stand_base",0],[d,0],[d,0],[d,0],[d,0]
]
var ucr = [
["trip_wire",0],["trip_wire_source",0],["command_block",0],["command_block",0],["command_block",0],["command_block",0]
]
var fcr = [
["trip_wire",0],["trip_wire_source",0],["command_block",0],["command_block",0],["command_block",0],["command_block",0]
]
var filled = 0;
var liquid = 0;
var ca = 0;
var X;
var Y;
var Z;
var mod = "ExNihilo";
var message = "<"+mod+">";

ModPE.setItem(460,"cauldron",0,"barrel_oak",16);
ModPE.setItem(461,"brewing_stand",0,"barrel_spruce",16);
ModPE.setItem(462,"book_writable",0,"barrel_birch",16);
ModPE.setItem(463,"book_written",0,"barrel_jungle",16);
ModPE.setItem(464,"fireworks_charge",0,"stones",16);
ModPE.setItem(465,"apple_golden",0,"seed_grass",64);
ModPE.setItem(466,"minecart_tnt",0,"seed_sugarcane",64);
ModPE.setItem(467,"gold_nugget",0,"seed_potato",64);
ModPE.setItem(468,"minecart_furnace",0,"seed_carrot",64);
ModPE.setItem(469,"item_frame",0,"seed_oak",64);
ModPE.setItem(470,"gold_horse_armor",0,"seed_birch",64);
ModPE.setItem(471,"lead",0,"seed_spruce",64);
ModPE.setItem(472,"record_chirp",0,"gravel_iron",16);
ModPE.setItem(473,"record_wait",0,"gravel_gold",16);
ModPE.setItem(474,"record_far",0,"sand_iron",16);
ModPE.setItem(475,"record_ward",0,"sand_gold",16);
ModPE.setItem(476,"iron_horse_armor",0,"seed_cactus",64);
ModPE.setItem(477,"minecart_hopper",0,"seed_jungle",64);
ModPE.setItem(478,"record_mellohi",0,"seed_spores",64);
ModPE.setItem(479,"record_mall",0,"dust_iron",16);
ModPE.setItem(480,"record_strad",0,"dust_gold",16);
ModPE.setItem(481,"quiver",0,"woodhammer",1);
ModPE.setItem(482,"record_11",0,"stonehammer",1);
ModPE.setItem(483,"record_13",0,"ironhammer",1);
ModPE.setItem(484,"record_blocks",0,"goldhammer",1);
ModPE.setItem(485,"record_cat",0,"diamondhammer",1);
ModPE.setItem(486,"book_enchanted",0,"crook",1);
ModPE.setItem(487,"boat",0,"crook_bone",1);
ModPE.setItem(488,"string",0,"silk_mesh",16);
ModPE.setItem(489,"record_stal",0,"witch_water",1);
ModPE.setItem(490,"carrot_golden",0,"silk_worm",16);
ModPE.setItem(491,"diamond_horse_armor",0,"dark_oak_barrel",16);
ModPE.setItem(492,"carrot_on_a_stick",0,"acacia_barrel",16);
ModPE.setItem(493,"potion_bottle_splash",0,"water_pouch",16);
ModPE.setItem(494,"potion_bottle_empty",0,"water_element");
ModPE.setItem(495,"spider_eye",0,"hammer_emerald",1);
ModPE.setItem(496,"comparator",0,"nether_gravel_iron",64);
ModPE.setItem(497,"fireball",0,"nether_gravel_gold",64);
ModPE.setItem(498,"spider_eye_fermented",0,"seed_acacia",64);
ModPE.setItem(501,"experience_bottle",0,"porcelain",64);

Block.defineBlock(188,"gold_gravel",["piston_top_normal",0],13);
Block.defineBlock(189,"iron_sand",["piston_side",0],12);
Block.defineBlock(190,"gold_sand",["piston_inner",0],12);
Block.defineBlock(191,"iron_dust",["redstone_torch_on",0],179);
Block.defineBlock(192,"gold_dust",["redstone_torch_off",0],179);
Block.defineBlock(193,"silk_leaves",["leaves",0],18);
Block.defineBlock(88,"soul_sand",["soul_sand",0],12);
Block.defineBlock(194,"unfired_crucible",ucr,4, false,0);
Block.defineBlock(195,"fired_crucible",fcr,4,false,0);
Block.defineBlock(196,"nether_iron_gravel",["jukebox_side",0],13);
Block.defineBlock(197,"nether_gold_gravel",["jukebox_top",0],13);
Block.defineBlock(198,"nether_gravel",["enchanting_table_top",0],13);
Block.defineBlock(199,"barrel",b,5,false,0); 
Block.defineBlock(200,"water_barrel",wb,5,false,0); 
Block.defineBlock(201,"stone_barrel",sb,1,false,0);
Block.defineBlock(202,"sieve_oak",[[p,0],["crafting_table",0],[p,0],[p,0],[p,0],[p,0]],5, false,0);
Block.defineBlock(203,"dust",["piston_bottom",0],12);
Block.defineBlock(204,"witch_barrel",wwb,5,false,0); 
Block.defineBlock(205,"iron_gravel",["piston_top_sticky",0],13);

Block.setRenderLayer(199,2);
Block.setRenderLayer(200,2);
Block.setRenderLayer(201,2);
Block.setRenderLayer(204,2);
Block.setRenderLayer(194,2);
Block.setRenderLayer(195,2);

ModPE.langEdit("tile.stone_barrel.name","Stone Barrel");
ModPE.langEdit("tile.barrel.name","Wooden Barrel");
ModPE.langEdit("tile.lava_barrel.name","Barrel");
ModPE.langEdit("tile.water_barrel.name","Barrel");
ModPE.langEdit("item.woodhammer.name","Wood Hammer");
ModPE.langEdit("item.stonehammer.name","Stone Hammer");
ModPE.langEdit("item.ironhammer.name","Iron Hammer");
ModPE.langEdit("item.goldhammer.name","Gold Hammer");
ModPE.langEdit("item.diamondhammer.name","Diamond Hammer");
ModPE.langEdit("tile.dust.name","Dust");
ModPE.langEdit("tile.sieve_oak.name","Oak Sieve");
ModPE.langEdit("item.crook.name","Crook");
ModPE.langEdit("item.crook_bone.name","Bone Crook");
ModPE.langEdit("tile.iron_dust.name","Iron Ore Dust");
ModPE.langEdit("tile.gold_dust.name","Gold Ore Dust");
ModPE.langEdit("tile.iron_gravel.name","Iron Ore Gravel");
ModPE.langEdit("tile.gold_gravel.name","Gold Ore Gravel");
ModPE.langEdit("tile.iron_sand.name","Iron Ore Sand");
ModPE.langEdit("tile.gold_sand.name","Gold Ore Sand");
ModPE.langEdit("item.dust_iron.name","Powdered Iron Ore");
ModPE.langEdit("item.dust_gold.name","Powdered Gold Ore");
ModPE.langEdit("item.gravel_iron.name","Broken Iron Ore");
ModPE.langEdit("item.gravel_gold.name","Broken Gold Ore");
ModPE.langEdit("item.sand_iron.name","Crushed Iron Ore");
ModPE.langEdit("item.sand_gold.name","Crushed Gold Ore");
ModPE.langEdit("item.barrel_oak.name","Oak Barrel");
ModPE.langEdit("item.barrel_spruce.name","Spruce Barrel");
ModPE.langEdit("item.barrel_birch.name","Birch Barrel");
ModPE.langEdit("item.barrel_jungle.name","Jungle Barrel");
ModPE.langEdit("item.seed_grass.name","Grass Seeds");
ModPE.langEdit("item.seed_sugarcane.name","SugarCane Seeds");
ModPE.langEdit("item.seed_potato.name","Potato Seeds");
ModPE.langEdit("item.seed_carrot.name","Carrot Seeds");
ModPE.langEdit("item.seed_cactus.name","Cactus Seeds");
ModPE.langEdit("item.seed_spores.name","Spores");
ModPE.langEdit("item.seed_oak.name","Oak Seeds");
ModPE.langEdit("item.seed_birch.name","Birch Seeds");
ModPE.langEdit("item.seed_spruce.name","Spruce Seeds");
ModPE.langEdit("item.seed_jungle.name","Jungle Seeds");
ModPE.langEdit("item.silk_mesh.name","Silk Mesh");
ModPE.langEdit("item.silk_worm.name","Silk Worm");
ModPE.langEdit("item.witch_water.name","Bucket of Witch Water");
ModPE.langEdit("tile.witch_barrel.name","Witch Barrel");
ModPE.langEdit("tile.soul_sand.name","Soul Sand");
ModPE.langEdit("item.acacia_barrel.name","Acacia Barrel");
ModPE.langEdit("item.dark_oak_barrel.name","Dark Oak Barrel");
ModPE.langEdit("item.water_element.name","Water Element");
ModPE.langEdit("item.water_pouch.name","Water Pouch");
ModPE.langEdit("item.hammer_emerald.name","Emerald Hammer");
ModPE.langEdit("tile.unfired_crucible.name","Unfired Crucible");
ModPE.langEdit("tile.fired_crucible.name","Crucible");
ModPE.langEdit("item.nether_gravel_iron.name","Broken Nether Iron");
ModPE.langEdit("item.nether_gravel_gold.name","Broken Nether Gold");
ModPE.langEdit("item.seed_acacia.name","Acacia Seed");
ModPE.langEdit("item.crucible_unfired.name","Unfired Crucible");
ModPE.langEdit("item.crucible_fired.name","Crucible");
ModPE.langEdit("item.porcelain.name","Porcelain");
ModPE.langEdit("tile.nether_iron_gravel.name","Iron Ore Gravel");
ModPE.langEdit("tile.nether_gold_gravel.name","Gold Ore Gravel");
ModPE.langEdit("tile.nether_gravel.name","Nether Gravel");

Block.setDestroyTime(88,0.6);
Block.setDestroyTime(199,1.5);
Block.setDestroyTime(200,1.5);
Block.setDestroyTime(201,1.5);
Block.setDestroyTime(201,1.5);
Block.setDestroyTime(202,1.5);
Block.setDestroyTime(203,0.5);
Block.setDestroyTime(204,1.5);
Block.setDestroyTime(205,0.6);
Block.setDestroyTime(188,0.6);
Block.setDestroyTime(189,0.6);
Block.setDestroyTime(190,0.6);
Block.setDestroyTime(191,0.6);
Block.setDestroyTime(192,0.6);
Block.setDestroyTime(193,0.2);
Block.setDestroyTime(194,2);
Block.setDestroyTime(195,2);
Block.setDestroyTime(198,0.6);
Block.setDestroyTime(197,2);
Block.setDestroyTime(196,2);

Block.setShape(199,1/16,0/16,1/16,15/16,16/16,15/16);
Block.setShape(200,1/16,0/16,1/16,15/16,16/16,15/16);
Block.setShape(201,1/16,0/16,1/16,15/16,16/16,15/16);
Block.setShape(201,1/16,0/16,1/16,15/16,16/16,15/16);
Block.setShape(204,1/16,0/16,1/16,15/16,16/16,15/16);
Block.setShape(194,1/16,0/16,1/16,15/16,13/16,15/16);
Block.setShape(195,1/16,0/16,1/16,15/16,13/16,15/16);

Item.addCraftRecipe(245,1,0,[464,9,0]);
Item.addCraftRecipe(501,1,0,[337,1,0,351,1,15]);
Item.addShapedRecipe(194,1,0,["a a","a a","aaa"],["a",501,0]);
Item.addShapedRecipe(202,1,0,["aca","aca","b b"],["a",5,0,"b",280,0,"c",488,0]);
Item.addShapedRecipe(201,1,0,["d d","d d","ded"],["d",1,0,"e",44,0]);
Item.addCraftRecipe(205,1,0,[472,4,0]);
Item.addCraftRecipe(188,1,0,[473,4,0]);
Item.addCraftRecipe(189,1,0,[474,4,0]);
Item.addCraftRecipe(190,1,0,[475,4,0]);
Item.addCraftRecipe(191,1,0,[479,4,0]);
Item.addCraftRecipe(192,1,0,[480,4,0]);
Item.addShapedRecipe(460,1,0,["i i","i i","iji"],["i",5,0,"j",158,0]);
Item.addShapedRecipe(461,1,0,["i i","i i","iji"],["i",5,1,"j",158,1]);
Item.addShapedRecipe(462,1,0,["k k","k k","klk"],["k",5,2,"l",158,2]);
Item.addCraftRecipe(4,1,0,[464,4,0]);
Item.addShapedRecipe(481,1,0,[" m ","mn ","  n"],["m",5,0,"n",280,0]);
Item.addShapedRecipe(482,1,0,[" m ","mn ","  n"],["m",4,0,"n",280,0]);
Item.addShapedRecipe(483,1,0,[" o ","op ","  p"],["o",265,0,"p",280,0]);
Item.addShapedRecipe(484,1,0,[" o ","op ","  p"],["o",266,0,"p",280,0]);
Item.addShapedRecipe(485,1,0,[" q ","qr ","  r"],["q",264,0,"r",280,0]);
Item.addShapedRecipe(486,1,0,["qq "," q "," q "],["q",280,0]);
Item.addShapedRecipe(487,1,0,["rr "," r "," r "],["r",352,0]);
Item.addCraftRecipe(488,1,0,[287,9,0]);
Item.addShapedRecipe(463,1,0,["s s","s s","sts"],["s",5,3,"t",158,3]);
Item.addShapedRecipe(491,1,0,["a a","a a","aba"],["a",5,5,"b",158,5]);
Item.addShapedRecipe(492,1,0,["a a","a a","aba"],["a",5,4,"b",158,4]);
Item.addCraftRecipe(493,1,0,[494,4,0]);
Item.addShapedRecipe(495,1,0,[" q ","qr ","  r"],["q",388,0,"r",280,0]);
Item.addCraftRecipe(196,1,0,[496,4,0]);
Item.addCraftRecipe(197,1,0,[497,4,0]);

Item.addFurnaceRecipe(205,265,0);
Item.addFurnaceRecipe(188,266,0);
Item.addFurnaceRecipe(189,265,0);
Item.addFurnaceRecipe(190,266,0);
Item.addFurnaceRecipe(191,265,0);
Item.addFurnaceRecipe(192,266,0);
Item.addFurnaceRecipe(194,195,0);
Item.addFurnaceRecipe(196,265,0);
Item.addFurnaceRecipe(197,266,0);

Item.setMaxDamage(481,60);
Item.setMaxDamage(482,132);
Item.setMaxDamage(483,251);
Item.setMaxDamage(484,33);
Item.setMaxDamage(485,1562);
Item.setMaxDamage(486,60);
Item.setMaxDamage(487,132);
Item.setMaxDamage(495,1562);

var dirt = [464,464,464,498,295,465,362,361,466,468,467,469,471,470];
var sand = [474,474,474,475,475,475,361,351,476,476,477,477,478,478];
var gravel = [318,318,318,472,472,473,473,263,263,351,351,351,264,388];
var dust = [479,479,479,480,480,351,351,351,331,331,289,289,348,348];
var soulsand = [];
var nether = [331,331,464,464,406,406,348,348,496,496,496,497,497,497];

var drop, tmp;
var filled = 0.000;

function useItem(x, y, z, item, block, side, itemDat, blockDat){
	var data = Player.getCarriedItemData();
	var dat = Level.getData(x, y, z);
	var count = Player.getCarriedItemCount();
	if(item==490){ //Silk worm
		if(block==18||block==161){
			Level.setTile(x,y,z,193,0);
			removeItem(490,1,0);
		}
	}
	if(item==493&&block==199){
		preventDefault();
		Level.setTile(x,y,z,200,dat);
		removeItem(493,1,0);
		mossMaterial(x,y,z);
		witchWater(x,y,z,dat);
	}
	if(item==325&&block==199&&data==8){
		preventDefault();
		Level.setTile(x,y,z,200,dat);
		Entity.setCarriedItem(Player.getEntity(),parseInt(325),1,0);
		mossMaterial(x, y, z);
		witchWater(x, y, z, dat);
	}
	if(item==325&&block==199&&data==10){
		preventDefault();
		Level.setTile(x, y, z, 0, 0);
		Entity.setCarriedItem(Player.getEntity(),parseInt(325), 1, 0);
		for (i = 0; i < 10; i += 1)
			Level.addParticle(ParticleType.smoke, x + .5, y + 1, z + .5, Math.random() - .5, Math.random() * .5, Math.random() - 1, 1);
	}
	if(item == 325 && block == 200 && data == 0){
		preventDefault();
		setTile(x, y, z, 199, dat);
		Entity.setCarriedItem(Player.getEntity(),parseInt(325), 1, 8);
	}
	if(item == 325 && block == 201 && data == 10 && dat == 0){
		preventDefault();
		setTile(x, y, z, 201, 2);
		Entity.setCarriedItem(Player.getEntity(),parseInt(325), 1, 0);
	}
	if(item == 493 && block == 201 && dat == 0){
		preventDefault();
		setTile(x, y, z, 201, 1);
		removeItem(item,1,0);
	}
	if(item == 325 && block == 201 && data == 8 && dat == 0){
		preventDefault();
		setTile(x, y, z, 201, 1);
		Entity.setCarriedItem(Player.getEntity(),parseInt(325), 1, 0);
	}
	if(item == 325 && block == 201 && data == 10 && dat == 1){
		preventDefault();
		setTile(x, y, z, 201, 0);
		drop = Level.dropItem(x + .5, y + 1, z + .5, 0, 1, 1, 0);
		Entity.setVelX(drop, 0);
		Entity.setVelZ(drop, 0);
		Entity.setCarriedItem(Player.getEntity(),parseInt(325), 1, 0);
	}
	//Water + lava = obsidian
	if(item == 325 && block == 201 && data == 8 && dat == 2){
		preventDefault();
		setTile(x, y, z, 201, 0);
		drop = Level.dropItem(x + .5, y + 1, z + .5, 0, 49, 1, 0);
		Entity.setVelX(drop, 0);
		Entity.setVelZ(drop, 0);
		Entity.setCarriedItem(Player.getEntity(),parseInt(325), 1, 0);
	}
	//placing wood barrels
	if(item == 460){
		if(side == 1)
			setTile(x, y+1, z, 199, 0);
		else if(side == 0)
			setTile(x, y-1, z, 199, 0);
		else if(side == 5)
			setTile(x+1, y, z, 199, 0);
		else if(side == 4)
			setTile(x-1, y, z, 199, 0);
		else if(side == 3)
			setTile(x, y, z+1, 199, 0);
		else if(side == 2)
			setTile(x, y, z-1, 199, 0);
		removeItem(460,1,data);
	}
	if(item == 461){
		if(side == 1)
			setTile(x, y+1, z, 199, 1);
		else if(side == 0)
			setTile(x, y-1, z, 199, 1);
		else if(side == 5)
			setTile(x+1, y, z, 199, 1);
		else if(side == 4)
			setTile(x-1, y, z, 199, 1);
		else if(side == 3)
			setTile(x, y, z+1, 199, 1);
		else if(side == 2)
			setTile(x, y, z-1, 199, 1);
		removeItem(461, 1, data);
	}
	if(item == 462){
		if(side == 1)
			setTile(x, y+1, z, 199, 2);
		else if(side == 0)
			setTile(x, y-1, z, 199, 2);
		else if(side == 5)
			setTile(x+1, y, z, 199, 2);
		else if(side == 4)
			setTile(x-1, y, z, 199, 2);
		else if(side == 3)
			setTile(x, y, z+1, 199, 2);
		else if(side == 2)
			setTile(x, y, z-1, 199, 2);
		removeItem(462, 1, data);
	}
	if(item == 463){
		if(side == 1)
			setTile(x, y+1, z, 199, 3);
		else if(side == 0)
			setTile(x, y-1, z, 199, 3);
		else if(side == 5)
			setTile(x+1, y, z, 199, 3);
		else if(side == 4)
			setTile(x-1, y, z, 199, 3);
		else if(side == 3)
			setTile(x, y, z+1, 199, 3);
		else if(side == 2)
			setTile(x, y, z-1, 199, 3);
		removeItem(463, 1, data);
	}
	if(item == 492){
		if(side == 1)
			setTile(x, y+1, z, 199, 4);
		else if(side == 0)
			setTile(x, y-1, z, 199, 4);
		else if(side == 5)
			setTile(x+1, y, z, 199, 4);
		else if(side == 4)
			setTile(x-1, y, z, 199, 4);
		else if(side == 3)
			setTile(x, y, z+1, 199, 4);
		else if(side == 2)
			setTile(x, y, z-1, 199, 4);
		removeItem(492, 1, data);
	}
	if(item == 491){
		if(side == 1)
			setTile(x, y+1, z, 199, 5);
		else if(side == 0)
			setTile(x, y-1, z, 199, 5);
		else if(side == 5)
			setTile(x+1, y, z, 199, 5);
		else if(side == 4)
			setTile(x-1, y, z, 199, 5);
		else if(side == 3)
			setTile(x, y, z+1, 199, 5);
		else if(side == 2)
			setTile(x, y, z-1, 199, 5);
		removeItem(491, 1, data);
	}
	//dust + water = clay
	if(item == 203 && block == 200){
		preventDefault();
		removeItem(203, 1, data);
		drop = Level.dropItem(x + .5, y + 1, z + .5, 0, 82, 1, 0);
		Entity.setVelX(drop, 0);
		Entity.setVelZ(drop, 0);
		Level.setTile(x, y, z, 199);
	}
	//sand + water = clay
	if(item == 12 && block == 201 && dat == 1){
		preventDefault();
		removeItem(12, 1, 0);
		drop = Level.dropItem(x + .5, y + 1, z + .5, 0, 82, 1, 0);
		Entity.setVelX(drop, 0);
		Entity.setVelZ(drop, 0);
		Level.setTile(x, y, z, 201, 0);
	}
	//taking lava out of stone barrels
	if(item == 325 && block == 201 && data == 0 && dat == 2){
		preventDefault();
		setTile(x, y, z, 201, 0);
		Entity.setCarriedItem(Player.getEntity(),parseInt(325), 1, 10);
	}
	//talking water out of stone barrels
	if(item == 325 && block == 201 && data == 0 && dat == 1){
		preventDefault();
		setTile(x, y, z, 201, 0);
		Entity.setCarriedItem(Player.getEntity(),parseInt(325), 1, 8);
	}
	//talking witch water out of wood barrels
	if(item == 325 && block == 204 && data == 0){
		preventDefault();
		setTile(x, y, z, 199, dat);
		Entity.setCarriedItem(Player.getEntity(),parseInt(489), 1, 0);
	}
	//putting witch water in wooden barrels
	if(item == 489 && block == 199){
		preventDefault();
		setTile(x, y, z, 204, dat);
		Entity.setCarriedItem(Player.getEntity(),parseInt(325), 1, 0);
	}
	//lava + Redstone = nether rack
	if(item == 331 && block == 201 && dat == 2){
		setTile(x, y, z, 201, 0);
		removeItem(331, 1, 0);
		drop = Level.dropItem(x + .5, y + 1, z + .5, 0, 87, 1, 0);
		Entity.setVelX(drop, 0);
		Entity.setVelZ(drop, 0);
	}
	//glowstone + lava = endstone
	if(item == 348 && block == 201 && dat == 2){
		setTile(x, y, z, 201, 0);
		removeItem(348, 1, 0);
		drop = Level.dropItem(x + .5, y + 1, z + .5, 0, 121, 1, 0);
		Entity.setVelX(drop, 0);
		Entity.setVelZ(drop, 0);
	} 
	//sand + witch water = soul sand
	if(item == 12 && block == 204){
		preventDefault();
		setTile(x, y, z, 199, dat);
		removeItem(12, 1, data);
		drop = Level.dropItem(x + .5, y + 1, z + .5, 0, 88, 1, 0);
		Entity.setVelX(drop, 0);
		Entity.setVelZ(drop, 0);
	}
	//oak sap + witch water = dark oak sap
	if(item == 6 && block == 204 && data == 0){
		preventDefault();
		setTile(x, y, z, 199, dat);
		removeItem(6, 1, 0);
		drop = Level.dropItem(x + .5, y + 1, z + .5, 0, 6, 5, 0);
		Entity.setVelX(drop, 0);
		Entity.setVelZ(drop, 0);
	}
	if(block == 199){
		preventDefault();
		tappedBarrel(x,y,z,item,data);
	}
	//seeds
	if(item == 465 && block == 3){
		Level.setTile(x, y, z, 2, 0);
	}
	if(item == 466){
		if(block == 12 || block == 2 || block == 3){
			var L0 = Level.getTile(x-1, y, z);
			var L1 = Level.getTile(x+1, y, z);
			var L2 = Level.getTile(x, y, z-1);
			var L3 = Level.getTile(x, y, z+1);

			if(L0==8 || L0==9 || L1==8 || L1==9 || L2==8 || L2==9 || L3==8 || L3==9){
				seeding(x, y, z, 83, 0);
			}
		}
	}
	if(item == 467 && block == 60){
		seeding(x, y, z, 142, 0);
	}
	if(item == 468 && block == 60){
		seeding(x, y, z, 141, 0);
	}
	if(item == 469){
		if(block == 2 || block == 3 || block == 90){
			seeding(x, y, z, 6, 0);
		}
	}
	if(item == 470){
		if(block == 2 || block == 3 || block == 90){
			seeding(x, y, z, 6, 2);
		}
	}
	if(item == 471){
		if(block == 2 || block == 3 || block == 90){
			seeding(x, y, z, 6, 1);
		}
	}
	if(item == 476 && block == 12){
		seeding(x, y, z, 81, 0);
	}
	if(item == 477){
		if(block == 2 || block == 3){
			seeding(x, y, z, 6, 3);
		}
	}
	if(item == 498){
		if(block == 2 || block == 3){
			seeding(x, y, z, 6, 4);
		}
	}
	if(item == 478 && block == 2){
		setTile(x, y, z, 110, 0);
		removeItem(item, 1, 0);
	}
	//seeds sieve
	if(block == 202){
	 preventDefault();
		var rnd = Math.floor(Math.random()*120)+1;
		if(item == 3){
			reward(x, y, z, 464, 0);
			reward(x, y, z, 464, 0);
			removeItem(item, 1, 0);
			sieve(x, y, z, rnd, dirt);
		}
		if(item == 198){
			removeItem(item, 1, 0);
			sieve(x, y, z, rnd, nether);
		}
		if(item == 12){
			removeItem(item, 1, 0);
			sieve(x, y, z, rnd, sand);
		}
		if(item == 13){
			removeItem(item, 1, 0);
			sieve(x, y, z,rnd, gravel);
		}
		if(item == 203){
			removeItem(item, 1, 0);
			sieve(x, y, z, rnd, dust);
		}
	}
	var l = Level.getTile(x, y-1, z);
	if(block==195){
		if(item==4&&liquid==0&&ca!==2000||item==4&&liquid==1&&ca!==2000){
			liquid=1;
			cruc(-250);
			removeItem(item,1,0);
		}
		if(item==13&&liquid==0&&ca!==2000||item==13&&liquid==1&&ca!==2000){
			liquid=1;
			cruc(-250);
			removeItem(item,1,0);
		}
		if(item==87&&liquid==0&&ca<=1000||item==87&&liquid==1&&ca<=1000){
			liquid=1;
			cruc(-1000);
			removeItem(item,1,0);
		}
		if(item==1&&liquid==0&&ca!==2000||item==1&&liquid==1&&ca!==2000){
			liquid=1;
			cruc(-250);
			removeItem(item,1,0);
		}
		if(item==325&&itemDat==0&&liquid==1){
			if(ca>=1000){
				cruc(1000);
				removeItem(325,1,0);
				addItemInventory(325,+1,10);
				if(ca==0){
					liquid=0;
				}
			}
		}
		if(item==79&&liquid==0&&ca!==2000||item==79&&liquid==2&&ca!==2000){
			liquid=2;
			cruc(-500);
			removeItem(item,1,0);
		}
		if(item==80&&liquid==0&&ca<=2000||item==80&&liquid==2&&ca<=2000){
			liquid=2;
			cruc(-1000);
			removeItem(item,1,0);
		}
		if(item==325&&itemDat==0&&liquid==2){
			if(ca>=1000){
			cruc(1000);
			removeItem(325,1,0);
			addItemInventory(325,+1,8);
				if(ca==0){
					liquid=0;
				}
			}
		}
	}
}

//destroy block
function destroyBlock(x, y, z, side){
	var drop = Math.floor(Math.random()*5)+1;
	var block = Level.getTile(x, y, z);
	var dat = Level.getData(x, y, z);
	var item = Player.getCarriedItem();
	var data = Player.getCarriedItemData();
	var count = Player.getCarriedItemCount();
	var lmnt = Math.floor(Math.random() * 50) + 1;
	var ip;

	if(drop >= 1 && drop <= 4)
		ip = 4;
	if(drop == 5)
		ip = 5;
	if(lmnt == 50)
		Level.dropItem(x + .5, y + .5, z + .5, 0, 494, 1, 0);
	if(hammer.indexOf(item) >= 0){
		data++;
		Entity.setCarriedItem(Player.getEntity(), parseInt(item), count, data);
		if(block == 4){
			smash(x, y, z, 13, 1, 0);}
		if(stoneBlocks.indexOf(block) >= 0){
			smash(x, y, z, block, 1, dat);}
		if(block == 48){
			smash(x, y, z, 48, 1, 0);}
		if(block == 87){
			smash(x, y, z, 198, 1, 0);}
		if(block == 196){
			smash(x, y, z, 474, ip, 0);}
		if(block == 197){
			smash(x, y, z, 475, ip, 0);}
		if(block == 16){
			smash(x, y, z, 263, 1, 0);}
		if(block == 21){
			smash(x, y, z, 351, 6, 4);}
		if(block == 24 && (dat >= 0 && dat <= 2)) {
			smash(x, y, z, 24, 1, dat);}
		if(block == 56){
			smash(x, y, z, 264, 1, 0);}
		if(block == 62){
			smash(x, y, z, 61, 1, 0);}
		if(block == 73){
			smash(x, y, z, 331, 4, 0);}
		if(block == 74){
			smash(x, y, z, 331, 4, 0);}
		if(block == 89){
			smash(x, y, z, 348, 4, 0);}
		if(block == 129){
			smash(x, y, z, 388, 1, 0);}
		if(block == 43){
			smash(x, y, z, 44, 2, dat);}
		if(block == 155 && (dat >= 0 && dat <= 2)) {
			smash(x, y, z, 155, 1, dat);}
		if(block == 159){
			smash(x, y, z, 159, 1, dat);}
		if(block == 13){
			smash(x, y, z, 12, 1, 0);}
		if(block == 12){
			smash(x, y, z, 203, 1, 0);}
		if(block == 98){
			smash(x, y, z, 98, 1, 2);}
		if(block == 24){
			smash(x, y, z, 12, 1, 0);}
		if(block == 1){
			if(dat==0) {
				smash(x, y, z, 464, ip, 0);
			}
			if(dat>0){smash(x,y,z,1,1,dat);}
		}
		if(block == 15){
			smash(x, y, z, 472, ip, 0);}
		if(block == 14){
			smash(x, y, z, 473, ip, 0);}
		if(block == 205){
			smash(x, y, z, 474, ip, 0);}
		if(block == 188){
			smash(x, y, z, 475, ip, 0);}
		if(block == 189){
			smash(x, y, z, 479, ip, 0);}
		if(block == 190){
			smash(x, y, z, 480, ip, 0);}
		//durability
		if(item == 481 && data == 60)
			Entity.setCarriedItem(Player.getEntity(), parseInt(0), 0, 0);
		else if(item == 482 && data == 132)
			Entity.setCarriedItem(Player.getEntity(), parseInt(0), 0, 0);
		else if(item == 483 && data == 251)
			Entity.setCarriedItem(Player.getEntity(), parseInt(0), 0, 0);
		else if(item == 484 && data == 33)
			Entity.setCarriedItem(Player.getEntity(), parseInt(0), 0, 0);
		else if(item == 485 && data == 1562)
			Entity.setCarriedItem(Player.getEntity(), parseInt(0), 0, 0);
		else if(item == 495 && data == 1562)
			Entity.setCarriedItem(Player.getEntity(), parseInt(0), 0, 0);
	}
	if(block == 18){
		if(item == 486 || item == 487){
			data++;
			Entity.setCarriedItem(Player.getEntity(), parseInt(item), count, data);
			crook(x, y, z, dat, 18);
		}
	}
	if(block == 161){
		if(item == 486 || item == 487){
			data++;
			Entity.setCarriedItem(Player.getEntity(), parseInt(item), count, data);
			crook(x, y, z, dat, 161);
		}
	}
	if(item == 486 && data == 60){
		Entity.setCarriedItem(Player.getEntity(), parseInt(0), 0, 0);
	}
	if(item == 487 && data == 132){
		Entity.setCarriedItem(Player.getEntity(), parseInt(0), 0, 0);
	}
	if(block == 193){
		preventDefault();
		Level.destroyBlock(x, y, z, false);
		if(item == 486 || item == 487){
			Level.dropItem(x + .5, y, z + .5, 0, 287, 1, 0);
			data++;
			Entity.setCarriedItem(Player.getEntity(), parseInt(item), count, data);
			crook(x, y, z, dat, 193);
		}
	}
	if(block == 199 || block == 200 || block == 204){
		preventDefault();
		Level.destroyBlock(x, y, z, false);
		if(dat == 0){
			Level.dropItem(x + .5, y + .5, z + .5, 0, 460, 1, 0);
		}
		if(dat == 1){
			Level.dropItem(x + .5, y + .5, z + .5, 0, 461, 1, 0);
		}
		if(dat == 2){
			Level.dropItem(x + .5, y + .5, z + .5, 0, 462, 1, 0);
		}
		if(dat == 3){
			Level.dropItem(x + .5, y + .5, z + .5, 0, 463, 1, 0);
		}
		if(dat == 4){
			Level.dropItem(x + .5, y + .5, z + .5, 0, 492, 1, 0);
		}
		if(dat == 5){
			Level.dropItem(x + .5, y + .5, z + .5, 0, 491, 1, 0);
		}
	}
	if(block == 90){
		preventDefault();
		Level.destroyBlock(x, y, z, false);
		Level.dropItem(x + .5, y, z, 0, 3, 1, 0);
	}
	if(block == 194){
		preventDefault();
		Level.destroyBlock(x, y, z, false);
		Level.dropItem(x+.5, y, z+.5, 0, 194, 1, 0);
	}
	if(block == 195){
		preventDefault();
		Level.destroyBlock(x, y, z, false);
		Level.dropItem(x+.5, y, z+.5, 0, 195, 1, 0);
	}
}

//warning when destroying barrels full of liquid
function startDestroyBlock(x, y, z, side){
	var block = Level.getTile(x, y, z);
	if(block == 200 || block == 201 || block == 204)
		ModPE.showTipMessage("Make sure you empty the barrel first \n or the liquid will be lost!");
}

//making stuff get mossy
function mossMaterial(x, y, z){
	var b0 = Level.getTile(x, y-1, z);
	var b1 = Level.getTile(x-1, y-1, z);
	var b2 = Level.getTile(x+1, y-1, z);
	var b3 = Level.getTile(x, y-1, z-1);
	var b4 = Level.getTile(x, y-1, z+1);
	var b5 = Level.getTile(x-1, y-1, z-1);
	var b6 = Level.getTile(x-1, y-1, z+1);
	var b7 = Level.getTile(x+1, y-1, z-1);
	var b8 = Level.getTile(x+1, y-1, z+1);

	if(b0 == 4){
		Level.setTile(x, y-1, z, 48);
	}
	if(b1 == 4){
		Level.setTile(x-1, y-1, z, 48);
	}
	if(b2 == 4){
		Level.setTile(x+1, y-1, z, 48);
	}
	if(b3 == 4){
		Level.setTile(x, y-1, z-1, 48);
	}
	if(b4 == 4){
		Level.setTile(x, y-1, z+1, 48);
	}
	if(b5 == 4){
		Level.setTile(x-1, y-1, z-1, 48);
	}
	if(b6 == 4){
		Level.setTile(x-1, y-1, z+1, 48);
	}
	if(b7 == 4){
		Level.setTile(x+1, y-1, z-1, 48);
	}
	if(b8 == 4){
		Level.setTile(x+1, y-1, z+1, 48);
	}
	if(b0 == 98){
		Level.setTile(x, y-1, z, 98, 1);
	}
	if(b1==98){
		Level.setTile(x-1, y-1, z, 98, 1);
	}
	if(b2 == 98){
		Level.setTile(x+1, y-1, z, 98, 1);
	}
	if(b3 == 98){
		Level.setTile(x, y-1, z-1, 98, 1);
	}
	if(b4 == 98){
		Level.setTile(x, y-1, z+1, 98, 1);
	}
	if(b5 == 98){
		Level.setTile(x-1, y-1, z-1, 98, 1);
	}
	if(b6 == 98){
		Level.setTile(x-1, y-1, z+1, 98, 1);
	}
	if(b7 == 98){
		Level.setTile(x+1, y-1, z-1, 98, 1);
	}
	if(b8 == 98){
		Level.setTile(x+1, y-1, z+1, 98, 1);
	}
}
 
function witchWater(x, y, z, dat){
	var my = Level.getTile(x, y-1, z);
	if(my == 110){
		setTile(x, y, z, 204, dat);
	}
} 

function tappedBarrel(x,y,z,item,data){
	if (item == 363 || item == 364 || item == 319 || item == 320 || item == 365 || item == 366){ //Raw beef ,steak, raw porkchop, cooked porkchop, raw chicken, cooked chicken
		Level.compost(x,y,z,0.20);
		dropCompost(x, y, z);
		removeItem(item, 1, data);
	}
	if(item == 103 || item == 86 || item == 91){ //melon (block), pumpkin, jack 'o' lantern
		Level.compost(x,y,z,0.167);
		dropCompost(x, y, z);
		removeItem(item, 1, data);
	}
	if(item == 297 || item == 400){ //bread, pumpkin pie
		Level.compost(x,y,z,0.143);
		dropCompost(x, y, z);
		removeItem(item, 1, data);
	}
	if(item == 6 || item == 18 || item == 161){ //Saplings, Leaves
		Level.compost(x,y,z,0.125);
		dropCompost(x, y, z);
		removeItem(item, 1, data);
	}
	if(item == 37 || item == 38 || item == 39 || item == 40 || item == 260 || item == 81 || item == 111 || item == 106){ //all small flowers type (37, 38), brown mushroom, red mushroom, apple, cactus, lilypad, vines 
		Level.compost(x,y,z,0.10);
		dropCompost(x, y, z);
		removeItem(item, 1, data);
	}
	if(item == 296 || item == 391 || item == 392 || item == 393 || item == 344 || item == 338 || item == 457 || item == 31){	//Wheat, Carrot, Potato, baked potato, egg, sugar cane, beetroot, tall grass
		Level.compost(x,y,z,0.077);
		dropCompost(x, y, z);
		removeItem(item, 1, data);
	}
	if(item == 287 || item == 360 || item == 490){ //strings, melon slice, silk worm
		Level.compost(x,y,z,0.04);
		dropCompost(x, y, z);
		removeItem(item, 1, data);
	} 
}

Level.compost = function (x, y, z, fill){
filled += fill;
	if (filled < 1)
		ModPE.showTipMessage("Filled: " + Math.floor(filled * 100) + "%");
	else
		ModPE.showTipMessage("Filled: " + (Math.floor(filled * 100) - 100) + "%");
};

function dropCompost(x, y, z) {
	if(filled >= 1) {
	 	Level.dropItem(x, y+1, z, 0, 3, 1, 0);
	 	filled -= 1;
	}
}

function removeItem(item, amount, data){
	var count = Player.getCarriedItemCount();
	var data = Player.getCarriedItemData();
	var newcount = count - amount;
	Entity.setCarriedItem(Player.getEntity(), parseInt(item), newcount, data);
}

//joining the level
function newLevel(){
	clientMessage(message+"Welcome to ExNihilo PE 4.2 \nBeta Release 2 Use /update to see a changelog for 4.2");
} 
 
//sieve rewards
function reward(x, y, z, outputId, outputData){
	var tmp = Level.dropItem(x + 0.5, y, z + 0.5, 0, outputId, 1, outputData);
	Entity.setVelX(tmp, Entity.getVelX(tmp) / 2);
	Entity.setVelZ(tmp, Entity.getVelZ(tmp) / 2);
} 

//planting seeds
function seeding(x, y, z, plant, meta){
	var item = Player.getCarriedItem();
	removeItem(item, 1, 0);
	Level.setTile(x, y+1, z, plant, meta);
} 

var wood = false;
var stone = false;
var iron = false;
var gold = false;
var diamond = false;
var emerald = false;

function woodDestroy(){
	for(i = 0; i < 256; i++){
		Block.setDestroyTime(i, 0.25);
	}
	Block.setDestroyTime(7, -1);
	Block.setDestroyTime(120, -1);
}

function stoneDestroy(){
	for(i = 0; i < 256; i++){
		Block.setDestroyTime(i, 0.15);
	}
	Block.setDestroyTime(7, -1);
	Block.setDestroyTime(120, -1);
}

function ironDestroy(){
	for(i = 0; i < 256; i++){
		Block.setDestroyTime(i, 0.1);
	}
	Block.setDestroyTime(7, -1);
	Block.setDestroyTime(120, -1);
}

function diamondDestroy(){
	for(i = 0; i < 256; i++){
		Block.setDestroyTime(i, 0.08);
	}
	Block.setDestroyTime(7, -1);
	Block.setDestroyTime(120, -1);
}

function emeraldDestroy(){
	for(i = 0; i < 256; i++){
		Block.setDestroyTime(i, 0.08);
	}
	Block.setDestroyTime(7, -1);
	Block.setDestroyTime(120, -1);
}

function goldDestroy(){
	for(var i = 0; i < 256; i++){
		Block.setDestroyTime(i, 0.04);
	}
	Block.setDestroyTime(7, -1);
	Block.setDestroyTime(120, -1);
}

function defaultDestroy(){
	for(var i = 0; i < 256; i++){
		Block.setDestroyTime(i, defaultDestroyTime[i]);
	}
}
 
function modTick(){
	var X = Player.getX();
	var Y = Player.getY();
	var Z = Player.getZ();
	//Use !wood instead of wood == false
	if(Player.getCarriedItem() == 481 && !wood){
		woodDestroy();
		wood = true;
	}
	if(Player.getCarriedItem() == 482 && !stone){
		stoneDestroy();
		stone = true;
	}
	if(Player.getCarriedItem() == 483 && !iron){
		ironDestroy();
		iron = true;
	}
	if(Player.getCarriedItem() == 484 && !gold){
		goldDestroy();
		gold = true;
	}
	if(Player.getCarriedItem() == 485 && !diamond){
		diamondDestroy();
		diamond = true;
	}
	if(Player.getCarriedItem() == 495 && !emerald){
		emeraldDestroy();
		emerald = true;
	}
	//Use wood instead of wood == true
	if(Player.getCarriedItem() !== 481 && wood){
		defaultDestroy();
		wood = false;
	}
	if(Player.getCarriedItem() !== 482 && stone){
		defaultDestroy();
		stone = false;
	}
	if(Player.getCarriedItem() !== 483 && iron){
		defaultDestroy();
		iron = false;
	}
	if(Player.getCarriedItem() !== 484 && gold){
		defaultDestroy();
		gold = false;
	}
	if(Player.getCarriedItem() !== 485 && diamond){
		defaultDestroy();
		diamond = false;
	}
	if(Player.getCarriedItem() !== 495 && emerald){
		defaultDestroy();
		emerald = false;
	}
}

function smash(x, y, z, outputId, outputCount, outputData){
	preventDefault();
	Level.destroyBlock(x, y, z, false);
	Level.dropItem(x + .5, y, z + .5, 0, outputId, outputCount, outputData);
}

function crook(x, y, z, dat, b) {
var apple = Math.floor(Math.random()*100)+1;
var sapling = Math.floor(Math.random()*15)+1;
var silk = Math.floor(Math.random()*20)+1;
	if(silk==20) {
		Level.dropItem(x +.5 , y +.5 , z +.5 ,0,490,1);
	}
	if(b==18) {
		if(sapling==15) {
			if(dat==0||dat==4){
				Level.dropItem(x+.5, y+.5, z+.5,0,6,1,0);
			}
			if(dat==1||dat==5){
				Level.dropItem(x +.5 , y +.5 , z +.5 ,0,6,1,1);
			}
			if(dat==2||dat==6){
				Level.dropItem(x +.5 , y +.5 , z +.5 ,0,6,1,2);
			}
			if(dat==3||dat==7){
				Level.dropItem(x +.5 , y +.5 , z +.5 ,0,6,1,3);
			}
		}
	}
	if(b==161) {
		if(sapling==15) {
			if(dat==0||dat==4){
				Level.dropItem(x +.5, y+.5, z+.5,0,6,1,4);
			}
			if(dat==1||dat==5){
				Level.dropItem(x+.5,y+.5,z+.5,0,6,1,5);
			}
		}
	}
	if(b==18||b==161) {
		if(apple==100) {
			Level.dropItem(x+.5,y+.5,z+.5,0,260,1);
		}
	}
}

function removeItem(item, amount, data){
	var count = Player.getCarriedItemCount();
	var data = Player.getCarriedItemData();
	var newcount = count - amount;
	Entity.setCarriedItem(Player.getEntity(), parseInt(item), newcount, data);
}

function reward(x, y, z, out, data){
	Level.dropItem(x + .5, y + 1, z + .5, 0, out, 1, data);
}

var r0 = [1,2,3,4,5,6,7,8,9,10,11,13,14,15];
var r1 = [16,17,18,19,20,21,22,23,24,25,26,27,28,29];
var r2 = [30,31,32,33,34.35,36,37,38,39,40,41,42];
var r3 = [43,44,45,46,47,48,49,50,51,52,53,54];
var r4 = [55,56,57,58,59,60,61,62,63,64,65];
var r5 = [66,67,68,69,70,71,72,73,74,75];
var r6 = [76,77,78,79,80,81,82,83,84];
var r7 = [85,86,87,88,89,90,91,92];
var r8 = [93,94,95,96,97,98,99];
var r9 = [100,101,102,103,104,105];
var r10 = [106,107,108,109,110];
var r11 = [111,112,113,114];
var r12 = [115,116,117];
var r13 = [118,119,120];
//sieve
function sieve(x, y, z, rnd, input){
	var d;
	if(r0.indexOf(rnd) >= 0){
		reward(x, y, z, input[0], 0);
	}
	if(r1.indexOf(rnd) >= 0){
		reward(x, y, z, input[1], 0);
	}
	if(r2.indexOf(rnd) >= 0){
		reward(x, y, z, input[2], 0);
	}
	if(r3.indexOf(rnd) >= 0){
		reward(x, y, z, input[3], 0);
	}
	if(r4.indexOf(rnd) >= 0){
		reward(x, y, z, input[4], 0);
	}
	if(r5.indexOf(rnd) >= 0){
		d = 0;
		if(input == dust){
			d = 15;
		}
		reward(x, y, z, input[5], d);
	}
	if(r6.indexOf(rnd) >= 0){
		d = 0;
		if(input == sand){
			d = 3;
		}
		if(input == dust){
			d = 15;
		}
		reward(x, y, z, input[6], d);
	}
	if(r7.indexOf(rnd) >= 0){
		d = 0;
		if(input == sand){
			d = 3;
		}
		if(input == dust){
			d = 15;
		}
		reward(x, y, z, input[7], d);
	}
	if(r8.indexOf(rnd) >= 0){
		reward(x, y, z, input[8], 0);
	}
	if(r9.indexOf(rnd) >= 0){
		d = 0;
		if(input == gravel){
			d=4;
		}
		reward(x, y, z, input[9], d);
	}
	if(r10.indexOf(rnd) >= 0){
		d = 0;
		if(input == gravel){
			d = 4;
		}
		reward(x, y, z, input[10], d);
	}
	if(r11.indexOf(rnd) >= 0){
		d = 0;
		if(input == gravel){
			d = 4;
		}
		reward(x, y, z, input[11], d);
	}
	if(r12.indexOf(rnd) >= 0){
		reward(x, y, z, input[12], 0);
	}
	if(r13.indexOf(rnd)	>= 0){
		reward(x, y, z, input[13], 0);
	}
}

function attackHook(attacker, victim){
	if(Entity.getMobSkin(victim)=="mob/cow.png"){
		var eX = Entity.getX(victim);
		var eY = Entity.getY(victim);
		var eZ = Entity.getZ(victim);
		var item = Player.getCarriedItem();
		if(item == 478){
			preventDefault();
			Entity.remove(victim);
			Level.spawnMob(eX, eY+1, eZ, 16, "mob/mooshroom.png");
		}
	}
}

function cruc(mb){
	ca -= mb;
	if(liquid == 1)
		ModPE.showTipMessage("Lava: "+ca+"mb");
	if(liquid == 2)
		ModPE.showTipMessage("Water: "+ca+"mb");
}

function procCmd(c){
	var cmd = c.split(" ");
	if(cmd[0]=="update"){
		clientMessage("Fixed:\n-Netherrack not dropping NetherGravel. \n-Fixed the -ite blocks bug. \n-fixed composting. \n-fixed crucible.");
		clientMessage("Bugs:\n-");	
	}
}