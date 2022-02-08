export interface Users {
	_id: string;
	age: number;
	company: string;
	email: string;
	eyeColor: string;
	index: number;
	name: string;
	phone: string;
	picture: string;
	friends: Users[];
}
