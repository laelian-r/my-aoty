import dbData from "../data/db.json";

function initializeUsers() {
	const storedUsers = localStorage.getItem("users");
	if (storedUsers) {
		return JSON.parse(storedUsers);
	}
	localStorage.setItem("users", JSON.stringify(dbData.users));
	return dbData.users;
}

function initializeFolders() {
	const storedFolders = localStorage.getItem("folders");
	if (storedFolders) {
		return JSON.parse(storedFolders);
	}
	localStorage.setItem("folders", JSON.stringify(dbData.folders));
	return dbData.folders;
}

function getUsers() {
	return initializeUsers();
}

export function getFolderById(folderId) {
	const folders = getFolders();
	return folders.find((folder) => folder.id === folderId);
}

function getFolders() {
	return initializeFolders();
}

function saveUsers(users) {
	localStorage.setItem("users", JSON.stringify(users));
}

function saveFolders(folders) {
	localStorage.setItem("folders", JSON.stringify(folders));
}

export function getUserById(id) {
	const users = getUsers();
	return users.find((user) => user.id === id);
}

export function getUserByEmail(email) {
	const users = getUsers();
	return users.find((user) => user.email === email);
}

export function createUser(username, email, password) {
	const users = getUsers();

	if (users.find((u) => u.email === email)) {
		throw new Error("Cet email est déjà utilisé");
	}

	const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;

	const newUser = {
		id: newId,
		username,
		email,
		password,
	};

	users.push(newUser);
	saveUsers(users);

	return newUser;
}

export function getFoldersByUserId(userId) {
	const folders = getFolders();
	return folders.filter((folder) => folder.id_user === userId);
}
