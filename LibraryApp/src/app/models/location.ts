module LibraryApp.Models {

    export class Location {
        
        public librarySection: string;
        public shelfLocation: string;
        public shelf: number;

		get description(): string {
			return "In " + this.librarySection + " " + this.shelfLocation + " at shelf " + this.shelf;
		}
    }

}