import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../../config/firebase";
import { NextResponse } from 'next/server';

export async function GET(req, res) {
	let response = null;
	try {
		let productsList = [];

		const q = query(collection(db, "products"), where("featured", "==", "featured_yes"));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            doc.id, " => ", productsList.push(doc.data());
        });
		response = productsList;
	} catch (error) {
		response = {success: false, message: "Could not get products list"}
	}

	return NextResponse.json(response);
}