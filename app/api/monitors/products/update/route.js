import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../../../config/firebase";
import { NextResponse } from 'next/server';

export async function POST(req, res) {
	let response = null;

    const { data, pid, type } = await req.json()

    if (!data || !pid || !type) return;

	try {
        const updatedProductRef = doc(db, "products", pid)

		switch (type) {
			case 'status':
				await updateDoc(updatedProductRef, {status: data})
				break;
			case 'new':
				await updateDoc(updatedProductRef, {new: data})
				break;
		}

		response = { status: 200, message: 'Product Updated' };
	} catch (error) {
		response = error
	}

	return NextResponse.json(response);
}

