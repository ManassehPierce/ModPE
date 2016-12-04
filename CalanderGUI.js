var GUI, DirtBG, CalendarBG, ExitBTN, CalendarTxt, Bars, txt, txt2;
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

var season = "";
var day = "";
var month = "";
var hour = "";
var temp = 0;
var thirst = 0;

function newLevel(){
	Calendar.button();
}

function modTick(){
	ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
		txt.setText('Temperature: '+temp);
		txt2.setText('Thirst: '+thirst);
	}}));
}

function dip2px(dips){
	return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}

var Calendar = new Object;

Calendar.button = function(){
	ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
		try{
			//ffff8300
			var tempThirstLayout = new android.widget.LinearLayout(ctx);
			tempThirstLayout.setOrientation(1);
			var layout = new android.widget.LinearLayout(ctx);
			layout.setOrientation(1);
			
			txt = new android.widget.TextView(ctx);
			txt.setTextSize(16);
			txt.setText('Temperature: '+temp);
			txt.setGravity(android.view.Gravity.LEFT);
			txt.setTypeface(MinecraftButtonLibrary.ProcessedResources.font);
			txt.setTextColor(android.graphics.Color.parseColor("#ffff8300"));
			tempThirstLayout.addView(txt);
			
			txt2 = new android.widget.TextView(ctx);
			txt2.setTextSize(16);
			txt2.setText('Thirst: '+thirst);
			txt2.setGravity(android.view.Gravity.LEFT);
			txt2.setTypeface(MinecraftButtonLibrary.ProcessedResources.font);
			txt2.setTextColor(android.graphics.Color.BLUE);
			tempThirstLayout.addView(txt2);
			
			var cBtn = new MinecraftButton();
			cBtn.setText('C');
			cBtn.setLayoutParams(new android.view.ViewGroup.LayoutParams(dip2px(40), dip2px(40)));
			cBtn.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					Calendar.Init();
				}
			}));
			layout.addView(cBtn);
			
			Bars = new android.widget.PopupWindow(tempThirstLayout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
			Bars.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
			Bars.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, dip2px(5), dip2px(25));
			GUI = new android.widget.PopupWindow(layout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
			GUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
			GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, dip2px(40), 0);
		}
		catch(err){
			clientMessage("Error in Button: "+err);
		}
	}}));
};

Calendar.Init = function(){
	ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
		try{
			DirtBG = new android.widget.PopupWindow(ctx);
			CalendarBG = new android.widget.PopupWindow(ctx);
			
			var exitLayout = new android.widget.LinearLayout(ctx);
			exitLayout.setOrientation(1);
			var txtLayout = new android.widget.LinearLayout(ctx);
			txtLayout.setOrientation(1);
			var dirtLayout = new android.widget.RelativeLayout(ctx);
			var calendarLayout = new android.widget.RelativeLayout(ctx);
			
			var background = new android.view.View(ctx);
			var dirt = new android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createScaledBitmap(android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/gui/background.png")), dip2px(64), dip2px(64), false));
			dirt.setColorFilter(android.graphics.Color.rgb(70, 70, 70), android.graphics.PorterDuff.Mode.MULTIPLY);
			dirt.setTileModeXY(android.graphics.Shader.TileMode.REPEAT, android.graphics.Shader.TileMode.REPEAT);
			background.setBackgroundDrawable(dirt);
			dirtLayout.addView(background);
			
			var calendar = new android.view.View(ctx);
			var calendarImg = new android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createScaledBitmap(android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/gui/calendarBG.png")), dip2px(248)*2, dip2px(166)*2, false));
			calendar.setBackgroundDrawable(calendarImg);
			calendarLayout.addView(calendar);
			
			var txt = new android.widget.TextView(ctx);
			txt.setTextSize(16);
			txt.setText('Calendar\nSeason: '+season+'\nDay: '+day+'\nMonth: '+month+'\nHour: '+hour);
			txt.setGravity(android.view.Gravity.CENTER);
			txt.setTypeface(MinecraftButtonLibrary.ProcessedResources.font);
			txt.setLineSpacing(dip2px(13), 1);
			txt.setTextColor(android.graphics.Color.BLACK);
			txtLayout.addView(txt);
			
			var xBtn = new MinecraftButton();
			xBtn.setText('X');
			xBtn.setLayoutParams(new android.view.ViewGroup.LayoutParams(dip2px(40), dip2px(40)));
			xBtn.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					ExitBTN.dismiss();
					CalendarTxt.dismiss();
					CalendarBG.dismiss();
					DirtBG.dismiss();
				}
			}));
			exitLayout.addView(xBtn);
			
			DirtBG.setContentView(dirtLayout);
			DirtBG.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth());
			DirtBG.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight());
			DirtBG.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
			DirtBG.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
			CalendarBG.setContentView(calendarLayout);
			CalendarBG.setWidth(dip2px(248)*2);
			CalendarBG.setHeight(dip2px(166)*2);
			CalendarBG.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
			CalendarBG.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.CENTER, 0, 0);
			CalendarTxt = new android.widget.PopupWindow(txtLayout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
			CalendarTxt.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
			CalendarTxt.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.CENTER, 0, 0);
			ExitBTN = new android.widget.PopupWindow(exitLayout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
			ExitBTN.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
			ExitBTN.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
			
		}
		catch(err){
			clientMessage("Error in Init: "+err);
		}
	}}));
};

function leaveGame(){
	ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
		if(GUI != null){
			GUI.dismiss();
			GUI = null;
		}
		if(DirtBG != null){
			DirtBG.dismiss();
			DirtBG = null;
		}
		if(CalendarBG != null){
			CalendarBG.dismiss();
			CalendarBG = null;
		}
		if(CalendarTxt != null){
			CalendarTxt.dismiss();
			CalendarTxt = null;
		}
		if(Bars != null){
			Bars.dismiss();
			Bars = null;
		}
		if(ExitBTN != null){
			ExitBTN.dismiss();
			ExitBTN = null;
		}
	}}));
}

//### BUTTON LIB BY DESNO365 ###//

var MinecraftButtonLibrary = {};

// Customization
// These are the default values of the library, you can change them to make the buttons look how you want to.
MinecraftButtonLibrary.defaultButtonPadding = 8;
MinecraftButtonLibrary.defaultButtonTextSize = 16;
MinecraftButtonLibrary.defaultButtonTextLineSpacing = 4;
MinecraftButtonLibrary.defaultButtonTextColor = "#FFDDDDDD";
MinecraftButtonLibrary.defaultButtonTextPressedColor = "#FFFBFF97";
MinecraftButtonLibrary.defaultButtonTextShadowColor = "#FF292929";

// Variables
MinecraftButtonLibrary.Resources = {};
MinecraftButtonLibrary.ProcessedResources = {};

MinecraftButtonLibrary.context = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
MinecraftButtonLibrary.metrics = new android.util.DisplayMetrics();
MinecraftButtonLibrary.context.getWindowManager().getDefaultDisplay().getMetrics(MinecraftButtonLibrary.metrics);
MinecraftButtonLibrary.sdcard = new android.os.Environment.getExternalStorageDirectory();
MinecraftButtonLibrary.LOG_TAG = "Minecraft Button Library ";

MinecraftButtonLibrary.ProcessedResources.font = null;
MinecraftButtonLibrary.ProcessedResources.mcNormalNineDrawable = null;
MinecraftButtonLibrary.ProcessedResources.mcPressedNineDrawable = null;

//########################################################################################################################################################
// LIBRARY
//########################################################################################################################################################

function MinecraftButton(enableSound)
{
	if(enableSound == null)
		enableSound = true;

	var button = new android.widget.Button(MinecraftButtonLibrary.context);
	button.setTextSize(MinecraftButtonLibrary.defaultButtonTextSize);
	button.setOnTouchListener(new android.view.View.OnTouchListener()
	{
		onTouch: function(v, motionEvent)
		{
			var action = motionEvent.getActionMasked();
			if(action == android.view.MotionEvent.ACTION_DOWN)
			{
				// button pressed
				MinecraftButtonLibrary.changeToPressedState(v);
			}
			if(action == android.view.MotionEvent.ACTION_CANCEL || action == android.view.MotionEvent.ACTION_UP)
			{
				// button released
				MinecraftButtonLibrary.changeToNormalState(v);
				
				var rect = new android.graphics.Rect(v.getLeft(), v.getTop(), v.getRight(), v.getBottom());
				if(rect.contains(v.getLeft() + motionEvent.getX(), v.getTop() + motionEvent.getY())) // detect if the event happens inside the view
				{
					// onClick will run soon

					// play sound
					if(enableSound)
						Level.playSoundEnt(Player.getEntity(), "random.click", 100, 30);
				}
			}
			if(action == android.view.MotionEvent.ACTION_MOVE)
			{
				var rect = new android.graphics.Rect(v.getLeft(), v.getTop(), v.getRight(), v.getBottom());
				if(rect.contains(v.getLeft() + motionEvent.getX(), v.getTop() + motionEvent.getY())) // detect if the event happens inside the view
				{
					// pointer inside the view
					if(v.getTag() == false)
					{
						// restore pressed state
						button.setTag(true); // is pressed?

						MinecraftButtonLibrary.changeToPressedState(v);
					}
				} else
				{
					// pointer outside the view
					if(v.getTag() == true)
					{
						// restore pressed state
						button.setTag(false); // is pressed?

						MinecraftButtonLibrary.changeToNormalState(v);
					}
				}
			}

			return false;
		}
	});
	if (android.os.Build.VERSION.SDK_INT >= 14)
		button.setAllCaps(false);
	MinecraftButtonLibrary.setButtonBackground(button, MinecraftButtonLibrary.ProcessedResources.mcNormalNineDrawable);
	button.setTag(false); // is pressed?
	button.setSoundEffectsEnabled(false);
	button.setGravity(android.view.Gravity.CENTER);
	button.setTextColor(android.graphics.Color.parseColor(MinecraftButtonLibrary.defaultButtonTextColor));
	button.setPadding(MinecraftButtonLibrary.convertDpToPixel(MinecraftButtonLibrary.defaultButtonPadding), MinecraftButtonLibrary.convertDpToPixel(MinecraftButtonLibrary.defaultButtonPadding), MinecraftButtonLibrary.convertDpToPixel(MinecraftButtonLibrary.defaultButtonPadding), MinecraftButtonLibrary.convertDpToPixel(MinecraftButtonLibrary.defaultButtonPadding));
	button.setLineSpacing(MinecraftButtonLibrary.convertDpToPixel(MinecraftButtonLibrary.defaultButtonTextLineSpacing), 1);
	// apply custom font with shadow
	button.setTypeface(MinecraftButtonLibrary.ProcessedResources.font);
	button.setPaintFlags(button.getPaintFlags() | android.graphics.Paint.SUBPIXEL_TEXT_FLAG);
	if (android.os.Build.VERSION.SDK_INT >= 19) // KitKat
		button.setShadowLayer(1, Math.round((button.getLineHeight() - MinecraftButtonLibrary.convertDpToPixel(MinecraftButtonLibrary.defaultButtonTextLineSpacing)) / 8), Math.round((button.getLineHeight() - MinecraftButtonLibrary.convertDpToPixel(MinecraftButtonLibrary.defaultButtonTextLineSpacing)) / 8), android.graphics.Color.parseColor(MinecraftButtonLibrary.defaultButtonTextShadowColor));
	else
		button.setShadowLayer(0.0001, Math.round((button.getLineHeight() - MinecraftButtonLibrary.convertDpToPixel(MinecraftButtonLibrary.defaultButtonTextLineSpacing)) / 8), Math.round((button.getLineHeight() - MinecraftButtonLibrary.convertDpToPixel(MinecraftButtonLibrary.defaultButtonTextLineSpacing)) / 8), android.graphics.Color.parseColor(MinecraftButtonLibrary.defaultButtonTextShadowColor));

	return button;
}

// ######### BUTTON UTILS functions #########

MinecraftButtonLibrary.setButtonBackground = function(button, background)
{
	if (android.os.Build.VERSION.SDK_INT >= 16)
		button.setBackground(background);
	else
		button.setBackgroundDrawable(background);
}

MinecraftButtonLibrary.convertDpToPixel = function(dp)
{
	var density = MinecraftButtonLibrary.metrics.density;

	return (dp * density);
}

MinecraftButtonLibrary.changeToNormalState = function(button)
{
	MinecraftButtonLibrary.setButtonBackground(button, MinecraftButtonLibrary.ProcessedResources.mcNormalNineDrawable);
	button.setTextColor(android.graphics.Color.parseColor(MinecraftButtonLibrary.defaultButtonTextColor));
	// reset pressed padding
	button.setPadding(MinecraftButtonLibrary.convertDpToPixel(MinecraftButtonLibrary.defaultButtonPadding), MinecraftButtonLibrary.convertDpToPixel(MinecraftButtonLibrary.defaultButtonPadding), MinecraftButtonLibrary.convertDpToPixel(MinecraftButtonLibrary.defaultButtonPadding), MinecraftButtonLibrary.convertDpToPixel(MinecraftButtonLibrary.defaultButtonPadding));
}

MinecraftButtonLibrary.changeToPressedState = function(button)
{
	MinecraftButtonLibrary.setButtonBackground(button, MinecraftButtonLibrary.ProcessedResources.mcPressedNineDrawable);
	button.setTextColor(android.graphics.Color.parseColor(MinecraftButtonLibrary.defaultButtonTextPressedColor));
	// make the effect of a pressed button with padding
	button.setPadding(MinecraftButtonLibrary.convertDpToPixel(MinecraftButtonLibrary.defaultButtonPadding), MinecraftButtonLibrary.convertDpToPixel(MinecraftButtonLibrary.defaultButtonPadding) + MinecraftButtonLibrary.convertDpToPixel(2), MinecraftButtonLibrary.convertDpToPixel(MinecraftButtonLibrary.defaultButtonPadding), MinecraftButtonLibrary.convertDpToPixel(MinecraftButtonLibrary.defaultButtonPadding) - MinecraftButtonLibrary.convertDpToPixel(2));
}

// ######### END - BUTTON UTILS functions #########


// ######### CREATE NINE PATCH functions #########

MinecraftButtonLibrary.createNinePatchDrawables = function()
{
	var mcButtonNormalBitmap = MinecraftButtonLibrary.getMinecraftButtonBitmap();
	var mcButtonPressedBitmap = MinecraftButtonLibrary.getMinecraftButtonPressedBitmap();

	var mcNormalNinePatch = new android.graphics.NinePatch(mcButtonNormalBitmap, mcButtonNormalBitmap.getNinePatchChunk(), null);
	var mcPressedNinePatch = new android.graphics.NinePatch(mcButtonPressedBitmap, mcButtonPressedBitmap.getNinePatchChunk(), null);

	// here is used a deprecated method that doesn't deals with density
	//noinspection deprecation
	MinecraftButtonLibrary.ProcessedResources.mcNormalNineDrawable = new android.graphics.drawable.NinePatchDrawable(mcNormalNinePatch);
	MinecraftButtonLibrary.ProcessedResources.mcNormalNineDrawable.setFilterBitmap(false);
	//noinspection deprecation
	MinecraftButtonLibrary.ProcessedResources.mcPressedNineDrawable = new android.graphics.drawable.NinePatchDrawable(mcPressedNinePatch);
	MinecraftButtonLibrary.ProcessedResources.mcPressedNineDrawable.setFilterBitmap(false);
}

MinecraftButtonLibrary.getMinecraftButtonBitmap = function()
{
	var density = MinecraftButtonLibrary.metrics.density;

	if(density < 1)
	{
		ModPE.log(MinecraftButtonLibrary.LOG_TAG + "Density: " + density + ", ldpi");
		return MinecraftButtonLibrary.decodeImageFromBase64(MinecraftButtonLibrary.Resources.minecraftButtonStateNormalLDPI);
	}
	if(density >= 1 && density < 1.5)
	{
		ModPE.log(MinecraftButtonLibrary.LOG_TAG + "Density: " + density + ", mdpi");
		return MinecraftButtonLibrary.decodeImageFromBase64(MinecraftButtonLibrary.Resources.minecraftButtonStateNormalMDPI);
	}
	if(density >= 1.5 && density < 2)
	{
		ModPE.log(MinecraftButtonLibrary.LOG_TAG + "Density: " + density + ", hdpi");
		return MinecraftButtonLibrary.decodeImageFromBase64(MinecraftButtonLibrary.Resources.minecraftButtonStateNormalHDPI);
	}
	if(density >= 2 && density < 2.5)
	{
		ModPE.log(MinecraftButtonLibrary.LOG_TAG + "Density: " + density + ", xhdpi");
		return MinecraftButtonLibrary.decodeImageFromBase64(MinecraftButtonLibrary.Resources.minecraftButtonStateNormalXHDPI);
	}
	if(density >= 2.5)
	{
		ModPE.log(MinecraftButtonLibrary.LOG_TAG + "Density: " + density + ", xxhdpi");
		return MinecraftButtonLibrary.decodeImageFromBase64(MinecraftButtonLibrary.Resources.minecraftButtonStateNormalXXHDPI);
	}

	ModPE.log(MinecraftButtonLibrary.LOG_TAG + "Error: " + density + ", xhdpi");
	return MinecraftButtonLibrary.decodeImageFromBase64(MinecraftButtonLibrary.Resources.minecraftButtonStateNormalXHDPI);
}

MinecraftButtonLibrary.getMinecraftButtonPressedBitmap = function()
{
	var density = MinecraftButtonLibrary.metrics.density;

	if(density < 1)
	{
		ModPE.log(MinecraftButtonLibrary.LOG_TAG + "Density: " + density + ", ldpi");
		return MinecraftButtonLibrary.decodeImageFromBase64(MinecraftButtonLibrary.Resources.minecraftButtonStatePressedLDPI);
	}
	if(density >= 1 && density < 1.5)
	{
		ModPE.log(MinecraftButtonLibrary.LOG_TAG + "Density: " + density + ", mdpi");
		return MinecraftButtonLibrary.decodeImageFromBase64(MinecraftButtonLibrary.Resources.minecraftButtonStatePressedMDPI);
	}
	if(density >= 1.5 && density < 2)
	{
		ModPE.log(MinecraftButtonLibrary.LOG_TAG + "Density: " + density + ", hdpi");
		return MinecraftButtonLibrary.decodeImageFromBase64(MinecraftButtonLibrary.Resources.minecraftButtonStatePressedHDPI);
	}
	if(density >= 2 && density < 2.5)
	{
		ModPE.log(MinecraftButtonLibrary.LOG_TAG + "Density: " + density + ", xhdpi");
		return MinecraftButtonLibrary.decodeImageFromBase64(MinecraftButtonLibrary.Resources.minecraftButtonStatePressedXHDPI);
	}
	if(density >= 2.5)
	{
		ModPE.log(MinecraftButtonLibrary.LOG_TAG + "Density: " + density + ", xxhdpi");
		return MinecraftButtonLibrary.decodeImageFromBase64(MinecraftButtonLibrary.Resources.minecraftButtonStatePressedXXHDPI);
	}

	ModPE.log(MinecraftButtonLibrary.LOG_TAG + "Error: " + density + ", xhdpi");
	return MinecraftButtonLibrary.decodeImageFromBase64(MinecraftButtonLibrary.Resources.minecraftButtonStatePressedXHDPI);
}

MinecraftButtonLibrary.decodeImageFromBase64 = function(base64String)
{
	var byteArray = android.util.Base64.decode(base64String, 0);
	return android.graphics.BitmapFactory.decodeByteArray(byteArray, 0, byteArray.length);
}

// ######### END - CREATE NINE PATCH functions #########


// ######### CREATE TYPEFACE functions #########

MinecraftButtonLibrary.createTypeface = function()
{
	MinecraftButtonLibrary.writeFileFromByteArray(android.util.Base64.decode(MinecraftButtonLibrary.Resources.base64Font, 0), MinecraftButtonLibrary.sdcard + "/minecraft.ttf");
	MinecraftButtonLibrary.ProcessedResources.font = android.graphics.Typeface.createFromFile(MinecraftButtonLibrary.sdcard + "/minecraft.ttf");
	MinecraftButtonLibrary.deleteFile(MinecraftButtonLibrary.sdcard + "/minecraft.ttf");
}

MinecraftButtonLibrary.writeFileFromByteArray = function(byteArray, path)
{
	var file = new java.io.File(path);
	if(file.exists())
		file.delete();
	file.createNewFile();
	var stream = new java.io.FileOutputStream(file);
	stream.write(byteArray);
	stream.close();
	byteArray = null;
}

// ######### END - CREATE TYPEFACE functions #########


// ######### UTILS functions #########

MinecraftButtonLibrary.removeResources = function()
{
	MinecraftButtonLibrary.Resources.minecraftButtonStateNormalLDPI = null;
	MinecraftButtonLibrary.Resources.minecraftButtonStateNormalMDPI = null;
	MinecraftButtonLibrary.Resources.minecraftButtonStateNormalHDPI = null;
	MinecraftButtonLibrary.Resources.minecraftButtonStateNormalXHDPI = null;
	MinecraftButtonLibrary.Resources.minecraftButtonStateNormalXXHDPI = null;
	MinecraftButtonLibrary.Resources.minecraftButtonStatePressedLDPI = null;
	MinecraftButtonLibrary.Resources.minecraftButtonStatePressedMDPI = null;
	MinecraftButtonLibrary.Resources.minecraftButtonStatePressedHDPI = null;
	MinecraftButtonLibrary.Resources.minecraftButtonStatePressedXHDPI = null;
	MinecraftButtonLibrary.Resources.minecraftButtonStatePressedXXHDPI = null;

	MinecraftButtonLibrary.Resources.base64Font = null;
}

MinecraftButtonLibrary.deleteFile = function(path)
{
	var file = new java.io.File(path);

	if(file.isDirectory())
	{
		var directoryFiles = file.listFiles();
		for(var i in directoryFiles)
		{
			deleteFile(directoryFiles[i].getAbsolutePath());
		}
		file.delete();
	}

	if(file.isFile())
		file.delete();
}

// ######### END - UTILS functions #########


//########################################################################################################################################################
// RESOURCES IN BASE64
//########################################################################################################################################################

// backgrounds
MinecraftButtonLibrary.Resources.minecraftButtonStateNormalLDPI = "iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAGG5wT2wAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAADYHRhkAAAAVG5wVGMAAgIJIAAAACgAAAAAAAACAAAAAgAAAAMAAAACMAAAAAAAAAEAAAAHAAAAAgAAAAf/vLGr/7yxqwAAAAH/vLGr/5WGgQAAAAH/cmVnAAAAAf8oJyoMgs1WAAAASUlEQVQY02Pcs3H1fwY8gAmf5NYtexhYGBgYGG5evYZVwfZDh/GbwPD/PwEFjIwEFBByJAPDfwaWbVv2MGw7eIiBgRFuLrIdDADq5BFxvezsVAAAAABJRU5ErkJggg==";
MinecraftButtonLibrary.Resources.minecraftButtonStateNormalMDPI = "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGG5wT2wAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAADYHRhkAAAAVG5wVGMAAgIJIAAAACgAAAAAAAAEAAAABAAAAAYAAAAEMAAAAAAAAAIAAAAOAAAABAAAAA7/vLGr/7yxqwAAAAH/vLGr/5WGgQAAAAH/cmVnAAAAAf8oJyqdu2NqAAAAT0lEQVQ4y2Pcs3H1fwYKABMDhYCFXI1bt+yhsgtuXr1Gksbthw4PcBgw/P8/0C5gZKSOCwbeAPLDgIFasbANmqa3HTwEDV2M4MYVDdRxAQBscxGJWBLxyQAAAABJRU5ErkJggg==";
MinecraftButtonLibrary.Resources.minecraftButtonStateNormalHDPI = "iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGG5wT2wAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAADYHRhkAAAAVG5wVGMAAgIJIAAAACgAAAAAAAAGAAAABgAAAAkAAAAGMAAAAAAAAAMAAAAVAAAABgAAABX/vLGr/7yxqwAAAAH/vLGr/5WGgQAAAAH/cmVnAAAAAf8oJyqPt1DfAAAAV0lEQVRIx2Pcs3H1fwYaAiYGGgOaW8BCC0O3btkzXIPo5tVrVDF0+6HDo6mIAPj/fzSICABGxmEURKMWDFAqYhhWGW0bUu2z7eAhpMyCMxcRk9OGURABAH/ZEZn4HdB3AAAAAElFTkSuQmCC";
MinecraftButtonLibrary.Resources.minecraftButtonStateNormalXHDPI = "iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGG5wT2wAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAADYHRhkAAAAVG5wVGMAAgIJIAAAACgAAAAAAAAIAAAACAAAAAwAAAAIMAAAAAAAAAQAAAAcAAAACAAAABz/vLGr/7yxqwAAAAH/vLGr/5WGgQAAAAH/cmVnAAAAAf8oJypkuTlTAAAAZUlEQVRYw2Pcs3H1f4YBBEwMAwxGHcBCbwu3btkzGgWDPA3cvHqNphZuP3R4NApGeDnA8P//aBSM9DTAyDgaBaMOGHXASC8HGEbrgsGWBrahtdO3HTyEVnYTLNxJrQxGo2BwOQAAWckRqcYME3kAAAAASUVORK5CYII=";
MinecraftButtonLibrary.Resources.minecraftButtonStateNormalXXHDPI = "iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAGG5wT2wAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAADYHRhkAAAAVG5wVGMAAgIJIAAAACgAAAAAAAAMAAAADAAAABIAAAAMMAAAAAAAAAYAAAAqAAAADAAAACr/vLGr/7yxqwAAAAH/vLGr/5WGgQAAAAH/cmVnAAAAAf8oJypAoV45AAAAg0lEQVRo3u3ZwQmAMAyF4UTcfxFPgtZLL9YZFJwmTtCDINQ0/5sgHzxCQzXPk4njDOI8AABEB4xeBl2XTIUAAAi1he7z+tWgWzmoEAAAvIVaxowKAQDAFmoZVSoEAAAAAAAAAIj7FhIuMgAA+txCqfL3lPZSuYxen1JfnWRUCACAHgEPIUcRyZ0dVsEAAAAASUVORK5CYII=";
MinecraftButtonLibrary.Resources.minecraftButtonStatePressedLDPI = "iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAGG5wT2wAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAADYHRhkAAAAVG5wVGMAAgIJIAAAACgAAAAAAAACAAAAAgAAAAIAAAADMAAAAAAAAAEAAAAHAAAAAQAAAAb/KCcqAAAAAf9yZWcAAAABAAAAAQAAAAEAAAABAAAAAQAAAAGZYAV4AAAAb0lEQVQY012OQQqDMBRE34Scwp1QsHgHs7CbGnv9UjzNuIjRxuHD/wzzhq/nMBrKIIENAhA5TUQwS0pUiZIFeK8zEVSAQy5Vpxdq3k3HdYbLq2xTRwBht2T9QxJxSRP588I2d9kmPvqO7ftryb+9AxX7IG5YZYu3AAAAAElFTkSuQmCC";
MinecraftButtonLibrary.Resources.minecraftButtonStatePressedMDPI = "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGG5wT2wAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAADYHRhkAAAAVG5wVGMAAgIJIAAAACgAAAAAAAAEAAAABAAAAAQAAAAGMAAAAAAAAAIAAAAOAAAAAgAAAAz/KCcqAAAAAf9yZWcAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEDO+tuAAAAkklEQVQ4y62SwQrCMAyGvwyfwpswcOwd7EEvbu71Zfg08ZIgi10ZtLm0CSn5/r+R4ToqAGwPRCy3gqV+mdMNgI7KOPnIKaVsgw/WUH++7s0IZCsxhP5Myfa184CgVf5cyJvTgiDarUYixV/wQrtfUC1rjiRim1pPMNlOz8vDSPTQQ++rJ+gvZwA+77WseSevJvgCGagihHTV1j0AAAAASUVORK5CYII=";
MinecraftButtonLibrary.Resources.minecraftButtonStatePressedHDPI = "iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGG5wT2wAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAADYHRhkAAAAVG5wVGMAAgIJIAAAACgAAAAAAAAGAAAABgAAAAYAAAAJMAAAAAAAAAMAAAAVAAAAAwAAABL/KCcqAAAAAf9yZWcAAAABAAAAAQAAAAEAAAABAAAAAQAAAAGqizz1AAAAl0lEQVRIx92VwQqAIAyGXfQU3YKg6B3yUJe0Xj+ip1k3+QOHGXhoO+l0Ch/flIZ+ZBMiPjREkIcFSOPE2ymMK1M4il9QIwtnbbIAqbCwZ91mXYgoLoUQ/NQrWavMIiMYQqJHadVUIJK6iAEXZTUaLihrNOY8WyRcBM+7AkQOfh+/L4CLPx+KtQoQdW0TJtdx5tnyIv9/RDcytSKUL7bTXAAAAABJRU5ErkJggg==";
MinecraftButtonLibrary.Resources.minecraftButtonStatePressedXHDPI = "iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGG5wT2wAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAADYHRhkAAAAVG5wVGMAAgIJIAAAACgAAAAAAAAIAAAACAAAAAgAAAAMMAAAAAAAAAQAAAAcAAAABAAAABj/KCcqAAAAAf9yZWcAAAABAAAAAQAAAAEAAAABAAAAAQAAAAHs/TEDAAAAqUlEQVRYw+2WwQqAIAyGXfQU3YKg6B3yUJe0Xj+ip1ln/8AhBnrYbroxhe/frzSNM5sg4ktDBHkogDRueLsE68YUDr1Ai5CdtUkNEDkL9fuxKoLqNEDxMRaCv0aR1E8R1OcDRphrEp0gzTgUQQ0akMydQROU9RZggSKo7y1gzptzSRMEf0pFUF4DDv7p/txAE/zrgdhPEZTXwNB3wcZz3XlznphXBMUv8AJ9bSKkEsE9twAAAABJRU5ErkJggg==";
MinecraftButtonLibrary.Resources.minecraftButtonStatePressedXXHDPI = "iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAGG5wT2wAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAADYHRhkAAAAVG5wVGMAAgIJIAAAACgAAAAAAAALAAAACwAAAAsAAAARMAAAAAAAAAYAAAAqAAAABgAAACT/KCcqAAAAAf9yZWcAAAABAAAAAQAAAAEAAAABAAAAAQAAAAGV/cSjAAAAzElEQVRo3u2ZQQrCMBBFM9JTuBMEi3cwC93Y6vVFPM14gfzFQIpMfLNMJk0ffD5/WptPZy/Nii0XM9EvDoh2tbHWS3N9V5IXAAD8O8CkbGWptcsFymw8+Jz744qEAABgUBeyWFQJluvw1OVeJAQAAKNmoRLMMBZOQ31CFRICAID8LhQdpVy4UyzbRCcydQAJAQDAqBOZ+7bZJupOJr5+IyEAAMjuQov497Q+b8Kd/Ccvqu5FQgAAkN2Fjod9c+Pzem+bbTr1IyEAAEheX2f8IsSeFAnbAAAAAElFTkSuQmCC";

// font
MinecraftButtonLibrary.Resources.base64Font = "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AICAgID/AP8AAgCAgICAgICAAAAAAQAAAgAAgAOAAAMAABkBMxGAAgABgP6AAAAAAAUAAAAAAgADgAADAAcACwAPABMAACE1IRUlNTMVJREzGQE1MxU9ASEVAQABAP6AgP8AgIABAICAgICAgAGA/oABgICAgICAAAUAAAAAAgADgAADAAcACwAPABMAADE1IRU9ATMVNREzEQE1MxUlNSEVAQCAgP8AgP6AAQCAgICAgIABgP6AAYCAgICAgAAAAAUAAAEAAgACgAADAAcACwAPABMAABE1MxUhNTMVJTUhFSU1MxUhNTMVgAEAgP6AAQD+gIABAIABAICAgICAgICAgICAgAAAAAEAAACAAoADAAALAAAlESE1IREzESEVIREBAP8AAQCAAQD/AIABAIABAP8AgP8AAAEAAP+AAIABAAADAAAVETMRgIABgP6AAAEAAAGAAoACAAADAAARNSEVAoABgICAAAEAAAAAAIABAAADAAAxETMRgAEA/wAAAAUAAAAAAoADgAADAAcACwAPABMAADE1MxU1ETMZATUzFTURMxkBNTMVgICAgICAgIABAP8AAQCAgIABAP8AAQCAgAAABQAAAAACgAOAAAMABwAPABcAGwAAMzUhFQE1MxUBETMRMxUjFSERIzUzNTMRATUhFYABgP8AgP6AgICAAYCAgID+AAGAgIABgICA/wACgP6AgIABgICA/YACgICAAAAAAQAAAAACgAOAAAsAADE1IREjNTM1MxEhFQEAgICAAQCAAgCAgP0AgAAAAAAGAAAAAAKAA4AABwALAA8AEwAXABsAADERMxUhNTMRATUzFT0BIRUBNTMVBREzEQE1IRWAAYCA/gCAAQD+AIABgID+AAGAAQCAgP8AAQCAgICAgAEAgICAAQD/AAEAgIAAAAAABwAAAAACgAOAAAMABwALAA8AEwAXABsAADM1IRUlNTMVIREzEQE1IRUBNTMVBREzEQE1IRWAAYD+AIABgID+gAEA/gCAAYCA/gABgICAgICAAQD/AAEAgIABAICAgAEA/wABAICAAAADAAAAAAKAA4AAAwAHABMAABM1MxU9ATMVExEhETMVIREjNSERgICAgP4AgAGAgAEAAgCAgICAgP2AAQABAIABgID8gAAAAAAEAAAAAAKAA4AAAwAHAAsAEwAAMzUhFSU1MxUhETMRAREhFSEVIRWAAYD+AIABgID9gAKA/gABgICAgICAAYD+gAGAAYCAgIAAAAAABQAAAAACgAOAAAMABwAPABMAFwAAMzUhFTURMxEhETMVIRUhGQE1MxU9ASEVgAGAgP2AgAGA/oCAAQCAgIABAP8AAgCAgP8AAgCAgICAgAADAAAAAAKAA4AAAwAHAA8AACERMxkBNTMVNREhFSMRIREBAICA/oCAAoABgP6AAYCAgIABAIABAP6AAAAHAAAAAAKAA4AAAwAHAAsADwATABcAGwAAMzUhFSURMxEhETMRATUhFSURMxEhETMRATUhFYABgP4AgAGAgP4AAYD+AIABgID+AAGAgICAAQD/AAEA/wABAICAgAEA/wABAP8AAQCAgAAAAAAFAAAAAAKAA4AAAwAHAAsAEwAXAAAzNSEVPQEzFQERMxEBNSE1IREzEQE1IRWAAQCA/gCAAYD+gAGAgP4AAYCAgICAgAGAAQD/AP8AgIABAP4AAgCAgAAAAgAAAAAAgAKAAAMABwAAMREzEQMRMxGAgIABAP8AAYABAP8AAAAAAAIAAP+AAIACgAADAAcAABURMxEDETMRgICAgAGA/oACAAEA/wAAAAAHAAAAAAIAA4AAAwAHAAsADwATABcAGwAAITUzFSU1MxUlNTMVJTUzFT0BMxU9ATMVPQEzFQGAgP8AgP8AgP8AgICAgICAgICAgICAgICAgICAgICAgICAAAAAAAIAAACAAoACAAADAAcAAD0BIRUBNSEVAoD9gAKAgICAAQCAgAAAAAAHAAAAAAIAA4AAAwAHAAsADwATABcAGwAAMTUzFT0BMxU9ATMVPQEzFSU1MxUlNTMVJTUzFYCAgID/AID/AID/AICAgICAgICAgICAgICAgICAgICAgAAABgAAAAACgAOAAAMABwALAA8AEwAXAAAhNTMVAzUzFT0BMxUBNTMVBREzEQE1IRUBAICAgID+AIABgID+AAGAgIABAICAgICAAQCAgIABAP8AAQCAgAAAAAQAAAAAAwADgAADAAcADwATAAAzNSEVJREzETcRIREzETMRATUhFYACAP2AgIABAICA/YACAICAgAKA/YCAAYD/AAGA/gACAICAAAACAAAAAAKAA4AACwAPAAAxETMVITUzESMRIRkBNSEVgAGAgID+gAGAAwCAgP0AAgD+AAMAgIAAAAMAAAAAAoADgAADAAcAEwAAJREzEQM1MxUBESEVIRUhFSERIRUCAICAgP2AAgD+gAGA/oABgIABgP6AAgCAgP2AA4CAgID+gIAAAAAFAAAAAAKAA4AAAwAHAAsADwATAAAzNSEVPQEzFSERMxEBNTMVJTUhFYABgID9gIABgID+AAGAgICAgIACgP2AAgCAgICAgAACAAAAAAKAA4AAAwALAAAlETMRBREhFSERIRUCAID9gAIA/oABgIACgP2AgAOAgP2AgAAAAQAAAAACgAOAAAsAADERIRUhFSEVIREhFQKA/gABAP8AAgADgICAgP6AgAABAAAAAAKAA4AACQAAMREhFSEVIRUhEQKA/gABAP8AA4CAgID+AAAABAAAAAACgAOAAAMACQANABEAADM1IRU1ESM1IREhETMZATUhFYABgIABAP2AgAIAgICAAYCA/gACgP2AAoCAgAAAAAABAAAAAAKAA4AACwAAMREzESERMxEjESERgAGAgID+gAOA/wABAPyAAgD+AAAAAAABAAAAAAGAA4AACwAAMTUzESM1IRUjETMVgIABgICAgAKAgID9gIAAAwAAAAACgAOAAAMABwALAAAzNSEVJTUzFSERMxGAAYD+AIABgICAgICAgAMA/QAABQAAAAACgAOAAAMABwALABMAFwAAIREzEQE1MxUDNTMVAREzESEVIREBNTMVAgCA/wCAgID+AIABAP8AAYCAAYD+gAGAgIABAICA/YADgP8AgP4AAwCAgAAAAAABAAAAAAKAA4AABQAAMREzESEVgAIAA4D9AIAAAwAAAAACgAOAAAMACwATAAABNTMVAREzFTMVIxEhESM1MzUzEQEAgP6AgICAAYCAgIACAICA/gADgICA/YACgICA/IAAAAAAAwAAAAACgAOAAAMACwATAAABNTMVAREzFTMVIxEhESM1MxEzEQEAgP6AgICAAYCAgIACAICA/gADgICA/YABgIABgPyAAAAABAAAAAACgAOAAAMABwALAA8AADM1IRUlETMRIREzEQE1IRWAAYD+AIABgID+AAGAgICAAoD9gAKA/YACgICAAAIAAAAAAoADgAADAA0AAAE1MxUBESEVIRUhFSERAgCA/YACAP6AAYD+gAKAgID9gAOAgICA/gAABgAAAAACgAOAAAMABwALAA8AEwAXAAAzNSEVMzUzFSU1MxUhETMRJREzEQE1IRWAAQCAgP8AgP4AgAGAgP4AAYCAgICAgICAAoD9gIACAP4AAgCAgAAAAAMAAAAAAoADgAADAAcAEQAAIREzEQM1MxUBESEVIRUhFSERAgCAgID9gAIA/oABgP6AAgD+AAKAgID9gAOAgICA/gAABgAAAAACgAOAAAMABwALAA8AEwAXAAAzNSEVJTUzFSERMxEBNSEVJTUzFT0BIRWAAYD+AIABgID+AAGA/gCAAgCAgICAgAGA/oABgICAgICAgICAAAAAAAEAAAAAAoADgAAHAAAhESE1IRUhEQEA/wACgP8AAwCAgP0AAAMAAAAAAoADgAADAAcACwAAMzUhFSURMxEhETMRgAGA/gCAAYCAgICAAwD9AAMA/QAAAAAFAAAAAAKAA4AAAwAHAAsADwATAAAhNTMVJREzETMRMxEBETMRIREzEQEAgP8AgICA/gCAAYCAgICAAQD/AAEA/wABAAIA/gACAP4AAAAAAAMAAAAAAoADgAADAAsAEwAAATUzFQERMxEzFSMVITUjNTMRMxEBAID+gICAgAGAgICAAQCAgP8AA4D9gICAgIACgPyAAAAAAAkAAAAAAoADgAADAAcACwAPABMAFwAbAB8AIwAAMREzESERMxEBNTMVMzUzFSU1MxUlNTMVMzUzFSU1MxUhNTMVgAGAgP4AgICA/wCA/wCAgID+AIABgIABgP6AAYD+gAGAgICAgICAgICAgICAgICAgIAABQAAAAACgAOAAAMABwALAA8AEwAAIREzEQE1MxUzNTMVJTUzFSE1MxUBAID/AICAgP4AgAGAgAKA/YACgICAgICAgICAgAAABQAAAAACgAOAAAUACQANABEAFwAAMREzFSEVATUzFT0BMxU9ATMVPQEhNSERgAIA/gCAgID+AAKAAQCAgAEAgICAgICAgICAgID/AAAAAAABAAAAAAGAA4AABwAAMREhFSERIRUBgP8AAQADgID9gIAAAAAFAAAAAAKAA4AAAwAHAAsADwATAAAhNTMVJREzEQE1MxUlETMRATUzFQIAgP8AgP8AgP8AgP8AgICAgAEA/wABAICAgAEA/wABAICAAAAAAAEAAAAAAYADgAAHAAAxNSERITUhEQEA/wABgIACgID8gAAAAAUAAAIAAoADgAADAAcACwAPABMAABE1MxUhNTMVJTUzFTM1MxUlNTMVgAGAgP4AgICA/wCAAgCAgICAgICAgICAgIAAAQAA/4ACgAAAAAMAABU1IRUCgICAgAAAAQAAAwABAAOAAAMAABE1IRUBAAMAgIAAAwAAAAACgAKAAAMADQARAAA9ATMdATUhNSE1ITUzEQE1IRWAAYD+gAGAgP4AAYCAgICAgICAgP4AAgCAgAAAAAMAAAAAAoADgAADAAcAEQAAJREzEQE1IRUBETMRMxUjESEVAgCA/oABAP4AgICAAYCAAYD+gAGAgID+AAOA/oCA/wCAAAAAAAUAAAAAAoACgAADAAcACwAPABMAADM1IRU9ATMVIREzEQE1MxUlNSEVgAGAgP2AgAGAgP4AAYCAgICAgAGA/oABAICAgICAAAMAAAAAAoADgAADAAcAEQAANREzGQE1IRUBNSERIzUzETMRgAEA/wABgICAgIABgP6AAYCAgP4AgAEAgAGA/IAAAAAAAwAAAAACgAKAAAMADQARAAAzNSEVJREzFSE1MxEhFRE1IRWAAgD9gIABgID+AAGAgICAAYCAgP8AgAGAgIAAAAIAAAAAAgADgAALAA8AADMRIzUzNTMVIRUhGQE1IRWAgICAAQD/AAEAAgCAgICA/gADAICAAAAAAwAA/4ACgAKAAAMABwARAAAVNSEVAREzEQE1ITUhESE1IRECAP4AgAGA/oABgP6AAgCAgIABgAEA/wD/AICAAQCA/YAAAAAAAwAAAAACgAOAAAMABwAPAAAhETMRATUhFQERMxEzFSMRAgCA/oABAP4AgICAAgD+AAIAgID+AAOA/oCA/oAAAAIAAAAAAIADgAADAAcAADERMxEDNTMVgICAAoD9gAMAgIAAAAQAAP+AAoADAAADAAcACwAPAAAXNSEVJREzESERMxEDNTMVgAGA/gCAAYCAgICAgICAAQD/AAIA/gACgICAAAAFAAAAAAIAA4AAAwAHAAsADwAXAAAhNTMVJTUzFQM1MxU9ATMVAREzETMVIxEBgID/AICAgID+AICAgICAgICAAQCAgICAgP4AA4D+AID/AAAAAAACAAAAAAEAA4AAAwAHAAAzNTMVJREzEYCA/wCAgICAAwD9AAAEAAAAAAKAAoAAAwAHAA0AEQAAAREzERMRMxEhESEVIxEBNTMVAQCAgID9gAEAgAEAgAEAAQD/AP8AAgD+AAKAgP4AAgCAgAACAAAAAAKAAoAAAwAJAAAhETMRIREhFSERAgCA/YACAP6AAgD+AAKAgP4AAAQAAAAAAoACgAADAAcACwAPAAAzNSEVJREzESERMxEBNSEVgAGA/gCAAYCA/gABgICAgAGA/oABgP6AAYCAgAADAAD/gAKAAoAAAwAPABMAAAERMxEBETMVMxUjFSEVIRETNSEVAgCA/YCAgIABgP6AgAEAAQABAP8A/oADAICAgID/AAKAgIAAAAAAAwAA/4ACgAKAAAMABwATAAAZATMZATUhFRMRITUhNSM1MzUzEYABAID+gAGAgICAAQABAP8AAQCAgP2AAQCAgICA/QAAAAAAAwAAAAACgAKAAAMACwAPAAABNTMVAREzFTMVIxETNSEVAgCA/YCAgICAAQABgICA/oACgICA/oACAICAAAAAAAUAAAAAAoACgAADAAcACwAPABMAADE1IRU9ATMVJTUhFSU1MxU9ASEVAgCA/gABgP4AgAIAgICAgICAgICAgICAgIAAAgAAAAABgAOAAAMADwAAITUzFSURIzUzETMRMxUjEQEAgP8AgICAgICAgIABgIABAP8AgP6AAAACAAAAAAKAAoAAAwAJAAA1ETMRFTUhETMRgAGAgIACAP4AgIACAP2AAAAAAAUAAAAAAoACgAADAAcACwAPABMAACE1MxUlNTMVMzUzFSURMxEhETMRAQCA/wCAgID+AIABgICAgICAgICAgAGA/oABgP6AAAIAAAAAAoACgAADAA0AADURMxEVNTMRMxEzETMRgICAgICAAgD+AICAAQD/AAIA/YAAAAAJAAAAAAKAAoAAAwAHAAsADwATABcAGwAfACMAADE1MxUhNTMVJTUzFTM1MxUlNTMVJTUzFTM1MxUlNTMVITUzFYABgID+AICAgP8AgP8AgICA/gCAAYCAgICAgICAgICAgICAgICAgICAgICAgAAAAwAA/4ACgAKAAAMABwAPAAAXNSEVAREzEQE1ITUhETMRgAGA/gCAAYD+gAGAgICAgAGAAYD+gP8AgIABgP2AAAMAAAAAAoACgAAHAAsAEwAAMTUzNTMVIRUBNTMVPQEhNSEVIxWAgAGA/oCA/oACgICAgICAAQCAgICAgICAAAAFAAAAAAIAA4AAAwAHAAsADwATAAAhNSEVJREzEQE1MxU1ETMZATUhFQEAAQD+gID/AICAAQCAgIABAP8AAQCAgIABAP8AAQCAgAAAAQAAAAAAgAOAAAMAADERMxGAA4D8gAAABQAAAAACAAOAAAMABwALAA8AEwAAMTUhFTURMxkBNTMVJREzEQE1IRUBAICA/wCA/oABAICAgAEA/wABAICAgAEA/wABAICAAAAAAAQAAAKAAwADgAADAAcACwAPAAARNTMVITUhFSU1IRUhNTMVgAEAAQD+AAEAAQCAAoCAgICAgICAgIAAAAIAAAAAAIADgAADAAcAADERMxEDNTMVgICAAoD9gAMAgIAAAAMAAAAAAgADAAADAAcACwAAMzUhFSURMxkBNSEVgAGA/gCAAYCAgIACAP4AAgCAgAAAAAACAAAAAAIAAwAADwATAAAxNTMRIzUzNTMVMxUjESEVATUzFYCAgICAgAEA/wCAgAEAgICAgP8AgAKAgIAAAAAABQAAAQABgAKAAAMABwALAA8AEwAAETUzFTM1MxUlNTMVJTUzFTM1MxWAgID/AID/AICAgAEAgICAgICAgICAgICAAAAFAAAAAAKAA4AAEwAXABsAHwAjAAAhNSM1MzUjNTM1MxUzFSMVMxUjFQE1MxUzNTMVJTUzFSE1MxUBAICAgICAgICAgP8AgICA/gCAAYCAgICAgICAgICAgAKAgICAgICAgICAAAAAAAIAAAAAAIADgAADAAcAADERMxEDETMRgICAAYD+gAIAAYD+gAAAAAAFAAD/gAKAAwAABwALAA8AEwAbAAAFNSM1IRUjFRM1MxUhETMRATUzFSU1MzUzFTMVAQCAAYCAgID9gIABgID+AICAgICAgICAAQCAgAGA/oABAICAgICAgIAAAAMAAAAAAwADgAAHAAsADwAAAREhFSMVMxUXESERBxEhEQEAAQCAgID+AIADAAEAAYCAgICAAoD9gIADgPyAAAABAAABAAGAAwAABwAAGQEhNSE1IREBAP8AAYABAAEAgID+AAAKAAAAAAKAAoAAAwAHAAsADwATABcAGwAfACMAJwAAITUzFTM1MxUlNTMVMzUzFSU1MxUzNTMVJTUzFTM1MxUlNTMVMzUzFQEAgICA/gCAgID+AICAgP8AgICA/wCAgICAgICAgICAgICAgICAgICAgICAgICAgIAAAAAAAQAAAIACgAGAAAUAACU1ITUhEQIA/gACgICAgP8AAAABAIABAAIAAYAAAwAAEzUhFYABgAEAgIAAAAAAAwAAAAADAAOAAAUADQARAAABESERIxUFNSM1MxEhEQcRIREBAAEAgAEAgID+AIADAAEAAYD/AICAgIABgP2AgAOA/IAAAAAAAQAAAwACgAOAAAMAABE1IRUCgAMAgIAAAgAAAgABgAOAAAMABwAAATUjFQcRIREBAICAAYACgICAgAGA/oAAAAIAAP+AAoADAAADAA8AABU1IRUBESE1IREzESEVIRECgP6A/wABAIABAP8AgICAAQABAIABAP8AgP8AAAIAAAIAAQADgAAFAAkAABkBMxUzFQM1MxWAgICAAgABAICAAQCAgAABAAACAAEAA4AABwAAETUzNSM1IRGAgAEAAgCAgID+gAAAAAABAYADAAKAA4AAAwAAATUhFQGAAQADAICAAAAAAQAA/4ACgAMAAAkAABURMxEhETMRIRWAAYCA/gCAA4D9gAKA/QCAAAMAAAAAAoADAAADAA0AEQAAETUzFRMRIzUzNSM1IREzETMRgICAgIABAICAAgCAgP4AAYCAgID9AAMA/QAAAAABAAABgACAAgAAAwAAETUzFYABgICAAAACAID/gAIAAIAAAwAHAAAXNSEVPQEzFYABAICAgICAgIAAAAABAAACgACAA4AAAwAAGQEzEYACgAEA/wAAAAAAAgAAAgABgAOAAAMABwAAATUjFQcRIREBAICAAYACgICAgAGA/oAAAAoAAAAAAoACgAADAAcACwAPABMAFwAbAB8AIwAnAAAxNTMVMzUzFSU1MxUzNTMVJTUzFTM1MxUlNTMVMzUzFSU1MxUzNTMVgICA/wCAgID/AICAgP4AgICA/gCAgICAgICAgICAgICAgICAgICAgICAgICAgIAAAAgAAAAAAoADgAADAAkADQARABUAGQAdACEAADE1MxUhETMVMxUlETMRJTUzFSU1MxU1ETMRJREzESU1MxWAAQCAgP4AgAEAgP6AgID+AIABgICAgAEAgICAAQD/AICAgICAgIABAP8AgAEA/wCAgIAAAAAABwAAAAACgAOAAAMABwANABEAFQAZAB0AADE1MxU1ETMRBTUjESERATUzFTURMxElETMRJTUzFYCAAQCAAQD+gICA/gCAAYCAgICAAQD/AICAAQD+gAGAgICAAQD/AIABAP8AgICAAAAHAAAAAAKAA4AAAwAHAA0AEQAVAB0AIQAAMTUzFTURMxEFNSMRIREBNTMVNREzESE1MzUjNSERATUzFYCAAQCAAQD+gICA/gCAgAEAAQCAgICAAQD/AICAAQD+gAGAgICAAQD/AICAgP6AAQCAgAAABgAAAAACgAOAAAMABwALAA8AEwAXAAAzNSEVPQEzFSERMxkBNTMVPQEzFQM1MxWAAYCA/YCAgICAgICAgICAAQD/AAEAgICAgIABAICAAAADAAAAAAKAA4AACwAPABMAADERMxUhNTMRIxEhGQE1IRUBNSEVgAGAgID+gAGA/gABAAIAgID+AAEA/wACAICAAQCAgAAAAAADAAAAAAKAA4AACwAPABMAADERMxUhNTMRIxEhGQE1IRUDNSEVgAGAgID+gAGAgAEAAgCAgP4AAQD/AAIAgIABAICAAAUAAAAAAoADgAALAA8AEwAXABsAADERMxUhNTMRIxEhGQE1IRUlNTMVITUzFSU1IRWAAYCAgP6AAYD+AIABgID+AAGAAgCAgP4AAQD/AAIAgICAgICAgICAgAAABQAAAAADAAOAAAsADwAXABsAHwAAMREzFSE1MxEjESERAzUzHQE1ITUhFSMVATUhFSE1MxWAAYCAgP6AgIABAAEAgP6AAQABAIACAICA/gABAP8AAoCAgICAgICAAQCAgICAAAQAAAAAAoADgAALAA8AEwAXAAAxETMVITUzESMRIRkBNSEVATUzFTM1MxWAAYCAgP6AAYD+gICAgAIAgID+AAEA/wACAICAAQCAgICAAAAAAwAAAAACgAOAAAsADwATAAAxETMVITUzESMRIRkBNSEVATUzFYABgICA/oABgP8AgAIAgID+AAEA/wACAICAAQCAgAABAAAAAAKAA4AAFQAAMREzFTM1IzUhFSEVMxUjESEVIREjEYCAgAIA/wCAgAEA/oCAAwCAgICAgID+gIACAP4AAAAAAAcAAP+AAoADgAADAAcACwAPABMAFwAbAAAFNSEVPQEzFSU1IRU9ATMVIREzEQE1MxUlNSEVAQABAID+AAGAgP2AgAGAgP4AAYCAgICAgICAgICAgIACAP4AAYCAgICAgAAAAAACAAAAAAKAA4AACwAPAAAxESEVIRUhFSEVIRUBNSEVAoD+AAEA/wACAP2AAQACgICAgICAAwCAgAAAAAACAAAAAAKAA4AACwAPAAAxESEVIRUhFSEVIRUBNSEVAoD+AAEA/wACAP8AAQACgICAgICAAwCAgAAAAAAFAAAAAAKAA4AACQANABEAFQAZAAAxETMVIRUhFSEVATUhFSU1MxUhNTMVJTUhFYABAP8AAgD+AAGA/gCAAYCA/gABgAIAgICAgAIAgICAgICAgICAgAAAAwAAAAACgAOAAAsADwATAAAxESEVIRUhFSEVIRUBNTMVMzUzFQKA/gABAP8AAgD+AICAgAKAgICAgIADAICAgIAAAAACAAAAAAIAA4AACwAPAAAzNTMRIzUhFSMRMxUBNSEVgICAAYCAgP4AAQCAAYCAgP6AgAMAgIAAAAIAgAAAAoADgAALAA8AADM1MxEjNSEVIxEzFQM1IRWAgIABgICAgAEAgAGAgID+gIADAICAAAAABAAAAAACgAOAAAsADwATABcAADM1MxEjNSEVIxEzFQE1MxUhNTMVJTUhFYCAgAGAgID+AIABgID+AAGAgAGAgID+gIACgICAgICAgIAAAAADAAAAAAGAA4AACwAPABMAADE1MxEjNSEVIxEzFQE1MxUzNTMVgIABgICA/oCAgICAAYCAgP6AgAMAgICAgAAAAgAAAAADAAOAAAMAEwAAJREzEQURIzUzESEVIREzFSMRIRUCgID9gICAAgD+gICAAYCAAoD9gIABgIABgID/AID/AIAAAAAABQAAAAADAAOAAAMACwAVABkAHQAAATUzFQERMxEzFSMRITUjNTMRIzUhEQE1IRUhNTMVAQCA/oCAgIABgICAgAEA/gABAAEAgAEAgID/AAMA/wCA/oCAgAGAgP0AAwCAgICAAAUAAAAAAoADgAADAAcACwAPABMAADM1IRUlETMRIREzEQE1IRUBNSEVgAGA/gCAAYCA/gABgP4AAQCAgIABgP6AAYD+gAGAgIABAICAAAAABQAAAAACgAOAAAMABwALAA8AEwAAMzUhFSURMxEhETMRATUhFQM1IRWAAYD+AIABgID+AAGAgAEAgICAAYD+gAGA/oABgICAAQCAgAAAAAAHAAAAAAKAA4AAAwAHAAsADwATABcAGwAAMzUhFSURMxEhETMRATUhFSU1MxUhNTMVJTUhFYABgP4AgAGAgP4AAYD+AIABgID+AAGAgICAAYD+gAGA/oABgICAgICAgICAgIAABwAAAAADAAOAAAMABwALAA8AFwAbAB8AADM1IRUlETMRIREzEQE1Mx0BNSE1IRUjFQE1IRUhNTMVgAGA/gCAAYCA/YCAAQABAID+gAEAAQCAgICAAYD+gAGA/oACAICAgICAgIABAICAgIAABgAAAAACgAOAAAMABwALAA8AEwAXAAAzNSEVJREzESERMxEBNSEVJTUzFSE1MxWAAYD+AIABgID+AAGA/gCAAYCAgICAAgD+AAIA/gACAICAgICAgIAAAAkAAACAAoADAAADAAcACwAPABMAFwAbAB8AIwAAPQEzFSE1MxUlNTMVMzUzFSU1MxUlNTMVMzUzFSU1MxUhNTMVgAGAgP4AgICA/wCA/wCAgID+AIABgICAgICAgICAgICAgICAgICAgICAgICAgAADAAAAAAKAA4AAAwANABcAAAERMxEBNSMRMxEzFSEVNREjNSE1IRUzEQEAgP8AgICAAQCA/wABgIABAAGA/oD/AIACgP4AgICAAgCAgID9gAAAAAAEAAAAAAKAA4AAAwAHAAsADwAAMzUhFSURMxEhETMRATUhFYABgP4AgAGAgP2AAQCAgIACAP4AAgD+AAKAgIAABAAAAAACgAOAAAMABwALAA8AADM1IRUlETMRIREzEQE1IRWAAYD+AIABgID/AAEAgICAAgD+AAIA/gACgICAAAYAAAAAAoADgAADAAcACwAPABMAFwAAMzUhFSURMxEhETMRATUzFSE1MxUlNSEVgAGA/gCAAYCA/YCAAYCA/gABgICAgAGA/oABgP6AAgCAgICAgICAAAAFAAAAAAKAA4AAAwAHAAsADwATAAAzNSEVJREzESERMxEBNTMVMzUzFYABgP4AgAGAgP4AgICAgICAAgD+AAIA/gACgICAgIAAAAAABgAAAAACgAOAAAMABwALAA8AEwAXAAAhETMRATUzFTM1MxUlNTMVITUzFQE1IRUBAID/AICAgP4AgAGAgP2AAQABgP6AAYCAgICAgICAgIABAICAAAAAAAMAAP+AAoADAAADAAcAEwAAJREzEQE1IRUBETMRMxUjESEVIRUCAID+gAEA/gCAgIABgP6AgAGA/oABgICA/YADgP8AgP8AgIAAAAAEAAAAAAKAA4AAAwANABEAFQAAPQEzHQE1ITUhNSE1MxEBNSEVATUhFYABgP6AAYCA/gABgP4AAQCAgICAgICAgP4AAgCAgAEAgIAABAAAAAACgAOAAAMADQARABUAAD0BMx0BNSE1ITUhNTMRATUhFQM1IRWAAYD+gAGAgP4AAYCAAQCAgICAgICAgP4AAgCAgAEAgIAAAAYAAAAAAoADgAADAA0AEQAVABkAHQAAPQEzHQE1ITUhNSE1MxEBNSEVJTUzFSE1MxUlNSEVgAGA/oABgID+AAGA/gCAAYCA/gABgICAgICAgICA/gACAICAgICAgICAgIAAAAAGAAAAAAMAA4AAAwANABEAGQAdACEAAD0BMx0BNSE1ITUhNTMRATUzHQE1ITUhFSMVATUhFSE1MxWAAYD+gAGAgP2AgAEAAQCA/oABAAEAgICAgICAgICA/gACgICAgICAgIABAICAgIAAAAAFAAAAAAKAA4AAAwANABEAFQAZAAA9ATMdATUhNSE1ITUzEQE1IRUBNTMVMzUzFYABgP6AAYCA/gABgP6AgICAgICAgICAgID+AAIAgIABAICAgIAAAAAABAAAAAACgAOAAAMADQARABUAAD0BMx0BNSE1ITUhNTMRATUhFQE1MxWAAYD+gAGAgP4AAYD/AICAgICAgICAgP4AAgCAgAEAgIAAAAQAAAAAAoACgAADABUAGQAdAAA9ATMdATUzNSM1MzUzFTM1MxEhFSEVATUzFTM1MxWAgICAgICA/wABAP4AgICAgICAgICAgICAgP8AgIACAICAgIAAAAAHAAD/gAKAAwAAAwAHAAsADwATABcAGwAABTUhFT0BMxUlNSEVPQEzFSERMxEBNTMVJTUhFQEAAQCA/gABgID9gIABgID+AAGAgICAgICAgICAgICAAYD+gAEAgICAgIAAAAAABAAAAAACgAOAAAMADQARABUAADM1IRUlETMVITUzESEVETUhFQE1IRWAAgD9gIABgID+AAGA/gABAICAgAGAgID/AIABgICAAQCAgAAAAAAEAAAAAAKAA4AAAwANABEAFQAAMzUhFSURMxUhNTMRIRURNSEVAzUhFYACAP2AgAGAgP4AAYCAAQCAgIABgICA/wCAAYCAgAEAgIAABgAAAAACgAOAAAMADQARABUAGQAdAAAzNSEVJREzFSE1MxEhFRE1IRUlNTMVITUzFSU1IRWAAgD9gIABgID+AAGA/gCAAYCA/gABgICAgAGAgID/AIABgICAgICAgICAgIAAAAUAAAAAAoADgAADAA0AEQAVABkAADM1IRUlETMVITUzESEVETUhFQE1MxUzNTMVgAIA/YCAAYCA/gABgP6AgICAgICAAYCAgP8AgAGAgIABAICAgIAAAAACAAAAAAEAA4AAAwAHAAAzETMRATUhFYCA/wABAAKA/YADAICAAAAAAgAAAAABAAOAAAMABwAAMREzEQM1IRWAgAEAAoD9gAMAgIAABAAAAAACgAOAAAMABwALAA8AACERMxEBNTMVITUzFSU1IRUBAID+gIABgID+AAGAAoD9gAKAgICAgICAgAAAAAMAgAAAAgADgAADAAcACwAAIREzEQE1MxUzNTMVAQCA/wCAgIACgP2AAwCAgICAAAQAAAAAAwADgAADAA8AEwAXAAAhETMRIREzFSE1IRUjFSEZATUhFSE1MxUCAID9gIABAAEAgP6AAQABAIACAP4AAwCAgICA/gADAICAgIAABQAAAAACgAOAAAMABwALAA8AEwAAMzUhFSURMxEhETMRATUhFQE1IRWAAYD+AIABgID+AAGA/gABAICAgAGA/oABgP6AAYCAgAEAgIAAAAAFAAAAAAKAA4AAAwAHAAsADwATAAAzNSEVJREzESERMxEBNSEVAzUhFYABgP4AgAGAgP4AAYCAAQCAgIABgP6AAYD+gAGAgIABAICAAAAAAAcAAAAAAoADgAADAAcACwAPABMAFwAbAAAzNSEVJREzESERMxEBNSEVJTUzFSE1MxUlNSEVgAGA/gCAAYCA/gABgP4AgAGAgP4AAYCAgIABgP6AAYD+gAGAgICAgICAgICAgAAHAAAAAAMAA4AAAwAHAAsADwAXABsAHwAAMzUhFSURMxEhETMRATUzHQE1ITUhFSMVATUhFSE1MxWAAYD+AIABgID9gIABAAEAgP6AAQABAICAgIABgP6AAYD+gAIAgICAgICAgAEAgICAgAAGAAAAAAKAA4AAAwAHAAsADwATABcAADM1IRUlETMRIREzEQE1IRUBNTMVMzUzFYABgP4AgAGAgP4AAYD+gICAgICAgAGA/oABgP6AAYCAgAEAgICAgAAAAwAAAIACgAMAAAMABwALAAAlNTMVATUhFQE1MxUBAID+gAKA/oCAgICAAQCAgAEAgIAAAAMAAAAAAoACgAADAA0AFwAAATUzFQE1IxEzETMVIRU1ESM1ITUhFTMRAQCA/wCAgIABAID/AAGAgAEAgID/AIABgP8AgICAAQCAgID+gAAAAwAAAAACgAOAAAMACQANAAA1ETMRFTUhETMRATUhFYABgID9gAEAgAIA/gCAgAIA/YADAICAAAADAAAAAAKAA4AAAwAJAA0AADURMxEVNSERMxEBNSEVgAGAgP8AAQCAAgD+AICAAgD9gAMAgIAAAAUAAAAAAoADgAADAAkADQARABUAADURMxEVNSERMxEBNTMVITUzFSU1IRWAAYCA/YCAAYCA/gABgIABgP6AgIABgP4AAoCAgICAgICAAAAABAAAAAACgAOAAAMACQANABEAADURMxEVNSERMxEBNTMVMzUzFYABgID+AICAgIACAP4AgIACAP2AAwCAgICAAAQAAP+AAoADgAADAAcADwATAAAXNSEVAREzEQE1ITUhETMRATUhFYABgP4AgAGA/oABgID9gAEAgICAAYABgP6A/wCAgAGA/YADAICAAAAAAwAA/4ACgAOAAAMABwATAAAlETMRATUhFQERMxEzFSMRIRUhFQIAgP6AAQD+AICAgAGA/oCAAYD+gAGAgID9gAQA/oCA/wCAgAAAAAUAAP+AAoADgAADAAcADwATABcAABc1IRUBETMRATUhNSERMxEBNTMVMzUzFYABgP4AgAGA/oABgID+AICAgICAgAGAAYD+gP8AgIABgP2AAwCAgICAAAACAAAAAAKAA4AAAwATAAA1ETMRFTUzESM1IRUhFTMVIxEhFYCAgAIA/wCAgAEAgAKA/YCAgAKAgICAgP6AgAAABQAAAAACgAKAAAMABwALAA8AGwAAMzUzFTM1IRUlETMZATUzFRkBMxUzNSM1IREhFYCAgAEA/YCAgICAgAEA/wCAgICAgAGA/oABgICA/oABgICAgP6AgAAAAAAHAAAAAAKAA4AAAwAHAAsADwATABcAGwAAIREzEQE1MxUzNTMVJTUzFSE1MxUBNTMVMzUzFQEAgP8AgICA/gCAAYCA/gCAgIABgP6AAYCAgICAgICAgIABAICAgIAAAAABAAABgAMAAgAAAwAAETUhFQMAAYCAgAACAAACAAEAA4AAAwAHAAAZATMZATUzFYCAAgABAP8AAQCAgAACAAACAAEAA4AAAwAHAAARNTMVNREzEYCAAgCAgIABAP8AAAACAAD/gAEAAQAAAwAHAAAVNTMVNREzEYCAgICAgAEA/wAAAAACAAACAAEAA4AAAwAHAAATNTMVJREzEYCA/wCAAgCAgIABAP8AAAAABAAAAgACAAOAAAMABwALAA8AABkBMxEzETMRATUzFTM1MxWAgID/AICAgAIAAQD/AAEA/wABAICAgIAABAAAAgACAAOAAAMABwALAA8AABE1MxUzNTMVJREzETMRMxGAgID/AICAgAIAgICAgIABAP8AAQD/AAAABAAA/4ACAAEAAAMABwALAA8AABU1MxUzNTMVJREzETMRMxGAgID/AICAgICAgICAgAEA/wABAP8AAAAAAQAAAAABgAMAAAsAADMRIzUzETMRMxUjEYCAgICAgAGAgAEA/wCA/oAAAAABAAABgAEAAoAAAwAAGQEhEQEAAYABAP8AAAAAAwAAAAACgACAAAMABwALAAAxNTMVMzUzFTM1MxWAgICAgICAgICAgAAAAAADAAAAAAEAAYAAAwAHAAsAADM1MxUlNTMVPQEzFYCA/wCAgICAgICAgICAAAMAAAAAAQABgAADAAcACwAAMTUzFT0BMxUlNTMVgID/AICAgICAgICAgAAAAwAAAAACgAOAAAMAFwAbAAAhNSEVJTUjNTM1IzUzNTMVIRUhFSEVIRURNSEVAQABgP4AgICAgIABAP8AAQD/AAGAgICAgICAgICAgICAgAKAgIAAAgAAAgAEgAOAAAcAEwAAExEjNSEVIxEhESERIxEjFSM1IxGAgAGAgAEAAoCAgICAAgABAICA/wABgP6AAQCAgP8AAAAAACABhgABAAAAAAAAASUCTAABAAAAAAABAAkDhgABAAAAAAACAAcDoAABAAAAAAADABEDzAABAAAAAAAEABEEAgABAAAAAAAFAAsELAABAAAAAAAGAAkETAABAAAAAAAHAGMFHgABAAAAAAAIABYFsAABAAAAAAAJAAUF0wABAAAAAAAKASUIJQABAAAAAAALAB8JiwABAAAAAAAMABEJzwABAAAAAAANACgKMwABAAAAAAAOAC4KugABAAAAAAATABsLIQADAAEECQAAAkoAAAADAAEECQABABIDcgADAAEECQACAA4DkAADAAEECQADACIDqAADAAEECQAEACID3gAD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IgAgAGYAbwBuAHQAIABpAHMAIAB1AG4AZABlAHIAIABDAHIAZQBhAHQAaQB2AGUAIABDAG8AbQBtAG8AbgBzACAATABpAGMAZQBuAHMAZQAgACgAUwBoAGEAcgBlACAAQQBsAGkAawBlACkALgANAAoADQAKAFQAaABlACAAIgBEAGoARABDAEgAIgAgAG4AYQBtAGUAIABpAHMAIABvAHcAbgAgAGIAeQAgAG0AZQAgACgAZABqAGQAYwBoAC4AYwBvAG0AKQAuAA0ACgANAAoAVABoAGUAIAAiAE0AaQBuAGUAYwByAGEAZgB0ACIAIABmAG8AbgB0ACAAcwB0AHkAbABlACAAdwBhAHMAIABtAGEAZABlACAAYgB5ACAATgBvAHQAYwBoAC4ADQAKAA0ACgBUAGgAZQAgACIATQBpAG4AZQBjAHIAYQBmAHQAIgAgAGcAYQBtAGUAIABpAHMAIABvAHcAbgAgAGIAeQAgAE0AbwBqAGEAbgBnACAAUwBwAGUAYwBpAGYAaQBjAGEAdABpAG8AbgBzAC4AAFRoaXMgIk1pbmVjcmFmdCIgZm9udCB3YXMgYWRhcHRlZCBpbnRvIFRydWVUeXBlIGZpbGUgYnkgbWUgKERqRENIKS4NCg0KVGhpcyAiTWluZWNyYWZ0IiBmb250IGlzIHVuZGVyIENyZWF0aXZlIENvbW1vbnMgTGljZW5zZSAoU2hhcmUgQWxpa2UpLg0KDQpUaGUgIkRqRENIIiBuYW1lIGlzIG93biBieSBtZSAoZGpkY2guY29tKS4NCg0KVGhlICJNaW5lY3JhZnQiIGZvbnQgc3R5bGUgd2FzIG1hZGUgYnkgTm90Y2guDQoNClRoZSAiTWluZWNyYWZ0IiBnYW1lIGlzIG93biBieSBNb2phbmcgU3BlY2lmaWNhdGlvbnMuAABoAHQAdABwADoALwAvAGYAbwBuAHQAcwB0AHIAdQBjAHQALgBmAG8AbgB0AHMAaABvAHAALgBjAG8AbQAvAABodHRwOi8vZm9udHN0cnVjdC5mb250c2hvcC5jb20vAABoAHQAdABwADoALwAvAGQAagBkAGMAaAAuAGMAbwBtAC8AAGh0dHA6Ly9kamRjaC5jb20vAABDAHIAZQBhAHQAaQB2AGUAIABDAG8AbQBtAG8AbgBzACAAQQB0AHQAcgBpAGIAdQB0AGkAbwBuACAAUwBoAGEAcgBlACAAQQBsAGkAawBlAABDcmVhdGl2ZSBDb21tb25zIEF0dHJpYnV0aW9uIFNoYXJlIEFsaWtlAABoAHQAdABwADoALwAvAGMAcgBlAGEAdABpAHYAZQBjAG8AbQBtAG8AbgBzAC4AbwByAGcALwBsAGkAYwBlAG4AcwBlAHMALwBiAHkALQBzAGEALwAzAC4AMAAvAABodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS1zYS8zLjAvAABNAGkAbgBlAGMAcgBhAGYAdAAgAGkAcwAgAGoAdQBzAHQAIABhAHcAZQBzAG8AbQBlACAAIQAATWluZWNyYWZ0IGlzIGp1c3QgYXdlc29tZSAhAAAAAgAAAAAAAABlADMAAAAAAAAAAAAAAAAAAAAAAAAAAADQAAABAgEDAAMABAAFAAYABwAIAAkACgALAAwADQAOAA8AEAARABIAEwAUABUAFgAXABgAGQAaABsAHAAdAB4AHwAgACEAIgAjACQAJQAmACcAKAApACoAKwAsAC0ALgAvADAAMQAyADMANAA1ADYANwA4ADkAOgA7ADwAPQA+AD8AQABBAEIAQwBEAEUARgBHAEgASQBKAEsATABNAE4ATwBQAFEAUgBTAFQAVQBWAFcAWABZAFoAWwBcAF0AXgBfAGAAYQCjAIQAhQC9AJYA6ACOAIsAnQCpAKQBBACKANoAgwCTAQUBBgCNAQcAiADDAN4BCACeAKoA9QD0APYAogCtAMkAxwCuAGIAYwCQAGQAywBlAMgAygDPAMwAzQDOAOkAZgDTANAA0QCvAGcA8ACRANYA1ADVAGgA6wDtAGoAaQBrAG0AbABuAKAAbwBxAHAAcgBzAHUAdAB2AHcAeAB6AHkAewB9AHwAuAChAH8AfgCAAIEA7ADuALoAsACxALsAswC2ALcAxAEJALQAtQDFAIIAhwCrAL4AvwEKAIwGZ2x5cGgxB3VuaTAwMEQHdW5pMDBBRAd1bmkwMEIyB3VuaTAwQjMHdW5pMDBCNQd1bmkwMEI5DXF1b3RlcmV2ZXJzZWQERXVybwAAAAH//wACAAEAAAAOAAAAGAAAAAAAAgABAAEAzwABAAQAAAACAAAAAAABAAAAAMw9os8AAAAAyO86mAAAAADI8I+a";

//########################################################################################################################################################
// START CREATION OF RESOURCES
//########################################################################################################################################################

new java.lang.Thread(new java.lang.Runnable()
{
	run: function()
	{
		try
		{
			MinecraftButtonLibrary.createNinePatchDrawables();
			MinecraftButtonLibrary.createTypeface();

			MinecraftButtonLibrary.removeResources();
		} catch(e)
		{
			print("Error " + e);
		}
	}
}).start();

