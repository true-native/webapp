import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../../../config/firebase";
import { NextResponse } from 'next/server';
export async function DELETE(request) {
	const { searchParams } = new URL(request.url);
	const pid = searchParams.get("pid") || "";
	let response = null;

	if (!pid) return NextResponse.json({success: false, message: "PID Does not exist"})

	try {
		const productDocRef = doc(db, "products", pid)
		await deleteDoc(productDocRef)
		response = {success: true, message: 'Product deleted successfully'}
	} catch (error) {
		response = {success: false, message: 'Could not delete product'}
	}

	return NextResponse.json(response)
}

