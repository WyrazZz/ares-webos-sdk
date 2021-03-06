var ilib = require('enyo-ilib');
var Spotlight = require('spotlight');
var kind = require('enyo/kind');
var VideoPlayer = require('moonstone-extra/VideoPlayer'),
    VideoInfoBackground = require('moonstone-extra/VideoInfoBackground'),
    VideoInfoHeader = require('moonstone-extra/VideoInfoHeader'),
    ChannelInfo = require('moonstone-extra/ChannelInfo'),
    IconButton = require('moonstone/IconButton'),
    Item = require('moonstone/Item'),
    Panels = require('moonstone-extra/Panels'),
    Clock = require('moonstone/Clock'),
    ToggleItem = require('moonstone/ToggleItem'); 

module.exports = kind({
	name: "myapp.MainView",
	classes: "moon enyo-fit enyo-unselectable",
	components: [
        {name: "player", kind: VideoPlayer, src: "http://media.w3.org/2010/05/bunny/movie.mp4", poster: "assets/video-poster.png", autoplay: true, infoComponents: [
			{kind: VideoInfoBackground, orient: "left", background: true, fit: true, components: [
				{
					kind: ChannelInfo,
					channelNo: "13",
					channelName: "AMC",
					classes: "moon-2h", 
					components: [
						{content: "3D"},
						{content: "Live"},
						{content: "REC 08:22", classes: "moon-video-player-info-redicon "}
					]
				},
				{
					kind: VideoInfoHeader,
					title: "Downton Abbey - Extra Title",
					subTitle: "Mon June 21, 7:00 - 8:00pm",
					subSubTitle: "R - TV 14, V, L, SC",
					description: "The series, set in the Youkshire country estate of Downton Abbey, depicts the lives of the aristocratic Crawley famiry and"
				}
			]},
			{kind: VideoInfoBackground, orient: "right", background: true, components: [
				{kind:Clock}
			]}
		], components: [
			{kind: IconButton, src: "$lib/moonstone/images/video-player/icon-placeholder.png"},
			{kind: IconButton, src: "$lib/moonstone/images/video-player/icon-placeholder.png"},
			{kind: IconButton, src: "$lib/moonstone/images/video-player/icon-placeholder.png"},
			{kind: IconButton, src: "$lib/moonstone/images/video-player/icon-placeholder.png"},
			{kind: IconButton, src: "$lib/moonstone/images/video-player/icon-placeholder.png"},
			{kind: IconButton, src: "$lib/moonstone/images/video-player/icon-placeholder.png"},
			{kind: IconButton, src: "$lib/moonstone/images/video-player/icon-placeholder.png"},
			{kind: IconButton, src: "$lib/moonstone/images/video-player/icon-placeholder.png"},
			{kind: IconButton, src: "$lib/moonstone/images/video-player/icon-placeholder.png"},
			{kind: IconButton, src: "$lib/moonstone/images/video-player/icon-placeholder.png"}
		]},
		{name: "panels", kind: Panels, pattern: "activity", classes: "enyo-fit", useHandle: true, components: [
			{title: "First Panel", classes: "moon-7h", titleBelow:"Sub-title", subTitleBelow:"Sub-sub title", components: [
				{kind: Item, content: "Item One", ontap: "next1"},
				{kind: Item, content: "Item Two", ontap: "next1"},
				{kind: Item, content: "Item Three", ontap: "next1"},
				{kind: Item, content: "Item Four", ontap: "next1"},
				{kind: ToggleItem, content: "Show/Hide Side Handle", checked: true,  onchange: "handleShowingChanged"}
			]},
			{title: "Second Panel", classes: "moon-7h",
				joinToPrev: true, components: [
				{kind: Item, content: "Item One", ontap: "next2"},
				{kind: Item, content: "Item Two", ontap: "next2"},
				{kind: Item, content: "Item Three", ontap: "next2"},
				{kind: Item, content: "Item Four", ontap: "next2"},
				{kind: Item, content: "Item Five", ontap: "next2"}
			]},
			{title: "Third Panel", classes: "moon-7h", titleBelow:"Sub-title", subTitleBelow:"Sub-sub title", components: [
				{kind: Item, content: "Item One", ontap: "next3"},
				{kind: Item, content: "Item Two", ontap: "next3"},
				{kind: Item, content: "Item Three", ontap: "next3"},
				{kind: Item, content: "Item Four", ontap: "next3"},
				{kind: Item, content: "Item Five", ontap: "next3"}
			]},
			{title: "Fourth", classes: "moon-7h", joinToPrev: true, titleBelow:"Sub-title", subTitleBelow:"Sub-sub title", components: [
				{kind: Item, content: "Item One", ontap: "next4"},
				{kind: Item, content: "Item Two", ontap: "next4"},
				{kind: Item, content: "Item Three", ontap: "next4"},
				{kind: Item, content: "Item Four", ontap: "next4"},
				{kind: Item, content: "Item Five", ontap: "next4"}
			]},
			{title: "Fifth", classes: "moon-7h", titleBelow:"Sub-title", subTitleBelow:"Sub-sub title", components: [
				{kind: Item, content: "Item One", ontap: "next5"},
				{kind: Item, content: "Item Two", ontap: "next5"},
				{kind: Item, content: "Item Three", ontap: "next5"},
				{kind: Item, content: "Item Four", ontap: "next5"},
				{kind: Item, content: "Item Five", ontap: "next5"}
			]},
			{title: "Sixth", classes: "moon-7h", joinToPrev: true, titleBelow:"Sub-title", subTitleBelow:"Sub-sub title", components: [
				{kind: Item, content: "Item One", ontap: "next6"},
				{kind: Item, content: "Item Two", ontap: "next6"},
				{kind: Item, content: "Item Three", ontap: "next6"},
				{kind: Item, content: "Item Four", ontap: "next6"},
				{kind: Item, content: "Item Five", ontap: "next6"}
			]},
			{title: "Seventh", classes: "moon-7h", titleBelow:"Sub-title", subTitleBelow:"Sub-sub title", components: [
				{kind: Item, content: "Item One"},
				{kind: Item, content: "Item Two"},
				{kind: Item, content: "Item Three"},
				{kind: Item, content: "Item Four"},
				{kind: Item, content: "Item Five"}
			]}
		]}
	],
	rendered: function() {
		this.inherited(arguments);
		Spotlight.spot(this.$.panels);
	},
	// custom next handler for each panel to avoid switching from one active panel
	// to another with no visible change for demo
	next1: function(inSender, inEvent) {
		this.$.panels.setIndex(2);
		return true;
	},
	next2: function(inSender, inEvent) {
		this.$.panels.setIndex(2);
		return true;
	},
	next3: function(inSender, inEvent) {
		this.$.panels.setIndex(5);
		return true;
	},
	next4: function(inSender, inEvent) {
		this.$.panels.setIndex(5);
		return true;
	},
	next5: function(inSender, inEvent) {
		this.$.panels.setIndex(7);
		return true;
	},
	next6: function(inSender, inEvent) {
		this.$.panels.setIndex(7);
		return true;
	},
	handleShowingChanged: function(inSender, inEvent) {
		this.$.panels.setHandleShowing(inSender.getChecked());
	}
});
