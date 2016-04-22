Megaman.Preload = function(){}

Megaman.Preload.prototype = {
	preload: function(){ 

		console.log("Preload preload")

		// on crée un sprite pour la barre de chargement
        var loadingBar = this.add.sprite(160,240, "loading");
	        loadingBar.anchor.setTo(0.5,0.5);
	    // on défini la barre de chargement et phaser va gérer la bare tout seul
	        this.load.setPreloadSprite(loadingBar);

	    /* 
	    	chargement des assets
	    */

	    //spritesheet (key, url, frameWidth, frameHeight, frameMax, margin, spacing
		//this.game.load.spritesheet("nom","url_60x80.png", 60, 80, 10);
		// image (key, url)
		//this.game.load.image("nom","url");
		//this.game.load.image("play","url");

		this.game.load.tilemap('plateforme', 'assets/tilemaps/plateforme.json', null, Phaser.Tilemap.TILED_JSON);

		this.game.load.image('ground', 'assets/map_80x80.png');

		this.game.load.image("ennemi1","ball.png");
		this.game.load.image("ennemi2","ball_blue.png");
		this.game.load.image("ennemi3","ball_red.png");



		//load ennemy
	},
  	create: function(){
  		console.log("Preload finished")
  		// go to title
		this.game.state.start("Title");
	}
}