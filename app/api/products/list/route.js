import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../../config/firebase";
import { NextResponse } from 'next/server';

export async function GET(req, res) {
	const { searchParams } = new URL(req.url);
	const prodCategory = searchParams.get("category") || "";
	let productsList = [];
	let response = null;

	try {
		if (!prodCategory) {
			const querySnapshot = await getDocs(collection(db, "products"));
			querySnapshot.forEach((doc) => {
				doc.id, " => ", productsList.push(doc.data());
			});
		} else {
			const q = query(collection(db, "products"));

			const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
				doc.id, " => ", productsList.push(doc.data());
			});
		}
		response = productsList;
	} catch (error) {
		response = error
	}

	return NextResponse.json(response);
}

