var HTML_GENERATOR;
(function (HTML_GENERATOR) {
    var HTMLTemplate = (function () {
        function HTMLTemplate() {
        }
        HTMLTemplate.prototype.li = function () {
            return document.createElement('li');
        };
        HTMLTemplate.prototype.div = function () {
            return document.createElement('div');
        };
        HTMLTemplate.prototype.img = function () {
            return document.createElement('img');
        };
        HTMLTemplate.prototype.text = function (t) {
            return document.createTextNode(t);
        };
        return HTMLTemplate;
    })();
    HTML_GENERATOR.HTMLTemplate = HTMLTemplate;
})(HTML_GENERATOR || (HTML_GENERATOR = {}));
/// <reference path="./HTML_GENERATOR.ts" />
var HTMLTemplate = HTML_GENERATOR.HTMLTemplate;

/**
* トーク風UI　トーク追加用クラス
*
* @param i トーク数カウント
* @param temp HTMLTemplateオブジェクト保持
* @param target 挿入対象ID名
*/
var TookCreater = (function () {
    function TookCreater(id) {
        this.temp = new HTMLTemplate;
        this.target = id;
    }
    /**
    * システム側（ユーザではない側）トーク生成
    *
    * @param name 発言者名
    * @param t 発言内容
    */
    TookCreater.prototype.systemTook = function (name, t) {
        TookCreater.i = TookCreater.i + 1;
        var temp = this.temp;

        //要素組み立て
        var systemMessage = temp.li();
        systemMessage.setAttribute('id', 'Message' + TookCreater.i);
        systemMessage.classList.add('systemMessage');
        var tookIcon = temp.div();
        tookIcon.classList.add('tookIcon');
        var iconImg = temp.img();
        iconImg.src = "./img/logo.png";
        var tookContent = temp.div();
        tookContent.classList.add('tookContent');
        var tookUser = temp.div();
        tookUser.classList.add('tookUser');
        var userName = temp.text(name);
        var tookBody = temp.div();
        tookBody.classList.add('tookBody');
        var tookText = temp.text(t);

        systemMessage.appendChild(tookIcon);
        tookIcon.appendChild(iconImg);
        systemMessage.appendChild(tookContent);
        tookContent.appendChild(tookUser);
        tookUser.appendChild(userName);
        tookContent.appendChild(tookBody);
        tookBody.appendChild(tookText);

        document.getElementById(this.target).appendChild(systemMessage);
    };

    /**
    * ユーザ側トーク生成用
    *
    * @param t 発言内容
    */
    TookCreater.prototype.userTook = function (t) {
        TookCreater.i = TookCreater.i + 1;
        var temp = this.temp;

        //要素組み立て
        var userMessage = temp.li();
        userMessage.setAttribute('id', 'Message' + TookCreater.i);
        userMessage.classList.add('userMessage');
        var tookContent = temp.div();
        tookContent.classList.add('tookContent');
        var tookBody = temp.div();
        tookBody.classList.add('tookBody');
        var tookText = temp.text(t);

        userMessage.appendChild(tookContent);
        tookContent.appendChild(tookBody);
        tookBody.appendChild(tookText);

        document.getElementById(this.target).appendChild(userMessage);
    };
    TookCreater.i = 0;
    return TookCreater;
})();

window.onload = function () {
    var tok = new TookCreater("TookList");
    tok.systemTook("タス君", "新しいタスクですね？");
    tok.userTook("おうともよ");
};
