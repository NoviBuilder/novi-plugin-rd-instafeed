const React = novi.react.React;
import Trigger from "./editor/Trigger";
import Body from "./editor/Body";
const Icons = novi.ui.icons;
const messages = novi.language.getDataByKey("novi-plugin-rd-instafeed");
const EditorItem = {
    trigger: <Trigger/>,
    tooltip: messages.editor.tooltip,
    header: [Icons.ICON_INSTAGRAM, <span>{messages.editor.header}</span>],
    body: [<Body/>],
    closeIcon: "submit",
    title: messages.editor.title,
    onSubmit: onSubmitAction,
    width: 294,
    height: 170
};

export default EditorItem;

function onSubmitAction(headerStates, bodyStates) {
    let state = bodyStates[0];

    switch (state.type){
        case "Account":
            if( !state.name || state.initName === state.name ) return;
            novi.element.setAttribute(state.element, "data-instafeed-user", state.name);
            if (state.initType !== state.type){
                novi.element.removeAttribute(state.element, "data-instafeed-tagname");
                novi.element.setAttribute(state.element, "data-instafeed-get", "user");
            }
            novi.page.forceUpdate();
            break;

        default:
            if( !state.tagName || state.initTagName === state.tagName ) return;
            novi.element.setAttribute(state.element, "data-instafeed-tagname", state.tagName);
            if (state.initType !== state.type){
                novi.element.removeAttribute(state.element, "data-instafeed-user");
                novi.element.setAttribute(state.element, "data-instafeed-get", "tagged");
            }
            novi.page.forceUpdate();
            break;
    }
}