import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../../config/firebase";
import { NextResponse } from 'next/server';

export async function POST(req, res) {
	let productsList = [];
	let response = null;

    const { user } = await req.json()

    if (!user) return NextResponse.json({ status: 500, message: 'Not authorized' });

	try {
		const querySnapshot = await getDocs(collection(db, "products"));
        querySnapshot.forEach((doc) => {
            doc.id, " => ", productsList.push(doc.data());
        });

		response = productsList;
	} catch (error) {
		response = error
	}

	return NextResponse.json(response);
}

