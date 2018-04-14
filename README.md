# Plugin Priorities:

## Contents:

1. **Plugins:**
	1. Character Cards [Easy]
	2. Knowledge Trees [Hard] (Individual)

###### This is an organized Github repository for work on PersistentHistory. Plugins will be listed in seperate branches, and are to be submitted via pull requests.

###### If you have priorities that may be added to this section, or you find that some work is too difficult to you, please *IncogniStructura#5102* on Discord *aka @Ben*, or email him at [incognistructura@gmail.com](mailto:incognistructura@gmail.com).

----------


Our following priorities are as follows. Plugins that have a higher difficulty will be done later. Plugins are in the following order and requirements are listed
in a bullet point fashion. Please be aware that some plugins needed to be developed are easier than others and will thus be worked on first by individuals, rather
than group entities as a whole.

### Key:

----------

- Neccessary.

- _Recommended._

	*& - Wanted, But Not Vital.*


# Plugins:

----------

## - Character Cards [Easy]:

###### *Character Cards* is a relatively easy plugin to develop for Minecraft 1.12.2, but will have to be integrated into certain frameworks that have already been put in place, such as the Clock API (Pseudo) and the NoteBlock API upon which it was based.
- Must be in-sync with the Calendar plugin API. An API for the Calendar plugin should also be theoretically developed.
- Supportshould be included along with its own API in order to prevent confusion, designated variable `$ph.cc` is to be used.
	- Character Descriptions must be dynamic and in-sync with the characters age.
	- Random chances of a character dying will increase as the age gets higher, and child mortality rates may be factored in earlier in life to increase realism.
	- When a person dies, the person should be notified as well as it being a gradual process instead of a sudden process.
	- Disesases will also be applied to a person's character card, as well as a dynamic title.
	
## - Knowledge Trees [Hard] (Individual):

###### *Knowledge Trees [Player]* is a relatively hard plugin to develop for Minecraft 1.12.2, and will have to work player-to-player using dynamic values. Certain aspects of the plugin will have to be agreed upon, and this will be made configurable in the config files of the specified plugi. (e.g. Upon RP death, will a player's knowledge tree reset?). It must also be configured with the Calendar API (Pseudo) and Cards API (Pseudo). Requirements may be found [here](https://docs.google.com/spreadsheets/d/1Qc5akG_zBLToec7DdJDdvR7XL6hCEUx8hYL2Brw5TuQ/htmlview).
- **Knowledge Trees (Individual)** should also come with its own API which will use the global `$ph.kt1` as its main API calling name. Documentation will be made public on another Markdown file which is to be committed to the **"** Notes (A) **"** folder.
- To be a research skill tree, combat skills are not essential (this will be done as a seperate plugin), but it should contain the following, which is also defined in the above link.
- The following will contain categories and lists of technologies that will be implemented, albeit with no description.
	- **Categories: Agricultural [Ag], Metal [Fe], Wood [Lu], Textile [Te], Gunpowder [We], Armaments [Ar], Pottery/Masonry [Pm], Intellectural Capabilities [Ic], and Glassware [Gl].**
	- **Tiers: Tier 1 [T1], Tier 2 [T2], Tier 3 [T3], Tier 4 [T4], Tier 5 [T5], Tier 6 [T6], Tier 7 [T7], and Tier 8 [T8].**
	- ###### Technologies are as follows:
		- ###### Agricultural:
			- **Farming I [Ag,T1]**
			- **Farming II [Ag,T2]**
			- **Farming III [Ag,T3]**
			- **Animal Husbandry [Ag,T4]**
			- **Brewery [Ag,T5]**
			- **Cooking [Ag,T6]**
			- **Brewery II [Ag,T7]**
			- **Cooking II [Ag,T8]**
		- ###### Metals:
			- **Mining I [Fe,T1]**
			- **Mining II [Fe,T2]**
			- **Mining III [Fe,T3]**
			- **Blacksmithing I [Fe,T4]**
			- **Blacksmithing II [Fe,T5]**
			- **Blacksmithing III [Fe,T6]**
			- **Blacksmithing IV [Fe,T7]**
			- **Blacksmithing V [Fe,T8]**
		- ###### Carpentry:
			- **Carpentry I [Lu,T1]**
			- **Carpentry II [Lu,T2]**
			- **Carpentry III [Lu,T3]**
			- **Carpentry IV [Lu,T4]**
			- **Carpentry V [Lu,T5]**
			- **Bows [Lu, T6]**
			- **Carpentry VI [Lu,T7]**
			- **Carpentry VII [Lu,T8]**
		- ###### Textiles:
			- **Shepard [Tx,T1]**
			- **Sewing I [Tx,T2]**
			- **Sewing II [Tx,T3]**
			- **Leatherwork [Tx,T4]**
			- **Stitching [Tx,T5]**
			- **Sewing III [Tx,T6]**
			- **Sewing IV [Tx,T7]**
			- **Hatter [Tx,T8]**
		- ###### Armaments:
			- **Gunsmithing [Ar,T1]**
			- **Cannonwork I [Ar,T2]**
			- **Gunwork I [Ar,T3]**
			- **Cannonwork II [Ar,T4]**
			- **Gunwork II [Ar,T5]**
			- **Cannonwork III [Ar,T6]**
			- **Gunwork III [Ar,T7]**
			- **Cannonwork IV [Ar,T8]**
		- ###### Pottery/Masonry:
			- **Pottery I [Pm,T1]**
			- **Masonry I [Pm,T2]**
			- **Pottery II [Pm,T3]**
			- **Masonry II [Pm,T4]**
			- **Masonry III [Pm,T5]**
			- **Masonry IV [Pm,T6]**
			- **Masonry V [Pm,T7]**
			- **Masonry VI [Pm,T8]**
		- ###### Intellectual Capabilities:
			- **Scholar I [In,T1]**
			- **Banking [In,T2]**
			- **Painting I [In,T3]**
			- **Painting II [In,T4]**
			- **NA [In,T5]**
			- **NA [In,T6]**
			- **NA [In,T7]**
			- **Scholar II [In,T8]**
		- ###### Glassworks:
			- **Glassmaking I [Gl,T1]**
			- **Glassmaking II [Gl,T2]**
			- **Glassmaking III [Gl,T3]**
			- **Glassmaking IV [Gl,T4]**
			- **Glassmaking V [Gl,T5]**
			- **NA [Gl,T6]**
			- **NA [Gl, T7]**
			- **NA [Gl, T8]**
	* _Ideally, make it a web, but prioritize making it a skill tree instead of a skill web. This may be re-evaluated later on._
	- These are to be tied into Jobs and Careers that a given player may pursue in the future, and are specialized in these trades, giving them certain buffs toward these activities.
	
# Online Priorities:

# Maintenance:

## - Calendar Plugin Maintenance:

###### *Calendar Plugin* so far has ran into numerous problems, spitting these out in the console from time to time. These problems will be detailed in the below list, and also listed in paragraph-form. Calendar Plugin floods the console with messages that are trivial, and not alarming in nature. These must be removed with all due speed. Furthermore, Calendar Plugin has yet to upload a dedicated GUI which may be pushed out and used in conjunction by other plugins.
- **Calendar Plugin** must have an updated API which can be pushed ut to other plugins and used in accordance, as to make developing and maintaining these plugins more accessible and streamlined.
- **Calendar Plugin** must be cleaned up of all further messages relating to **Console**, unless these errors do indeed prove fatal.

## Individual Bulletins:

### Tyler: 
> ### Priorities:

----------
### Rolling Plugin [Easy]:
> ###### The Rolling Plugin is a plugin for Minecraft 1.12.2 that will enhance roleplay and combat capabilities by allowing each player to randomly roll. This is done via a pseudo-random algorithm that has specified both a `min` and a `max`. This will also come out with an API that will use the designated variable `$ph.ro` in order to streamline processes. The rolling plugin will output via either public or private chat via a designated Towny Channel which is up to the individual player.

### xXRed_MinerXx: 

> ### Priorities:

----------
### Knowledge Trees [Hard] (Individual):
> ###### Knowledge Trees [Individual] is a plugin that will allocate dynamic values for each individual player and will have multiple settings avaliable to be changed that are accessible and placed into a config file. This config file will also have documentation uploaded in markdown `.md` format to GitHub, [here](#). This is to be done via a pull request.

### Oinky: 

> ### Priorities: 

----------
### Character Cards [Easy]:
> ###### Character Cards is a plugin that will and must be configured with a workable API, API variable being `$ph.cc` global that may be used in coordination with other plugins. Character Cards are dynamic descriptions a given player  

### IncogniStructura: 
> ### Priorities:

----------
### Interactive Dynmap [Online]:
> ###### Interactive Dynmap is an online site viewed [here](http://www.editey.com/preview/1mUnoMVzUnZCvarQ_yx7VHTHLk6Lk88P9/index.html?pe=incognistructura@gmail.com), thatis not to be confused with the main *Imperium* Game map. It is currently a work-in-progress and not close to finishing. It is expected to need additional help sometime later on in the development stage, likely from digital artists.

### Configuration Files [Server]:
> ###### Configuration Files must be constantly maintained through the FTP file client, and will be vastly expanded and improved upon in order to make sure that the quality of the Minecraft Server *Persistent History* is maintained and held to a quality that players can trust. This is mainly managed by Incogni, however, other developers may be able to change configuration files themselves as well.

### Pex [Server]:
> ###### Pex config files have already been completed, however a couple more ranks such as *Film Maker* and *RP Advocate* may be added in the future. Pex will also have to be built in into the character plugin, as it will be able to give players their rank as well as prefix in order to denote to other fellow Persistent Historians what their rank in the server is. The hierarchy is as follows: 
> > **Slave, Serf, Peasant, Craftsman, Lord, Knight, Count, Duke, Bishop, Cardinal, King, Emperor; for non-donators. For Donators: DonatorSlave, DonatorSerf, DonatorPeasant, DonatorCraftsman, DonatorLord, DonatorKnight, DonatorCount, DonatorDuke, DonatorBishop, DonatorCardinal, DonatorKing, and DonatorEmperor are the main ranks. These must be built in to the main *Character Cards* GUI.**
