import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../../config/firebase";
import { NextResponse } from 'next/server';

export async function POST(req, res) {
	let usersList = [];
	let response = null;

	try {
		const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
            doc.id, " => ", usersList.push(doc.data());
        });

		response = usersList;
	} catch (error) {
		response = error
	}

	return NextResponse.json(response);
}