module LibraryApp.Models {

    export class Location {
        
    	private _librarySection: string; 

        get librarySection(): string {
			return this._librarySection;
		}

		set librarySection(value: string) {
			this._librarySection = value
		}
		
    }

}