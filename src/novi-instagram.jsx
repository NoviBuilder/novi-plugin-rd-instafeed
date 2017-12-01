import InstagramEditor from "./InstagramEditor";
const React = novi.react.React;
import InstagramSettings from "./InstagramSettings";
import * as ExcerptFunction from "./ExcerptFunction";
const Language = novi.language;
const Plugin = {
    name: "novi-plugin-rd-instafeed",
    title: "Novi RD Instagram Feed",
    description: "Novi RD Instagram Feed description",
    version: "1.0.2",
    dependencies: {
      novi: "0.8.6"
    },
    defaults: {
        querySelector: ".instafeed",
    },
    ui: {
        editor: [InstagramEditor],
        settings: <InstagramSettings />,
    },
    excerpt : ExcerptFunction.validInstagramElement
};
function onLanguageChange(plugin){
    const messages = Language.getDataByKey("novi-plugin-rd-instafeed");
    plugin.ui.editor[0].title = messages.editor.title;
    plugin.ui.editor[0].tooltip = messages.editor.tooltip;
    plugin.ui.editor[0].header[1] = <span>{messages.editor.header}</span>;
    return plugin;
}
novi.plugins.register(Plugin);