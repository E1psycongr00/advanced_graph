import { App } from 'obsidian';
import { AdvancedGraphSettings } from '../settings/settings';

export class GraphManager {
    constructor(
        private app: App,
        private settings: AdvancedGraphSettings
    ) {}

    createGraphView() {
        const leaf = this.app.workspace.getLeaf('tab');
        leaf.setViewState({
            type: "graph",
            state: {
                options: {
                    colorGroups: [],
                    colors: {
                        edges: this.settings.lineColor,
                    },
                    lineSizeMultiplier: this.settings.lineWidth,
                    opacity: this.settings.lineOpacity
                }
            }
        });
    }

    updateSettings(settings: AdvancedGraphSettings) {
        this.settings = settings;
    }
} 
