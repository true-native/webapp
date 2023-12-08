import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../../../config/firebase";
import { NextResponse } from 'next/server';
export async function DELETE(request) {
	const { searchParams } = new URL(request.url);
	const uid = searchParams.get("uid") || "";
	let response = null;

	if (!uid) return NextResponse.json({success: false, message: "UID Does not exist"})

	try {
		const userDocRef = doc(db, "users", uid)
		await deleteDoc(userDocRef)
		response = {success: true, message: 'User deleted successfully'}
	} catch (error) {
		response = {success: false, message: 'Could not delete user'}
	}

	return NextResponse.json(response)
}