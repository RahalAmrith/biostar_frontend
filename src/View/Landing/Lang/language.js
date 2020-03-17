class Language {

    constructor() {
        this.english = require('./english.json');
        this.chines = require('./chines.json');
    }

    getcontent(lan) {
        var olnag = null;
        switch (lan) {
            case 'EN': olnag = this.english;
                break;
            case 'CN': olnag = this.chines;
                break;
            default: olnag = this.english;

        }

        return olnag;
    }
}

var Obj = new Language();

export default Obj;