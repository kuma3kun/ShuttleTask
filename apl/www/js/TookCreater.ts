/// <reference path="./HTML_GENERATOR.ts" />
import HTMLTemplate = HTML_GENERATOR.HTMLTemplate;

/**
 * トーク風UI　トーク追加用クラス
 *
 * @param i トーク数カウント
 * @param temp HTMLTemplateオブジェクト保持
 * @param target 挿入対象ID名
 */
class TookCreater {
	static i = 0 ;
	private temp = new HTMLTemplate;
	private target :string ;

	constructor(id: string){
		this.target = id;
	}

	/**
	 * システム側（ユーザではない側）トーク生成
	 *
	 * @param name 発言者名
	 * @param t 発言内容
	 */
	systemTook(name: string , t: string) :void {
		TookCreater.i = TookCreater.i + 1;
		var temp = this.temp;

		//要素組み立て
		var systemMessage = temp.li();
		systemMessage.setAttribute('id','Message' + TookCreater.i);
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
	}

	/**
	 * ユーザ側トーク生成用
	 *
	 * @param t 発言内容
	 */
	userTook(t: string) :void{
		TookCreater.i = TookCreater.i + 1;
		var temp = this.temp;

		//要素組み立て
		var userMessage = temp.li();
		userMessage.setAttribute('id','Message' + TookCreater.i);
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
	}
	
	/**
	 * ユーザ側スタンプ生成用
	 *
	 * @param t 発言内容
	 */
	userTook(t: Array) :void{
		TookCreater.i = TookCreater.i + 1;
		var temp = this.temp;
		var tookText[];

		//要素組み立て
		var userMessage = temp.li();
		userMessage.setAttribute('id','Message' + TookCreater.i);
		userMessage.classList.add('userMessage');
		var tookContent = temp.div();
		tookContent.classList.add('tookContent');
		var tookBody = temp.div();
		tookBody.classList.add('tookBody');
		
		for()


		userMessage.appendChild(tookContent);
		tookContent.appendChild(tookBody);
		tookBody.appendChild(tookText);

		document.getElementById(this.target).appendChild(userMessage);
	}
}


window.onload = function(){
	var tok = new TookCreater("TookList");
	tok.systemTook("タス君","新しいタスクですね？");
	tok.userTook("おうともよ");
};
