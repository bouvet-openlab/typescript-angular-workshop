module LibraryApp.Models {

    export class Location {
        
        public librarySection: string;
        public shelfSection: string;
        public shelf: number;

		get description(): string {
			return "In " + this.librarySection + " " + this.shelfSection + " at shelf " + this.shelf;
		}
    }

}