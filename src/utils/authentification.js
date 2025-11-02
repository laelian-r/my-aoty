import db from "../data/db.json";

export function getUserById(id) {
	return db.users.find((user) => user.id === id);
}

export function getUserByEmail(email) {
	return db.users.find((user) => user.email === email);
}
