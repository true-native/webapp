import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../../../config/firebase";
import { NextResponse } from 'next/server';

export async function POST(req, res) {
	let response = null;

    const { status, pid } = await req.json()

    if (!status || !pid) return;

	try {
        const updatedProductRef = doc(db, "products", pid)
		await updateDoc(updatedProductRef, {status: status})

		response = { status: 200, message: 'Status Updated' };
	} catch (error) {
		response = error
	}

	return NextResponse.json(response);
}

