import { App, PluginSettingTab, Setting } from 'obsidian';
import AdvancedGraphPlugin from '../main';

export class AdvancedGraphSettingTab extends PluginSettingTab {
    constructor(app: App, private plugin: AdvancedGraphPlugin) {
        super(app, plugin);
    }

    display(): void {
        const {containerEl} = this;
        containerEl.empty();

        new Setting(containerEl)
            .setName('간선 색상')
            .setDesc('그래프의 간선 색상을 설정합니다')
            .addText(text => text
                .setPlaceholder('#23b862')
                .setValue(this.plugin.settings.lineColor)
                .onChange(async (value) => {
                    this.plugin.settings.lineColor = value;
                    await this.plugin.saveSettings();
                }));

        new Setting(containerEl)
            .setName('간선 두께')
            .setDesc('그래프의 간선 두께를 설정합니다')
            .addSlider(slider => slider
                .setLimits(1, 5, 0.5)
                .setValue(this.plugin.settings.lineWidth)
                .setDynamicTooltip()
                .onChange(async (value) => {
                    this.plugin.settings.lineWidth = value;
                    await this.plugin.saveSettings();
                }));

        new Setting(containerEl)
            .setName('간선 투명도')
            .setDesc('그래프의 간선 투명도를 설정합니다')
            .addSlider(slider => slider
                .setLimits(0, 1, 0.1)
                .setValue(this.plugin.settings.lineOpacity)
                .setDynamicTooltip()
                .onChange(async (value) => {
                    this.plugin.settings.lineOpacity = value;
                    await this.plugin.saveSettings();
                }));
    }
} 
