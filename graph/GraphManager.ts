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
        }).then(() => {
            // 생성된 그래프 뷰로 포커스 이동
            this.app.workspace.setActiveLeaf(leaf, { focus: true });
        });
    }

    updateSettings(settings: AdvancedGraphSettings) {
        this.settings = settings;
    }
} 
