import { Plugin } from "obsidian";
import { AdvancedGraphSettings, DEFAULT_SETTINGS } from "./settings/settings";
import { AdvancedGraphSettingTab } from "./settings/SettingTab";
import { GraphManager } from "./graph/GraphManager";

export default class AdvancedGraphPlugin extends Plugin {
	settings: AdvancedGraphSettings;
	private graphManager: GraphManager;

	async onload() {
		await this.loadSettings();

		this.graphManager = new GraphManager(this.app, this.settings);

		// 리본 아이콘 추가
		this.addRibbonIcon("dice", "Show Graph", () => {
			this.graphManager.createGraphView();
		});

		// 설정 탭 추가
		this.addSettingTab(new AdvancedGraphSettingTab(this.app, this));
	}

	async loadSettings() {
		this.settings = Object.assign(
			{},
			DEFAULT_SETTINGS,
			await this.loadData()
		);
	}

	async saveSettings() {
		await this.saveData(this.settings);
		this.graphManager.updateSettings(this.settings);
	}
}
