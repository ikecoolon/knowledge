/**
 * 建造者模式
 * @constructor
 */
function Editor() {
    this.initer = new InitHTML();
    this.fontControll = new FontControll();
    this.stateControll = new StateControll();
}

}

function InitHTML() {

}

InitHTML.prototype.initStyle = function () {

};
InitHTML.prototype.renderDom = function () {

};

function FontControll() {

}

FontControll.prototype.changColor = function () {

};
FontControll.prototype.changFontSize = function () {
};


function StateControll() {
    this.state = [];
    this.nowState = 0;
}

StateControll.prototype.savState = function () {

};
StateControll.prototype.stateBack = function () {
    let state = this.state[this.nowState - 1];
    this.fontControll.changColor(state.color);
    this.fontControll.changFontSize(state.fontSize);

};

StateControll.prototype.stateGo = function () {

};

