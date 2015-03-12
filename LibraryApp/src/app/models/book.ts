module LibraryApp.Models {
    
    export class Book {
        
        private _id: string;
        private _title: string;
        private _author: string; 

        get id(): string {
			return this._id;
		}

		set id(value: string) {
			this._id = value
		}

		get title(): string {
			return this._title;
		}

		set title(value: string) {
			this._title = value
		}

		get author(): string {
			return this._author;
		}

		set author(value: string) {
			this._author = value
		}
		
    }

}