/*
This is a Script/ScriptUI Template using the Duduf After Effects Framework (DuAEF).
The script can be launched both from ScriptUI Panels or the File/Scripts/Run Script... menu.
*/

//encapsulate the script in a function to avoid global variables
(function (thisObj) {

	//================
	#include DuAEF.jsxinc
	DuAEF.init("Your Script Name", "1.0.2");

	DuAEF.forumURL = 'https://forum.rainboxlab.org';
    DuAEF.chatURL = 'http://chat.rainboxlab.org';
    DuAEF.bugReportURL = 'https://github.com/Rainbox-dev/DuAEF_Duik/issues/new?template=bug_report.md';
    DuAEF.featureRequestURL = 'https://github.com/Rainbox-dev/DuAEF_Duik/issues/new?template=feature_request.md';
    DuAEF.aboutURL = 'https://rainboxlab.org/tools/duik/';
    DuAEF.scriptAbout = 'The Duduf After Effects Framework\nDeveloped by Nicolas Dufresne and Contributors.\n\nLicensed under the GNU General Public License v3.';
    DuAEF.newsServer = 'rainboxprod.net'
	DuAEF.newsArgs = 'wp/?call_custom_simple_rss=1&csrp_show_meta=0&csrp_cat=20';

	// ================ FUNCTIONS =============
	//MAIN


	//UI EVENTS


	// _______ UI SETUP _______
	var ui = DuAEF.DuScriptUI.createUI(thisObj);

	// ============ UI CONTENT =================
	var contents = ui.contents;
	DuAEF.DuScriptUI.addStaticText(contents, "Welcome to " + DuAEF.scriptName);


	//Show UI
	DuAEF.DuScriptUI.showUI(ui);
	DuAEF.enterRunTime();
})(this);
