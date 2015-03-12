module LibraryApp.Models {

	export class OverdueBook {

		public book: LibraryApp.Models.Book;
		public customer: LibraryApp.Models.Customer;
		public duration: number;
		public rentedTimestamp: string;
		public isReturned: boolean;
		public isOverdue: boolean;
		public expectedBackInDays: number;
		public expectedBackDate: string;
		public expectedBackDateText: string;
		public expectedBackInDaysText: string;
	}

	export class Customer {

		public firstname: string;
		public lastname: string;
		public address: string
		public email: string;
		public phone: number;
	}
}