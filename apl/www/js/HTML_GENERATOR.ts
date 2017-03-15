module HTML_GENERATOR{
	export class HTMLTemplate{
		li() {
			return document.createElement('li');
		}
		div() {
			return document.createElement('div');
		}
		img() {
			return document.createElement('img');
		}
		text(t: string){
			return document.createTextNode(t);
		}
	}
}