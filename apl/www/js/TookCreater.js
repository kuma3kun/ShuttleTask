var TookCreater = (function () {
    function TookCreater(id) {
        this.tookBoard = document.getElementById("TookList");
        alert(id);
    }
    TookCreater.prototype.userTook = function (t) {
        alert(this.tookBoard);
        document.getElementById("TookList").innerHTML = "<li class='systemMessage'><div class='tookIcon'><img src='./img/logo.png' /></div><div class='tookContent'><div class='tookUser'>タス君</div><div class='tookBody'>新規タスクですね？<br />タスクの種類を選択してください</div></div></li>";
    };
    return TookCreater;
})();

var tok = new TookCreater("TookList");

tok.userTook("あ");
