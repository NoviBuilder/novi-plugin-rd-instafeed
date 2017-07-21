import InstagramEditor from "./InstagramEditor";
const React = novi.react.React;
import InstagramSettings from "./InstagramSettings";
import * as ExcerptFunction from "./ExcerptFunction";

const Plugin = {
    name: "novi-plugin-rd-instafeed",
    title: "Novi RD Instagram Feed",
    description: "Novi RD Instagram Feed description",
    version: "1.0.1",
    defaults: {
        querySelector: ".instafeed",
    },
    ui: {
        editor: [InstagramEditor],
        settings: <InstagramSettings />,
    },
    excerpt : ExcerptFunction.validInstagramElement
};

novi.plugins.register(Plugin);